import React from 'react';
import { Check, CheckCircle2 } from 'lucide-react';
import { CardSpotlight } from '@/components/ui/card-spotlight';

const NewPackagesSection = () => {
  return (
    <section className="py-20 md:py-24 bg-brand-900 text-white" id="services">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Structured Protection Plans</h2>
          <p className="text-slate-400 text-lg">Transparent pricing for comprehensive peace of mind.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Essential */}
          <CardSpotlight className="bg-brand-800 p-8 rounded-sm border border-brand-700 flex flex-col hover:border-brand-600 transition-colors">
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-serif mb-2 text-white">Essential Will</h3>
              <p className="text-sm text-slate-400">For young families starting their journey.</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow relative z-10">
              <li className="flex items-center text-sm text-slate-300"><Check className="text-brand-gold w-4 h-4 mr-3" /> Guardianship Clause</li>
              <li className="flex items-center text-sm text-slate-300"><Check className="text-brand-gold w-4 h-4 mr-3" /> Executor Appointment</li>
              <li className="flex items-center text-sm text-slate-300"><Check className="text-brand-gold w-4 h-4 mr-3" /> Basic Asset Distribution</li>
              <li className="flex items-center text-sm text-slate-300"><Check className="text-brand-gold w-4 h-4 mr-3" /> Lifetime Vault Storage</li>
            </ul>
            <button className="w-full py-3 border border-slate-600 text-white hover:bg-white hover:text-brand-900 hover:border-white transition-colors rounded-sm font-medium relative z-10">Select Plan</button>
          </CardSpotlight>

          {/* Complete (Featured) */}
          <div className="bg-white text-brand-900 p-8 rounded-sm relative transform md:-translate-y-4 shadow-2xl flex flex-col border-t-8 border-brand-gold">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-white px-4 py-1 text-xs font-bold uppercase tracking-wide rounded-full shadow-md">
              Most Popular
            </div>
            <div className="mb-6 pt-2">
              <h3 className="text-2xl font-serif mb-2">Complete Protection</h3>
              <p className="text-sm text-slate-500">Comprehensive coverage for established assets.</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="text-sm font-bold text-brand-900 pb-2 border-b border-slate-100">Everything in Essential, plus:</li>
              <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="text-brand-900 w-4 h-4 mr-3" /> Testamentary Trust (Children)</li>
              <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="text-brand-900 w-4 h-4 mr-3" /> EPF & Insurance Review</li>
              <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="text-brand-900 w-4 h-4 mr-3" /> Insurance Gap Analysis</li>
              <li className="flex items-center text-sm text-slate-700"><CheckCircle2 className="text-brand-900 w-4 h-4 mr-3" /> Ongoing Support</li>
            </ul>
            <button className="w-full py-3 bg-brand-900 text-white hover:bg-brand-800 transition-colors rounded-sm font-medium shadow-lg">Get Started</button>
          </div>

          {/* Wealth Builder */}
          <CardSpotlight className="bg-brand-800 p-8 rounded-sm border border-brand-700 flex flex-col hover:border-brand-600 transition-colors">
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-serif mb-2 text-brand-gold">Wealth Builder</h3>
              <p className="text-sm text-slate-400">For HNWI and Business Owners.</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow relative z-10">
              <li className="text-sm font-bold text-brand-gold pb-2 border-b border-brand-700">Everything in Complete, plus:</li>
              <li className="flex items-center text-sm text-slate-300"><Check className="text-brand-gold w-4 h-4 mr-3" /> Living Trust Consultation</li>
              <li className="flex items-center text-sm text-slate-300"><Check className="text-brand-gold w-4 h-4 mr-3" /> Business Succession Plan</li>
              <li className="flex items-center text-sm text-slate-300"><Check className="text-brand-gold w-4 h-4 mr-3" /> Tax Optimization</li>
              <li className="flex items-center text-sm text-slate-300"><Check className="text-brand-gold w-4 h-4 mr-3" /> Multi-generational Transfer</li>
            </ul>
            <button className="w-full py-3 border border-slate-600 text-white hover:bg-white hover:text-brand-900 hover:border-white transition-colors rounded-sm font-medium relative z-10">Inquire Now</button>
          </CardSpotlight>

        </div>
      </div>
    </section>
  );
};

export default NewPackagesSection;
