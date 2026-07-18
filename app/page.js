import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroBanner />
      <AboutSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
