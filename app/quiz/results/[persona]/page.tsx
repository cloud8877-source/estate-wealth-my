import Link from 'next/link';
import Button from '@/components/ui/Button';

const resultsData = {
  'concerned-parent': {
    icon: "🛡️",
    title: "The Concerned Parent",
    subtitle: "Your Top Priority is Protecting Your Children's Future",
    description: "As a parent, your biggest concern is ensuring your children are cared for if something unexpected happens. Without proper planning, the court decides who raises your children - not you.",
    painPoint: "What keeps you up at night is the thought of your children being placed with guardians you wouldn't choose, or worse - family disputes over their care.",
    valueOffer: "Guardian Nomination Guide + Children's Protection Checklist",
    keyInsights: [
      "Without a will, the court appoints guardians for your minor children",
      "Your EPF and insurance won't automatically go to your children",
      "Financial provisions need to be age-appropriate (e.g., managed until age 21)",
      "Medical decisions require advance planning if you're incapacitated",
      "Education funds need specific protection structures"
    ],
    nextSteps: [
      "Download our comprehensive Guardian Nomination Guide",
      "Review our Will Writing service with guardianship clause",
      "Learn about testamentary trusts for managing children's inheritance",
      "Book a free consultation to discuss your family's specific needs",
      "Set up EPF and insurance beneficiary nominations"
    ],
    recommendedServices: [
      "Will with Guardianship Clause",
      "Testamentary Trust for Children",
      "Life Insurance Review (Complimentary)"
    ],
    testimonial: {
      quote: "After our first child was born, we knew we needed a will but kept postponing. Estate Wealth My made it so easy - they understood our concerns as parents and had everything done in 2 weeks. Now I sleep better knowing my kids are protected.",
      author: "Sarah & David Tan",
      detail: "Parents of 2 children, ages 3 and 5"
    },
    priority: "High",
    urgency: "Within 2 weeks"
  },
  'busy-achiever': {
    icon: "⏰",
    title: "The Busy Achiever",
    subtitle: "Get Your Estate Planning Done Fast, Without the Hassle",
    description: "You're a high-performing professional with limited time. Traditional estate planning takes weeks of back-and-forth. Our tech-powered approach gets you 80% done in one hour.",
    painPoint: "You know you need estate planning, but lengthy meetings, confusing legal jargon, and endless paperwork keep pushing it to 'next month.'",
    valueOffer: "Quick-Start Estate Planning Roadmap + Fast-Track Process Guide",
    keyInsights: [
      "Our AI-assisted questionnaire completes 80% of documentation in 1 hour",
      "Only ONE in-person meeting required (vs. traditional 3-5 meetings)",
      "We handle all paperwork, coordination with trustees, and registration",
      "Digital document storage with 24/7 access from anywhere",
      "Average completion time: 2-3 weeks (vs. industry average 2-3 months)"
    ],
    nextSteps: [
      "Download our Quick-Start Estate Planning Roadmap",
      "Complete our online assessment (15 minutes, done from anywhere)",
      "Schedule your single consultation at your convenience",
      "We handle everything else while you focus on your work",
      "Receive digital + physical copies with secure storage"
    ],
    recommendedServices: [
      "Fast-Track Will Package",
      "Digital Estate Planning Suite",
      "Express Trust Setup"
    ],
    testimonial: {
      quote: "As a doctor, I barely have time to sleep. Estate Wealth My's process was incredibly efficient - one video call, some online forms, and they had my will ready in 10 days. Finally, something that respects my time!",
      author: "Dr. Michael Wong",
      detail: "Specialist surgeon, completed estate plan in 10 days"
    },
    priority: "Medium",
    urgency: "Within 1 month"
  },
  'wealth-builder': {
    icon: "💼",
    title: "The Wealth Builder",
    subtitle: "Protect & Maximize Your Wealth for the Next Generation",
    description: "You've worked hard to build significant assets. Now it's about sophisticated strategies to protect your wealth from taxes, creditors, and family disputes while ensuring efficient transfer.",
    painPoint: "Simple wills won't cut it for complex estates. You need advanced structures like trusts, but most advisors can't handle the complexity or lack connections to professional trustees.",
    valueOffer: "Asset Protection Strategies Guide + Trust vs Will Comparison",
    keyInsights: [
      "Estates over RM 2 million benefit significantly from trust structures",
      "Business assets need separate succession planning from personal assets",
      "Trusts provide privacy (avoid public probate) and tax efficiency",
      "Our trustee partnership ensures professional, regulated management",
      "Multi-generational planning protects wealth for your grandchildren"
    ],
    nextSteps: [
      "Download our comprehensive Asset Protection Strategies Guide",
      "Review trust structures comparison (Living Trust vs Testamentary Trust)",
      "Book strategic consultation to map your wealth structure",
      "Explore trustee partnership benefits",
      "Develop customized multi-generational wealth transfer plan"
    ],
    recommendedServices: [
      "Comprehensive Will + Trust Package",
      "Business Succession Planning",
      "Living Trust Setup",
      "Tax Optimization Review"
    ],
    testimonial: {
      quote: "I own 3 businesses and substantial property. Estate Wealth My worked with my accountant and lawyer to create a sophisticated structure using a trustee. Their tech tools helped map everything clearly. This is the level of service high-net-worth individuals need.",
      author: "Dato' Richard Lee",
      detail: "Business owner, RM 8M estate value"
    },
    priority: "Strategic",
    urgency: "Within 1-2 months"
  },
  'life-changer': {
    icon: "🎉",
    title: "The Life Changer",
    subtitle: "Fresh Start - Get Your Protection Right This Time",
    description: "Major life changes demand updated protection. Whether it's marriage, divorce, a new baby, or financial windfall - your estate plan needs to reflect your new reality.",
    painPoint: "Your old plans (if you had any) don't match your current life. You need guidance to navigate this transition and set up proper protection for this new chapter.",
    valueOffer: "Life Milestone Estate Planning Checklist + Fresh Start Guide",
    keyInsights: [
      "Marriage: Update beneficiaries, consider joint vs separate assets",
      "New baby: Appoint guardians immediately, set up education trusts",
      "Divorce: Critical to remove ex-spouse from all beneficiary designations",
      "Windfall: Sudden wealth requires immediate asset protection structures",
      "Career change: Reassess insurance needs and business succession"
    ],
    nextSteps: [
      "Download our Life Milestone Estate Planning Checklist",
      "Review our Fresh Start Guide tailored to your situation",
      "Complete our assessment to identify what needs updating",
      "Book a consultation to discuss your specific life transition",
      "Get personalized roadmap for your new chapter"
    ],
    recommendedServices: [
      "Estate Plan Update Package",
      "Fresh Start Will + Trust Bundle",
      "Post-Divorce Estate Restructuring",
      "New Parents Protection Package"
    ],
    testimonial: {
      quote: "After my divorce, I had no idea where to start. Estate Wealth My walked me through every step - removing my ex from beneficiaries, updating my will, protecting my kids' inheritance. They made a stressful time so much easier.",
      author: "Jennifer Lim",
      detail: "Recently divorced, mother of 1"
    },
    priority: "High",
    urgency: "Within 2-4 weeks"
  }
};

