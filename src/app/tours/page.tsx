import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/SiteComponents";
import TourFilters from "@/components/TourFilters";
import { tours } from "@/data/tours";
import { canonical, pageMetadata, PUBLISHER_ID } from "@/lib/site";

const title = "Compare 4, 7, 10 and 14 Day Morocco Family Tours";
const description = "Compare four Morocco family routes by start and finish, time on the road and nights near the Sahara. See the trade-offs before picking a tour.";

export const metadata = pageMetadata({ path: "tours", title, description });

const routesByLength = [...tours].sort((a, b) => a.days.length - b.days.length);
const summaries = routesByLength.map(({ slug, title, cardTitle, duration, route, start, description, image, imageAlt, category }) => ({
  slug, title, cardTitle, duration, route, start, description, image, imageAlt, category,
}));

export default function ToursPage() {
  return (
    <div className="trip-page">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${canonical("tours")}#page`,
        name: title,
        description,
        url: canonical("tours"),
        publisher: { "@id": PUBLISHER_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: routesByLength.map((tour, index) => ({
            "@type": "ListItem", position: index + 1, name: tour.title, url: canonical(`tours/${tour.slug}`),
          })),
        },
      }} />
      <Breadcrumbs items={[{ label: "Family tours", href: "/morocco-family-tours/" }, { label: "Compare routes", href: "/tours/" }]} />
      <section className="container guide-index">
        <header className="guide-index-header">
          <h1>Compare Morocco Family Tours by Length</h1>
          <p className="editorial-intro">Start with your flight city and the nights you have. Check the longest transfer before you choose a route.</p>
        </header>

        <div className="guide-table-scroll" role="region" aria-label="Family tour comparison" tabIndex={0}>
          <table className="guide-data-table">
            <caption>Four family routes, from the shortest Sahara loop to two weeks across Morocco</caption>
            <thead><tr><th scope="col">Tour</th><th scope="col">Start</th><th scope="col">Finish</th><th scope="col">What to plan around</th></tr></thead>
            <tbody>
              {routesByLength.map((tour) => (
                <tr key={tour.slug}>
                  <th scope="row"><Link href={`/tours/${tour.slug}/`}>{tour.cardTitle}</Link></th>
                  <td>{tour.start}</td>
                  <td>{tour.finish}</td>
                  <td>{tour.comparison}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="content-section editorial-crosslinks">
          <h2>Decide how many nights to allow</h2>
          <p>See the <Link href="/morocco-family-itineraries/">overnight plans for 7, 10 and 14 days</Link> before booking flights. If you want a week with shorter transfers, start with <Link href="/blog/7-days-in-morocco-with-kids-without-sahara/">Marrakech and Essaouira without the Sahara</Link>.</p>
        </section>

        <TourFilters tours={summaries} />
      </section>
    </div>
  );
}
