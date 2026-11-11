"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About us" },
  { href: "/contact/", label: "Contact us" },
  { href: "/morocco-family-tours/", label: "Family tours" },
  { href: "/family-guide/", label: "Family Guide" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>Private Morocco journeys, planned around your family</span>
          <a href="https://wa.me/212721653572" target="_blank" rel="noreferrer">
            WhatsApp the local team <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Morocco Family Trips home" onClick={() => setOpen(false)}>
            <Image className="brand-mark-image" src="/images/brand/morocco-family-trips-mark-oxblood.png" alt="" width={44} height={44} priority />
            <span className="brand-name">Morocco <strong>Family Trips</strong></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
          <Link className="button button-primary header-cta" href="/plan-my-trip/">
            Plan your trip <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Mobile navigation" hidden={!open}>
          <div className="container mobile-nav-inner">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <Link className="button button-primary" href="/plan-my-trip/" onClick={() => setOpen(false)}>Plan your trip <ArrowUpRight aria-hidden="true" size={16} /></Link>
            <a className="mobile-whatsapp" href="https://wa.me/212721653572" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>WhatsApp +212 721 653 572</a>
          </div>
        </nav>
      </header>
    </>
  );
}
