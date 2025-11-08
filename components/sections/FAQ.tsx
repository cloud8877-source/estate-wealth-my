"use client";

import { useState } from 'react';
import Script from 'next/script';

const faqs = [
  {
    question: "What happens if I die without a will in Malaysia?",
    answer: "Without a will: 1) Your assets are frozen for 2-7 years 2) Government decides asset distribution via Distribution Act 1958 3) Courts appoint guardians for your children 4) Family disputes are common 5) Legal fees cost RM 15,000-50,000+ 6) Your spouse may only get 50% of assets 7) Business succession becomes complicated. 73% of Malaysians have no will - don't be part of this statistic."
  },
  {
    question: "What is estate planning in Malaysia?",
    answer: "Estate planning in Malaysia is the process of arranging how your assets (property, savings, investments, EPF) will be distributed after your death. For non-Muslims, this includes creating a will, setting up trusts, appointing guardians for minor children, and ensuring your family is financially protected. Without proper estate planning, Malaysian law (Distribution Act 1958) decides how your assets are distributed, which may not align with your wishes."
  },
  {
    question: "Do I need a will if I'm married with children in Malaysia?",
    answer: "Yes, absolutely. Without a will, under Malaysia's Distribution Act 1958, your spouse only receives 50% of your estate, with the remainder split among children and parents. More critically, the court appoints guardians for your minor children - not you. Your assets can be frozen for 2-7 years during probate. A will ensures YOUR wishes are followed, not the government's."
  },
  {
    question: "How much does estate planning cost in Malaysia?",
    answer: "Estate planning costs in Malaysia vary based on complexity. Our tech-powered approach can reduce costs compared to traditional methods while maintaining quality. We offer transparent pricing with no hidden fees."
  },
  {
    question: "What's the difference between a will and a trust in Malaysia?",
    answer: "A will takes effect after death and requires probate (court approval), which can take 6-24 months. A living trust is effective immediately, avoids probate, provides privacy, and offers better asset protection. Trusts are ideal for estates over RM 2 million, business owners, or those wanting sophisticated tax planning. We can help you with professional trust management."
  },
  {
    question: "How do I update my EPF beneficiary nomination?",
    answer: "EPF beneficiary nominations should be updated every 2 years or after major life events (marriage, divorce, birth). We include EPF beneficiary review in our Complete Protection package. Outdated nominations mean your EPF may not go to your intended beneficiaries. We help coordinate all beneficiary updates (EPF, insurance, bank accounts) in one go."
  },
  {
    question: "How long does estate planning take in Malaysia?",
    answer: "Traditional estate planning takes 2-3 months. Our tech-powered process completes in just 2 weeks. You complete 80% online (1 hour), attend only 1 meeting, and we handle all paperwork, trustee coordination, and registration. You receive both digital and physical copies with secure storage."
  },
  {
    question: "Why does your process only take 2 weeks when traditional planners take months?",
    answer: "We use a tech-powered approach built for efficiency. 80% Online: You complete the main assessment and data gathering online, at your own convenience, which eliminates weeks of back-and-forth. Only 1 Meeting: Because the preparation is done online, we only need one focused meeting to confirm your plan, not 3-5 meetings. Streamlined Legal Work: Our process streamlines the document drafting and coordination, cutting out traditional delays."
  },
  {
    question: "What is a Lasting Power of Attorney (LPA) in Malaysia?",
    answer: "LPA allows you to appoint someone to make financial and health decisions if you become incapacitated (stroke, dementia, accident). Without LPA, family members must apply to court for authority, which takes months. LPA is crucial for elderly parents or anyone concerned about sudden incapacity. It's included in our Complete Protection package."
  },
  {
    question: "Can non-Muslims do estate planning in Malaysia?",
    answer: "Yes. Estate planning services are specifically for non-Muslims in Malaysia. Muslims' estates are governed by Islamic inheritance law (Faraid) and handled through Syariah courts. Our services cater exclusively to non-Muslim Malaysians including Chinese, Indian, and other communities, ensuring compliance with civil law under the Distribution Act 1958."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Estate Planning in Malaysia
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about will writing, trusts, and estate planning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-lg p-6 text-left hover:shadow-md transition-shadow flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <span className="text-2xl text-primary-600 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="bg-white px-6 pb-6 rounded-b-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-4 font-semibold">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
