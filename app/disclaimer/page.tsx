
import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="container" style={{ padding: "40px 20px", maxWidth: "800px" }}>
      <h1 className="h1">Disclaimer & Terms of Use</h1>
      <p className="p" style={{ marginBottom: 24 }}>Important Legal Notice</p>
      
      <section style={{ marginBottom: 32 }}>
        <h2 className="h2">1. Directory Service Only</h2>
        <p className="p">
          <strong>Denwin Movers Hub is solely a directory platform.</strong> We list moving companies to facilitate easy discovery for users. 
          We do not own, operate, or directly manage any of the moving trucks or businesses listed on this website.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="h2">2. Liability Limitation</h2>
        <p className="p">
          To the extent permitted by Kenyan law:
        </p>
        <ul className="p" style={{ listStyle: "disc", marginLeft: 20, marginTop: 10 }}>
          <li>
            <strong>We are NOT responsible</strong> for any loss, damage, theft, or breakage of items during a move performed by a company listed here.
          </li>
          <li>
            <strong>We are NOT responsible</strong> for pricing disputes, delays, or cancellations between you and the mover.
          </li>
          <li>
            <strong>Vetting:</strong> While we aim to list reputable businesses, the "Verified" badge indicates we have confirmed the business phone number and basic existence. It does not guarantee the quality or safety of their services.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="h2">3. User Responsibility (Consumer Protection)</h2>
        <p className="p">
          As a user, you agree that:
        </p>
        <ul className="p" style={{ listStyle: "disc", marginLeft: 20, marginTop: 10 }}>
          <li>You will perform your own due diligence before hiring a mover.</li>
          <li>You will agree on pricing and terms directly with the mover before service begins.</li>
          <li>Any transaction is strictly between you and the service provider.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 className="h2">4. Price Estimates</h2>
        <p className="p">
          Prices displayed on this website are <strong>estimates only</strong> based on market averages in Nairobi and Kiambu. 
          Actual prices may vary based on distance, volume of luggage, floor number, and other factors. 
          Always confirm the final price with the mover in writing or via text/WhatsApp.
        </p>
      </section>
      
      <div style={{ marginTop: 40 }}>
        <Link href="/" className="btn">← Back to Home</Link>
      </div>
    </div>
  );
}
