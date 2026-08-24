# La Fortuna Trip Companion

A personal trip-planning webapp for a 4-day family itinerary in La Fortuna, Costa Rica (Aug 26–29, 2026) — built with a toddler in mind.

## What's inside

- **Today** — live local time, weather, and USD→CRC exchange rate, plus a running list of toddler-specific corrections found by cross-checking the itinerary against Reddit, Google reviews, and operator sites.
- **Plan** — day-by-day breakdown with cost, cash-vs-card, reservation needs, best times, Google ratings, and Google Maps links for every stop.
- **Food** — filterable food guide (breakfast, coffee, local lunch, dinner, experiences).
- **Pack** — tap-to-check packing list, persisted locally on your device.
- **Journal** — a no-typing daily journal: tap emoji/options to log mood, highlights, and how the toddler did each day.
- **Info** — weather, sunset times, drive times, bugs, money, fruits to try, quick tips.

All checklist and journal state is saved in your browser's `localStorage` — nothing is sent to a server, and it's private to your device.

## Hosting on GitHub Pages

1. Create a new repo on GitHub (e.g. `costa-rica-trip`).
2. Push these files to the repo root (or to a `docs/` folder — see below).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch," pick `main` and `/ (root)` (or `/docs`), then save.
5. GitHub will give you a URL like `https://<username>.github.io/costa-rica-trip/` within a minute or two.
6. Add it to your phone's home screen (Share → Add to Home Screen) for an app-like icon.

### Quick command-line push

```bash
git init
git add .
git commit -m "La Fortuna trip companion"
git branch -M main
git remote add origin https://github.com/<your-username>/costa-rica-trip.git
git push -u origin main
```

Then enable Pages as described above.

## Notes on the data

- Exchange rate and weather are fetched live from free public APIs (`open-meteo.com`, `exchangerate-api.com`) — no API key needed.
- Prices, hours, and reservation guidance in the itinerary/food guide were cross-checked against Google reviews, TripAdvisor, and travel-blog sources as of August 2026, but small businesses change hours/prices — worth a quick reconfirm close to your trip, especially for Mistico Hanging Bridges booking windows.
- The waterfall stair/stroller warning is real and worth taking seriously — no stroller access on the ~500-step descent, and Costa Rica requires a carrier (not just carrying) for babies/toddlers on that trail.

## File structure

```
index.html          — app shell, all views
css/style.css        — styling
js/app.js            — view routing, live gauges, checklist/journal logic
data/trip-data.js    — all itinerary/food/pack/info content — edit this to update your trip
```

To change dates, hotel, itinerary items, or food spots, edit `data/trip-data.js` — everything else reads from it.
