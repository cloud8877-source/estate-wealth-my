export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-primary-900 sm:text-4xl dark:text-primary-50">
              Your Trusted Partner in Estate Planning
            </h2>
            <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
              At EstateWealthMY, we understand the unique cultural and legal landscape of estate planning in Malaysia. Our mission is to provide clear, compassionate, and comprehensive guidance to help you protect what matters most.
            </p>
            <div className="mt-6 space-y-4">
              <p className="text-primary-600 dark:text-primary-300 flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span><strong>Client-Centric Approach:</strong> We tailor every plan to your specific family needs and financial goals.</span>
              </p>
              <p className="text-primary-600 dark:text-primary-300 flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span><strong>Expert Knowledge:</strong> Our team consists of licensed professionals with deep expertise in Malaysian inheritance law.</span>
              </p>
              <p className="text-primary-600 dark:text-primary-300 flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-accent-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span><strong>Confidential & Professional:</strong> We handle all matters with the utmost discretion and professionalism.</span>
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img 
              className="rounded-xl shadow-lg" 
              src="https://picsum.photos/600/400?grayscale" 
              alt="Estate planning meeting" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
