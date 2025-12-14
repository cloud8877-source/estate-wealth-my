import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Page Not Found | Estate Wealth My",
  description: "The page you're looking for doesn't exist. Return to our estate planning services.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-8xl font-serif font-bold text-brand-gold mb-4">404</div>
        <h1 className="text-3xl font-serif font-bold text-brand-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-brand-gold text-white hover:bg-brand-goldHover shadow-lg"
          >
            Go Home
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-transparent text-brand-900 border-2 border-brand-gold hover:bg-brand-gold hover:text-white"
          >
            Take Quiz
          </Link>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Quick Links
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/#services" className="text-brand-gold hover:underline">Services</Link>
            <Link href="/resources" className="text-brand-gold hover:underline">Resources</Link>
            <Link href="/resources/faq" className="text-brand-gold hover:underline">FAQ</Link>
            <Link href="/contact" className="text-brand-gold hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
