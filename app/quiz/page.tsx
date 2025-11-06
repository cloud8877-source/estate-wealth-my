import Link from 'next/link';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Estate Planning Quiz Malaysia | Find Your Protection Type in 2 Minutes",
  description: "Take our free 2-minute quiz to discover your estate planning personality. Get personalized recommendations for will writing, trusts, and asset protection. 500+ families trust Estate Wealth My.",
  keywords: "estate planning quiz, will writing quiz malaysia, estate planning assessment, protection type quiz",
  openGraph: {
    title: "Free Estate Planning Quiz - Discover Your Protection Type",
    description: "2-minute quiz to find your personalized estate planning solution. Free consultation included.",
    url: "https://estatewealthmy.com/quiz",
  }
};

export default function QuickQuizPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">What Type of Estate Planner Are You?</h1>
      <p className="mt-4 text-lg text-gray-600">Discover your protection priority in 2 minutes.</p>
      <div className="mt-8">
        <Link href="/quiz/questions">
          <Button size="lg">Start Quiz</Button>
        </Link>
      </div>
    </div>
  );
}
