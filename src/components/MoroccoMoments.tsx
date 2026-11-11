import Image from "next/image";
import type { PlacePhoto } from "@/data/places";

export default function MoroccoMoments({
  photos,
  title,
  description,
}: {
  photos: PlacePhoto[];
  title: string;
  description: string;
}) {
  return (
    <section className="moments-section">
      <div className="container">
        <header className="moments-heading">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </header>
        <div className="moments-viewport" role="region" aria-label={title} tabIndex={0}>
          <div className="moments-track">
            {photos.map((photo, index) => (
              <figure className="moments-card" key={photo.src + "-" + index}>
                <div className="moments-image">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 620px) 78vw, (max-width: 960px) 42vw, 310px"
                  />
                </div>
                <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
