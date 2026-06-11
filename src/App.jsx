import Header              from './components/Header/Header';
import Hero                from './components/Hero/Hero';
import About               from './components/About/About';
import Treatments          from './components/Treatments/Treatments';
import ConsultationProcess from './components/ConsultationProcess/ConsultationProcess';
import EquipmentSection    from './components/EquipmentSection/EquipmentSection';
import Benefits            from './components/Benefits/Benefits';
import Products            from './components/Products/Products';
import CTA                 from './components/CTA/CTA';
import Footer              from './components/Footer/Footer';
import WhatsAppButton      from './components/WhatsAppButton/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <ConsultationProcess />
        <EquipmentSection />
        <Benefits />
        <Products />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
