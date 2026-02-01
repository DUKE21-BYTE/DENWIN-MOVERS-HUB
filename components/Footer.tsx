export default function Footer() {
  return (
    <footer className="container" style={{ paddingBottom: 24 }}>
      <div className="hr" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div className="small">
          © {new Date().getFullYear()} Denwin Movers Hub
        </div>
        <div className="small" style={{ display: "flex", gap: 16 }}>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="small" style={{ marginTop: 12, opacity: 0.7 }}>
        Direct WhatsApp contact • Prices are estimates and may vary.
      </div>
    </footer>
  );
}
