import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/SiteComponents";
import JsonLd from "@/components/JsonLd";
import type { Article, ArticleContextLink } from "@/data/articles";
import { articles, articleBySlug } from "@/data/articles";
import type { PageSection } from "@/data/content";
import { tourBySlug } from "@/data/tours";
import { BRAND, canonical, pageMetadata, PUBLISHER_ID, WEBSITE_ID } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

function GuideSection({ section, id, className = "", contextLinks = [] }: { section: PageSection; id: string; className?: string; contextLinks?: ArticleContextLink[] }) {
  return (
    <section className={`content-section guide-topic-section ${className}`} id={id}>
      <h2>{section.heading}</h2>
      {section.paragraphs.map((paragraph, index) => <p key={`${section.heading}-${index}`}>{paragraph}</p>)}
      {contextLinks.map((contextLink, index) => <p key={`${contextLink.href}-${index}`}>{contextLink.before}<Link href={contextLink.href}>{contextLink.linkText}</Link>{contextLink.after}</p>)}
      {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
      {section.note && <aside className="guide-inline-note">{section.note}</aside>}
    </section>
  );
}

function GuideTable({ article }: { article: Article }) {
  return (
    <section className="guide-table-section" id="article-table">
      <h2>{article.table.heading}</h2>
      <div className="guide-table-scroll" role="region" aria-label={`${article.table.heading} table`} tabIndex={0}>
        <table className="guide-data-table">
          <caption>{article.table.caption}</caption>
          <thead><tr>{article.table.headers.map((heading) => <th key={heading} scope="col">{heading}</th>)}</tr></thead>
          <tbody>
            {article.table.rows.map((row) => (
              <tr key={row[0]}>{row.map((cell, index) => index === 0
                ? <th key={cell} scope="row">{cell}</th>
                : <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function GuidePhotos({ article }: { article: Article }) {
  return (
    <section className="guide-photo-section" aria-label="Photos for this guide">
      <div className="guide-photo-grid">
        {article.photos.map((photo) => (
          <figure key={photo.src}>
            <div className="guide-photo-image"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 560px) 90vw, 360px" /></div>
            <figcaption>{photo.caption}</figcaption>
            {photo.credit && (
              <small className="guide-photo-credit">
                Photo: <a href={photo.credit.sourceUrl} target="_blank" rel="noreferrer">{photo.credit.photographer}</a> · <a href={photo.credit.licenseUrl} target="_blank" rel="noreferrer">{photo.credit.license}</a> · {photo.credit.changes}
              </small>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

function GuideFAQs({ article }: { article: Article }) {
  return (
    <section className="guide-faq" id="family-faqs">
      <h2>Common questions</h2>
      {article.faqs.map((faq) => (
        <details className="guide-faq-item" key={faq.question}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </section>
  );
}

function LocalNote({ article }: { article: Article }) {
  return <aside className="guide-local-note"><strong>Planning note</strong><p>{article.localNote}</p></aside>;
}

function GuideVideo({ article }: { article: Article }) {
  if (!article.video) return null;
  return (
    <figure className="guide-video">
      <div className="guide-video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${article.video.id}`}
          title={article.video.title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption>{article.video.caption}</figcaption>
    </figure>
  );
}

function ArticleBody({ article }: { article: Article }) {
  const renderSection = (section: PageSection, index: number, className: string) => (
    <GuideSection
      key={section.heading}
      section={section}
      id={`section-${index + 1}`}
      className={className}
      contextLinks={article.contextLinks.filter((link) => link.sectionIndex === index)}
    />
  );

  if (article.layout === "sample-itinerary") {
    return (
      <>
        <GuideTable article={article} />
        <LocalNote article={article} />
        {article.sections.map((section, index) => renderSection(section, index, "guide-route-entry"))}
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "camp-checklist") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-route-entry")}
        <GuideTable article={article} />
        {article.sections.slice(1).map((section, index) => renderSection(section, index + 1, "guide-route-entry"))}
        <LocalNote article={article} />
        <GuideFAQs article={article} />
        <GuidePhotos article={article} />
      </>
    );
  }

  if (article.layout === "duration") {
    return (
      <>
        <GuideTable article={article} />
        <div className="guide-duration-sections">
          {article.sections.map((section, index) => renderSection(section, index, `guide-duration-section guide-duration-section-${index + 1}`))}
        </div>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "packing") {
    return (
      <>
        <div className="guide-packing-intro"><h2>Start with the bag that stays within reach</h2><p>Use the table as a short family checklist, then add items for your route, forecast and each child’s routine.</p></div>
        <GuideTable article={article} />
        <div className="guide-packing-sections">
          {article.sections.map((section, index) => renderSection(section, index, "guide-packing-section"))}
        </div>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "seasons") {
    return (
      <>
        <GuideTable article={article} />
        <LocalNote article={article} />
        <div className="guide-season-sections">
          {article.sections.map((section, index) => renderSection(section, index, `guide-season-section guide-season-section-${index + 1}`))}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "train") {
    return (
      <>
        <GuideTable article={article} />
        <ol className="guide-transport-sections">
          {article.sections.map((section, index) => <li key={section.heading}><span>{article.slug === "morocco-by-train-with-kids" ? "Rail planning" : "Family transport"} · {String(index + 1).padStart(2, "0")}</span>{renderSection(section, index, "guide-transport-section")}</li>)}
        </ol>
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "stroller") {
    return (
      <>
        <GuideTable article={article} />
        <div className="guide-stroller-sections">
          {article.sections.map((section, index) => renderSection(section, index, "guide-stroller-section"))}
        </div>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "stay") {
    return (
      <>
        <GuideTable article={article} />
        <LocalNote article={article} />
        <div className="guide-stay-sections">
          {article.sections.map((section, index) => renderSection(section, index, "guide-stay-section"))}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "food") {
    return (
      <>
        <GuideTable article={article} />
        <LocalNote article={article} />
        <div className="guide-food-sections">
          {article.sections.map((section, index) => renderSection(section, index, "guide-food-section"))}
        </div>
        <GuideFAQs article={article} />
        <GuidePhotos article={article} />
      </>
    );
  }

  if (article.layout === "desert-choice") {
    return (
      <>
        <GuideTable article={article} />
        <div className="guide-desert-choice-sections">
          {article.sections.map((section, index) => renderSection(section, index, "guide-desert-choice-section"))}
        </div>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "coast") {
    return (
      <>
        <GuideTable article={article} />
        <ol className="guide-coast-sections">
          {article.sections.map((section, index) => (
            <li key={section.heading}>
              <span>{article.slug === "essaouira-with-kids" ? "Essaouira" : "Beach planning"} · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index, "guide-coast-section")}
            </li>
          ))}
        </ol>
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "mountain-day") {
    return (
      <>
        <GuideTable article={article} />
        <LocalNote article={article} />
        <div className="guide-mountain-sections">
          {article.sections.map((section, index) => renderSection(section, index, "guide-mountain-section"))}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "ramadan") {
    return (
      <>
        <GuideTable article={article} />
        <LocalNote article={article} />
        <div className="guide-ramadan-sections">
          {article.sections.map((section, index) => renderSection(section, index, "guide-ramadan-section"))}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "city-guide") {
    return (
      <>
        <GuideTable article={article} />
        <div className="guide-city-sections">
          {article.sections.map((section, index) => renderSection(section, index, "guide-city-section"))}
        </div>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "casablanca-plan") {
    return (
      <>
        <GuideTable article={article} />
        <ol className="guide-casablanca-plan">
          {article.sections.map((section, index) => (
            <li key={section.heading}>
              <span>{index < 2 ? "Casablanca plan · " + String(index + 1).padStart(2, "0") : "Family note"}</span>
              {renderSection(section, index, "guide-casablanca-plan-section")}
            </li>
          ))}
        </ol>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "rabat-heritage") {
    return (
      <>
        <LocalNote article={article} />
        <GuideTable article={article} />
        <div className="guide-rabat-heritage">
          {article.sections.map((section, index) => (
            <div key={section.heading} className="guide-rabat-heritage-stop">
              <span className="guide-rabat-heritage-number">{String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index, "guide-rabat-heritage-section")}
            </div>
          ))}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "tangier-north") {
    return (
      <>
        <GuidePhotos article={article} />
        <GuideTable article={article} />
        <LocalNote article={article} />
        <div className="guide-tangier-north">
          {article.sections.map((section, index) =>
            renderSection(section, index, "guide-tangier-north-section guide-tangier-north-section-" + (index + 1))
          )}
        </div>
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "casablanca-rabat-route") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-route-choice-intro")}
        <GuideTable article={article} />
        <ol className="guide-route-choice">
          {article.sections.slice(1).map((section, index) => (
            <li key={section.heading}>
              <span>Route decision · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-route-choice-section")}
            </li>
          ))}
        </ol>
        <GuideFAQs article={article} />
        <LocalNote article={article} />
        <GuidePhotos article={article} />
      </>
    );
  }

  if (article.layout === "baby-rhythm") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-baby-opening")}
        <GuideTable article={article} />
        <ol className="guide-baby-rhythm">
          {article.sections.slice(1).map((section, index) => (
            <li key={section.heading}>
              <span>Baby travel rhythm · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-baby-rhythm-section")}
            </li>
          ))}
        </ol>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "seat-checklist") {
    return (
      <>
        <LocalNote article={article} />
        <GuideTable article={article} />
        <ol className="guide-seat-checklist">
          {article.sections.map((section, index) => (
            <li key={section.heading}>
              <span>Seat check · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index, "guide-seat-checklist-section")}
            </li>
          ))}
        </ol>
        <GuideFAQs article={article} />
        <GuidePhotos article={article} />
      </>
    );
  }

  if (article.layout === "beach-selector") {
    return (
      <>
        <GuidePhotos article={article} />
        {article.sections.map((section, index) =>
          renderSection(section, index, "guide-beach-selector-section guide-beach-selector-section-" + (index + 1))
        )}
        <GuideTable article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "jemaa-timeline") {
    return (
      <>
        <GuideTable article={article} />
        <LocalNote article={article} />
        <ol className="guide-jemaa-timeline">
          {article.sections.map((section, index) => (
            <li key={section.heading}>
              <span>{index === 0 ? "Arrival" : index === article.sections.length - 1 ? "Return" : "Square visit · " + String(index).padStart(2, "0")}</span>
              {renderSection(section, index, "guide-jemaa-timeline-section")}
            </li>
          ))}
        </ol>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "fes-medina-route") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-fes-opening")}
        <GuideTable article={article} />
        <div className="guide-fes-medina-route">
          {article.sections.slice(1).map((section, index) => (
            <div className="guide-fes-route-stop" key={section.heading}>
              <span>Fes field note · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-fes-route-section")}
            </div>
          ))}
        </div>
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "chefchaouen-two-day") {
    return (
      <>
        <GuideTable article={article} />
        <div className="guide-chefchaouen-plan">
          {article.sections.slice(0, 3).map((section, index) => (
            <div className="guide-chefchaouen-stop" key={section.heading}>
              <span>In the blue city · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index, "guide-chefchaouen-section")}
            </div>
          ))}
        </div>
        <GuidePhotos article={article} />
        <h2 className="guide-chefchaouen-outside-title">Beyond the medina</h2>
        <div className="guide-chefchaouen-outside">
          {article.sections.slice(3).map((section, index) =>
            renderSection(section, index + 3, "guide-chefchaouen-outside-section")
          )}
        </div>
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "marrakech-family-days") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-marrakech-days-opening")}
        <GuideTable article={article} />
        <ol className="guide-marrakech-days">
          {article.sections.slice(1, 4).map((section, index) => (
            <li key={section.heading}>
              <span>Day {index + 1} · Family plan</span>
              {renderSection(section, index + 1, "guide-marrakech-day-section")}
            </li>
          ))}
        </ol>
        <div className="guide-marrakech-family-notes">
          {article.sections.slice(4).map((section, index) =>
            renderSection(section, index + 4, "guide-marrakech-family-note")
          )}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "family-budget-workbook") {
    return (
      <>
        <div className="guide-budget-intro">
          <h2>Fill this in with quotes for your dates</h2>
          <p>Use one column per provider and write down the full group total. Keep the itinerary beside the figure so every quote is being compared on the same basis.</p>
        </div>
        <GuideTable article={article} />
        <p className="guide-budget-equation">Trip total = travel + accommodation + local transport + activities + meals + daily spending</p>
        <ol className="guide-budget-ledger">
          {article.sections.map((section, index) => (
            <li key={section.heading}>
              <span>Budget line {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index, "guide-budget-ledger-section")}
            </li>
          ))}
        </ol>
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "agadir-bay-notebook") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-agadir-opening")}
        <ol className="guide-agadir-decisions">
          {article.sections.slice(1, 4).map((section, index) => (
            <li key={section.heading}>
              <span>Coast decision · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-agadir-decision")}
            </li>
          ))}
        </ol>
        <div className="guide-agadir-stay-notes">
          {article.sections.slice(4).map((section, index) =>
            renderSection(section, index + 4, "guide-agadir-stay-note")
          )}
        </div>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "meknes-two-day") {
    return (
      <>
        <GuideTable article={article} />
        <div className="guide-meknes-plan">
          <section className="guide-meknes-day">
            <h2>Day one · Gate, square and historic centre</h2>
            {article.sections.slice(0, 3).map((section, index) =>
              renderSection(section, index, "guide-meknes-stop")
            )}
          </section>
          <section className="guide-meknes-day">
            <h2>Day two · Volubilis or a slower city morning</h2>
            {article.sections.slice(3).map((section, index) =>
              renderSection(section, index + 3, "guide-meknes-stop")
            )}
          </section>
        </div>
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "volubilis-fieldbook") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-volubilis-opening")}
        <GuideTable article={article} />
        <ol className="guide-volubilis-fieldbook">
          {article.sections.slice(1).map((section, index) => (
            <li key={section.heading}>
              <span>Field note · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-volubilis-fieldnote")}
            </li>
          ))}
        </ol>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "ifrane-season-wheel") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-ifrane-opening")}
        <GuideTable article={article} />
        <div className="guide-ifrane-seasons">
          <h2>Choose the season that matches your family</h2>
          <div className="guide-ifrane-season-grid">
            {article.sections.slice(1, 5).map((section, index) =>
              renderSection(section, index + 1, "guide-ifrane-season guide-ifrane-season-" + (index + 1))
            )}
          </div>
        </div>
        {renderSection(article.sections[5], 5, "guide-ifrane-outing")}
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "ouarzazate-film-route") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-ouarzazate-opening")}
        <div className="guide-ouarzazate-chapters">
          {article.sections.slice(1, 4).map((section, index) => (
            <article className="guide-ouarzazate-chapter" key={section.heading}>
              <span>Scene {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-ouarzazate-scene")}
            </article>
          ))}
        </div>
        <h2 className="guide-ouarzazate-route-heading">Family route notes</h2>
        <div className="guide-ouarzazate-route-notes">
          {article.sections.slice(4).map((section, index) =>
            renderSection(section, index + 4, "guide-ouarzazate-route-note")
          )}
        </div>
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "coach-boarding-plan") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-coach-opening")}
        <ol className="guide-coach-boarding">
          {article.sections.slice(1).map((section, index) => (
            <li key={section.heading}>
              <span>Boarding card · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-coach-card")}
            </li>
          ))}
        </ol>
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "taroudant-wall-loop") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-taroudant-opening")}
        <ol className="guide-taroudant-loop">
          {article.sections.slice(1, 4).map((section, index) => (
            <li key={section.heading}>
              <span className="guide-taroudant-marker">Wall walk · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-taroudant-stop")}
            </li>
          ))}
        </ol>
        <div className="guide-taroudant-outing">
          {article.sections.slice(4).map((section, index) => renderSection(section, index + 4, "guide-taroudant-outing-note"))}
        </div>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "paradise-daycard") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-paradise-opening")}
        <GuideTable article={article} />
        <section className="guide-paradise-itinerary" aria-label="Family outing plan">
          <h2>A flexible valley day</h2>
          <div className="guide-paradise-daycards">
            {article.sections.slice(1, 4).map((section, index) => (
              <article className="guide-paradise-daycard" key={section.heading}>
                <span>Outing note · {String(index + 1).padStart(2, "0")}</span>
                {renderSection(section, index + 1, "guide-paradise-card-copy")}
              </article>
            ))}
          </div>
        </section>
        {article.sections.slice(4).map((section, index) => renderSection(section, index + 4, "guide-paradise-return-note"))}
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "skoura-palmroute") {
    return (
      <>
        <GuidePhotos article={article} />
        <GuideTable article={article} />
        <LocalNote article={article} />
        <ol className="guide-skoura-palmroute">
          {article.sections.map((section, index) => (
            <li key={section.heading}>
              <span className="guide-skoura-stop-number">{String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index, "guide-skoura-stop")}
            </li>
          ))}
        </ol>
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "dades-roadbook") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-dades-opening")}
        <div className="guide-dades-roadbook">
          {article.sections.slice(1, 5).map((section, index) => (
            <article className="guide-dades-log" key={section.heading}>
              <span>Road note · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-dades-log-copy")}
            </article>
          ))}
        </div>
        {renderSection(article.sections[5], 5, "guide-dades-route-end")}
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "todgha-walknotes") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-todgha-opening")}
        <GuideTable article={article} />
        <div className="guide-todgha-fieldnotes">
          {article.sections.slice(1).map((section, index) => (
            <div className="guide-todgha-fieldnote" key={section.heading}>
              <span>Family field note {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-todgha-fieldnote-copy")}
            </div>
          ))}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "ouzoud-stepguide") {
    return (
      <>
        <GuideTable article={article} />
        <ol className="guide-ouzoud-stepguide">
          {article.sections.map((section, index) => (
            <li key={section.heading}>
              <span className="guide-ouzoud-step-count">Step {index + 1}</span>
              {renderSection(section, index, "guide-ouzoud-step-copy")}
            </li>
          ))}
        </ol>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "ourika-valley-daybook") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-ourika-opening")}
        <ol className="guide-ourika-daybook">
          {article.sections.slice(1, 4).map((section, index) => (
            <li key={section.heading}>
              <span>Daybook · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-ourika-entry")}
            </li>
          ))}
        </ol>
        <div className="guide-ourika-return">
          {article.sections.slice(4).map((section, index) => renderSection(section, index + 4, "guide-ourika-return-note"))}
        </div>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "ait-benhaddou-heritage-walk") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-aitbenhaddou-opening")}
        <GuideTable article={article} />
        <ol className="guide-aitbenhaddou-walk">
          {article.sections.slice(1).map((section, index) => (
            <li key={section.heading}>
              <span className="guide-aitbenhaddou-number">Heritage note {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-aitbenhaddou-stop")}
            </li>
          ))}
        </ol>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "bin-el-ouidane-lakeside-plan") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-bin-el-ouidane-opening")}
        <section className="guide-bin-el-ouidane-choices" aria-label="Family lake choices">
          <h2>Three ways to use the lakeside time</h2>
          <div className="guide-bin-el-ouidane-grid">
            {article.sections.slice(1, 4).map((section, index) => (
              <article className="guide-bin-el-ouidane-card" key={section.heading}>
                <span>Lake plan · {String(index + 1).padStart(2, "0")}</span>
                {renderSection(section, index + 1, "guide-bin-el-ouidane-card-copy")}
              </article>
            ))}
          </div>
        </section>
        {article.sections.slice(4).map((section, index) => renderSection(section, index + 4, "guide-bin-el-ouidane-practical-note"))}
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "ait-bouguemez-valley-board") {
    return (
      <>
        <LocalNote article={article} />
        {renderSection(article.sections[0], 0, "guide-ait-bouguemez-opening")}
        <GuideTable article={article} />
        <section className="guide-ait-bouguemez-board" aria-label="Family valley field notes">
          <h2>Six notes for a slower valley stay</h2>
          <div className="guide-ait-bouguemez-grid">
            {article.sections.slice(1).map((section, index) => (
              <article className="guide-ait-bouguemez-note" key={section.heading}>
                <span>Valley note {String(index + 1).padStart(2, "0")}</span>
                {renderSection(section, index + 1, "guide-ait-bouguemez-note-copy")}
              </article>
            ))}
          </div>
        </section>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "tiznit-tafraoute-routecard") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-tiznit-tafraoute-opening")}
        <GuideTable article={article} />
        <div className="guide-tiznit-tafraoute-route">
          <section className="guide-tiznit-tafraoute-leg">
            <h2>Leg one · Tiznit</h2>
            {article.sections.slice(1, 3).map((section, index) => renderSection(section, index + 1, "guide-tiznit-tafraoute-stop"))}
          </section>
          <section className="guide-tiznit-tafraoute-leg">
            <h2>Leg two · Tafraoute</h2>
            {article.sections.slice(3, 5).map((section, index) => renderSection(section, index + 3, "guide-tiznit-tafraoute-stop"))}
          </section>
        </div>
        {renderSection(article.sections[5], 5, "guide-tiznit-tafraoute-final-leg")}
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "mirleft-coast-weatherboard") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-mirleft-opening")}
        <div className="guide-mirleft-weatherboard">
          {article.sections.slice(1, 4).map((section, index) => (
            <div className="guide-mirleft-weather-note" key={section.heading}>
              <span>Coast check · {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-mirleft-weather-copy")}
            </div>
          ))}
        </div>
        <div className="guide-mirleft-route-notes">
          {article.sections.slice(4).map((section, index) => renderSection(section, index + 4, "guide-mirleft-route-note"))}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "asilah-promenade") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-asilah-opening")}
        <ol className="guide-asilah-promenade">
          {article.sections.slice(1).map((section, index) => (
            <li key={section.heading}>
              <span className="guide-asilah-marker">Walk note {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-asilah-walk-copy")}
            </li>
          ))}
        </ol>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "tetouan-medina-map") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-tetouan-opening")}
        <GuideTable article={article} />
        <section className="guide-tetouan-map" aria-label="A family reading of the medina">
          <h2>Read the medina in three layers</h2>
          <div className="guide-tetouan-layers">
            {article.sections.slice(1, 4).map((section, index) => (
              <article className="guide-tetouan-layer" key={section.heading}>
                <span>Layer {index + 1}</span>
                {renderSection(section, index + 1, "guide-tetouan-layer-copy")}
              </article>
            ))}
          </div>
        </section>
        <div className="guide-tetouan-afterwalk">
          {article.sections.slice(4).map((section, index) => renderSection(section, index + 4, "guide-tetouan-afterwalk-note"))}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "eljadida-cistern-check") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-eljadida-opening")}
        <GuideTable article={article} />
        <section className="guide-eljadida-visitorder" aria-label="El Jadida family visit order">
          <h2>Three visits, at your family’s pace</h2>
          <div className="guide-eljadida-stops">
            {article.sections.slice(1, 4).map((section, index) => (
              <article className="guide-eljadida-stop" key={section.heading}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {renderSection(section, index + 1, "guide-eljadida-stop-copy")}
              </article>
            ))}
          </div>
        </section>
        {article.sections.slice(4).map((section, index) => renderSection(section, index + 4, "guide-eljadida-route-note"))}
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "zagora-draa-schedule") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-zagora-opening")}
        <ol className="guide-zagora-schedule">
          {article.sections.slice(1).map((section, index) => (
            <li key={section.heading}>
              <span className="guide-zagora-stage">Route stage {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-zagora-stage-copy")}
            </li>
          ))}
        </ol>
        <LocalNote article={article} />
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "rissani-heritage-arc") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-rissani-opening")}
        <GuideTable article={article} />
        <div className="guide-rissani-arc">
          {article.sections.slice(1, 4).map((section, index) => (
            <section className="guide-rissani-arc-note" key={section.heading}>
              <span>Heritage chapter {index + 1}</span>
              {renderSection(section, index + 1, "guide-rissani-arc-copy")}
            </section>
          ))}
        </div>
        <div className="guide-rissani-roadnotes">
          {article.sections.slice(4).map((section, index) => renderSection(section, index + 4, "guide-rissani-roadnote"))}
        </div>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  if (article.layout === "imlil-acclimation-notebook") {
    return (
      <>
        <LocalNote article={article} />
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-imlil-opening")}
        <ol className="guide-imlil-notebook">
          {article.sections.slice(1).map((section, index) => (
            <li key={section.heading}>
              <span>Field note {String(index + 1).padStart(2, "0")}</span>
              {renderSection(section, index + 1, "guide-imlil-entry")}
            </li>
          ))}
        </ol>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "dakhla-wind-window") {
    return (
      <>
        <GuideTable article={article} />
        {renderSection(article.sections[0], 0, "guide-dakhla-opening")}
        <section className="guide-dakhla-windwindow" aria-label="Water and wind planning notes">
          <h2>Make the sea and weather the day’s first check</h2>
          <div className="guide-dakhla-waterchecks">
            {article.sections.slice(1, 4).map((section, index) => (
              <article className="guide-dakhla-watercheck" key={section.heading}>
                <span>Check {index + 1}</span>
                {renderSection(section, index + 1, "guide-dakhla-check-copy")}
              </article>
            ))}
          </div>
        </section>
        <div className="guide-dakhla-flexplan">
          {article.sections.slice(4).map((section, index) => renderSection(section, index + 4, "guide-dakhla-flex-note"))}
        </div>
        <GuidePhotos article={article} />
        <LocalNote article={article} />
        <GuideFAQs article={article} />
      </>
    );
  }

  if (article.layout === "agdz-palmgrove") {
    return (
      <>
        {renderSection(article.sections[0], 0, "guide-agdz-opening")}
        <GuideTable article={article} />
        <section className="guide-agdz-dayplan" aria-label="Agdz family stop plan">
          <h2>One calm day between the road and the oasis</h2>
          <div className="guide-agdz-dayplan-list">
            {article.sections.slice(1).map((section, index) => (
              <article className="guide-agdz-dayplan-row" key={section.heading}>
                <span>{["Arrive", "Walk", "Look", "Stay", "Continue"][index]}</span>
                {renderSection(section, index + 1, "guide-agdz-dayplan-copy")}
              </article>
            ))}
          </div>
        </section>
        <GuidePhotos article={article} />
        <GuideFAQs article={article} />
        <LocalNote article={article} />
      </>
    );
  }

  return (
    <>
      <GuideTable article={article} />
      <ol className="guide-road-sections">
        {article.sections.map((section, index) => (
          <li key={section.heading}>
            <span className="guide-road-step">Stop {String(index + 1).padStart(2, "0")}</span>
            {renderSection(section, index, "guide-road-section")}
          </li>
        ))}
      </ol>
      <LocalNote article={article} />
      <GuideVideo article={article} />
      <GuidePhotos article={article} />
      <GuideFAQs article={article} />
    </>
  );
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return { title: "Guide not found" };
  return pageMetadata({
    path: `blog/${article.slug}`, title: article.title, description: article.description,
    image: article.image, imageAlt: article.imageAlt, article: true,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const contextualLinks = new Set(article.contextLinks.map(({ href }) => href));
  const relatedArticles = article.related
    .filter((slug) => !contextualLinks.has(`/blog/${slug}/`))
    .map((slug) => articleBySlug[slug]);
  const url = canonical(`blog/${article.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    url,
    headline: article.title,
    description: article.description,
    image: [new URL(article.image, url).href],
    mainEntityOfPage: { "@type": "WebPage", "@id": url, isPartOf: { "@id": WEBSITE_ID } },
    articleSection: article.topic,
    inLanguage: "en",
    author: { "@type": "Organization", "@id": PUBLISHER_ID, name: BRAND, url: canonical() },
    publisher: { "@id": PUBLISHER_ID },
    citation: article.sourceLinks.map(({ href }) => href),
  };

  return (
    <div className="guide-page">
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Family Guide", href: "/family-guide/" }, { label: article.title, href: `/blog/${article.slug}/` }]} />
      <article className={`container guide-article guide-article-${article.layout}`}>
        <header className="guide-article-header">
          <p className="editorial-label">{article.topic}</p>
          <h1>{article.title}</h1>
          <p className="editorial-intro">{article.description}</p>
          <p className="guide-byline">By <Link href="/about/">{BRAND}</Link> · {article.readingTime}</p>
        </header>
        <div className="guide-cover"><Image src={article.image} alt={article.imageAlt} fill preload sizes="(max-width: 820px) 95vw, 760px" /></div>
        <nav className="guide-toc" aria-label="In this guide">
          <h2>In this guide</h2>
          <ol>
            <li><a href="#article-table">{article.table.heading}</a></li>
            {article.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}
            <li><a href="#family-faqs">Family questions</a></li>
          </ol>
        </nav>
        <div className="guide-copy">
          <ArticleBody article={article} />
          {article.tours.length > 0 && (
            <section className="content-section">
              <h2>Related family tours</h2>
              <ul>{article.tours.map((slug) => <li key={slug}><Link href={`/tours/${slug}/`}>{tourBySlug[slug].title}</Link></li>)}</ul>
            </section>
          )}
          <section className="content-section">
            <h2>Sources and further reading</h2>
            <ul>{article.sourceLinks.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
          </section>
        </div>
        {relatedArticles.length > 0 && (
          <aside className="guide-more">
            <h2>Related guides</h2>
            <ul>{relatedArticles.map(({ slug, title }) => <li key={slug}><Link href={`/blog/${slug}/`}>{title}</Link></li>)}</ul>
          </aside>
        )}
      </article>
    </div>
  );
}
