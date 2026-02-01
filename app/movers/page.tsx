"use client";

import { useMemo, useState } from "react";
import MoverCard from "@/components/MoverCard";
import Filters from "@/components/Filters";
import { COUNTIES } from "@/data/counties";
import { MOVERS } from "@/data/movers.seed";

export default function MoversPage() {
  const [county, setCounty] = useState<string>("All");
  const [service, setService] = useState<string>("All");
  const [priceBand, setPriceBand] = useState<string>("all");

  const filtered = useMemo(() => {
    return MOVERS.filter((m) => {
      const countyOk = county === "All" ? true : m.county === county;
      const serviceOk = service === "All" ? true : m.serviceType === service;
      const priceOk = (() => {
        if (priceBand === "all") return true;
        if (!m.priceMin || !m.priceMax) return priceBand === "all";
        if (priceBand === "under10") return m.priceMin < 10000;
        if (priceBand === "10to15") return m.priceMin < 15000 && m.priceMax > 10000;
        if (priceBand === "15plus") return m.priceMax >= 15000;
        return true;
      })();

      return countyOk && serviceOk && priceOk;
    });
  }, [county, service, priceBand]);

  return (
    <div className="grid" style={{ gap: 14 }}>
      <div className="card">
        <h1 className="h2" style={{ marginBottom: 6 }}>
          Movers Directory
        </h1>
        <p className="p">Filter by county and price range. Tap WhatsApp to get a quote fast.</p>
      </div>

      <Filters
        counties={COUNTIES}
        county={county}
        setCounty={setCounty}
        service={service}
        setService={setService}
        priceBand={priceBand}
        setPriceBand={setPriceBand}
      />

      <div className="grid grid-3">
        {filtered.length ? (
          filtered.map((m) => <MoverCard key={m.id} mover={m} />)
        ) : (
          <div className="card" style={{ gridColumn: "1 / -1" }}>
            <div style={{ fontWeight: 700 }}>No movers found for that filter.</div>
            <p className="p" style={{ marginTop: 6 }}>
              Try a different county or widen your price range.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
