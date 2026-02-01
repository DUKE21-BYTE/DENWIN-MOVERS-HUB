
import Link from "next/link";
import CountyChips from "@/components/CountyChips";
import { COUNTIES } from "@/data/counties";

// SEO JSON-LD for the Directory Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Denwin Movers Hub",
  "url": "https://denwin-movers-hub.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://denwin-movers-hub.vercel.app/movers?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function HomePage() {
  return (
    <div className="grid" style={{ gap: 40, paddingBottom: 40 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section style={{ 
        textAlign: "center", 
        padding: "60px 20px", 
        background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)",
        backdropFilter: "blur(8px)",
        borderRadius: "24px",
        border: "1px solid var(--line)",
        boxShadow: "0 8px 32px rgba(34, 197, 94, 0.05)" // Subtle green glow
      }}>
        <div className="badge" style={{ background: "white", color: "var(--accent)", border: "1px solid var(--accent)", marginBottom: 16 }}>
          ✨ The #1 Trusted Movers Directory in Kenya
        </div>
        <h1 className="h1" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, color: "#0f172a" }}>
          Move with Confidence.
        </h1>
        <p className="p" style={{ fontSize: "18px", maxWidth: 600, margin: "0 auto 32px", color: "#334155", fontWeight: 500 }}>
          Find verified movers in your county, compare real prices, and chat instantly on WhatsApp. No middlemen, no hidden fees.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/movers" style={{ padding: "14px 28px", fontSize: "16px", fontWeight: 600 }}>
            Find a Mover
          </Link>
          <Link className="btn" href="/add-business" style={{ padding: "14px 28px", fontSize: "16px" }}>
            I&apos;m a Mover (Join Free)
          </Link>
        </div>
      </section>

      {/* Trust Signals / Bento Grid */}
      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 20 }}>
          <h2 className="h2" style={{ margin: 0 }}>Why use Denwin?</h2>
        </div>
        <div className="grid grid-3">
          <div className="card">
            <div style={{ color: "var(--accent)", marginBottom: 12 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--text)" }}>Verified Movers</h3>
            <p className="small" style={{ lineHeight: 1.6 }}>We manually vet every mover listed to ensure they are legitimate businesses with track records.</p>
          </div>
          <div className="card">
             <div style={{ color: "var(--accent)", marginBottom: 12 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--text)" }}>Direct WhatsApp</h3>
            <p className="small" style={{ lineHeight: 1.6 }}>Chat directly with the business owner. Secure your quote in minutes, not days.</p>
          </div>
          <div className="card">
             <div style={{ color: "var(--accent)", marginBottom: 12 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--text)" }}>Transparency</h3>
            <p className="small" style={{ lineHeight: 1.6 }}>See estimated price ranges before you call. Know what to expect for your 1 or 2 bedroom move.</p>
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="card" style={{ padding: 24 }}>
        <h2 className="h2">Find Movers Near You</h2>
        <p className="p" style={{ marginBottom: 20 }}>Browse verified listings by county.</p>
        <CountyChips counties={COUNTIES} />
      </section>

      {/* SEO Price Guide - Redesigned */}
      <section style={{ 
        background: "#f0fdf4", 
        border: "1px solid var(--accent-light)", 
        borderRadius: "16px",
        padding: "24px"
      }}>
         <h3 className="h2" style={{ fontSize: "20px", color: "var(--text)" }}>💰 2026 Price Guide (Estimates)</h3>
         <p className="p" style={{ marginBottom: 16 }}>Average costs for local moves within Nairobi & major towns.</p>
         
         <div className="grid grid-3">
            <div style={{ background: "white", padding: "12px", borderRadius: "8px", border: "1px solid var(--line)" }}>
              <div className="small" style={{ color: "var(--muted)", fontWeight: 700 }}>1 Bedroom</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "var(--text)" }}>KSh 10,000 – 15,000</div>
            </div>
            <div style={{ background: "white", padding: "12px", borderRadius: "8px", border: "1px solid var(--line)" }}>
              <div className="small" style={{ color: "var(--muted)", fontWeight: 700 }}>2 Bedrooms</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "var(--text)" }}>KSh 15,000 – 22,000</div>
            </div>
            <div style={{ background: "white", padding: "12px", borderRadius: "8px", border: "1px solid var(--line)" }}>
              <div className="small" style={{ color: "var(--muted)", fontWeight: 700 }}>Transport Only</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "var(--text)" }}>KSh 5,000 – 10,000</div>
            </div>
         </div>
         <p className="small" style={{ marginTop: 12, opacity: 0.7 }}>*Prices vary by distance, floor floor, and volume. Always request a formal quote.</p>
      </section>
    </div>
  );
}
