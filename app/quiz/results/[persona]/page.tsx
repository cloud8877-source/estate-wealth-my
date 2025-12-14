import Link from 'next/link';
import Button from '@/components/ui/Button';
import QuizResultsContent from '@/components/QuizResultsContent';

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
      <div className="min-h-screen bg-brand-cream py-16">
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

  return <QuizResultsContent result={result} persona={params.persona} />;
}
