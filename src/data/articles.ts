import type { PageSection } from "./content";
import type { MoroccoPhoto } from "./photos";
import type { JourneySlug } from "./journeys";
import { moroccoPhotos } from "./photos";
import { moroccoPlaces } from "./places";
import { locationArticles } from "./locationArticles";
import { planningArticles } from "./planningArticles";

export type ArticleCategory = "planning" | "transport" | "destinations" | "coast" | "mountains" | "desert";

type PlanningLayout = "sample-itinerary" | "camp-checklist";

export type ArticleLayout = "duration" | "packing" | "seasons" | "road-stops" | "train" | "stroller" | "stay" | "food" | "desert-choice" | "coast" | "mountain-day" | "ramadan" | "city-guide" | "casablanca-plan" | "rabat-heritage" | "tangier-north" | "casablanca-rabat-route" | "baby-rhythm" | "seat-checklist" | "beach-selector" | "jemaa-timeline" | "fes-medina-route" | "chefchaouen-two-day" | "marrakech-family-days" | "family-budget-workbook" | "agadir-bay-notebook" | "meknes-two-day" | "volubilis-fieldbook" | "ifrane-season-wheel" | "ouarzazate-film-route" | "coach-boarding-plan" | "taroudant-wall-loop" | "paradise-daycard" | "skoura-palmroute" | "dades-roadbook" | "todgha-walknotes" | "ouzoud-stepguide" | "ourika-valley-daybook" | "ait-benhaddou-heritage-walk" | "bin-el-ouidane-lakeside-plan" | "ait-bouguemez-valley-board" | "tiznit-tafraoute-routecard" | "mirleft-coast-weatherboard" | "asilah-promenade" | "tetouan-medina-map" | "eljadida-cistern-check" | "zagora-draa-schedule" | "rissani-heritage-arc" | "imlil-acclimation-notebook" | "dakhla-wind-window" | "agdz-palmgrove";

export type ArticleTable = {
  heading: string;
  caption: string;
  headers: [string, string, string];
  rows: [string, string, string][];
};

export type ArticleFaq = { question: string; answer: string };
export type ArticleContextLink = { sectionIndex: number; before: string; href: string; linkText: string; after: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  topic: string;
  layout: ArticleLayout | PlanningLayout;
  category: ArticleCategory;
  contextLinks: ArticleContextLink[];
  table: ArticleTable;
  localNote: string;
  photos: MoroccoPhoto[];
  faqs: ArticleFaq[];
  video?: { id: string; title: string; caption: string };
  tours: JourneySlug[];
  related: string[];
  sections: PageSection[];
  sourceLinks: { label: string; href: string }[];
};

