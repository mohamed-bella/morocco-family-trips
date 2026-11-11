import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, MapPin, Route } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import JsonLd from "@/components/JsonLd";
import PaymentMethods from "@/components/PaymentMethods";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import MoroccoMoments from "@/components/MoroccoMoments";
import { Breadcrumbs, FAQAccordion, TourGrid } from "@/components/SiteComponents";
import EmailContact from "@/components/EmailContact";
import { articleBySlug } from "@/data/articles";
import { journeys } from "@/data/journeys";
import { tourBySlug, tours } from "@/data/tours";
import { photoGalleryItems } from "@/data/photos";
import { canonical, OFFICIAL_DRIVING_GUIDE_URL, OFFICIAL_HOTELS_URL, OPERATOR_ID, pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
const sections = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Day-by-day itinerary" },
  { id: "inclusions", label: "Stays & inclusions" },
  { id: "questions", label: "FAQs" },
  { id: "enquire", label: "Email us" },
];

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) return { title: "Tour not found" };
  return pageMetadata({ path: `tours/${tour.slug}`, title: tour.title, description: tour.description, image: tour.image, imageAlt: tour.imageAlt });
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) notFound();
  const journey = journeys[tour.slug];
  const url = canonical(`tours/${tour.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${url}#trip`,
    name: tour.title,
    description: tour.description,
    url,
    image: new URL(tour.image, url).href,
    mainEntityOfPage: url,
    touristType: "Families with children",
    tripOrigin: { "@type": "City", name: tour.start },
    itinerary: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: journey.places.map((name, index) => ({
        "@type": "ListItem", position: index + 1, item: { "@type": "Place", name },
      })),
    },
    provider: { "@id": OPERATOR_ID },
  };

  return (
    <div className="trip-page trip-detail-page">
      <JsonLd data={schema} />
      <Breadcrumbs items={[
        { label: "Family tours", href: "/morocco-family-tours/" },
        { label: "Compare routes", href: "/tours/" },
        { label: tour.cardTitle, href: `/tours/${tour.slug}/` },
      ]} />
      <header className="trip-header container">
        <p className="editorial-label">{tour.category}</p>
        <h1>{tour.title}</h1>
        <p className="editorial-intro">{tour.description}</p>
        <ul className="trip-facts" aria-label="Trip facts">
          <li><CalendarDays size={17} aria-hidden="true" />{tour.duration}</li>
          <li><MapPin size={17} aria-hidden="true" />{tour.start === tour.finish ? `${tour.start} round trip` : `${tour.start} to ${tour.finish}`}</li>
          <li><Route size={17} aria-hidden="true" />{journey.pace}</li>
        </ul>
        <ImageGallery images={journey.photos} />
        <a className="button button-primary trip-mobile-quote" href="#enquire">Email us for a quote <ArrowRight size={17} aria-hidden="true" /></a>
      </header>
      <ReviewsCarousel />

      <nav className="trip-jumpbar" aria-label="On this tour page">
        <div className="container">{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}</div>
      </nav>

      <div className="container trip-columns">
        <div className="trip-copy">
          <section id="overview" className="trip-section">
            <h2>Route and driving days</h2>
            <p>{tour.fit}</p>
            <p className="trip-route-line">{tour.route}</p>
            <p>{tour.format}</p>
            <h3>Stops along the route</h3>
            <ul className="editorial-links">{journey.destinations.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
          </section>
          <section id="itinerary" className="trip-section">
            <h2 id="itinerary-heading">Day-by-day itinerary</h2>
            <p className="editorial-muted">{tour.itineraryNote}</p>
            <table className="trip-itinerary-table" aria-labelledby="itinerary-heading">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Route</th>
                  <th scope="col">Plan</th>
                </tr>
              </thead>
              <tbody>
                {tour.days.map((day) => (
                  <tr key={day.day}>
                    <th scope="row">{day.day}</th>
                    <td>{day.title}</td>
                    <td>
                      <p>{day.details}</p>
                      {day.drive && <p className="trip-drive-note">{day.drive}</p>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <details className="trip-drive-details">
              <summary>Driving estimates and where to take breaks</summary>
              <ul>{tour.driving.map((item) => <li key={item}>{item}</li>)}</ul>
              <p><a href={OFFICIAL_DRIVING_GUIDE_URL}>See the operator’s Morocco driving guide</a></p>
            </details>
          </section>
          <section id="inclusions" className="trip-section">
            <h2>Stays and what to budget for</h2>
            <div className="trip-inclusions">
              <div><h3>What the operator lists</h3><ul>{tour.included.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><h3>Extras and items to confirm</h3><ul>{tour.notIncluded.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
            <h3>Hotels, riads and family rooms</h3>
            <ul>{tour.stays.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>See the <a href={OFFICIAL_HOTELS_URL}>operator’s hotel partners</a> and use the <Link href="/blog/morocco-family-trip-budget/">family trip cost worksheet</Link> to compare rooms and inclusions.</p>
          </section>
          <section id="questions" className="trip-section">
            <h2>Questions families ask</h2>
            <FAQAccordion items={tour.faqs} />
          </section>
          <section className="trip-section">
            <h2>Route references</h2>
            <ul className="editorial-links">
              <li><a href={tour.sourceUrl}>{tour.sourceLabel}</a></li>
              {journey.sources.map((source) => <li key={source.href}><a href={source.href}>{source.label}</a></li>)}
            </ul>
          </section>
        </div>

        <aside className="trip-sidebar">
          <section className="editorial-panel">
            <h2>Ask about this family tour</h2>
            <p>Tell Morocco Travel Experts your dates and children’s ages. Ask for a written route and quote with travel times, room layouts and child seats.</p>
            <a className="button button-primary" href="#enquire">Email us for a quote <ArrowRight size={17} aria-hidden="true" /></a>
            <Link className="editorial-panel-link" href="/reviews/">Read verified operator reviews</Link>
          </section>
          <section className="editorial-panel">
            <h2>Before you choose this route</h2>
            <ul className="editorial-links">{journey.guides.map((slug) => <li key={slug}><Link href={`/blog/${slug}/`}>{articleBySlug[slug].title}</Link></li>)}</ul>
          </section>
        </aside>
      </div>

      <section id="enquire" className="section trip-enquiry">
        <div className="container">
          <EmailContact subject={tour.title} />
          <PaymentMethods />
        </div>
      </section>
      <MoroccoMoments
        photos={photoGalleryItems.slice(6)}
        title="More photos from Morocco"
        description="From the Morocco Travel Experts collection."
      />
      <section className="section container editorial-related">
        <h2>Compare other family tours</h2>
        <TourGrid tours={journey.alternatives.map((slug) => tourBySlug[slug])} />
        <Link href="/tours/" className="text-link">Compare all Morocco family tours <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}
