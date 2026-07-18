import { Train, MapPin, Phone, Mail, ChevronRight, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Portal', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Submit Enquiry', href: '#enquiry' }
  ];

  return (
    <footer className="bg-rail-dark text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-rail-saffron p-2 rounded-lg">
                <Train size={28} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl leading-tight text-white">Railway Portal</span>
                <span className="text-xs text-rail-saffron font-medium">Government of India</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              The official portal for Indian Railway Department services, enquiries, and passenger assistance. Committed to safe, efficient, and accessible rail transport.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rail-saffron hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rail-saffron hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rail-saffron hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:ml-auto">
            <h3 className="font-poppins font-bold text-lg text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-rail-saffron rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-rail-saffron transition-colors group"
                  >
                    <ChevronRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-poppins font-bold text-lg text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-rail-saffron rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin size={20} className="text-rail-saffron mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Rail Bhawan, Rafi Marg, <br />
                  New Delhi - 110001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-rail-saffron mr-3 flex-shrink-0" />
                <span className="text-gray-400">139 (24/7 Helpline)</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-rail-saffron mr-3 flex-shrink-0" />
                <span className="text-gray-400">support@railwayportal.gov.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Ministry of Railways, Government of India. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
