import { Ticket, Search, MapPin, Package, Camera, Phone } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Ticket size={28} className="text-white" />,
      title: "Online Ticket Booking",
      description: "Book railway tickets instantly from anywhere with secure payment options."
    },
    {
      icon: <Search size={28} className="text-white" />,
      title: "PNR Enquiry",
      description: "Check your PNR status in real time and get instant confirmation updates."
    },
    {
      icon: <MapPin size={28} className="text-white" />,
      title: "Live Train Status",
      description: "Track the live GPS location and running status of any train on the network."
    },
    {
      icon: <Package size={28} className="text-white" />,
      title: "Freight Services",
      description: "Seamless goods transport booking and tracking across India."
    },
    {
      icon: <Camera size={28} className="text-white" />,
      title: "Tourist Packages",
      description: "Explore curated travel and pilgrimage packages for all regions."
    },
    {
      icon: <Phone size={28} className="text-white" />,
      title: "Passenger Helpline",
      description: "24/7 dedicated support for all passenger needs and emergencies."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block relative mb-4">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rail-navy">
              Our Services
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-rail-saffron rounded-full"></div>
          </div>
          <p className="text-lg text-gray-800 font-medium mt-6">
            Explore a wide range of digital services designed to make your railway experience smooth, fast, and completely hassle-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/85 backdrop-blur-sm rounded-xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl hover:border-l-4 hover:border-l-rail-saffron transition-all duration-300 border border-white/50 flex flex-col"
            >
              <div className="bg-rail-saffron w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-poppins text-xl font-bold text-rail-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
