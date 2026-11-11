import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, Clock3, MapPin, ShieldCheck, UsersRound } from "lucide-react";
import type { EditorialPageData, PageSection } from "@/data/content";
import type { TourSummary } from "@/data/tours";
import { BRAND, OPERATOR, SITE_URL, WHATSAPP_URL } from "@/lib/site";
import JsonLd from "./JsonLd";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const fullItems = [{ label: "Home", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: new URL(item.href, SITE_URL).toString() } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav className="breadcrumbs container" aria-label="Breadcrumb">
        <ol>
          {fullItems.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              {index > 0 && <span className="crumb-separator" aria-hidden="true">/</span>}
              {item.href && index < fullItems.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function HeroSplit({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryHref = "/plan-my-trip/",
  primaryLabel = "Plan my family trip",
  secondaryHref = "/tours/",
  secondaryLabel = "Explore tour ideas",
  note,
  priority = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  note?: string;
  priority?: boolean;
}) {
  return (
    <section className={`hero-split container${image ? "" : " no-image"}`}>
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-lead">{description}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href={primaryHref}>{primaryLabel}<ArrowRight aria-hidden="true" size={18} /></Link>
          <Link className="button button-outline" href={secondaryHref}>{secondaryLabel}</Link>
        </div>
        {note && <p className="hero-note">{note}</p>}
        <div className="hero-proof"><ShieldCheck aria-hidden="true" size={17} /><span>Operated by <strong>{OPERATOR}</strong></span></div>
      </div>
      {image && <div className="hero-image-wrap">
        <Image className="hero-image" src={image} alt={imageAlt} fill sizes="(max-width: 800px) 100vw, 52vw" preload={priority} />
        <div className="image-caption"><span className="caption-rule" />{imageAlt}</div>
      </div>}
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-heading${align === "center" ? " is-centered" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function TrustStrip() {
  const items = [
    { icon: <MapPin aria-hidden="true" size={18} />, title: "Planned in Morocco", detail: "Local operator, local route knowledge" },
    { icon: <UsersRound aria-hidden="true" size={18} />, title: "Made for your group", detail: "Family details shape the itinerary" },
    { icon: <ShieldCheck aria-hidden="true" size={18} />, title: "Clear before you book", detail: "Request the route and inclusions in writing" },
    { icon: <Clock3 aria-hidden="true" size={18} />, title: "A pace that fits", detail: "Ask for breaks, rest nights and age-aware days" },
  ];
  return (
    <section className="trust-strip container" aria-label="How family trip planning works">
      {items.map((item) => <div className="trust-item" key={item.title}><span className="trust-icon">{item.icon}</span><div><strong>{item.title}</strong><span>{item.detail}</span></div></div>)}
    </section>
  );
}

export function FeatureCard({ number, title, description, icon }: { number: string; title: string; description: string; icon: ReactNode }) {
  return <article className="feature-card"><span className="feature-number">{number}</span><span className="feature-icon">{icon}</span><h3>{title}</h3><p>{description}</p></article>;
}

export function TourCard({ tour }: { tour: TourSummary }) {
  const href = "/tours/" + tour.slug + "/";
  return (
    <article className="tour-card">
      <Link className="tour-image" href={href} aria-label={"Open " + tour.cardTitle}>
        <Image src={tour.image} alt={tour.imageAlt} fill sizes="(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 560px" />
      </Link>
      <div className="tour-card-body">
        <p className="tour-card-category">{tour.category}</p>
        <h3><Link className="tour-card-title-link" href={href}>{tour.cardTitle}</Link></h3>
        <ul className="tour-card-facts" aria-label="Route facts" role="list">
          <li><Clock3 aria-hidden="true" size={15} />{tour.duration}</li>
          <li><MapPin aria-hidden="true" size={15} />From {tour.start}</li>
        </ul>
        <p className="tour-card-description">{tour.description}</p>
        <Link className="button button-primary" href={href} aria-label={"View " + tour.cardTitle}>
          View family tour <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </article>
  );
}

export function TourGrid({ tours, limit }: { tours: TourSummary[]; limit?: number }) {
  const visible = limit ? tours.slice(0, limit) : tours;
  return <div className="tour-grid">{visible.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div>;
}

export function DestinationCard({ item }: { item: { title: string; description: string; image: string; imageAlt: string; href: string } }) {
  return (
    <Link href={item.href} className="destination-card">
      <div className="destination-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 650px) 90vw, (max-width: 1000px) 44vw, 30vw" /></div>
      <div className="destination-copy"><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">Explore {item.title} <ArrowRight aria-hidden="true" size={16} /></span></div>
    </Link>
  );
}

export function AgeGroupCard({ item }: { item: { title: string; label: string; description: string; href: string } }) {
  return <article className="age-card"><span className="age-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><Link href={item.href} className="text-link">Read the family guide <ArrowRight aria-hidden="true" size={16} /></Link></article>;
}

export function ReviewCard({ quote, name, source, date }: { quote: string; name: string; source: string; date: string }) {
  return (
    <article className="review-card">
      <span className="review-kicker">Guest review</span>
      <blockquote>“{quote}”</blockquote>
      <div className="review-byline"><div><strong>{name}</strong><span>{source} · {date}</span></div><Check aria-hidden="true" size={17} /></div>
    </article>
  );
}

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return <div className="faq-list">{items.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}<span className="faq-plus" aria-hidden="true" /></summary><div className="faq-answer"><p>{item.answer}</p></div></details>)}</div>;
}

export function ContentSection({ section, id }: { section: PageSection; id?: string }) {
  return (
    <section className="content-section" id={id}>
      <h2>{section.heading}</h2>
      {section.paragraphs.map((paragraph, index) => <p key={`${section.heading}-${index}`}>{paragraph}</p>)}
      {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
      {section.note && <aside className="content-note">{section.note}</aside>}
      {section.links && (
        <ul className="editorial-links">
          {section.links.map(({ href, label }) => (
            <li key={href}>{href.startsWith("/") ? <Link href={href}>{label}</Link> : <a href={href}>{label}</a>}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function AuthorCard({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`author-card${compact ? " is-compact" : ""}`}>
      <div className="author-monogram" aria-hidden="true">HE</div>
      <div>
        <p className="eyebrow">Local planning contact</p>
        <h2>Hamid El Maimouni</h2>
        <p>Founder and local travel planner at Morocco Travel Experts. The operator describes Hamid as a licensed local guide, born and based in Morocco.</p>
        <Link className="text-link" href="/authors/hamid-el-maimouni/">Read Hamid’s profile <ArrowRight aria-hidden="true" size={16} /></Link>
      </div>
    </section>
  );
}

export function WhatsAppCTA({ compact = false }: { compact?: boolean }) {
  return <a className={`whatsapp-cta${compact ? " is-compact" : ""}`} href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span className="whatsapp-icon" aria-hidden="true">↗</span><span><strong>Prefer a quick message?</strong><small>Chat with Morocco Travel Experts on WhatsApp</small></span><ArrowUpRight aria-hidden="true" size={18} /></a>;
}

export function EditorialPageView({ page, breadcrumbs }: { page: EditorialPageData; breadcrumbs: Crumb[] }) {
  const hasEmailContact = page.slug === "contact" || page.slug === "plan-my-trip";
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <HeroSplit eyebrow={page.eyebrow} title={page.title} description={page.intro} image={page.image} imageAlt={page.imageAlt} primaryHref={hasEmailContact ? "#email-us" : "/plan-my-trip/"} primaryLabel={hasEmailContact ? "Send us an email" : "Plan my family trip"} secondaryHref="/morocco-family-tours/" secondaryLabel="Browse family tours" />
      {page.sections.length > 0 && <div className="content-page container">
        <div className="editorial-sections">{page.sections.map((section) => <ContentSection key={section.heading} section={section} />)}</div>
        <aside className="content-sidebar"><AuthorCard compact /><WhatsAppCTA compact /></aside>
      </div>}
    </>
  );
}

export function CalloutBand({ title, text, buttonHref = "/plan-my-trip/", buttonLabel = "Plan my trip" }: { title: string; text: string; buttonHref?: string; buttonLabel?: string }) {
  return <section className="callout-band"><div className="container callout-inner"><div><h2>{title}</h2><p>{text}</p></div><Link className="button button-light" href={buttonHref}>{buttonLabel}<ArrowRight aria-hidden="true" size={17} /></Link></div></section>;
}

export function TrustNote() {
  return <p className="operator-disclosure">{BRAND} is planned and operated by <a href="https://moroccotravelexperts.com/" target="_blank" rel="noreferrer">{OPERATOR}</a>.</p>;
}
