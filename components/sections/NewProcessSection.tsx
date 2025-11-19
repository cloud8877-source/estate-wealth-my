import React from 'react';
import { ClipboardList, Video, PenTool } from 'lucide-react';

const NewProcessSection = () => {
  return (
    <section className="py-20 md:py-24 bg-brand-cream border-y border-slate-200" id="process">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase mb-2 block">Methodology</span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">Streamlined. Digital. Legally Binding.</h2>
          <p className="text-slate-600 text-lg">We have removed the friction from traditional estate planning.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative p-8 bg-white border-t-4 border-brand-gold shadow-sm hover:shadow-lg transition-all group">
            <div className="text-6xl font-serif text-slate-100 absolute top-4 right-4 font-bold group-hover:text-brand-gold/10 transition-colors">01</div>
            <div className="relative z-10">
              <div className="mb-4 text-brand-900"><ClipboardList className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">Digital Assessment</h3>
              <p className="text-slate-600 leading-relaxed">Complete our secure 15-minute diagnostic tool to identify your protection gaps from the comfort of home.</p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative p-8 bg-white border-t-4 border-brand-900 shadow-sm hover:shadow-lg transition-all group">
            <div className="text-6xl font-serif text-slate-100 absolute top-4 right-4 font-bold group-hover:text-brand-900/5 transition-colors">02</div>
            <div className="relative z-10">
              <div className="mb-4 text-brand-900"><Video className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">Strategy Consultation</h3>
              <p className="text-slate-600 leading-relaxed">One video call with our estate advisors to finalize your blueprint. No traffic, no waiting rooms, pure efficiency.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 bg-white border-t-4 border-brand-gold shadow-sm hover:shadow-lg transition-all group">
            <div className="text-6xl font-serif text-slate-100 absolute top-4 right-4 font-bold group-hover:text-brand-gold/10 transition-colors">03</div>
            <div className="relative z-10">
              <div className="mb-4 text-brand-900"><PenTool className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">Execution & Storage</h3>
              <p className="text-slate-600 leading-relaxed">We handle drafting, trustee coordination, and registration. Physical and digital documents delivered in 14 days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProcessSection;
