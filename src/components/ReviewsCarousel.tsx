"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type UIEvent } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { clientReviews } from "@/data/reviews";
import { OFFICIAL_REVIEWS_URL } from "@/lib/site";

export default function ReviewsCarousel() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const slides = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageStops, setPageStops] = useState(() => clientReviews.map((_, index) => index));

  useEffect(() => {
    const visibleSlides = () => {
      const scroller = viewport.current;
      const row = track.current;
      const firstSlide = slides.current[0];
      if (!scroller || !row || !firstSlide) return;

      const gap = Number.parseFloat(getComputedStyle(row).columnGap) || 0;
      const slideWidth = firstSlide.getBoundingClientRect().width;
      const visibleCount = Math.max(1, Math.floor((scroller.clientWidth + gap) / (slideWidth + gap)));
      const maxStart = Math.max(0, clientReviews.length - visibleCount);
      const nextStops = Array.from({ length: maxStart + 1 }, (_, index) => index);
      setPageStops((current) => current.length === nextStops.length && current.every((stop, index) => stop === nextStops[index]) ? current : nextStops);
      setActiveIndex((current) => Math.min(current, maxStart));
    };

    visibleSlides();
    const observer = new ResizeObserver(visibleSlides);
    if (viewport.current) observer.observe(viewport.current);
    if (slides.current[0]) observer.observe(slides.current[0]);
    return () => observer.disconnect();
  }, []);

  function goTo(index: number) {
    const maxStart = pageStops[pageStops.length - 1] ?? 0;
    const boundedIndex = Math.min(maxStart, Math.max(0, index));
    setActiveIndex(boundedIndex);
    const scroller = viewport.current;
    const slide = slides.current[boundedIndex];
    if (!scroller || !slide) return;
    const left = slide.getBoundingClientRect().left - scroller.getBoundingClientRect().left + scroller.scrollLeft;
    scroller.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  function updateActiveSlide(event: UIEvent<HTMLDivElement>) {
    const viewportLeft = event.currentTarget.getBoundingClientRect().left;
    const closest = slides.current.reduce<{ index: number; distance: number }>((result, slide, index) => {
      if (!slide) return result;
      const distance = Math.abs(slide.getBoundingClientRect().left - viewportLeft);
      return distance < result.distance ? { index, distance } : result;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });
    setActiveIndex((current) => current === closest.index ? current : closest.index);
  }

  return (
    <section className="reviews-carousel" aria-label="Guest reviews" aria-roledescription="carousel">
      <div className="reviews-carousel-inner">
        <div className="reviews-carousel-heading">
          <div>
            <h2>Guest reviews of Morocco Travel Experts</h2>
          </div>
          <a href={OFFICIAL_REVIEWS_URL} target="_blank" rel="noreferrer">More verified reviews <ExternalLink aria-hidden="true" size={14} /></a>
        </div>
        <div className="reviews-viewport" ref={viewport} onScroll={updateActiveSlide}>
          <div className="reviews-track" ref={track}>
            {clientReviews.map((review, index) => (
              <article
                className="review-slide"
                key={`${review.reviewer}-${review.date}`}
                ref={(element) => { slides.current[index] = element; }}
                role="group"
                aria-roledescription="slide"
                aria-label={`Review ${index + 1} of ${clientReviews.length}`}
              >
                <div className="review-slide-head">
                  <Image className="review-avatar" src={review.image} alt={review.imageAlt} width={56} height={56} sizes="56px" />
                  <div className="review-identity"><strong>{review.reviewer}</strong><span>{review.platform} · {review.date}</span></div>
                  <span className="review-badge" aria-label="Verified review">✓</span>
                </div>
                <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>★★★★★</div>
                <p className="review-tour-name">{review.tour}</p>
                <blockquote>“{review.quote}”</blockquote>
              </article>
            ))}
          </div>
        </div>
        <div className="reviews-carousel-controls">
          <button className="reviews-arrow" type="button" aria-label="Previous reviews" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0}><ArrowLeft aria-hidden="true" size={17} /> Previous</button>
          <div className="reviews-pagination" role="group" aria-label="Choose a review">
            {pageStops.map((index) => <button key={`${clientReviews[index].reviewer}-dot`} type="button" className={activeIndex === index ? "is-active" : ""} aria-label={`Show reviews from ${clientReviews[index].reviewer}`} aria-pressed={activeIndex === index} onClick={() => goTo(index)} />)}
          </div>
          <button className="reviews-arrow" type="button" aria-label="Next reviews" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === pageStops[pageStops.length - 1]}>Next <ArrowRight aria-hidden="true" size={17} /></button>
        </div>
      </div>
    </section>
  );
}
