import Link from 'next/link';
import Button from '@/components/ui/Button';

const assessmentResults = {
  comprehensive: {
    score: 85,
    scoreRange: "80-100",
    title: "Excellent Estate Readiness",
    subtitle: "You're Well-Protected",
    message: "Congratulations! Your estate is 85% protected. You have strong foundations across all key areas. Focus on maintaining your excellent planning with regular reviews and minor optimizations.",
    color: "green",
    priority: "Maintenance Mode",
    timeframe: "Annual reviews recommended",
    gapAnalysis: {
      familyStructure: 18,
      assetInventory: 22,
      protectionGaps: 27,
      riskFactors: 13,
      prioritiesGoals: 9
    },
    recommendations: [
      "Maintain your excellent planning with 2-year reviews",
      "Consider advanced strategies like charitable giving",
      "Explore family office structures for multi-generational wealth",
      "Stay updated on tax law changes"
    ]
  },
  detailed: {
    score: 65,
    scoreRange: "60-79",
    title: "Good Foundation, Gaps Exist",
    subtitle: "Action Needed Within 3 Months",
    message: "Your estate is 65% protected. You have a solid foundation, but important gaps need addressing. Focus on completing missing legal documents and updating nominations within the next 3 months.",
    color: "yellow",
    priority: "High Priority",
    timeframe: "3 months",
    gapAnalysis: {
      familyStructure: 15,
      assetInventory: 18,
      protectionGaps: 18,
      riskFactors: 10,
      prioritiesGoals: 7
    },
    recommendations: [
      "Focus on completing missing legal documents within 3 months",
      "Review and update EPF and insurance nominations",
      "Consider setting up a trust for tax efficiency",
      "Schedule annual estate plan reviews"
    ]
  },
  focused: {
    score: 48,
    scoreRange: "40-59",
    title: "Moderate Risk - Action Needed",
    subtitle: "Address Critical Gaps Soon",
    message: "Your estate is 48% protected. Significant gaps exist that could put your family at risk. You need to take action within the next month to address critical protection needs, especially will creation and insurance.",
    color: "orange",
    priority: "Urgent",
    timeframe: "1 month",
    gapAnalysis: {
      familyStructure: 10,
      assetInventory: 12,
      protectionGaps: 12,
      riskFactors: 8,
      prioritiesGoals: 6
    },
    recommendations: [
      "Create or update your will immediately",
      "Review life insurance coverage (currently inadequate)",
      "Set up EPF and insurance beneficiary nominations",
      "Document all assets in a comprehensive inventory"
    ]
  },
  urgent: {
    score: 25,
    scoreRange: "0-39",
    title: "Critical Gaps - Immediate Action Required",
    subtitle: "Your Family is at Significant Risk",
    message: "Your estate is only 25% protected. Critical gaps put your family at serious risk. You need immediate action within the next week. Without a will, the court decides guardianship and asset distribution - not you.",
    color: "red",
    priority: "CRITICAL",
    timeframe: "Within 1 week",
    gapAnalysis: {
      familyStructure: 6,
      assetInventory: 8,
      protectionGaps: 3,
      riskFactors: 4,
      prioritiesGoals: 4
    },
    recommendations: [
      "Schedule emergency consultation within 48 hours",
      "Create will immediately (especially if you have children)",
      "Establish adequate life insurance coverage urgently",
      "Update all beneficiary nominations (EPF, insurance, bank accounts)"
    ]
  }
};

export function generateStaticParams() {
  return [
    { level: 'comprehensive' },
    { level: 'detailed' },
    { level: 'focused' },
    { level: 'urgent' }
  ];
}

