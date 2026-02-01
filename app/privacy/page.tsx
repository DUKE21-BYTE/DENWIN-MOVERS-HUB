
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: "40px 20px", maxWidth: "800px" }}>
      <h1 className="h1">Privacy Policy</h1>
      <p className="p" style={{ marginBottom: 24 }}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <section style={{ marginBottom: 32 }}>
        <h2 className="h2">1. Introduction</h2>
        <p className="p">
          Denwin Movers Hub ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website 
          and tell you about your privacy rights and how the law protects you, specifically in accordance with the 
          <strong> Kenya Data Protection Act, 2019</strong>.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="h2">2. Information We Collect</h2>
        <p className="p">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
        </p>
        <ul className="p" style={{ listStyle: "disc", marginLeft: 20, marginTop: 10 }}>
          <li><strong>Identity Data:</strong> Name, username or similar identifier (if you register).</li>
          <li><strong>Contact Data:</strong> Email address and telephone number (if you submit a business listing or contact us).</li>
          <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="h2">3. How We Use Your Data</h2>
        <p className="p">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="p" style={{ listStyle: "disc", marginLeft: 20, marginTop: 10 }}>
          <li>To verify business listings.</li>
          <li>To manage our relationship with you.</li>
          <li>To improve our website and services.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="h2">4. Third-Party Links</h2>
        <p className="p">
          This website is a directory that includes links to third-party websites, plug-ins (like WhatsApp), and applications. 
          Clicking on those links or enabling those connections may allow third parties to collect or share data about you. 
          We do not control these third-party websites and are not responsible for their privacy statements.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="h2">5. Contact Us</h2>
        <p className="p">
          If you have any questions about this privacy policy or our privacy practices, please contact us.
        </p>
      </section>
      
      <div style={{ marginTop: 40 }}>
        <Link href="/" className="btn">← Back to Home</Link>
      </div>
    </div>
  );
}
