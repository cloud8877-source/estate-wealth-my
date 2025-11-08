import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Protection Packages for Every Family</h2>
          <p className="text-xl text-gray-600">From simple wills to complex wealth structures.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Package 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-2xl font-bold mb-2">Essential Will</h3>
              
              <p className="text-sm text-gray-500">Most popular for young families</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Complete will with guardianship clause</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Executor appointment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Basic asset distribution</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Client hardcopy provided</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Lifetime vault storage</span>
              </li>
            </ul>

            <div className="text-center">
              <Link href="/quiz">
                <Button variant="outline" className="w-full">
                  Find Your Plan →
                </Button>
              </Link>
            </div>
          </div>

          {/* Package 2 - Featured */}
          <div className="bg-white p-8 rounded-lg shadow-2xl border-t-4 border-primary-600 relative transform md:scale-105">
            <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
              MOST POPULAR
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-2xl font-bold mb-2">Complete Protection</h3>
              
              <p className="text-sm text-gray-500">Recommended for most families</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700"><strong>Everything in Essential</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Testamentary trust for children</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">EPF & insurance nomination review</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Comprehensive review of nominations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Complimentary insurance gap analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Ongoing support and lifetime document access</span>
              </li>
            </ul>

            <div className="text-center">
              <Link href="/quiz">
                <Button className="w-full">
                  Get Started Now →
                </Button>
              </Link>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="text-2xl font-bold mb-2">Wealth Builder</h3>
              
              <p className="text-sm text-gray-500">For high-net-worth families</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700"><strong>Everything in Complete</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Living trust consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Business succession planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Tax optimization strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Multi-generational wealth transfer</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">Personalized estate planning guidance</span>
              </li>
            </ul>

            <div className="text-center">
              <Link href="/assessment">
                <Button variant="outline" className="w-full">
                  Take Assessment →
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Not sure which package you need?</p>
          <Link href="/quiz">
            <Button size="lg" variant="secondary">
              Take 2-Min Quiz to Find Out →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
