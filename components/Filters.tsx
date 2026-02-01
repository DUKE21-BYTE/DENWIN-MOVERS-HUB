"use client";

import { useMemo } from "react";
import type { CountyName } from "@/data/counties";

type Props = {
  counties: readonly CountyName[];
  county: string;
  setCounty: (v: string) => void;
  service: string;
  setService: (v: string) => void;
  priceBand: string;
  setPriceBand: (v: string) => void;
};

export default function Filters({
  counties,
  county,
  setCounty,
  service,
  setService,
  priceBand,
  setPriceBand,
}: Props) {
  const services = useMemo(() => ["All", "Transport Only", "Full Service", "Quote Based"], []);
  const bands = useMemo(
    () => [
      { label: "All", value: "all" },
      { label: "Under 10k", value: "under10" },
      { label: "10k – 15k", value: "10to15" },
      { label: "15k+", value: "15plus" },
    ],
    []
  );

  return (
    <div className="card">
      <div className="grid grid-3">
        <div>
          <label className="label">County</label>
          <select className="select" value={county} onChange={(e) => setCounty(e.target.value)}>
            <option value="All">All</option>
            {counties.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label">Service type</label>
          <select className="select" value={service} onChange={(e) => setService(e.target.value)}>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label">Price range</label>
          <select className="select" value={priceBand} onChange={(e) => setPriceBand(e.target.value)}>
            {bands.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="small" style={{ marginTop: 10 }}>
        Tip: Prices vary by distance, floor level, and item volume. Always confirm on WhatsApp.
      </p>
    </div>
  );
}
