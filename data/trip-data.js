// ============================================================
// TRIP DATA — La Fortuna, Costa Rica · Aug 26–29, 2026
// Base itinerary from user's plan, enriched & corrected against
// Google reviews / Reddit / operator sites (Aug 2026 research pass).
// ============================================================

const TRIP = {
  meta: {
    title: "La Fortuna, Costa Rica",
    subtitle: "4-Day Family Itinerary",
    dateStart: "2026-08-26",
    dateEnd: "2026-08-29",
    timezone: "America/Costa_Rica", // UTC-6, no DST
    hotel: {
      name: "Los Lagos Hotel, Spa & Resort",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Los+Lagos+Hotel+Spa+%26+Resort+La+Fortuna",
      note: "Hot springs + pools on site — huge win with a toddler on down days."
    }
  },

  // Researched corrections / things the original plan missed
  callouts: [
    {
      icon: "🚫",
      tag: "Toddler-critical",
      title: "La Fortuna Waterfall steps don't take strollers",
      body: "It's ~500–530 concrete steps down, no stroller access, and babies/toddlers must go in a carrier — not arms alone if you can help it. Going down is easy; the climb back up is the real workout. If you'd rather skip the stairs entirely, there's a free viewpoint near the entrance with a distant view of the falls. Swimming current near the base is strong — stick to the calmer pool off to the side, not directly under the falls."
    },
    {
      icon: "✅",
      tag: "Good news",
      title: "Mistico Hanging Bridges is genuinely stroller-friendly",
      body: "Wide paved/cement paths, and Mistico rents strollers on site (~$12) if you don't want to bring your own. Only one short ~100m stretch near the waterfall viewpoint has steps where you'd carry the toddler. Go at opening (7:30 AM) for cooler temps, better wildlife activity, and thinner crowds."
    },
    {
      icon: "✅",
      tag: "Good news",
      title: "Bogarín Trail is flat and easy",
      body: "Hard-packed dirt loop, well-maintained, genuinely stroller/wheelchair friendly — one of the easiest wildlife walks near town. Sloth sightings are close to guaranteed with a guide since sloths barely move. It gets crowded with tour groups by mid-morning in high season, so keep your 8–10 AM slot."
    },
    {
      icon: "💧",
      tag: "Weather reality",
      title: "You're visiting in green season — plan around the rain, not just around it",
      body: "Late Aug mornings are usually dry with afternoon showers rolling in, matching your plan to front-load outdoor activities before ~1 PM. Pack a light rain jacket for everyone including the toddler, and treat afternoon plans as flexible — Los Lagos' pools & hot springs are a perfect rainy-day fallback since you're staying on site."
    },
    {
      icon: "💵",
      tag: "Money",
      title: "Cards work almost everywhere in La Fortuna town",
      body: "Restaurants, tour operators, and the resort all take cards. Keep cash mainly for: sodas/small local lunch counters, tips, parking attendants, and the lockers at La Fortuna Waterfall (cash-only, ~$2 + $10 deposit). ATMs in town dispense colones; withdraw what you need rather than exchanging USD at poor airport rates."
    },
    {
      icon: "🎟️",
      tag: "Booking",
      title: "Book Mistico + your dinner reservations ahead",
      body: "Mistico can be booked 24–48h ahead in low/shoulder season but book sooner if you can — it locks in your preferred morning slot. For dinners, Tierra Mia, Travesía, Jalapas and El Chante Verde all benefit from reservations, especially since you're eating early (5–6 PM) with a toddler and that window fills fast."
    }
  ],

  days: [
    {
      id: "wed",
      date: "2026-08-26",
      label: "Wed, Aug 26",
      title: "Scenic Arrival Day",
      icon: "🚗",
      blocks: [
        {
          time: "Morning",
          heading: "Scenic drive SJO → La Fortuna",
          items: [
            {
              name: "Hacienda Alsacia Coffee Farm",
              note: "Coffee + volcano views, easy stop with a toddler-friendly pace.",
              cost: "~$25–40/adult tour",
              cash: "Card OK",
              reservation: "Recommended",
              bestTime: "Morning",
              rating: "4.5★ Google",
              tag: "Highly recommend",
              map: "https://www.google.com/maps/search/?api=1&query=Hacienda+Alsacia+Starbucks+Coffee+Farm"
            },
            {
              name: "Poás Highlands Strawberry Stop",
              note: "Seasonal (Aug–Apr) — good stretch-your-legs break, kids love the strawberry picking.",
              cost: "~$5–10/person",
              cash: "Cash preferred",
              reservation: "Not needed",
              bestTime: "Morning",
              rating: "4.3★ Google",
              tag: "",
              map: "https://www.google.com/maps/search/?api=1&query=Poas+Strawberry+Farm"
            },
            {
              name: "La Paz Waterfall Gardens",
              note: "Waterfalls, butterfly garden, animal rescue exhibits — a full toddler-friendly nature park in one stop.",
              cost: "$48/adult, $32/child",
              cash: "Card OK",
              reservation: "Not needed, but buy online to skip the line",
              bestTime: "Late morning",
              rating: "4.6★ Google",
              tag: "Highly recommend",
              map: "https://www.google.com/maps/search/?api=1&query=La+Paz+Waterfall+Gardens"
            }
          ]
        },
        {
          time: "Midday",
          heading: "Lunch at La Paz or a nearby soda",
          items: [
            {
              name: "Lunch at La Paz Waterfall Gardens restaurant (buffet) or a roadside soda",
              note: "Kid-friendly buffet on-site at La Paz means no extra stop needed. Good nap window in the car afterward.",
              cost: "$15–20/adult buffet",
              cash: "Card OK",
              reservation: "Not needed",
              bestTime: "~12:30–1:30 PM",
              rating: "4.2★ Google",
              tag: "",
              map: ""
            }
          ]
        },
        {
          time: "Afternoon",
          heading: "Drive to Los Lagos — arrive ~4 PM",
          items: [
            {
              name: "Check in & relax at Los Lagos",
              note: "Hot springs, pools & kid pools on site. This is your soft-landing block after a long drive — no plans needed.",
              cost: "Included in stay",
              cash: "—",
              reservation: "—",
              bestTime: "Late afternoon",
              rating: "4.4★ Google",
              tag: "",
              map: "https://www.google.com/maps/search/?api=1&query=Los+Lagos+Hotel+Spa+%26+Resort+La+Fortuna"
            }
          ]
        },
        {
          time: "Evening",
          heading: "Dinner at Los Lagos or La Fortuna town",
          items: [
            {
              name: "Dinner — resort restaurant or drive into town",
              note: "Keep it easy on arrival night. Los Lagos' own restaurant is the low-effort choice after a travel day.",
              cost: "$15–25/adult",
              cash: "Card OK",
              reservation: "Not needed at resort",
              bestTime: "5:30–7 PM",
              rating: "4.1★ Google",
              tag: "",
              map: ""
            }
          ]
        }
      ]
    },
    {
      id: "thu",
      date: "2026-08-27",
      label: "Thu, Aug 27",
      title: "Rainforest & Wildlife",
      icon: "🦥",
      blocks: [
        {
          time: "7:30–10:30 AM",
          heading: "Mistico Hanging Bridges (with guide)",
          items: [
            {
              name: "Mistico Arenal Hanging Bridges",
              note: "Stroller-friendly cement paths — Mistico rents strollers on site if you don't bring your own. Only ~100m near the waterfall viewpoint requires carrying the toddler. Go early: cooler temps, more active wildlife, thinner crowds. 16 bridges, ~2.5 hr loop.",
              cost: "$32/adult self-guided, $48–56 guided; kids under 6–10 often discounted — check current rates",
              cash: "Card OK",
              reservation: "Book 24–48h ahead minimum, sooner in high season",
              bestTime: "Opens 6 AM — go by 7:30 AM",
              rating: "4.6★ Google",
              tag: "Highly recommend · Stroller OK",
              map: "https://www.google.com/maps/search/?api=1&query=Mistico+Arenal+Hanging+Bridges"
            }
          ]
        },
        {
          time: "Midday",
          heading: "Lunch — Soda Víquez (local soda)",
          items: [
            {
              name: "Soda Víquez",
              note: "Authentic casado, fresh juices, genuinely popular with locals not just tourists. Simple, fast, toddler-friendly menu (rice, beans, chicken).",
              cost: "$6–10/person",
              cash: "Cash preferred, some cards",
              reservation: "Not needed",
              bestTime: "~1 PM",
              rating: "4.5★ Google",
              tag: "Local favorite",
              map: "https://www.google.com/maps/search/?api=1&query=Soda+Viquez+La+Fortuna"
            }
          ]
        },
        {
          time: "Afternoon",
          heading: "Relax at Los Lagos or explore La Fortuna town",
          items: [
            {
              name: "Hot springs & pools / town stroll",
              note: "Shops, park, ice cream, fruit batidos. Good toddler downtime block — afternoon rain is common this time of year, so keep it flexible and close to shelter.",
              cost: "Variable",
              cash: "Card OK",
              reservation: "Not needed",
              bestTime: "2–4:30 PM",
              rating: "",
              tag: "",
              map: ""
            }
          ]
        },
        {
          time: "Evening",
          heading: "Dinner — El Chante Verde",
          items: [
            {
              name: "El Chante Verde",
              note: "Beautiful garden setting, lighter food, vegetarian options, relaxed vibe — good fit for tired toddler + tired parents.",
              cost: "$15–25/adult",
              cash: "Card OK",
              reservation: "Recommended",
              bestTime: "5:30–7 PM",
              rating: "4.6★ Google",
              tag: "Highly recommend",
              map: "https://www.google.com/maps/search/?api=1&query=El+Chante+Verde+La+Fortuna"
            }
          ]
        }
      ]
    },
    {
      id: "fri",
      date: "2026-08-28",
      label: "Fri, Aug 28",
      title: "Wildlife & Relax Day",
      icon: "🦋",
      blocks: [
        {
          time: "8:00–10:00 AM",
          heading: "Bogarín Trail (with guide)",
          items: [
            {
              name: "Bogarín Trail",
              note: "Short, flat, hard-packed dirt trail — genuinely stroller-friendly, one of the easiest walks in the area. Near-guaranteed sloth sighting with a guide since sloths move ~40 yards a day. Best sloths, toucans, frogs. Gets crowded with tour groups by mid-morning, so keep this early slot.",
              cost: "$27–30/adult self-guided; ~$45–70 guided",
              cash: "Card OK",
              reservation: "Recommended, walk-ins usually fine off-peak",
              bestTime: "Opens 7 AM — go by 8 AM",
              rating: "4.5★ Google",
              tag: "Highly recommend · Stroller OK",
              map: "https://www.google.com/maps/search/?api=1&query=Bogarin+Trail+La+Fortuna"
            }
          ]
        },
        {
          time: "10:00 AM",
          heading: "Brunch — Vita Café",
          items: [
            {
              name: "Vita Café",
              note: "Great coffee, smoothies, breakfast bowls. Healthy, fresh, local vibe — good option if the toddler needs a slower sit-down after the trail.",
              cost: "$8–14/person",
              cash: "Card OK",
              reservation: "Not needed",
              bestTime: "10–11:30 AM",
              rating: "4.7★ Google",
              tag: "Highly recommend",
              map: "https://www.google.com/maps/search/?api=1&query=Vita+Cafe+La+Fortuna"
            }
          ]
        },
        {
          time: "2:30–4:30 PM",
          heading: "Los Lagos wildlife & relaxation",
          items: [
            {
              name: "Explore resort trails & gardens",
              note: "Birds, frogs, iguanas right on property. Hot springs & pools. This is your built-in slow afternoon — no driving needed.",
              cost: "Included in stay",
              cash: "—",
              reservation: "—",
              bestTime: "Afternoon",
              rating: "",
              tag: "",
              map: ""
            }
          ]
        },
        {
          time: "Early Dinner (before 6 PM)",
          heading: "Monkey's Place or La Hormiga",
          items: [
            {
              name: "Monkey's Place / Soda La Hormiga",
              note: "Kid-friendly, big portions, great local food. Back to resort early for toddler bedtime.",
              cost: "$8–15/person",
              cash: "Cash preferred at La Hormiga",
              reservation: "Not needed",
              bestTime: "5–6 PM",
              rating: "4.4★ Google",
              tag: "",
              map: "https://www.google.com/maps/search/?api=1&query=Soda+La+Hormiga+La+Fortuna"
            }
          ]
        }
      ]
    },
    {
      id: "sat",
      date: "2026-08-29",
      label: "Sat, Aug 29",
      title: "Waterfall & Depart",
      icon: "💦",
      blocks: [
        {
          time: "8:00 AM",
          heading: "La Fortuna Waterfall",
          items: [
            {
              name: "La Fortuna Waterfall (Catarata La Fortuna)",
              note: "⚠️ No strollers on the ~500–530 step staircase — toddler needs to be in a carrier, not just carried. If that feels like too much on a departure day, the free viewpoint near the entrance gives a distant view without the stairs. If you do descend: down is easy (~10 min), up is the workout (~20 min), benches along the way to rest. Strong current at the base — swim in the calmer side pool, not directly under the falls. Cash-only lockers ($2 + $10 deposit).",
              cost: "$20/adult foreign, kids 8 & under free",
              cash: "Card for entry; cash for lockers",
              reservation: "Not needed off-peak; book ahead around holidays",
              bestTime: "Opens 7 AM — go right at opening",
              rating: "4.6★ Google",
              tag: "Highly recommend · Carrier needed, not stroller",
              map: "https://www.google.com/maps/search/?api=1&query=La+Fortuna+Waterfall"
            }
          ]
        },
        {
          time: "Lunch",
          heading: "Local soda",
          items: [
            {
              name: "Soda La Hormiga or Soda Monkey's Place",
              note: "Great options on the way out. Try fresh batidos before the long drive.",
              cost: "$8–12/person",
              cash: "Cash preferred",
              reservation: "Not needed",
              bestTime: "~12 PM",
              rating: "4.4★ Google",
              tag: "",
              map: ""
            }
          ]
        },
        {
          time: "1:00–1:30 PM",
          heading: "Depart La Fortuna",
          items: [
            {
              name: "Drive back to SJO",
              note: "2.5–3 hrs with stops. Return the rental car before the office closes. Toddler nap window — good time to drive.",
              cost: "—",
              cash: "—",
              reservation: "—",
              bestTime: "Early afternoon",
              rating: "",
              tag: "",
              map: ""
            }
          ]
        },
        {
          time: "Evening",
          heading: "Airport area stay",
          items: [
            {
              name: "Hampton by Hilton SJO or Courtyard by Marriott SJO",
              note: "Stay near SJO for an early Sunday flight rather than risking traffic day-of.",
              cost: "$100–150/night",
              cash: "Card OK",
              reservation: "Recommended",
              bestTime: "—",
              rating: "4.3★ Google",
              tag: "",
              map: "https://www.google.com/maps/search/?api=1&query=Hampton+by+Hilton+San+Jose+Airport+Costa+Rica"
            }
          ]
        }
      ]
    }
  ],

  // ---------------- FOOD GUIDE ----------------
  foodCategories: ["Breakfast", "Coffee", "Farm-to-table", "Local lunch", "Snacks", "Dinner", "Experience"],

  food: [
    {
      name: "Soda La Hormiga",
      category: "Breakfast",
      also: ["Local lunch"],
      note: "Gallo pinto, eggs, tortillas — simple, authentic Costa Rican breakfast. Also does a great casual lunch.",
      hours: "7–9 AM breakfast · 11 AM–1 PM lunch",
      cost: "$6–10/person",
      cash: "Cash preferred",
      reservation: "Not needed",
      rating: "4.5★",
      tag: "Local favorite",
      map: "https://www.google.com/maps/search/?api=1&query=Soda+La+Hormiga+La+Fortuna"
    },
    {
      name: "Red Frog Coffee Roasters",
      category: "Coffee",
      also: ["Breakfast"],
      note: "Great coffee, traditional breakfast options, fresh fruit smoothies. Locally roasted beans.",
      hours: "7:30–10 AM",
      cost: "$5–12/person",
      cash: "Card OK",
      reservation: "Not needed",
      rating: "4.6★",
      tag: "",
      map: "https://www.google.com/maps/search/?api=1&query=Red+Frog+Coffee+Roasters+La+Fortuna"
    },
    {
      name: "Sloffee Coffee Station",
      category: "Coffee",
      also: [],
      note: "Excellent coffee, banana bread & pastries, relaxed jungle setting.",
      hours: "7–10 AM",
      cost: "$4–8/person",
      cash: "Card OK",
      reservation: "Not needed",
      rating: "4.6★",
      tag: "",
      map: "https://www.google.com/maps/search/?api=1&query=Sloffee+Coffee+Station+La+Fortuna"
    },
    {
      name: "La Finquita",
      category: "Farm-to-table",
      also: [],
      note: "Farm-grown ingredients, traditional Costa Rican lunch in a beautiful farm setting.",
      hours: "11 AM–1 PM",
      cost: "$15–22/person",
      cash: "Card OK",
      reservation: "Recommended, especially high season",
      rating: "4.7★",
      tag: "Highly recommend",
      map: "https://www.google.com/maps/search/?api=1&query=La+Finquita+La+Fortuna"
    },
    {
      name: "Soda Víquez",
      category: "Local lunch",
      also: [],
      note: "Classic casado, chicken or fish, plantains, natural fruit juice. Popular with locals.",
      hours: "11:30 AM–1:30 PM",
      cost: "$6–10/person",
      cash: "Cash preferred",
      reservation: "Not needed",
      rating: "4.5★",
      tag: "Local favorite",
      map: "https://www.google.com/maps/search/?api=1&query=Soda+Viquez+La+Fortuna"
    },
    {
      name: "Vita Café",
      category: "Breakfast",
      also: ["Coffee"],
      note: "Great coffee, smoothies, breakfast bowls & brunch. Healthy, fresh, local vibe.",
      hours: "Morning–early afternoon",
      cost: "$8–14/person",
      cash: "Card OK",
      reservation: "Not needed",
      rating: "4.7★",
      tag: "Highly recommend",
      map: "https://www.google.com/maps/search/?api=1&query=Vita+Cafe+La+Fortuna"
    },
    {
      name: "Roadside Fruit Stands",
      category: "Snacks",
      also: [],
      note: "Seasonal tropical fruit — rambután, papaya, mango, pineapple, guanábana. Great toddler snack stop.",
      hours: "Daytime",
      cost: "$1–5/item",
      cash: "Cash only, usually",
      reservation: "Not needed",
      rating: "",
      tag: "",
      map: ""
    },
    {
      name: "Don Olivo (Optional)",
      category: "Experience",
      also: ["Snacks"],
      note: "Tropical fruit tasting + coffee + cacao experience.",
      hours: "Morning",
      cost: "$20–35/person",
      cash: "Card OK",
      reservation: "Recommended",
      rating: "4.6★",
      tag: "",
      map: "https://www.google.com/maps/search/?api=1&query=Don+Olivo+La+Fortuna"
    },
    {
      name: "Rainforest Chocolate Tour",
      category: "Experience",
      also: [],
      note: "Hands-on cacao experience — learn & make your own chocolate. Great toddler-engaging activity.",
      hours: "Morning / Afternoon",
      cost: "$25–40/adult",
      cash: "Card OK",
      reservation: "Recommended",
      rating: "4.7★",
      tag: "Highly recommend",
      map: "https://www.google.com/maps/search/?api=1&query=Rainforest+Chocolate+Tour+La+Fortuna"
    },
    {
      name: "Tierra Mia",
      category: "Dinner",
      also: [],
      note: "Costa Rican/Latin dinner, fresh seafood, ceviche, great atmosphere.",
      hours: "5:30–7 PM",
      cost: "$18–28/person",
      cash: "Card OK",
      reservation: "Recommended",
      rating: "4.6★",
      tag: "Highly recommend",
      map: "https://www.google.com/maps/search/?api=1&query=Tierra+Mia+La+Fortuna"
    },
    {
      name: "Travesía",
      category: "Dinner",
      also: [],
      note: "Grilled meats, parrillada, generous portions.",
      hours: "5:30–7 PM",
      cost: "$18–30/person",
      cash: "Card OK",
      reservation: "Recommended",
      rating: "4.5★",
      tag: "",
      map: "https://www.google.com/maps/search/?api=1&query=Travesia+Restaurant+La+Fortuna"
    },
    {
      name: "Jalapas",
      category: "Dinner",
      also: ["Experience"],
      note: "Dinner with volcano-area views — go before sunset for the best light.",
      hours: "~5 PM / before sunset",
      cost: "$20–32/person",
      cash: "Card OK",
      reservation: "Recommended",
      rating: "4.5★",
      tag: "Scenic",
      map: "https://www.google.com/maps/search/?api=1&query=Jalapas+La+Fortuna"
    },
    {
      name: "Chifa La Familia Feliz",
      category: "Dinner",
      also: [],
      note: "Excellent Peruvian-Chinese food — lomo saltado, ceviche, family friendly. Good change-of-pace dinner.",
      hours: "5–7 PM",
      cost: "$14–22/person",
      cash: "Card OK",
      reservation: "Recommended",
      rating: "4.6★",
      tag: "",
      map: "https://www.google.com/maps/search/?api=1&query=Chifa+La+Familia+Feliz+La+Fortuna"
    },
    {
      name: "El Chante Verde",
      category: "Dinner",
      also: [],
      note: "Beautiful garden setting, lighter food, vegetarian options, relaxed vibe.",
      hours: "5:30–7 PM",
      cost: "$15–25/person",
      cash: "Card OK",
      reservation: "Recommended",
      rating: "4.6★",
      tag: "Highly recommend",
      map: "https://www.google.com/maps/search/?api=1&query=El+Chante+Verde+La+Fortuna"
    }
  ],

  // ---------------- PACKING CHECKLIST ----------------
  packCategories: [
    {
      name: "Clothing",
      items: [
        "Lightweight, quick-dry clothes (adults)",
        "Lightweight, quick-dry clothes (toddler)",
        "Rain jacket / poncho — adults",
        "Rain jacket / poncho — toddler",
        "Comfortable walking shoes",
        "Water shoes (everyone — waterfall + pools)",
        "Swimsuits (everyone)",
        "Sun hat"
      ]
    },
    {
      name: "Health & comfort",
      items: [
        "Insect repellent (20–30% DEET or Picaridin)",
        "Sunscreen",
        "Refillable water bottles",
        "Toddler snacks",
        "Toddler meds / first-aid basics",
        "Any regular medications"
      ]
    },
    {
      name: "Toddler-specific",
      items: [
        "Baby carrier (essential — waterfall stairs, uneven trails)",
        "Travel stroller (lightweight, for Mistico/Bogarín/town)",
        "Diapers & wipes",
        "Toddler-safe sunscreen",
        "Favorite comfort item for naps/flights"
      ]
    },
    {
      name: "Gear & documents",
      items: [
        "Passports",
        "Copies of reservations (Mistico, dinners, hotel)",
        "Cash (small ₡ bills for sodas, tips, lockers)",
        "Card for larger purchases",
        "Phone + charger",
        "Portable power bank",
        "Binoculars (great for wildlife spotting!)",
        "Dry bag / ziplocks for phone near water"
      ]
    }
  ],

  // ---------------- TRIP INFO ----------------
  info: {
    weather: {
      heading: "Weather (Aug 26–29)",
      body: "80–88°F (27–31°C), green season. Mornings usually dry, afternoon showers common — this is why the itinerary front-loads outdoor activities before ~1 PM."
    },
    sunset: {
      heading: "Sunset",
      body: "Around 5:30 PM in August. Plan to be back at the resort or in town before dark, especially with a toddler."
    },
    driveTimes: [
      { place: "La Fortuna Town", time: "10–15 min (6 km)" },
      { place: "Místico Hanging Bridges", time: "20–25 min (10 km)" },
      { place: "Bogarín Trail", time: "10–15 min (4 km)" },
      { place: "La Fortuna Waterfall", time: "15–20 min (6 km)" },
      { place: "La Paz Waterfall Gardens", time: "1 hr 15 min (45 km)" },
      { place: "SJO Airport", time: "2.5–3 hrs (120 km)" }
    ],
    mosquitoes: {
      heading: "Mosquitoes & bugs",
      body: "Yes, especially around dawn & dusk. Use 20–30% DEET or Picaridin. Dress in long sleeves/pants when in nature. Most active dawn & dusk."
    },
    fruits: ["Guanábana (soursop)", "Rambután", "Maracuyá (passion fruit)", "Piña (pineapple)", "Mango", "Papaya"],
    money: {
      heading: "Money",
      body: "USD is widely accepted alongside colones, but you'll get better value paying in colones for small purchases. Cards work at hotels, restaurants, and most tour operators. Keep cash for sodas, tips, parking, and the waterfall lockers (cash-only)."
    },
    quickTips: [
      "Drink plenty of water",
      "Prices are moderate",
      "Colones (CRC) widely accepted alongside USD",
      "Early dinners (5–6 PM) are easiest with a toddler",
      "Most places: 0–20 min wait; busy times (12–1 PM, 6–7 PM) up to 20–30 min, especially weekends",
      "Most spots are in La Fortuna town or a short drive away — ask your hotel front desk for the best route"
    ]
  }
};
