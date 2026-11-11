export type ClientReview = {
  reviewer: string;
  image: string;
  imageAlt: string;
  tour: string;
  quote: string;
  platform: string;
  date: string;
  rating: 5;
};

export const clientReviews: ClientReview[] = [
  {
    reviewer: "Kimberly",
    image: "/images/reviews/kimberly.jpg",
    imageAlt: "Kimberly’s public TourRadar profile photo",
    tour: "Private 6-Day Morocco Tour from Casablanca to Marrakech via Sahara",
    quote: "I felt safe and at home.",
    platform: "TourRadar",
    date: "May 1, 2026",
    rating: 5,
  },
  {
    reviewer: "S",
    image: "/images/reviews/s.jpg",
    imageAlt: "S’s public TourRadar profile photo",
    tour: "7-day Morocco tour - Family & Kids Friendly",
    quote: "loved our 7 day tour!",
    platform: "TourRadar",
    date: "October 25, 2026",
    rating: 5,
  },
  {
    reviewer: "Jorden",
    image: "/images/reviews/jorden.jpg",
    imageAlt: "Jorden’s public TourRadar profile photo",
    tour: "Private 6-Day Morocco Tour from Casablanca to Marrakech via Sahara",
    quote: "Wonderful journey.",
    platform: "TourRadar",
    date: "April 15, 2026",
    rating: 5,
  },
  {
    reviewer: "Kasbah",
    image: "/images/reviews/kasbah.jpg",
    imageAlt: "Kasbah’s public TourRadar profile photo",
    tour: "6-Day Morocco Desert Tour",
    quote: "I had a wonderful time on this tour.",
    platform: "TourRadar",
    date: "December 13, 2025",
    rating: 5,
  },
];
