import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Our Estate Planning Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive estate planning solutions tailored for Malaysian non-Muslim families. 
          Protect your wealth, secure your family's future, and ensure your legacy continues.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Will Writing */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Will Writing</h3>
          <p className="text-gray-600 mb-6">
            Create a comprehensive will that clearly directs your assets, names beneficiaries, 
            and appoints guardians for minor children. Essential foundation for any estate plan.
          </p>
          <ul className="text-sm text-gray-500 mb-6 space-y-2">
            <li>• Asset inventory and distribution</li>
            <li>• Executor appointment</li>
            <li>• Guardian provisions</li>
            <li>• Legal compliance for non-Muslims</li>
          </ul>
          <Button variant="outline" size="sm" className="w-full">Get Started</Button>
        </div>

        {/* Trust Creation */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Trust Creation</h3>
          <p className="text-gray-600 mb-6">
            Protect your assets from creditors, divorce, and inheritance tax. 
            Ensure long-term control and family wealth preservation through professional trustee services.
          </p>
          <ul className="text-sm text-gray-500 mb-6 space-y-2">
            <li>• Asset protection strategies</li>
            <li>• RHB Trustee partnership</li>
            <li>• Tax optimization</li>
            <li>• Family wealth preservation</li>
          </ul>
          <Button variant="outline" size="sm" className="w-full">Learn More</Button>
        </div>

        {/* Estate Planning */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Estate Planning</h3>
          <p className="text-gray-600 mb-6">
            Holistic wealth transfer strategy combining wills, trusts, and insurance. 
            Complete protection for your family's financial future across generations.
          </p>
          <ul className="text-sm text-gray-500 mb-6 space-y-2">
            <li>• Comprehensive wealth transfer</li>
            <li>• Multi-generational planning</li>
            <li>• Business succession planning</li>
            <li>• Charitable giving strategies</li>
          </ul>
          <Button variant="outline" size="sm" className="w-full">Explore Options</Button>
        </div>

        {/* Insurance Review */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Insurance Review</h3>
          <p className="text-gray-600 mb-6">
            Comprehensive assessment of your life insurance policies and coverage gaps. 
            Ensure adequate protection for your family's financial security.
          </p>
          <ul className="text-sm text-gray-500 mb-6 space-y-2">
            <li>• Policy optimization</li>
            <li>• Coverage gap analysis</li>
            <li>• Premium efficiency</li>
            <li>• Beneficiary updates</li>
          </ul>
          <Button variant="outline" size="sm" className="w-full">Book Review</Button>
        </div>

        {/* Business Succession */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Business Succession</h3>
          <p className="text-gray-600 mb-6">
            Plan the seamless transfer of your business assets and ownership. 
            Protect your business legacy and ensure continuity for your family.
          </p>
          <ul className="text-sm text-gray-500 mb-6 space-y-2">
            <li>• Business valuation</li>
            <li>• Succession strategy</li>
            <li>• Tax-efficient transfers</li>
            <li>• Family business governance</li>
          </ul>
          <Button variant="outline" size="sm" className="w-full">Plan Succession</Button>
        </div>

        {/* Legal Compliance */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Compliance</h3>
          <p className="text-gray-600 mb-6">
            Ensure all estate planning documents comply with Malaysian law for non-Muslim families. 
            Regular updates and legal document review services.
          </p>
          <ul className="text-sm text-gray-500 mb-6 space-y-2">
            <li>• Legal document review</li>
            <li>• Compliance updates</li>
            <li>• Regulatory changes</li>
            <li>• Professional guidance</li>
          </ul>
          <Button variant="outline" size="sm" className="w-full">Get Review</Button>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-primary-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-8">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold text-lg mb-2">Initial Consultation</h3>
            <p className="text-gray-600">Free 30-minute discovery call to understand your needs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold text-lg mb-2">Strategy Development</h3>
            <p className="text-gray-600">Customized estate planning strategy for your situation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold text-lg mb-2">Document Preparation</h3>
            <p className="text-gray-600">Professional preparation of all necessary legal documents</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
            <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
            <p className="text-gray-600">Regular reviews and updates as your situation changes</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary-900 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Take our free estate planning assessment to discover your protection priorities 
          and get a personalized recommendation for your family's future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/quiz">
            <Button size="lg">Take Free Quiz</Button>
          </Link>
          <Link href="/assessment">
            <Button variant="outline" size="lg">Deep Assessment</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">Schedule Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
