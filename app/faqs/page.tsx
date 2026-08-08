import Navbar from "../components/sections/Navbar";
import FAQHero from "../components/faqs/FAQHero";
import FAQCategories from "../components/faqs/FAQCategories";
import AboutKoreVityFAQ from "../components/faqs/AboutKoreVityFAQ";
import KoreVityPlatformFAQ from "../components/faqs/KoreVityPlatformFAQ";
import BusinessIntelligenceFAQ from "../components/faqs/BusinessIntelligenceFAQ";
import AutomationIntegrationsFAQ from "../components/faqs/AutomationIntegrationsFAQ";
import ImplementationSecurityFAQ from "../components/faqs/ImplementationSecurityFAQ";
import GettingStartedFAQ from "../components/faqs/GettingStartedFAQ";
import Footer from "../components/sections/Footer";

export default function FAQsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">
        <FAQHero />
        <FAQCategories />
        <AboutKoreVityFAQ />
        <KoreVityPlatformFAQ />
        <BusinessIntelligenceFAQ />
        <AutomationIntegrationsFAQ />
        <ImplementationSecurityFAQ />
        <GettingStartedFAQ />
      </main>

      <Footer />
    </>
  );
}