import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { hotels } from "@/data/hotels";
import { OFFICIAL_HOTELS_URL, OFFICIAL_OPERATOR_URL } from "@/lib/site";

export default function HotelStrip() {
  return (
    <section className="hotel-strip" aria-labelledby="hotel-strip-title">
      <div className="container">
        <header className="hotel-strip-heading">
          <h2 id="hotel-strip-title">Hotels we work with</h2>
          <p>Hotels, riads and desert camps listed by Morocco Travel Experts. Ask which stays are available for your route and dates.</p>
        </header>
        <div className="hotel-strip-viewport" role="region" aria-label="Hotel listings" tabIndex={0}>
          <div className="hotel-strip-track">
            {[false, true].map((isDuplicate) => (
              <ul className="hotel-strip-set" key={isDuplicate ? "duplicate" : "main"} aria-hidden={isDuplicate || undefined}>
                {hotels.map(({ name, slug, logo }) => (
                  <li key={slug}>
                    <a
                      className="hotel-strip-link"
                      href={OFFICIAL_OPERATOR_URL + "hotels/" + slug + "/"}
                      tabIndex={isDuplicate ? -1 : undefined}
                    >
                      {logo && <Image src={"/images/hotels/" + logo} alt="" width={148} height={56} sizes="148px" />}
                      <span>{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <a className="button button-outline hotel-strip-directory" href={OFFICIAL_HOTELS_URL}>
          View the hotel directory <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </section>
  );
}
