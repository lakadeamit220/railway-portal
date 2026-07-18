import { Train, Users, Package, Building2 } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    {
      icon: <Train size={40} className="text-rail-navy" />,
      number: "7,000+",
      label: "Route KMs Daily"
    },
    {
      icon: <Users size={40} className="text-rail-navy" />,
      number: "2 Cr+",
      label: "Daily Passengers"
    },
    {
      icon: <Package size={40} className="text-rail-navy" />,
      number: "28 States",
      label: "Freight Coverage"
    },
    {
      icon: <Building2 size={40} className="text-rail-navy" />,
      number: "18",
      label: "Zonal Railways"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Text */}
          <div className="lg:w-1/2">
            <div className="inline-block mb-4 relative">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rail-navy">
                About the Portal
              </h2>
              <div className="absolute -bottom-2 left-0 w-16 h-1.5 bg-rail-saffron rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mt-6 mb-6">
              The Indian Railway Department Portal is your comprehensive digital gateway to the world's fourth-largest national railway network. We are committed to providing seamless, transparent, and efficient services to millions of passengers and freight customers every single day.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From instant ticket bookings and real-time train tracking to dedicated grievance redressal and freight management, this portal brings the entire railway ecosystem to your fingertips, ensuring a safe and comfortable journey for everyone.
            </p>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => (
              <div key={index} className="bg-rail-light p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="font-poppins text-3xl font-bold text-rail-saffron mb-2">
                  {stat.number}
                </h3>
                <p className="text-rail-gray font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
