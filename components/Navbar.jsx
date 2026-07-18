'use client';
import { useState } from 'react';
import { Train, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-rail-navy/95 backdrop-blur-md text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-rail-saffron p-2 rounded-lg">
                <Train size={32} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl leading-tight">Railway Portal</span>
                <span className="text-xs text-rail-saffron font-medium">Government of India</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium hover:text-rail-saffron transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-rail-saffron transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#enquiry"
                className="bg-rail-saffron hover:bg-rail-saffronDark text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-sm flex items-center space-x-2"
              >
                <span>Enquiry</span>
                <ChevronRight size={18} />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 rounded-md text-white hover:bg-rail-navyLight transition-colors focus:outline-none"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-rail-navy z-50 transform transition-transform duration-300 ease-out md:hidden shadow-2xl flex flex-col ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="font-poppins font-bold text-xl text-white">Menu</span>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col py-4 px-6 space-y-2 flex-grow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsDrawerOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-medium transition-colors text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="p-6 border-t border-white/10">
          <a
            href="#enquiry"
            onClick={() => setIsDrawerOpen(false)}
            className="w-full bg-rail-saffron hover:bg-rail-saffronDark text-white px-4 py-3 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center space-x-2"
          >
            <span>Submit Enquiry</span>
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
