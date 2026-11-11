import { moroccoPlaces } from "./places";

export type PageSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
  links?: { label: string; href: string }[];
};

export type EditorialPageData = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: PageSection[];
};

export const unpublishedEditorialSlugs = new Set(["privacy-policy", "terms-and-conditions", "cancellation-policy"]);

export const editorialPages: EditorialPageData[] = [
  {
    slug: "morocco-family-holidays",
    title: "Morocco Family Holidays from the UK",
    description: "Plan a Morocco family holiday from the UK around half term or summer. Compare a Marrakech city break, a week on the coast and a longer Sahara route.",
    eyebrow: "UK school holidays",
    intro: "For half term, start with Marrakech and one nearby outing. With a full week, you can add two nights by the sea. Save the longer Sahara circuit for a break with enough nights to split the drives.",
    image: moroccoPlaces.marrakechKoutoubia.src,
    imageAlt: moroccoPlaces.marrakechKoutoubia.alt,
    sections: [
      {
        heading: "Four or five nights at half term",
        paragraphs: [
          "Book one base in Marrakech and count the days you actually get between flights. With three full days, use one for a short medina and palace visit, one for an Atlas outing and one for a garden or a quiet afternoon. If your evening flight lands late, keep the next morning close to your accommodation.",
          "For young children, ask the riad how far the airport transfer can get from its door. A short walk on a map feels different with a sleeping child, bags and a buggy.",
        ],
        links: [
          { label: "Three days in Marrakech with kids", href: "/blog/marrakech-with-kids/" },
          { label: "Compare Atlas day trips from Marrakech", href: "/blog/atlas-mountains-with-kids/" },
        ],
      },
      {
        heading: "A week at Easter or in the summer holidays",
        paragraphs: [
          "A week gives you time for Marrakech and Essaouira without changing rooms most nights. Spend two nights on the coast if you want a full day by the harbour and ramparts. For a summer trip, book city walks early, ask about shade at your accommodation and check beach conditions each day.",
          "If the dunes are the main reason you are coming, compare the coast plan with the full Sahara driving schedule before booking flights. An overnight on the road is part of that choice.",
        ],
        links: [
          { label: "Seven days in Morocco with kids without the Sahara", href: "/blog/7-days-in-morocco-with-kids-without-sahara/" },
          { label: "Weather by season for a Morocco family trip", href: "/blog/best-season-for-a-morocco-family-trip/" },
        ],
      },
      {
        heading: "What to put in your holiday enquiry",
        paragraphs: [
          "Include your school holiday dates, the UK airport or airports you can use, the children’s ages and the number of rooms you need. If you have booked flights, send arrival and departure times so the planner can work back from check-in and pickup.",
          "For two quotes to be comparable, ask for the total for your party in a stated currency, named rooms and the same list of transfers and meals. Read the current UK travel advice before you book.",
        ],
        links: [
          { label: "Compare family holiday costs", href: "/blog/morocco-family-trip-budget/" },
          { label: "UK government travel advice for Morocco", href: "https://www.gov.uk/foreign-travel-advice/morocco" },
        ],
      },
    ],
  },
  {
    slug: "morocco-family-vacations",
    title: "Morocco Family Vacations from the US, Canada & Australia",
    description: "Plan a long haul Morocco family vacation around arrival airports, flight connections and recovery time. Compare round trips with flying home from a different city.",
    eyebrow: "Long haul family travel",
    intro: "Choose your flights and first night together. A late arrival in Casablanca and a morning arrival in Marrakech give you different options for day one, even with the same number of vacation days.",
    image: moroccoPlaces.casablancaMosque.src,
    imageAlt: moroccoPlaces.casablancaMosque.alt,
    sections: [
      {
        heading: "Book the first night where you land",
        paragraphs: [
          "If your family lands in Casablanca after a connection, an airport pickup and one night in the city can be simpler than moving on with luggage the same day. With a morning arrival, an onward transfer may work if you leave time for immigration, bags and a meal. Confirm how your driver handles a delayed flight and where to meet them.",
          "Ask the first hotel when your room is available. If you arrive well before check-in, arrange bag storage or an early room in advance, especially if a child needs somewhere to nap.",
        ],
        links: [
          { label: "A first stop in Casablanca with children", href: "/blog/casablanca-with-kids/" },
          { label: "Car seats for your airport pickup", href: "/blog/child-car-seats-in-morocco/" },
        ],
      },
      {
        heading: "Compare the cost of flying out from another city",
        paragraphs: [
          "Price the flights both ways before settling on a circuit. For a route that begins in Marrakech and finishes in Chefchaouen, compare a flight out of northern Morocco with the cost of a vehicle back to Marrakech and one more hotel night. Include baggage fees and connection times when you compare.",
          "If Casablanca is the only sensible airport for both flights, build the return into the itinerary. On the two week loop, check whether to make the last Casablanca transfer the day before your flight.",
        ],
        links: [
          { label: "Marrakech to Chefchaouen in ten days", href: "/tours/10-day-morocco-family-tour/" },
          { label: "Two week Casablanca round trip", href: "/tours/14-day-morocco-family-tour/" },
        ],
      },
      {
        heading: "Count the nights in Morocco",
        paragraphs: [
          "Put the local arrival and departure dates at the top of the plan. If flights take up two of your vacation days, count the nights left before deciding between a city and coast stay and a multi-day desert trip. Leave the morning after arrival and the day before flying home flexible.",
          "Ask for the in-country cost separately from your international flights. Get the quote currency, payment schedule and included room count in writing so you can compare it against your full vacation budget.",
        ],
        links: [
          { label: "Work out how many days you have in Morocco", href: "/blog/how-many-days-in-morocco-with-kids/" },
          { label: "Compare in-country costs and inclusions", href: "/blog/morocco-family-trip-budget/" },
        ],
      },
    ],
  },
  {
    slug: "morocco-with-kids",
    title: "Morocco with Kids: Plan Your First Family Trip",
    description: "Choose where to go in Morocco with kids. Compare Marrakech and the coast with a Sahara route, then plan car seats, family rooms and travel days.",
    eyebrow: "First family trip",
    intro: "For a first week with children, choose Marrakech and the coast if you want fewer hotel changes. If the dunes are the priority, give the Sahara several days and plan the overnight stops before you book flights.",
    image: moroccoPlaces.marrakechJemaa.src,
    imageAlt: moroccoPlaces.marrakechJemaa.alt,
    sections: [
      {
        heading: "Where to go on a first trip",
        paragraphs: [
          "In Marrakech, pair a medina morning with time back at the riad or a garden visit. Essaouira gives children room to walk along the waterfront, and two nights there leave one full day between transfers. If you prefer mountains to the coast, use Marrakech as a base for a shorter Atlas outing.",
          "Fes and Chefchaouen make sense on a northern route. Give Fes a morning for a guided medina walk and keep the evening of the long drive from Merzouga free. In Chefchaouen, check the hill and stairs between your hotel and the medina before choosing a room.",
        ],
        links: [
          { label: "Marrakech with kids", href: "/blog/marrakech-with-kids/" },
          { label: "Essaouira with kids", href: "/blog/essaouira-with-kids/" },
          { label: "Family itineraries for 7, 10 or 14 days", href: "/morocco-family-itineraries/" },
        ],
      },
      {
        heading: "What changes with children’s ages",
        paragraphs: [
          "A toddler’s day often depends on when you can get back to a cot. For younger children, ask for a room near the entrance and one activity before lunch. School age children can choose one craft or food stop during a medina visit. Let teenagers help choose a workshop, a mountain walk or time to browse with the guide.",
          "Treat an advertised age range as a starting point. For a specific activity, ask the provider about its rules, how long the group is out and what a child can do if they want to stop early.",
        ],
        links: [
          { label: "Morocco with toddlers", href: "/morocco-with-toddlers/" },
          { label: "Morocco with teenagers", href: "/morocco-with-teenagers/" },
        ],
      },
      {
        heading: "Before you reserve a driver or a room",
        paragraphs: [
          "Ask for hotel-to-hotel drive estimates and where you can stop for lunch and toilets. Confirm each car seat and which vehicles will be used, including the airport and camp transfers. Ask the hotel to confirm beds, cot space and how far your bags have to go from the drop-off.",
          "For the Sahara, check how you get from the last paved-road stop to your tent, which meals are included, and how the camp handles a late arrival. In the cities, check when your riad serves breakfast if you have an early drive.",
        ],
        links: [
          { label: "Booking car seats in Morocco", href: "/blog/child-car-seats-in-morocco/" },
          { label: "Family rooms in riads and hotels", href: "/blog/riad-or-hotel-morocco-with-kids/" },
          { label: "Desert camp checklist for families", href: "/blog/morocco-desert-camp-with-kids/" },
        ],
      },
      {
        heading: "Put the dates on the route",
        paragraphs: [
          "Mark arrival, departure and transfer days before you choose how many sights to see. Keep at least one afternoon free after the longest drive. When you ask for a quote, send the overnight sequence you want and the places you could drop if the drives are too long.",
        ],
        links: [
          { label: "When to visit Morocco with children", href: "/blog/best-season-for-a-morocco-family-trip/" },
          { label: "What to check before flying to Morocco", href: "/morocco-family-travel-tips/" },
        ],
      },
    ],
  },
  {
    slug: "morocco-family-itineraries",
    title: "Morocco Family Itineraries for 7, 10 or 14 Days",
    description: "Compare three Morocco family itineraries by overnight stops, arrival airport and driving days. See where to stay on a week, ten day or two week trip.",
    eyebrow: "Route planning",
    intro: "Pick an overnight sequence first. These three outlines show what a week on the coast, ten days through the Sahara or two weeks from Casablanca look like when arrival and departure are travel days.",
    image: moroccoPlaces.aitBenhaddou.src,
    imageAlt: moroccoPlaces.aitBenhaddou.alt,
    sections: [
      {
        heading: "7 days from Marrakech · 6 nights",
        paragraphs: [
          "Stay three nights in Marrakech, two in Essaouira and the last night back in Marrakech. Use day two for the medina and day three for a garden or an Atlas outing. Spend day four getting to the coast, take day five for the harbour and ramparts, and return on day six for the flight the next day.",
          "The seven day tour through Merzouga and Fes uses the same calendar differently. Several days are transfers, including the drive from the dunes to Fes. Decide which week you want before adding stops.",
        ],
        links: [
          { label: "Read the full week without the Sahara", href: "/blog/7-days-in-morocco-with-kids-without-sahara/" },
          { label: "See the seven day Sahara and Fes loop", href: "/tours/7-day-morocco-family-tour/" },
        ],
      },
      {
        heading: "10 days from Marrakech · 9 nights",
        paragraphs: [
          "Plan two nights in Marrakech, one near Aït Benhaddou, one in the Dades Valley, two in Merzouga, two in Fes and one in Chefchaouen. That gives you a full day in the dunes and a full day in Fes. Choose a northern departure airport and confirm the last transfer before booking the flight.",
          "The long leg is Merzouga to Fes. Morocco Travel Experts estimates seven to eight hours before extra breaks. To divide it, consider replacing the Chefchaouen night with a stop between the dunes and Fes.",
        ],
        links: [
          { label: "Day-by-day Marrakech to Chefchaouen route", href: "/tours/10-day-morocco-family-tour/" },
          { label: "Choose overnight stops on a Morocco road trip", href: "/blog/morocco-family-road-trip-stops/" },
        ],
      },
      {
        heading: "14 days from Casablanca · 13 nights",
        paragraphs: [
          "The Casablanca loop gives you two nights each in Tangier, Chefchaouen, Fes and Marrakech, with single nights in Casablanca, Midelt, Merzouga, Dades and Ouarzazate. Visit Rabat on the way to Tangier and use the night in Midelt to break up the route from Fes to the dunes.",
          "The published loop ends with a drive from Marrakech to Casablanca. If you have an early international flight, ask about moving the last night to Casablanca and which Marrakech plans would have to move.",
        ],
        links: [
          { label: "Day-by-day two week tour from Casablanca", href: "/tours/14-day-morocco-family-tour/" },
          { label: "Choose a stop between Casablanca and Rabat", href: "/blog/casablanca-to-rabat-with-kids/" },
        ],
      },
      {
        heading: "Check what the transfer days leave you",
        paragraphs: [
          "For each long leg, write down where you leave, where you sleep and the latest time you can check in. Add the breaks your family normally takes. If a planned visit needs a timed ticket, put it on a day with no hotel change when you can.",
        ],
        links: [
          { label: "Compare flight days and trip lengths", href: "/blog/how-many-days-in-morocco-with-kids/" },
          { label: "Morocco Travel Experts’ route and distance guide", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
        ],
      },
    ],
  },
  {
    slug: "morocco-family-desert-tours",
    title: "Morocco Family Desert Tours: Sahara Routes",
    description: "Compare family Sahara tours to Merzouga from Marrakech or Casablanca. Check nights in the dunes, the longest drives and how you reach camp with children.",
    eyebrow: "Sahara tours",
    intro: "Four days from Marrakech can get you to Merzouga and back, with a long return day. If you want the dunes and Fes, allow more time or ask for an overnight on the way north.",
    image: moroccoPlaces.merzougaDunes.src,
    imageAlt: moroccoPlaces.merzougaDunes.alt,
    sections: [
      {
        heading: "Which Sahara route fits your flights?",
        paragraphs: [
          "Choose the four day loop if your flights are in and out of Marrakech and the desert is your main destination. The ten day outline heads north after Merzouga, with a full day at the dunes. From Casablanca, the two week route crosses the Middle Atlas from Fes and breaks the journey with a night in Midelt.",
          "For a shorter outing close to Marrakech, compare Agafay with Merzouga. Agafay is rocky terrain. Choose Merzouga if the sand dunes are the part your children want to see.",
        ],
        links: [
          { label: "Four day Sahara family tour from Marrakech", href: "/tours/family-sahara-adventure/" },
          { label: "Ten day family tour through Merzouga and Fes", href: "/tours/10-day-morocco-family-tour/" },
          { label: "Agafay vs Merzouga with kids", href: "/blog/agafay-or-merzouga-with-kids/" },
        ],
      },
      {
        heading: "Where the long drives fall",
        paragraphs: [
          "Morocco Travel Experts estimates about three and a half hours from Marrakech to Aït Benhaddou and about six hours onward to Merzouga via the Dades or Todra route, before additional family breaks. On the four day itinerary, Skoura is the first overnight. Ask for the actual Skoura to Merzouga estimate and whether you can split the return drive.",
          "Set a realistic time for arriving at the dunes before reserving a sunset activity. Ask what happens if road delays mean you reach the camp after dark.",
        ],
        links: [
          { label: "Morocco Travel Experts’ driving estimates", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
          { label: "Skoura with kids", href: "/blog/skoura-with-kids/" },
          { label: "Aït Benhaddou with kids", href: "/blog/ait-benhaddou-with-kids/" },
        ],
      },
      {
        heading: "Ask about the tent and the last transfer",
        paragraphs: [
          "Request the camp name, bed layout, bathroom location and how you reach the tent. If anyone wants to skip the camel ride, arrange an alternative with the camp before you book. Confirm the vehicle and child seat separately from your main road transfer.",
          "Ask which activities and meals are in the quote, and how the camp adjusts the day in heat, wind or cold. Decide whether one night is enough or whether a second day would let you enjoy the dunes without another early start.",
        ],
        links: [
          { label: "Questions to ask a desert camp before you book", href: "/blog/morocco-desert-camp-with-kids/" },
          { label: "What to pack for the desert and cities", href: "/blog/packing-for-morocco-with-kids/" },
        ],
      },
    ],
  },
  {
    slug: "morocco-with-toddlers",
    title: "Morocco with Toddlers: Routes, Naps and Car Seats",
    description: "Plan Morocco with a toddler around short transfers, naps and family rooms. Start with Marrakech, consider two nights on the coast and arrange the right car seat.",
    eyebrow: "Travel with toddlers",
    intro: "Use Marrakech as one base and schedule outings around lunch and naps. If you want the coast, stay two nights in Essaouira so you get a full day there between drives.",
    image: moroccoPlaces.marrakechJemaa.src,
    imageAlt: moroccoPlaces.marrakechJemaa.alt,
    sections: [
      {
        heading: "Try one base before adding a second",
        paragraphs: [
          "With five nights, stay in the same Marrakech room and choose one outing per morning. Try a garden one day, a short medina walk on another and an Atlas outing only if the drive fits the nap schedule. Keep the afternoon open after any early start.",
          "With six nights and a suitable flight time, trade two Marrakech nights for Essaouira. Bring the last night back to Marrakech if your flight leaves early. Families wanting a desert outing can compare Agafay with the much longer drive to Merzouga.",
        ],
        links: [
          { label: "A week in Marrakech and Essaouira with kids", href: "/blog/7-days-in-morocco-with-kids-without-sahara/" },
          { label: "Agafay and Merzouga for younger children", href: "/blog/agafay-or-merzouga-with-kids/" },
        ],
      },
      {
        heading: "Check the first transfer and the last few streets",
        paragraphs: [
          "Send your child’s height and weight along with their age. Ask the driver to confirm the seat model and fit for the vehicle at pickup, and check each separate transfer. Ask the riad for the drop-off gate, how long the walk is and who can meet you if you land after dark.",
        ],
        links: [
          { label: "Car seat questions to send before booking", href: "/blog/child-car-seats-in-morocco/" },
          { label: "Taking a stroller into Marrakech’s medina", href: "/blog/marrakech-medina-with-a-stroller/" },
        ],
      },
      {
        heading: "Ask the hotel about the room you will actually use",
        paragraphs: [
          "Confirm cot space, access by stairs and whether there is a door between sleeping areas if you need one. If breakfast starts after your child usually eats, ask what you can arrange. For a riad with a pool or roof terrace, ask how the property manages access from your room.",
        ],
        links: [
          { label: "Riad or hotel when travelling with children?", href: "/blog/riad-or-hotel-morocco-with-kids/" },
          { label: "Morocco with a baby", href: "/blog/morocco-with-a-baby/" },
        ],
      },
    ],
  },
  {
    slug: "morocco-with-teenagers",
    title: "Morocco with Teenagers: Cities, Coast and Sahara",
    description: "Plan a Morocco trip with teenagers around a craft workshop, Atlas walk, coast day or Sahara stay. Compare what each choice adds to the driving schedule.",
    eyebrow: "Travel with teens",
    intro: "Ask each teenager to pick one thing they want to do. A craft workshop in Fes, a morning near the dunes or a coast day can set the route before you start counting cities.",
    image: moroccoPlaces.merzougaDunes.src,
    imageAlt: moroccoPlaces.merzougaDunes.alt,
    sections: [
      {
        heading: "Choose a city activity they can take part in",
        paragraphs: [
          "In Fes, ask a guide to build a medina morning around pottery or tilework. Find out whether a workshop allows visitors to try the craft or only watch. In Marrakech, choose a cooking class or an early evening at Jemaa el-Fnaa and agree on where to meet if someone steps away in the crowd.",
        ],
        links: [
          { label: "Fes medina and craft stops with kids", href: "/blog/fes-with-kids/" },
          { label: "When to take kids to Jemaa el-Fnaa", href: "/blog/jemaa-el-fnaa-with-kids/" },
        ],
      },
      {
        heading: "Give an outdoor day its own place in the itinerary",
        paragraphs: [
          "For an Atlas walk, ask the guide for the distance, terrain and turnaround point. For the coast, decide whether the day is for walking and food or for a booked water activity. Check local conditions and the provider’s age and experience requirements before arranging the latter.",
          "If the dunes win, consider two nights near Merzouga so there is a full day between arrival and departure. Ask which sandboarding or camel activities are available and leave time for the family to choose on the day where the provider allows it.",
        ],
        links: [
          { label: "Compare Atlas outings with children", href: "/blog/atlas-mountains-with-kids/" },
          { label: "Ten day route with a full day near the dunes", href: "/tours/10-day-morocco-family-tour/" },
        ],
      },
      {
        heading: "Hand over one planning decision",
        paragraphs: [
          "Give your teens the same map and overnight plan you use. Let them choose between two extra nights in a city and adding another stop. Show them the drive that comes with each choice and reserve a free afternoon for their pick.",
        ],
      },
    ],
  },
  {
    slug: "morocco-family-travel-tips",
    title: "Morocco Family Travel Checklist Before You Fly",
    description: "Check documents, hotel access, child seats, first night plans and travel advice before taking children to Morocco.",
    eyebrow: "Before you leave",
    intro: "Once the route is set, check the details that can hold up the first day: entry documents, the airport meeting point, the car seats and when the room will be ready.",
    image: moroccoPlaces.marrakechJemaa.src,
    imageAlt: moroccoPlaces.marrakechJemaa.alt,
    sections: [
      {
        heading: "Before you pay a deposit",
        paragraphs: [
          "Check current entry and transit guidance for every passport in the group. If a child travels with one parent or another adult, ask the airline and consult official guidance for the documents relevant to your family. Check that your insurance covers the route and any activities you intend to book.",
        ],
        links: [
          { label: "UK government entry requirements for Morocco", href: "https://www.gov.uk/foreign-travel-advice/morocco/entry-requirements" },
          { label: "US State Department travel advice for Morocco", href: "https://travel.state.gov/en/international-travel/travel-advisories/morocco.html" },
        ],
      },
      {
        heading: "A week before departure",
        paragraphs: [
          "Save the first hotel’s name and driver’s phone number on two phones. Reconfirm the flight number, where the driver will wait, the seat for each child and the drop-off point if you are staying inside a medina. Ask the first hotel what to do if a flight arrives before check-in or after reception closes.",
          "If anyone has a food allergy, contact each property or activity provider that will serve meals. Plan a backup you can carry for the first transfer.",
        ],
        links: [
          { label: "Transport checklist for child car seats", href: "/blog/child-car-seats-in-morocco/" },
          { label: "Planning meals in Morocco with a food allergy", href: "/blog/morocco-food-allergies-with-kids/" },
        ],
      },
      {
        heading: "Pack one bag for the first evening",
        paragraphs: [
          "Keep a change of clothes, usual snacks, chargers, any medication you need to carry and the hotel address in the bag you can reach. In a car with a full boot, you should be able to get what a tired child needs without unpacking the suitcases.",
        ],
        links: [{ label: "Family packing list for Morocco", href: "/blog/packing-for-morocco-with-kids/" }],
      },
    ],
  },
  {
    slug: "about",
    title: "About Morocco Family Trips and Its Local Operator",
    description: "Meet the local operator behind Morocco Family Trips. See the Morocco Travel Experts team, its head office in Aït Ben Haddou and guest reviews.",
    eyebrow: "About us",
    intro: "Morocco Travel Experts operates Morocco Family Trips under DIRECTION SUD MAROC SARL. Its head office is in Aït Ben Haddou, near Ouarzazate.",
    image: moroccoPlaces.aitBenhaddou.src,
    imageAlt: moroccoPlaces.aitBenhaddou.alt,
    sections: [
      {
        heading: "Who plans the trips",
        paragraphs: [
          "Hamid El Maimouni founded Morocco Travel Experts. Its team arranges routes with local drivers, city guides and accommodation providers. Your proposal should name the properties and explain which days include a guide.",
        ],
        links: [
          { label: "Meet Hamid El Maimouni", href: "/authors/hamid-el-maimouni/" },
          { label: "About Morocco Travel Experts", href: "https://moroccotravelexperts.com/about-us/" },
        ],
      },
      {
        heading: "What you can check before booking",
        paragraphs: [
          "Read the day plans and ask about the longest transfer, where you will sleep and which seats are available for the children. The team can send a written quote for your dates with the route, included services and terms. Guest reviews on the operator’s page identify the trip each traveller took.",
        ],
        links: [
          { label: "Read guest reviews and their sources", href: "/reviews/" },
          { label: "Email the planning team", href: "/contact/" },
        ],
      },
    ],
  },
  {
    slug: "our-team",
    title: "Meet the Morocco Travel Experts Team",
    description: "Meet Hamid El Maimouni, founder of Morocco Travel Experts, and find out who to contact about a family itinerary in Morocco.",
    eyebrow: "Local team",
    intro: "The Morocco Travel Experts team handles family trip enquiries from Morocco. Your written itinerary can confirm who will drive, guide and support you during the trip.",
    image: "",
    imageAlt: "",
    sections: [
      {
        heading: "Hamid El Maimouni",
        paragraphs: ["Hamid founded Morocco Travel Experts and is described by the operator as a licensed local guide. The company also lists Kim on its team page."],
        links: [
          { label: "Read Hamid’s profile", href: "/authors/hamid-el-maimouni/" },
          { label: "Ask the team about your dates", href: "/contact/" },
        ],
      },
    ],
  },
  {
    slug: "reviews",
    title: "Morocco Travel Experts Guest Reviews",
    description: "Read guest reviews of Morocco Travel Experts with the tour name, date and review platform, and find the full reviews at their source.",
    eyebrow: "Guest reviews",
    intro: "Read what travellers said about the trips they took with Morocco Travel Experts. Use the tour names to see which route each review describes.",
    image: "",
    imageAlt: "",
    sections: [
      {
        heading: "Read the full reviews",
        paragraphs: ["The operator’s reviews page links to the original platforms. If a review mentions a guide, room or activity you are interested in, ask whether it can be included in your proposed trip."],
        links: [
          { label: "Morocco Travel Experts’ published reviews", href: "https://moroccotravelexperts.com/verified-reviews/" },
          { label: "Compare family routes", href: "/tours/" },
        ],
      },
    ],
  },
  {
    slug: "faq",
    title: "Morocco Family Trip FAQs: Tours, Seats and Costs",
    description: "Find answers about Morocco family tour formats, days in the Sahara, child seats, accommodation and what a written quote should include.",
    eyebrow: "Family trip questions",
    intro: "Find out how to choose a route, check the car seats and compare what different family trip quotes cover.",
    image: moroccoPlaces.marrakechKoutoubia.src,
    imageAlt: moroccoPlaces.marrakechKoutoubia.alt,
    sections: [],
  },
  {
    slug: "contact",
    title: "Contact Morocco Family Trips",
    description: "Email contact@moroccofamilytrips.com or message Morocco Travel Experts on WhatsApp about your family’s travel dates and route.",
    eyebrow: "Contact the local team",
    intro: "Send us your dates, the number of travellers and the children’s ages. If you already have flights or a route in mind, include those details.",
    image: moroccoPlaces.marrakechKoutoubia.src,
    imageAlt: moroccoPlaces.marrakechKoutoubia.alt,
    sections: [],
  },
  {
    slug: "plan-my-trip",
    title: "Plan Your Morocco Family Trip",
    description: "Request a Morocco family itinerary and quote by email. Send your travel dates, arrival city, children’s ages and preferred route to Morocco Travel Experts.",
    eyebrow: "Family trip enquiry",
    intro: "Email Morocco Travel Experts with the dates and route you have in mind. The team can send a proposed itinerary and quote for you to review.",
    image: moroccoPlaces.marrakechKoutoubia.src,
    imageAlt: moroccoPlaces.marrakechKoutoubia.alt,
    sections: [
      {
        heading: "What to put in your first email",
        paragraphs: ["If you’re still choosing between routes, tell us the one experience you most want and the longest drive your children usually manage."],
        bullets: [
          "Travel window, arrival and departure cities, and flight times if booked.",
          "Number of adults, children’s ages, and room or car seat needs.",
          "Preferred destinations, time for rest days and any places you could drop.",
          "Budget for the whole family and your preferred quote currency.",
        ],
        links: [
          { label: "Compare family tours by starting city and drive", href: "/tours/" },
          { label: "How to compare two trip quotes", href: "/blog/morocco-family-trip-budget/" },
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How Morocco Family Trips handles trip-planning enquiries and what the operator must configure before this policy is finalized.",
    eyebrow: "Privacy",
    intro: "This draft describes how the team uses the information you send in an enquiry email. The operator must confirm its data controller details, retention period, email provider and final privacy contact before publication.",
    image: "",
    imageAlt: "",
    sections: [
      { heading: "Information you share by email", paragraphs: ["When you email the planning team, you can share your travel dates, party size, children’s ages, destinations and preferences. Please leave out passport numbers, payment-card details and sensitive health information."], bullets: ["The planning team uses the details you share to respond to your enquiry and prepare a proposal."] },
      { heading: "Before launch", paragraphs: ["The operator must confirm the legal data controller, contact email, data-processing terms with the email provider, deletion schedule, international-transfer disclosures and how visitors can request access or deletion. The policy should be reviewed for the markets where the site will operate."] },
      { heading: "Cookies and analytics", paragraphs: ["No analytics or advertising tracker is included in this starter implementation. If tracking, booking embeds or third-party widgets are added, update this policy and consent experience before launch."] },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    description: "Draft website terms for trip-planning enquiries; booking, payment and travel terms must be supplied and approved by Morocco Travel Experts.",
    eyebrow: "Website terms · Draft",
    intro: "This website provides trip-planning information and a way to request a proposal. It does not take payment or confirm a tour booking.",
    image: "",
    imageAlt: "",
    sections: [
      { heading: "Trip information", paragraphs: ["Routes, drive estimates, activities and accommodation examples are planning information. Availability, inclusions, prices and operating arrangements must be confirmed in the written proposal for your dates."], bullets: ["No itinerary is confirmed until both parties agree in writing.", "Third-party accommodation and activity availability can change.", "Travelers remain responsible for checking current entry and government travel advice."] },
      { heading: "Booking and payment", paragraphs: ["This site does not collect deposits, card data or booking payments. Morocco Travel Experts must provide its approved booking, payment, insurance and cancellation terms directly before a traveler commits to a trip."] },
      { heading: "Review before publication", paragraphs: ["The operator must review this draft with its legal adviser and supply its final legal notice, governing law, complaint process and contractual booking conditions before the website is used to take bookings."] },
    ],
  },
  {
    slug: "cancellation-policy",
    title: "Cancellation Policy",
    description: "Cancellation information for Morocco Family Trips enquiries; the operator’s approved booking cancellation terms must be supplied before launch.",
    eyebrow: "Cancellation information · Draft",
    intro: "A trip-planning enquiry on this website is not a booking and does not create a cancellation fee. The operator must share the terms that apply to a specific written proposal before accepting payment.",
    image: "",
    imageAlt: "",
    sections: [
      { heading: "Before you pay a deposit", paragraphs: ["Ask for the cancellation timetable, any supplier penalties, change fees, refund process, payment schedule and force-majeure terms in writing. Confirm which party is responsible for each accommodation, transport and activity booking."], bullets: ["Do not rely on a third-party tour listing for a direct booking unless the same terms are included in your contract.", "Check travel-insurance coverage for cancellation and interruption.", "Keep all proposal and payment confirmations for your records."] },
      { heading: "Operator approval required", paragraphs: ["Morocco Travel Experts must provide and approve its current cancellation conditions before this page is treated as the policy for a booked trip. No refund percentage or deadline is invented here."] },
    ],
  },
];

export const editorialPageBySlug = Object.fromEntries(editorialPages.map((page) => [page.slug, page])) as Record<string, EditorialPageData>;
