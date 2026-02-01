export default function ContactPage() {
  return (
    <div className="grid" style={{ gap: 14 }}>
      <div className="card">
        <h1 className="h2" style={{ marginBottom: 6 }}>
          Contact
        </h1>
        <p className="p">
          Need help, want to update a listing, or report spam? Contact us via WhatsApp or email.
        </p>

        <div className="hr" />

        <div className="grid" style={{ gap: 10 }}>
          <div className="small">
            WhatsApp: <span className="badge">0758596269</span>
          </div>
          <div className="small">
            Email: <a href="mailto:dennisfundikamau@gmail.com" className="badge" style={{ textDecoration: "none" }}>dennisfundikamau@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
