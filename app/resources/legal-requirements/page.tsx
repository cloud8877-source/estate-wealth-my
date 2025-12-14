import React from 'react';
import { Scale, FileText, AlertTriangle, ChevronRight, ArrowRight } from 'lucide-react';
import { DottedGlowBackground } from '@/components/ui/DottedGlowBackground';
import Link from 'next/link';

const LegalRequirementsPage = () => {
  const requirements = [
    {
      title: 'Will Requirements',
      items: [
        'Must be at least 18 years old',
        'Must be of sound mind at time of signing',
        'Must be signed by testator in presence of two witnesses',
        'Witnesses cannot be beneficiaries',
        'Must be in writing (typed or handwritten)',
        'No specific format required, but must clearly state intentions',
      ],
    },
    {
      title: 'Distribution Act 1958 (Intestate)',
      items: [
        'Spouse receives 50% of estate',
        'Children share remaining 50% equally',
        'If no spouse, children receive 100% equally',
        'If no children, parents receive 100% equally',
        'If no parents, siblings receive 100% equally',
        'If no siblings, goes to government',
      ],
    },
    {
      title: 'Trust Requirements',
      items: [
        'Must have clear trust deed',
        'Must specify trustees and beneficiaries',
        'Must have identifiable trust property',
        'Trustees have fiduciary duties',
        'Must comply with Trustee Act 1949',
        'Professional trustee management recommended',
      ],
    },
    {
      title: 'EPF Nominations',
      items: [
        'EPF nominations are revocable',
        'Can nominate up to 100% to any person',
        'Non-Muslims: nomination takes precedence over will',
        'Must be updated after major life events',
        'Form KWSP 4 (AHL) required',
        'Digital nominations available via i-Akaun',
      ],
    },
    {
      title: 'Tax Considerations',
      items: [
        'No inheritance tax in Malaysia',
        'Real property gains tax may apply',
        'Income tax on estate income during administration',
        'Foreign assets may be subject to foreign taxes',
        'Business assets may have different tax treatments',
        'Professional advice recommended for complex estates',
      ],
    },
    {
      title: 'Probate Process',
      items: [
        'Probate required for wills',
        'Letters of administration for intestate estates',
        'Process takes 6-24 months typically',
        'Requires court filing and fees',
        'Executor/administrator appointed by court',
        'Assets frozen until probate granted',
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
              <Scale className="w-3 h-3" /> Legal Compliance
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-8">
              Legal Requirements for <span className="text-brand-gold italic">Estate Planning</span> in Malaysia
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl font-light leading-relaxed">
              Essential legal information and compliance requirements for wills, trusts, EPF nominations, and estate administration under Malaysian law.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-gold">Legal Requirements</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            {/* Warning Alert */}
            <div className="mb-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-yellow-800 mb-2">Important Legal Disclaimer</h3>
                  <p className="text-yellow-700">
                    This information is for general guidance only and does not constitute legal advice. Estate planning laws can be complex and vary based on individual circumstances. We strongly recommend consulting with qualified legal professionals for personalized advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Requirements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {requirements.map((requirement) => (
                <div key={requirement.title} className="bg-white rounded-lg border border-slate-200 p-8 hover:border-brand-gold transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gold/10">
                      <FileText className="w-5 h-5 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-brand-900">
                      {requirement.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {requirement.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-lg border border-brand-gold/20 p-8 md:p-12 mb-12">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-white mb-6 text-center">
                Key Legal Takeaways
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-serif text-brand-gold mb-2">1</div>
                  <h4 className="text-lg font-medium text-white mb-2">Will is Essential</h4>
                  <p className="text-slate-300 text-sm">
                    Without a will, your estate is distributed according to the Distribution Act 1958, which may not reflect your wishes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif text-brand-gold mb-2">2</div>
                  <h4 className="text-lg font-medium text-white mb-2">Update Nominations</h4>
                  <p className="text-slate-300 text-sm">
                    EPF and insurance nominations should be reviewed regularly and updated after major life events.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif text-brand-gold mb-2">3</div>
                  <h4 className="text-lg font-medium text-white mb-2">Professional Guidance</h4>
                  <p className="text-slate-300 text-sm">
                    Estate planning involves complex legal requirements. Professional guidance ensures compliance and proper execution.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-brand-900 mb-4">
                Need Help Navigating Legal Requirements?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Our team of estate planning experts understands Malaysian inheritance law and can help ensure your estate plan is legally compliant.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-brand-gold text-white hover:bg-brand-goldHover shadow-lg hover:shadow-xl"
                >
                  Get Legal Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/resources/faq"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-transparent text-brand-900 border border-slate-300 hover:bg-brand-900 hover:text-white"
                >
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalRequirementsPage;
