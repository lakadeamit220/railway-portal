import { ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-rail-dark/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full animate-fade-in-up">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
          <span className="text-xl">🇮🇳</span>
          <span>Government of India — Ministry of Railways</span>
        </div>
        
        <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          Connecting India, <br className="hidden md:block"/>
          <span className="text-rail-saffron">Empowering Lives</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 drop-shadow-md leading-relaxed">
          Your one-stop official portal for all railway services, passenger enquiries, freight operations, and real-time network information.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#services" 
            className="w-full sm:w-auto bg-rail-saffron hover:bg-rail-saffronDark text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2 text-lg"
          >
            <span>Explore Services</span>
            <ArrowRight size={20} />
          </a>
          <a 
            href="#enquiry" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/50 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2 text-lg"
          >
            <MessageSquare size={20} />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <ChevronDown size={40} />
        </a>
      </div>
    </section>
  );
}
