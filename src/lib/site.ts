import type { Metadata } from "next";

export const BRAND = "Morocco Family Trips";
export const CONTACT_EMAIL = "contact@moroccofamilytrips.com";
export const OPERATOR = "Morocco Travel Experts";
export const SITE_URL = new URL(process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://moroccofamilytrips.com").origin;
export const WHATSAPP_NUMBER = "+212 721 653 572";
export const WHATSAPP_URL = "https://wa.me/212721653572?text=Hello%2C%20I%27d%20like%20to%20plan%20a%20Morocco%20family%20trip.";
export const OFFICIAL_OPERATOR_URL = "https://moroccotravelexperts.com/";
export const OFFICIAL_REVIEWS_URL = "https://moroccotravelexperts.com/verified-reviews/";
export const OFFICIAL_FAMILY_TOURS_URL = "https://moroccotravelexperts.com/family-tours-morocco/";
export const OFFICIAL_DRIVING_GUIDE_URL = "https://moroccotravelexperts.com/family-guide/morocco-travel-itinerary/";
export const OFFICIAL_HOTELS_URL = "https://moroccotravelexperts.com/hotels-we-work-with/";

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/p/Morocco-Travel-Experts-61577215262755/" },
  { label: "Instagram", href: "https://www.instagram.com/moroccotravelexperts_com/" },
  { label: "Threads", href: "https://www.threads.com/@moroccotravelexperts_com" },
  { label: "YouTube", href: "https://www.youtube.com/@moroccotravelexpertsllc" },
];

export const COMPANY = {
  legalName: "DIRECTION SUD MAROC SARL",
  office: "Aït Ben Haddou, Ouarzazate, Morocco",
  ice: "002600802000041",
  if: "45938917",
  rc: "10969",
} as const;

export function canonical(path = "") {
  const normalized = path ? `/${path.replace(/^\/+|\/+$/g, "")}/` : "/";
  return `${SITE_URL}${normalized}`;
}

export const PUBLISHER_ID = canonical() + "#organization";
export const OPERATOR_ID = OFFICIAL_OPERATOR_URL + "#travel-agency";
export const AUTHOR_NAME = "Hamid El Maimouni";
export const AUTHOR_PATH = "authors/hamid-el-maimouni";
export const AUTHOR_ID = canonical(AUTHOR_PATH) + "#person";
export const WEBSITE_ID = canonical() + "#website";

export function pageMetadata({ path, title, description, image, imageAlt, article }: {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  article?: boolean;
}): Metadata {
  const url = canonical(path);
  const images = [{ url: image || "/opengraph-image", alt: imageAlt || BRAND }];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: article
      ? { type: "article", url, siteName: BRAND, title, description, images }
      : { type: "website", url, siteName: BRAND, title, description, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: BRAND,
        url: canonical(),
        inLanguage: "en",
        publisher: { "@id": PUBLISHER_ID },
      },
      {
        "@type": "Organization",
        "@id": PUBLISHER_ID,
        name: BRAND,
        url: canonical(),
        logo: new URL("/images/brand/morocco-family-trips-mark-oxblood.png", SITE_URL).href,
        email: CONTACT_EMAIL,
        description: "Morocco family tour planning and guides, operated by Morocco Travel Experts.",
        parentOrganization: { "@id": OPERATOR_ID },
      },
      {
        "@type": "TravelAgency",
        "@id": OPERATOR_ID,
        name: OPERATOR,
        url: OFFICIAL_OPERATOR_URL,
        legalName: COMPANY.legalName,
        telephone: WHATSAPP_NUMBER,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Aït Ben Haddou",
          addressRegion: "Ouarzazate",
          addressCountry: "MA",
        },
        sameAs: SOCIAL_LINKS.map((item) => item.href),
      },
    ],
  };
}
