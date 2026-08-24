// ============================================================
// APP — La Fortuna Trip Companion
// ============================================================

const STORAGE_KEY = "cr-trip-v1";
const state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { pack: {}, journal: {}, activeDay: TRIP.days[0].id, activeJournalDay: TRIP.days[0].id, foodFilter: "All" };
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("is-visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove("is-visible"), 1600);
}

// ============================================================
// VIEW ROUTING
// ============================================================
function initTabBar() {
  document.querySelectorAll(".tab-bar__item").forEach(btn => {
    btn.addEventListener("click", () => switchView(btn.dataset.view));
  });
}

function switchView(view) {
  document.querySelectorAll(".view").forEach(v => v.hidden = v.dataset.view !== view);
  document.querySelectorAll(".tab-bar__item").forEach(b => b.classList.toggle("is-active", b.dataset.view === view));
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// ============================================================
// INSTRUMENT STRIP: time / weather / fx / countdown
// ============================================================
function tickClock() {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: TRIP.meta.timezone, hour: "2-digit", minute: "2-digit", hour12: true
  });
  const dfmt = new Intl.DateTimeFormat("en-US", {
    timeZone: TRIP.meta.timezone, weekday: "short", month: "short", day: "numeric"
  });
  document.getElementById("localTime").textContent = fmt.format(now);
  document.getElementById("localDate").textContent = dfmt.format(now) + " · CST";
  updateCountdown(now);
}

function updateCountdown(now) {
  const start = new Date(TRIP.meta.dateStart + "T00:00:00-06:00");
  const end = new Date(TRIP.meta.dateEnd + "T23:59:59-06:00");
  const label = document.getElementById("countdownLabel");
  const value = document.getElementById("countdownValue");
  const sub = document.getElementById("countdownSub");

  if (now < start) {
    const days = Math.ceil((start - now) / 86400000);
    label.textContent = "Trip starts in";
    value.textContent = days + (days === 1 ? " day" : " days");
    sub.textContent = "Aug 26 – 29";
  } else if (now >= start && now <= end) {
    const dayIndex = Math.floor((now - start) / 86400000);
    const day = TRIP.days[Math.min(dayIndex, TRIP.days.length - 1)];
    label.textContent = "You're here";
    value.textContent = "Day " + (dayIndex + 1) + "/4";
    sub.textContent = day ? day.title : "";
  } else {
    label.textContent = "Trip status";
    value.textContent = "Complete";
    sub.textContent = "¡Pura vida!";
  }
}

async function fetchWeather() {
  const tempEl = document.getElementById("weatherTemp");
  const descEl = document.getElementById("weatherDesc");
  try {
    // La Fortuna de San Carlos approx coords
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=10.4713&longitude=-84.6428&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=America%2FCosta_Rica");
    const data = await res.json();
    const t = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;
    tempEl.textContent = t + "°F";
    descEl.textContent = weatherCodeToText(code);
  } catch (e) {
    tempEl.textContent = "84°F";
    descEl.textContent = "typical for Aug";
  }
}

function weatherCodeToText(code) {
  const map = {
    0: "clear", 1: "mostly clear", 2: "partly cloudy", 3: "overcast",
    45: "foggy", 48: "foggy", 51: "light drizzle", 53: "drizzle", 55: "drizzle",
    61: "light rain", 63: "rain", 65: "heavy rain", 80: "showers", 81: "showers",
    82: "heavy showers", 95: "thunderstorm", 96: "thunderstorm", 99: "thunderstorm"
  };
  return map[code] || "green season";
}

async function fetchFx() {
  const rateEl = document.getElementById("fxRate");
  try {
    const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await res.json();
    const rate = data.rates.CRC;
    rateEl.textContent = "₡" + Math.round(rate).toLocaleString();
    state.fxRate = rate;
    setupConverter(rate);
  } catch (e) {
    rateEl.textContent = "₡~450";
    state.fxRate = 450;
    setupConverter(450);
  }
}

function setupConverter(rate) {
  const usdInput = document.getElementById("usdInput");
  const crcInput = document.getElementById("crcInput");
  crcInput.value = Math.round(usdInput.value * rate).toLocaleString();

  usdInput.addEventListener("input", () => {
    const val = parseFloat(usdInput.value) || 0;
    crcInput.value = Math.round(val * rate).toLocaleString();
  });
  crcInput.addEventListener("input", () => {
    const raw = parseFloat(crcInput.value.replace(/,/g, "")) || 0;
    usdInput.value = (raw / rate).toFixed(2);
  });
}

