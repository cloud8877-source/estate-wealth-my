import React from 'react';
import { MessageSquare } from 'lucide-react';

const NewCTA = () => {
  return (
    <section className="py-16 bg-brand-cream border-t border-brand-gold/20" id="quiz">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-10 rounded-sm shadow-sm border border-slate-100">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-brand-900 mb-2">Not sure where to begin?</h2>
            <p className="text-slate-600">Take our diagnostic quiz to find your ideal protection profile.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-8 py-4 bg-brand-900 text-white hover:bg-brand-800 rounded-sm font-medium transition-colors text-center">
              Take 2-Min Quiz
            </button>
            <button className="px-8 py-4 border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white rounded-sm font-medium transition-colors flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" /> WhatsApp Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCTA;
