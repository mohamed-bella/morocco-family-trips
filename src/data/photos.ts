export type ImageCredit = {
  photographer: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  changes: string;
};

export type MoroccoPhoto = {
  src: string;
  alt: string;
  caption: string;
  credit?: ImageCredit;
};

export const moroccoPhotos = {
  saharaCamel: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794187441/mte-organized-webp-2026-11-09/01-sahara-desert-camel-trekking/morocco-sahara-camel-trek-0002.webp",
    alt: "Camel trekking in the Moroccan Sahara",
    caption: "Sahara camel trek",
  },
  desertCamp: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794187450/mte-organized-webp-2026-11-09/02-desert-camps-sunsets-and-portraits/morocco-desert-camp-sunset-portrait-0115.webp",
    alt: "Desert camp at sunset in Morocco",
    caption: "A night in the desert",
  },
  kasbah: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794187505/mte-organized-webp-2026-11-09/03-kasbahs-gorges-and-oases/morocco-ait-benhaddou-kasbah-0001.webp",
    alt: "Aït Benhaddou kasbah in southern Morocco",
    caption: "Kasbah country",
  },
  atlasWaterfall: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794187713/mte-organized-webp-2026-11-09/04-atlas-mountains-waterfalls-and-monkeys/morocco-atlas-mountains-waterfall-0197.webp",
    alt: "Waterfall in Morocco's Atlas Mountains",
    caption: "The Atlas Mountains",
  },
  medina: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794187845/mte-organized-webp-2026-11-09/05-medinas-mosques-and-architecture/morocco-medina-mosque-architecture-0308.webp",
    alt: "Moroccan medina and mosque architecture",
    caption: "Medinas and architecture",
  },
  foodMarket: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794187965/mte-organized-webp-2026-11-09/06-moroccan-food-markets-and-dining/morocco-food-market-dining-0081.webp",
    alt: "Food and market life in Morocco",
    caption: "Markets and local food",
  },
  cultureCrafts: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794188034/mte-organized-webp-2026-11-09/07-moroccan-culture-music-and-crafts/morocco-culture-music-crafts-0092.webp",
    alt: "Moroccan culture, music and crafts",
    caption: "Culture and craft",
  },
  roadTrip: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794188106/mte-organized-webp-2026-11-09/08-road-trips-4x4-and-quad-bikes/morocco-road-trip-4x4-quad-bike-0109.webp",
    alt: "A 4x4 road trip through Morocco",
    caption: "The journey between stops",
  },
  wildlife: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794188149/mte-organized-webp-2026-11-09/09-wildlife-and-nature/morocco-wildlife-nature-0177.webp",
    alt: "Wildlife and nature in Morocco",
    caption: "Nature in Morocco",
  },
  riad: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794188244/mte-organized-webp-2026-11-09/10-hotels-riads-and-lodges/morocco-hotel-riad-lodge-0159.webp",
    alt: "A Moroccan hotel, riad or lodge",
    caption: "Riads and stays",
  },
  atlanticCoast: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794188262/mte-organized-webp-2026-11-09/11-atlantic-coast-and-beaches/morocco-atlantic-coast-beach-0036.webp",
    alt: "Beach on Morocco's Atlantic coast",
    caption: "Atlantic coast",
  },
  guideGuests: {
    src: "https://res.cloudinary.com/df7el8fb4/image/upload/v1794188268/mte-organized-webp-2026-11-09/12-guide-portraits-and-travel-guests/morocco-guide-portrait-travel-guests-0069.webp",
    alt: "A Morocco guide with travel guests",
    caption: "Local guides and guests",
  },
} satisfies Record<string, MoroccoPhoto>;

export const photoGalleryItems = Object.values(moroccoPhotos);
