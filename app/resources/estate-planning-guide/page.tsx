import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import { DottedGlowBackground } from '@/components/ui/DottedGlowBackground';
import Link from 'next/link';

const EstatePlanningGuidePage = () => {
  const sections = [
    {
      id: 'what-is-estate-planning',
      title: 'What is Estate Planning?',
      content: `Estate planning is the process of arranging how your assets (property, savings, investments, EPF) will be managed and distributed after your death or if you become incapacitated. For non-Muslim Malaysians, proper estate planning ensures that your wealth is transferred according to your wishes, not according to the default rules of the Distribution Act 1958.`,
      points: [
        'Protects your family from financial hardship',
        'Ensures your assets go to intended beneficiaries',
        'Minimizes legal complications and taxes',
        'Provides for minor children through guardianship',
        'Avoids lengthy probate court processes',
      ],
    },
    {
      id: 'why-essential-malaysia',
      title: 'Why Estate Planning is Essential in Malaysia',
      content: `In Malaysia, without a valid will, your estate is distributed according to the Distribution Act 1958. This default distribution may not align with your wishes and can lead to family disputes, asset freezing, and unnecessary tax burdens.`,
      points: [
        '73% of Malaysians die without a will',
        'Probate can take 2-7 years without proper planning',
        'Spouses only receive 50% under intestate succession',
        'Courts appoint guardians for minor children',
        'Legal fees can cost RM 15,000-50,000+',
      ],
    },
    {
      id: 'key-components',
      title: 'Key Components of Estate Planning',
      content: `A comprehensive estate plan includes several important documents and arrangements:`,
      points: [
        'Will: Legal document specifying asset distribution',
        'Trusts: For asset protection and avoiding probate',
        'Lasting Power of Attorney (LPA): For financial decisions if incapacitated',
        'EPF/Insurance Nominations: Ensuring beneficiary designations are current',
        'Guardianship Appointments: For minor children',
        'Business Succession Planning: For business owners',
      ],
    },
    {
      id: 'step-by-step-process',
      title: 'Step-by-Step Estate Planning Process',
      content: `Our streamlined process makes estate planning efficient and stress-free:`,
      points: [
        'Assessment: Complete our online assessment (1 hour)',
        'Consultation: One meeting with our experts',
        'Document Drafting: We prepare all legal documents',
        'Review & Signing: You review and sign with guidance',
        'Storage & Registration: Secure digital and physical storage',
        'Regular Reviews: We help keep your plan current',
      ],
    },
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
              <BookOpen className="w-3 h-3" /> Comprehensive Guide
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-8">
              Estate Planning <span className="text-brand-gold italic">Guide</span> for Malaysian Families
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl font-light leading-relaxed">
              A complete resource to understand estate planning in Malaysia, including wills, trusts, legal requirements, and step-by-step guidance to protect your family's future.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-gold">Estate Planning Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-serif font-medium text-brand-900 mb-6 pb-4 border-b border-slate-200">
                  Contents
                </h3>
                <nav className="space-y-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-slate-600 hover:text-brand-gold transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Link
                    href="/quiz"
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-sm transition-all duration-300 bg-brand-gold text-white hover:bg-brand-goldHover"
                  >
                    Start Your Estate Plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg border border-slate-200 p-8 md:p-12 shadow-sm">
                {sections.map((section, index) => (
                  <div key={section.id} id={section.id} className="mb-16 last:mb-0">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-bold">
                        {index + 1}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-medium text-brand-900">
                        {section.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      {section.content}
                    </p>
                    
                    {section.points && (
                      <ul className="space-y-4 mb-8">
                        {section.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                            <span className="text-slate-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Card */}
              <div className="mt-12 bg-gradient-to-r from-brand-900 to-brand-800 rounded-lg border border-brand-gold/20 p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-white mb-4">
                  Ready to Secure Your Family's Future?
                </h3>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Our estate planning experts are ready to help you create a comprehensive plan tailored to your family's needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-brand-gold text-white hover:bg-brand-goldHover shadow-lg hover:shadow-xl"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-transparent text-white border border-slate-400 hover:bg-white hover:text-brand-900"
                  >
                    Browse More Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstatePlanningGuidePage;
