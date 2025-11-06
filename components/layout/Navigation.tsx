import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link href="/services" className="text-gray-700 hover:text-primary-700">Services</Link>
      <Link href="/quiz" className="text-gray-700 hover:text-primary-700">Quick Quiz</Link>
      <Link href="/assessment" className="text-gray-700 hover:text-primary-700">Deep Assessment</Link>
    </nav>
  );
}
