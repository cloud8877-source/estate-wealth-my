import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Families. Real Protection. Real Peace of Mind.
          </h2>
          <p className="text-xl text-gray-600">
            See how we've helped 500+ Malaysian families secure their legacy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Testimonial 1 - Concerned Parent */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 text-xl mr-1">⭐⭐⭐⭐⭐</div>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "After our first child was born, we knew we needed a will but kept postponing. Estate Wealth My made it so easy - they understood our concerns as parents and had everything done in 2 weeks. Now I sleep better knowing my kids are protected."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Sarah & David Tan</p>
                <p className="text-sm text-gray-600">Parents of 2 • Completed in 10 days</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-primary-600 font-semibold">
                🛡️ The Concerned Parent Package
              </p>
            </div>
          </div>

          {/* Testimonial 2 - Busy Achiever */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-primary-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 text-xl mr-1">⭐⭐⭐⭐⭐</div>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "As a doctor, I barely have time to sleep. Estate Wealth My's process was incredibly efficient - one video call, some online forms, and they had my will ready in 10 days. Finally, something that respects my time!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Dr. Michael Wong</p>
                <p className="text-sm text-gray-600">Specialist Surgeon • 10 days total</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-primary-600 font-semibold">
                ⏰ Fast-Track Will Package
              </p>
            </div>
          </div>

          {/* Testimonial 3 - Wealth Builder */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 text-xl mr-1">⭐⭐⭐⭐⭐</div>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "I own 3 businesses and substantial property. Estate Wealth My worked with my accountant and lawyer to create a sophisticated structure using RHB Trustee. Their tech tools helped map everything clearly. This is the level of service high-net-worth individuals need."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Dato' Richard Lee</p>
                <p className="text-sm text-gray-600">Business Owner • RM 8M estate</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-primary-600 font-semibold">
                💼 Comprehensive Will + Trust
              </p>
            </div>
          </div>
        </div>

        {/* Video Testimonial Placeholder */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8 mb-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "We helped the Lim family avoid a 3-year asset freeze"
              </h3>
              <p className="text-gray-700 mb-4">
                After Mr. Lim passed away without a will, his assets were frozen. His widow couldn't access funds for 3 years. We helped the family navigate the process and now advise on preventing this situation for others.
              </p>
              <p className="text-sm text-gray-600 italic">
                This is why we do what we do. No family should go through this.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-gray-600">Video Testimonial</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto mb-8">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <p className="text-gray-600 text-sm">Families Served</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <p className="text-gray-600 text-sm">Would Recommend</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">2 Weeks</div>
            <p className="text-gray-600 text-sm">Avg. Completion</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-6 font-semibold">
            Join hundreds of families who've secured their legacy
          </p>
          <Link href="/quiz">
            <Button size="lg">
              Discover Your Protection Type in 2 Minutes →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
