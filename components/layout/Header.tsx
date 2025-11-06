import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary-900">
          <Link href="/">EstateWealth MY</Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
