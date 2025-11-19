import React from 'react';
import { Gavel, Lock, Scale, FileCheck } from 'lucide-react';

const NewProblemSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white" id="problem">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-6">
              The Cost of Inaction
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              73% of Malaysians pass away without a will. Under the <span className="font-semibold text-brand-900">Distribution Act 1958</span>, the government—not you—decides the fate of your estate.
            </p>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4 p-5 rounded-lg bg-slate-50 border border-slate-100 hover:border-brand-gold/30 transition-colors group">
                <div className="bg-white p-2.5 rounded-md shadow-sm text-brand-900 group-hover:text-brand-gold transition-colors">
                  <Gavel className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 mb-1 text-lg">Guardianship Disputes</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">The Court appoints guardians for your minor children. Family preferences are often overlooked in favor of strict legal hierarchy.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4 p-5 rounded-lg bg-slate-50 border border-slate-100 hover:border-brand-gold/30 transition-colors group">
                <div className="bg-white p-2.5 rounded-md shadow-sm text-brand-900 group-hover:text-brand-gold transition-colors">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 mb-1 text-lg">Asset Freezing (2-7 Years)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Bank accounts and EPF are frozen instantly. Families cannot access funds for mortgages, bills, or education fees during probate.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4 p-5 rounded-lg bg-slate-50 border border-slate-100 hover:border-brand-gold/30 transition-colors group">
                <div className="bg-white p-2.5 rounded-md shadow-sm text-brand-900 group-hover:text-brand-gold transition-colors">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 mb-1 text-lg">Statutory Distribution</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Your spouse only receives 25-50% depending on surviving parents. The rest is split strictly by law, regardless of your wishes.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side Visual */}
          <div className="relative h-full min-h-[500px] bg-brand-cream rounded-sm overflow-hidden border border-slate-100 flex items-center justify-center">
            {/* Decorative Abstract Shape */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="relative z-10 text-center p-8 max-w-sm">
              <FileCheck className="w-16 h-16 text-brand-gold mx-auto mb-6 opacity-80" />
              <h3 className="font-serif text-2xl text-brand-900 mb-4 italic">"Our mission is to prevent the 3-year asset freeze that destroys generational wealth."</h3>
              <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProblemSection;
