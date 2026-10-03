import BackgroundBlobs from "@/components/BackgroundBlobs";
import Navbar from "@/components/Navbar";
import PortalCards from "@/components/PortalCards";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Navbar />
      <main className="relative z-10">
        <PortalCards />
        <StatsSection />
        <AboutSection />
        <MapSection />
        <FaqAccordion />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
