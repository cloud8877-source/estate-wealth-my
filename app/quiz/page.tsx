import Link from 'next/link';
import { DottedGlowBackground } from '@/components/ui/DottedGlowBackground';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Estate Planning Quiz Malaysia | Find Your Protection Type in 2 Minutes",
  description: "Take our free 2-minute quiz to discover your estate planning personality. Get personalized recommendations for will writing, trusts, and asset protection. 500+ families trust Estate Wealth My.",
  keywords: "estate planning quiz, will writing quiz malaysia, estate planning assessment, protection type quiz",
  openGraph: {
    title: "Free Estate Planning Quiz - Discover Your Protection Type",
    description: "2-minute quiz to find your personalized estate planning solution. Free consultation included.",
    url: "https://estatewealthmy.com/quiz",
  }
};

export default function QuickQuizPage() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-brand-900 overflow-hidden">
      {/* Dotted Glow Background */}
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
          
          {/* Trust Badge */}
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-wider uppercase mb-6 border border-brand-gold/20">
            <CheckCircle2 className="w-3 h-3" /> Trusted by 500+ Malaysian Families
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-8">
            What Type of Estate Planner Are You?
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Discover your protection priority in <strong className="text-white font-semibold">2 minutes</strong>. Get personalized recommendations for will writing, trusts, and asset protection.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link href="/quiz/questions" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-sm transition-all duration-300 bg-brand-gold text-white hover:bg-brand-goldHover shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Quiz Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-slate-700/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-white mb-1">2 Min</div>
              <div className="text-xs font-medium text-brand-gold uppercase tracking-widest">Quiz Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-white mb-1">4 Personas</div>
              <div className="text-xs font-medium text-brand-gold uppercase tracking-widest">Personalized Results</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-white mb-1">500+</div>
              <div className="text-xs font-medium text-brand-gold uppercase tracking-widest">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif text-white mb-1">100% Free</div>
              <div className="text-xs font-medium text-brand-gold uppercase tracking-widest">No Obligation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