function initConverterToggle() {
  const toggle = document.getElementById("converterToggle");
  const body = document.getElementById("converterBody");
  toggle.addEventListener("click", () => {
    const open = body.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// ============================================================
// TODAY VIEW
// ============================================================
function renderToday() {
  const now = new Date();
  const start = new Date(TRIP.meta.dateStart + "T00:00:00-06:00");
  const end = new Date(TRIP.meta.dateEnd + "T23:59:59-06:00");
  const card = document.getElementById("todayCard");

  let day, statusText;
  if (now < start) {
    day = TRIP.days[0];
    statusText = "Trip hasn't started — here's your first day when you land.";
  } else if (now > end) {
    day = TRIP.days[TRIP.days.length - 1];
    statusText = "Trip complete — here's a look back at your last day.";
  } else {
    const dayIndex = Math.min(Math.floor((now - start) / 86400000), TRIP.days.length - 1);
    day = TRIP.days[dayIndex];
    statusText = "Here's the plan for today.";
  }

  card.innerHTML = `
    <span class="today-card__icon">${day.icon}</span>
    <div class="today-card__title">${day.title}</div>
    <div class="today-card__desc">${statusText} ${day.blocks.length} blocks planned — first up: <strong>${day.blocks[0].heading}</strong>.</div>
    <button class="today-card__cta" data-goto-day="${day.id}">See full day →</button>
  `;
  card.querySelector("[data-goto-day]").addEventListener("click", () => {
    state.activeDay = day.id;
    switchView("itinerary");
    renderItinerary();
  });

  document.getElementById("calloutStack").innerHTML = TRIP.callouts.map(c => `
    <div class="callout ${c.tag === 'Toddler-critical' ? 'callout--alert' : c.tag === 'Good news' ? 'callout--good' : ''}">
      <div class="callout__top">
        <span class="callout__icon">${c.icon}</span>
        <span class="callout__tag">${c.tag}</span>
      </div>
      <div class="callout__title">${c.title}</div>
      <div class="callout__body">${c.body}</div>
    </div>
  `).join("");

  updatePackProgress();
}

// ============================================================
// ITINERARY VIEW
// ============================================================
function renderItinerary() {
  const tabsEl = document.getElementById("dayTabs");
  tabsEl.innerHTML = TRIP.days.map(d => `
    <button class="day-tab ${d.id === state.activeDay ? 'is-active' : ''}" data-day="${d.id}">
      <span class="day-tab__day">${d.label}</span>
      <span class="day-tab__title">${d.icon} ${d.title}</span>
    </button>
  `).join("");

  tabsEl.querySelectorAll(".day-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeDay = btn.dataset.day;
      saveState();
      renderItinerary();
    });
  });

  const day = TRIP.days.find(d => d.id === state.activeDay);
  const detail = document.getElementById("dayDetail");
  detail.innerHTML = day.blocks.map(block => `
    <div class="day-block">
      <span class="day-block__time">${block.time}</span>
      <div class="day-block__heading">${block.heading}</div>
      ${block.items.map(item => renderPlaceCard(item)).join("")}
    </div>
  `).join("");
}

function renderPlaceCard(item) {
  const isWarn = item.tag && item.tag.toLowerCase().includes("carrier");
  return `
    <div class="place-card">
      <div class="place-card__top">
        <span class="place-card__name">${item.name}</span>
        ${item.rating ? `<span class="place-card__rating">${item.rating}</span>` : ""}
      </div>
      ${item.tag ? `<span class="place-card__tag ${isWarn ? 'place-card__tag--warn' : 'place-card__tag--good'}">${item.tag}</span>` : ""}
      <div class="place-card__note">${item.note}</div>
      <div class="place-card__meta">
        ${item.cost ? metaItem("Cost", item.cost) : ""}
        ${item.cash ? metaItem("Payment", item.cash) : ""}
        ${item.reservation ? metaItem("Reservation", item.reservation) : ""}
        ${item.bestTime ? metaItem("Best time", item.bestTime) : ""}
      </div>
      ${item.map ? `<a class="place-card__map" href="${item.map}" target="_blank" rel="noopener">📍 Open in Google Maps</a>` : ""}
    </div>
  `;
}

function metaItem(label, value) {
  return `<div class="place-card__meta-item"><span class="place-card__meta-label">${label}</span><span class="place-card__meta-value">${value}</span></div>`;
}

