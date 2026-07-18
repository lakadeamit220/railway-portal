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
    <main className="w-full relative min-h-screen">
      {/* Global Fixed Background Image */}
      <div className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/hero-bg.png")' }}></div>
      {/* Global Overlay to ensure text readability */}
      <div className="fixed inset-0 z-[-1] bg-black/40"></div>

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
