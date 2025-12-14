import React from 'react';
import { HelpCircle, ChevronRight, ArrowRight } from 'lucide-react';
import { DottedGlowBackground } from '@/components/ui/DottedGlowBackground';
import FAQ from '@/components/sections/FAQ';
import Link from 'next/link';

const FAQPage = () => {
  const popularQuestions = [
    'What happens if I die without a will in Malaysia?',
    'How much does estate planning cost in Malaysia?',
    'What is the difference between a will and a trust?',
    'How long does estate planning take in Malaysia?',
    'Can non-Muslims do estate planning in Malaysia?',
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-brand-900 overflow-hidden">
        <DottedGlowBackground
          className="absolute inset-0 z-0"
          colorLightVar="--color-brand-200"
          colorDarkVar="--color-brand-800"
          glowColorLightVar="--color-brand-400"
          glowColorDarkVar="--color-brand-600"
        />
        
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-brand-900/50 via-transparent to-brand-900/80"></div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-wider uppercase mb-6 border border-brand-gold/20">
              <HelpCircle className="w-3 h-3" /> Frequently Asked Questions
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-8">
              Estate Planning <span className="text-brand-gold italic">FAQs</span> for Malaysian Families
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl font-light leading-relaxed">
              Get clear, straightforward answers to common questions about wills, trusts, inheritance laws, and estate planning in Malaysia.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-gold">FAQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-medium text-brand-900 mb-8 text-center">
              Most Popular Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularQuestions.map((question, index) => (
                <a
                  key={index}
                  href={`#faq-${index}`}
                  className="group bg-brand-cream rounded-lg border border-slate-200 p-6 hover:border-brand-gold hover:shadow-md transition-all"
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <span className="text-brand-900 group-hover:text-brand-gold transition-colors">
                      {question}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Component */}
      <section className="py-8 bg-brand-cream">
        <div className="container mx-auto px-4">
          <FAQ />
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-16 bg-brand-900">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our estate planning experts are available to answer your specific questions and provide personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-brand-gold text-white hover:bg-brand-goldHover shadow-lg hover:shadow-xl"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-transparent text-white border border-slate-600 hover:bg-white hover:text-brand-900"
            >
              Take Quick Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
