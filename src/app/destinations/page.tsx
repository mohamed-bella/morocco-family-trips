import Link from "next/link";
import { Breadcrumbs, DestinationCard } from "@/components/SiteComponents";
import { destinationCards } from "@/data/tours";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "destinations",
  title: "Where to Go in Morocco with Kids | City, Coast and Sahara",
  description: "Choose family stops in Marrakech, Fes, Chefchaouen, Essaouira, the Atlas Mountains or the Sahara. See which places fit the same route.",
});

export default function DestinationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Destinations", href: "/destinations/" }]} />
      <section className="section section-paper">
        <div className="container">
          <header className="guide-index-header">
            <h1>Where to Go in Morocco with Kids</h1>
            <p className="editorial-intro">Choose which places to combine before deciding how many nights to book in each one.</p>
          </header>
          <div className="destination-grid">
            {destinationCards.map((item) => <DestinationCard key={item.title} item={item} />)}
          </div>
          <section className="content-section">
            <h2>Places that fit on the same trip</h2>
            <ul className="editorial-links">
              <li>From Marrakech, take an Atlas day trip or spend two nights on the coast. See the <Link href="/blog/7-days-in-morocco-with-kids-without-sahara/">Marrakech and Essaouira week</Link>.</li>
              <li>On the way from Marrakech to Merzouga, break the drive in kasbah country. Compare the <Link href="/blog/morocco-family-road-trip-stops/">Dades, Todra and Skoura stops</Link>.</li>
              <li>For the north, use Fes and Chefchaouen as separate stays. Check the overnight plan on the <Link href="/tours/14-day-morocco-family-tour/">Casablanca circuit through Tangier and Fes</Link>.</li>
            </ul>
            <p><Link href="/family-guide/#destinations">Browse all city and region guides</Link></p>
          </section>
        </div>
      </section>
    </>
  );
}
