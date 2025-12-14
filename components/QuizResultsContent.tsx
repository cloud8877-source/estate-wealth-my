'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import PDFDownloadButton from '@/components/ui/PDFDownloadButton';

interface ResultData {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  painPoint: string;
  valueOffer: string;
  keyInsights: string[];
  nextSteps: string[];
  recommendedServices: string[];
  testimonial: {
    quote: string;
    author: string;
    detail: string;
  };
  priority: string;
  urgency: string;
}

interface QuizResultsContentProps {
  result: ResultData;
  persona: string;
}

export default function QuizResultsContent({ result, persona }: QuizResultsContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-brand-cream py-16">
      {/* PDF Download Section - Above content */}
      <div className="container mx-auto px-4 max-w-5xl mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-brand-900 mb-2">Save Your Results</h3>
          <p className="text-gray-600 text-sm mb-4">Download your personalized estate planning profile for future reference</p>
          <PDFDownloadButton
            contentRef={contentRef}
            filename={`estate-planning-${persona}`}
            title={result.title}
          />
        </div>
      </div>

      {/* Main Content - This will be captured for PDF */}
      <div ref={contentRef} className="container mx-auto px-4 max-w-5xl">
        {/* PDF Header (visible in PDF) */}
        <div className="hidden print:block text-center mb-8 pb-4 border-b-2 border-brand-gold">
          <h1 className="text-2xl font-bold text-brand-900">Estate Wealth My</h1>
          <p className="text-gray-600">Your Personal Estate Planning Profile</p>
        </div>

        {/* Persona Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">{result.icon}</div>
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${
            result.priority === 'High' || result.priority === 'Critical' ? 'bg-red-100 text-red-800' :
            result.priority === 'Strategic' ? 'bg-purple-100 text-purple-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            Priority: {result.priority} | Timeline: {result.urgency}
          </div>
          <h1 className="text-4xl font-bold text-brand-900 mb-4">{result.title}</h1>
          <h2 className="text-2xl text-gray-700 mb-6">{result.subtitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{result.description}</p>
        </div>

        {/* Pain Point */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-red-900 mb-2">Your Main Concern:</h3>
          <p className="text-red-800">{result.painPoint}</p>
        </div>

        {/* Value Offer */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-12">
          <h3 className="text-lg font-bold text-green-900 mb-2">Your Free Download:</h3>
          <p className="text-green-800 mb-4">{result.valueOffer}</p>
          <Button className="bg-green-600 hover:bg-green-700 no-print">
            Download Your Personalized Guide
          </Button>
        </div>

        {/* Key Insights & Next Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span role="img" aria-label="lightbulb">💡</span>
              </span>
              Key Insights for You
            </h3>
            <ul className="space-y-4">
              {result.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span role="img" aria-label="checkmark">✓</span>
              </span>
              Your Next Steps
            </h3>
            <ul className="space-y-4">
              {result.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-brand-900 mb-6 text-center">
            Recommended Services for {result.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {result.recommendedServices.map((service, index) => (
              <div key={index} className="border-2 border-brand-gold/20 rounded-lg p-4 text-center hover:border-brand-gold transition-colors">
                <p className="text-gray-800 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-brand-gold/10 rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl text-brand-gold mb-4">&ldquo;</div>
            <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
              {result.testimonial.quote}
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">{result.testimonial.author}</p>
                <p className="text-sm text-gray-600">{result.testimonial.detail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-8">
          <h3 className="text-3xl font-bold text-brand-900 mb-4">Ready to Protect Your Family?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the next step towards securing your family&apos;s future. Our estate planning specialists are ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 no-print">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/assessment">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Take Full Assessment (50 Questions)
              </Button>
            </Link>
          </div>

          <div className="border-t pt-6 mt-6">
            <p className="text-sm text-gray-500">
              100% confidential | Fast response within 24 hours | Personalized solutions
            </p>
          </div>
        </div>

        {/* PDF Footer */}
        <div className="hidden print:block text-center mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Generated on {new Date().toLocaleDateString('en-MY')} | Estate Wealth My | estatewealthmy.com
          </p>
        </div>

        {/* Navigation - Hidden in PDF */}
        <div className="text-center no-print">
          <Link href="/quiz">
            <Button variant="outline" size="sm">
              ← Retake Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
