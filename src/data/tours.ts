import { moroccoPlaces } from "./places";
import type { JourneySlug } from "./journeys";

export type TourDay = {
  day: number;
  title: string;
  details: string;
  drive?: string;
};

export type TourSummary = {
  slug: JourneySlug;
  title: string;
  cardTitle: string;
  duration: string;
  route: string;
  start: string;
  description: string;
  image: string;
  imageAlt: string;
  category: "Family Desert Tours" | "Family City & Desert Tours" | "Family Grand Tours";
};

export type Tour = TourSummary & {
  finish: string;
  comparison: string;
  fit: string;
  format: string;
  days: TourDay[];
  included: string[];
  notIncluded: string[];
  stays: string[];
  driving: string[];
  faqs: { question: string; answer: string }[];
  sourceLabel: string;
  sourceUrl: string;
  itineraryNote: string;
};

export const tours: Tour[] = [
  {
    slug: "7-day-morocco-family-tour",
    title: "7-Day Morocco Family Tour from Marrakech",
    cardTitle: "7-Day Sahara & Fes Family Tour",
    duration: "7 days · 6 nights",
    route: "Marrakech → Dades Valley → Merzouga → Fes → Chefchaouen → Casablanca → Marrakech",
    start: "Marrakech",
    finish: "Marrakech",
    comparison: "A night at the dunes and one full day in Fes. Merzouga to Fes takes about 7–8 hours before extra stops.",
    description: "Loop from Marrakech to a Sahara camp, Fes and Chefchaouen in seven days. Check the full Merzouga to Fes drive before choosing this route.",
    image: moroccoPlaces.merzougaDunes.src,
    imageAlt: moroccoPlaces.merzougaDunes.alt,
    category: "Family City & Desert Tours",
    fit: "Three transfer days come before the first full day in Fes. If your children can handle that pace, this loop fits the dunes and the blue city into one week. To shorten the road days, ask about leaving out the north or adding a night between Merzouga and Fes.",
    format: "The published seven day listing uses a group tour label. Ask whether your quote is for a private vehicle or a shared departure.",
    days: [
      { day: 1, title: "Marrakech to Boumalne Dades", details: "Cross the High Atlas, stop at Aït Benhaddou and Ouarzazate, then continue through the Valley of Roses to the Dades area.", drive: "A full mountain-road day. Keep sightseeing stops selective and ask for the expected door-to-door time." },
      { day: 2, title: "Dades Valley to Merzouga", details: "Visit Todra Gorge before continuing east to Merzouga. The listed route includes a camel trek to a desert camp.", drive: "A long transfer with stops. Confirm when the camel ride begins and how luggage reaches camp." },
      { day: 3, title: "Merzouga to Fes", details: "Travel north through the Ziz Valley, cedar forests and Ifrane before reaching Fes.", drive: "The operator’s family planning guide estimates Merzouga to Fes at about 460 km and 7–8 hours before family breaks." },
      { day: 4, title: "Explore Fes", details: "Take a short guided medina walk. Pick a pottery or tilework stop with the children and leave the afternoon free after the previous day’s drive." },
      { day: 5, title: "Fes to Chefchaouen", details: "Travel via Meknes and Volubilis, with time for selected historic stops before an evening in Chefchaouen." },
      { day: 6, title: "Chefchaouen to Casablanca", details: "Continue through Rabat and visit agreed highlights before arriving in Casablanca." },
      { day: 7, title: "Casablanca to Marrakech", details: "Return to Marrakech to finish the loop. Keep the final day simple if you have an onward flight." },
    ],
    included: [
      "The public seven-day listing describes six nights in selected hotels or riads.",
      "Private air-conditioned vehicle and an English-, French- or Spanish-speaking driver are listed.",
      "Local guides in Fes and Aït Benhaddou are listed.",
      "The listing describes six breakfasts and two dinners.",
    ],
    notIncluded: [
      "The public listing excludes lunches, drinks, personal expenses, travel insurance and tips unless a written quote says otherwise.",
      "Monument entrance fees and optional activities may be extra.",
      "International flights are not included in a land itinerary unless stated.",
    ],
    stays: [
      "Morocco Travel Experts names La Sultana Marrakech and La Mamounia in its Marrakech partner list.",
      "Riad Fès is listed as a Fes partner; Merzouga Luxury Desert Camp is listed for the Sahara.",
      "These are operator-listed examples, not guaranteed bookings. Confirm the actual property, room layout and availability in your quote.",
    ],
    driving: [
      "Marrakech to Aït Benhaddou: about 185 km / 3.5 hours in the operator’s family planning guide.",
      "Aït Benhaddou to Merzouga: about 360 km / 6 hours, depending on route and stops.",
      "Merzouga to Fes: about 460 km / 7–8 hours; this is the longest listed leg and should be discussed carefully with children.",
      "All published estimates are planning guidance. Confirm exact hotel-to-hotel times and break plans for your dates.",
    ],
    faqs: [
      { question: "Is this seven-day route private?", answer: "The operator’s family-tour page describes private trips, but its separate seven-day listing uses a group-tour format. Ask for written confirmation that your dates and vehicle are private before booking." },
      { question: "Is the seven-day itinerary relaxed?", answer: "It is a fast route with several long drives. If your family wants more rest, ask about adding nights or removing the northern cities." },
      { question: "Can a child seat be arranged?", answer: "The operator says child seats can be requested on family routes. Confirm the seat type, quantity and fit for each child’s age, height and weight." },
      { question: "Are the hotel names fixed?", answer: "No hotel names are guaranteed on this page. The operator lists example partners, but your quote should identify the actual properties and room arrangement." },
    ],
    sourceLabel: "Morocco Travel Experts’ seven-day itinerary",
    sourceUrl: "https://moroccotravelexperts.com/morocco-tour/7-days-morocco-tours-from-marrakech/",
    itineraryNote: "Route outline follows the operator’s published seven-day itinerary. Family pacing, group format, exact daily hours, hotel names and inclusions must be reconfirmed for the trip you book.",
  },
  {
    slug: "10-day-morocco-family-tour",
    title: "10-Day Morocco Family Tour: Marrakech to Chefchaouen",
    cardTitle: "10-Day Marrakech to Chefchaouen Family Tour",
    duration: "10 days · suggested route",
    route: "Marrakech → Aït Benhaddou → Dades Valley → Merzouga → Fes → Chefchaouen",
    start: "Marrakech",
    finish: "Chefchaouen area",
    comparison: "Full days in Merzouga and Fes. Allow 7–8 hours between them before extra stops and plan the final airport transfer.",
    description: "Start in Marrakech, cross the Atlas in stages and spend a full day near the Merzouga dunes before Fes and Chefchaouen. See the suggested 10-day route.",
    image: moroccoPlaces.aitBenhaddou.src,
    imageAlt: moroccoPlaces.aitBenhaddou.alt,
    category: "Family City & Desert Tours",
    fit: "School-age children get a day in the dunes and a day in Fes between transfers. With toddlers, consider dropping Chefchaouen and using that night to break up the drive from Merzouga to Fes.",
    format: "This is a proposed route based on the operator’s ten day family trip. Ask for the final overnight sequence, departure transfer and inclusions in your quote.",
    days: [
      { day: 1, title: "Arrive in Marrakech", details: "Transfer to your accommodation, settle in and keep the first evening open." },
      { day: 2, title: "Marrakech at family pace", details: "Pick a short medina walk or a morning in a garden. Keep the afternoon free for the riad or book a craft activity if the children are keen." },
      { day: 3, title: "Marrakech to Aït Benhaddou", details: "Cross the High Atlas and visit Aït Benhaddou before an overnight in the kasbah region.", drive: "The operator’s guide estimates about 185 km and 3.5 hours to Aït Benhaddou, before stops." },
      { day: 4, title: "Kasbah country to the Dades Valley", details: "Continue through Ouarzazate and the Valley of Roses, with time for a short stop rather than a full list of visits." },
      { day: 5, title: "Dades Valley to Merzouga", details: "Travel through the Todra area toward the dunes. Ask the operator to confirm the route, stops and expected arrival time.", drive: "A long transfer day. The family planning guide estimates about 360 km and 6 hours from Aït Benhaddou to Merzouga via the Dades or Todra route." },
      { day: 6, title: "A Sahara morning and evening", details: "Enjoy a slower day around the dunes, with a camel ride or other activity only if it suits the family and is confirmed in the quote." },
      { day: 7, title: "Merzouga to Fes", details: "Head north through the Ziz Valley and Middle Atlas. Keep the evening free after arrival.", drive: "The operator’s guide estimates 460 km and 7–8 hours before child-friendly breaks. Ask about an intermediate overnight if that is too long." },
      { day: 8, title: "Explore Fes", details: "Take a guided medina walk and choose one or two craft or heritage stops." },
      { day: 9, title: "Fes to Chefchaouen", details: "Travel through the Rif region and arrive with time for a gentle walk through the blue medina.", drive: "The operator’s guide estimates about 210 km and 4 hours, before breaks." },
      { day: 10, title: "Depart from the north", details: "Depart from a city that fits the confirmed flight plan, or ask the operator to adjust the route to return to Marrakech." },
    ],
    included: [
      "The operator’s public ten-day family-tour summary identifies a private, flexible journey and lists English, French or Spanish guide languages.",
      "The public summary does not provide a complete service-by-service inclusion list for this exact route.",
      "Request written confirmation of vehicle, driver, guide days, accommodation, room types, meals, child seats and any included activities.",
    ],
    notIncluded: [
      "International flights are not described as included in the public summary.",
      "Ask whether lunches, drinks, entry tickets, tips, insurance and optional activities are excluded or included in your proposal.",
      "Do not rely on a third-party package’s terms unless they are repeated in the direct booking documents.",
    ],
    stays: [
      "MTE’s partner page lists La Sultana Marrakech, Riad Fès, Dar Ahlam in Skoura and Merzouga Luxury Desert Camp.",
      "These named properties are examples of the operator’s listed partners, not guaranteed inclusions or family-room commitments.",
      "Ask for the exact hotel names, room setup, bathroom arrangements and camp access in the written quote.",
    ],
    driving: [
      "The operator’s guide estimates Marrakech to Aït Benhaddou at about 185 km / 3.5 hours.",
      "Aït Benhaddou to Merzouga is estimated at about 360 km / 6 hours via the Dades or Todra route.",
      "Merzouga to Fes is estimated at about 460 km / 7–8 hours; consider an overnight stop if your children need a shorter day.",
      "These are operator-published planning estimates, not live traffic times. Confirm the exact route and planned breaks.",
    ],
    faqs: [
      { question: "Is this an exact published itinerary?", answer: "No. It is a family planning outline. The operator lists a ten-day family tour from Casablanca to the Sahara, but the public summary does not show a full day-by-day schedule. Ask for the current route before booking." },
      { question: "Can we skip Chefchaouen?", answer: "Yes, ask the operator to tailor the route around your flights. Removing the far north can create more time for Marrakech, the Atlas or the Sahara." },
      { question: "What is included?", answer: "The public ten-day family summary does not show every inclusion. Your written proposal should name the vehicle, hotels, room arrangement, meals, guide days, activities and exclusions." },
      { question: "Is the Merzouga to Fes drive suitable for toddlers?", answer: "It is a long drive. The operator’s family guide estimates 7–8 hours before breaks. Ask for an intermediate overnight or choose a shorter route if that is not right for your child." },
    ],
    sourceLabel: "Family tour overview and route-planning guide",
    sourceUrl: "https://moroccotravelexperts.com/family-tours-morocco/",
    itineraryNote: "Planning example based on the operator’s published family-tour overview and driving guide. The operator’s current ten-day product summary does not publish this exact day order or a full inclusion list.",
  },
  {
    slug: "14-day-morocco-family-tour",
    title: "14-Day Morocco Family Tour from Casablanca",
    cardTitle: "14-Day Casablanca & Sahara Family Tour",
    duration: "14 days · 13 nights",
    route: "Casablanca → Rabat → Tangier → Chefchaouen → Fes → Midelt → Merzouga → Dades → Ouarzazate → Marrakech → Casablanca",
    start: "Casablanca",
    finish: "Casablanca",
    comparison: "Two nights in Chefchaouen and a Midelt overnight to split Fes to Merzouga. Allow for the final drive back to Casablanca.",
    description: "Take a two week Casablanca loop via Chefchaouen, Fes, Merzouga and Marrakech. A night in Midelt breaks the drive from Fes to the Sahara.",
    image: moroccoPlaces.casablancaMosque.src,
    imageAlt: moroccoPlaces.casablancaMosque.alt,
    category: "Family Grand Tours",
    fit: "Choose this route for the northern towns and the Sahara in one trip. Two nights in Chefchaouen give you a full day out of the car, and the night in Midelt breaks the journey from Fes to Merzouga.",
    format: "The operator’s fourteen-day tour page describes a private, guided itinerary. Confirm the family-specific room setup, child seats, meals and activity options for your dates.",
    days: [
      { day: 1, title: "Arrive in Casablanca", details: "Arrive, transfer to your hotel and visit Hassan II Mosque or the Corniche if the timing works." },
      { day: 2, title: "Casablanca to Rabat and Tangier", details: "Visit selected Rabat landmarks before continuing to Tangier." },
      { day: 3, title: "Tangier", details: "Choose between a Kasbah and museum morning or a trip to the Hercules Caves. Leave time for lunch and a break before adding another stop." },
      { day: 4, title: "Tangier to Chefchaouen", details: "Cross the Rif Mountains and settle into the blue medina." },
      { day: 5, title: "Chefchaouen", details: "Choose a gentle medina walk, Ras El Maa or the Spanish Mosque viewpoint, depending on the children’s energy." },
      { day: 6, title: "Chefchaouen to Fes", details: "Stop at Volubilis and continue to Fes. Confirm the time available for each visit." },
      { day: 7, title: "Explore Fes", details: "Take a guided medina walk through selected landmarks and craft areas." },
      { day: 8, title: "Fes to Midelt via Ifrane", details: "Cross the Middle Atlas, pass Ifrane and stop near the cedar forest before reaching Midelt." },
      { day: 9, title: "Midelt to Merzouga", details: "Follow the Ziz Valley toward the Sahara and reach Merzouga. The operator’s listed route includes a camel ride to camp at sunset." },
      { day: 10, title: "Merzouga to Dades Valley", details: "See the dunes in the morning, visit Khamlia and Todra Gorge, then continue to the Dades area." },
      { day: 11, title: "Dades Valley to Ouarzazate", details: "Enjoy a shorter regional day with a gorge walk or village stop, then continue through the Valley of Roses." },
      { day: 12, title: "Ouarzazate to Marrakech", details: "Visit Aït Benhaddou and cross the High Atlas toward Marrakech." },
      { day: 13, title: "Marrakech", details: "Choose a family-paced city day with a palace, garden, market walk or workshop." },
      { day: 14, title: "Marrakech to Casablanca", details: "Return to Casablanca to finish the published loop. Confirm the timing against your international flight." },
    ],
    included: [
      "The operator lists 13 nights in hotels or riads and private air-conditioned transport.",
      "Daily breakfasts and dinners in Merzouga and Boumalne Dades are listed.",
      "The itinerary lists local guides in Fes, Marrakech and Volubilis. Ask for the vehicle size and child seats in your quote.",
    ],
    notIncluded: [
      "The published route excludes entrance fees, drinks, tips and personal travel insurance.",
      "Budget for flights, lunches, dinners outside the listed stops and any optional activities.",
      "Payment and cancellation terms must come from the booking contract for your specific trip.",
    ],
    stays: [
      "The route lists options including La Tangerina in Tangier, Riad Laaroussa in Fes and Le Berbère Palace in Ouarzazate.",
      "The actual accommodation may differ by availability, budget and family room needs. Confirm every property in the written proposal.",
    ],
    driving: [
      "The route crosses long distances between northern Morocco, the Sahara and Marrakech. Plan the named transfer days as travel days, not full sightseeing days.",
      "The overnight in Midelt divides the Fes to Merzouga drive. Dades is a separate stop after the desert, on the way toward Marrakech.",
      "Confirm all exact drive estimates, road stops and flight-day buffers with the operator for your dates.",
    ],
    faqs: [
      { question: "Does fourteen days make the tour slow-paced?", answer: "It allows more nights than a one-week loop, but the published route still has several transfer days. Ask which days are full drives and where an extra night could be added." },
      { question: "Can we remove a city or add the coast?", answer: "The operator describes the route as customizable. Ask for a revised day-by-day plan and a new quote before confirming changes." },
      { question: "Are these hotel examples included?", answer: "No. They are properties listed by the operator as partner examples. Your proposal should name the actual accommodation and room type for each night." },
      { question: "How should we plan the final Casablanca transfer?", answer: "Keep a substantial buffer before an international flight. Confirm whether the operator recommends an extra Casablanca night based on your departure time." },
    ],
    sourceLabel: "Fourteen-day Morocco tour listing",
    sourceUrl: "https://moroccotravelexperts.com/morocco-tour/14-day-morocco-tour-imperial-cities-blue-pearl-atlas-mountains-sahara-and-souks/",
    itineraryNote: "Route outline follows the operator’s public fourteen-day itinerary. Exact hotels, meals, tickets, child seats and payment terms must be confirmed in the direct proposal.",
  },
  {
    slug: "family-sahara-adventure",
    title: "4-Day Sahara Family Tour from Marrakech",
    cardTitle: "4-Day Sahara Family Tour",
    duration: "4 days · 3 nights",
    route: "Marrakech → Aït Benhaddou → Skoura → Merzouga → Marrakech",
    start: "Marrakech",
    finish: "Marrakech",
    comparison: "One full day around Merzouga and a night at camp. Day four is the long return across the Atlas.",
    description: "A four-day Marrakech loop with an overnight in Skoura, a desert camp near Merzouga and time in the dunes. Allow a full day for the return drive.",
    image: moroccoPlaces.merzougaDunes.src,
    imageAlt: moroccoPlaces.merzougaDunes.alt,
    category: "Family Desert Tours",
    fit: "Good for families whose main priority is a night in the dunes and whose children manage full days in the car. Ask how you’ll get to camp and whether you can add a night to split the drive back.",
    format: "The published four day itinerary carries a group tour label. Ask for the vehicle and departure format in your quote, and check how your family will reach the camp.",
    days: [
      { day: 1, title: "Marrakech to Aït Benhaddou and Skoura", details: "Travel through the High Atlas and Tizi n’Tichka Pass, visit Aït Benhaddou and continue through Ouarzazate to Skoura." },
      { day: 2, title: "Skoura to Merzouga via Todra Gorge", details: "Pass through the Valley of Roses and Dades Valley, visit Todra Gorge and continue to Merzouga for a listed sunset camel ride." },
      { day: 3, title: "A day in the Merzouga area", details: "Watch sunrise if the children are up, then return from the dunes by camel or 4x4. The route lists Khamlia, an oasis and sandboarding. Ask about age limits and which 4x4 outings cost extra." },
      { day: 4, title: "Merzouga to Marrakech", details: "Return through the Valley of Roses and Ouarzazate, crossing the High Atlas back to Marrakech." },
    ],
    included: [
      "The public four-day listing includes three nights’ accommodation.",
      "Three breakfasts and three dinners are listed, along with an English-speaking driver-guide.",
      "Sunset and sunrise camel rides, sandboarding, selected entrance fees and Marrakech pickup are listed.",
      "The listing says child seats can be requested; confirm fit and availability for each child.",
    ],
    notIncluded: [
      "The listing excludes personal expenses, drinks, travel insurance, tips and meals not specified as included.",
      "A Merzouga 4x4 outing is described as optional and may cost extra.",
      "Confirm entrance fees and included activities in the current direct quote; public listings can change.",
    ],
    stays: [
      "The listing gives Nomad Palace Hotel as one Merzouga option. Ask which night is at camp and which is at a hotel.",
      "Ask for the property names, private bathroom arrangement, family bedding and whether the camp is reached by camel or vehicle.",
    ],
    driving: [
      "This four-day itinerary has a long outbound leg to Merzouga and a long return to Marrakech. The operator’s guide estimates Marrakech to Aït Benhaddou at about 185 km / 3.5 hours and Aït Benhaddou to Merzouga at about 360 km / 6 hours, before family stops.",
      "Ask the operator for exact door-to-door estimates for the published Skoura route and return drive; public summaries do not show a verified return-hour figure.",
      "If these days are too long, request a longer Sahara tour with another overnight stop.",
    ],
    faqs: [
      { question: "Is the four-day tour private?", answer: "The operator’s route has a group tour label. Ask whether the vehicle and each transfer would be private for your date." },
      { question: "Is four days enough for the Sahara with toddlers?", answer: "It is possible to visit, but the drives are long. Ask about adding nights or choosing a closer destination if your toddler does not tolerate long transfers." },
      { question: "Are all desert activities included?", answer: "The listing includes camel rides and sandboarding, while a 4x4 outing is optional. Confirm exact inclusions and age requirements in your proposal." },
      { question: "What accommodation is used?", answer: "The operator lists sample properties. Request the exact hotel and camp names, bed setup and private bathroom arrangements before booking." },
    ],
    sourceLabel: "Four-day family Sahara tour listing",
    sourceUrl: "https://moroccotravelexperts.com/morocco-tour/family-sahara-adventure-4-day-desert-experience-from-marrakech/",
    itineraryNote: "Day order and listed activities follow the operator’s published four-day Sahara product. Public listing format and inclusions can change; confirm the current direct offer before booking.",
  },
];

