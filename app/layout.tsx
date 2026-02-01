import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Denwin Movers Hub | Top Movers in Kenya",
  description:
    "Find trusted movers in Kenya by county. Compare estimated prices and contact verified movers instantly on WhatsApp.",
  openGraph: {
    title: "Denwin Movers Hub | Top Movers in Kenya",
    description: "Find trusted movers in Kenya by county. Compare estimated prices and contact verified movers instantly on WhatsApp.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
