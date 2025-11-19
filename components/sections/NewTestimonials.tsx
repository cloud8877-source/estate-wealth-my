import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NewTestimonials = () => {
  return (
    <section className="py-20 md:py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase mb-2 block">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-6">Real Families. <br />Secured Legacies.</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              We have helped 500+ families navigate the complexities of Malaysian estate law, preventing family feuds and asset freezes.
            </p>
            <Link href="#" className="text-brand-900 font-bold hover:text-brand-gold flex items-center transition-colors group">
              View all 500+ reviews 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Review Card */}
          <div className="bg-slate-50 p-8 md:p-12 border-l-4 border-brand-gold shadow-sm">
            <div className="flex text-brand-gold mb-6 gap-1">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <blockquote className="font-serif text-xl md:text-2xl text-brand-900 italic mb-8 leading-relaxed">
              "I own 3 businesses and substantial property. Estate Wealth MY worked with my accountant to create a structure using RHB Trustee. This is the level of service high-net-worth individuals need."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center bg-slate-200 text-brand-900 font-bold font-serif">
                RL
              </div>
              <div>
                <div className="font-bold text-brand-900 font-hand text-lg">Dato' Richard Lee</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Business Owner • RM 8M Estate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonials;
