import { Metadata } from 'next';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { ClockIcon, ChatBubbleLeftRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us | Estate Wealth My',
  description: 'Get in touch with Estate Wealth My for personalized estate planning advice. Quick response via WhatsApp.',
  openGraph: {
    title: 'Contact Us | Estate Wealth My',
    description: 'Get personalized estate planning advice via WhatsApp.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">
            Let&apos;s Start Your Estate Planning Journey
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have questions about estate planning? We&apos;re here to help.
            Connect with us directly on WhatsApp for a quick, personalized conversation.
          </p>

          {/* Main WhatsApp CTA */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-xl mx-auto">
            <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#25D366]" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
              Chat With Us on WhatsApp
            </h2>
            <p className="text-slate-600 mb-8">
              Get instant responses and personalized advice from our estate planning specialists.
            </p>
            <WhatsAppButton
              variant="inline"
              size="lg"
              message="Hi! I'd like to discuss estate planning options."
              className="w-full justify-center text-lg py-4"
            >
              Start WhatsApp Chat
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Response Time */}
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-2">Quick Response</h3>
              <p className="text-slate-600 text-sm">
                We typically respond within 1-2 hours during business hours
              </p>
            </div>

            {/* Business Hours */}
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-2">Business Hours</h3>
              <p className="text-slate-600 text-sm">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 2pm
              </p>
            </div>

            {/* Confidential */}
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-2">100% Confidential</h3>
              <p className="text-slate-600 text-sm">
                Your conversations and information are always kept private and secure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-slate-600 mb-6">
            Check out our frequently asked questions or take our quick quiz to discover your estate planning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resources/faq"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all"
            >
              View FAQs
            </a>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-brand-gold text-white hover:bg-brand-goldHover transition-all"
            >
              Take the Quiz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