export const tourBySlug = Object.fromEntries(tours.map((tour) => [tour.slug, tour])) as Record<string, Tour>;

export const destinationCards = [
  { title: "Marrakech", description: "Plan three days around a medina walk, a garden and an optional Atlas outing.", image: moroccoPlaces.marrakechKoutoubia.src, imageAlt: moroccoPlaces.marrakechKoutoubia.alt, href: "/blog/marrakech-with-kids/" },
  { title: "Fes", description: "Take a short guided medina walk and leave time for a pottery or tilework stop.", image: moroccoPlaces.fesMedina.src, imageAlt: moroccoPlaces.fesMedina.alt, href: "/blog/fes-with-kids/" },
  { title: "Chefchaouen", description: "Allow two nights to walk the blue lanes before your next long transfer.", image: moroccoPlaces.chefchaouenBlueCity.src, imageAlt: moroccoPlaces.chefchaouenBlueCity.alt, href: "/blog/chefchaouen-with-kids/" },
  { title: "Sahara", description: "A dune stay with camel rides or sandboarding when the route and season fit.", image: moroccoPlaces.merzougaDunes.src, imageAlt: moroccoPlaces.merzougaDunes.alt, href: "/morocco-family-desert-tours/" },
  { title: "Atlas Mountains", description: "Village walks and mountain scenery beyond the busiest city streets.", image: moroccoPlaces.highAtlas.src, imageAlt: moroccoPlaces.highAtlas.alt, href: "/blog/atlas-mountains-with-kids/" },
  { title: "Essaouira", description: "A breezier Atlantic stop with ramparts, harbor views and open beach space.", image: moroccoPlaces.essaouiraCitadel.src, imageAlt: moroccoPlaces.essaouiraCitadel.alt, href: "/blog/essaouira-with-kids/" },
];

export const ageGroups = [
  { title: "Toddlers", label: "0–4 years", description: "Shorter outings, confirmed car seats, nap breaks and fewer overnight changes.", href: "/morocco-with-toddlers/" },
  { title: "School-age kids", label: "5–12 years", description: "Hands-on crafts, manageable medina walks and one memorable outdoor experience at a time.", href: "/morocco-with-kids/" },
  { title: "Teenagers", label: "13+ years", description: "More active choices, independent interests and time to explore culture beyond the highlights.", href: "/morocco-with-teenagers/" },
];
