"use client";

import { useMemo, useState } from "react";
import type { TourSummary } from "@/data/tours";
import { TourCard } from "./SiteComponents";

const allRoutes = "All family tours";

export default function TourFilters({ tours }: { tours: TourSummary[] }) {
  const [selected, setSelected] = useState<TourSummary["category"] | typeof allRoutes>(allRoutes);
  const filters = [allRoutes, ...new Set(tours.map((tour) => tour.category))] as const;
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    return tours.filter((tour) => {
      const categoryMatch = selected === allRoutes || tour.category === selected;
      const haystack = `${tour.title} ${tour.route} ${tour.description} ${tour.category}`.toLowerCase();
      return categoryMatch && haystack.includes(search.trim().toLowerCase());
    });
  }, [selected, search, tours]);

  return (
    <div className="tour-explorer">
      <div className="tour-filters" aria-label="Filter tour ideas">
        <div className="filter-buttons" role="group" aria-label="Tour style">
          {filters.map((filter) => <button type="button" key={filter} className={selected === filter ? "filter-button is-active" : "filter-button"} aria-pressed={selected === filter} onClick={() => setSelected(filter)}>{filter}</button>)}
        </div>
        <label className="tour-search"><span className="sr-only">Search tour ideas</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by place or route" /></label>
      </div>
      <p className="filter-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "route" : "routes"}</p>
      {filtered.length > 0 ? <div className="tour-grid">{filtered.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div> : <div className="empty-state"><h2>No route matches that search</h2><p>Try a city name such as Marrakech or clear the search to see all tour ideas.</p><button className="button button-outline" type="button" onClick={() => { setSearch(""); setSelected(allRoutes); }}>Show all routes</button></div>}
      <p className="tour-filter-note">Routes are planning starting points. Confirm private or group format, availability, inclusions and current prices with Morocco Travel Experts.</p>
    </div>
  );
}
