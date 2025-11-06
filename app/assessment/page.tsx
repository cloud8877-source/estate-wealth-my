import Link from 'next/link';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Complete Estate Planning Assessment Malaysia | 50-Question Health Check",
  description: "Free comprehensive 50-question estate planning assessment. Get your protection score (0-100) with detailed gap analysis across family, assets, legal documents, risk factors. Personalized recommendations for will writing, trusts, insurance.",
  keywords: "estate planning assessment, estate health check malaysia, will planning assessment, asset protection assessment, estate gap analysis",
  openGraph: {
    title: "Free Estate Planning Assessment - Get Your Protection Score",
    description: "50-question comprehensive assessment. Get detailed gap analysis and personalized estate planning recommendations.",
    url: "https://estatewealthmy.com/assessment",
  }
};

export default function AssessmentPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">Your Complete Estate Health Assessment</h1>
      <p className="mt-4 text-lg text-gray-600">Get your personalized protection plan in 15 minutes.</p>
      <div className="mt-8">
        <Link href="/assessment/questions">
          <Button size="lg">Start Assessment</Button>
        </Link>
      </div>
    </div>
  );
}
