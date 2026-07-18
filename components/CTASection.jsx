import { Headphones, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rail-navy/85 via-rail-navyLight/85 to-rail-saffron/85 backdrop-blur-md text-white relative overflow-hidden">
      
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-rail-saffron opacity-20 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex justify-center items-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-white/20">
          <Headphones size={40} className="text-white" />
        </div>
        
        <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
          Have a Query? We&apos;re Here to Help
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Whether you need assistance with booking, want to track freight, or have a specific question, our dedicated support team is ready to assist you.
        </p>
        
        <a 
          href="#enquiry" 
          className="inline-flex items-center space-x-2 bg-white text-rail-navy hover:bg-rail-light px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
        >
          <span>Submit an Enquiry</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
