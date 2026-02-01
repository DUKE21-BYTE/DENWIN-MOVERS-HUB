"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddBusinessPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    county: "",
    website: "",
    serviceType: "Full Service",
    priceMin: "",
    priceMax: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.businessName || !formData.phone || !formData.county) {
      alert("Please fill in the required fields (Business Name, Phone, County).");
      return;
    }
    if (!agreed) {
        alert("You must agree to the Terms & Conditions.");
        return;
    }

    const msgBody = 
      `*New Business Listing Request*\n\n` +
      `*Business Name:* ${formData.businessName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*County:* ${formData.county}\n` +
      `*Website:* ${formData.website || "N/A"}\n` +
      `*Service Type:* ${formData.serviceType}\n` +
      `*Price Estimate:* ${formData.priceMin || "N/A"} - ${formData.priceMax || "N/A"}\n\n` +
      `I have agreed to the Terms and Disclaimer.`;

    window.open(`https://wa.me/254758596269?text=${encodeURIComponent(msgBody)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="grid" style={{ gap: 24, maxWidth: 800, margin: "0 auto" }}>
      <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
        <h1 className="h2" style={{ marginBottom: 10, fontSize: 28 }}>
          List Your Moving Business
        </h1>
        <p className="p" style={{ fontSize: 16 }}>
          Join Kenya&#39;s #1 Movers Directory for free. Get discovered by customers in your county today.
        </p>
      </div>

      <div className="card" style={{ padding: 30 }}>
        <form className="grid" style={{ gap: 20 }} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <div>
            <label className="label">Business Name *</label>
            <input 
              name="businessName"
              className="input" 
              placeholder="e.g. Denwin Movers" 
              value={formData.businessName}
              onChange={handleChange}
              style={{ padding: "14px", fontSize: "15px" }} 
            />
          </div>

          <div className="grid grid-2">
            <div>
              <label className="label">WhatsApp Number *</label>
              <input 
                name="phone"
                className="input" 
                placeholder="2547..." 
                value={formData.phone}
                onChange={handleChange}
                style={{ padding: "14px", fontSize: "15px" }} 
              />
            </div>
            <div>
              <label className="label">Base County *</label>
              <input 
                name="county"
                className="input" 
                placeholder="e.g. Nairobi" 
                value={formData.county}
                onChange={handleChange}
                style={{ padding: "14px", fontSize: "15px" }} 
              />
            </div>
          </div>

          <div className="grid grid-2">
            <div>
              <label className="label">Website <span style={{opacity: 0.5}}>(Optional)</span></label>
              <input 
                name="website"
                className="input" 
                placeholder="https://..." 
                value={formData.website}
                onChange={handleChange}
                style={{ padding: "14px", fontSize: "15px" }} 
              />
            </div>
            <div>
              <label className="label">Primary Service Type</label>
              <select 
                name="serviceType"
                className="select" 
                value={formData.serviceType}
                onChange={handleChange}
                style={{ padding: "14px", fontSize: "15px" }}
              >
                <option value="Full Service">Full Service</option>
                <option value="Transport Only">Transport Only</option>
                <option value="Quote Based">Quote Based</option>
              </select>
            </div>
          </div>

          <div className="card" style={{ background: "#f8fafc", border: "1px solid var(--line)", padding: 16, boxShadow: "none" }}>
             <label className="label" style={{ marginBottom: 12 }}>Estimated Price Range (1 Bedroom)</label>
             <div className="grid grid-2">
                <input 
                    name="priceMin"
                    className="input" 
                    placeholder="Min (KSh)" 
                    type="number"
                    value={formData.priceMin}
                    onChange={handleChange} 
                />
                <input 
                    name="priceMax"
                    className="input" 
                    placeholder="Max (KSh)" 
                    type="number"
                    value={formData.priceMax}
                    onChange={handleChange}
                />
             </div>
             <p className="small" style={{ marginTop: 8, opacity: 0.6 }}>Leave blank if you prefer &quot;Quote Based&quot; pricing.</p>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <input 
                type="checkbox" 
                id="terms" 
                checked={agreed} 
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ marginTop: 4 }}
            />
            <label htmlFor="terms" className="small" style={{ cursor: "pointer" }}>
                I agree to the <Link href="/disclaimer" className="Link" style={{ textDecoration: "underline" }}>Terms of Service</Link> and acknowledge that Denwin Movers Hub is a directory service only.
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: "16px", fontSize: "16px", fontWeight: 600, marginTop: 10 }}>
            Submit Listing via WhatsApp
          </button>

          <p className="small" style={{ textAlign: "center", marginTop: 4 }}>
            Submissions are manually verified within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
}