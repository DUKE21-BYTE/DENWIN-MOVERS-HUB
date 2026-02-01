import { COUNTIES } from "@/data/counties";
import { MOVERS } from "@/data/movers.seed";
import MoverCard from "@/components/MoverCard";
import Link from "next/link";
import { Metadata } from 'next';

export function generateStaticParams() {
  return COUNTIES.map((c) => ({ county: c.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: { county: string } }): Promise<Metadata> {
  const countyName = decodeURIComponent(params.county).toUpperCase();
  return {
    title: `Best Movers in ${countyName} | Denwin Movers Hub`,
    description: `Find trusted movers in ${countyName}. Compare prices, services, and get instant quotes via WhatsApp.`,
  }
}

export default function CountyPage({ params }: { params: { county: string } }) {
  const countySlug = decodeURIComponent(params.county).toLowerCase();
  const countyName = COUNTIES.find((c) => c.toLowerCase() === countySlug);

  const movers = MOVERS.filter((m) => m.county.toLowerCase() === countySlug);

  return (
    <div className="grid" style={{ gap: 14 }}>
      <div className="card">
        <div className="small"><Link href="/movers" style={{textDecoration: "underline"}}>← Back to all</Link></div>
        <h1 className="h2" style={{ marginBottom: 6, marginTop: 10 }}>
          Movers in {countyName ?? "this area"}
        </h1>
        <p className="p">
          Estimated prices, direct WhatsApp contacts, and listings. Always confirm pricing based on distance and volume.
        </p>
      </div>

      <div className="grid grid-3">
        {movers.length ? (
          movers.map((m) => <MoverCard key={m.id} mover={m} />)
        ) : (
          <div className="card" style={{ gridColumn: "1 / -1" }}>
            <div style={{ fontWeight: 700 }}>No movers listed yet for this area.</div>
            <p className="p" style={{ marginTop: 6 }}>
              If you’re a mover in this county, list your business for free.
            </p>
            <div style={{ marginTop: 10 }}>
              <a className="btn btn-primary" href="/add-business">
                List Your Business
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
