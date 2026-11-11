import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, CalloutBand, FAQAccordion, SectionHeading, TourGrid } from "@/components/SiteComponents";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { tours } from "@/data/tours";
import { OFFICIAL_FAMILY_TOURS_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "morocco-family-tours",
  title: "Private Morocco Family Tours | Routes and Quotes",
  description: "Plan a private Morocco family tour with a local driver. Compare four days in the Sahara, a week from Marrakech and longer routes from Marrakech or Casablanca.",
});

const faqs = [
  { question: "Can we request a private family tour?", answer: "Yes. Morocco Travel Experts plans private itineraries. Some published route listings have a group tour label, so confirm the vehicle and departure format in your quote." },
  { question: "Can we change the route or skip the Sahara?", answer: "Ask for a route based on your flight cities and the longest drive your children can manage. A Marrakech and Essaouira itinerary gives you time in two places in one week." },
  { question: "What does the quote cover?", answer: "Request a total for your group with named accommodation, room types, meals, driver and guide days, entry fees and optional activities. Confirm the payment schedule and terms before booking." },
];

export default function FamilyToursPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Family tours", href: "/morocco-family-tours/" }]} />
      <section className="section section-paper family-intro">
        <div className="container">
          <h1>Private Morocco Family Tours</h1>
          <p className="page-lead">Request a trip with a local driver. Start with a Sahara loop from Marrakech, a one way route to Chefchaouen or a two week circuit from Casablanca.</p>
          <p className="operator-disclosure">Operated by <a href={OFFICIAL_FAMILY_TOURS_URL}>Morocco Travel Experts</a>.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/plan-my-trip/">Request an itinerary <ArrowRight aria-hidden="true" size={17} /></Link>
            <Link className="button button-outline" href="/tours/">Compare routes and driving days</Link>
          </div>
        </div>
      </section>
      <ReviewsCarousel />

      <section className="section">
        <div className="container">
          <SectionHeading title="Choose a route to start with" description="The tour pages show the stops, driving days and inclusions listed by the operator. Use them to work out what you want in your proposal." />
          <TourGrid tours={tours} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="What to ask for in your proposal" />
          <div className="process-grid">
            <article className="process-card">
              <h3>Driving days</h3>
              <p>Ask for hotel to hotel times, lunch and toilet stops, and options to split the longest drive.</p>
              <Link className="text-link" href="/morocco-family-itineraries/">Compare overnight stops by trip length</Link>
            </article>
            <article className="process-card">
              <h3>Rooms and car seats</h3>
              <p>Send each child’s age and ask about beds, cot space, luggage and the seat for each transfer.</p>
              <Link className="text-link" href="/blog/child-car-seats-in-morocco/">Child car seat checklist</Link>
            </article>
            <article className="process-card">
              <h3>Price and inclusions</h3>
              <p>Get the total for your group, with guides, meals, activities and extras shown separately.</p>
              <Link className="text-link" href="/blog/morocco-family-trip-budget/">Compare the cost of two quotes</Link>
            </article>
          </div>
          <div className="content-section">
            <h2>Fit the trip around flights and school breaks</h2>
            <p>For a shorter break, see our <Link href="/morocco-family-holidays/">Morocco family holidays from the UK</Link> guide. If you’re travelling farther, use the <Link href="/morocco-family-vacations/">long haul family vacation guide</Link> to plan the first night and departure transfer.</p>
            <p>When the dunes are the priority, compare <Link href="/morocco-family-desert-tours/">family Sahara routes</Link>. For shorter drives, see how a <Link href="/blog/7-days-in-morocco-with-kids-without-sahara/">week in Marrakech and Essaouira</Link> would work.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-container">
          <SectionHeading title="Questions about booking a family tour" />
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CalloutBand title="Ask for a written route and quote" text="Send your flight cities, number of travellers and the children’s ages to Morocco Travel Experts." buttonLabel="Request an itinerary" />
    </>
  );
}
