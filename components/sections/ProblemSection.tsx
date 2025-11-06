export default function ProblemSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            73% of Malaysian Families Have NO Will
          </h2>
          <p className="text-xl text-gray-600">
            Here's what happens when you die without proper estate planning...
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Problem 1 */}
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-red-500">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Court Decides Guardianship</h3>
            <p className="text-gray-600 mb-4">
              Without a will, the court appoints guardians for your minor children. Not you. Not your family preferences. The government decides.
            </p>
            <div className="bg-red-50 rounded p-3 text-sm text-red-800">
              <strong>Real case:</strong> 2-year court battle over custody. Children placed with distant relatives they barely knew.
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-orange-500">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Assets Frozen for Years</h3>
            <p className="text-gray-600 mb-4">
              Bank accounts, properties, EPF - all frozen. Your family can't access funds to pay bills, mortgages, or children's education.
            </p>
            <div className="bg-orange-50 rounded p-3 text-sm text-orange-800">
              <strong>Average time:</strong> 2-7 years to unlock assets without a will. Legal fees: RM 15,000 - RM 50,000+
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-yellow-500">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Distribution Act Applies</h3>
            <p className="text-gray-600 mb-4">
              Government decides who gets what. Spouse gets 50%, children split the rest. Your wishes? Irrelevant.
            </p>
            <div className="bg-yellow-50 rounded p-3 text-sm text-yellow-800">
              <strong>Shocking fact:</strong> Even if married 30 years, your spouse only gets half. Rest split among children/parents.
            </div>
          </div>
        </div>

        {/* Urgency CTA */}
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-gray-900 mb-4">
            Don't let this be your family's story.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Find out your protection gaps in just 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
