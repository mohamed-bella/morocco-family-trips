"use client";

import Image from "next/image";
import { useEffect, useId, type MouseEvent } from "react";
import { Lightbox } from "lightbox3";
import { Images } from "lucide-react";
import type { PlacePhoto } from "@/data/places";
import "lightbox3/style.css";

export default function ImageGallery({ images }: { images: PlacePhoto[] }) {
  const gallery = useId();

  useEffect(() => {
    const lightbox = Lightbox.init({ padding: 20 });
    return () => lightbox.destroy();
  }, []);

  function openPhoto(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    Lightbox.init({ padding: 20 }).open(event.currentTarget);
  }

  return (
    <figure className="trip-photos">
      <div className="trip-photo-grid">
        {images.map((photo, index) => (
          <a
            key={photo.src}
            className={index === 0 ? "trip-photo trip-photo-main" : "trip-photo"}
            href={photo.src}
            onClick={openPhoto}
            data-lightbox={gallery}
            data-caption={photo.caption}
            data-alt={photo.alt}
            aria-label={`Open photo: ${photo.caption}`}
          >
            <Image src={photo.src} alt={photo.alt} fill preload={index === 0} sizes={index === 0 ? "(max-width: 740px) 95vw, 780px" : "(max-width: 740px) 28vw, 220px"} />
            {index === 0 && <span className="trip-photo-label"><Images size={17} aria-hidden="true" /> {images.length} photos</span>}
          </a>
        ))}
      </div>
      <figcaption>{images[0].caption} · Places along the route and photos from Morocco Travel Experts</figcaption>
    </figure>
  );
}
