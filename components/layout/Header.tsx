'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className={`font-serif text-2xl font-bold tracking-tight flex items-center gap-2 transition-colors ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
            <Shield className="w-6 h-6 text-brand-gold" />
            EstateWealth<span className="text-brand-gold">MY</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-brand-900' : 'text-slate-300 hover:text-white'}`}>Services</Link>
            <Link href="#process" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-brand-900' : 'text-slate-300 hover:text-white'}`}>Process</Link>
            <Link href="#testimonials" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-brand-900' : 'text-slate-300 hover:text-white'}`}>Stories</Link>
            <Link href="#" className="px-6 py-2.5 text-sm font-medium text-white bg-brand-900 rounded-sm hover:bg-brand-800 transition-all shadow-sm hover:shadow-md">
              Client Portal
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors ${isScrolled ? 'text-brand-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
          <div className="flex flex-col p-6 space-y-4">
            <Link href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="#process" className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Process</Link>
            <Link href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Stories</Link>
            <Link href="#" className="px-6 py-2.5 text-sm font-medium text-white bg-brand-900 rounded-sm hover:bg-brand-800 transition-all shadow-sm text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Client Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
