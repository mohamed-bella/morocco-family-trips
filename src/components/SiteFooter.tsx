import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PaymentMethods from "./PaymentMethods";
import { BRAND, COMPANY, OPERATOR, SOCIAL_LINKS, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/site";

const footerGroups = [
  {
    title: "Plan your trip",
    links: [
      ["Private family tours", "/morocco-family-tours/"],
      ["Tour ideas", "/tours/"],
      ["Build an itinerary", "/morocco-family-itineraries/"],
      ["Plan my trip", "/plan-my-trip/"],
    ],
  },
  {
    title: "Explore Morocco",
    links: [
      ["Destinations", "/destinations/"],
      ["Morocco with kids", "/morocco-with-kids/"],
      ["Family Guide", "/family-guide/"],
      ["Packing list", "/blog/packing-for-morocco-with-kids/"],
    ],
  },
  {
    title: "About the operator",
    links: [
      ["About us", "/about/"],
      ["Our team", "/our-team/"],
      ["Hamid El Maimouni", "/authors/hamid-el-maimouni/"],
      ["Guest reviews", "/reviews/"],
      ["Contact", "/contact/"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="brand footer-brand" href="/">
            <Image className="brand-mark-image" src="/images/brand/morocco-family-trips-mark-oxblood.png" alt="" width={44} height={44} />
            <span className="brand-name">Morocco <strong>Family Trips</strong></span>
          </Link>
          <p>Private family itineraries with local drivers and guides in Morocco.</p>
          <a className="footer-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp {WHATSAPP_NUMBER} <ArrowUpRight aria-hidden="true" size={15} /></a>
          <div className="social-links" aria-label="Morocco Travel Experts social accounts">
            {SOCIAL_LINKS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}
          </div>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-column" key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer-payments"><PaymentMethods /></div>
      <div className="container footer-legal">
        <div>
          <p><strong>{BRAND}</strong> is operated by {OPERATOR}, under {COMPANY.legalName}.</p>
          <p>{COMPANY.office} · ICE {COMPANY.ice} · RC {COMPANY.rc} · IF {COMPANY.if}</p>
        </div>
        <nav aria-label="Legal links">
          <Link href="/privacy-policy/">Privacy</Link>
          <Link href="/terms-and-conditions/">Terms</Link>
          <Link href="/cancellation-policy/">Cancellation</Link>
          <Link href="/IMAGE_CREDITS.md">Photo credits</Link>
        </nav>
        <small>© Morocco Family Trips</small>
      </div>
    </footer>
  );
}
