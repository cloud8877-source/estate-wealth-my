import NewHero from '@/components/sections/NewHero';
import NewProblemSection from '@/components/sections/NewProblemSection';
import NewProcessSection from '@/components/sections/NewProcessSection';
import NewPackagesSection from '@/components/sections/NewPackagesSection';
import NewTestimonials from '@/components/sections/NewTestimonials';
import NewCTA from '@/components/sections/NewCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EstateWealth MY | Premier Estate Planning",
  description: "Malaysia's premier tech-enabled estate planning firm. Secure your assets and guardianship in 2 weeks.",
  openGraph: {
    title: "EstateWealth MY | Premier Estate Planning",
    description: "Malaysia's premier tech-enabled estate planning firm. Secure your assets and guardianship in 2 weeks.",
    url: "https://estatewealthmy.com",
  }
};

export default function LandingPage() {
  return (
    <div>
      <NewHero />
      <NewProblemSection />
      <NewProcessSection />
      <NewPackagesSection />
      <NewTestimonials />
      <NewCTA />
    </div>
  );
}
