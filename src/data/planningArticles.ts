import type { Article } from "./articles";
import { moroccoPhotos } from "./photos";
import { moroccoPlaces } from "./places";

export const planningArticles: Article[] = [
  {
    slug: "7-days-in-morocco-with-kids-without-sahara",
    category: "planning",
    topic: "Seven day itinerary",
    layout: "sample-itinerary",
    title: "7 Days in Morocco with Kids Without the Sahara",
    description: "Follow a seven day Morocco itinerary with kids from Marrakech to Essaouira. See where to sleep, when to drive and how to fit in an Atlas day trip.",
    excerpt: "Three nights in Marrakech, two in Essaouira and one back near your airport, with a day-by-day plan and an optional Atlas outing.",
    image: moroccoPlaces.essaouiraCitadel.src,
    imageAlt: moroccoPlaces.essaouiraCitadel.alt,
    readingTime: "6 min read",
    contextLinks: [
      { sectionIndex: 0, before: "If your flights leave you fewer full days, use the ", href: "/blog/how-many-days-in-morocco-with-kids/", linkText: "trip length guide", after: " to decide whether to stay in one base." },
      { sectionIndex: 1, before: "Pick one or two stops from the ", href: "/blog/marrakech-with-kids/", linkText: "Marrakech plan with children", after: " for your first full day." },
      { sectionIndex: 1, before: "If the mountains are the priority, compare ", href: "/blog/atlas-mountains-with-kids/", linkText: "Atlas day trips by walking time and distance", after: " before choosing day three." },
      { sectionIndex: 2, before: "Check the ", href: "/blog/child-car-seats-in-morocco/", linkText: "car seat details for the coastal transfer", after: " separately from the airport pickup." },
      { sectionIndex: 3, before: "Our ", href: "/blog/essaouira-with-kids/", linkText: "Essaouira guide", after: " has more detail on the harbour walk and choosing a place to stay." },
      { sectionIndex: 5, before: "For longer routes, compare the ", href: "/morocco-family-itineraries/", linkText: "seven, ten and fourteen day overnight plans", after: "." },
    ],
    table: {
      heading: "The week at a glance",
      caption: "Sample round trip with six hotel nights and flights in and out of Marrakech.",
      headers: ["Day", "Plan", "Sleep in"],
      rows: [
        ["1", "Arrive, check in and eat close to your room.", "Marrakech"],
        ["2", "Medina and palace in the morning, with the afternoon free.", "Marrakech"],
        ["3", "Choose a garden morning or an Atlas outing. Keep the evening open.", "Marrakech"],
        ["4", "Drive to Essaouira and take a short walk after check-in.", "Essaouira"],
        ["5", "Walk the harbour and ramparts. Choose a beach walk if conditions suit.", "Essaouira"],
        ["6", "Return to Marrakech. Stay near a convenient pickup point.", "Marrakech"],
        ["7", "Allow time for the airport transfer and departure.", "Flight day"],
      ],
    },
    localNote: "Morocco Travel Experts gives about 175 km and 2½ hours for Marrakech to Essaouira. Add the time to reach the vehicle from your riad, stop for a break and get to your room at the other end.",
    photos: [moroccoPlaces.marrakechJemaa, moroccoPlaces.highAtlas, moroccoPlaces.essaouiraCitadel],
    faqs: [
      { question: "Do we need a driver for the whole week?", answer: "If you plan to walk and stay near your chosen sights, price the airport transfers, return trip to Essaouira and any Atlas outing separately. Check car seats and luggage space for each vehicle." },
      { question: "Can we stay in Essaouira on the last night?", answer: "Possibly, if your flight leaves late enough for the drive, a break and airport check-in. Compare the real pickup time with the time your children usually wake up." },
      { question: "Is an Atlas day trip necessary?", answer: "A garden or an unplanned half day in Marrakech works well on day three. Keep the Atlas outing for a day when the drive and walking conditions fit the family." },
    ],
    tours: [],
    related: ["essaouira-with-kids", "marrakech-with-kids", "morocco-family-trip-budget"],
    sections: [
      {
        heading: "Start with the flight times",
        paragraphs: [
          "This plan works with an arrival on day one and departure on day seven. It gives you six nights, two full days based in Marrakech and one full day in Essaouira. Keep the first evening for check-in, dinner and sleep if you land late. A short stroll is enough if everyone is still awake.",
          "Book the first three nights together. If you stay inside the medina, ask for the name of the gate where the driver can stop and arrange help with bags. Keep the last night easy to reach by car if pickup is early.",
        ],
      },
      {
        heading: "Days 2 and 3: a medina morning and one flexible day",
        paragraphs: [
          "Set out after breakfast with one main destination. A palace visit and a short market walk make a reasonable morning if they are close to your room. Return for lunch or a rest. If the children want to see Jemaa el-Fnaa later, choose a meeting spot and decide together when you will leave.",
          "Keep day three for a garden, a workshop or the foothills. If you go into the Atlas, ask for a walk with a clear turnaround point and check the drive back against your dinner time. You have a coastal transfer the next day, so a shorter outing may be enough.",
        ],
      },
      {
        heading: "Day 4: travel to the coast after breakfast",
        paragraphs: [
          "Check when the Essaouira room will be ready. If you reach town before check-in, arrange somewhere to leave the bags and choose a lunch spot within walking distance. Keep the first walk small enough to turn back if everyone is tired.",
          "Ask both properties about vehicle access. The quote should say where the driver picks you up, whether stops are possible on the way, and where the car leaves you in Essaouira.",
        ],
      },
      {
        heading: "Day 5: choose a harbour day or a beach day",
        paragraphs: [
          "Start at the harbour and use the ramparts as the second stop. The old town was built as a fortified port, so ask children to look for how the walls, gates and sea fit together. Take a break inside the medina if the waterfront is windy.",
          "If the family wants beach time, leave the afternoon unbooked until you see the conditions. A walk with shoes and a spare layer works when a swim or water activity does not. Check local guidance before going into the water.",
        ],
      },
      {
        heading: "Days 6 and 7: put the airport drive on the calendar",
        paragraphs: [
          "Return to Marrakech on day six for an early departure the next morning. If the family loved the first property and pickup was simple, ask to book it again. For a very early flight, compare the ride from the old city with a room that has easier vehicle access.",
          "If you have a late flight and would rather use a third coast night, ask your driver for a departure time that includes the road, a break and your airline’s check-in guidance. Price that option before you change the booking.",
        ],
      },
      {
        heading: "What to change for a shorter week or younger children",
        paragraphs: [
          "With five nights, either stay in Marrakech and take one short outing or use three nights in Marrakech and two in Essaouira if the flight home leaves time for the drive. Families with toddlers can replace the Atlas day with a garden or a room break. With older children, let them choose the workshop, coast walk or market stop they most want to do.",
          "Ask for a proposal that names your rooms, the two city-to-city transfers and any extra outing separately. That way you can change one day without having to price the whole route again.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Morocco Travel Experts: Marrakech to Essaouira driving estimate", href: "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/" },
      { label: "Moroccan National Tourism Office: Marrakech", href: "https://www.visitmorocco.com/en/travel/marrakesh" },
      { label: "UNESCO: Medina of Essaouira", href: "https://whc.unesco.org/en/list/753/" },
    ],
  },
  {
    slug: "morocco-desert-camp-with-kids",
    category: "desert",
    topic: "Sahara camp booking",
    layout: "camp-checklist",
    title: "Morocco Desert Camps with Kids: What to Book",
    description: "Ask these questions before booking a Sahara desert camp with kids: vehicle or camel transfer, beds, bathroom, meals, weather and what happens after dark.",
    excerpt: "A checklist to send the camp before paying, from how you reach the tent to where children sleep and how you leave if plans change.",
    image: moroccoPhotos.desertCamp.src,
    imageAlt: moroccoPhotos.desertCamp.alt,
    readingTime: "6 min read",
    contextLinks: [
      { sectionIndex: 0, before: "Use the ", href: "/morocco-family-desert-tours/", linkText: "family Sahara route comparison", after: " to choose the drive before asking for camp names." },
      { sectionIndex: 1, before: "For an alternative vehicle transfer, send the ", href: "/blog/child-car-seats-in-morocco/", linkText: "child car seat questions", after: " to the camp as well as the main driver." },
      { sectionIndex: 3, before: "If anyone has an allergy, follow up with the ", href: "/blog/morocco-food-allergies-with-kids/", linkText: "questions to ask the kitchen", after: " before accepting the meal plan." },
      { sectionIndex: 4, before: "If the time in the car is the deciding factor, see ", href: "/blog/agafay-or-merzouga-with-kids/", linkText: "Agafay vs Merzouga with kids", after: " before you reserve." },
    ],
    table: {
      heading: "Questions to send before paying for camp",
      caption: "Ask the camp or tour operator to confirm these details for your dates and each child.",
      headers: ["Check", "Ask this", "Why it changes the plan"],
      rows: [
        ["Last transfer", "Where do we meet, can we go by vehicle, and how long does it take?", "The camp transfer is separate from the drive to Merzouga."],
        ["Beds", "Which tent, how many beds and where would a cot fit?", "A tent described as family sized may have a different layout than you expect."],
        ["Bathroom", "Is the bathroom inside the tent, private outside it or shared?", "Check the distance and lighting for a child who gets up at night."],
        ["Meals", "When are dinner and breakfast, and can we eat earlier?", "A late arrival can affect dinner and an early departure can affect breakfast."],
        ["Weather and departure", "What happens if the ride is cancelled or we need to leave early?", "Know who will arrange the vehicle, where it goes and whether it costs extra."],
      ],
    },
    localNote: "The operator’s four day Sahara listing separates some included camel activities from an optional 4x4 outing. Ask whether a vehicle to and from your tent is included when you choose it in place of a camel ride.",
    photos: [moroccoPlaces.merzougaDunes, moroccoPhotos.desertCamp],
    faqs: [
      { question: "Can a child skip the camel ride and still stay at camp?", answer: "Ask the camp whether it offers a vehicle transfer and which parts of your party can travel that way. Confirm the pickup point, vehicle, child seat, luggage and cost." },
      { question: "How many nights should a family stay near Merzouga?", answer: "One night fits a shorter tour. A second night near the dunes gives you a full day between long drives. Ask which night is at camp and which is in a hotel if you prefer to split them." },
      { question: "Is a private bathroom always inside the tent?", answer: "The layout depends on the camp. Request the tent name or photos and ask if the bathroom is attached, outside but reserved for your tent, or shared." },
    ],
    tours: ["family-sahara-adventure", "10-day-morocco-family-tour"],
    related: ["agafay-or-merzouga-with-kids", "packing-for-morocco-with-kids", "child-car-seats-in-morocco"],
    sections: [
      {
        heading: "Set aside time for the road and the camp transfer",
        paragraphs: [
          "Arriving in Merzouga does not mean arriving at the tent. Ask where the road vehicle stops, who meets you and how bags reach your room. Put that time on the same schedule as the drive, lunch and any planned gorge or kasbah stops.",
          "If the route lists a sunset ride, ask what happens when you arrive after it leaves. Agree in advance on who meets you, where you eat and how to get to the tent after dark. Keep your child’s warm layer and any bedtime items in a bag you can carry with you.",
        ],
      },
      {
        heading: "Decide how each person reaches the tent",
        paragraphs: [
          "If a child is too young for the provider’s activity rules, is unsure about camels or just wants to stop, ask how they can get to camp. Confirm the alternative before you pay, including whether one adult can ride while the other travels with the children. Ask who will meet both groups if they arrive at different times.",
          "Check which vehicle is used for the last transfer and which restraint it can take. The seat arrangement on the main road journey may be separate. Confirm who takes your luggage and keep essentials with the adult who will reach the tent first.",
        ],
      },
      {
        heading: "Ask for the tent name and sleeping layout",
        paragraphs: [
          "Get the number of beds and whether each is a proper bed, a folding bed or bedding shared with a parent. Ask where a cot would go, what separates sleeping areas and how close the tent is to dinner or music. A child who sleeps early may benefit from a quieter location.",
          "Find out where the toilet is and whether the path is lit. Ask what bedding and heating or cooling the named tent has for your dates and when outlets work if you need to charge a phone. Bring a torch if you will need to move around after dark.",
        ],
      },
      {
        heading: "Put meals and the morning departure in the quote",
        paragraphs: [
          "Write down when dinner is served, which drinks are included and what happens if the group arrives late. If you have young children, ask about an earlier meal or bring snacks you know they can eat. For dietary needs, ask the camp kitchen directly about what it can prepare.",
          "Ask for the breakfast and pickup times if you need to get to Fes or Marrakech that day. If you want to see sunrise, find out whether it can be done near your tent so you can go back inside when the children have had enough.",
        ],
      },
      {
        heading: "Choose one night, two nights or a hotel by the dunes",
        paragraphs: [
          "A single camp night can work when you arrive with time before dinner and the family can get enough sleep before the drive out. If the drive takes most of the day, a second night gives you more time near the dunes. Ask to split the nights between a camp and a hotel if you want the camp experience and an easier departure.",
          "If someone needs to leave early or the camp changes the activity due to weather, ask who can arrange the return transfer and what your terms cover. Get the phone number and pickup point in your final itinerary.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Morocco Travel Experts: four day Sahara itinerary and listed activities", href: "https://moroccotravelexperts.com/morocco-tour/family-sahara-adventure-4-day-desert-experience-from-marrakech/" },
      { label: "Moroccan National Tourism Office: Merzouga and the surrounding region", href: "https://www.visitmorocco.com/en/travel/errachidia-midelt-merzouga" },
    ],
  },
];
