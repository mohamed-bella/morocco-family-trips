import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HotelStrip from "@/components/HotelStrip";
import MoroccoMoments from "@/components/MoroccoMoments";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import {
  AgeGroupCard, AuthorCard, CalloutBand, DestinationCard, FAQAccordion,
  HeroSplit, SectionHeading, TourGrid, TrustStrip,
} from "@/components/SiteComponents";
import { articleBySlug } from "@/data/articles";
import { photoGalleryItems } from "@/data/photos";
import { moroccoPlaces } from "@/data/places";
import { ageGroups, destinationCards, tours } from "@/data/tours";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "",
  title: "Morocco Family Trips | Local Drivers and Private Tours",
  description: "Plan a family trip to Morocco with a local driver. Compare city and coast holidays and Sahara routes, or ask Morocco Travel Experts for an itinerary.",
});

const homeFaqs = [
  { question: "Can we spend a week in Morocco without going to the Sahara?", answer: "Yes. Use Marrakech and Essaouira as your two bases. Two nights on the coast give you a full day there, and a last night in Marrakech can make an early flight easier." },
  { question: "Can we start and finish in different cities?", answer: "Ask for a one way route when you send your flight plans. The ten day outline starts in Marrakech and finishes around Chefchaouen, so confirm the onward drive to your departure airport." },
  { question: "How do we get a quote?", answer: "Email your dates, number of travellers, children’s ages and preferred route. Ask for the total in a stated currency, the room layout and what is included." },
];

const homeHighlightDestinations = [destinationCards[0], destinationCards[3], destinationCards[5]];
const homeGuides = [
  articleBySlug["7-days-in-morocco-with-kids-without-sahara"],
  articleBySlug["morocco-desert-camp-with-kids"],
  articleBySlug["morocco-family-trip-budget"],
];

export default function Home() {
  return (
    <>
      <HeroSplit
        eyebrow="Local drivers and guides"
        title="Morocco Family Trips"
        description="Plan a private trip with a local driver. Spend a week between Marrakech and the coast, or give the Sahara more time with an overnight stop on the way."
        image={moroccoPlaces.marrakechJemaa.src}
        imageAlt={moroccoPlaces.marrakechJemaa.alt}
        primaryHref="/morocco-family-tours/"
        primaryLabel="Explore family tours"
        secondaryHref="/plan-my-trip/"
        secondaryLabel="Plan my family trip"
        priority
      />
      <ReviewsCarousel />

      <MoroccoMoments photos={photoGalleryItems.slice(0, 6)} title="Moments from Morocco" description="Photos from Morocco Travel Experts." />

      <div className="container feature-row" aria-label="Family destinations to explore">
        {homeHighlightDestinations.map((item) => <DestinationCard key={item.title} item={item} />)}
      </div>

      <TrustStrip />
      <HotelStrip />

      <section className="section">
        <div className="container">
          <div className="section-topline">
            <SectionHeading title="Family tours from Marrakech and Casablanca" description="Compare a week through the Sahara and Fes, ten days to Chefchaouen, or a two week Casablanca loop." />
            <Link className="text-link" href="/tours/">Compare routes and driving days <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
          <TourGrid tours={tours} limit={3} />
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <SectionHeading title="Plan around your children’s ages" />
          <div className="age-grid">{ageGroups.map((item) => <AgeGroupCard key={item.title} item={item} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-topline">
            <SectionHeading title="Fes, Chefchaouen and the Atlas" description="Add a medina stay in the north or a mountain outing from Marrakech." />
            <Link className="text-link" href="/destinations/">Browse destinations <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
          <div className="destination-grid">
            {destinationCards.filter((item) => !homeHighlightDestinations.includes(item)).map((item) => <DestinationCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="How to request a trip" />
          <div className="process-grid">
            <article className="process-card"><span className="process-number">01</span><h3>Send your dates</h3><p>Include your flight cities, children’s ages and one or two places you want to see.</p></article>
            <article className="process-card"><span className="process-number">02</span><h3>Read the route and quote</h3><p>Check the longest drives, named rooms, seats and the total cost for your group.</p></article>
            <article className="process-card"><span className="process-number">03</span><h3>Agree the details</h3><p>Ask for changes if you need them, then review the terms before paying a deposit.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="section-heading">
            <h2>Planning Morocco with kids</h2>
            <p>Work out where to go, how to split the drives and what to ask before you pay for a room or a desert camp.</p>
            <Link className="button button-outline" href="/morocco-with-kids/">Start with Morocco with kids <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
          <div className="related-grid" style={{ gridTemplateColumns: "1fr" }}>
            {homeGuides.map((article) => (
              <Link className="related-card" href={`/blog/${article.slug}/`} key={article.slug}>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="section-heading">
            <h2>Your tour operator in Morocco</h2>
            <p>Morocco Travel Experts has its head office in Aït Ben Haddou, near Ouarzazate.</p>
            <Link className="text-link" href="/about/">About Morocco Travel Experts <ArrowRight aria-hidden="true" size={16} /></Link>
          </div>
          <AuthorCard />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Questions about family trips" />
          <FAQAccordion items={homeFaqs} />
          <div style={{ marginTop: 22 }}><Link className="text-link" href="/faq/">See all family travel FAQs <ArrowRight aria-hidden="true" size={16} /></Link></div>
        </div>
      </section>

      <CalloutBand title="Get a route and quote for your dates" text="Send Morocco Travel Experts your flight cities, children’s ages and the places you want to visit." buttonLabel="Request an itinerary" />
    </>
  );
}
