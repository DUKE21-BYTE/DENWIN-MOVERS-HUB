"use client";

import { whatsappLink } from "@/lib/whatsapp";
import { formatKsh } from "@/lib/utils";
import type { Mover } from "@/data/movers.seed";

export default function MoverCard({ mover }: { mover: Mover }) {
  const price =
    mover.serviceType === "Quote Based"
      ? "Quote Based"
      : mover.priceMin && mover.priceMax
      ? `${formatKsh(mover.priceMin)} – ${formatKsh(mover.priceMax)}`
      : "Pricing varies";

  const msg = `Hello ${mover.name}, I am requesting a moving quote.
1) Pickup location:
2) Destination:
3) House size / items:
4) Services needed (transport only / full service):
5) Move date:
Kindly share your best price and availability. Thank you.`;

  // SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": mover.name,
    "telephone": mover.phone,
    "url": mover.website || "",
    "priceRange": price,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": mover.county,
      "addressCountry": "KE"
    }
  };

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
             <h3 style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>
                {mover.name}
             </h3>
             {mover.status === "verified" && (
                <span 
                    style={{ 
                    background: "#16a34a", 
                    color: "white", 
                    fontSize: 10, 
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    padding: "2px 6px", 
                    borderRadius: 4, 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: 4,
                    fontWeight: 700,
                    }}
                >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Verified
                </span>
             )}
          </div>
          <div className="small" style={{ opacity: 0.8, marginTop: 4 }}>📍 {mover.county}</div>
        </div>
        <span className="badge" style={{ 
          background: "var(--accent-light)", 
          color: "var(--accent)", 
          borderColor: "transparent",
          fontSize: 11,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }}>
          {mover.serviceType}
        </span>
      </div>

      <div className="hr" style={{ margin: "4px 0" }} />

      {/* Details */}
      <div style={{ display: "grid", gap: 8, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>💰 Est.</span>
          <span style={{ fontWeight: 600, fontSize: 15, color: "var(--text)" }}>{price}</span>
        </div>

        {mover.website && (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "var(--muted)", fontSize: 13 }}>🌐 Web</span>
            <a href={mover.website} target="_blank" rel="noreferrer" className="small" style={{ textDecoration: "none", color: "#3b82f6" }}>
              Visit Website
            </a>
          </div>
        )}
      </div>

      {/* Actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, marginTop: "auto" }}>
        <a className="btn btn-primary" href={whatsappLink(mover.phone, msg)} target="_blank" rel="noreferrer" style={{ width: "100%", fontWeight: 600 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          WhatsApp
        </a>
        <a className="btn" href={`tel:${mover.phone}`} aria-label="Call Mover">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </div>
    </div>
  );
}
