import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import Link from 'next/link';

const NewHero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-brand-900 overflow-hidden">
      {/* Dotted Glow Background */}
      <DottedGlowBackground
        className="absolute inset-0 z-0"
        colorLightVar="--color-brand-200"
        colorDarkVar="--color-brand-800"
        glowColorLightVar="--color-brand-400"
        glowColorDarkVar="--color-brand-600"
      />
      
      {/* Gradient Overlay for better text readability if needed, though DottedGlowBackground handles some opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-brand-900/50 via-transparent to-brand-900/80"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          
          {/* Trust Badge */}
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-wider uppercase mb-6 border border-brand-gold/20">
            <CheckCircle2 className="w-3 h-3" /> Trusted by 500+ Malaysian Families
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-8">
            Preserve Your Legacy.<br />
            <span className="text-brand-gold italic">Protect Your Family.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Malaysia's premier tech-enabled estate planning firm. 
            We secure your assets and guardianship in <strong className="text-white font-semibold">2 weeks</strong>, not months.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#quiz" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-brand-gold text-white hover:bg-brand-goldHover shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Assessment (2 Min) 
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-transparent text-white border border-slate-600 hover:bg-white hover:text-brand-900 hover:border-white">
              Explore Services
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-slate-700/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-white mb-1">RM 50M+</div>
              <div className="text-xs font-medium text-brand-gold uppercase tracking-widest">Assets Protected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-white mb-1">2 Weeks</div>
              <div className="text-xs font-medium text-brand-gold uppercase tracking-widest">Completion Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-white mb-1">500+</div>
              <div className="text-xs font-medium text-brand-gold uppercase tracking-widest">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-white mb-1">4.9/5.0</div>
              <div className="text-xs font-medium text-brand-gold uppercase tracking-widest">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
