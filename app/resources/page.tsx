import React from 'react';
import { ArrowRight, BookOpen, FileText, HelpCircle } from 'lucide-react';
import { DottedGlowBackground } from '@/components/ui/DottedGlowBackground';
import Link from 'next/link';

const ResourcesPage = () => {
  const resources = [
    {
      title: 'Estate Planning Guide',
      description: 'A comprehensive guide to estate planning in Malaysia for non-Muslim families. Learn about wills, trusts, and asset protection.',
      icon: <BookOpen className="w-8 h-8 text-brand-gold" />,
      href: '/resources/estate-planning-guide',
      category: 'Guide',
    },
    {
      title: 'Legal Requirements',
      description: 'Understand the legal requirements and regulations for estate planning in Malaysia. Stay compliant and avoid common pitfalls.',
      icon: <FileText className="w-8 h-8 text-brand-gold" />,
      href: '/resources/legal-requirements',
      category: 'Legal',
    },
    {
      title: 'Frequently Asked Questions',
      description: 'Get answers to common questions about estate planning, will writing, trusts, and inheritance laws in Malaysia.',
      icon: <HelpCircle className="w-8 h-8 text-brand-gold" />,
      href: '/resources/faq',
      category: 'FAQ',
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
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-wider uppercase mb-6 border border-brand-gold/20">
              <BookOpen className="w-3 h-3" /> Knowledge Base
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-8">
              Estate Planning <span className="text-brand-gold italic">Resources</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive guides, legal requirements, and expert insights to help you navigate estate planning in Malaysia with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#resources" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-brand-gold text-white hover:bg-brand-goldHover shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Browse Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/quiz" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-transparent text-white border border-slate-600 hover:bg-white hover:text-brand-900 hover:border-white">
                Start Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section id="resources" className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-900 mb-6">
              Essential Resources for Your Estate Planning Journey
            </h2>
            <p className="text-lg text-slate-600">
              Whether you're just starting or need detailed legal information, our resources are designed to provide clear, actionable guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group relative bg-white rounded-lg border border-slate-200 p-8 hover:border-brand-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-brand-gold/10">
                      {resource.icon}
                    </div>
                    <span className="text-xs font-medium text-brand-gold uppercase tracking-widest px-3 py-1 border border-brand-gold/30 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-medium text-brand-900 mb-4 group-hover:text-brand-gold transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 flex-grow">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center text-brand-gold font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-900">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
            Need Personalized Advice?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our estate planning experts are ready to answer your specific questions and provide tailored recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-brand-gold text-white hover:bg-brand-goldHover shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
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

export default ResourcesPage;