export function generateStaticParams() {
  return [
    { persona: 'concerned-parent' },
    { persona: 'busy-achiever' },
    { persona: 'wealth-builder' },
    { persona: 'life-changer' }
  ];
}

export default function QuizResultsPage({ params }: { params: { persona: string } }) {
  const result = resultsData[params.persona as keyof typeof resultsData];
  
  if (!result) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-red-600">Invalid Results</h1>
          <p className="mt-4">Please retake the quiz to get your results.</p>
          <Link href="/quiz">
            <Button className="mt-6">Back to Quiz</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Persona Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">{result.icon}</div>
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${
            result.priority === 'High' || result.priority === 'Critical' ? 'bg-red-100 text-red-800' :
            result.priority === 'Strategic' ? 'bg-purple-100 text-purple-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            Priority: {result.priority} | Timeline: {result.urgency}
          </div>
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{result.title}</h1>
          <h2 className="text-2xl text-gray-700 mb-6">{result.subtitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{result.description}</p>
        </div>

        {/* Pain Point */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-red-900 mb-2">Your Main Concern:</h3>
          <p className="text-red-800">{result.painPoint}</p>
        </div>

        {/* Value Offer */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-12">
          <h3 className="text-lg font-bold text-green-900 mb-2">Your Free Download:</h3>
          <p className="text-green-800 mb-4">{result.valueOffer}</p>
          <Button className="bg-green-600 hover:bg-green-700">
            📥 Download Your Personalized Guide
          </Button>
        </div>

        {/* Key Insights & Next Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                💡
              </span>
              Key Insights for You
            </h3>
            <ul className="space-y-4">
              {result.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                ✓
              </span>
              Your Next Steps
            </h3>
            <ul className="space-y-4">
              {result.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
            Recommended Services for {result.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {result.recommendedServices.map((service, index) => (
              <div key={index} className="border-2 border-primary-200 rounded-lg p-4 text-center hover:border-primary-500 transition-colors">
                <p className="text-gray-800 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-primary-50 rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl text-primary-600 mb-4">"</div>
            <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
              {result.testimonial.quote}
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">{result.testimonial.author}</p>
                <p className="text-sm text-gray-600">{result.testimonial.detail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-8">
          <h3 className="text-3xl font-bold text-primary-900 mb-4">Ready to Protect Your Family?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the next step towards securing your family's future. Our estate planning specialists are ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                📅 Book Free Consultation
              </Button>
            </Link>
            <Link href="/assessment">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                📊 Take Full Assessment (50 Questions)
              </Button>
            </Link>
          </div>

          <div className="border-t pt-6 mt-6">
            <p className="text-sm text-gray-500">
              🔒 100% confidential | ⚡ Fast response within 24 hours | 🎯 Personalized solutions
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/quiz">
            <Button variant="outline" size="sm">
              ← Retake Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
