import { CheckCircle2, Clock, Shield, MapPin, Globe, MessageSquare, Smartphone, Accessibility } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <CheckCircle2 size={24} className="text-white" />,
      title: "Instant Booking Confirmation",
      description: "Get your e-ticket delivered to your mobile and email within seconds."
    },
    {
      icon: <Clock size={24} className="text-white" />,
      title: "24/7 Availability",
      description: "Access our portal and services anytime, anywhere without downtime."
    },
    {
      icon: <Shield size={24} className="text-white" />,
      title: "Secure Transactions",
      description: "Bank-grade data encryption for all your payments and personal data."
    },
    {
      icon: <MapPin size={24} className="text-white" />,
      title: "Real-time Tracking",
      description: "Live GPS-based train location and delay predictions."
    },
    {
      icon: <Globe size={24} className="text-white" />,
      title: "Multi-language Support",
      description: "Available in English, Hindi, and 10 other regional languages."
    },
    {
      icon: <MessageSquare size={24} className="text-white" />,
      title: "Grievance Redressal",
      description: "Quick and transparent resolution to all passenger complaints."
    },
    {
      icon: <Smartphone size={24} className="text-white" />,
      title: "Paperless Ticketing",
      description: "Digital SMS/QR tickets accepted by TTEs at all stations."
    },
    {
      icon: <Accessibility size={24} className="text-white" />,
      title: "Accessible for All",
      description: "Fully WCAG compliant portal for differently-abled users."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block relative mb-4">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rail-navy">
              Why Use Our Portal?
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-rail-saffron rounded-full"></div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-rail-saffron w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="font-poppins text-lg font-bold text-rail-navy mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-800 font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
