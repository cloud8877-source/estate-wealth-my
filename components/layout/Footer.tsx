export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} EstateWealth MY. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 mx-2">Privacy Policy</a>
          <a href="/terms" className="text-sm text-gray-500 hover:text-gray-700 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
