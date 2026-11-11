import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalloutBand, EditorialPageView, FAQAccordion, SectionHeading, WhatsAppCTA } from "@/components/SiteComponents";
import EmailContact from "@/components/EmailContact";
import PhotoGallery from "@/components/PhotoGallery";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { editorialPages, editorialPageBySlug, unpublishedEditorialSlugs } from "@/data/content";
import { canonical, pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
const familyGuideSlugs = new Set([
  "morocco-family-holidays",
  "morocco-family-vacations",
  "morocco-with-kids",
  "morocco-family-itineraries",
  "morocco-family-desert-tours",
  "morocco-with-toddlers",
  "morocco-with-teenagers",
  "morocco-family-travel-tips",
]);

export function generateStaticParams() {
  return editorialPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = Object.hasOwn(editorialPageBySlug, slug) ? editorialPageBySlug[slug] : undefined;
  if (!page) return { title: "Page not found" };
  return {
    ...pageMetadata({ path: slug, title: page.title, description: page.description, image: page.image, imageAlt: page.imageAlt }),
    ...(unpublishedEditorialSlugs.has(slug) && { robots: { index: false, follow: true } }),
  };
}

const faqItems = [
  { question: "Is Morocco a good destination for a family holiday?", answer: "It can suit many families, from city and coast breaks to longer mountain and Sahara routes. Choose the regions and pace around your children’s ages, travel days and season." },
  { question: "How many days should we plan?", answer: "Seven days can focus on one region or cover a busy Sahara route. Ten days creates more room for overnight stops, and two weeks can connect more cities. Your start and end flights matter as much as the number of days." },
  { question: "Can we request a private driver and guide?", answer: "Morocco Travel Experts describes private family journeys, though individual products can differ. Ask whether the vehicle is private and which days include a local city guide in your written proposal." },
  { question: "Are child seats available?", answer: "The operator mentions child seats on selected published tours. Confirm the seat type, quantity, age and size fit for each child before you book." },
  { question: "What should a written quote include?", answer: "Ask for the day-by-day route, hotel and room names, transport, meals, guide days, activities, entry fees, exclusions, payment schedule and cancellation terms." },
  { question: "Is there a fixed price on this website?", answer: "No. The website does not publish a custom tour price. Ask the operator for a date-specific quote and whether the amount covers the whole family or is per traveler." },
];

export default async function EditorialRoute({ params }: Props) {
  const { slug } = await params;
  const page = Object.hasOwn(editorialPageBySlug, slug) ? editorialPageBySlug[slug] : undefined;
  if (!page) notFound();

  const showEmailContact = slug === "contact" || slug === "plan-my-trip";
  const isDraft = unpublishedEditorialSlugs.has(slug);
  const currentCrumb = { label: page.title, href: canonical(slug) };
  const breadcrumbs = familyGuideSlugs.has(slug)
    ? [{ label: "Family Guide", href: "/family-guide/" }, currentCrumb]
    : [currentCrumb];

  return (
    <>
      <EditorialPageView page={page} breadcrumbs={breadcrumbs} />
      {slug === "reviews" && <ReviewsCarousel />}
      {slug === "about" && <PhotoGallery compact />}
      {slug === "faq" && (
        <section className="section section-paper">
          <div className="container narrow-container">
            <SectionHeading title="Questions before you book" />
            <FAQAccordion items={faqItems} />
            <ul className="editorial-links editorial-crosslinks">
              <li><Link href="/tours/">Compare routes and driving days</Link></li>
              <li><Link href="/blog/child-car-seats-in-morocco/">Car seat checklist</Link></li>
              <li><Link href="/blog/morocco-family-trip-budget/">Compare trip quotes</Link></li>
            </ul>
          </div>
        </section>
      )}
      {showEmailContact && (
        <section id="email-us" className="section section-paper">
          <div className="container narrow-container">
            <EmailContact />
            {slug === "contact" && <WhatsAppCTA />}
          </div>
        </section>
      )}
      {isDraft && <section className="section section-paper"><div className="container narrow-container"><div className="content-note"><strong>Draft for operator review.</strong> This legal page needs the operator’s confirmed contact, data handling details and approved terms before publication.</div></div></section>}
      {!showEmailContact && !isDraft && <CalloutBand title="Ask for a family itinerary" text="Email your dates and children’s ages to Morocco Travel Experts for a proposed route and quote." />}
    </>
  );
}
