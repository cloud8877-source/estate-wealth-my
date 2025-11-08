import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works: 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600">
            Traditional estate planning takes 2-3 months. Ours? <strong>2 weeks.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-primary-50 rounded-lg p-8 text-center h-full">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Take Quiz or Assessment</h3>
              <p className="text-gray-600 mb-4">
                Answer 15 quick questions (2 min) or complete our comprehensive assessment (15 min)
              </p>
              <div className="text-sm text-primary-600 font-semibold">
                ⚡ Done 100% online • No commitment
              </div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-primary-300">
              →
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-primary-50 rounded-lg p-8 text-center h-full">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Personalized Plan</h3>
              <p className="text-gray-600 mb-4">
                Instant results + free consultation. We'll create your customized estate plan blueprint
              </p>
              <div className="text-sm text-primary-600 font-semibold">
                💼 Only 1 meeting required • Your schedule
              </div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-primary-300">
              →
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-primary-50 rounded-lg p-8 text-center h-full">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">We Handle Everything</h3>
            <p className="text-gray-600 mb-4">
              Document prep, trustee coordination, registration. Done in 2 weeks. Digital + physical copies
            </p>
            <div className="text-sm text-primary-600 font-semibold">
              🎯 Complete protection • Peace of mind
            </div>
          </div>
        </div>

        {/* Comparison Box */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">❌ Traditional Estate Planning</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 3-5 in-person meetings</li>
                <li>• 2-3 months process</li>
                <li>• Confusing legal jargon</li>
                <li>• Hard to schedule appointments</li>
                <li>• Limited transparency</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">✅ Estate Wealth My</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Only 1 meeting required</li>
                <li>• 2 weeks average completion</li>
                <li>• Plain language explanations</li>
                <li>• 80% done online at your pace</li>
                <li>• Real-time progress tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/quiz">
            <Button size="lg" className="text-lg px-10 py-6">
              Start Your 2-Min Quiz Now →
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 100% free assessment • Instant results
          </p>
        </div>
      </div>
    </section>
  );
}
