import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container" style={{ position: "sticky", top: 0, zIndex: 50, paddingBottom: 10, paddingTop: 18 }}>
      <div
        className="card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(16px)",
          border: "1px solid var(--line)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Logo Image */}
          <div style={{ 
             width: 42, height: 42, 
             display: "flex", alignItems: "center", justifyContent: "center",
             overflow: "hidden", borderRadius: 8
          }}>
             <img src="/logo-icon.png" alt="Denwin" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 800, fontSize: 18, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--text)" }}>Denwin</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Movers Hub</span>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end", alignItems: "center" }}>
          <Link className="btn" href="/movers" style={{ padding: "8px 12px", height: "36px", fontSize: "14px", border: "none", background: "transparent", boxShadow: "none" }}>Find Movers</Link>
          <Link className="btn" href="/about" style={{ padding: "8px 12px", height: "36px", fontSize: "14px", border: "none", background: "transparent", boxShadow: "none" }}>About</Link>
          <Link className="btn" href="/contact" style={{ padding: "8px 12px", height: "36px", fontSize: "14px", border: "none", background: "transparent", boxShadow: "none" }}>Contact</Link>
          
          <a 
            href="https://www.buymeacoffee.com/DENNIS2" 
            target="_blank" 
            rel="noreferrer"
            className="btn"
            title="Buy us a coffee"
            style={{ 
              padding: "0 10px", 
              height: "36px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              border: "1px solid #FFDD00", 
              background: "#FFDD00", 
              color: "black",
              fontSize: "16px",
              marginLeft: 4,
              borderRadius: "50px", // More circular/pill for special icon
              boxShadow: "0 2px 10px rgba(255, 221, 0, 0.3)"
            }}
          >
            ☕
          </a>

          <Link className="btn btn-primary" href="/add-business" style={{ padding: "8px 16px", height: "36px", fontSize: "14px", marginLeft: 8 }}>List Business</Link>
        </nav>
      </div>
    </header>
  );
}
