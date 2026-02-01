import Link from "next/link";
import type { CountyName } from "@/data/counties";

export default function CountyChips({ counties }: { counties: readonly CountyName[] }) {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      {counties.slice(0, 10).map((c) => (
        <Link key={c} className="badge" href={`/movers/${encodeURIComponent(c.toLowerCase())}`}>
          {c}
        </Link>
      ))}
    </div>
  );
}
