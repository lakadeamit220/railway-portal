import { Train, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rail-saffron hover:text-white transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rail-saffron hover:text-white transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
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
