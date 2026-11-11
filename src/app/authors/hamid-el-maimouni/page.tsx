import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, ContentSection } from "@/components/SiteComponents";
import { AUTHOR_ID, AUTHOR_NAME, AUTHOR_PATH, canonical, OPERATOR_ID, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: AUTHOR_PATH,
  title: "Hamid El Maimouni | Morocco Travel Experts Founder",
  description: "Meet Hamid El Maimouni, founder of Morocco Travel Experts and a local guide and trip planner in Morocco.",
});

export default function AuthorPage() {
  const url = canonical(AUTHOR_PATH);

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url,
        mainEntity: { "@type": "Person", "@id": AUTHOR_ID, name: AUTHOR_NAME, url, worksFor: { "@id": OPERATOR_ID } },
      }} />
      <Breadcrumbs items={[{ label: "Our team", href: "/our-team/" }, { label: AUTHOR_NAME, href: url }]} />
      <section className="section section-paper">
        <div className="container content-page">
          <div>
            <p className="eyebrow">Morocco Travel Experts</p>
            <h1>{AUTHOR_NAME}</h1>
            <p className="page-lead">Founder and local travel planner at Morocco Travel Experts.</p>
            <ContentSection section={{
              heading: "Local guide and tour operator",
              paragraphs: ["Morocco Travel Experts describes Hamid as a licensed local guide born and based in Morocco. The company lists Arabic, Darija, English, French and Spanish among his languages."],
              links: [{ label: "Read the operator’s team and company profile", href: "https://moroccotravelexperts.com/about-us/" }],
            }} />
            <ContentSection section={{
              heading: "Planning a trip with the team",
              paragraphs: ["Send your dates and children’s ages to the planning team. The written itinerary can confirm who will drive and guide you, where you’ll stay and which services are included."],
              links: [
                { label: "About the company that operates Morocco Family Trips", href: "/about/" },
                { label: "Browse the Morocco family travel guides", href: "/family-guide/" },
              ],
            }} />
            <Link className="button button-primary" href="/plan-my-trip/">Request a family itinerary <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