// ============================================================
// FOOD VIEW
// ============================================================
function renderFood() {
  const filters = ["All", ...TRIP.foodCategories];
  const filterEl = document.getElementById("foodFilters");
  filterEl.innerHTML = filters.map(f => `
    <button class="filter-chip ${f === state.foodFilter ? 'is-active' : ''}" data-filter="${f}">${f}</button>
  `).join("");
  filterEl.querySelectorAll(".filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.foodFilter = btn.dataset.filter;
      saveState();
      renderFood();
    });
  });

  const items = TRIP.food.filter(f => state.foodFilter === "All" || f.category === state.foodFilter || (f.also && f.also.includes(state.foodFilter)));
  document.getElementById("foodGrid").innerHTML = items.map(f => `
    <div class="place-card">
      <div class="place-card__top">
        <span class="place-card__name">${f.name}</span>
        ${f.rating ? `<span class="place-card__rating">${f.rating}</span>` : ""}
      </div>
      ${f.tag ? `<span class="place-card__tag place-card__tag--good">${f.tag}</span>` : ""}
      <div class="place-card__note">${f.note}</div>
      <div class="place-card__meta">
        ${metaItem("Hours", f.hours)}
        ${metaItem("Cost", f.cost)}
        ${metaItem("Payment", f.cash)}
        ${metaItem("Reservation", f.reservation)}
      </div>
      ${f.map ? `<a class="place-card__map" href="${f.map}" target="_blank" rel="noopener">📍 Open in Google Maps</a>` : ""}
    </div>
  `).join("") || `<p style="color:var(--ink-soft); font-size:13px;">No spots in this category yet.</p>`;
}

// ============================================================
// PACK VIEW
// ============================================================
function renderPack() {
  const container = document.getElementById("packList");
  container.innerHTML = TRIP.packCategories.map((cat, ci) => `
    <div class="pack-category">
      <div class="pack-category__title">${cat.name}</div>
      ${cat.items.map((item, ii) => {
        const key = `${ci}-${ii}`;
        const checked = !!state.pack[key];
        return `
          <div class="pack-item ${checked ? 'is-checked' : ''}" data-key="${key}">
            <span class="pack-item__box">
              <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 6l3 3 7-7" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <span class="pack-item__text">${item}</span>
          </div>
        `;
      }).join("")}
    </div>
  `).join("");

  container.querySelectorAll(".pack-item").forEach(el => {
    el.addEventListener("click", () => {
      const key = el.dataset.key;
      state.pack[key] = !state.pack[key];
      saveState();
      renderPack();
      updatePackProgress();
    });
  });

  updatePackProgress();
}

function getPackTotals() {
  let total = 0, done = 0;
  TRIP.packCategories.forEach((cat, ci) => cat.items.forEach((item, ii) => {
    total++;
    if (state.pack[`${ci}-${ii}`]) done++;
  }));
  return { total, done };
}

function updatePackProgress() {
  const { total, done } = getPackTotals();
  const fill = document.getElementById("packProgressFill");
  const text = document.getElementById("packProgressText");
  if (fill) fill.style.width = total ? (done / total * 100) + "%" : "0%";
  if (text) text.textContent = `${done} of ${total} packed`;
  const glance = document.getElementById("glancePacked");
  if (glance) glance.textContent = `${done}/${total}`;
}

// ============================================================
// JOURNAL VIEW — tap-only, no typing
// ============================================================
const JOURNAL_PROMPTS = [
  { key: "mood", q: "How was today overall?", type: "scale", options: ["😩", "😕", "🙂", "😄", "🤩"] },
  { key: "highlight", q: "Today's highlight", type: "single", options: ["Wildlife sighting", "The food", "Hot springs / pool time", "A view", "Toddler had a blast", "Just relaxing"] },
  { key: "toddler", q: "How did the toddler do?", type: "scale", options: ["😭", "😐", "🙂", "😄", "🥳"] },
  { key: "energy", q: "Pace of the day", type: "single", options: ["Too rushed", "Just right", "Could've done more", "Needed more rest"] },
  { key: "weather", q: "Weather", type: "single", options: ["Sunny all day", "Rain in the AM", "Rain in the PM", "Rained most of day", "Perfect"] },
  { key: "wouldRepeat", q: "Would you do today again?", type: "single", options: ["Absolutely", "Mostly", "Skip next time"] }
];