export default function AssessmentResultsPage({ params }: { params: { level: string } }) {
  const result = assessmentResults[params.level as keyof typeof assessmentResults];
  
  if (!result) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-red-600">Invalid Assessment Results</h1>
          <p className="mt-4">Please retake the assessment to get your results.</p>
          <Link href="/assessment">
            <Button className="mt-6">Back to Assessment</Button>
          </Link>
        </div>
      </div>
    );
  }

  const colorClasses = {
    green: {
      bg: 'bg-green-600',
      text: 'text-green-600',
      border: 'border-green-500',
      light: 'bg-green-50'
    },
    yellow: {
      bg: 'bg-yellow-500',
      text: 'text-yellow-600',
      border: 'border-yellow-500',
      light: 'bg-yellow-50'
    },
    orange: {
      bg: 'bg-orange-500',
      text: 'text-orange-600',
      border: 'border-orange-500',
      light: 'bg-orange-50'
    },
    red: {
      bg: 'bg-red-600',
      text: 'text-red-600',
      border: 'border-red-500',
      light: 'bg-red-50'
    }
  };

  const colors = colorClasses[result.color as keyof typeof colorClasses];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Score Display Section */}
        <div className={`${colors.light} rounded-lg p-8 mb-12 text-center`}>
          <div className="inline-block px-6 py-3 bg-white rounded-full text-sm font-bold mb-6">
            YOUR ESTATE READINESS SCORE
          </div>

          {/* Score Gauge */}
          <div className="flex justify-center mb-6">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="128"
                  cy="128"
                  r="100"
                  stroke="#e5e7eb"
                  strokeWidth="20"
                  fill="none"
                />
                {/* Progress circle */}
                <circle
                  cx="128"
                  cy="128"
                  r="100"
                  stroke={result.color === 'green' ? '#10b981' : result.color === 'yellow' ? '#f59e0b' : result.color === 'orange' ? '#f97316' : '#ef4444'}
                  strokeWidth="20"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 100}`}
                  strokeDashoffset={`${2 * Math.PI * 100 * (1 - result.score / 100)}`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className={`text-6xl font-bold ${colors.text}`}>{result.score}</div>
                <div className="text-gray-600 text-sm mt-2">out of 100</div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{result.title}</h1>
          <h2 className="text-2xl text-gray-700 mb-6">{result.subtitle}</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{result.message}</p>

          <div className={`inline-block mt-6 px-6 py-3 ${colors.bg} text-white rounded-lg font-bold`}>
            Priority: {result.priority} | Action Timeline: {result.timeframe}
          </div>
        </div>

        {/* Gap Analysis Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gap Analysis - Where You Stand</h3>
          <p className="text-gray-600 text-center mb-8">Visual breakdown of your protection across 5 key categories</p>

          <div className="space-y-6">
            {/* Family Structure */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Family Structure Protection</span>
                <span className="text-sm font-bold text-gray-700">{result.gapAnalysis.familyStructure}/20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${result.gapAnalysis.familyStructure >= 16 ? 'bg-green-500' : result.gapAnalysis.familyStructure >= 12 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${(result.gapAnalysis.familyStructure / 20) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Asset Inventory */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Asset Documentation</span>
                <span className="text-sm font-bold text-gray-700">{result.gapAnalysis.assetInventory}/25</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${result.gapAnalysis.assetInventory >= 20 ? 'bg-green-500' : result.gapAnalysis.assetInventory >= 15 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${(result.gapAnalysis.assetInventory / 25) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Protection Gaps */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Legal Documents in Place</span>
                <span className="text-sm font-bold text-gray-700">{result.gapAnalysis.protectionGaps}/30</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${result.gapAnalysis.protectionGaps >= 24 ? 'bg-green-500' : result.gapAnalysis.protectionGaps >= 18 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${(result.gapAnalysis.protectionGaps / 30) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Risk Mitigation */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Risk Mitigation & Insurance</span>
                <span className="text-sm font-bold text-gray-700">{result.gapAnalysis.riskFactors}/15</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${result.gapAnalysis.riskFactors >= 12 ? 'bg-green-500' : result.gapAnalysis.riskFactors >= 9 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${(result.gapAnalysis.riskFactors / 15) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Planning Priorities */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Planning Priorities Clear</span>
                <span className="text-sm font-bold text-gray-700">{result.gapAnalysis.prioritiesGoals}/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${result.gapAnalysis.prioritiesGoals >= 8 ? 'bg-green-500' : result.gapAnalysis.prioritiesGoals >= 6 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${(result.gapAnalysis.prioritiesGoals / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="w-4 h-4 bg-green-500 rounded mx-auto mb-1"></div>
              <span className="text-gray-600">Well Protected</span>
            </div>
            <div>
              <div className="w-4 h-4 bg-yellow-500 rounded mx-auto mb-1"></div>
              <span className="text-gray-600">Needs Attention</span>
            </div>
            <div>
              <div className="w-4 h-4 bg-red-500 rounded mx-auto mb-1"></div>
              <span className="text-gray-600">Critical Gap</span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className={`${colors.light} border-l-4 ${colors.border} rounded-lg p-8 mb-12`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Personalized Recommendations</h3>
          <ul className="space-y-4">
            {result.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className={`w-6 h-6 ${colors.bg} text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0`}>
                  ✓
                </span>
                <span className="text-gray-700 leading-relaxed">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-primary-900 mb-4">Ready to Take Action?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Based on your {result.score}/100 score, {result.priority.toLowerCase()} is needed.
            Our tech-powered estate planning process can get you fully protected within {result.timeframe}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                📅 Book Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                📋 View Our Services
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              📥 Download PDF Report
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-3xl mb-2">🔒</div>
              <p className="font-semibold">100% Confidential</p>
              <p className="text-gray-600">Your data is secure</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold">Fast Response</p>
              <p className="text-gray-600">Within 24 hours</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-semibold">Personalized</p>
              <p className="text-gray-600">Tailored solutions</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-gray-600">
              🏢 Estate Wealth My - Non-Muslim Estate Planning Specialists<br/>
              📧 Contact: <strong>info@estatewealthmy.com</strong> | 📞 Call: <strong>+60 12-345 6789</strong>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-8 space-x-4">
          <Link href="/assessment">
            <Button variant="outline" size="sm">
              ← Retake Assessment
            </Button>
          </Link>
          <Link href="/quiz">
            <Button variant="outline" size="sm">
              Try Quick Quiz Instead
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
