import Link from "next/link";
import { Breadcrumbs } from "@/components/SiteComponents";
import JsonLd from "@/components/JsonLd";
import { articles, type ArticleCategory } from "@/data/articles";
import { canonical, pageMetadata, PUBLISHER_ID } from "@/lib/site";

const title = "Morocco Family Travel Guide | All Articles";
const description = "Find Morocco family travel guides by topic. Plan your route, compare costs and transport, and choose stops in the cities, coast, Atlas and Sahara.";

const categories: { id: ArticleCategory; label: string }[] = [
  { id: "planning", label: "Trip planning and costs" },
  { id: "transport", label: "Trains, coaches and car seats" },
  { id: "destinations", label: "Cities and medinas" },
  { id: "coast", label: "Coast and beaches" },
  { id: "mountains", label: "Mountains and day trips" },
  { id: "desert", label: "Sahara and stops on the way" },
];
const groups = categories.map(({ id, label }) => ({
  id,
  label,
  articles: articles.filter((article) => article.category === id),
}));

export const metadata = pageMetadata({ path: "family-guide", title, description });

export default function FamilyGuidePage() {
  return (
    <div className="guide-page">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${canonical("family-guide")}#page`,
        name: title,
        description,
        url: canonical("family-guide"),
        publisher: { "@id": PUBLISHER_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: groups.flatMap((group) => group.articles).map((article, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: article.title,
            url: canonical(`blog/${article.slug}`),
          })),
        },
      }} />
      <Breadcrumbs items={[{ label: "Family Guide", href: "/family-guide/" }]} />
      <div className="container guide-article guide-directory">
        <header className="guide-index-header">
          <h1>Morocco Family Travel Guide</h1>
          <p className="editorial-intro">Find a guide for the decision you’re making, from which airport to fly into to whether a desert camp works for your children.</p>
          <p>Planning your first trip? Start with <Link href="/morocco-with-kids/">Morocco with kids</Link> or compare <Link href="/morocco-family-itineraries/">routes for 7, 10 and 14 days</Link>.</p>
        </header>

        <nav className="guide-toc" aria-label="Guide topics">
          <h2>Browse by topic</h2>
          <ul className="editorial-links">
            {groups.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ul>
        </nav>

        {groups.map(({ id, label, articles: groupArticles }) => (
          <section className="guide-directory-group" id={id} key={id} aria-labelledby={`${id}-heading`}>
            <h2 id={`${id}-heading`}>{label}</h2>
            <ul className="guide-directory-list">
              {groupArticles.map((article) => (
                <li key={article.slug}>
                  <h3><Link href={`/blog/${article.slug}/`} prefetch={false}>{article.title}</Link></h3>
                  <p>{article.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <aside className="guide-more">
          <h2>Plan around your family</h2>
          <ul>
            <li><Link href="/morocco-with-toddlers/">Morocco with toddlers</Link></li>
            <li><Link href="/morocco-with-teenagers/">Morocco with teenagers</Link></li>
            <li><Link href="/morocco-family-travel-tips/">Checklist before you fly</Link></li>
            <li><Link href="/tours/">Compare family tour routes</Link></li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