function renderJournal() {
  const tabsEl = document.getElementById("journalDayTabs");
  tabsEl.innerHTML = TRIP.days.map(d => `
    <button class="day-tab ${d.id === state.activeJournalDay ? 'is-active' : ''}" data-day="${d.id}">
      <span class="day-tab__day">${d.label}</span>
      <span class="day-tab__title">${d.icon} ${d.title}</span>
    </button>
  `).join("");
  tabsEl.querySelectorAll(".day-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeJournalDay = btn.dataset.day;
      saveState();
      renderJournal();
    });
  });

  if (!state.journal[state.activeJournalDay]) state.journal[state.activeJournalDay] = {};
  const dayJournal = state.journal[state.activeJournalDay];

  const detail = document.getElementById("journalDetail");
  detail.innerHTML = JOURNAL_PROMPTS.map(p => `
    <div class="journal-prompt">
      <div class="journal-prompt__q">${p.q}</div>
      <div class="${p.type === 'scale' ? 'journal-scale' : 'journal-options'}">
        ${p.options.map(opt => `
          <button class="${p.type === 'scale' ? 'journal-scale__opt' : 'journal-option'} ${dayJournal[p.key] === opt ? 'is-selected' : ''}" data-prompt="${p.key}" data-opt="${opt}">${opt}</button>
        `).join("")}
      </div>
    </div>
  `).join("") + renderJournalSummary(dayJournal);

  detail.querySelectorAll("[data-prompt]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.prompt;
      const opt = btn.dataset.opt;
      dayJournal[key] = dayJournal[key] === opt ? undefined : opt;
      saveState();
      renderJournal();
    });
  });
}

function renderJournalSummary(dayJournal) {
  const filled = Object.entries(dayJournal).filter(([, v]) => v);
  if (!filled.length) return "";
  return `
    <div class="journal-summary">
      <div class="journal-summary__title">Today's log</div>
      ${filled.map(([k, v]) => {
        const prompt = JOURNAL_PROMPTS.find(p => p.key === k);
        return `<div class="journal-summary__line">${prompt.q}: <strong>${v}</strong></div>`;
      }).join("")}
    </div>
  `;
}

// ============================================================
// INFO VIEW
// ============================================================
function renderInfo() {
  const i = TRIP.info;
  document.getElementById("infoContent").innerHTML = `
    <div class="info-block">
      <div class="info-block__heading">${i.weather.heading}</div>
      <div class="info-block__body">${i.weather.body}</div>
    </div>
    <div class="info-block">
      <div class="info-block__heading">${i.sunset.heading}</div>
      <div class="info-block__body">${i.sunset.body}</div>
    </div>
    <div class="info-block">
      <div class="info-block__heading">Drive times from Los Lagos</div>
      ${i.driveTimes.map(d => `
        <div class="drive-time-row">
          <span class="drive-time-row__place">${d.place}</span>
          <span class="drive-time-row__time">${d.time}</span>
        </div>
      `).join("")}
    </div>
    <div class="info-block">
      <div class="info-block__heading">${i.mosquitoes.heading}</div>
      <div class="info-block__body">${i.mosquitoes.body}</div>
    </div>
    <div class="info-block">
      <div class="info-block__heading">${i.money.heading}</div>
      <div class="info-block__body">${i.money.body}</div>
    </div>
    <div class="info-block">
      <div class="info-block__heading">Fruits to try</div>
      <div class="fruit-pills">${i.fruits.map(f => `<span class="fruit-pill">${f}</span>`).join("")}</div>
    </div>
    <div class="info-block">
      <div class="info-block__heading">Quick tips</div>
      <ul class="tip-list">${i.quickTips.map(t => `<li>${t}</li>`).join("")}</ul>
    </div>
    <div class="info-block">
      <div class="info-block__heading">Hotel</div>
      <div class="info-block__body">${TRIP.meta.hotel.name}<br>${TRIP.meta.hotel.note}</div>
      <a class="place-card__map" href="${TRIP.meta.hotel.mapUrl}" target="_blank" rel="noopener" style="margin-top:8px; display:inline-flex;">📍 Open in Google Maps</a>
    </div>
  `;
}

// ============================================================
// INIT
// ============================================================
function init() {
  initTabBar();
  initConverterToggle();
  tickClock();
  setInterval(tickClock, 30000);
  fetchWeather();
  fetchFx();

  renderToday();
  renderItinerary();
  renderFood();
  renderPack();
  renderJournal();
  renderInfo();
}

document.addEventListener("DOMContentLoaded", init);
