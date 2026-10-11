import './App.css';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import ProcessSection from './components/sections/ProcessSection';
import ServicesMarquee from "./components/sections/ServicesMarquee";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import InsightsSection from "./components/sections/InsightsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <ServicesMarquee />
      <FAQSection />
      <ContactSection />
      <InsightsSection />
    </>
  );
}

export default App;
