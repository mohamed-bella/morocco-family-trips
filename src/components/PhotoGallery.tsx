import Image from "next/image";
import { moroccoPhotos, photoGalleryItems } from "@/data/photos";
import { SectionHeading } from "@/components/SiteComponents";

export default function PhotoGallery({ compact = false }: { compact?: boolean }) {
  const images = compact
    ? [moroccoPhotos.kasbah, moroccoPhotos.atlasWaterfall, moroccoPhotos.cultureCrafts, moroccoPhotos.riad]
    : photoGalleryItems;

  return (
    <section id={compact ? undefined : "morocco-photo-gallery"} className={`section section-paper photo-gallery-section${compact ? " is-compact" : ""}`} aria-label="Morocco photo gallery">
      <div className="container">
        <SectionHeading
          eyebrow={compact ? "Places and experiences" : "From the operator’s photo collection"}
          title={compact ? "A few glimpses of the journey" : "Morocco in pictures"}
          description={compact ? "Landscapes, crafts and stays that help families picture a trip across Morocco." : "A look at the landscapes, places and experiences families can ask about when planning a route."}
        />
        <div className="photo-gallery-grid">
          {images.map((photo, index) => (
            <figure className="photo-gallery-card" key={photo.src}>
              <div className="photo-gallery-image">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 680px) 45vw, (max-width: 960px) 30vw, 23vw" />
              </div>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