const baseArticles: Article[] = [
  {
    slug: "how-many-days-in-morocco-with-kids",
    category: "planning",
    topic: "Trip length",
    layout: "duration",
    contextLinks: [
      { sectionIndex: 0, before: "Use the ", href: "/morocco-family-itineraries/", linkText: "sample overnight sequences", after: " to count the usable days between your flights." },
      { sectionIndex: 2, before: "For a week with no Sahara transfer, see ", href: "/blog/7-days-in-morocco-with-kids-without-sahara/", linkText: "three nights in Marrakech and two in Essaouira", after: " before the return to Marrakech." },
    ],
    tours: [],
    related: ["7-days-in-morocco-with-kids-without-sahara", "morocco-family-road-trip-stops", "morocco-family-trip-budget"],
    title: "How Many Days in Morocco with Kids?",
    description: "Work out how many days you need in Morocco with kids. Compare a short city break, a week and longer trips by flight times, transfers and hotel changes.",
    excerpt: "Compare 7, 10 and 14 days, then match the route to your arrival city, children’s ages and appetite for long drives.",
    image: moroccoPlaces.merzougaDunes.src,
    imageAlt: moroccoPlaces.merzougaDunes.alt,
    readingTime: "5 min read",
    table: {
      heading: "How many nights should you book?",
      caption: "Count only the nights in Morocco. A late arrival and early flight home can take two calendar days out of the sightseeing plan.",
      headers: [
        "Nights in Morocco",
        "What fits",
        "What to check"
      ],
      rows: [
        [
          "4–5 nights",
          "One base in Marrakech, with an Atlas outing if you want one",
          "How many mornings you actually have after arrival"
        ],
        [
          "6 nights",
          "A Marrakech and Essaouira week, or a faster Sahara route",
          "Two easier coast drives or several days in the car"
        ],
        [
          "9 nights",
          "City time and a desert route with an extra overnight",
          "Where to put the longest transfer and whether to fly home from the north"
        ],
        [
          "13 nights",
          "Several regions with two nights in the places you most want to see",
          "The airport drive, hotel changes and at least one day without a transfer"
        ]
      ]
    },
    localNote: "Morocco Travel Experts puts the Merzouga to Fes leg at about seven to eight hours before extra stops. Ask the driver for the route between your actual properties, then add the breaks your children need.",
    photos: [moroccoPhotos.roadTrip, moroccoPhotos.desertCamp],
    faqs: [
      {
        question: "Is seven days enough for Morocco with kids?",
        answer: "Yes for Marrakech and one nearby region. The same seven days can include the Sahara, but you will use several days for drives and have less time in each city."
      },
      {
        question: "Is four days enough for Marrakech with children?",
        answer: "Four days with late arrival and early departure leave two full days. Start with one city base and choose an outing only if it fits those days."
      },
      {
        question: "Should we fly home from the same city?",
        answer: "Compare the fare and connection with the cost and time of the return drive. An onward flight can save an overnight on a one way route."
      }
    ],
    sections: [
      {
        heading: "Count the nights you can use",
        paragraphs: [
          "Start with the local arrival and departure dates. If you land after dinner on a Saturday and fly home early the next Saturday, you have seven nights and six full days. That gives you six mornings to plan, and any transfer between cities will take part of one of them.",
          "Write the town where you will sleep under each date. Circle any morning that starts with an early flight or a long drive. The mornings left are where you put the experiences your family cares about."
        ]
      },
      {
        heading: "Four or five nights: keep one base",
        paragraphs: [
          "With four nights and flights through Marrakech, use one morning for the medina and one for a garden, palace or workshop. Make the third day an Atlas outing only if the children can manage the drive and still enjoy the visit. Staying in the same room gives you a place to return when the morning ends early.",
          "If a night at camp is the main reason for the trip, look at what four days in the Sahara would take from the rest of your break. You may prefer a shorter Agafay outing if you also want city time."
        ]
      },
      {
        heading: "Six nights: decide what you want a week to feel like",
        paragraphs: [
          "For Marrakech and Essaouira, two nights on the coast give you a full day without another hotel change. Put the last night back near the airport if you have an early flight. This is a workable week even if children need a slow afternoon after the city.",
          "A week with Merzouga and Fes can also fit, but several days are spent moving. If you cannot spare the long northbound drive, use the week for the dunes and fewer cities. Decide what to drop before booking accommodation."
        ]
      },
      {
        heading: "Nine nights: use the extra time where it changes the trip",
        paragraphs: [
          "Add a second night near the dunes if you want a full day between the transfer in and the transfer out. Or use the extra night in a town between Merzouga and Fes if the longest leg is the problem. These changes solve different things, so pick the one your children will notice.",
          "Before adding a far north stop, price the return from a northern airport. If you need to get back to Marrakech, check what that drive costs in nights and sightseeing time."
        ]
      },
      {
        heading: "Thirteen nights: choose the places that get two mornings",
        paragraphs: [
          "Two weeks gives you a choice about where to stay longer. Put two nights in Chefchaouen if you want a full day to walk the old town. Two nights in Fes leave time for a guided medina morning after a quiet arrival. Keep one full day for the family to use when you see how the trip is going.",
          "A loop can finish in the same city it starts in, but an early international flight may need the previous night near the airport. Check the final transfer before agreeing to the full route."
        ]
      },
      {
        heading: "Compare the busiest day before choosing the trip",
        paragraphs: [
          "Take the day with the longest drive. Ask where you will get lunch, how late you can check into the next room and whether any activity has a fixed start. If the day only works when everything runs on time, move one stop or add a night.",
          "Now check which morning has no driving or tickets. If there is no free morning, cut the stop the family is least interested in. The new overnight plan will tell you whether you need more days or fewer places."
        ]
      }
    ],
    sourceLinks: [
      { label: "Morocco Travel Experts: family itinerary and published route estimates", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
      { label: "Morocco Travel Experts: private family tours", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
    ],
  },
  {
    slug: "packing-for-morocco-with-kids",
    category: "planning",
    topic: "Family packing list",
    layout: "packing",
    contextLinks: [
      { sectionIndex: 0, before: "Start with the ", href: "/morocco-family-travel-tips/", linkText: "predeparture checklist", after: " for documents, pickups and check-in details." },
      { sectionIndex: 1, before: "For a desert overnight, ask about bedding and power using the ", href: "/blog/morocco-desert-camp-with-kids/", linkText: "camp booking checklist", after: "." },
    ],
    tours: [],
    related: ["best-season-for-a-morocco-family-trip", "morocco-with-a-baby", "morocco-desert-camp-with-kids"],
    title: "What to Pack for Morocco with Kids",
    description: "Pack for Morocco with kids using a list for the car bag, city days and desert nights. Check what to bring and what to arrange with your hotel or driver.",
    excerpt: "A practical family checklist for the day bag, the suitcase and the items to confirm with your driver or hotel.",
    image: moroccoPlaces.merzougaDunes.src,
    imageAlt: moroccoPlaces.merzougaDunes.alt,
    readingTime: "5 min read",
    table: {
      heading: "A Morocco family packing list by bag",
      caption: "Keep frequently used items accessible on travel days. Adjust the list to your route, forecast and children’s ages.",
      headers: ["What to bring", "Where to keep it", "Why it earns its space"],
      rows: [
        ["Water bottle, hat, sunglasses and sunscreen", "Day bag", "Useful in medinas, at outdoor stops and while waiting between activities."],
        ["Wipes, tissues, a small change of clothes and a familiar snack", "Day bag or car bag", "A quick change is easier when it is not at the bottom of a suitcase."],
        ["Light layers, warm sleepwear and comfortable walking shoes", "Suitcase, with one layer kept handy", "City afternoons, mountain stops and desert evenings can feel very different."],
        ["Regular medicines and prescription details", "Adult carry-on", "The CDC advises travelers to plan needed medicines ahead and check whether prescription items can be taken into Morocco."],
        ["Passports, insurance details and copies of key documents", "A secure adult document pouch", "Check entry rules for every traveler’s passport country before leaving."],
      ],
    },
    localNote: "Morocco Travel Experts’ family-tour page specifically recommends layers, sun protection, comfortable shoes and familiar essentials for children. On a city–Atlas–Sahara route, keep one warm layer and the day bag within reach instead of packing everything for the desert at the bottom of the main case.",
    photos: [moroccoPhotos.guideGuests, moroccoPhotos.saharaCamel],
    faqs: [
      { question: "Do children need warm clothes in Morocco?", answer: "Bring at least one warm layer for mountain mornings and desert evenings, especially outside the warmest months. Check the forecast for each overnight stop rather than packing for Marrakech alone." },
      { question: "Should we bring a car seat?", answer: "Ask the operator to confirm the exact seat available for each child’s age, height and weight, and whether it will be fitted in the vehicle you are booking. Do not rely on a general statement that child seats are available." },
      { question: "Is a stroller useful in Moroccan medinas?", answer: "It depends on your route and the stroller. Uneven paving, steps and narrow lanes can make a compact carrier easier in some areas; if you bring a stroller, choose one you can lift and fold without trouble." },
      { question: "Can I bring my child’s prescription medicine?", answer: "Check current entry rules for the medicine and your passport country before travel. The CDC recommends checking whether prescription medicines are legal to bring and carrying the medicines you expect to need; ask your child’s clinician about medical questions." },
    ],
    sections: [
      {
        heading: "Keep a small bag ready for the car",
        paragraphs: [
          "Use one bag for the things you reach for between hotels: water, sun protection, wipes, snacks, a charger, a quiet activity and spare clothes for younger children. Put medicines that need to remain with an adult there too, following your clinician’s instructions.",
          "If you are taking a long transfer, keep a second familiar activity for the final stretch. It can be a coloring pad, audio story or small toy your child already knows; a full bag of new toys is rarely needed.",
        ],
        bullets: ["Water and a child-friendly snack", "Hat, sunglasses and sunscreen", "Wipes, tissues and a small change of clothes", "A light layer for air-conditioned rooms or evening stops"],
      },
      {
        heading: "Dress for the day’s stops, not one city",
        paragraphs: [
          "A family route can move from a busy medina to a mountain pass and then to an open desert camp. Choose comfortable shoes that are already broken in, plus clothes that can be layered. For cooler months, put warm sleepwear where you can find it on the camp night.",
          "Check the forecast shortly before departure and add a rain layer if your route or dates call for one. A single suitcase does not need a separate outfit for every photo stop.",
        ],
      },
      {
        heading: "Ask before packing bulky baby gear",
        paragraphs: [
          "Confirm cots, high chairs and child seats directly with each hotel or transport provider. Ask for the child-seat type and fit, not only whether a seat can be supplied. If you need a carrier, cot or feeding item for your child to sleep comfortably, bring the one you trust rather than counting on a last-minute substitute.",
        ],
        note: "The exact room setup and vehicle equipment depend on the supplier and travel dates. Get confirmation in writing before you decide to leave essential equipment at home.",
      },
      {
        heading: "Check documents and medicines for your own passport country",
        paragraphs: [
          "Keep travel documents together and review official entry guidance for each family member. The UK government page linked below applies to British citizen passports; families traveling on US, Canadian, Australian or other passports should check their own government’s current advice.",
          "For health planning, use the CDC or your own national travel-health service and speak with your child’s clinician about prescriptions, vaccinations and individual needs. This checklist is for packing, not medical advice.",
        ],
      },
      {
        heading: "Make one bag the family’s first-hour kit",
        paragraphs: [
          "The first hour after landing can involve a queue, a pickup and an unfamiliar hotel room. Put water, a snack, wipes, a spare top, a light layer and the items needed for a feed or medication in one bag that stays with an adult.",
          "Pack the main suitcase by activity or person, but do not hide the things you need on the first transfer under everything else. A small reachable kit makes delays less disruptive for children.",
        ],
      },
      {
        heading: "Pack tomorrow’s clothes where you can reach them",
        paragraphs: [
          "On a transfer day, keep the next morning’s clothes and basic wash items near the top of the luggage. Children can change after a dusty stop or spilled drink without every bag being unpacked at the roadside. A labelled packing cube or small tote is enough for most families.",
          "Keep swimwear separate if the itinerary includes a pool or beach stop. A wet bag protects the rest of the luggage, and a quick-drying layer gives children something comfortable to wear while the family is travelling to its next hotel.",
        ],
      },
      {
        heading: "Ask about laundry before packing for every single day",
        paragraphs: [
          "For a longer Morocco family trip, ask the accommodation whether laundry is available, how long it takes and whether it is done on site or sent out. Knowing the arrangement can let you pack fewer clothes without relying on an unconfirmed service during a short overnight stop.",
          "A small supply of familiar essentials can be more useful than several spare outfits. Keep medicines, allergy-safe snacks and a comfort item in carry-on or day luggage, following your airline’s current rules for hand baggage.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Morocco Travel Experts: family packing and route-planning notes", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
      { label: "CDC Morocco traveler health and packing guidance", href: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/morocco" },
      { label: "UK entry requirements for British citizen passport holders", href: "https://www.gov.uk/foreign-travel-advice/morocco/entry-requirements" },
    ],
  },
  {
    slug: "best-season-for-a-morocco-family-trip",
    category: "planning",
    topic: "When to go",
    layout: "seasons",
    contextLinks: [
      { sectionIndex: 0, before: "Our ", href: "/morocco-family-holidays/", linkText: "family holiday planning guide", after: " explains how school dates and route choice affect the trip." },
      { sectionIndex: 2, before: "If spring or autumn works for your dates, compare the route in our ", href: "/tours/family-sahara-adventure/", linkText: "Sahara family tour", after: " and verify the camp setup and activity timing before booking." },
    ],
    tours: [],
    related: ["packing-for-morocco-with-kids", "how-many-days-in-morocco-with-kids"],
    title: "Best Time to Visit Morocco with Kids",
    description: "Choose when to visit Morocco with kids. Compare city heat, Atlantic wind, Atlas conditions and cool desert nights across the four seasons.",
    excerpt: "Match the season to your family’s route: the Sahara, the coast and the Atlas do not share one forecast.",
    image: moroccoPlaces.highAtlas.src,
    imageAlt: moroccoPlaces.highAtlas.alt,
    readingTime: "5 min read",
    table: {
      heading: "Which season fits the route you want?",
      caption: "A route-planning guide, not a weather forecast. Check local conditions close to your travel dates.",
      headers: ["Season", "Family routes to consider", "What to plan for"],
      rows: [
        ["Spring", "A mixed city, Atlas and Sahara trip", "Layer for changing mornings and evenings; check school-break availability early."],
        ["Summer", "Atlantic coast or higher-elevation stays, with city visits timed carefully", "Use the forecast, protect midday rest and ask about cooling at your accommodation and in the vehicle."],
        ["Autumn", "A city-and-desert route", "A popular period for the Sahara; confirm camp availability and pack a layer for after sunset."],
        ["Winter", "Cities and a shorter route, with mountain or desert nights planned carefully", "Ask about heating, bedding and the road conditions for mountain crossings."],
      ],
    },
    localNote: "The Moroccan National Tourism Office describes Morocco as having several climate influences and recommends spring and autumn for the Sahara. Its guidance is a useful route check: a pleasant coast forecast does not tell you what the Atlas or desert will feel like that night.",
    photos: [moroccoPhotos.atlasWaterfall, moroccoPhotos.atlanticCoast, moroccoPhotos.desertCamp],
    faqs: [
      { question: "What is the best time to visit the Sahara with children?", answer: "The Moroccan National Tourism Office recommends spring and autumn for the Sahara. Check the actual forecast and overnight setup for your dates, and plan a route with enough time for the transfer." },
      { question: "Can a family visit Morocco in summer?", answer: "Yes, but choose the route and daily schedule carefully. Consider coastal or higher-elevation stays, book outdoor sightseeing for cooler hours and confirm that your transport and accommodation meet your family’s comfort needs." },
      { question: "Will the desert be warm at night?", answer: "Not necessarily. Temperatures can change after sunset, particularly in cooler months. Ask your camp about bedding and heating, and pack warm sleepwear for children." },
      { question: "Does Ramadan affect a family itinerary?", answer: "It can change opening hours and meal timing in some places. If your dates overlap Ramadan or a local holiday, ask the operator and accommodation what will be open and how meals will work on your route." },
    ],
    sections: [
      {
        heading: "Spring: a good all-round starting point",
        paragraphs: [
          "Spring can suit a route that combines city walks, mountain scenery and the desert. Expect conditions to change as you cross regions, so a light layer is useful even when the afternoon in one city feels warm. Popular school breaks can also make family rooms and preferred dates harder to find.",
        ],
      },
      {
        heading: "Summer: change the day, or change the route",
        paragraphs: [
          "Summer does not rule out Morocco, but it can change how much outdoor activity feels comfortable inland. Start earlier, protect a quiet middle-of-day break and ask whether a coastal or mountain stay better fits your family than a long desert transfer.",
          "Check the current forecast for every overnight stop, especially when the itinerary crosses from the coast to the interior. Do not rely on the temperature in one arrival city to plan the whole trip.",
        ],
      },
      {
        heading: "Autumn: useful for a city-and-Sahara route",
        paragraphs: [
          "Autumn is another strong period to consider for desert travel. The family question is less about choosing a perfect month than having enough nights to reach Merzouga without turning the journey into consecutive long days.",
        ],
      },
      {
        heading: "Winter: plan the night, not only the daytime high",
        paragraphs: [
          "City sightseeing may be comfortable while a mountain stop or desert camp feels cold after dark. Ask each property about heating and bedding, and check current road conditions if your route uses a mountain pass. Pack the warm layer where you can get it before bedtime.",
        ],
      },
      {
        heading: "Check each region instead of relying on one forecast",
        paragraphs: [
          "A coastal afternoon, an Atlas crossing and a desert night can feel very different within the same itinerary. Check a forecast for each overnight stop shortly before departure and ask your accommodation or guide what conditions are expected on the route.",
          "Use that update to adjust walking times and the day bag, not to rewrite the whole trip at the last minute. Layers and a flexible outdoor plan help the family respond to a cool morning, wind or heat.",
        ],
      },
      {
        heading: "Keep an indoor alternative for the hardest weather day",
        paragraphs: [
          "Choose one low-effort option near the accommodation for a day when heat, wind or rain makes a long outdoor visit unattractive. A museum, a covered craft visit, a quiet lunch or an unplanned rest can protect the family’s energy without turning the day into a wasted day.",
          "If an activity has a fixed ticket or cancellation rule, check it before booking. Weather can affect an outdoor plan, but the provider’s terms decide whether it can be changed. Leave the flexible parts of the itinerary open where possible.",
        ],
      },
      {
        heading: "Choose the season around the activity that matters most",
        paragraphs: [
          "A family mainly visiting medinas may have different priorities from one planning mountain walks, a Sahara camp or several beach days. Write down the activity that matters most, then check its conditions for your dates before building the rest of the route around it.",
          "If the family has mixed interests, choose a season that supports the longest or most weather-sensitive activity and use city visits for the more flexible days. This reduces the chance that one difficult afternoon affects the whole holiday.",
        ],
      },
      {
        heading: "Keep one slower morning in the school-holiday plan",
        paragraphs: [
          "School breaks can make fixed travel dates unavoidable, but they do not require every day to be full. Leave a slow morning after the first long drive, a late evening or a desert night. Children often enjoy a quiet breakfast and pool hour as much as another planned stop.",
          "When requesting a quote, show which dates are school holidays and ask what can be booked ahead and what can remain flexible. Confirm availability for the family’s actual room setup and activities rather than assuming the season will have the same options as a quieter month.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: climate and seasons", href: "https://www.visitmorocco.com/en/travel-info/climate-and-seasons" },
      { label: "Morocco Travel Experts: family route planning", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
    ],
  },
  {
    slug: "morocco-family-road-trip-stops",
    category: "desert",
    topic: "Family road trip",
    layout: "road-stops",
    contextLinks: [
      { sectionIndex: 0, before: "An overnight in ", href: "/blog/skoura-with-kids/", linkText: "Skoura", after: " or the Dades Valley makes the drive to the dunes a separate day." },
      { sectionIndex: 1, before: "See how a night in Midelt breaks the Fes to Merzouga drive on the ", href: "/tours/14-day-morocco-family-tour/", linkText: "Casablanca loop", after: "." },
      { sectionIndex: 3, before: "If you have seven days and want shorter drives, try ", href: "/blog/7-days-in-morocco-with-kids-without-sahara/", linkText: "Marrakech and Essaouira", after: " instead of the Sahara." },
    ],
    tours: ["family-sahara-adventure", "10-day-morocco-family-tour"],
    related: ["dades-valley-with-kids", "todgha-gorge-with-kids", "child-car-seats-in-morocco"],
    title: "Morocco Family Road Trip: Marrakech to Merzouga and Fes",
    description: "Compare stops and driving estimates between Marrakech, Aït Benhaddou, Merzouga and Fes. See where an overnight can break up a family road trip.",
    excerpt: "Use published drive estimates to plan overnights, breaks and realistic arrival times on a Morocco family road trip.",
    image: moroccoPlaces.highAtlas.src,
    imageAlt: moroccoPlaces.highAtlas.alt,
    readingTime: "5 min read",
    table: {
      heading: "Published drive estimates for common family routes",
      caption: "Morocco Travel Experts’ published estimates. They are driving-time guides, not door-to-door promises; add family breaks and confirm the actual route for your dates.",
      headers: ["Route leg", "Distance and drive estimate", "How to pace it with children"],
      rows: [
        ["Marrakech → Aït Benhaddou", "185 km · about 3.5 hours", "Allow time for the mountain road and a stop; avoid packing the arrival afternoon."],
        ["Aït Benhaddou → Merzouga", "360 km · about 6 hours", "Use the Dades or Todra area for a planned overnight if you want the Sahara day to feel less rushed."],
        ["Merzouga → Fes", "460 km · about 7–8 hours", "Treat it as the main event of the day; ask whether an overnight break near Midelt suits your family."],
        ["Fes → Chefchaouen", "210 km · about 4 hours", "Keep the rest of the day open for arrival, food and settling into the next stay."],
        ["Marrakech → Essaouira", "175 km · about 2.5 hours", "A more manageable coast leg; staying overnight gives you time there without a same-day return drive."],
      ],
    },
    localNote: "The operator’s guide says to add roughly 30–60 minutes for children’s stops to its route estimates. On the Merzouga–Fes leg, ask in advance whether the family should split the day, where meal stops fit and what time you are likely to reach the hotel.",
    photos: [moroccoPhotos.roadTrip, moroccoPhotos.kasbah, moroccoPhotos.foodMarket],
    video: {
      id: "idQ5P_mfbiw",
      title: "Merzouga Desert Road Trip | Aït Benhaddou, Ouarzazate, & More",
      caption: "Independent route footage from MomOf4 Vlogs. It shows some of the southern drive; use your operator’s current itinerary for distances and timing.",
    },
    faqs: [
      { question: "How often should we stop on a Morocco road trip with kids?", answer: "Plan breaks around your children’s normal meal and toilet needs, then ask the driver what is realistic on that road. The operator’s estimates allow extra time for family stops, but the actual day depends on traffic and conditions." },
      { question: "Can we drive from Merzouga to Fes in one day?", answer: "The operator publishes an estimate of 7–8 hours for about 460 km before family breaks. It is a long day; ask whether an overnight split is better for your children and confirm the hotel arrival time before scheduling anything in Fes." },
      { question: "Where should a family stop between Marrakech and Merzouga?", answer: "Aït Benhaddou, Skoura and the Dades or Todra area can form useful stages, depending on the route. Confirm which place is an actual overnight in your proposal rather than assuming every sightseeing stop includes a hotel night." },
      { question: "Should we bring our own child seat?", answer: "Ask for written confirmation of the seat type and fit for each child and the exact vehicle. If the provider cannot confirm a suitable seat, discuss alternatives before booking the transfer." },
    ],
    sections: [
      {
        heading: "Make the Marrakech-to-Sahara journey a sequence",
        paragraphs: [
          "Aït Benhaddou is a natural stop on the route south, but a photo visit alone does not break the drive into two easy days. If you want the family to see the village without rushing, plan the overnight around the wider Ouarzazate, Skoura or Dades area and confirm the next day’s hotel-to-hotel time.",
          "The mountain pass and the valley roads are part of the experience, but they also make a tight schedule less predictable. Leave room for meals and short pauses instead of stacking several guided visits onto the same transfer day.",
        ],
      },
      {
        heading: "Give the Merzouga-to-Fes day its own space",
        paragraphs: [
          "The published estimate for this leg is long enough that an evening arrival should count as a travel day, not a Fes sightseeing day. If your children find car days difficult, ask about splitting the route with an overnight stop. This adds a hotel change but may make the following morning easier.",
        ],
      },
      {
        heading: "Agree on stops before the driver sets off",
        paragraphs: [
          "Tell the planner what normally works for your children: how often they need a break, whether motion sickness is a concern and whether meal times are fixed. Ask how many bags fit in the vehicle with everyone seated, and keep water, snacks, medicines and a change of clothes accessible.",
        ],
        bullets: ["Confirm child-seat type and installation in writing.", "Ask for the expected pickup and hotel arrival times.", "Leave the first afternoon after a long transfer free."],
      },
      {
        heading: "Choose a shorter loop when the holiday is short",
        paragraphs: [
          "If you have only a few nights, Marrakech with an Atlas or coast stay may give the family more time on foot than attempting Marrakech, Merzouga and Fes. The Sahara is a strong reason to extend the trip, but it is not a quick add-on from the city.",
        ],
      },
      {
        heading: "Agree what counts as a useful stop",
        paragraphs: [
          "Some families need a proper lunch break; others need a toilet, a pharmacy, a place to feed a baby or a quiet spot to stretch. Tell the planner which of those matters before the route is set, then ask what is available on the actual road.",
          "A stop is more useful when it comes at the right time for the children. Keep a snack in the car and ask how much flexibility the driver can offer if someone needs a break sooner than planned.",
        ],
      },
      {
        heading: "Write the transfer day in hotel-to-hotel order",
        paragraphs: [
          "A route estimate can miss the time spent leaving a medina, loading bags, visiting a sight and reaching the next room. Ask for the complete sequence from pickup to arrival and confirm whether sightseeing stops are optional or fixed.",
          "When comparing itineraries, look at arrival time as well as driving time. A family reaching a hotel after dark may want the evening left free instead of booking another activity.",
        ],
      },
      {
        heading: "Use a planned stop as a proper family reset",
        paragraphs: [
          "A useful stop is long enough to use a toilet, stretch, refill water and have something to eat. Tell the driver what the children usually need after a few hours in the car, then agree where and when the break fits rather than hoping a roadside stop will appear at the right moment.",
          "Keep one or two optional photo stops separate from essential breaks. That makes it easier to protect the arrival time if a child is tired or traffic changes the schedule, while still leaving room for the landscape when the family has energy.",
        ],
      },
      {
        heading: "Confirm luggage space before the vehicle is booked",
        paragraphs: [
          "A family road trip may include suitcases, a stroller, car seats and day bags at the same time. Tell the operator how many bags you will bring and ask which vehicle is planned, how luggage is stored and whether the seats still fit comfortably with the full load.",
          "A clear answer can prevent a stressful change at the airport or a crowded transfer. Keep the day bag separate from the main luggage so children can reach water, snacks and comfort items without opening the boot at every stop.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Morocco Travel Experts: published family route and driving estimates", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
      { label: "CDC Morocco traveler guidance on choosing safe transport", href: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/morocco" },
      { label: "Watch the independent Merzouga road-trip video on YouTube", href: "https://www.youtube.com/watch?v=idQ5P_mfbiw" },
    ],
  },
  {
    slug: "morocco-by-train-with-kids",
    category: "transport",
    topic: "Train travel",
    layout: "train",
    contextLinks: [
      { sectionIndex: 0, before: "On the Atlantic corridor, compare ", href: "/blog/casablanca-to-rabat-with-kids/", linkText: "a train from Casablanca to Rabat with a private transfer", after: "." },
      { sectionIndex: 3, before: "For a road transfer at either end, confirm ", href: "/blog/child-car-seats-in-morocco/", linkText: "a seat for each child", after: " before you book." },
    ],
    tours: [],
    related: ["how-many-days-in-morocco-with-kids", "morocco-family-road-trip-stops"],
    title: "Morocco by Train with Kids: Tickets and Seats",
    description: "Find out where trains fit a Morocco family trip, how to check child fares with ONCF and what to plan for stations, bags and seats together.",
    excerpt: "Check fares and seats for each child, and plan the trip from the station to your accommodation.",
    image: moroccoPlaces.casablancaMosque.src,
    imageAlt: moroccoPlaces.casablancaMosque.alt,
    readingTime: "5 min read",
    table: {
      heading: "Book the seats your family needs",
      caption: "Enter each child’s age for the travel date and check the conditions for your selected train with ONCF.",
      headers: ["Traveller", "Check in the booking", "Before paying"],
      rows: [
        ["Baby or toddler", "Whether you need a ticket if they sit on your lap", "If you want a separate seat, ask how to reserve it."],
        ["Child with their own seat", "The fare and seat offered for their age", "Check whether you can sit next to them."],
        ["Whole group", "Names, ages and the seats on your ticket", "Confirm the fare conditions and the exact departure station."],
      ],
    },
    localNote: "Check the departure station on your ticket before booking a driver. Send them the station name and train number so you can agree on a meeting point.",
    photos: [moroccoPhotos.roadTrip, moroccoPhotos.riad],
    faqs: [
      { question: "Do babies need a train ticket in Morocco?", answer: "Check with ONCF for your train and the child’s age. Ask separately about a child on an adult’s lap and a child with their own seat." },
      { question: "How do we check the fare for a child?", answer: "Enter the ages and journey on ONCF’s booking site. Check which fare and seat each ticket covers before paying." },
      { question: "How early should we reach the station?", answer: "Check the boarding time for your train. Add time to find the entrance and platform, use the toilets and move your bags with children." },
      { question: "Can the train take us to the Sahara?", answer: "Rail is useful for some intercity legs, but it does not remove the road journey to remote desert stays. Ask the operator to identify exactly where a train journey ends and how the family reaches the next hotel or camp." },
    ],
    sections: [
      {
        heading: "Use rail where it removes a long city transfer",
        paragraphs: [
          "A train can be a comfortable way to link larger cities when the stations match your arrival, departure and accommodation plans. It is less useful when the next stop is a small village, kasbah or desert camp that still needs a private transfer. Compare the whole hotel-to-hotel journey, not only the time shown between stations.",
          "For a mixed itinerary, you may prefer rail between cities and a driver for the Atlas or Sahara section. That is a route-design decision: ask who handles station pickups, luggage and any changes between providers.",
        ],
      },
      {
        heading: "Book children and seats as one family group",
        paragraphs: [
          "Book the family in one transaction where you can. Check the passenger names and seat numbers before you pay. If you cannot choose seats together, ask ONCF how to arrange them before the day of travel.",
        ],
      },
      {
        heading: "Leave extra time for the station routine",
        paragraphs: [
          "Check the boarding instructions on your ticket. With children, allow time for the entrance, toilets and the walk to your carriage. Have the ticket available on your phone or printed if the fare permits it.",
        ],
      },
      {
        heading: "Plan the last mile at both ends",
        paragraphs: [
          "A family can save time on the main rail leg and still lose it on the station connection. Ask whether your hotel can arrange a pickup, how far the car can approach the riad and who will help with bags. For a private tour, confirm whether the driver meets you at the station or starts from a different city.",
        ],
      },
      {
        heading: "Protect a little time after a long rail leg",
        paragraphs: [
          "Do not schedule a guided medina visit or timed attraction immediately after the train arrives. Give the family time to reach the hotel, use the bathroom, eat and settle in before deciding whether to explore.",
          "If the train is delayed or a child needs a break, a free evening is easier to change than a prepaid activity. Keep the first plan near the station or accommodation and move farther away on the next day.",
        ],
      },
      {
        heading: "Check where the family will sit and store its bags",
        paragraphs: [
          "When buying tickets, compare the class, carriage and seating arrangement available for your route. Ask whether the family can sit together and where a stroller or larger bag should be stored. The answer can differ by train and station, so use the rail operator’s current information rather than relying on an old trip report.",
          "Pack the things children may need during the journey in one reachable bag. Keep snacks, water, wipes, a layer and any necessary medicine nearby instead of placing them under luggage that cannot be accessed easily once the train is moving.",
        ],
      },
      {
        heading: "Give both stations a calm arrival buffer",
        paragraphs: [
          "If you change trains, check whether the second one leaves from the same station. Leave time for a platform change with bags, and ask what the fare allows if a delay makes you miss the connection.",
          "At the other end, agree on a meeting point before you board the first train. If a driver is collecting you, send the train number as well as the arrival time.",
        ],
      },
    ],
    sourceLinks: [
      { label: "ONCF: search trains and confirm current fares", href: "https://voyages.oncf.ma/" },
      { label: "Moroccan National Tourism Office: getting around Morocco", href: "https://www.visitmorocco.com/en/travel-info/getting-around-morocco" },
    ],
  },
  {
    slug: "marrakech-medina-with-a-stroller",
    category: "destinations",
    topic: "Marrakech with children",
    layout: "stroller",
    contextLinks: [
      { sectionIndex: 0, before: "Use the ", href: "/blog/marrakech-with-kids/", linkText: "three day Marrakech plan", after: " to pair a short medina walk with a garden or a quieter afternoon." },
      { sectionIndex: 5, before: "Ask about stairs and where your driver can stop when you ", href: "/blog/riad-or-hotel-morocco-with-kids/", linkText: "compare a riad and a hotel", after: "." },
    ],
    tours: [],
    related: ["packing-for-morocco-with-kids", "morocco-family-road-trip-stops"],
    title: "Marrakech Medina with a Stroller",
    description: "Choose a manageable walk in Marrakech’s medina with a stroller. Plan the drop-off, narrow lanes, rest stops and return to your riad.",
    excerpt: "Choose where a stroller helps, where a carrier is easier and how to keep a Marrakech medina walk short and manageable.",
    image: moroccoPlaces.marrakechJemaa.src,
    imageAlt: moroccoPlaces.marrakechJemaa.alt,
    readingTime: "5 min read",
    table: {
      heading: "Where a stroller works—and where to carry it",
      caption: "Conditions vary by lane, time and crowd level. Check the route with your riad or guide before setting out.",
      headers: ["Part of the day", "Practical choice", "Family adjustment"],
      rows: [
        ["Busy souk lanes", "Baby carrier or sling; fold the stroller if you bring one", "Keep the group together and let children walk only where there is space."],
        ["A garden or broader modern street", "Compact stroller may be useful", "Check the route, entry rules and current opening information before leaving."],
        ["Taxi drop-off and riad approach", "Carrier plus a light bag", "Ask how close a car can get and where the property meets arriving guests."],
        ["Long city day", "Choose one short medina walk, then a rest stop", "Return to the accommodation before everyone is overtired."],
      ],
    },
    localNote: "A local Marrakech family guide describes souk lanes as uneven and crowded, with mopeds and other traffic moving through them. Ask your accommodation or guide about the exact route and drop-off point rather than assuming a stroller can reach the door.",
    photos: [moroccoPhotos.medina, moroccoPhotos.guideGuests],
    faqs: [
      { question: "Can I take a stroller into Marrakech’s souks?", answer: "You can bring one, but many souk lanes are difficult for a stroller because they are narrow, uneven and busy. A carrier or sling is easier for the tightest sections; use a compact stroller for broader routes if it suits your child." },
      { question: "Should I bring a baby carrier as well?", answer: "If your child is comfortable in one, a carrier gives you another option when the stroller cannot pass. Check your child’s needs and the day’s temperatures, and take breaks rather than carrying for longer than is comfortable." },
      { question: "Can a taxi drop us at the riad door?", answer: "Some medina accommodation is reached from a nearby gate or square. Ask your riad where the vehicle can stop, whether someone will meet you and how far you will carry the child and luggage." },
      { question: "How long should our first medina walk be?", answer: "There is no one time limit for every child. Start with one short route and one or two planned stops, then leave the rest of the day flexible. Heat, crowds and naps matter more than covering a checklist." },
    ],
    sections: [
      {
        heading: "Bring a carrier for the narrow parts",
        paragraphs: [
          "A stroller is useful when the pavement is broad and the route is clear. In the souks, you may meet uneven paving, bottlenecks and other traffic, so a small folding model is easier to manage than a large pushchair. A baby carrier gives you a second option, if your child is used to one.",
          "Do not plan to keep both hands on shopping bags and the stroller. Keep belongings light, let one adult guide the route and agree in advance who carries the child if the path narrows.",
        ],
      },
      {
        heading: "Choose one short loop instead of crossing the whole medina",
        paragraphs: [
          "Pick a clear start, one main stop and a return point before you set off. If the children are enjoying the walk, add another lane; if they are done, head back rather than trying to reach the next landmark because it is on the map.",
          "Share your accommodation pin with another adult and ask the riad to name a meeting point in case your group gets separated. This is especially helpful on the first day, when the lanes may feel unfamiliar.",
        ],
      },
      {
        heading: "Leave space for a quieter part of the day",
        paragraphs: [
          "A medina outing works better as one part of the day than as a full-day march. Pair it with lunch, a courtyard break or a garden where children can pause. Confirm current opening hours for any paid attraction before planning a route around it.",
        ],
      },
      {
        heading: "Tell your guide about the stroller before the walk",
        paragraphs: [
          "If you book a local guide, say whether you have a stroller, carrier or both. Ask for a route with a suitable start and finish point and agree how long you want to be out. A private family itinerary can leave Marrakech time flexible, but the exact walking plan should be confirmed with the guide for that day.",
        ],
      },
      {
        heading: "Plan the return while everyone still has energy",
        paragraphs: [
          "Choose a clear end point for the walk and agree how the family will return to the riad. If the driver cannot reach the door, ask where the nearest accessible pickup is and how long the walk back will take.",
          "A shorter loop with an easy return often works better than extending the outing because the children seem fine at the start. Keep the carrier available for the final stretch if the stroller becomes difficult.",
        ],
      },
      {
        heading: "Match the route to the stroller you actually have",
        paragraphs: [
          "A compact travel stroller and a larger all-terrain model behave differently on cobbles, steps and narrow lanes. Think about whether an adult can lift it over a short step, turn it around in a busy passage and fold it for a car or taxi. If not, a carrier may be more reliable for some outings.",
          "Ask the guide or hotel to describe the surface and walking distance, not only whether the medina is accessible. The family can then decide which parts suit wheels and which are better done with a carrier or a shorter route.",
        ],
      },
      {
        heading: "Choose a base with a comfortable place to pause",
        paragraphs: [
          "A stroller walk is easier when the family has a nearby place to sit, feed a baby or change plans. Before leaving, identify a café, garden or accommodation where you can stop without crossing the busiest lanes again. This creates a natural turnaround point if the streets become crowded.",
          "Keep the day’s route in one area and save distant sights for another outing. Short distances between stops can be more valuable than covering a larger part of the medina, especially when the stroller must be lifted or folded several times.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Marrakech City Guide: family walking and stroller notes", href: "https://www.marrakech-cityguide.com/en/guides/marrakech-with-family" },
      { label: "Moroccan National Tourism Office: getting around Morocco", href: "https://www.visitmorocco.com/en/travel-info/getting-around-morocco" },
      { label: "Morocco Travel Experts: family tour planning", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
    ],
  },
  {
    slug: "riad-or-hotel-morocco-with-kids",
    category: "planning",
    topic: "Where to stay",
    layout: "stay",
    contextLinks: [
      { sectionIndex: 0, before: "Use the ", href: "/blog/morocco-family-trip-budget/", linkText: "family budget worksheet", after: " to compare the cost of the actual rooms you need." },
      { sectionIndex: 1, before: "If your accommodation is inside Marrakech’s old city, read ", href: "/blog/marrakech-medina-with-a-stroller/", linkText: "how to plan the drop-off and medina walk with a stroller", after: "." },
    ],
    tours: [],
    related: ["how-many-days-in-morocco-with-kids", "packing-for-morocco-with-kids"],
    title: "Riad or Hotel in Morocco with Kids?",
    description: "Compare riads and hotels by room layout, stairs, pool access, breakfast and where your driver can drop you off. Ask these questions before reserving.",
    excerpt: "Compare room layout, stairs, pool safety, vehicle access and location before choosing a riad or hotel for a Morocco family trip.",
    image: moroccoPlaces.fesMedina.src,
    imageAlt: moroccoPlaces.fesMedina.alt,
    readingTime: "5 min read",
    table: {
      heading: "Choose by the family’s actual needs",
      caption: "These are common trade-offs, not guarantees. Each property and room should be checked individually before booking.",
      headers: ["What matters to your family", "A riad may work well when…", "A hotel may work well when…"],
      rows: [
        ["Being near the old city", "You want a medina location and are comfortable walking the final stretch from vehicle access.", "You prefer easier car access and can take a short ride or walk to the medina."],
        ["Stairs and mobility", "The property confirms a suitable ground-floor room and route for your group.", "You need a lift, step-free access or less stair climbing."],
        ["Pool time", "You have checked the pool’s depth, access and supervision needs for your children.", "You want a larger pool or grounds, and have confirmed what is actually available."],
        ["Family sleeping setup", "The exact room has enough beds and privacy for your party.", "The hotel confirms connecting rooms or a family room for your dates."],
      ],
    },
    localNote: "Morocco Travel Experts lists hotels, riads and desert stays, but a directory entry does not confirm current availability or family suitability. Ask for the exact property, room configuration, stairs, pool details and nearest vehicle drop-off in your proposal.",
    photos: [moroccoPhotos.riad, moroccoPhotos.desertCamp],
    faqs: [
      { question: "Are riads suitable for young children?", answer: "Some are, but ask about steep stairs, courtyard access, room locks and pool supervision before booking. A riad’s name or photographs do not tell you whether a specific room fits your family." },
      { question: "Are hotels easier with a stroller or heavy luggage?", answer: "They may be, particularly if the property has vehicle access and lifts. Confirm those features for the actual hotel; do not assume every hotel entrance or room is step-free." },
      { question: "Should we split the stay between a riad and a hotel?", answer: "It can combine a medina stay with a roomier or pool-focused stay. Each move also takes time, so it is most useful when you have enough nights to enjoy both places." },
      { question: "What should we ask before paying?", answer: "Request the property and room name, bed arrangement, floor, lift or stairs, pool details, air-conditioning or heating, breakfast, vehicle access and cancellation terms in writing." },
    ],
    sections: [
      {
        heading: "Book the room, not the label",
        paragraphs: [
          "The word “family room” can describe different layouts. Ask whether children sleep in the same room, on a sofa bed or in a connecting room, and whether the arrangement is available for your dates. Request photos of the exact room category rather than assuming every room in a property is identical.",
          "If a child needs a cot or a particular sleeping arrangement, get confirmation from the property before finalizing the route. Keep the answer with your booking documents.",
        ],
      },
      {
        heading: "Check the arrival walk and stairs",
        paragraphs: [
          "Some medina lanes cannot be reached by car, so the final approach may be on foot. Ask where a taxi can stop, who meets you and how far the family will carry bags. If anyone has mobility needs or a stroller, include that information when the operator proposes accommodation.",
        ],
      },
      {
        heading: "Treat a courtyard pool as a feature to inspect",
        paragraphs: [
          "Pool size, depth, barriers and supervision arrangements vary by property. Ask for the relevant details and decide whether they meet your family’s needs. Do not assume that a pool shown in a photo is fenced, staffed or suitable for a child who cannot swim.",
        ],
        note: "No accommodation type removes the need for adult supervision around water. Check the property’s actual setup before booking.",
      },
      {
        heading: "Balance atmosphere with the number of hotel changes",
        paragraphs: [
          "A medina riad and a larger hotel can offer different parts of a trip. Splitting the stay may be worthwhile if both experiences matter, but another check-in also means repacking and transfer time. On a short family holiday, one well-chosen base can be easier than changing properties to chase every feature.",
        ],
      },
      {
        heading: "Ask how the room will work at bedtime",
        paragraphs: [
          "A family room can mean one shared space, an adjoining room or a separate sitting area. Ask where each child will sleep and whether adults can keep a light on after the children settle. Request the exact room description for your dates rather than relying on the property label.",
          "Check quiet hours, street noise and whether the room faces an inner courtyard or a busy road. Those details are difficult to infer from a property name or a few listing photos.",
        ],
      },
      {
        heading: "Check the breakfast and meal arrangement",
        paragraphs: [
          "Ask when breakfast is served, whether an early departure can be accommodated and what the property can do if a child has a dietary requirement. If your family arrives after dinner time, confirm whether a meal can be arranged or identify a nearby option.",
          "Do not assume every hotel includes the same meals. Compare the written offer with the day-by-day route so the family knows which lunches and dinners need separate planning.",
        ],
      },
      {
        heading: "Ask how the room works after bedtime",
        paragraphs: [
          "A room can look generous in photographs but leave little quiet space once a child is asleep. Ask where the beds are, whether doors separate sleeping areas, what the evening noise is like and whether the family can reach the bathroom without waking everyone. Describe your children’s bedtime routine when requesting options.",
          "If you need a cot, extra bed or adjoining rooms, ask the property to confirm it on the reservation rather than relying on a general note. Check the cancellation terms for any room type that is essential to the family.",
        ],
      },
      {
        heading: "Compare the real family rate before choosing",
        paragraphs: [
          "Ask whether the quoted price covers every person, breakfast, local taxes, parking, transfers and any extra bed. A family rate can mean different things from one property to another. Write down the total for the actual number of adults and children before comparing it with another hotel.",
          "For a multi-city route, compare the room cost with how easy it is to reach the day’s first stop. A slightly different location may save time or taxi journeys, but the best choice depends on your planned visits and how much walking the children can manage.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Destination.ma: riad or hotel trade-offs for a Morocco trip", href: "https://destination.ma/guides/riad-or-hotel-in-morocco" },
      { label: "Morocco Travel Experts hotel directory", href: "https://moroccotravelexperts.com/hotels/" },
      { label: "Morocco Travel Experts: family tour options", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
    ],
  },
  {
    slug: "morocco-food-allergies-with-kids",
    category: "planning",
    topic: "Food and health planning",
    layout: "food",
    contextLinks: [
      { sectionIndex: 1, before: "If one of your nights is in a tent, include the meal questions in the ", href: "/blog/morocco-desert-camp-with-kids/", linkText: "desert camp checklist", after: " when you contact the camp kitchen." },
      { sectionIndex: 2, before: "Use the ", href: "/blog/morocco-family-road-trip-stops/", linkText: "long drive and overnight stop guide", after: " to decide when to carry food and where a planned meal can fit." },
    ],
    tours: [],
    related: ["packing-for-morocco-with-kids", "how-many-days-in-morocco-with-kids"],
    title: "Food Allergies in Morocco: Planning Meals with Kids",
    description: "Prepare questions for hotel kitchens, restaurants and drivers before travelling in Morocco with a child who has a food allergy.",
    excerpt: "Plan how to explain an allergy, check meals and keep the right medical information available during a family trip.",
    image: moroccoPlaces.marrakechJemaa.src,
    imageAlt: "Food stalls and market life in Marrakech",
    readingTime: "5 min read",
    table: {
      heading: "Food-allergy checks at each stage of the trip",
      caption: "Use this as a communication checklist, not a guarantee that a meal is allergen-free. Follow your clinician’s advice for your child’s condition.",
      headers: ["When", "What to confirm", "A practical family step"],
      rows: [
        ["Before departure", "Medication, travel-health advice and the allergy wording your child needs", "Ask your child’s clinician what to carry and check the entry rules for any prescribed medicine."],
        ["With the planner or hotel", "Which meals are included and who will pass the allergy information to the provider", "Send the details in writing and request confirmation for each property or meal."],
        ["At a restaurant", "Ingredients and possible cross-contact for the exact dish", "Explain the allergy each time and avoid food when the answer is uncertain."],
        ["On a transfer day", "Where and when the family can stop for a suitable meal", "Agree on meal stops in advance and keep a safe backup snack if appropriate."],
      ],
    },
    localNote: "On a long transfer, lunch is part of the route rather than an afterthought. Share the allergy with the planner before the itinerary is set, then ask who will reconfirm it with the hotel, restaurant or activity provider on the day.",
    photos: [moroccoPhotos.foodMarket, moroccoPhotos.guideGuests],
    faqs: [
      { question: "Are allergen details always listed on menus in Morocco?", answer: "No. UK government travel advice says allergen information is not consistently provided and warns of cross-contamination risks. Ask directly about the specific dish and avoid it if the answer is unclear." },
      { question: "Should we tell the tour operator before booking?", answer: "Yes. Share the allergy and the level of risk before the route and included meals are agreed. Ask which providers have been contacted and request meal arrangements in writing." },
      { question: "Should we carry an allergy card in French or Arabic?", answer: "A translated card can help explain the allergy, but it cannot replace a direct conversation about ingredients and cross-contact. Prepare the wording with someone who can translate the medical terms accurately." },
      { question: "What medication should we bring?", answer: "Ask your child’s clinician what the family should carry and check the destination’s rules for prescribed medicines. Keep emergency medication accessible according to the clinician’s instructions." },
    ],
    sections: [
      {
        heading: "Prepare a clear explanation before the first meal",
        paragraphs: [
          "Write the allergy in plain language and identify what must be avoided. If cross-contact is a serious concern, say that explicitly rather than relying on a general note such as “no nuts.” Prepare a translated card with help from a fluent speaker or health professional, and keep the original wording with it.",
          "Tell the operator before an itinerary is planned. A note in the booking form is only a starting point; ask who will pass it to the hotel, guide, restaurant or activity provider.",
        ],
      },
      {
        heading: "Ask about the exact meal, not only the cuisine",
        paragraphs: [
          "A familiar dish name does not confirm its ingredients or preparation method. Ask about the specific meal being served and how it is prepared. UK government advice notes that allergen information is not consistently available in Morocco, so treat an unclear answer as a reason to choose another option.",
        ],
        note: "This guide is not medical advice. Follow your clinician’s plan for diagnosis, medication and emergency response.",
      },
      {
        heading: "Plan lunch and stop times on long transfers",
        paragraphs: [
          "On a road day, the driver’s stop location can determine which food options are available. Share the allergy before the trip and agree on likely meal stops or a suitable packed meal. Keep a backup food your child can safely eat if the planned restaurant cannot confirm ingredients.",
        ],
      },
      {
        heading: "Keep medical arrangements in the adult’s day bag",
        paragraphs: [
          "Carry the medicines your clinician has advised, the written allergy plan and travel-health insurance details in an accessible place. Check whether any prescribed medicine has restrictions at the border. In an emergency, follow the family’s medical plan and seek local medical help.",
        ],
      },
      {
        heading: "Use the same allergy message at every handoff",
        paragraphs: [
          "The allergy should reach the person preparing the meal, not only the person who took the booking. Repeat the key information to the guide, restaurant or accommodation when the meal is arranged, and ask who will speak with the kitchen.",
          "If the response is uncertain, use a safe alternative from your family’s plan rather than trying to negotiate ingredients while a hungry child waits. That may mean eating a familiar snack or changing the lunch stop.",
        ],
      },
      {
        heading: "Review the plan before every long transfer",
        paragraphs: [
          "The family may eat at a different place each day, so confirm meal stops again before a long drive. Tell the driver what kind of stop is needed and ask whether the next suitable option is on the route.",
          "Keep the clinician’s emergency instructions accessible and make sure the adults travelling with the child know where the medication is. A clear plan is easier to follow when the adults have agreed on it before departure.",
        ],
      },
      {
        heading: "Carry the allergy message in a form adults can share",
        paragraphs: [
          "A short written explanation can help adults communicate the allergy consistently when they are tired or moving between restaurants. Ask your clinician or a qualified translator to help prepare wording in the language or languages you expect to use, and include the ingredient that must be avoided and the seriousness of the reaction.",
          "Show the message to the person who prepares the food, not only the person taking the order. If ingredients or preparation cannot be confirmed, follow your family’s medical plan and choose a known safe alternative.",
        ],
      },
      {
        heading: "Make the first restaurant meal a low-pressure check",
        paragraphs: [
          "Choose a meal where the family has time to explain the allergy and ask about ingredients before ordering. Let the staff know what the child cannot eat and ask whether the kitchen can avoid the ingredient and cross-contact. If the answer is uncertain, use the safe option in your medical plan.",
          "It may help to choose an accommodation close to more than one meal option, especially on the first night. That gives adults room to change plans without trying to solve a complicated food question while a hungry child is tired.",
        ],
      },
    ],
    sourceLinks: [
      { label: "UK FCDO Morocco health advice: food hygiene and allergies", href: "https://www.gov.uk/foreign-travel-advice/morocco/health" },
      { label: "CDC Morocco traveler health information", href: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/morocco" },
      { label: "Morocco Travel Experts: plan a family tour", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
    ],
  },
  {
    slug: "agafay-or-merzouga-with-kids",
    category: "desert",
    topic: "Choosing a family desert trip",
    layout: "desert-choice",
    contextLinks: [
      { sectionIndex: 2, before: "Compare ", href: "/tours/family-sahara-adventure/", linkText: "the four day route to Merzouga and back", after: " with your actual flight times." },
      { sectionIndex: 4, before: "If you decide to stay the night, use the ", href: "/blog/morocco-desert-camp-with-kids/", linkText: "desert camp checklist", after: " to ask about beds, meals and transport." },
    ],
    tours: [],
    related: ["morocco-desert-camp-with-kids", "7-days-in-morocco-with-kids-without-sahara", "best-season-for-a-morocco-family-trip"],
    title: "Agafay vs Merzouga with Kids",
    description: "Compare Agafay’s rocky landscape near Marrakech with Merzouga’s Sahara dunes. See how the drives, overnight stays and activities differ.",
    excerpt: "Compare Agafay’s rocky landscape close to Marrakech with Merzouga’s major dunes and longer family road itinerary.",
    image: moroccoPhotos.desertCamp.src,
    imageAlt: "Morocco desert camp at sunset",
    readingTime: "6 min read",
    table: {
      heading: "Agafay and Merzouga suit different family trips",
      caption: "A route-planning comparison. Confirm actual pickup, transfer and activity details for your dates.",
      headers: ["Question", "Agafay", "Merzouga"],
      rows: [
        ["What does the landscape look like?", "A rocky, arid landscape often described with rocky dunes; it is not the towering sand-sea near Merzouga.", "Large orange sand dunes around Erg Chebbi, with camp and dune activities."],
        ["How does it fit a Marrakech stay?", "Official tourism pages estimate roughly 30 to 45 minutes from Marrakech; the actual pickup time depends on your starting point and road conditions.", "A remote destination reached as part of a multi-day overland itinerary, not a quick Marrakech day trip."],
        ["Best family use", "A short outing or one-night stay when the family has limited time outside Marrakech.", "A major trip highlight when the family has enough days for the road, stops and overnight stays."],
      ],
    },
    localNote: "The Moroccan National Tourism Office gives estimates of about 30 minutes to 45 minutes from Marrakech for Agafay and describes its terrain as rocky. Merzouga is known for its large dunes, but the drive and overnight stops are a substantial part of that experience. Ask for the full hotel-to-hotel schedule, not just the camp night.",
    photos: [moroccoPhotos.desertCamp, moroccoPhotos.saharaCamel],
    faqs: [
      { question: "Is Agafay part of the Sahara?", answer: "Agafay is a rocky landscape near Marrakech, while Merzouga is associated with the large Sahara dunes of Erg Chebbi. They offer different scenery and route commitments, so choose based on the landscape your family wants to see." },
      { question: "Can we visit Merzouga as a day trip from Marrakech?", answer: "No. Merzouga is reached on a multi-day road itinerary from Marrakech. The route includes long transfers and overnight stops, so plan the journey before booking a desert camp." },
      { question: "Which desert is easier with young children?", answer: "Agafay usually requires less time on the road from Marrakech, but activity conditions still matter. Ask about vehicle time, shade, toilets, meal timing and the age or height rules for any booked ride." },
      { question: "Does Agafay have sand dunes?", answer: "The Moroccan National Tourism Office describes Agafay’s landscape as rocky dunes. If your family specifically wants high orange sand dunes, compare the Merzouga route instead." },
    ],
    sections: [
      {
        heading: "First decide what your family means by desert",
        paragraphs: [
          "The word “desert” can mean a nearby dry landscape, a night under open skies or a long trip to a field of tall dunes. Those are not interchangeable experiences. Agafay works as a nearby change of scenery from Marrakech; Merzouga delivers the sweeping dunes many families picture when they imagine the Sahara.",
          "Before comparing camps, ask each child what they are hoping to do: see dunes, ride a camel, sleep outside the city, or simply have a quiet evening. That answer may point to a different route than the one with the most activities.",
        ],
      },
      {
        heading: "Choose Agafay when time is tight",
        paragraphs: [
          "The Moroccan National Tourism Office gives estimates of roughly 30 to 45 minutes from Marrakech for Agafay and describes its terrain as rocky. That makes it a practical candidate for a short excursion or an overnight outside the city when you do not have several days for the Sahara road.",
          "Ask the camp how much of the visit is spent in a vehicle, whether there is shade, what food is served and which activities have age or height limits. Families with a baby or a child who tires quickly may value a simple sunset and dinner more than a tightly scheduled ride.",
        ],
      },
      {
        heading: "Choose Merzouga for the major dunes and give it time",
        paragraphs: [
          "Merzouga is the choice when the family’s priority is the large Sahara dunes, a camp night and time on the sand. The journey from Marrakech is long enough that the night at camp should be treated as one part of a multi-day route, with stops and sleep arranged around it.",
          "Ask for the proposed departure times, expected driving on each day, meal breaks, luggage arrangements and how guests reach the camp. Confirm whether a camel ride, sandboarding or a vehicle transfer is included, optional or unsuitable for a member of your family.",
        ],
      },
      {
        heading: "Choose the route your children can enjoy, not just endure",
        paragraphs: [
          "For younger children, a shorter outing may leave more energy for Marrakech itself. Older children who are excited by geology, night skies and the dunes may find the longer journey worthwhile, provided the itinerary gives them time to rest between transfers.",
          "If the Sahara is a must, consider removing a city stop or adding a night rather than squeezing the same route into fewer days. If it is not essential, keep the family base in Marrakech and choose Agafay as a separate outing. The best choice is the one whose travel days still leave room for the experience.",
        ],
      },
      {
        heading: "Ask what the camp night actually includes",
        paragraphs: [
          "A photo of a tent does not tell you how the evening will work for your family. Ask whether the quoted camp has a private bathroom, indoor heating or cooling, family bedding, electricity, meals and a vehicle option for reaching the tents. Confirm whether the night is at a fixed camp or another accommodation outside the dunes.",
          "Then check the activity plan separately. Ask which activities are included, whether children can watch instead of join, and what happens if someone is tired or would rather return to the tent. A relaxed camp evening can be more valuable than a long list of add-ons.",
        ],
      },
      {
        heading: "Use the overnight as a weather and energy decision",
        paragraphs: [
          "A nearby outing can still feel hot, windy or tiring, and desert nights may feel cool even after a warm afternoon. Ask the operator about the expected conditions for your travel month and what clothing, water and sun protection the family should bring. Pack one easy layer for each person rather than assuming the temperature will stay the same.",
          "If the trip is optional, place it after a quieter Marrakech day rather than immediately after a late arrival. If the Sahara is the central reason for travelling, protect the overnight with a realistic route and reduce the number of other stops around it.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Agafay, Merzouga and southern desert experiences", href: "https://www.visitmorocco.com/en/see-do/nature/infinite-emotions-great-south" },
      { label: "Moroccan National Tourism Office: Marrakech day trips and distances", href: "https://www.visitmorocco.com/en/travel/marrakesh" },
      { label: "Morocco Travel Experts: family tour options", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
      { label: "Morocco Travel Experts: family itinerary drive estimates", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "essaouira-with-kids",
    category: "coast",
    topic: "Coast and city planning",
    layout: "coast",
    contextLinks: [
      { sectionIndex: 0, before: "See how the drive works in a ", href: "/blog/7-days-in-morocco-with-kids-without-sahara/", linkText: "week divided between Marrakech and Essaouira", after: "." },
      { sectionIndex: 2, before: "If swimming is a priority, compare ", href: "/blog/best-family-beaches-in-morocco/", linkText: "other family beach bases in Morocco", after: " before you choose your coast stay." },
    ],
    tours: [],
    related: ["7-days-in-morocco-with-kids-without-sahara", "best-family-beaches-in-morocco", "agadir-with-kids"],
    title: "Essaouira with Kids: Day Trip or Overnight?",
    description: "Decide between a day trip and an overnight in Essaouira with kids. Plan the drive from Marrakech, port and ramparts walk, and time by the beach.",
    excerpt: "Plan the road time, choose a simple medina-and-port route, and decide whether one day is enough for your family.",
    image: moroccoPlaces.essaouiraCitadel.src,
    imageAlt: "Essaouira harbor and stone ramparts",
    readingTime: "6 min read",
    table: {
      heading: "Plan Essaouira around the time you actually have",
      caption: "The day-trip drive estimate comes from the Moroccan National Tourism Office; add time for pickup, traffic and family stops.",
      headers: ["Available time", "A family-friendly focus", "What to keep in mind"],
      rows: [
        ["One day from Marrakech", "Choose the medina and port, or a shorter beach visit; leave time for the return drive.", "The drive is about 2.5 hours each way, so a day trip includes a significant amount of road time."],
        ["One night", "Walk the ramparts, explore the medina and port, then take the beach at a relaxed pace.", "An overnight removes the same-day return and gives the family more choice around meals and rest."],
        ["Two or more nights", "Add a slower beach day, a local activity or time in the surrounding coast.", "Check weather and water conditions before choosing a water activity; supervision remains essential."],
      ],
    },
    localNote: "The official Visit Essaouira tourism portal describes family options around the medina, beach, port and ramparts. The Moroccan National Tourism Office estimates the Marrakech–Essaouira drive at about 2.5 hours; treat that as a route estimate and confirm the pickup and stop plan.",
    photos: [moroccoPhotos.atlanticCoast, moroccoPhotos.cultureCrafts],
    faqs: [
      { question: "Is Essaouira a good day trip from Marrakech with children?", answer: "It can work if your family is comfortable with about 2.5 hours of driving each way and is happy to choose only a few stops. An overnight is more comfortable for families who want the medina, port and beach without watching the clock." },
      { question: "What can children do in Essaouira?", answer: "The official local tourism portal highlights the medina, port, ramparts, beach and family activities such as horse or camel rides. Check the provider’s age, supervision and equipment arrangements before booking an activity." },
      { question: "Is it safe for children to swim at Essaouira beach?", answer: "Do not assume that a beach has lifeguard cover or calm water. UK travel advice warns that Moroccan beaches can have limited lifeguard provision and strong currents. Check local signs and conditions and supervise children closely." },
      { question: "Should we stay in the medina or near the beach?", answer: "Choose based on your family’s priorities and mobility. Ask the property about stairs, vehicle access, room layout and walking distance to the places you plan to visit rather than choosing by area name alone." },
    ],
    sections: [
      {
        heading: "Count the road time before calling it an easy day trip",
        paragraphs: [
          "The Moroccan National Tourism Office estimates the drive from Marrakech to Essaouira at about two and a half hours. That is a one-way planning figure; add your pickup time, traffic, comfort breaks and any meal stop. A same-day return can therefore leave less time in town than the map suggests.",
          "For a day trip, decide on one main outing and one backup. Do not promise children a full medina visit, long beach time, a horse ride, a seafood lunch and a relaxed return unless the timing has been checked with the driver.",
        ],
      },
      {
        heading: "Use the medina, port and ramparts as a compact route",
        paragraphs: [
          "Essaouira’s fortified medina, harbor and ramparts give families several different sights within one coastal stop. Start with the part your children are most curious about, then take a break before adding another walk. The narrow lanes and stone edges are interesting to explore, but keep children close around gates, steps and the waterfront.",
          "The local tourism portal lists restaurants and shops in the medina and describes the active fishing port. If fresh seafood is part of the plan, ask what is available that day and check ingredients carefully for allergies or dietary needs.",
        ],
      },
      {
        heading: "Treat beach time as weather-dependent",
        paragraphs: [
          "The Atlantic beach offers open space, but it is not automatically a swimming beach for every family on every day. Wind, waves and currents can change the experience. UK travel advice notes that lifeguard cover may be limited or absent at Moroccan beaches and that strong currents can occur.",
          "Check local conditions when you arrive, follow any safety signs and keep an adult within reach of children near the water. For horse rides, camel rides or surf lessons, confirm the operator, supervision, equipment and minimum age directly with the provider.",
        ],
      },
      {
        heading: "Stay overnight if the family wants a slower coast day",
        paragraphs: [
          "An overnight makes it easier to see the harbor, walk the ramparts near sunset and return to the accommodation for a rest without beginning the drive back immediately. It is often the better option for a baby or young child, a family arriving after a long journey, or anyone who wants beach time as well as the medina.",
          "Ask the accommodation how close a vehicle can get, whether there are stairs and how far it is to the beach. A family room listing does not answer those practical questions. If you have only a few nights in Morocco, compare the coast with the Sahara and Atlas before adding another hotel change.",
        ],
      },
      {
        heading: "Choose a coast visit around wind and walking tolerance",
        paragraphs: [
          "Essaouira is known for an exposed Atlantic setting, so a breezy day can change how long a child wants to stay on the sand. Bring a light layer and plan a second option within easy reach, such as the harbor or a sheltered meal stop. Recheck the forecast and conditions on the day instead of promising a long swim.",
          "For a young child or anyone who tires on uneven surfaces, decide where the driver can drop you and how much walking is required to return. Ask the accommodation or guide about steps, cobbles and vehicle access before setting a route through the medina.",
        ],
      },
      {
        heading: "Choose one activity after checking the day’s conditions",
        paragraphs: [
          "A family may be tempted to book a beach ride, water activity and long medina walk in the same afternoon. Ask each provider how much time the activity takes, what equipment is included, the age or height rules and what happens if conditions change. Let the children choose the outing that matters most.",
          "If the water or wind is not suitable, make the harbor or a sheltered lunch the main plan instead. A coast day still feels worthwhile when the family knows its alternative and is not trying to recover the cost of an activity that no longer feels comfortable.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Visit Essaouira: official family activity and destination guide", href: "https://visitessaouira.com/experiences/famille/" },
      { label: "Moroccan National Tourism Office: Marrakech and day-trip distances", href: "https://www.visitmorocco.com/en/travel/marrakesh" },
      { label: "UK FCDO Morocco travel advice: beach safety", href: "https://www.gov.uk/foreign-travel-advice/morocco/safety-and-security" },
      { label: "Morocco Travel Experts: family itinerary route estimates", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "atlas-mountains-with-kids",
    category: "mountains",
    topic: "Atlas day trips",
    layout: "mountain-day",
    contextLinks: [
      { sectionIndex: 0, before: "Start from the ", href: "/blog/marrakech-with-kids/", linkText: "three day Marrakech plan", after: " if you want just one day in the foothills." },
      { sectionIndex: 1, before: "Compare ", href: "/blog/ourika-valley-with-kids/", linkText: "a short Ourika Valley outing", after: " with a guided walk near Imlil." },
    ],
    tours: [],
    related: ["ourika-valley-with-kids", "imlil-with-kids", "ouzoud-waterfalls-with-kids"],
    title: "Atlas Mountains with Kids: Day Trips from Marrakech",
    description: "Choose an Atlas Mountains day trip with kids. Compare a valley visit, a guided walk and an overnight by road time, walking distance and terrain.",
    excerpt: "Compare a short valley outing, a village walk and a summit trek before choosing what fits your children and the day’s road plan.",
    image: moroccoPlaces.highAtlas.src,
    imageAlt: "The High Atlas Mountains in Morocco",
    readingTime: "6 min read",
    table: {
      heading: "Match the Atlas outing to your family’s walking day",
      caption: "These are planning formats, not guarantees of trail difficulty. Ask the local guide for the exact route and current conditions.",
      headers: ["Outing type", "Family fit to consider", "Ask before you go"],
      rows: [
        ["Scenic drive with short stops", "A low-walking option for mixed ages or limited time.", "How many hours are in the vehicle, where stops are planned and whether toilets or food are available."],
        ["Lower valley walk", "A flexible day for children who enjoy walking and can handle the specific route.", "Distance, elevation change, surface, shade, water stops and whether the route can be shortened."],
        ["Imlil or village-based visit", "A way to spend time in an Atlas village without treating the summit as the goal.", "Where the walk starts, local guide arrangements, transport access and the return time."],
        ["Mount Toubkal summit trek", "A serious multi-day mountain trip for suitably prepared participants.", "The official tourism office describes it as physically challenging and taking two or three days; check current age, fitness and guide requirements."],
      ],
    },
    localNote: "The Moroccan National Tourism Office describes the Toubkal summit route as a physically challenging two- or three-day trek beginning in Imlil. For a family day, ask for a separate lower-valley or village route and get its distance, elevation and return timing before setting out.",
    photos: [moroccoPhotos.atlasWaterfall, moroccoPhotos.guideGuests],
    faqs: [
      { question: "Can children hike Mount Toubkal as a day trip?", answer: "The Moroccan National Tourism Office describes the summit trek as physically challenging and taking two or three days. It is not a standard day trip. Ask a qualified local operator about current suitability and requirements before considering a summit attempt." },
      { question: "Which Atlas trip works for younger children?", answer: "There is no universal age cutoff. Ask the guide for a short route with the distance, elevation, surface, shade, toilets and options to turn back. A scenic drive with brief stops may suit some families better than a hike." },
      { question: "Is Ourika Valley an option from Marrakech?", answer: "Morocco Travel Experts describes a half-day Ourika Valley outing as a shorter Atlas option from Marrakech. Confirm the current pickup time, walking section, waterfall access and road conditions for your date." },
      { question: "What should we bring on an Atlas day walk?", answer: "Ask the guide what is available along the route, then bring suitable walking shoes, water, sun protection and a layer for changing conditions. Follow local advice and do not continue if a child is tired or the route feels unsuitable." },
    ],
    sections: [
      {
        heading: "Pick a walking day, not a mountain label",
        paragraphs: [
          "“The Atlas Mountains” covers very different outings: a drive with viewpoints, a village visit, a short valley walk and a multi-day summit trek. Before booking, describe what your children can comfortably walk at home and ask for the matching route rather than relying on a broad label such as “easy hike.”",
          "Request the planned distance, total ascent, trail surface, time on foot, shade and likely return time. Ask if the guide can shorten the walk if a child gets tired. Those details are more useful than choosing based on an age range in a tour description.",
        ],
      },
      {
        heading: "Use a short valley visit for a limited day",
        paragraphs: [
          "If your family is based in Marrakech and has one open day, a shorter Atlas valley outing may be easier to fit than a full-day mountain route. Morocco Travel Experts describes Ourika as a half-day option about an hour from Marrakech, with a waterfall walk and lunch; confirm the current plan and walking demands before you book.",
          "A short trip still needs practical checks: who provides transport, where the walk begins, whether the path includes steps or uneven ground, and whether there is a place to rest. Children who are not used to hiking may enjoy a shorter walk more than a longer route with a scenic name.",
        ],
      },
      {
        heading: "Keep Toubkal separate from a casual family walk",
        paragraphs: [
          "Mount Toubkal is the highest summit in North Africa, and the Moroccan National Tourism Office describes its ascent as physically challenging and taking two or three days from Imlil. That is a different commitment from an afternoon in a valley. Do not plan it as a day activity or assume that a child’s enthusiasm is a substitute for fitness and preparation.",
          "Families considering a trek should ask a qualified local operator about the route, season, guide arrangements, equipment, overnight accommodation and age or fitness requirements. Follow current local conditions and be prepared to choose another outing.",
        ],
      },
      {
        heading: "Make the mountain day comfortable for mixed ages",
        paragraphs: [
          "Agree on a turnaround point before the walk and keep a flexible finish time. Bring water, sun protection and a warm layer, and check whether food or toilets are available along the exact route. In mountain weather, conditions can differ from Marrakech, so ask the guide what to wear on the day.",
          "If children are travelling with grandparents or siblings of different ages, plan a shared scenic stop and a shorter optional walk. One family member can enjoy the village or café while others continue with the guide; avoid making everyone complete the same distance.",
        ],
      },
      {
        heading: "Ask the guide to describe the route in measurable terms",
        paragraphs: [
          "Words such as easy, family-friendly and gentle depend on the person using them. Before booking, ask how far the walk is, how much climbing it involves, whether the surface is rocky or paved, and how long the family will be away from the vehicle. Request a route description that makes sense to the least experienced walker in your group.",
          "Also ask where the nearest shade, toilet, water and meal stop will be. These details can determine whether a route works for a child much more than the view at the end. If the answers are vague, choose a shorter outing or a scenic drive with optional walking.",
        ],
      },
      {
        heading: "Protect the return journey from a too-full schedule",
        paragraphs: [
          "A day trip combines road travel, mountain weather and time outdoors. Leave enough daylight and energy for the drive back, and avoid adding a second distant attraction after a walk. If your children still have energy, a short stop on the way home is easier to decide in the moment than to promise before you leave.",
          "For an overnight Atlas stay, ask when the room will be available and whether dinner is arranged at the accommodation. A night in the mountains can make the trip feel less rushed, but the exact transfer, room and meal details should be confirmed with the provider.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Atlas Mountains and Mount Toubkal", href: "https://www.visitmorocco.com/en/see-do/nature/green-destinations-and-mountains" },
      { label: "Morocco Travel Experts: Marrakech family day trips and Ourika option", href: "https://moroccotravelexperts.com/family-guide/marrakech-travel-guide/" },
      { label: "Morocco Travel Experts: family itinerary and route planning", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "morocco-during-ramadan-with-kids",
    category: "planning",
    topic: "Dates, customs and opening hours",
    layout: "ramadan",
    contextLinks: [
      { sectionIndex: 1, before: "If a child has an allergy, ask the hotel the ", href: "/blog/morocco-food-allergies-with-kids/", linkText: "meal and kitchen questions", after: " alongside its Ramadan meal schedule." },
      { sectionIndex: 3, before: "Use the ", href: "/morocco-family-travel-tips/", linkText: "checklist before you fly", after: " to check documents, transfers and the first night." },
    ],
    tours: [],
    related: ["best-season-for-a-morocco-family-trip", "morocco-by-train-with-kids", "morocco-food-allergies-with-kids"],
    title: "Morocco During Ramadan with Kids",
    description: "Plan meals, sightseeing hours and transfers for a Morocco family trip during Ramadan. Find out what to ask hotels and drivers before you leave.",
    excerpt: "Prepare for changed opening hours, different meal rhythms and a more active evening without assuming the whole country closes.",
    image: moroccoPhotos.foodMarket.src,
    imageAlt: "Moroccan food and market life",
    readingTime: "6 min read",
    table: {
      heading: "A family planning checklist for Ramadan dates",
      caption: "Local schedules can vary by city, business and year. Confirm arrangements with your accommodation, guide and transport provider.",
      headers: ["Planning issue", "What may change", "What families can do"],
      rows: [
        ["Dates and local time", "Ramadan follows a lunar calendar; official dates are confirmed close to the month, and Morocco may adjust its clock.", "Recheck the official dates and confirm flight, rail and pickup times with providers."],
        ["Meals and restaurants", "Some restaurants change opening hours, and hotel dining may be arranged differently during fasting hours.", "Ask your hotel where children can eat during the day and plan meals before long transfer days."],
        ["Sights and shops", "Public offices, shops and attractions may use adjusted schedules.", "Check opening hours directly rather than relying only on an old search listing."],
        ["Late afternoon transfers", "People may be tired before sunset, and road traffic can be less predictable around iftar.", "Avoid scheduling a long arrival right at sunset when possible; keep the family timetable flexible."],
      ],
    },
    localNote: "The UK FCDO advises visitors to check shop and restaurant hours during Ramadan, notes that fasting can cause late-afternoon tiredness and warns that driving may be erratic around dusk. Morocco’s public-administration ministry also says hours can change during the month. Reconfirm your own route locally.",
    photos: [moroccoPhotos.foodMarket, moroccoPhotos.cultureCrafts],
    faqs: [
      { question: "Can a family visit Morocco during Ramadan?", answer: "Yes. Plan for changed opening hours and meal arrangements, then ask your hotel or guide what will be available on your route. The month changes the daily rhythm, but it does not mean all travel services close." },
      { question: "Do children have to fast while visiting Morocco?", answer: "This guide is for travel planning, not religious or legal advice. Visitors should speak with their own family and hosts about personal practice. The practical step for tourists is to follow local customs and ask where daytime meals can be taken respectfully." },
      { question: "Will restaurants be open during the day?", answer: "Some will be open and some may change their hours. The UK FCDO recommends checking opening times and notes that hotels or restaurants serving food during fasting hours may screen dining areas. Confirm directly with your accommodation." },
      { question: "Should we avoid driving near sunset?", answer: "If your itinerary allows, avoid making a long transfer arrive exactly at sunset. UK travel advice warns that driving may be erratic around dusk when people are travelling home to break the fast." },
      { question: "Are Ramadan dates fixed far in advance?", answer: "The dates move each year because Ramadan follows the lunar calendar, and the official start is confirmed locally. Check current official dates before finalising flights and time-sensitive bookings." },
    ],
    sections: [
      {
        heading: "Expect a different daily rhythm, not a travel shutdown",
        paragraphs: [
          "Ramadan is a month of fasting and worship for Muslims. For visitors, the most practical change is the rhythm of the day: some businesses may open later or close earlier, while evenings can become livelier after the fast is broken. The exact pattern differs between cities and individual providers.",
          "The UK Foreign, Commonwealth & Development Office advises travellers to check local opening hours and ask their hotel, tour guide or business contacts for current information. Confirm the details that affect your family rather than relying on a general statement that “everything is open” or “everything is closed.”",
        ],
      },
      {
        heading: "Arrange daytime meals before the family is hungry",
        paragraphs: [
          "Ask your riad or hotel whether breakfast, lunch and room service are available during your stay. If you will be on a transfer day, confirm where the driver expects to stop and whether a suitable restaurant will be serving. Pack familiar snacks where appropriate, especially for children with specific dietary needs.",
          "Visitors are not expected to fast, but eating, drinking or smoking in public in daylight may cause offence. Ask your host where meals can be taken discreetly and follow the local guidance you receive. A thoughtful plan keeps children fed while respecting people who are fasting.",
        ],
      },
      {
        heading: "Keep evenings and transfer times flexible",
        paragraphs: [
          "Avoid building a rigid sightseeing schedule around an assumed closing time. Check monuments, shops and museums with the venue or guide, and allow a quiet break before late afternoon if children are tired. The Moroccan public-administration ministry notes that government schedules can change during Ramadan; private businesses set their own hours.",
          "Where possible, do not schedule a long road arrival right at sunset. The UK FCDO warns that late-afternoon tiredness and journeys home around dusk can affect traffic. A flexible pickup or an overnight in the next town may make a family route easier to manage.",
        ],
      },
      {
        heading: "Confirm dates, clocks and bookings close to travel",
        paragraphs: [
          "Ramadan follows the lunar calendar, so its dates move each year and the exact start is confirmed locally. If your trip overlaps the expected period, leave room for changes to train, attraction or meal plans and check the published dates again as your trip approaches.",
          "Moroccan official information notes that the national clock may shift around Ramadan, while official ministry guidance says public-service schedules can change. Confirm local time with your airline, rail provider, hotel and driver instead of using an old itinerary screenshot or an outdated booking email.",
        ],
      },
      {
        heading: "Set expectations with children in a respectful way",
        paragraphs: [
          "Before the trip, explain that many people around them will be fasting during daylight and that the city may feel quieter at one time of day and busier later. Children can still ask questions; the useful family preparation is to give them simple context and follow the guidance of the local people hosting you.",
          "Agree where the family will eat during the day and how to keep snacks discreet when appropriate. A clear plan avoids trying to make a hungry child wait while adults work out what is open, and it helps the family move through the day with consideration.",
        ],
      },
      {
        heading: "Ask the hotel and driver about your exact travel days",
        paragraphs: [
          "A general Ramadan notice cannot tell you whether a particular restaurant, museum or driver is available on a specific date. Send your accommodation and transfer schedule to the people arranging the trip and ask what needs to move earlier or later. Reconfirm any fixed appointment close to the visit.",
          "Keep one meal option, one short outing and one route back to the accommodation in mind for each day. This small amount of preparation gives the family room to adjust if a shop opens later or an evening transfer takes longer than expected.",
        ],
      },
    ],
    sourceLinks: [
      { label: "UK FCDO Morocco advice: Ramadan, opening hours and dusk travel", href: "https://www.gov.uk/foreign-travel-advice/morocco/safety-and-security" },
      { label: "Moroccan Ministry: public administration schedules during Ramadan", href: "https://mmsp.gov.ma/fr/nos-metiers/horaires-de-travail-et-jours-f%C3%A9ri%C3%A9s" },
      { label: "Moroccan National Tourism Office: time zone and calendar", href: "https://www.visitmorocco.com/en/useful-information" },
      { label: "Morocco Travel Experts: plan a family trip", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
    ],
  },
  {
    slug: "casablanca-with-kids",
    category: "destinations",
    topic: "Casablanca family stop",
    layout: "casablanca-plan",
    contextLinks: [
      { sectionIndex: 0, before: "Use our ", href: "/morocco-family-itineraries/", linkText: "family itinerary guide", after: " to decide whether Casablanca is a first night, a short city stop or part of a longer northern route." },
      { sectionIndex: 2, before: "If your family is combining Casablanca and Rabat, compare the published ", href: "/tours/14-day-morocco-family-tour/", linkText: "14-day family route", after: " and ask for the exact arrival, transfer and hotel plan for your dates." },
    ],
    tours: [],
    related: ["rabat-with-kids", "casablanca-to-rabat-with-kids", "morocco-by-train-with-kids"],
    title: "Casablanca with Kids: Two Days and an Arrival Plan",
    description: "Plan a Casablanca family stop around the Hassan II Mosque, the Corniche and your flight times. See what fits in one or two days.",
    excerpt: "Build a realistic family visit around the mosque, Habous, the Old Medina and the coast without overloading a city stop.",
    image: moroccoPlaces.casablancaMosque.src,
    imageAlt: "The plaza beside Hassan II Mosque in Casablanca",
    readingTime: "6 min read",
    table: {
      heading: "Choose the Casablanca plan that matches your stopover",
      caption: "The Moroccan National Tourism Office recommends two days for Casablanca and highlights these city sights. Check current access and opening arrangements before you set a schedule.",
      headers: ["Time available", "A practical family focus", "Planning note"],
      rows: [
        ["One day", "Choose the Hassan II Mosque visit or a smaller city loop around Habous and the Old Medina.", "Confirm the mosque’s official tour times in advance; do not build the day around an assumed walk-in slot."],
        ["Two days", "Give the mosque and Corniche one part of the visit, then explore Habous, the Old Medina or another city attraction.", "Allow time for meals and moving between areas instead of adding every sight to one long day."],
        ["Three days or more", "Use Casablanca as a base for a separate Rabat visit or a slower coast day.", "The tourism office estimates Casablanca to Rabat at about an hour; confirm your transport and return plan."],
      ],
    },
    localNote: "The Hassan II Mosque Foundation publishes visitor hours and rules on its official site. Tour schedules can change around prayer times and Ramadan, so check the Foundation’s current information before promising children a specific visit.",
    photos: [moroccoPhotos.cultureCrafts, moroccoPhotos.guideGuests],
    faqs: [
      { question: "How many days should families spend in Casablanca?", answer: "The Moroccan National Tourism Office suggests two days and lists the Hassan II Mosque, Ain Diab Corniche, Old Medina and Habous Quarter among the main sights. Use that as a starting point, then adjust for your flight times and children’s energy." },
      { question: "Can children visit Hassan II Mosque?", answer: "The Foundation’s official site publishes visit times, visitor rules and child admission categories. Check the current guidance for your dates and whether the planned group tour is suitable for your children." },
      { question: "What should children wear for a mosque visit?", answer: "The Mosque Foundation asks visitors to wear clothing covering the shoulders, chest and knees. Read its current visitor rules before leaving your accommodation." },
      { question: "Can we visit Rabat from Casablanca in one day?", answer: "The Moroccan National Tourism Office gives an approximate journey of one hour between the cities. A day trip is possible in route terms, but choose only a few sights and confirm the transport, traffic and return timing." },
    ],
    sections: [
      {
        heading: "Choose two or three anchors for the city",
        paragraphs: [
          "Casablanca is a large, active city with a mix of modern streets, historic districts and Atlantic views. The Moroccan National Tourism Office recommends two days and names Hassan II Mosque, Ain Diab Corniche, the Old Medina and Habous Quarter as key places. Families will have a better visit if they choose a short list instead of trying to cross the city for every stop.",
          "Use your arrival and departure times to decide what belongs on each day. A late arrival is better suited to a meal and an easy walk than a timed monument visit. Put the main attraction on the day when the family has the most flexibility.",
        ],
      },
      {
        heading: "Check the official mosque visit before you go",
        paragraphs: [
          "Hassan II Mosque is the city’s signature landmark, and the Foundation’s official website publishes guided visit times, prices and visitor rules. The schedule can vary around prayer times and Ramadan, so check it directly shortly before the visit.",
          "The Foundation asks visitors to cover their shoulders, chest and knees, remove shoes before entering the prayer hall, stay with the group and avoid food, drink and noisy devices inside. Explain these steps to children before arriving so the visit feels calm and respectful.",
        ],
      },
      {
        heading: "Split the remaining sights into a manageable city loop",
        paragraphs: [
          "Habous Quarter, the Old Medina and the Corniche each offer a different side of Casablanca. Pick the district that matches your family’s interests, then keep a break between walking and any further drive. The Corniche can make a useful change of pace, but water activities should be checked with local providers and beach conditions.",
          "If your family is connecting the city with Rabat, compare the published 14-day route and ask which stops can be adapted. A sample itinerary is a planning aid; it does not confirm current hotel or transport availability.",
        ],
      },
      {
        heading: "Treat Casablanca as a gateway, not a checklist",
        paragraphs: [
          "Some families use Casablanca mainly for an international arrival, the mosque and a night near the airport or train station. Others prefer to stay long enough to see its neighborhoods and coast. Neither plan needs to include every attraction.",
          "When comparing accommodation, ask how long the transfer takes from the airport or station at your arrival time, whether the room can be ready for an early check-in and where you can find a meal nearby. These details often matter more to children than adding one more stop.",
        ],
      },
      {
        heading: "Use the two days for two different rhythms",
        paragraphs: [
          "If you have two days, make the first one about the landmark your family most wants to see and keep the second open for neighborhoods or the coast. This avoids stacking the mosque tour, the Old Medina, Habous and the Corniche into one long day.",
          "The timing depends on your hotel and the current visit schedule. Check the Foundation’s posted tour hours, then choose one nearby activity for the same part of town. Save anything with a fixed start time for the day when the family is rested and already in the city.",
        ],
      },
      {
        heading: "Build a plan around the family’s arrival time",
        paragraphs: [
          "A family arriving on an overnight flight may need a room and a quiet meal before sightseeing. Ask the hotel whether early room access is possible and keep the first outing close to where you are staying. If the room is not ready, identify a place where the family can store bags and sit comfortably.",
          "For an early departure, do the same exercise in reverse: confirm pickup time, luggage arrangements and breakfast options the night before. Casablanca can be a useful start or finish, but it does not need to carry the entire sightseeing load.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Casablanca sights and suggested visit length", href: "https://www.visitmorocco.com/en/travel/casablanca" },
      { label: "Hassan II Mosque Foundation: guided tour schedule and rules", href: "https://fmh2.ma/en/mosque/visits/paid-guided-tour" },
      { label: "Morocco Travel Experts: 14-day family route", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "rabat-with-kids",
    category: "destinations",
    topic: "Rabat family stop",
    layout: "rabat-heritage",
    contextLinks: [
      { sectionIndex: 0, before: "Compare the capital with the rest of your route in our ", href: "/morocco-family-itineraries/", linkText: "Morocco family itinerary guide", after: " before adding another overnight stop." },
      { sectionIndex: 2, before: "For a longer north-to-south journey, see how Rabat fits into our ", href: "/tours/14-day-morocco-family-tour/", linkText: "14-day family tour outline", after: " and ask which stops can be shortened for your children." },
    ],
    tours: [],
    related: ["casablanca-to-rabat-with-kids", "casablanca-with-kids", "morocco-by-train-with-kids"],
    title: "Rabat with Kids: Two Days of History and Gardens",
    description: "Spend two days in Rabat with kids. Pair Hassan Tower and the Oudayas with a garden break, then decide between Chellah and a museum.",
    excerpt: "Plan a family visit around the Oudayas, Hassan Tower, Chellah and green spaces, with enough time for breaks.",
    image: moroccoPlaces.rabatHassanTower.src,
    imageAlt: "Hassan Tower and its historic grounds in Rabat",
    readingTime: "6 min read",
    table: {
      heading: "A two-day Rabat outline for families",
      caption: "The Moroccan National Tourism Office recommends two days and highlights these places. Verify current access and opening hours locally.",
      headers: ["Part of the visit", "A place to consider", "How to make it easier with kids"],
      rows: [
        ["Historic quarter", "Kasbah of the Oudayas and its garden", "Choose a short walk and pause for a drink or meal rather than racing through several monuments."],
        ["Landmark stop", "Hassan Tower and the Mohammed V Mausoleum", "Check current access and respectful visitor rules before arriving."],
        ["Longer visit", "Chellah or the Archaeological Museum", "Pick one based on your children’s interest and attention span; leave room for an outdoor break."],
        ["Green time", "A city garden, park or the Rabat Zoo", "Check transport, weather and opening details for the exact site you plan to visit."],
      ],
    },
    localNote: "The official Visit Rabat portal has a family-experience category with activities across Rabat and the wider region. The Moroccan tourism office suggests two days for the city; check attraction hours and transport directly before building a timed itinerary.",
    photos: [moroccoPhotos.cultureCrafts, moroccoPhotos.guideGuests],
    faqs: [
      { question: "Is Rabat worth visiting with children?", answer: "Rabat combines historic landmarks, gardens, museums and contemporary city facilities. The official tourism office suggests two days, which gives families room to choose a few sights and include breaks." },
      { question: "What are the main family stops in Rabat?", answer: "The Moroccan National Tourism Office highlights Hassan Tower, the Kasbah of the Oudayas, Chellah, the Archaeological Museum and Mohammed V Mausoleum. The best choice depends on your children’s interests and the current access arrangements." },
      { question: "Is there enough to do in Rabat for two days?", answer: "Yes, if you like mixing history with open-air time. Choose one or two historic areas per day, then leave space for a garden, park or relaxed meal." },
      { question: "Can we combine Rabat and Casablanca in one trip?", answer: "Yes. Official tourism information estimates about one hour between the cities. Decide whether to stay overnight in both or use one as a base, and allow for local transfers and sightseeing time." },
    ],
    sections: [
      {
        heading: "Make one historical area the focus of each outing",
        paragraphs: [
          "Rabat’s historic highlights are spread across a capital that also has gardens, museums, cafés and modern services. The official tourism office recommends two days and lists Hassan Tower, the Kasbah of the Oudayas, Chellah and the Archaeological Museum among the main attractions.",
          "For a family day, choose one historic area, one additional activity and a meal break. That leaves time to ask questions and look around without turning the city visit into a march between monuments.",
        ],
      },
      {
        heading: "Give the Oudayas and its garden their own time",
        paragraphs: [
          "The Kasbah of the Oudayas combines historic lanes with a garden setting. It can be a gentle place to slow the day down, but check current opening details and the actual walking route before travelling with a stroller or anyone who finds steps difficult.",
          "The official Visit Rabat family portal also lists activities across Rabat and Salé. Use it to find current options, then check each provider’s age guidance, location and booking requirements.",
        ],
      },
      {
        heading: "Choose between Chellah, a museum or more outdoor time",
        paragraphs: [
          "Chellah, the Archaeological Museum and the city’s gardens make different kinds of visits. A child who enjoys ruins and open space may prefer Chellah; a rainy day or a history-loving child may make a museum the better choice. Check current opening hours before you decide.",
          "If you are travelling on the 14-day family route, ask how much time the proposed itinerary gives to Rabat. A route outline should be adjusted around your family’s interest and the opening schedule of the places you plan to visit.",
        ],
      },
      {
        heading: "Keep the city-to-city transfer simple",
        paragraphs: [
          "Rabat and Casablanca are close enough to pair in a single trip, but moving hotels still uses family time. If your arrival is late or your children are tired, staying in one place for an extra night may be more valuable than adding another check-in.",
          "Ask whether the transfer is by train or private vehicle, where the pickup and drop-off occur, how luggage is handled and what the realistic door-to-door time will be on your date. Include those details when comparing itineraries.",
        ],
      },
      {
        heading: "Use a green space as a real stop in the day",
        paragraphs: [
          "Rabat’s official tourism information highlights the city’s gardens and parks alongside its monuments. A garden is useful when the children have had enough of historic buildings, but check the location and transport before setting it as a break between two distant attractions.",
          "Keep the stop flexible: choose a shaded place to sit, bring water and let the family pause without adding another timed visit. If rain or heat changes the plan, ask your hotel or guide which nearby option is open that day.",
        ],
      },
      {
        heading: "Check the day’s opening details before you leave",
        paragraphs: [
          "Attractions can have different hours, access rules or closures on particular days. Check the official site or ask your accommodation before the family starts across town, especially when a museum or heritage site is the main reason for the outing.",
          "Save the address and a nearby meeting point on your phone, and keep the day’s plan short enough that one closed attraction does not spoil the visit. The official Visit Rabat family portal can help you discover current regional options, but each venue should confirm its own details.",
        ],
      },
      {
        heading: "Give children a role in the history walk",
        paragraphs: [
          "Rather than explaining every monument at length, invite children to look for a detail: a doorway, a garden, a tower or the shape of a stone carving. A small observation task can help them notice a place without turning the day into a school lesson.",
          "Keep the route short and let the children take turns choosing the next pause. If one site captures their interest, stay longer and remove another stop. Rabat’s green spaces and quieter streets make it easier to slow down than to insist on a fixed checklist.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Rabat highlights and suggested visit length", href: "https://www.visitmorocco.com/en/travel/rabat" },
      { label: "Visit Rabat: official family experiences in the region", href: "https://www.visitrabat.com/en/an-experiential-stay/family-experiencev-en/" },
      { label: "Visit Morocco: nature and green places in Rabat", href: "https://www.visitmorocco.com/fr/voyage/rabat/nature" },
      { label: "Morocco Travel Experts: 14-day family route", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "tangier-with-kids",
    category: "destinations",
    topic: "Tangier family stop",
    layout: "tangier-north",
    contextLinks: [
      { sectionIndex: 0, before: "If Tangier is one stop in a longer journey, compare the transfer order in our ", href: "/morocco-family-itineraries/", linkText: "family route guide", after: " and plan around the actual arrival city." },
      { sectionIndex: 2, before: "To see how Tangier connects with the northern route, use our ", href: "/tours/14-day-morocco-family-tour/", linkText: "14-day family tour outline", after: " as a starting point and confirm each drive with the operator." },
    ],
    tours: [],
    related: ["asilah-with-kids", "tetouan-with-kids", "chefchaouen-with-kids"],
    title: "Tangier with Kids: Medina, Coast and Ferry Days",
    description: "Plan two days in Tangier with kids. Explore the Kasbah and medina, choose one coastal outing and leave room for your ferry or flight.",
    excerpt: "Use two days to balance the Kasbah and medina with a separate coastal or nearby-city outing.",
    image: moroccoPlaces.tangierMedina.src,
    imageAlt: "Whitewashed lanes in Tangier's historic medina",
    readingTime: "6 min read",
    table: {
      heading: "Plan Tangier around one city day and one outing",
      caption: "The Moroccan National Tourism Office recommends two days and lists the Kasbah, Cape Spartel and the Caves of Hercules among the main stops.",
      headers: ["Family interest", "Tangier stop to consider", "Practical check"],
      rows: [
        ["History and city atmosphere", "Kasbah, medina and the Grand Socco", "Keep the walk short enough for your children and confirm where a driver can meet you."],
        ["Views and coast", "Cape Spartel or the central beach area", "Check the weather and water conditions before choosing an outdoor activity."],
        ["A longer attraction", "Caves of Hercules", "Verify the current opening details and transport before setting out."],
        ["A second destination", "Asilah, Tetouan or Chefchaouen", "The official tourism office lists different approximate journey times; choose one outing and confirm the route for your date."],
      ],
    },
    localNote: "The Moroccan National Tourism Office suggests two days for Tangier and gives nearby journey estimates of about 45 minutes to Asilah, about an hour to Tetouan and roughly 1 hour 45 minutes to just over 2 hours to Chefchaouen. These are route estimates, not guaranteed door-to-door family transfer times.",
    photos: [moroccoPhotos.atlanticCoast, moroccoPhotos.cultureCrafts],
    faqs: [
      { question: "How many days should a family spend in Tangier?", answer: "The Moroccan National Tourism Office suggests two days. One can be focused on the Kasbah and medina, while another can be used for Cape Spartel, the Caves of Hercules or one nearby destination." },
      { question: "What are the best-known places to see with kids?", answer: "The official tourism office lists the Kasbah, Cape Spartel and the Caves of Hercules among the main sights. Check current opening and transport details, then choose the places that match your children’s interests." },
      { question: "Can we visit Chefchaouen from Tangier in a day?", answer: "It is a long day once you include the drive, sightseeing and return. Official tourism pages give estimates from about 1 hour 45 minutes to just over 2 hours each way, so consider an overnight if the family wants time in Chefchaouen." },
      { question: "Is Tangier a good start or end point for a family route?", answer: "It can work well if your flights or ferry plans fit the northern route. Confirm arrival and departure times, then build the itinerary around the cities your family most wants to see." },
    ],
    sections: [
      {
        heading: "Use two days to keep the city and coast distinct",
        paragraphs: [
          "The Moroccan National Tourism Office suggests two days in Tangier. Its main list includes the Kasbah, Cape Spartel and the Caves of Hercules, alongside the Grand Mosque. Trying to fit all of those into a single arrival day can leave little time to rest or move between sites.",
          "A simple plan is to explore a historic area on one day and choose one coastal or nearby outing on the other. Check current hours, transport and the weather before deciding which day should be outdoors.",
        ],
      },
      {
        heading: "Keep the Kasbah and medina walk child-sized",
        paragraphs: [
          "Tangier’s Kasbah overlooks the medina, and the city’s official guide describes its narrow lanes, fortress and cultural landmarks. Set a short route and agree on a place to meet the driver or guide before you begin. If your family has a stroller, ask about the exact streets and steps rather than assuming the whole medina is accessible.",
          "Pause for a drink or a meal between the historic quarter and any second stop. A family visit is easier when children can choose one detail to look for, such as a gateway, craft shop or view over the city.",
        ],
      },
      {
        heading: "Choose one nearby trip, not a chain of them",
        paragraphs: [
          "The official tourism office lists approximate day-trip times from Tangier to Asilah, Tetouan and Chefchaouen; its own Chefchaouen estimates differ by page. Those times help compare destinations, but your total transfer will depend on pickup, traffic, stops and where you stay.",
          "If Chefchaouen is a priority, consider spending the night there rather than using Tangier as a base for a long return. If the children have only one open day, staying in Tangier and choosing Cape Spartel or the caves may keep the plan simpler.",
        ],
      },
      {
        heading: "Let flight or ferry timing shape the first and last day",
        paragraphs: [
          "Tangier can be a practical start or finish when the family arrives through the north. Match your hotel location with the actual airport, station or ferry terminal in your booking documents; different arrival points can change the transfer.",
          "Do not schedule a timed attraction immediately after an overnight flight or just before departure. Keep the first and last day light, and confirm who is meeting the family, where the vehicle can stop and how long luggage takes to load.",
        ],
      },
      {
        heading: "Have an indoor alternative for a change in weather",
        paragraphs: [
          "A coastal itinerary can be affected by wind or rain, so keep one flexible city activity in reserve. The official tourism guide lists museums, gardens and historic areas as alternatives to the beach and nearby excursions; check which one is open before you leave the hotel.",
          "This also helps if a child is tired or the family returns early from an outing. Keep the backup close to your accommodation rather than treating it as another cross-city transfer.",
        ],
      },
      {
        heading: "Use the arrival day to learn the city before exploring farther",
        paragraphs: [
          "If Tangier is the first stop after a flight or ferry, keep the first outing close to the accommodation. Find a simple meal, check how to reach the medina or waterfront and let the children settle in before choosing a longer visit.",
          "A calmer start is especially helpful when the family is carrying luggage or arriving late. Ask the hotel where a vehicle can stop and whether someone can help with bags; the practical arrival details may matter more than squeezing in a landmark that evening.",
        ],
      },
      {
        heading: "Keep the departure day free of a distant excursion",
        paragraphs: [
          "A last-day outing should fit around the actual flight or ferry departure, check-in time and journey to the terminal. Avoid a long drive to another town when the family needs to be back for luggage and a fixed departure.",
          "For a later departure, a short walk near the hotel may still be possible. Confirm luggage storage and pickup timing in advance, then keep a simple meal and a comfortable waiting option available for the children.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Tangier sights and suggested visit length", href: "https://www.visitmorocco.com/en/travel/tangier" },
      { label: "Moroccan National Tourism Office: the Tangier medina", href: "https://www.visitmorocco.com/en/travel/tangier/medina" },
      { label: "Moroccan National Tourism Office: getting to Morocco by ferry", href: "https://www.visitmorocco.com/en/travel-info/getting-to-morocco" },
      { label: "Morocco Travel Experts: 14-day family route", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "casablanca-to-rabat-with-kids",
    category: "transport",
    topic: "Casablanca–Rabat family route",
    layout: "casablanca-rabat-route",
    contextLinks: [
      { sectionIndex: 0, before: "Use our ", href: "/plan-my-trip/", linkText: "family trip planner", after: " to share flight times, children’s ages and whether you prefer one hotel base or two." },
      { sectionIndex: 2, before: "For both cities as part of a longer north-to-south holiday, compare the ", href: "/tours/14-day-morocco-family-tour/", linkText: "14-day Morocco family tour", after: " and confirm how much time the actual proposal gives to each stop." },
    ],
    tours: [],
    related: ["casablanca-with-kids", "rabat-with-kids", "how-many-days-in-morocco-with-kids"],
    title: "Casablanca to Rabat with Kids: Train or Driver?",
    description: "Compare a day trip, overnight or stopover in Rabat from Casablanca. Check train and driver options, hotel changes and airport timing.",
    excerpt: "Compare the two city plans and decide whether to stay in one place, make a day trip or split the journey overnight.",
    image: moroccoPlaces.rabatHassanTower.src,
    imageAlt: "Hassan Tower in Rabat, a family-friendly stop north of Casablanca",
    readingTime: "5 min read",
    table: {
      heading: "Choose how to fit Casablanca and Rabat into one family trip",
      caption: "The Moroccan National Tourism Office estimates about one hour between the cities. Confirm transport and door-to-door timing for your date.",
      headers: ["Plan", "Best fit when", "Family trade-off"],
      rows: [
        ["Stay in Casablanca", "Your flights, mosque visit or main interests are based there.", "Rabat becomes a return day with two city transfers; keep its sightseeing list short."],
        ["Stay in Rabat", "You want the capital’s historic sites, gardens and a more central northern route.", "Add the Casablanca transfer around your arrival or departure rather than rushing across both cities."],
        ["One night in each", "You want to see meaningful highlights in both cities and have time for a hotel change.", "Packing and check-in take time, so choose this only if the extra city experience is worth the move."],
      ],
    },
    localNote: "Official Moroccan tourism pages estimate the Casablanca–Rabat connection at about one hour and recommend roughly two days for each city. Those are broad planning figures; your family’s actual route depends on transport, hotel location and attraction hours.",
    photos: [moroccoPhotos.guideGuests, moroccoPhotos.cultureCrafts],
    faqs: [
      { question: "Can we see Casablanca and Rabat in one day?", answer: "You can travel between them, but a day that tries to cover both cities will involve multiple transfers and very limited time at each sight. Choose one city as the focus and treat the other as a short visit only if the schedule is confirmed." },
      { question: "How long is the journey from Casablanca to Rabat?", answer: "The Moroccan National Tourism Office estimates about one hour between the cities. Check whether your trip is by train or road and confirm the door-to-door time from your hotel." },
      { question: "Which city should we stay in with children?", answer: "Stay where your family’s main activities and arrival times fit best. Casablanca is useful for Hassan II Mosque, Habous and the Corniche; Rabat offers the Oudayas, Hassan Tower, Chellah, museums and green spaces." },
      { question: "Should we sleep in both cities?", answer: "An overnight in each gives you more time but adds a hotel move. If the family has limited days, choose one base and keep the other city visit focused." },
    ],
    sections: [
      {
        heading: "Start with the sights your family actually wants",
        paragraphs: [
          "Casablanca and Rabat are close enough to combine, but they offer different days. The Moroccan tourism office highlights Hassan II Mosque, Habous, the Old Medina and Corniche in Casablanca; for Rabat it names Hassan Tower, the Oudayas, Chellah and the Archaeological Museum.",
          "Write down the two or three places your family most wants to see before choosing a hotel. That makes the answer to “where should we stay?” much clearer than comparing city names alone.",
        ],
      },
      {
        heading: "Use the one-hour estimate as a starting point",
        paragraphs: [
          "The Moroccan National Tourism Office estimates about one hour between Casablanca and Rabat. Treat that as a city-to-city guide, not your hotel-to-hotel arrival time. Add the station or road transfer, waiting time, luggage and any child comfort stop.",
          "If the children are tired after a flight, avoid putting a long sightseeing plan on the same day as the intercity transfer. A direct journey to the night’s accommodation can be a better first-day choice.",
        ],
      },
      {
        heading: "Choose one city as a base or book both nights deliberately",
        paragraphs: [
          "A Casablanca base suits families whose priority is the mosque or a flight connection; a Rabat base suits families planning time around the capital’s historical areas and gardens. If both cities matter, an overnight in each can reduce return travel, but it also means another packing and check-in cycle.",
          "The 14-day family tour outline includes both cities as part of a wider Morocco route. Ask the operator how the city nights fit your arrival and departure dates before assuming the sample sequence is right for you.",
        ],
      },
      {
        heading: "Make the connection easy for children",
        paragraphs: [
          "Confirm whether you will travel by train or private vehicle, where you board, who handles luggage and how you will reach the hotel at the other end. If the family is taking a train, check the child fare rules and ticket details in our separate rail guide.",
          "Keep snacks, water and anything needed for naps within reach. If your transport time changes, having a light schedule gives the family room to absorb it without losing a timed visit.",
        ],
      },
      {
        heading: "Keep a transfer day free of must-see appointments",
        paragraphs: [
          "A one-hour estimate between cities does not include every hotel pickup, station wait, local taxi or luggage handoff. Leave a buffer before any booked tour or meal reservation, and avoid planning the family’s most important visit immediately after the transfer.",
          "If the day goes smoothly, use the spare time for an easy walk near the hotel. If the connection takes longer than expected, the family still has its full sightseeing day to look forward to.",
        ],
      },
      {
        heading: "Choose the departure city before booking the nights",
        paragraphs: [
          "A flight from Casablanca and a flight from Rabat create different last-day plans. Compare the actual departure time, airport transfer and hotel checkout before deciding which city should be the final base.",
          "For an early flight, staying near the departure point may be worth more than one extra evening attraction. For a later flight, you may be able to enjoy a relaxed breakfast and a short final walk before leaving.",
        ],
      },
      {
        heading: "Compare train and car around the station-to-hotel parts",
        paragraphs: [
          "The Moroccan tourism office lists both train and road travel between the major northern cities. With children, the useful comparison is not only the time on the train or in the car; include getting to the station, arriving with luggage and reaching the next hotel.",
          "Ask whether the family can sit together, how much luggage is practical and what transport is available at each end. For a private car, confirm the pickup point, child seats and planned breaks. Choose the option that fits the whole day, not just the central journey.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Casablanca guide and Rabat connection", href: "https://www.visitmorocco.com/en/travel/casablanca" },
      { label: "Moroccan National Tourism Office: Rabat guide and Casablanca connection", href: "https://www.visitmorocco.com/en/travel/rabat" },
      { label: "Morocco Travel Experts: family itinerary route estimates", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
      { label: "ONCF: official rail journey planner", href: "https://voyages.oncf.ma/" },
    ],
  },
  {
    slug: "morocco-with-a-baby",
    category: "planning",
    topic: "Travelling with a baby",
    layout: "baby-rhythm",
    contextLinks: [
      { sectionIndex: 1, before: "See the ", href: "/morocco-with-toddlers/", linkText: "one base and two base options for young children", after: " to compare fewer changes with a coast overnight." },
      { sectionIndex: 2, before: "Send the ", href: "/blog/child-car-seats-in-morocco/", linkText: "car seat checklist", after: " to the driver for each planned transfer." },
    ],
    tours: [],
    related: ["packing-for-morocco-with-kids", "child-car-seats-in-morocco", "riad-or-hotel-morocco-with-kids"],
    title: "Morocco with a Baby: Flights, Rooms and Transfers",
    description: "Plan Morocco with a baby around the arrival day, feeding, sleep and car seats. See what to ask about cots, room access and each transfer.",
    excerpt: "Plan healthcare questions, naps, room layout, feeding breaks and baby-seat arrangements before you choose a multi-city route.",
    image: moroccoPhotos.riad.src,
    imageAlt: "A Moroccan riad or family accommodation",
    readingTime: "6 min read",
    table: {
      heading: "Baby travel checks to make before departure",
      caption: "Use this as a planning list and follow your child’s clinician’s advice for health, feeding and medication.",
      headers: ["When", "Confirm", "Why it helps"],
      rows: [
        ["Before booking", "A travel-health appointment and any questions about your exact itinerary", "The CDC advises arranging a child travel-health appointment at least one month before departure."],
        ["Before paying", "Cot or bed setup, stairs, room location and quiet space", "A family-room label does not confirm the practical details your baby needs."],
        ["Before the transfer", "Seat type, number of seats, child fit and vehicle details", "One seat listed in a tour description may not match every child or every tour."],
        ["For each day", "A feeding plan, familiar supplies, nap window and a short outing", "Keep the family schedule flexible if the baby needs an extra break."],
      ],
    },
    localNote: "One Morocco Travel Experts family-tour listing currently says it includes a baby seat. Confirm the seat type, quantity, fit for your baby and vehicle with the operator for your specific booking; do not assume that the same arrangement applies to every route.",
    photos: [moroccoPhotos.riad, moroccoPhotos.guideGuests],
    faqs: [
      { question: "Is Morocco manageable with a baby?", answer: "It can be, if you choose fewer overnight changes, confirm room and transport arrangements and leave space for feeds and naps. The best route depends on your family and your baby’s needs." },
      { question: "When should we discuss travel health for a baby?", answer: "The CDC advises families to speak with a healthcare professional or travel-medicine specialist at least one month before departure. Share your destinations, travel dates and planned activities." },
      { question: "Should we ask for a cot before booking?", answer: "Yes. Request the cot or sleep arrangement in writing, then confirm whether it is available in the specific room and whether the room has stairs, balconies or other features you need to discuss with the property." },
      { question: "Will the tour include a baby car seat?", answer: "Some listings describe a baby seat, but availability and fit can differ by tour and child. Ask for the exact seat type, how many are provided and whether it suits your baby’s size and the vehicle." },
      { question: "How many cities should we visit with a baby?", answer: "There is no fixed number, but fewer hotel changes make it easier to keep routines. Count travel days and nights before adding a destination, especially if your route includes long Sahara transfers." },
    ],
    sections: [
      {
        heading: "Start with your child’s health and daily needs",
        paragraphs: [
          "Before you settle the itinerary, book a travel-health conversation with your child’s healthcare professional. The CDC advises doing this at least a month before departure so the family can discuss the specific destination, activities and any medical questions.",
          "Make a short list of what needs to happen every day: feeds, naps, medication, familiar foods or a quiet sleep space. Share that list with the accommodation or trip planner before room types and transfer times are finalised.",
        ],
      },
      {
        heading: "Choose fewer hotel changes and shorter outings",
        paragraphs: [
          "A baby-friendly itinerary is mostly about the gaps between attractions. Two nights in one place can be easier than unpacking every day, and a free afternoon gives the family a chance to reset if a nap or meal takes longer than expected.",
          "If the Sahara is a priority, ask for the full transfer sequence before choosing the camp night. A long route may still suit your family, but it should be planned as a multi-day journey with sensible stops rather than a quick add-on.",
        ],
      },
      {
        heading: "Confirm the room and vehicle details in writing",
        paragraphs: [
          "Ask the hotel or riad to confirm the sleeping arrangement, room location, stairs, access to the room and any features your family needs to discuss with the property. Do not infer cot availability or room layout from a general description of the hotel.",
          "For each vehicle transfer, ask what seat will be provided and whether it fits your baby. A published Morocco Travel Experts tour currently lists one baby seat, but a listing does not answer questions about your child’s fit, the exact vehicle or whether the same seat is included on another tour.",
        ],
      },
      {
        heading: "Pack what keeps the first day calm",
        paragraphs: [
          "Keep the items needed for a feed, change, nap and temperature change within reach rather than packed in the main suitcase. Bring enough familiar supplies for the flight and arrival window, and ask your clinician about feeding or medication questions specific to your baby.",
          "Use a short first outing and keep a backup plan close to the accommodation. If the baby sleeps through a planned stop or needs an extra rest, the family can still enjoy the destination without treating the day as a failure.",
        ],
      },
      {
        heading: "Make the arrival day a settling-in day",
        paragraphs: [
          "Avoid scheduling a guided walk, long drive or timed attraction directly after landing. Allow time to reach the accommodation, feed the baby, unpack the items you need and find a nearby place for dinner.",
          "If the family lands in the morning, ask the accommodation about early access and a place to rest if the room is not ready. If the arrival is late, arrange the transfer before the flight and confirm how the driver will identify your family at the pickup point.",
        ],
      },
      {
        heading: "Keep a small care kit with the adult, not the luggage",
        paragraphs: [
          "Put the day’s feeding, changing and comfort items in a bag that stays with the adult during transfers. Keep prescribed medicines and the clinician’s instructions accessible, and pack a spare outfit in case a bag is delayed or a spill happens.",
          "The right quantities depend on your baby and trip length. Ask your clinician about health supplies and check airline rules for liquids, medicines and feeding equipment before departure.",
        ],
      },
      {
        heading: "Place feeding and quiet time around the outing",
        paragraphs: [
          "For a baby, the easiest day plan may be one outing followed by a return to the room. Ask the hotel about a quiet space, feeding arrangements and whether a midday return is practical from the places you want to visit. A shorter route can preserve the family’s energy without excluding the baby from the trip.",
          "If you use formula or a particular feeding product, pack the amount you expect to need and check airline and border rules before travel. For advice about feeding, hydration or infant health, follow your clinician’s guidance rather than relying on a general destination checklist.",
        ],
      },
      {
        heading: "Treat each transfer as a separate baby-care plan",
        paragraphs: [
          "Before a long drive, confirm how often the family can stop, where changing facilities may be available and whether luggage space leaves the care bag accessible. Ask for the vehicle and child-seat details in writing, especially if the baby will travel in a seat you provide.",
          "On arrival, identify the room, cot and meal arrangements before leaving for the next outing. Small checks at each hotel reduce the chance of discovering that the baby’s sleep setup or basic supplies are different from what the family expected.",
        ],
      },
    ],
    sourceLinks: [
      { label: "CDC: traveling with children", href: "https://wwwnc.cdc.gov/travel/page/children" },
      { label: "CDC: current traveler health information for Morocco", href: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/Morocco" },
      { label: "Morocco Travel Experts: 10-day family tour details", href: "https://moroccotravelexperts.com/morocco-tour/10-day-morocco-family-tour-a-journey-of-discovery/" },
      { label: "Morocco Travel Experts: hotel directory", href: "https://moroccotravelexperts.com/hotels/" },
    ],
  },
  {
    slug: "child-car-seats-in-morocco",
    category: "transport",
    topic: "Family transport planning",
    layout: "seat-checklist",
    contextLinks: [
      { sectionIndex: 1, before: "If one transfer ends at a camp, check the vehicle on that leg using the ", href: "/blog/morocco-desert-camp-with-kids/", linkText: "desert camp booking checklist", after: "." },
      { sectionIndex: 3, before: "Plan shorter outings and hotel changes with the ", href: "/morocco-with-toddlers/", linkText: "Morocco with toddlers guide", after: "." },
    ],
    tours: [],
    related: ["morocco-with-a-baby", "morocco-family-road-trip-stops", "packing-for-morocco-with-kids"],
    title: "Child Car Seats in Morocco: A Booking Checklist",
    description: "Book car seats for Morocco airport transfers and private tours. Ask for the seat model, fit, vehicle details and confirmation for each ride.",
    excerpt: "Use a clear checklist to confirm seats, vehicle details, installation and transfer plans before you pay or begin a long drive.",
    image: moroccoPhotos.roadTrip.src,
    imageAlt: "A family road trip vehicle travelling through Morocco",
    readingTime: "5 min read",
    table: {
      heading: "Car-seat questions to ask at each booking stage",
      caption: "This is a practical confirmation checklist, not a statement of Moroccan law. Follow current local rules and your child-seat manufacturer’s instructions.",
      headers: ["Stage", "Ask the operator", "Check for your child"],
      rows: [
        ["Before you book", "How many seats are provided, and what type is each one?", "Share each child’s age, height and weight so the operator can identify an appropriate seat."],
        ["Before payment", "Which vehicle will be used and will the seat be installed for each transfer?", "Confirm that the arrangement matches the entire itinerary, not only one leg."],
        ["Before departure", "Who installs and checks the seat?", "Ask to see the seat and confirm it is secure before the vehicle leaves."],
        ["If the answer is unclear", "Can we use our own seat or arrange a different vehicle?", "Check the seat’s compatibility with the vehicle and any airline rules for transporting it."],
      ],
    },
    localNote: "A published Morocco Travel Experts 10-day family-tour page currently lists one baby seat as included. That is useful to know, but it does not confirm the seat type, quantity, fit or arrangement for every family or every departure. Ask for those details in writing.",
    photos: [moroccoPhotos.roadTrip, moroccoPhotos.guideGuests],
    faqs: [
      { question: "Should I ask for a child car seat before booking a Morocco tour?", answer: "Yes. Provide each child’s age, height and weight and request the exact seat arrangement for the vehicle and route before paying." },
      { question: "Does “baby seat included” mean the seat will fit my child?", answer: "No. It confirms only that a seat is listed. Ask about the seat type, fit limits, number of seats and whether it will be installed for every transfer." },
      { question: "Can I bring my own car seat to Morocco?", answer: "You may be able to, but check the airline’s rules and confirm that your seat is compatible with the vehicle. Ask the operator how it will be installed before the first journey." },
      { question: "Do I need to check the seat when I get into the car?", answer: "Yes. Ask to see the seat before departure and check that it is installed securely according to the manufacturer’s instructions. Speak up if it does not look right." },
      { question: "What if the operator cannot confirm a seat?", answer: "Do not rely on a vague promise. Ask for a suitable alternative, a different vehicle or permission to use your own seat, then confirm the final arrangement in writing." },
    ],
    sections: [
      {
        heading: "Give the operator the details that identify a suitable seat",
        paragraphs: [
          "“We have children” is not enough information to arrange a restraint. Send each child’s age, height and weight, then ask what seat type is planned. The car-seat manufacturer’s limits and installation instructions matter more than a generic label such as “baby seat.”",
          "A Morocco Travel Experts family-tour listing currently says one baby seat is included. Treat that as a detail for that specific listing; ask whether your route includes the correct number and type of seats for every child.",
        ],
      },
      {
        heading: "Confirm the vehicle and every transfer",
        paragraphs: [
          "Ask whether one vehicle is used throughout the trip, whether seats move between vehicles and who fits them. If the family has airport transfers, city excursions and a multi-day road tour, ask the same questions for each part of the plan.",
          "A long transfer magnifies an unclear arrangement. Keep the confirmation with your booking details and request the operator’s answer before the deposit or final payment is due.",
        ],
      },
      {
        heading: "Check the seat before the car leaves",
        paragraphs: [
          "Before setting off, look at the seat and ask the driver or operator to show how it is installed. Check that the seat is appropriate for the child and that the belts or connectors are being used as instructed by the manufacturer.",
          "If you plan to bring your own seat, ask about compatibility with the vehicle and check the airline’s rules for carrying it. Agree on this before arrival so it is not a surprise at the airport pickup.",
        ],
      },
      {
        heading: "Make the seat part of a realistic road-day plan",
        paragraphs: [
          "Car-seat planning is only one part of a family road day. Ask how long the drive is expected to take, where comfort stops can happen and whether meal or nap times can be accommodated. The route should have enough flexibility for children to get out and reset.",
          "If the seat question is not answered clearly, pause the route decision and ask for a specific solution. A suitable vehicle or revised itinerary is easier to arrange before the trip than after the family reaches the pickup point.",
        ],
      },
      {
        heading: "Put the seat promise into the booking record",
        paragraphs: [
          "Ask the operator to record the agreed seat type, the number of children who need one and the vehicle plan in writing. Keep the answer with the booking confirmation and repeat the request when confirming airport pickup or a change of vehicle.",
          "If the operator cannot name the seat or explain how it will be fitted, treat that as an open booking detail. Ask for a different arrangement before the road day rather than assuming the driver will solve it at the curb.",
        ],
      },
      {
        heading: "Bring the child’s exact fit information to the conversation",
        paragraphs: [
          "Share each child’s age, height and weight using current measurements, then ask the provider to confirm that the seat is appropriate and fits the booked vehicle. A seat that is described only as a baby seat may not answer the question for a growing child.",
          "If you plan to bring your own seat, check the vehicle’s belt or anchor arrangement, the seat’s installation instructions and the airline’s rules for carrying it. Do not assume that every car or transfer vehicle has the same fittings.",
        ],
      },
      {
        heading: "Build seat checks into every vehicle change",
        paragraphs: [
          "Airport pickups, day trips and multi-city transfers may use different vehicles. Confirm that the agreed seat travels with the family or that each replacement vehicle has the right equipment. Ask who is responsible for fitting it and allow time to check the installation before setting off.",
          "If a child needs to move between seats or rows during the trip, explain the seating plan to every adult. Keep a written note with the transfer details so a change in driver or vehicle does not leave the arrangement unclear.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Morocco Travel Experts: 10-day tour listing and baby-seat note", href: "https://moroccotravelexperts.com/morocco-tour/10-day-morocco-family-tour-a-journey-of-discovery/" },
      { label: "CDC: traveling safely with children", href: "https://wwwnc.cdc.gov/travel/page/children" },
      { label: "UK FCDO Morocco travel advice: road conditions", href: "https://www.gov.uk/foreign-travel-advice/morocco/safety-and-security" },
      { label: "Morocco Travel Experts: family itinerary route estimates", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "best-family-beaches-in-morocco",
    category: "coast",
    topic: "Choosing a family beach",
    layout: "beach-selector",
    contextLinks: [
      { sectionIndex: 1, before: "See the ", href: "/blog/agadir-with-kids/", linkText: "Agadir and Taghazout stay comparison", after: " before deciding where to book a room." },
      { sectionIndex: 2, before: "Allow a full day on the coast with the ", href: "/blog/7-days-in-morocco-with-kids-without-sahara/", linkText: "seven day Marrakech and Essaouira itinerary", after: "." },
    ],
    tours: [],
    related: ["agadir-with-kids", "essaouira-with-kids", "mirleft-with-kids"],
    title: "Family Beaches in Morocco: Where to Stay",
    description: "Compare Agadir Bay, Taghazout, Essaouira and Morocco’s Mediterranean coast for a family beach trip. Choose a base and check local conditions.",
    excerpt: "Compare the Atlantic and Mediterranean coasts, then check water conditions and lifeguard cover before planning a swim.",
    image: moroccoPhotos.atlanticCoast.src,
    imageAlt: "The Atlantic coast of Morocco",
    readingTime: "6 min read",
    table: {
      heading: "Choose a coast for the kind of family beach day you want",
      caption: "The Moroccan tourism office describes the destinations below; sea conditions and facilities vary by beach and day.",
      headers: ["Coast or base", "What it suits", "Family planning check"],
      rows: [
        ["Agadir Bay", "A seaside stay with a wide choice of hotels and a bay the tourism office describes as calmer than nearby surf areas.", "Check the exact beach conditions and safety signs on the day; do not assume a lifeguard is present."],
        ["Taghazout", "Families interested in surf culture and ocean sports.", "Waves and wind are part of the appeal; ask a qualified provider about child suitability and supervision."],
        ["Essaouira", "A beach combined with a medina, harbor and ramparts.", "Allow road time from Marrakech and check wind, waves and swimming conditions before entering the water."],
        ["Mediterranean coast", "A route around Tangier, Tetouan, Al Hoceima or Saïdia with coastal stops.", "Choose the exact beach and facilities rather than assuming conditions are the same along the coast."],
      ],
    },
    localNote: "The Moroccan National Tourism Office contrasts surf-focused parts of the Atlantic with a calmer, family-friendly Mediterranean coast and describes Agadir Bay as calmer than Taghazout’s surf. UK travel advice still warns that beaches may have limited lifeguard cover and strong currents, so check each local beach.",
    photos: [moroccoPhotos.atlanticCoast, moroccoPhotos.wildlife],
    faqs: [
      { question: "Which Moroccan beach is best for young children?", answer: "The Moroccan tourism office describes the water in Agadir Bay as calmer than nearby surf areas. Conditions change by beach and day, so check local safety signs and supervise children closely." },
      { question: "Is Essaouira good for a family beach holiday?", answer: "Essaouira works well when you want a coastal city with a medina, port and beach. It is on the Atlantic, so check the wind, waves and local advice before planning a swim." },
      { question: "Is Taghazout suitable for children who cannot surf?", answer: "Families can visit for the coastal setting, but Taghazout is strongly associated with surfing and water sports. Choose a beach and activity based on the child’s ability and ask the provider about supervision." },
      { question: "Are Moroccan beaches patrolled by lifeguards?", answer: "Do not assume that they are. UK travel advice says lifeguard cover can be limited or absent at Moroccan beaches and warns about strong currents. Check local signs and conditions before entering the water." },
      { question: "Should we add a beach to a short Morocco itinerary?", answer: "Only if you can give it enough time. Compare the transfer and hotel nights with your other priorities; a beach stop works better as part of a route than as a rushed detour." },
    ],
    sections: [
      {
        heading: "Choose the coast before choosing a hotel",
        paragraphs: [
          "Morocco’s coasts do not offer one identical beach holiday. The Moroccan National Tourism Office describes the Atlantic as a place for board sports and the Mediterranean as a calmer family-friendly coast. Agadir Bay, Taghazout, Essaouira and the northern Mediterranean therefore suit different family expectations.",
          "Decide whether the children want to swim, build a sandcastle, watch surfers, explore a city or take a lesson. Then choose a specific town and beach rather than booking a coast-wide itinerary based only on a hotel photograph.",
        ],
      },
      {
        heading: "Use Agadir Bay for a resort-style beach base",
        paragraphs: [
          "The official tourism office describes Agadir as a seaside destination with a large choice of hotels and facilities, and says the bay is calmer than the surf area around Taghazout. That may make Agadir a practical base for a family that wants a beach break and access to city services.",
          "Calmer does not mean risk-free. UK government advice says some Moroccan beaches have limited or no lifeguard cover and that strong currents can occur. Check the actual beach, flags and local guidance each time, and keep children under close adult supervision near the water.",
        ],
      },
      {
        heading: "Choose Essaouira for a city-and-coast combination",
        paragraphs: [
          "Essaouira works for families who want a beach walk alongside a historic medina, active port and ramparts. It can be a richer stop than a resort-only beach, but the drive from Marrakech takes time, and the Atlantic wind or sea state may change the beach plan.",
          "For water sports, ask the operator about age rules, instruction and equipment. If your family only wants a calm afternoon outside, the beach and old town may be enough without booking a ride or lesson.",
        ],
      },
      {
        heading: "Pick Taghazout or the Mediterranean for a different route",
        paragraphs: [
          "Taghazout is known for surfing and coastal activity, while the Mediterranean route can connect Tangier, Tetouan, Al Hoceima and Saïdia. These are not interchangeable add-ons: each sits in a different part of the country and changes the number of transfer days.",
          "If your family wants to combine a beach stay with inland cities or the Sahara, ask for the route in day-by-day order. Use a custom family itinerary as a starting point and replace a stop if the beach is important enough to deserve a real overnight stay.",
        ],
      },
      {
        heading: "Check water and supervision on the day, every day",
        paragraphs: [
          "A beach’s reputation is not a daily safety report. Check local signs, flags, currents, wind and any lifeguard information when you arrive. UK travel advice warns that lifeguard cover may be limited or absent and that strong currents can occur at Moroccan beaches.",
          "Keep children within close adult reach near the water and follow the local authority’s instructions. If there is no clear information or conditions look unsuitable, choose a beach walk, a pool with confirmed supervision or another activity instead of entering the sea.",
        ],
      },
      {
        heading: "Match the activity to the child, not the postcard",
        paragraphs: [
          "A picture of a calm bay, surf lesson or turquoise lagoon cannot tell you whether an activity fits your child on the day. Ask the provider about age guidance, instructor-to-child arrangements, equipment, cancellation terms and what happens if the sea is too rough.",
          "For a simple family beach day, you do not need to book an activity. Bring a change of clothes, a wind layer and shade where practical, then let the children decide whether they want to play on the sand or watch the water from a safe distance.",
        ],
      },
      {
        heading: "Give the coast enough nights to feel like a holiday",
        paragraphs: [
          "A beach stop that requires a long transfer and a single rushed afternoon may not give the family the slower break it expects. Count the drive in both directions and decide whether the coast is a main destination or a brief scenic stop.",
          "If the beach matters, remove another hotel change or extend the stay. The route will be easier to enjoy when the family has time to settle in, check local conditions and return to the water on another day if the first one is windy.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Agadir Bay and Taghazout beaches", href: "https://www.visitmorocco.com/en/travel/agadir/beach" },
      { label: "Moroccan National Tourism Office: coastal route comparison", href: "https://www.visitmorocco.com/sites/default/files/atoms/files/maroc_beachsun_20251001_20260215_pbi_-_en.pdf" },
      { label: "UK FCDO Morocco travel advice: beach safety", href: "https://www.gov.uk/foreign-travel-advice/morocco/safety-and-security" },
      { label: "Morocco Travel Experts: family itinerary planning", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "jemaa-el-fnaa-with-kids",
    category: "destinations",
    topic: "Marrakech evening planning",
    layout: "jemaa-timeline",
    contextLinks: [
      { sectionIndex: 0, before: "Fit your evening into the ", href: "/blog/marrakech-with-kids/", linkText: "three day Marrakech plan", after: " and leave the preceding afternoon open if the children need a rest." },
      { sectionIndex: 1, before: "For the route from the square to your room, see ", href: "/blog/marrakech-medina-with-a-stroller/", linkText: "how to walk the medina with a stroller", after: "." },
    ],
    tours: [],
    related: ["marrakech-medina-with-a-stroller", "morocco-with-a-baby", "morocco-food-allergies-with-kids"],
    title: "Jemaa el-Fnaa with Kids: When to Visit",
    description: "Choose when to visit Jemaa el-Fnaa with children. Plan a short loop, a meeting point and food stops before the square gets busy.",
    excerpt: "Pick the right time, keep a clear meeting point and plan food and transport before exploring Marrakech’s busiest square.",
    image: moroccoPlaces.marrakechJemaa.src,
    imageAlt: "Food stalls and activity around Jemaa el-Fnaa in Marrakech",
    readingTime: "5 min read",
    table: {
      heading: "Choose a time for Jemaa el-Fnaa that fits your children",
      caption: "Visit Marrakech’s official family guide describes the square as quieter by day and more active from late afternoon into the evening.",
      headers: ["Time", "What to expect", "Family approach"],
      rows: [
        ["Daytime", "A quieter view of the square and nearby medina.", "A gentler first look for babies, toddlers or children who prefer less noise."],
        ["Late afternoon", "The square begins to fill with performers and activity; the local family guide identifies this as a good time to visit with children.", "Set a short route, pick one thing to watch and leave before everyone is tired."],
        ["Evening", "A different, livelier atmosphere with more food stalls and visitors.", "Choose this when the children are comfortable with crowds and agree on a meeting point before entering."],
      ],
    },
    localNote: "The official Visit Marrakech family guide recommends late afternoon for a visit with children and says the square has a different atmosphere in the evening. Use that as a planning suggestion, not a fixed timetable; crowd levels, weather and family energy vary.",
    photos: [moroccoPhotos.foodMarket, moroccoPhotos.cultureCrafts],
    faqs: [
      { question: "What is the best time to visit Jemaa el-Fnaa with children?", answer: "The official Visit Marrakech family guide recommends late afternoon as the square becomes active. Morning can feel calmer, while the evening is livelier; choose according to your children’s ages and tolerance for noise and crowds." },
      { question: "Is Jemaa el-Fnaa too busy for toddlers?", answer: "It depends on the time and the child. Keep the visit short, choose a calmer period, stay close together and leave if the crowd or noise becomes too much." },
      { question: "Can we use a stroller in Jemaa el-Fnaa?", answer: "The square itself is more open than many medina lanes, but surrounding routes can be busy or uneven. Check the planned walk and compare with a baby carrier if that is easier for your child." },
      { question: "Should we eat at the square with children?", answer: "You can choose a meal there, but ask about ingredients and cross-contact if anyone has a food allergy. For a slower first evening, eat near your accommodation and visit the square briefly." },
      { question: "How long should a family stay?", answer: "There is no fixed ideal. Choose one or two things to see, set a return point and keep the visit short enough that children can leave while they still have energy." },
    ],
    sections: [
      {
        heading: "Choose late afternoon for the family first visit",
        paragraphs: [
          "The official Visit Marrakech family guide says Jemaa el-Fnaa is quieter during the day and comes alive from late afternoon; it recommends that period for a visit with children. The square feels different again in the evening, when more food stalls and activity are present.",
          "For a first visit, late afternoon offers a middle ground: children can see the square becoming active without committing to a long night. If your family enjoys the atmosphere, return later on another evening.",
        ],
      },
      {
        heading: "Set a simple route and a clear return point",
        paragraphs: [
          "Before entering the busiest part of the square, agree on how long you will stay and where you will meet if someone gets separated. Keep younger children close and make sure they know which adult to stay with. A clear exit plan makes it easier to leave when the family has had enough.",
          "Choose one or two things to watch rather than trying to see everything. If the square feels too loud or crowded, step away to a nearby café or return to the accommodation.",
        ],
      },
      {
        heading: "Plan food and mobility around your child",
        paragraphs: [
          "If your family wants to eat at the square, check the meal choice and ingredients directly. UK travel advice notes that allergen information in Morocco is not consistently provided, so families managing an allergy should follow their own medical plan and avoid food when details are uncertain.",
          "The square has open space, but nearby lanes can be uneven and busy. Review the walk from your accommodation before choosing a stroller; a carrier may be more practical for some families, while others may prefer a short taxi or guided route.",
        ],
      },
      {
        heading: "Leave room for a quiet evening",
        paragraphs: [
          "Children may enjoy the square and still be ready to leave after a short visit. Plan a flexible dinner, a nearby return route and a backup snack or meal if the family decides not to stay.",
          "If you arrive in Marrakech after a flight or a long road day, save the evening visit for another night. The square will still be there, and the family will have more energy to enjoy it.",
        ],
      },
      {
        heading: "Ask before photographing performers or families",
        paragraphs: [
          "The square is a public place, but people are not part of the scenery. The UK Foreign, Commonwealth & Development Office advises visitors to ask permission before photographing people, especially children. Explain this to your children before they start taking pictures.",
          "If someone does not want a photograph, put the camera away and move on. This small courtesy helps the family enjoy the atmosphere while respecting the people who live and work there.",
        ],
      },
      {
        heading: "Choose whether the family is there to eat or to explore",
        paragraphs: [
          "A meal in the square and a short look at the evening activity are different plans. If you want dinner, choose a place to sit, check the menu and ask about ingredients before the children are hungry. If the family is exploring, keep the visit short and eat somewhere quieter afterward.",
          "Agree on a spending limit for small treats or souvenirs before entering the busiest part. Children can then make one deliberate choice, and adults can check the price before ordering or buying without having to decide under pressure.",
        ],
      },
      {
        heading: "Make the exit part of the plan",
        paragraphs: [
          "Decide which direction the family will leave from and how to return to the accommodation. Save the route or meeting point on an adult’s phone, keep another adult’s contact details available and make sure older children know whom to approach if they become separated.",
          "You do not need a long stay to experience Jemaa el-Fnaa. A short visit with a clear return plan can be a complete outing, especially for younger children or anyone who finds the noise and crowds tiring.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Visit Marrakech: family activities and Jemaa el-Fnaa timing", href: "https://visitmarrakech.com/en/listing/marrakech-en-famille-des-moments-precieux/" },
      { label: "Morocco Travel Experts: Marrakech with kids", href: "https://moroccotravelexperts.com/family-guide/marrakech-travel-guide/" },
      { label: "UK FCDO Morocco health advice: allergy information", href: "https://www.gov.uk/foreign-travel-advice/morocco/health" },
      { label: "Morocco Travel Experts: Marrakech family and medina guide", href: "https://moroccotravelexperts.com/family-guide/marrakech-travel-guide/" },
    ],
  },
  {
    slug: "fes-with-kids",
    category: "destinations",
    topic: "Fes family itinerary",
    layout: "fes-medina-route",
    contextLinks: [
      { sectionIndex: 3, before: "If you are continuing to the north, plan ", href: "/blog/chefchaouen-with-kids/", linkText: "two days in Chefchaouen", after: " separately from the Fes sightseeing days." },
      { sectionIndex: 4, before: "For a trip out of town, see the ", href: "/blog/volubilis-with-kids/", linkText: "short walk through the Roman ruins at Volubilis", after: "." },
    ],
    tours: ["7-day-morocco-family-tour", "10-day-morocco-family-tour", "14-day-morocco-family-tour"],
    related: ["chefchaouen-with-kids", "morocco-by-train-with-kids", "how-many-days-in-morocco-with-kids"],
    title: "Fes with Kids: A Three Day Medina and City Plan",
    description: "Plan three days in Fes with kids. Choose a medina gate, a craft visit, a garden or museum break, and an optional day trip to Meknes or Volubilis.",
    excerpt: "Use a measured medina walk, choose one indoor or garden pause and decide separately whether a day trip belongs in the Fes stay.",
    image: moroccoPlaces.fesMedina.src,
    imageAlt: "Rooftops and minarets above the old medina of Fes",
    readingTime: "7 min read",
    table: {
      heading: "A three-day Fes outline that leaves space for breaks",
      caption: "The Moroccan National Tourism Office suggests allowing three days. Treat this as a flexible outline and verify opening times with each place before travelling.",
      headers: ["Day", "Family focus", "Keep the plan manageable"],
      rows: [
        ["Day 1", "A short old-medina route beginning near Bab Boujloud.", "Choose a guide or route in advance, then keep the first walk focused on a few stops."],
        ["Day 2", "A museum, garden or craft-focused visit paired with another small medina walk.", "Build in a quiet lunch and avoid crossing the city repeatedly."],
        ["Day 3", "Either a slower Fes day or one excursion to Meknes, Volubilis or Ifrane.", "Pick one destination and confirm the full drive and return plan; do not treat all three as a single outing."],
      ],
    },
    localNote: "The Moroccan National Tourism Office recommends three days for Fes, names Bab Boujloud as an easy medina entrance and lists day trips to Meknes, Volubilis and Ifrane with approximate journey times. Those estimates are route guidance, not a promise of your hotel-to-hotel travel time.",
    photos: [moroccoPlaces.fesMedina, moroccoPhotos.medina, moroccoPhotos.cultureCrafts],
    faqs: [
      { question: "How many days should a family spend in Fes?", answer: "The Moroccan National Tourism Office recommends three days. That gives families room for a measured old-medina visit and a second activity without making every day a long sightseeing march." },
      { question: "Is the Fes medina manageable with children?", answer: "It can be, if you plan a short route, agree on breaks and use a guide or clear meeting point. The lanes are narrow and can be busy, so keep children close and ask about stairs, walking distance and the route before setting out." },
      { question: "Which day trip from Fes works best for families?", answer: "It depends on your children's interests and the time available. The official tourism office lists Meknes, Volubilis and Ifrane with different approximate journey times. Choose one, then confirm road time, activity duration, meal stops and the return." },
      { question: "Should we visit the tanneries with young children?", answer: "Ask your guide what the visit involves and whether there is a viewing point that suits your family. The setting may have strong smells, stairs or crowds. Let children know what to expect and be ready to skip it if anyone is uncomfortable." },
    ],
    sections: [
      {
        heading: "Treat three days as a useful target, not a sightseeing quota",
        paragraphs: [
          "The Moroccan National Tourism Office recommends allowing three days for Fes. Families can use that time for the old medina, a museum or garden pause and a nearby excursion, but there is no need to visit every landmark simply because it appears on a list. The medieval streets are part of the experience; the pace of walking matters as much as the number of stops.",
          "If your flight or train arrival takes part of the first day, count that honestly. A late arrival, tired children or a hotel outside the old city may mean that two full days are more realistic than three calendar dates. Keep the final day light if you are continuing on to another city.",
        ],
      },
      {
        heading: "Begin the old-medina walk with one clear entrance and return point",
        paragraphs: [
          "The official tourism guide identifies Bab Boujloud as the easiest entrance to the Fes medina. Start there with a short loop and decide on a return meeting point before entering. Families who arrive with a guide can ask for a route matched to the youngest child’s walking ability rather than accepting a full-day itinerary by default.",
          "The lanes can feel like a maze to first-time visitors. Keep the group together, pause before crossing busy passages and save the most interesting stop for the time of day when children are still alert. A small number of remembered landmarks can make the walk easier than trying to navigate by a long list of street names.",
        ],
      },
      {
        heading: "Let children opt into the sights that feel unfamiliar",
        paragraphs: [
          "Fes is a working city as well as a historic destination. Craft workshops, markets and the tanneries can be interesting to some children and uncomfortable for others. Explain what they may see and smell before approaching, then give them permission to step away or wait with an adult if they do not want to continue.",
          "Do not make a view from a shop terrace the price of a purchase. If a visit is offered by a guide or trader, ask what is expected, whether there is a cost and how long the stop will take. Clear expectations help families enjoy the craft and architecture without feeling rushed into a transaction.",
        ],
      },
      {
        heading: "Break the walking day with a garden or museum visit",
        paragraphs: [
          "The official Fes guide highlights Nejjarine Museum and the Jnan Sbil garden among the city’s places of interest. A quiet green space or indoor visit can provide a different rhythm from the dense streets and give children a chance to sit, use a toilet or ask questions in a calmer setting.",
          "Check current admission, hours and access directly with the venue. Older children may enjoy a museum visit with a short theme, such as noticing a particular craft or architectural detail. For younger children, keep the visit short and pair it with a snack or rest rather than adding more walking immediately afterward.",
        ],
      },
      {
        heading: "Choose one excursion, or stay in Fes for a slower third day",
        paragraphs: [
          "The tourism office lists Meknes, Volubilis and Ifrane as possible excursions from Fes, with different approximate journey times. Those places offer different reasons to leave the city; your family should choose the one that matches its interests rather than attempting to collect all three in one day.",
          "Ask the driver or tour operator for the door-to-door time from your accommodation, planned stops, time on site, meal arrangements and return hour. If the children have already had several long transfer days, a slower Fes day may be a better use of the time than another early departure.",
        ],
      },
      {
        heading: "Make the accommodation and guide plan part of the route",
        paragraphs: [
          "Ask whether your accommodation is inside or outside the medina, where a vehicle can drop you and how much walking is needed with luggage. A property description rarely explains whether the final approach involves steps or narrow lanes. Request a clear arrival plan before travelling with tired children and bags.",
          "If you hire a guide, agree on the length of the visit, the sights included, the meeting point and any expected shop stops. Families who prefer to explore independently can still ask the hotel for a simple first-day route and a reliable way to arrange transport back from the medina.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Fes sights, seasons and suggested stay", href: "https://www.visitmorocco.com/en/travel/fez" },
      { label: "UNESCO World Heritage Centre: Medina of Fez", href: "https://whc.unesco.org/en/list/170/" },
      { label: "Morocco Travel Experts: family tour options", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
      { label: "Morocco Travel Experts: Morocco family itinerary guide", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "chefchaouen-with-kids",
    category: "destinations",
    topic: "Chefchaouen family stay",
    layout: "chefchaouen-two-day",
    contextLinks: [
      { sectionIndex: 0, before: "The ", href: "/tours/14-day-morocco-family-tour/", linkText: "two week route from Casablanca", after: " spends two nights in Chefchaouen." },
      { sectionIndex: 4, before: "See the ", href: "/blog/tangier-with-kids/", linkText: "Tangier family plan", after: " if your flights or ferry leave from the north." },
    ],
    tours: [],
    related: ["fes-with-kids", "tangier-with-kids", "how-many-days-in-morocco-with-kids"],
    title: "Chefchaouen with Kids: What to Do in Two Days",
    description: "Plan two days in Chefchaouen with kids, from a short walk in the blue medina to the kasbah or an outing to Akchour. Check stairs and transfers.",
    excerpt: "Keep the blue-city walk short, use the kasbah as a central pause and decide whether Akchour belongs in this stay or another trip.",
    image: moroccoPlaces.chefchaouenBlueCity.src,
    imageAlt: "Blue-painted arches and courtyard in Chefchaouen",
    readingTime: "7 min read",
    table: {
      heading: "Choose the Chefchaouen stay your family has time for",
      caption: "The Moroccan National Tourism Office suggests two days in Chefchaouen and lists approximate times to nearby destinations. Confirm the actual transfer and activity schedule before travelling.",
      headers: ["Time", "Possible focus", "Family planning note"],
      rows: [
        ["One day", "A short walk through the old medina and a visit to the kasbah.", "Keep the route compact; the drive from another city may leave less sightseeing time than expected."],
        ["Two days", "Explore the medina, gardens and museum, with a separate relaxed walk or meal stop.", "This follows the tourism office's suggested visit length and avoids making every outing a transfer."],
        ["Three days or longer", "Add Akchour or another nearby destination as its own outing.", "Ask about trail length, terrain, water access, transport and the full return time before choosing a hike."],
      ],
    },
    localNote: "The Moroccan National Tourism Office suggests two days in Chefchaouen and gives approximate journey times of about 45 minutes to Akchour, 1 hour 15 minutes to Tetouan and 2 hours to Tangier. These are starting estimates; ask for your exact pickup, road and walking plan.",
    photos: [moroccoPlaces.chefchaouenBlueCity, moroccoPhotos.cultureCrafts, moroccoPhotos.atlasWaterfall],
    faqs: [
      { question: "How long should a family stay in Chefchaouen?", answer: "The Moroccan National Tourism Office suggests two days. That allows time for the medina and kasbah without requiring a day trip. Add another night if your family wants to visit Akchour or spend more time outdoors." },
      { question: "Is Chefchaouen easy to walk with a stroller?", answer: "The medina is built on a mountainside and has narrow lanes, slopes and steps. Ask your accommodation or guide about the exact route and consider a carrier for sections where wheels are difficult to manage." },
      { question: "Can we visit Akchour with children?", answer: "Akchour is a nearby nature outing, but suitability depends on the specific walk and your children's experience. Ask for the distance, elevation, trail surface, shade, water and turnaround options, and confirm the transport time both ways." },
      { question: "Can we see Chefchaouen on a day trip from Tangier?", answer: "The official tourism office gives an approximate two-hour journey between Tangier and Chefchaouen. The round trip plus walking can make a long day, so consider an overnight if your family wants a relaxed visit." },
      { question: "When is the best time to visit Chefchaouen?", answer: "The tourism office suggests April to June and September to October for mild weather and notes that winter can be rainy. Check the current forecast and local conditions before planning a mountain walk." },
    ],
    sections: [
      {
        heading: "Plan two days around the town, not just the photograph",
        paragraphs: [
          "The blue lanes make Chefchaouen immediately recognisable, but the town is more than a quick photo stop. The Moroccan National Tourism Office suggests allowing two days and highlights the old medina, kasbah, museum, gardens and nearby walking routes. That length gives a family time to look around without spending the whole visit checking a list.",
          "If Chefchaouen is part of a longer road trip, count the arrival and departure drives before deciding how much sightseeing fits. A late arrival can be a simple walk and dinner; a full morning is a better time for the first medina loop.",
        ],
      },
      {
        heading: "Take the blue lanes one short loop at a time",
        paragraphs: [
          "The streets are narrow and winding, and the town sits on a mountainside. Pick one clear route from your accommodation, keep a familiar landmark as a return point and stop before the children are worn out. A slower walk leaves more room to notice doors, steps, shop displays and the way the town is arranged.",
          "If someone in the family uses a stroller or has difficulty with steps, ask the accommodation for a route description before setting out. A carrier may help for some lanes, but a steep or uneven path may still call for a shorter visit or another way to reach the next stop.",
        ],
      },
      {
        heading: "Use the kasbah as a central pause",
        paragraphs: [
          "The official destination guide describes the kasbah, its garden and its museum in the middle of the old quarter. This can make a useful change of pace from walking through the lanes: children can have a defined place to explore while adults learn more about the town’s history and local culture.",
          "Check the current opening arrangements and visitor rules before promising a museum visit. Keep the timing flexible, especially in hot or wet weather, and plan a drink or meal nearby. A simple pause in the centre can help the family decide what to do next without crossing town again.",
        ],
      },
      {
        heading: "Make Akchour a separate outdoor day",
        paragraphs: [
          "The tourism office puts Akchour about 45 minutes from Chefchaouen. That estimate covers getting there, not the hike or time at the water. Ask your local guide which route is planned and whether it suits your children’s ages, walking experience and the conditions on your date.",
          "Get the practical details before leaving town: trail distance, expected time on foot, elevation changes, surface, shade, toilet options and a point where the group can turn back. Bring water and appropriate footwear, and avoid treating a waterfall photograph as proof that the full route is suitable for every child.",
        ],
      },
      {
        heading: "Choose a sensible connection to Tangier or Tetouan",
        paragraphs: [
          "The official tourism office estimates about two hours between Chefchaouen and Tangier and about an hour and a quarter to Tetouan. Those connections can make a north Morocco itinerary work, but a transfer plus a full sightseeing programme may leave children with very little unstructured time.",
          "Decide whether Chefchaouen is a destination in its own right or a stop on the way to another city. If the family wants to walk the medina, have a meal and rest, an overnight is usually more comfortable than trying to fit both the arrival and departure drives into one day.",
        ],
      },
      {
        heading: "Let the season guide outdoor plans",
        paragraphs: [
          "The Moroccan National Tourism Office identifies April to June and September to October as mild periods for Chefchaouen and notes that winter can be rainy. Conditions can vary by year and by the route you choose, so check the forecast shortly before travel rather than relying on a favourite-month label alone.",
          "For a mountain walk, ask a local guide whether recent rain has changed the trail and what clothing the children will need. If the weather is poor, keep a town-based alternative in mind: a shorter medina walk, time at the kasbah or a relaxed meal can still make the stay worthwhile.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Chefchaouen sights, weather and nearby routes", href: "https://www.visitmorocco.com/en/travel/chefchaouen" },
      { label: "Moroccan National Tourism Office: getting around Morocco", href: "https://www.visitmorocco.com/en/travel-info/getting-around-morocco" },
      { label: "Morocco Travel Experts: family tour options", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
      { label: "Morocco Travel Experts: 14-day family itinerary", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "marrakech-with-kids",
    category: "destinations",
    topic: "Marrakech family days",
    layout: "marrakech-family-days",
    contextLinks: [
      { sectionIndex: 1, before: "If you come back after dinner, use the ", href: "/blog/jemaa-el-fnaa-with-kids/", linkText: "Jemaa el-Fnaa timing guide", after: " to choose when to go and where to meet." },
      { sectionIndex: 3, before: "If you want the foothills, compare the ", href: "/blog/atlas-mountains-with-kids/", linkText: "Atlas day trip options", after: " before picking a walk." },
      { sectionIndex: 5, before: "Continue from Marrakech to the coast with the ", href: "/blog/7-days-in-morocco-with-kids-without-sahara/", linkText: "seven day city and coast itinerary", after: "." },
    ],
    tours: ["10-day-morocco-family-tour", "14-day-morocco-family-tour"],
    related: ["marrakech-medina-with-a-stroller", "jemaa-el-fnaa-with-kids", "7-days-in-morocco-with-kids-without-sahara"],
    title: "Marrakech with Kids: What to Do in Three Days",
    description: "Follow a three day Marrakech plan with kids. Pair a short medina walk with gardens or palaces, then choose a workshop, Atlas outing or quiet day.",
    excerpt: "Build a three-day visit around a few landmarks, a garden or museum, and one flexible day instead of crossing the city for every attraction.",
    image: moroccoPlaces.marrakechKoutoubia.src,
    imageAlt: "Koutoubia Mosque and the surrounding Marrakech medina",
    readingTime: "7 min read",
    table: {
      heading: "Three days, three different Marrakech rhythms",
      caption: "The Moroccan National Tourism Office recommends three days. This sample separates the busiest medina sights from slower and optional outings; check access and hours directly before travel.",
      headers: ["Day", "Possible plan", "What to confirm"],
      rows: [
        ["1 · Old city", "Choose a short medina walk, one historic site and a visit to Jemaa el-Fnaa at the time that suits your children.", "Route, guide arrangements, opening hours and a clear return point."],
        ["2 · Green and indoor time", "Choose a garden or museum and keep the rest of the day open for lunch and a break.", "Current ticket rules, timed entry, opening hours and transport."],
        ["3 · Flexible choice", "Stay in Marrakech for a quieter neighbourhood day, or choose one nearby outing such as the Atlas foothills or Agafay.", "Door-to-door drive time, walking distance and the family's energy after the first two days."],
      ],
    },
    localNote: "The Moroccan National Tourism Office suggests three days in Marrakech and lists the medina, Jemaa el-Fnaa, Majorelle Garden, El Badi Palace and Koutoubia among the main sights. It estimates about 45 minutes to Agafay, one hour to Ourika and 2.5 hours to Essaouira; confirm current travel time and visit arrangements for your dates.",
    photos: [moroccoPlaces.marrakechKoutoubia, moroccoPlaces.marrakechJemaa, moroccoPhotos.riad],
    faqs: [
      { question: "How many days do families need in Marrakech?", answer: "The Moroccan National Tourism Office recommends three days. A family can use that as a planning target for the medina, a garden or museum and one flexible day, adjusting for arrival time and children's ages." },
      { question: "What is a good first day in Marrakech with kids?", answer: "Keep the first day compact: check in, choose one nearby sight and take a short walk when the family feels ready. Save timed tickets or a longer outing for a day when you know how the children are sleeping and adjusting." },
      { question: "Can we visit Agafay, Ourika or Essaouira from Marrakech?", answer: "All are listed as possible day trips by the Moroccan National Tourism Office, with approximate drive times that differ substantially. Choose one, ask for the full door-to-door schedule and consider whether the return leaves enough energy for the family." },
      { question: "Is Marrakech suitable for a stroller?", answer: "Some main streets and larger sites may be easier than the medina lanes. Read the separate stroller guide for route, surface and carrier considerations, and ask your accommodation about the walking distance from vehicle access." },
      { question: "Which Marrakech attractions need advance planning?", answer: "Ticketing, timed entry and opening rules can change. Check each attraction's official visitor information close to your date, especially for gardens, museums, guided visits and activities with age restrictions." },
    ],
    sections: [
      {
        heading: "Start with the three-day recommendation and then edit it",
        paragraphs: [
          "The Moroccan National Tourism Office recommends allowing three days for Marrakech. That is a useful frame for families because it creates space for the old city, one quieter visit and a flexible choice. It is not a checklist: flight time, heat, hotel location and children’s energy will shape how much fits.",
          "Before choosing activities, mark the arrival and departure times on the calendar. A flight day or long transfer should not carry the same sightseeing load as a full day in town. Leave one unscheduled block so the family can pause, return to the hotel or follow an unexpected interest.",
        ],
      },
      {
        heading: "Day one: meet the medina in manageable pieces",
        paragraphs: [
          "Choose one short route through the old city and one place that matters most to your family. A guide can help with orientation, while an independent walk may suit families who want to stop often. Decide in advance where you will meet the driver or return to the accommodation.",
          "Jemaa el-Fnaa can feel different at different times of day. The local family guide recommends late afternoon with children, while a more active evening may suit older children who are comfortable with crowds and noise. Visit for a defined period and keep dinner flexible if the family wants to leave early.",
        ],
      },
      {
        heading: "Day two: change pace with a garden, museum or palace",
        paragraphs: [
          "After a busy medina day, choose a visit with a clear beginning and end. The tourism office lists Majorelle Garden, El Badi Palace and other landmarks among Marrakech’s main sights. One structured stop is often more enjoyable than moving between several distant places before lunch.",
          "Check the venue’s official hours, entry requirements, ticket availability and whether children need a separate ticket. If the family has a timed reservation, plan transport and a meal around it rather than trying to squeeze in a second fixed-time visit on the opposite side of town.",
        ],
      },
      {
        heading: "Day three: pick one flexible alternative",
        paragraphs: [
          "Families who want to stay in the city can choose a quieter neighbourhood, a slow breakfast and another short visit. Families who want open space can consider one nearby outing. The tourism office gives approximate travel times of 45 minutes to Agafay, one hour to Ourika Valley and about two and a half hours to Essaouira from Marrakech.",
          "These are different commitments. Ask for the actual pickup, drive, walking, meal and return schedule. Essaouira includes a longer road day than Agafay; an overnight may work better if the coast is a priority. For a mountain walk or desert activity, confirm the route and age requirements directly with the provider.",
        ],
      },
      {
        heading: "Match the day to the youngest traveller",
        paragraphs: [
          "For a baby or toddler, a midday return to the accommodation can make a longer stay easier. Children who nap in a stroller or carrier may manage a different route from those who need a quiet room. Ask whether the hotel can store bags, prepare a cot or arrange a meal around your timing.",
          "Older children may enjoy a longer medina walk, a museum theme or an activity that gives them a role in choosing the day. Agree on a shared anchor, then let each child pick one small stop. This keeps a family visit from becoming either a parent-only sightseeing march or a list of disconnected activities.",
        ],
      },
      {
        heading: "Use the accommodation as your daily reset point",
        paragraphs: [
          "Marrakech offers different neighbourhood settings, but the name of an area does not tell you how convenient a particular room will be. Ask how far the accommodation is from the nearest vehicle access, whether there are stairs, what family sleeping arrangements are available and how long it takes to reach your first planned stop.",
          "A midday rest can be particularly useful in hot weather or after a late evening. If the accommodation is far from the route, plan a nearby lunch or a quiet indoor stop instead of spending the break in a car. Build the return journey into the day rather than hoping the children will manage one more walk.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Marrakech sights, suggested stay and day trips", href: "https://www.visitmorocco.com/en/travel/marrakesh" },
      { label: "Visit Marrakech: family activities and Jemaa el-Fnaa timing", href: "https://visitmarrakech.com/en/listing/marrakech-en-famille-des-moments-precieux/" },
      { label: "Visit Marrakech: family activity ideas", href: "https://visitmarrakech.com/en/les-7-experiences-familiales-incontournables-a-marrakech/" },
      { label: "Morocco Travel Experts: Marrakech family guide", href: "https://moroccotravelexperts.com/family-guide/marrakech-travel-guide/" },
    ],
  },
  {
    slug: "morocco-family-trip-budget",
    category: "planning",
    topic: "Family trip budget planning",
    layout: "family-budget-workbook",
    contextLinks: [
      { sectionIndex: 0, before: "Choose an overnight sequence from the ", href: "/morocco-family-itineraries/", linkText: "sample family itineraries", after: " before pricing rooms and transfers." },
      { sectionIndex: 4, before: "Use the ", href: "/tours/", linkText: "tour comparison", after: " to see the start and finish cities for each quote." },
      { sectionIndex: 6, before: "To ask for a revised route and group total, ", href: "/plan-my-trip/", linkText: "email the planning team", after: " with the details you want to change." },
    ],
    tours: [],
    related: ["riad-or-hotel-morocco-with-kids", "child-car-seats-in-morocco", "how-many-days-in-morocco-with-kids"],
    title: "How Much Does a Morocco Family Trip Cost?",
    description: "Build a Morocco family trip budget and compare written quotes for flights, rooms, drivers, meals, guides and activities. Use the included cost worksheet.",
    excerpt: "Compare two trip quotes line by line, including rooms, transfers, meals and the expenses you pay separately.",
    image: moroccoPhotos.riad.src,
    imageAlt: "A riad or family accommodation in Morocco",
    readingTime: "7 min read",
    table: {
      heading: "A family budget ledger to fill with current prices",
      caption: "Record the actual quote for your dates and group. This table is a comparison worksheet, not a price list or promise of cost.",
      headers: ["Cost line", "Write down", "Check before comparing"],
      rows: [
        ["International travel", "Flights, baggage, seat selection and airport transfers.", "Use the same airports, dates, baggage allowance and transfer plan."],
        ["Accommodation", "Room count, family occupancy, meals and taxes.", "Compare the actual room type and included breakfast, not only the property name."],
        ["Getting around", "Private driver, trains, transfers and local taxis.", "Ask which days and distances are covered and what waiting or extra stops cost."],
        ["Experiences", "Guides, admission, desert camp and optional activities.", "Separate included items from optional purchases and verify child rates directly."],
        ["Food and daily spending", "Meals not included, snacks, drinks and small purchases.", "Use current local prices and your family’s own habits rather than a generic allowance."],
      ],
    },
    localNote: "Morocco’s currency is the dirham (MAD). The Moroccan National Tourism Office says visitors may use cash or credit cards, while acceptance varies by establishment. Check your card issuer’s fees and keep the payment method and cash plan appropriate to your route.",
    photos: [moroccoPhotos.riad, moroccoPhotos.guideGuests, moroccoPhotos.roadTrip],
    faqs: [
      { question: "How much does a Morocco family trip cost?", answer: "There is no single reliable total for every family. The price depends on travel dates, group size, flights, room setup, route, transport, guide time, camp choice and inclusions. Build a trip-specific budget from current written prices." },
      { question: "What should I include when comparing tour quotes?", answer: "Compare the exact itinerary, vehicle and transfers, room configuration, meals, guide services, admission, activities, child-seat arrangements, payment schedule and cancellation terms. Ask each provider to list what is excluded." },
      { question: "Do children get discounted prices in Morocco?", answer: "Child policies vary by airline, hotel, venue and activity. Ask the provider to state the age bands and prices for each child in writing rather than assuming a general discount applies." },
      { question: "Should we carry cash in Morocco?", answer: "The tourism office says cash and cards are both used, but acceptance depends on the establishment. Ask your bank about fees and carry an appropriate way to pay for places that do not take your card." },
      { question: "Is a private tour more expensive than arranging each transfer?", answer: "The comparison depends on your family size and which services are included. Price transport, guide time, accommodation, meals and activities separately in both options, then include the convenience and flexibility you actually need." },
    ],
    sections: [
      {
        heading: "Set the trip frame before asking for a total",
        paragraphs: [
          "A useful Morocco family budget begins with a clear trip frame: travel dates, departure city, number of nights, adults and each child’s age, preferred room arrangement and the places that are essential. A quote for two adults in one room cannot be compared with a trip that needs connecting rooms, a cot or a larger vehicle.",
          "Choose the route before asking for a final figure. A Marrakech stay, a Sahara loop and a two-week north-to-south itinerary have different transport, hotel and activity costs. Use the trip-length guide to decide whether the family values more destinations or extra nights in fewer places.",
        ],
      },
      {
        heading: "Price the room arrangement, not the hotel label",
        paragraphs: [
          "Accommodation cost depends on the actual room setup and what the property includes. Ask for the quoted room name, bed configuration, occupancy limit, meal basis, taxes and cancellation terms. For children, confirm whether a cot or extra bed is available and whether it changes the price.",
          "A family room, two standard rooms and a suite are not interchangeable. If you are comparing options, write down the room count, sleeping arrangements, stairs or access needs and distance from your planned route. This makes the real value easier to see than a star rating alone.",
        ],
      },
      {
        heading: "Separate travel between cities from activities in each city",
        paragraphs: [
          "For a private driver quote, ask which route, vehicle and transfer days are included, how long the driver waits at stops and whether airport pickup is part of the price. For rail or coach travel, include the tickets, station transfers, baggage and the taxi or walking cost at each end. The Moroccan tourism office lists several transport options, but they do not serve every destination in the same way.",
          "Then list activities separately: guide services, museum or monument admission, desert camp, camel ride, outdoor activity and any special transport. Mark each one as included, optional or paid on arrival. A low headline quote can become difficult to compare when key experiences have been left out.",
        ],
      },
      {
        heading: "Ask how children change the quote",
        paragraphs: [
          "Share each child’s age before a provider prepares the offer. Children can affect room occupancy, meal prices, admissions, vehicle seating and the suitability of an activity. Ask the operator to confirm any child rate or age limit directly; there is no single policy that applies to every supplier.",
          "If a car seat is needed, include the child’s age, height and weight and ask for the exact seat type, quantity and availability in writing. Treat it as part of the transport quote, not an afterthought. The same applies to a cot, accessible room or special meal arrangement.",
        ],
      },
      {
        heading: "Compare written quotes line by line",
        paragraphs: [
          "Compare the total for your group in one currency. Start with each written quote, then add the same flights and anything missing from each one. If a driver quote excludes two dinners and a guide day, add the cost of those three items before comparing it with an itinerary that includes them.",
          "Use one column per provider. Record each room, transfer, meal, guide day and activity as included, optional or payable separately. Ask about any line you cannot price yet and keep it visible in the comparison.",
          "Check the payment currency, deposit, balance deadline, cancellation policy and what happens if a listed service changes. Save the proposal version and the answers to your questions. If you later request a different route or room, ask for a revised written total so you know what changed.",
        ],
      },
      {
        heading: "Keep daily spending realistic for your own habits",
        paragraphs: [
          "Meals, snacks, drinks, small purchases and local transport vary with the family’s choices. Decide which meals are included and note how often you expect to sit down in a restaurant, buy a quick snack or use a taxi. A family that prefers familiar food or frequent stops may spend differently from one that eats most meals at the hotel.",
          "Morocco’s currency is the dirham, and the tourism office says visitors can pay by cash or card, depending on the establishment. Ask your card issuer about foreign transaction and cash-withdrawal charges, then plan a reasonable way to pay for small purchases or places that do not accept cards.",
        ],
      },
      {
        heading: "Choose where extra flexibility matters most",
        paragraphs: [
          "A family does not need to spend equally on every part of the trip. Decide whether a private transfer, two-night stay, family room, guide or desert camp makes the biggest difference to your children. If you need to reduce the budget, ask the operator for a revised route or room plan that shows the saving and the trade-off.",
          "Avoid cutting the break that keeps a long travel day manageable. Reducing one distant stop or replacing an optional activity may be easier for the family than choosing a very tight schedule. Compare the revised total and itinerary together so that a lower figure still represents a trip you want to take.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: currency, payment and useful travel information", href: "https://www.visitmorocco.com/en/useful-information" },
      { label: "Moroccan National Tourism Office: getting around Morocco", href: "https://www.visitmorocco.com/en/travel-info/getting-around-morocco" },
      { label: "Morocco Travel Experts: private family tour options", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
      { label: "Morocco Travel Experts: compare 7, 10 and 14-day family itineraries", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "agadir-with-kids",
    category: "coast",
    topic: "Atlantic coast",
    layout: "agadir-bay-notebook",
    contextLinks: [
      { sectionIndex: 1, before: "If the family wants a day away from the bay, read the ", href: "/blog/paradise-valley-with-kids/", linkText: "Paradise Valley trip from Agadir", after: " before booking a driver." },
      { sectionIndex: 5, before: "Compare the coast with ", href: "/blog/essaouira-with-kids/", linkText: "an overnight in Essaouira", after: " if you want to pair a beach stop with a medina walk." },
    ],
    tours: [],
    related: ["paradise-valley-with-kids", "taroudant-with-kids", "best-family-beaches-in-morocco"],
    title: "Agadir with Kids: Bay, Beach and Taghazout",
    description: "Choose between a stay on Agadir Bay and a trip to Taghazout. Plan beach walks, time around the bay and an alternative for windy days.",
    excerpt: "A practical Agadir family guide to the beach areas, a slower day plan, nearby options and the details to confirm before you go.",
    image: moroccoPlaces.agadirBeach.src,
    imageAlt: moroccoPlaces.agadirBeach.alt,
    readingTime: "7 min read",
    table: {
      heading: "Pick the coastal day your family wants",
      caption: "The tourism office distinguishes the calmer Bay of Agadir from the more energetic surf areas around Taghazout. Sea conditions and activities can change by day.",
      headers: ["Area or idea", "Works well for", "Plan around"],
      rows: [
        ["Agadir Bay", "A relaxed beach day and a base near the seafront", "Check the day’s flags, lifeguard advice and water conditions; do not treat a calmer bay as a guarantee."],
        ["Taghazout", "Older children interested in surfing, beach scenery and a quieter village feel", "Surf lessons, wave strength, transport and the time needed to return to your accommodation."],
        ["A short inland outing", "Families wanting a break from sand and surf", "Confirm the route, opening arrangements, heat and whether the stop fits your children’s energy."],
      ],
    },
    localNote: "The Moroccan National Tourism Office describes the Bay of Agadir as calmer than the wave-focused Taghazout coast. This is a useful location distinction, not a real-time swimming report: follow posted warnings and local lifeguard instructions on the day.",
    photos: [moroccoPhotos.atlanticCoast, moroccoPhotos.guideGuests],
    faqs: [
      { question: "Is Agadir a good beach destination for a family?", answer: "It can suit families looking for a coastal stay, a broad seafront and activities beyond sightseeing. Choose the neighborhood around your preferred pace, and check the sea conditions, shade and facilities on the beach you plan to visit." },
      { question: "Is the water calm in Agadir?", answer: "The National Tourism Office describes the Bay of Agadir as calmer than the surf areas around Taghazout. Conditions still vary. Check current local advice, follow flags and stay within the lifeguarded area when one is available." },
      { question: "Should we stay in Agadir or Taghazout with children?", answer: "Agadir is a practical base for a family that wants a city seafront and a choice of services. Taghazout may suit a family specifically interested in surf culture. Compare the accommodation, transport and meal options you need before choosing." },
      { question: "How many days should a family spend in Agadir?", answer: "Two or three nights can make room for beach time and one easy outing, but the right length depends on your route. A longer stay can be more worthwhile than adding a string of short stops to an already busy itinerary." },
      { question: "Can we add Agadir to a Marrakech family trip?", answer: "Yes, if the route and travel time fit your dates. Ask for realistic door-to-door estimates and an overnight plan instead of treating the coast as a quick return trip between activities." },
    ],
    sections: [
      {
        heading: "Start by choosing the kind of coast day",
        paragraphs: [
          "Agadir and Taghazout are close enough to appear together in a holiday plan, but they offer different rhythms. The Bay of Agadir is the easier starting point for families seeking a broad beachfront and a straightforward day beside the water. Taghazout is better known for surf and the Atlantic’s stronger waves. Decide which experience matters before you book a room or promise children a particular activity.",
          "The official tourism office describes the bay as calmer and the Taghazout coast as more wave-focused. Use that as a planning distinction, then check the conditions on the day. A forecast, beach flag, local lifeguard instruction and the child’s swimming ability matter more than a general destination description.",
        ],
      },
      {
        heading: "A low-stress first day on the bay",
        paragraphs: [
          "After arrival, keep the first outing close to the accommodation. Find the beach access, a shaded place for a rest, the nearest toilets and an easy meal option before spending several hours beside the water. A simple orientation walk lets children see where the family will return and gives adults a chance to check the current beach setup.",
          "Make the first swim optional rather than the whole day’s promise. If the water, wind or crowd level does not suit your family, a short sand play, a promenade walk or a pool break can still make the day feel successful. Keep dry clothes and a light layer accessible when the sea breeze picks up.",
        ],
      },
      {
        heading: "Keep the Taghazout plan activity-led",
        paragraphs: [
          "Choose Taghazout because a family wants to experience its surf scene, not because every beach has identical conditions. If children want a lesson, ask the school about minimum ages, equipment, instructor supervision, lesson length and the conditions that would cause it to be postponed. A beginner session should be matched to the child and the sea on that particular day.",
          "Families not planning to surf can still make a shorter visit for a change of scenery and a meal. Avoid stacking a long outing after an early start or a previous transfer. Decide in advance how you will get back and leave a buffer for the drive, a tired child or a change in the activity schedule.",
        ],
      },
      {
        heading: "Choose your base by the evenings you want",
        paragraphs: [
          "Agadir gives families a larger urban base along the seafront, while Taghazout has a more compact surf-town feel. Look at a map of the actual hotel, beach access and places you expect to eat, rather than selecting a property only because its listing says it is near the coast. A short taxi ride can become important when a child is tired or the family is carrying beach gear.",
          "Confirm the room layout, lift or stair access, air-conditioning, breakfast hours, pool rules and cancellation terms directly with the property. Ask whether the quoted price includes the number of beds your family needs. A resort label alone cannot tell you whether the stay will be comfortable for your group.",
        ],
      },
      {
        heading: "Make water time practical and cautious",
        paragraphs: [
          "Pack sun protection, drinking water, a change of clothes and a small snack, then plan a break indoors or in shade during the brightest part of the day. The sea can feel cool or lively even when the air is warm. Check for warning flags and follow lifeguard guidance; keep younger children within immediate reach around water.",
          "Treat motorized water sports and parasailing as separate adult decisions, not automatic family activities. Ask the provider about age and size rules, safety equipment, supervision and cancellation when the conditions are unsuitable. If a child is uncertain, watching from the beach can be a complete activity in itself.",
        ],
      },
      {
        heading: "Give the coast enough nights to feel like a stay",
        paragraphs: [
          "An Agadir visit can be a restful contrast after Marrakech or an inland road section. If your family arrives after a long transfer, make that evening about food and sleep. Put the beach on the next day, when you can check local conditions without having to rush straight back onto the road.",
          "Before adding a second coastal stop, compare the extra hotel move with the experience it provides. Families often gain more from an unhurried beach morning and a quiet afternoon than from changing accommodation again to collect another place name. Ask the planner to show the full route and overnight sequence in writing.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Agadir and Taghazout beach conditions and activities", href: "https://www.visitmorocco.com/en/travel/agadir-taghazout/beach" },
      { label: "Moroccan National Tourism Office: Agadir-Taghazout destination guide", href: "https://www.visitmorocco.com/en/travel/agadir-taghazout" },
      { label: "Morocco Travel Experts: family itinerary ideas", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "meknes-with-kids",
    category: "destinations",
    topic: "Imperial city stop",
    layout: "meknes-two-day",
    contextLinks: [
      { sectionIndex: 3, before: "For the afternoon outside the city, use the ", href: "/blog/volubilis-with-kids/", linkText: "Volubilis visit plan", after: " to choose the length of the walk." },
      { sectionIndex: 5, before: "The ", href: "/tours/7-day-morocco-family-tour/", linkText: "seven day Marrakech loop", after: " visits Meknes on the transfer to Chefchaouen. Book a separate overnight if you want two days in town." },
    ],
    tours: [],
    related: ["fes-with-kids", "volubilis-with-kids", "morocco-by-train-with-kids"],
    title: "Meknes with Kids: Bab Mansour and Two Days",
    description: "Plan two days in Meknes with kids. See Bab Mansour, choose a historic interior and decide whether to add the Roman ruins at Volubilis.",
    excerpt: "A two-day family plan for Meknes with time at the historic gate, a calmer city walk and a separate archaeological-site outing.",
    image: moroccoPlaces.meknesBabMansour.src,
    imageAlt: moroccoPlaces.meknesBabMansour.alt,
    readingTime: "7 min read",
    table: {
      heading: "A two-day Meknes outline",
      caption: "The national tourism office recommends allowing two days and lists Volubilis, Bab Mansour, Bou Inania Madrasa and the Mausoleum of Moulay Ismail among the main sights.",
      headers: ["Day", "Family focus", "Leave flexible"],
      rows: [
        ["Day 1", "Bab Mansour, El Hedim Square and one or two historic interiors", "Opening hours, walking pace, rest stops and any site access limits."],
        ["Day 2", "Choose Volubilis, Moulay Idriss or a quieter Meknes morning", "The excursion transfer, heat, site surface and return time."],
        ["If passing through", "A short overnight between Fes and a wider northern route", "Whether one night leaves enough time to see the city without rushing."],
      ],
    },
    localNote: "Visit Morocco suggests two days in Meknes and lists Volubilis as about 30 minutes away. Treat that as a broad planning estimate: check the actual pickup point, current road conditions and the amount of time your family wants at the archaeological site.",
    photos: [moroccoPlaces.meknesBabMansour, moroccoPhotos.medina],
    faqs: [
      { question: "How many days should a family spend in Meknes?", answer: "The Moroccan National Tourism Office recommends allowing two days. A shorter stop can work if you choose one main sight, but the city and Volubilis are easier to enjoy when they are not squeezed into a rushed transfer day." },
      { question: "Is Volubilis close enough for a family day trip?", answer: "Visit Morocco lists the site at about 30 minutes from Meknes. Confirm the exact transfer and plan enough time for the open-air archaeological site, water, shade breaks and the return journey." },
      { question: "What can children see in Meknes?", answer: "Families can start with the monumental Bab Mansour gate and El Hedim Square, then choose a historic interior or a day trip. Keep the number of stops manageable and make room for a snack or a quieter break." },
      { question: "Can Meknes be combined with Fes?", answer: "The tourism office lists Fes at about an hour away. The cities can be combined on a larger route, but one overnight in Meknes gives the family more time to explore rather than treating the visit as a brief stop." },
      { question: "Is Meknes suitable with a stroller?", answer: "It depends on the street, entrance and specific site. Ask the accommodation or local guide about the day’s route and carry a compact stroller or carrier only if it fits your child and the planned surfaces." },
    ],
    sections: [
      {
        heading: "Arrive with time for a simple orientation walk",
        paragraphs: [
          "Start with the location of your accommodation, the nearest food option and the distance to the historic centre. Meknes is a useful place to slow the itinerary down between Fes and an excursion, but the family still needs time to check in and settle. Avoid making the first hour a checklist of monuments.",
          "If you arrive in the afternoon, walk only as far as the children are comfortable and save the main gate for a fresh morning. That gives everyone a clear sense of the streets and creates an easy exit if the day has already included a long transfer.",
        ],
      },
      {
        heading: "Day one, morning: begin at Bab Mansour",
        paragraphs: [
          "Bab Mansour beside El Hedim Square is a natural orientation point and one of the city's most recognizable landmarks. Give children time to notice the gate’s size, patterns and decorated surfaces before moving onward. A short, focused visit can be more engaging than trying to explain every period of the city’s history at once.",
          "Use the square as a place to pause, observe daily movement and agree on the next stop. Keep valuables secure in a busy public area, set a meeting point if older children will walk with you, and take a photograph of the gate before moving into the surrounding streets.",
        ],
      },
      {
        heading: "Day one, afternoon: choose one historic interior",
        paragraphs: [
          "The official visitor guide names Bou Inania Madrasa and the Mausoleum of Moulay Ismail among the city’s principal places to see, along with the royal stables and granaries. Choose one or two that are open and suitable for your group instead of racing between every landmark. Check access rules and opening times shortly before the visit.",
          "Children often need a change of pace after a morning outside. Pair the historic stop with a drink, a meal or a quiet return to the hotel. If the family is still interested, add a short craft or market walk; if not, keep the evening open.",
        ],
      },
      {
        heading: "Day two, morning: decide whether to go to Volubilis",
        paragraphs: [
          "Volubilis is listed as roughly 30 minutes from Meknes by the national tourism office, which makes it a practical separate excursion for many families. The site is an extensive archaeological landscape, not a compact indoor museum. Choose it when your children enjoy walking and looking for details outdoors, and check what is accessible on your selected date.",
          "Bring water, a hat and shoes that are comfortable on uneven ground. Ask the driver where the agreed pickup point will be and how long you have at the site. Do not assume that every surface is stroller-friendly or that shade is available at each place you want to pause.",
        ],
      },
      {
        heading: "Day two, afternoon: keep one option in reserve",
        paragraphs: [
          "If the family has had enough history, return to Meknes for lunch and a slower city afternoon. If you have energy and transport lined up, Moulay Idriss is another named excursion in the surrounding area. The best choice depends on the children’s stamina and the time available, not the number of pins visible on a map.",
          "Leave an unbooked hour before the next transfer or dinner. That buffer lets the family rest, change clothes and review the following day’s route. If you are continuing to Fes, check the departure plan with the driver or station before committing to an additional sightseeing stop.",
        ],
      },
      {
        heading: "Use Meknes as a real overnight, not a rushed photo stop",
        paragraphs: [
          "Visit Morocco gives a broad estimate of about an hour between Meknes and Fes and recommends two days in Meknes. A one-night stay can still be useful on a longer route, but it will not provide the same unhurried two-day visit. Decide whether the city is a priority or simply a convenient place to break the journey.",
          "Ask for the exact hotel, transfer and sightseeing plan in writing. Confirm which visits are included, whether an accredited local guide is available, how admissions are handled and which sites require separate payment. These details change by provider and date, so a route outline is not confirmation of current access.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Meknes sights, two-day visit and nearby distances", href: "https://www.visitmorocco.com/en/travel/meknes" },
      { label: "UNESCO World Heritage Centre: Historic City of Meknes", href: "https://whc.unesco.org/en/list/793/" },
      { label: "Morocco Travel Experts: family trip itineraries", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "volubilis-with-kids",
    category: "destinations",
    topic: "Archaeology outdoors",
    layout: "volubilis-fieldbook",
    contextLinks: [
      { sectionIndex: 0, before: "The ", href: "/blog/meknes-with-kids/", linkText: "two day Meknes plan", after: " leaves a morning for the ruins." },
      { sectionIndex: 5, before: "On the ", href: "/tours/14-day-morocco-family-tour/", linkText: "Casablanca family loop", after: " the ruins are a stop on the way to Fes. Ask how long you will have before continuing." },
    ],
    tours: [],
    related: ["meknes-with-kids", "fes-with-kids", "morocco-by-train-with-kids"],
    title: "Volubilis with Kids: A Walk Through the Roman Ruins",
    description: "Visit Volubilis with kids using a short walk between Roman streets and mosaics. Plan shade, breaks and the drive from Meknes or Fes.",
    excerpt: "A family field guide for the open-air ruins at Volubilis, with simple things to look for and practical questions to settle before your visit.",
    image: moroccoPlaces.volubilisRuins.src,
    imageAlt: moroccoPlaces.volubilisRuins.alt,
    readingTime: "7 min read",
    table: {
      heading: "A family field card for Volubilis",
      caption: "Use these prompts to make a large archaeological site easier for children to explore. Follow current access rules and on-site guidance.",
      headers: ["Look for", "Ask the children", "Make the stop easier"],
      rows: [
        ["Street lines and the site’s scale", "Where might people have walked or traded?", "Start with a map or orientation point before wandering."],
        ["Carved stone and architectural remains", "Which shapes or marks can you spot?", "Stay on permitted paths and do not climb on fragile remains."],
        ["Mosaics or decorated surfaces when accessible", "What patterns or stories can you make out?", "Do not touch protected artwork; access varies by site conditions."],
      ],
    },
    localNote: "UNESCO describes Volubilis as a former Mauritanian capital and important Roman outpost with extensive surviving remains. Treat it as a protected heritage site: follow posted directions, respect barriers and confirm current ticketing and opening details before travel.",
    photos: [moroccoPlaces.volubilisRuins, moroccoPhotos.kasbah],
    faqs: [
      { question: "What is Volubilis?", answer: "UNESCO describes it as a Mauritanian capital founded in the third century BCE that later became an important Roman outpost. The archaeological site preserves extensive remains of its buildings." },
      { question: "How long does a family need at Volubilis?", answer: "There is no single visit length for every family. Allow enough time for the transfer, the outdoor walking route and breaks. Check current site guidance, then choose the number of areas your children can enjoy without rushing." },
      { question: "Is Volubilis suitable for a stroller?", answer: "The site is an outdoor archaeological landscape, so surfaces and access may be uneven. Ask the site or your local operator about current conditions, and consider a carrier only if it is comfortable for your child and the adults." },
      { question: "Can we visit Volubilis from Meknes?", answer: "The national tourism office lists the site at about 30 minutes from Meknes. Confirm the actual driving estimate for your pickup point and arrange the return journey before you begin the visit." },
      { question: "Do I need to book tickets in advance?", answer: "Ask the site or your guide how to buy tickets and check the opening times for your date. Confirm this before you leave Meknes." },
    ],
    sections: [
      {
        heading: "Before the gate: set a small mission",
        paragraphs: [
          "A large ruin field can be difficult for younger children to take in all at once. Give the visit a simple mission: spot one street line, find a carved detail and choose a view that helps everyone understand how much of the old settlement survives. The UNESCO description provides context, but children do not need a long history lecture before they begin walking.",
          "The site is outdoors, so check the forecast, opening information and ticket instructions before leaving Meknes. Carry water and sun protection, wear shoes suitable for uneven surfaces and agree where the family will regroup if someone walks a little ahead. Follow barriers and directions even when a tempting photo angle is just beyond them.",
        ],
      },
      {
        heading: "Field note one: read the landscape first",
        paragraphs: [
          "Volubilis sits in a fertile agricultural setting, a point UNESCO includes in its description of the site. Begin by letting children notice the open landscape around the remains. Ask what is different from walking through a city today: the space between structures, the horizon and the way the ruins sit in the surrounding land.",
          "This first pause helps the visit feel like an exploration rather than a sequence of unrelated stones. Point out the route on a simple map or use a guide to identify the main areas. Then choose a manageable loop based on the posted path and the family’s energy.",
        ],
      },
      {
        heading: "Field note two: look for the shape of a town",
        paragraphs: [
          "UNESCO notes that substantial remains survive from buildings at Volubilis. Help children look at the arrangement of walls, spaces and routes, then imagine the everyday activities a town needs. Where might people have gathered, worked or moved goods? Treat these as observation questions, not guesses about a particular building unless the site interpretation identifies it.",
          "Keep the conversation grounded in what everyone can see. A child may notice a change in stone, an unusual curve or a gap between walls before an adult spots it. Give them a little time to describe the detail, then check whether the guide or on-site information can explain it.",
        ],
      },
      {
        heading: "Field note three: notice patterns without touching",
        paragraphs: [
          "Decorated surfaces can hold children’s attention, especially when they are invited to describe repeated shapes, borders or colors. Ask them to find a pattern from a respectful distance and explain what they notice. The protected remains should be observed without touching, stepping on or leaning against them.",
          "Do not promise that a particular mosaic or room will be accessible on your date. Site maintenance, crowd controls and access instructions may change. If a feature is closed, redirect the child to another visible detail rather than crossing a barrier or asking them to pose on the artwork.",
        ],
      },
      {
        heading: "Field note four: make history human-sized",
        paragraphs: [
          "A child-friendly explanation can begin with familiar questions: how did people move between rooms, where might they have worked and what clues tell us that the site was important? UNESCO records Volubilis as a former capital and a Roman outpost, so the visit can connect local history with a wider story without suggesting that every building belongs to one period.",
          "If you are travelling with a guide, ask for an age-appropriate explanation and a few specific features to notice. A good short story can make the rest of the walk easier to understand. Leave room for questions, and accept that children may remember one image or pattern more clearly than a list of dates.",
        ],
      },
      {
        heading: "Field note five: plan the exit as carefully as the entry",
        paragraphs: [
          "Set a return time with your driver before the family starts exploring. Include a drink and rest break, and check whether there is a suitable place to pause before the next transfer. The open-air setting means shade and facilities should not be assumed at every point in the walk.",
          "If you are continuing to another city that afternoon, work back from the drive and check-in time. For a return to Meknes, leave the rest of the day free for food or an easier walk.",
        ],
      },
    ],
    sourceLinks: [
      { label: "UNESCO World Heritage Centre: Archaeological Site of Volubilis", href: "https://whc.unesco.org/en/list/836/" },
      { label: "Moroccan National Tourism Office: Meknes and nearby Volubilis", href: "https://www.visitmorocco.com/en/travel/meknes" },
    ],
  },
  {
    slug: "ifrane-with-kids",
    category: "mountains",
    topic: "Middle Atlas seasons",
    layout: "ifrane-season-wheel",
    contextLinks: [
      { sectionIndex: 0, before: "Ifrane can fit between Fes and a longer inland route; compare it with our ", href: "/blog/morocco-family-road-trip-stops/", linkText: "family road-trip stop guide", after: " before committing to another hotel change." },
      { sectionIndex: 5, before: "For a wider northern itinerary, review the ", href: "/tours/14-day-morocco-family-tour/", linkText: "two-week family route", after: " and confirm the stops and transfer estimates for your own dates." },
    ],
    tours: ["7-day-morocco-family-tour"],
    related: ["meknes-with-kids", "fes-with-kids", "atlas-mountains-with-kids"],
    title: "Ifrane with Kids: Forest Walks and Seasonal Stops",
    description: "Choose an Ifrane family outing by season. Plan a short forest stop between Fes and the Middle Atlas, and check snow and road conditions in winter.",
    excerpt: "Plan an Ifrane family stop with a seasonal checklist, gentle outdoor ideas and practical notes for connecting it to Fes or Meknes.",
    image: moroccoPlaces.ifraneForest.src,
    imageAlt: moroccoPlaces.ifraneForest.alt,
    readingTime: "7 min read",
    table: {
      heading: "Use the season to shape an Ifrane day",
      caption: "Visit Morocco describes Ifrane at 1,650 metres, with cool summers, frequent snow from December to March and cedar forests that are especially attractive in spring.",
      headers: ["Season", "Family angle", "Check before leaving"],
      rows: [
        ["Spring", "Cedar-forest scenery and outdoor walks", "Rain, trail conditions and the route to the chosen forest area."],
        ["Summer", "A cooler-feeling pause from hotter inland cities", "The day’s forecast, hydration and whether the family needs a warm evening layer."],
        ["Autumn", "A quieter outdoor stop and a change of color", "Shorter daylight and the condition of the specific trail or lake area."],
        ["Winter", "A chance of snow and a very different landscape", "Road and weather conditions, warm clothing, and whether snow activities are operating."],
      ],
    },
    localNote: "The Moroccan National Tourism Office lists Ifrane at 1,650 metres and suggests two days for a stay. Its seasonal notes mention cool summers, frequent snow between December and March and spring cedar forests; conditions still vary from year to year.",
    photos: [moroccoPlaces.ifraneForest, moroccoPhotos.wildlife],
    faqs: [
      { question: "How many days should a family spend in Ifrane?", answer: "Visit Morocco recommends allowing two days. If Ifrane is a short stop between cities, plan one clear outdoor outing and check whether the extra overnight is worth the hotel change for your family." },
      { question: "Does it snow in Ifrane?", answer: "The national tourism office says snow is frequent from December to March. Snow is not guaranteed on a particular date, so check the latest weather and road conditions before travelling." },
      { question: "Is Ifrane cooler than Fes or Marrakech?", answer: "Ifrane is at 1,650 metres and the tourism office describes its summers as cool. Pack layers and check the forecast for the actual day rather than relying on conditions in another city." },
      { question: "Can we see Barbary macaques near Ifrane?", answer: "The tourism office notes Barbary macaques in the surrounding cedar-forest area. Wildlife sightings are never guaranteed; keep a respectful distance, follow local guidance and do not feed wild animals." },
      { question: "Can we visit Ifrane as a day trip from Fes?", answer: "Visit Morocco lists Fes as about 1 hour and 15 minutes away. Confirm the actual route and allow enough time for the outing, breaks and return before deciding whether a day trip suits your family." },
    ],
    sections: [
      {
        heading: "Start with the altitude, not the postcard",
        paragraphs: [
          "Ifrane sits at 1,650 metres, according to the Moroccan National Tourism Office. That helps explain why it can feel different from lower cities, particularly when the family arrives from a warm afternoon elsewhere. Bring layers that can be added or removed, and check the forecast for Ifrane instead of assuming the weather will match Fes or Marrakech.",
          "The town is associated with red-roofed buildings, lakes and nearby cedar forest. For families, the practical value is a change of pace and landscape. Decide whether you want a short town walk, a nearby nature stop or a full overnight before adding the destination to an already long drive.",
        ],
      },
      {
        heading: "Spring: give the forest the first part of the day",
        paragraphs: [
          "The tourism office calls spring a lovely time for the cedar forests. If your children enjoy being outdoors, choose a short route and plan a clear turnaround point before starting. A modest walk with time to pause is usually easier to manage than an ambitious trail added between two long transfers.",
          "Ask locally about the route’s surface, current conditions and any guidance around wildlife. Do not approach or feed animals for a photograph. Keep a snack and water available, and carry a light layer in case the temperature changes while the family is away from the car.",
        ],
      },
      {
        heading: "Summer: use the cooler setting for an easy stop",
        paragraphs: [
          "Ifrane’s higher elevation and cooler summer conditions can make it a welcome pause on a hot-weather route. Use the morning for a walk or visit to a lake area, then choose a relaxed lunch or rest rather than packing several distant stops into the afternoon. Shade and facilities vary, so check the exact place you plan to visit.",
          "A cooler day does not remove the need for sun protection or drinking water. Keep an extra layer for the evening and allow time to reach your accommodation before the children are overtired. If you are using a private driver, confirm the pickup and waiting plan in advance.",
        ],
      },
      {
        heading: "Autumn: let daylight set the walking distance",
        paragraphs: [
          "Autumn can be a comfortable time to include Ifrane on a Fes and Meknes route, but the family should still check the day’s forecast and daylight. Choose one outdoor area and an easy alternative in case the weather turns. A nearby cafe, a town stroll or an earlier hotel check-in can keep the stop worthwhile without insisting on a trail.",
          "If you are travelling with younger children, make the destination a short overnight rather than a late excursion followed by another city transfer. Check room heating, bedding and breakfast times directly with the accommodation; a mild afternoon does not guarantee a warm evening.",
        ],
      },
      {
        heading: "Winter: treat snow as a possibility, not a promise",
        paragraphs: [
          "Visit Morocco notes frequent snow from December to March, but the weather varies. Check forecasts and road updates before leaving, particularly when your plan depends on reaching a particular site. Ask the driver or accommodation what is currently accessible and whether the proposed route remains comfortable.",
          "Pack warm layers, gloves and shoes that are suitable for wet or cold ground if snow is forecast. Do not assume a snow activity or ski facility is open simply because it appears in a destination guide. Confirm opening arrangements and equipment with the provider, then keep an indoor alternative for children.",
        ],
      },
      {
        heading: "Choose the outing around the children you have",
        paragraphs: [
          "The official visitor guide names Lake Aoua, Al Akhawayn University, the Michlifen ski resort and Ifrane’s lion among points of interest. The right choice depends on ages, walking ability, current conditions and what is open. A family can have a satisfying visit without checking every item off the list.",
          "The same guide gives approximate drive times to Azrou, Meknes and Fes. Use those only as a first estimate, then check the actual departure point and route. A day trip from Fes may suit some groups, while another family will prefer sleeping in Ifrane to avoid a late return after an outdoor day.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Ifrane seasons, sights and nearby distances", href: "https://www.visitmorocco.com/en/travel/ifrane" },
      { label: "Moroccan National Tourism Office: nature around Ifrane", href: "https://www.visitmorocco.com/en/travel/ifrane/nature" },
      { label: "Morocco Travel Experts: family trip route ideas", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
    ],
  },
  {
    slug: "ouarzazate-with-kids",
    category: "desert",
    topic: "Kasbahs and cinema",
    layout: "ouarzazate-film-route",
    contextLinks: [
      { sectionIndex: 3, before: "Read the ", href: "/blog/ait-benhaddou-with-kids/", linkText: "short family walk at Aït Benhaddou", after: " before combining the two places." },
      { sectionIndex: 4, before: "See the ", href: "/blog/skoura-with-kids/", linkText: "Skoura overnight options", after: " if you are continuing toward the dunes." },
    ],
    tours: ["14-day-morocco-family-tour", "family-sahara-adventure"],
    related: ["ait-benhaddou-with-kids", "skoura-with-kids", "agdz-with-kids"],
    title: "Ouarzazate with Kids: Kasbahs, Film Sets and Stops",
    description: "Choose between a kasbah visit, a film studio and a trip to Aït Benhaddou. See how to fit Ouarzazate between Marrakech and the Sahara.",
    excerpt: "A practical family guide to Ouarzazate’s kasbah heritage, cinema attractions, Aït Benhaddou and the overnight stop between long drives.",
    image: moroccoPlaces.ouarzazateKasbah.src,
    imageAlt: moroccoPlaces.ouarzazateKasbah.alt,
    readingTime: "7 min read",
    table: {
      heading: "A family day sheet for Ouarzazate",
      caption: "The national tourism office suggests allowing three days in the wider region and lists Aït Benhaddou, Skoura and Dades among nearby excursions.",
      headers: ["Scene", "Best for", "Before you go"],
      rows: [
        ["Kasbah Taourirt", "A short introduction to the city’s earthen architecture", "Check current access, opening arrangements and whether a guide is available."],
        ["Film studio or Cinema Museum", "Children interested in sets, props and how films are made", "Confirm which site is open and whether studio access is affected by filming."],
        ["Aït Benhaddou", "An excursion to a UNESCO-listed ksar and surrounding landscape", "Plan the drive, walking route, heat and time for the return."],
      ],
    },
    localNote: "The official tourism office suggests three days in the Ouarzazate region and lists Aït Benhaddou at about 30 minutes away. These are broad destination estimates; check access, heat, road conditions and hotel-to-hotel timing for your itinerary.",
    photos: [moroccoPlaces.ouarzazateKasbah, moroccoPhotos.kasbah],
    faqs: [
      { question: "How many days should families spend in Ouarzazate?", answer: "The Moroccan National Tourism Office suggests three days for the wider Ouarzazate region. A one-night stop can break a longer journey, but it will leave less time for nearby kasbahs, studios and valley excursions." },
      { question: "Can children visit a film studio in Ouarzazate?", answer: "The tourism office describes public visits to the Atlas Studios, but access can depend on filming and local arrangements. Confirm opening, admission and the visit format directly before you promise children a studio tour." },
      { question: "How far is Aït Benhaddou from Ouarzazate?", answer: "Visit Morocco gives an approximate drive of about 30 minutes. Confirm the time from your actual hotel, the route and the amount of time you plan to spend walking around the ksar." },
      { question: "Is Ouarzazate too hot for children?", answer: "Summer can be very hot, according to the tourism office. Plan outdoor visits for cooler parts of the day, carry water and sun protection, and consider a shorter indoor or hotel break when conditions are uncomfortable." },
      { question: "Does the family need to stop overnight in Ouarzazate?", answer: "An overnight can make sense between the Atlas crossing, kasbah country and the desert. Decide based on the full driving sequence rather than treating the city as an automatic short stop." },
    ],
    sections: [
      {
        heading: "Open with the reason you stopped",
        paragraphs: [
          "Ouarzazate sits within a broader southern route of kasbahs, valleys and desert landscapes. Families often arrive after a mountain crossing or continue from the city toward the Sahara, so the first question is whether this is a practical sleep stop or a place you want time to explore. The answer changes how many nights you should reserve.",
          "The national tourism office suggests a three-day stay for the region, not a requirement for every trip. If your schedule only allows one night, choose one main visit and protect the next day’s departure time. A clear plan is more satisfying than collecting distant stops without time to look around.",
        ],
      },
      {
        heading: "Chapter one: read the city through its kasbah",
        paragraphs: [
          "Kasbah Taourirt is a strong starting point for noticing the architecture and local history of Ouarzazate. The tourism office names it among the area’s sights. Check current opening and access information, and ask whether a local guide is available to explain what the family is seeing.",
          "For children, focus on the visible patterns, earthen colors, doorways and defensive shape rather than expecting them to remember a long historical timeline. Keep the visit at a pace that allows for water and shade breaks. Do not assume that every room, staircase or roof area is open to visitors.",
        ],
      },
      {
        heading: "Chapter two: let the film sets answer a real question",
        paragraphs: [
          "Ouarzazate is associated with film production, and the national tourism office describes the Atlas and CLA studios as places to see movie sets. A studio visit can interest children who want to know how a scene is built, but the experience depends on what is accessible that day and whether filming affects visitor routes.",
          "Before travelling to a studio, confirm the current visit format, age suitability, duration, ticket arrangements and transport. If admission is not available, the city’s cinema museum may be another option to investigate. Treat both as date-specific rather than assuming a film set is always open.",
        ],
      },
      {
        heading: "Chapter three: give Aït Benhaddou its own excursion",
        paragraphs: [
          "Visit Morocco gives a broad estimate of about 30 minutes between Ouarzazate and Aït Benhaddou. The ksar is a UNESCO-listed site, and the visit involves walking through a historic settlement and its surrounding landscape. It should have its own time in the day instead of being reduced to a rushed roadside photograph.",
          "Check how far your vehicle can go, where the family will meet the driver and what walking route is suitable for your group. Wear shoes for uneven surfaces and take water. If a child is tired or the weather is harsh, shorten the visit and ask the guide for a realistic return plan.",
        ],
      },
      {
        heading: "Chapter four: decide whether to add Skoura or Dades",
        paragraphs: [
          "The official visitor page lists Skoura at about 45 minutes and the Dades Valley at about two hours from Ouarzazate, while also recommending the region’s valley and kasbah sights. These excursions are not interchangeable add-ons: each extra drive changes the day and may require another overnight.",
          "Choose one direction for a family day and ask for a door-to-door estimate with lunch and rest breaks. If the family is travelling onward to Merzouga, avoid loading a long excursion onto the same day as the next major transfer. A night in the right place can protect the children’s energy and leave more time at each stop.",
        ],
      },
      {
        heading: "Chapter five: make the season part of the schedule",
        paragraphs: [
          "The national tourism office names March to May and September to November as favorable times for the wider region, and notes that summer is very hot. Use the forecast to choose the duration and timing of outdoor visits. Start earlier when appropriate, build in a cool break and carry water and sun protection.",
          "Winter days can be mild while evenings are cool, so pack a layer for dinner and overnight stays. The conditions can vary between the city, a mountain pass and the desert camp. Ask the operator where you will sleep and whether heating or other family comfort details are confirmed.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Moroccan National Tourism Office: Ouarzazate sights and excursions", href: "https://www.visitmorocco.com/en/travel/ouarzazate-zagora-tinghir-hollywood-africa" },
      { label: "Moroccan National Tourism Office: studios and Moroccan cinema", href: "https://www.visitmorocco.com/en/discover-morocco/land-culture-and-movies" },
      { label: "UNESCO World Heritage Centre: Aït Benhaddou", href: "https://whc.unesco.org/en/list/444/" },
      { label: "Morocco Travel Experts: family desert routes", href: "https://moroccotravelexperts.com/family-tours-morocco/" },
    ],
  },
  {
    slug: "morocco-by-coach-with-kids",
    category: "transport",
    topic: "Family transport",
    layout: "coach-boarding-plan",
    contextLinks: [
      { sectionIndex: 0, before: "Compare a coach leg with our ", href: "/blog/morocco-by-train-with-kids/", linkText: "family train guide", after: " and ask whether a station transfer changes the convenience." },
      { sectionIndex: 5, before: "For a route with multiple city connections, compare the stops in our ", href: "/morocco-family-itineraries/", linkText: "family itinerary guide", after: " before you buy separate tickets." },
    ],
    tours: [],
    related: ["morocco-by-train-with-kids", "morocco-family-road-trip-stops", "how-many-days-in-morocco-with-kids"],
    title: "Morocco by Coach with Kids: CTM Tickets and Bags",
    description: "Check CTM child ticket and luggage rules, then plan boarding and transfers for a Morocco coach trip with children.",
    excerpt: "A practical family checklist for comparing coach routes, children’s seats, luggage and connections before booking.",
    image: moroccoPhotos.roadTrip.src,
    imageAlt: moroccoPhotos.roadTrip.alt,
    readingTime: "7 min read",
    table: {
      heading: "The family coach booking check",
      caption: "The details below summarize CTM’s currently published policy as reviewed for this guide. Confirm the live terms with the carrier before purchase; other coach companies may differ.",
      headers: ["Check", "CTM information currently posted", "Family action"],
      rows: [
        ["Child seat", "Under-4s travel on an accompanying adult’s lap, one child per adult; age 4 and up requires a full-fare seat.", "Decide whether the published arrangement suits your child and compare with other transport."],
        ["Cabin bag", "The CTM FAQ currently lists a hand-baggage maximum of 40 × 50 × 16 cm.", "Measure the small bag and keep medicines or essentials with an adult."],
        ["Hold luggage", "The FAQ lists two hold bags, each up to 20 kg and a 170 cm combined dimension limit.", "Check the current fee, size rules and whether your family’s bags fit."],
        ["Ticket changes", "CTM says ticket changes may be possible up to 12 hours before departure under its conditions.", "Read the current change and refund conditions before paying."],
      ],
    },
    localNote: "CTM’s FAQ and terms are the source for the child seating and luggage details in this article. Policies, fees, schedules and station procedures can change; read the carrier’s current information before buying and apply the rules only to the operator you are booking.",
    photos: [moroccoPhotos.roadTrip, moroccoPhotos.guideGuests],
    faqs: [
      { question: "Can a child under four travel free on CTM?", answer: "CTM’s current FAQ says a child under four does not need a ticket and must travel on an accompanying adult’s lap, with one child per adult. Check the live policy and decide whether that arrangement works for your family before booking." },
      { question: "Does a four-year-old need a coach seat?", answer: "CTM states that from age four a child occupies a seat and pays the full fare. Recheck the carrier’s current conditions before buying, as this is a CTM rule and should not be assumed for every operator." },
      { question: "How much luggage can we take on CTM?", answer: "Its FAQ currently lists two hold bags per passenger, each up to 20 kilograms with combined dimensions up to 170 centimetres, plus a specified hand-baggage size. Check the latest rules and any fees for your route." },
      { question: "Can we use a digital CTM ticket?", answer: "CTM’s FAQ says an e-ticket does not need to be printed. Keep the booking accessible on a charged phone and carry the booking details or a saved copy as a backup." },
      { question: "Should we take a coach between every city?", answer: "Not automatically. Compare departure points, station transfers, journey time, luggage needs and whether the coach schedule fits your family. A rail journey or private vehicle may be more suitable for some parts of a route." },
    ],
    sections: [
      {
        heading: "First decision: does a coach fit this leg?",
        paragraphs: [
          "A coach can be useful between cities when its departure point, timetable and arrival station line up with the family’s plans. Begin with the exact places you need to travel between, then check the route, stops and times on the operator’s official booking page. A route that looks direct on a map may still involve a station transfer or a departure time that does not suit children.",
          "Compare coach, rail and private transport for the specific leg rather than choosing one mode for the whole holiday. Include the cost and effort of reaching the station, waiting before boarding, storing luggage and getting from the arrival station to your accommodation. The cheapest ticket is not always the simplest family journey.",
        ],
      },
      {
        heading: "Ticket card: check the child seating rule",
        paragraphs: [
          "CTM’s published terms say a child under four rides on an accompanying adult’s lap, with one child per adult, and that children aged four and over pay the full fare for a seat. This is important for family planning and should be read directly on CTM’s own site before purchase. It is not a universal Moroccan coach rule.",
          "If an infant or young child needs a separate seat for comfort or for your family’s own safety plan, do not assume it will be available under the same ticket terms. Compare another operator or mode of transport and ask the carrier to confirm the arrangement before you buy. Keep the child’s age and ticket status easy to check at boarding.",
        ],
      },
      {
        heading: "Bag card: pack to the posted limits",
        paragraphs: [
          "CTM’s FAQ currently lists a maximum hand bag size of 40 by 50 by 16 centimetres and two hold bags per passenger, each up to 20 kilograms, with a combined dimension limit. The page also lists a baggage charge from a starting amount. Those figures can change, so verify the current route-specific price and size rules before packing.",
          "Keep medicines, documents, snacks, a light layer and an activity in a bag that stays with an adult. Avoid putting all the children’s essentials in the hold. Label each larger bag and check where it will be loaded or collected at the specific station; the process may be different from your home country.",
        ],
      },
      {
        heading: "At the station: arrive ready for a busy boarding point",
        paragraphs: [
          "Use the carrier’s current ticket instructions to decide when the family should reach the station. Locate the correct departure point in advance and leave time for finding the platform or counter, using the restroom and loading luggage. Keep the reservation and passenger names available without relying on a single phone that may run out of battery.",
          "CTM says its e-ticket does not need to be printed, but it is sensible to save the ticket offline and keep a backup of the booking reference. Tell children what happens next: where the bags go, who holds the tickets and where the family will sit. Clear roles can make a crowded station less stressful.",
        ],
      },
      {
        heading: "On board: plan for the length of the ride",
        paragraphs: [
          "Bring water, familiar snacks, wipes and a quiet activity, while checking the carrier’s rules for food and luggage. Ask children to use the restroom before boarding when appropriate and keep essential items within reach. If the operator assigns seats, confirm that the booking keeps the family together rather than assuming adjacent seats will be arranged later.",
          "Use the seatbelt when available and follow the driver’s instructions. Explain to younger children that they should remain seated while the coach is moving. For motion-sensitive travelers, pack what the family usually uses and ask a clinician for any medical guidance before the trip.",
        ],
      },
      {
        heading: "Connections: leave a buffer after the arrival",
        paragraphs: [
          "Do not schedule a close connection based only on the published arrival time. A delay, luggage collection or the distance between stations can disrupt the next leg. If you must connect, leave a realistic buffer and verify the transfer point before booking both tickets.",
          "Check where the coach arrives and how the family will reach the hotel. If the station is unfamiliar, arrange a licensed taxi or a pickup through your accommodation, and agree on the destination before leaving. A late arrival may make it more comfortable to book the first night near the station or keep the next morning free.",
        ],
      },
    ],
    sourceLinks: [
      { label: "CTM official FAQ: child tickets, baggage and e-tickets", href: "https://ctm.ma/aide-et-faq-ctm/" },
      { label: "CTM official sales conditions", href: "https://ctm.ma/cgv/" },
      { label: "Supratours official timetable search", href: "https://www.supratours.ma/recherche-horaires" },
      { label: "Moroccan National Tourism Office: getting around Morocco", href: "https://www.visitmorocco.com/en/travel-info/getting-around-morocco" },
    ],
  },
];

export const articles: Article[] = [...planningArticles, ...baseArticles, ...locationArticles];

export const articleBySlug = Object.fromEntries(articles.map((article) => [article.slug, article])) as Record<string, Article>;
