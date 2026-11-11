import { moroccoPlaces as places } from "./places";
import { moroccoPhotos as photos } from "./photos";

const heritage = { label: "Aït Benhaddou · UNESCO World Heritage", href: "https://whc.unesco.org/en/list/444/" };
const fez = { label: "Medina of Fes · UNESCO World Heritage", href: "https://whc.unesco.org/en/list/170/" };
const marrakech = { label: "Marrakech · Moroccan National Tourism Office", href: "https://www.visitmorocco.com/en/travel/marrakesh" };

export const journeys = {
  "family-sahara-adventure": {
    photos: [places.merzougaDunes, places.aitBenhaddou, photos.desertCamp, places.highAtlas],
    places: ["Marrakech", "Aït Benhaddou", "Skoura", "Todra Gorge", "Merzouga", "Marrakech"],
    pace: "Long return drive",
    guides: ["morocco-desert-camp-with-kids", "agafay-or-merzouga-with-kids", "child-car-seats-in-morocco"],
    destinations: [
      { label: "Aït Benhaddou with kids", href: "/blog/ait-benhaddou-with-kids/" },
      { label: "Where to stop in Skoura", href: "/blog/skoura-with-kids/" },
      { label: "Walking in Todra Gorge with children", href: "/blog/todgha-gorge-with-kids/" },
    ],
    sources: [heritage, marrakech],
    alternatives: ["7-day-morocco-family-tour", "10-day-morocco-family-tour"],
  },
  "7-day-morocco-family-tour": {
    photos: [places.merzougaDunes, places.fesMedina, places.chefchaouenBlueCity, photos.kasbah],
    places: ["Marrakech", "Aït Benhaddou", "Dades Valley", "Merzouga", "Fes", "Chefchaouen", "Casablanca", "Marrakech"],
    pace: "Several long drives",
    guides: ["7-days-in-morocco-with-kids-without-sahara", "morocco-family-road-trip-stops", "morocco-desert-camp-with-kids"],
    destinations: [
      { label: "Overnight stops in the Dades Valley", href: "/blog/dades-valley-with-kids/" },
      { label: "Fes with kids", href: "/blog/fes-with-kids/" },
      { label: "Chefchaouen with kids", href: "/blog/chefchaouen-with-kids/" },
    ],
    sources: [heritage, fez],
    alternatives: ["10-day-morocco-family-tour", "family-sahara-adventure"],
  },
  "10-day-morocco-family-tour": {
    photos: [places.aitBenhaddou, places.chefchaouenBlueCity, places.fesMedina, photos.desertCamp],
    places: ["Marrakech", "Aït Benhaddou", "Dades Valley", "Merzouga", "Fes", "Chefchaouen"],
    pace: "Rest days between transfers",
    guides: ["morocco-desert-camp-with-kids", "riad-or-hotel-morocco-with-kids", "morocco-family-road-trip-stops"],
    destinations: [
      { label: "Three days in Marrakech with kids", href: "/blog/marrakech-with-kids/" },
      { label: "Family visits in the Fes medina", href: "/blog/fes-with-kids/" },
      { label: "Where to stay in Chefchaouen with kids", href: "/blog/chefchaouen-with-kids/" },
    ],
    sources: [heritage, fez],
    alternatives: ["7-day-morocco-family-tour", "14-day-morocco-family-tour"],
  },
  "14-day-morocco-family-tour": {
    photos: [places.casablancaMosque, places.chefchaouenBlueCity, places.merzougaDunes, photos.kasbah],
    places: ["Casablanca", "Rabat", "Tangier", "Chefchaouen", "Fes", "Midelt", "Merzouga", "Dades Valley", "Ouarzazate", "Marrakech", "Casablanca"],
    pace: "Two weeks with city breaks",
    guides: ["casablanca-to-rabat-with-kids", "morocco-family-trip-budget", "riad-or-hotel-morocco-with-kids"],
    destinations: [
      { label: "Casablanca with kids", href: "/blog/casablanca-with-kids/" },
      { label: "Tangier with kids", href: "/blog/tangier-with-kids/" },
      { label: "A two day Chefchaouen stay", href: "/blog/chefchaouen-with-kids/" },
      { label: "Ouarzazate kasbah and film stops", href: "/blog/ouarzazate-with-kids/" },
    ],
    sources: [fez, marrakech],
    alternatives: ["10-day-morocco-family-tour", "7-day-morocco-family-tour"],
  },
};

export type JourneySlug = keyof typeof journeys;
