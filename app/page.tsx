import Hero from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/ProblemSection';
import HowItWorks from '@/components/sections/HowItWorks';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Estate Planning Malaysia | Will Writing | Complete in 2 Weeks",
  description: "Malaysia's #1 tech-powered estate planning for non-Muslims. Will writing, trust services, asset protection. 500+ families protected. Free consultation. Complete in 2 weeks, not 2 months.",
  keywords: "estate planning malaysia, will writing malaysia, trust services, estate planning cost, living trust malaysia, will writer KL, asset protection, inheritance planning",
  openGraph: {
    title: "Estate Planning Malaysia | Tech-Powered Will Writing & Trust Services",
    description: "Complete estate planning in 2 weeks. 500+ Malaysian families protected. Free consultation.",
    url: "https://estatewealthmy.com",
  }
};

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
