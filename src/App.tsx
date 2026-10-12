import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import ClientsSection from './components/sections/ClientsSection';
import ServicesSection from './components/sections/services/ServicesSection';
import BrandSystemSection from './components/sections/brand/BrandSystemSection';
import ProcessSection from './components/sections/process/ProcessSection';
import ServicesMarquee from './components/sections/marquee/ServicesMarquee';
import FAQSection from './components/sections/faq/FAQSection';
import ContactSection from './components/sections/contact/ContactSection';
import InsightsSection from './components/sections/insights/InsightsSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <BrandSystemSection />
      <ProcessSection />
      <ServicesMarquee />
      <FAQSection />
      <ContactSection />
      <InsightsSection />
      <Footer />
    </>
  );
}

export default App;
