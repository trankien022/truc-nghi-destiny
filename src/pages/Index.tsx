import Hero from "@/components/Hero";
import AudienceFit from "@/components/AudienceFit";
import PainDesire from "@/components/PainDesire";
import Credibility from "@/components/Credibility";
import ValueProposition from "@/components/ValueProposition";
import NotFor from "@/components/NotFor";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import SampleSection from "@/components/SampleSection";
import FAQ from "@/components/FAQ";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AudienceFit />
      <PainDesire />
      <Credibility />
      <ValueProposition />
      <NotFor />
      <Pricing />
      <Process />
      <Testimonials />
      <SampleSection />
      <FAQ />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;