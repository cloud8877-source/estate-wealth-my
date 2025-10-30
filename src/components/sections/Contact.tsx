import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Contact() {
  return (
    <section className="bg-primary-800 dark:bg-primary-800">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to Secure Your Legacy?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-200">
          Take the first step towards peace of mind. Get your free, no-obligation estate planning score or contact us for a confidential consultation.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link to="/assessment">
            <Button variant="secondary" size="lg">Get Free Assessment</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-primary-300 text-white hover:bg-white hover:text-primary-800 dark:border-primary-300 dark:text-white dark:hover:bg-white dark:hover:text-primary-800">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
