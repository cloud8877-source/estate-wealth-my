import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ LIMITED: Only 10 consultation slots left this month
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Family's Protection Starts Here
          </h2>
          <p className="text-xl mb-4 opacity-90">
            Join 500+ Malaysian families who've secured their legacy with us
          </p>
          <p className="text-lg mb-10 opacity-80">
            Get your personalized estate plan in 2 weeks. Not 2 months.
          </p>

          {/* Two-Path CTA */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Quick Quiz Path */}
            <div className="bg-white text-gray-900 rounded-lg p-8 shadow-2xl">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Quick Start</h3>
              <p className="text-gray-600 mb-6">
                Not sure where to begin? Take our 2-minute quiz to discover your protection type
              </p>
              <Link href="/quiz">
                <Button size="lg" className="w-full mb-4">
                  🎯 Take 2-Min Quiz
                </Button>
              </Link>
              <p className="text-sm text-gray-500">
                ✓ Instant results • No email required
              </p>
            </div>

            {/* Deep Assessment Path */}
            <div className="bg-white text-gray-900 rounded-lg p-8 shadow-2xl border-4 border-yellow-400">
              <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                MOST ACCURATE
              </div>
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Complete Analysis</h3>
              <p className="text-gray-600 mb-6">
                Want a detailed report? Take our comprehensive 50-question assessment
              </p>
              <Link href="/assessment">
                <Button size="lg" className="w-full mb-4" variant="secondary">
                  📋 Full Assessment (15 min)
                </Button>
              </Link>
              <p className="text-sm text-gray-500">
                ✓ Detailed gap analysis • PDF report
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 text-center text-sm opacity-90 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl mb-2">🔒</div>
              <p>100% Confidential</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⚡</div>
              <p>Free Consultation</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🎯</div>
              <p>No Obligation</p>
            </div>
          </div>

          {/* Final push */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-lg font-semibold mb-2">
              "What if something happens to you tomorrow?"
            </p>
            <p className="text-base opacity-80">
              Don't leave your family's future to chance. Take action today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
