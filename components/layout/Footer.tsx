import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100 text-sm text-slate-500">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mb-4 md:mb-0 font-serif text-xl font-bold text-brand-900 flex items-center gap-2">
            <Shield className="w-5 h-5 text-brand-gold" />
            EstateWealth<span className="text-brand-gold">MY</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="#" className="hover:text-brand-900 transition-colors">Services</Link>
            <Link href="#" className="hover:text-brand-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-brand-900 transition-colors">Contact</Link>
          </div>
          
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p>&copy; 2025 EstateWealth MY. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
