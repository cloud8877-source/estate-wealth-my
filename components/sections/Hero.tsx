import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4 py-20">
        {/* Trust Badge */}
        <div className="text-center mb-6">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
            ✓ Trusted by 500+ Malaysian Families | Estate Planning Malaysia
          </span>
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-900 leading-tight mb-6" itemProp="name">
            Estate Planning Malaysia: Without a Will, <span className="text-red-600">the Court</span> Decides Who Raises Your Children
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            Get your estate plan done in <strong>2 weeks</strong> (not 2 months) with Malaysia's first tech-powered estate planning for non-Muslim families
          </p>

          <p className="text-lg text-gray-600 mb-8">
            No will = Your assets frozen for 2-7 years. Your children's future decided by strangers.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">80% done in 1 hour online</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">Only 1 meeting required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-gray-700">Complete in 2 weeks</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/quiz">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                🎯 Take 2-Min Quiz → Get Your Protection Type
              </Button>
            </Link>
            <Link href="/assessment">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-2">
                📊 Full Assessment (15 min)
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-gray-500">
            ⭐⭐⭐⭐⭐ <strong>4.9/5</strong> from 200+ families |
            <span className="ml-2">🔒 100% confidential</span> |
            <span className="ml-2">⚡ Free consultation</span>
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">500+</div>
            <div className="text-gray-600 text-sm mt-1">Families Protected</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">2 Weeks</div>
            <div className="text-gray-600 text-sm mt-1">Average Completion</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">RM 50M+</div>
            <div className="text-gray-600 text-sm mt-1">Assets Protected</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600">10 Years</div>
            <div className="text-gray-600 text-sm mt-1">Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
