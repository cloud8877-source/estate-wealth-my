import ScoreApp from '../components/ScoreApp/ScoreApp';

export default function AssessmentPage() {
  return (
    <div className="bg-primary-100 dark:bg-primary-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-primary-900 sm:text-5xl tracking-tight dark:text-primary-50">
            Free Estate Planning Assessment
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-600 dark:text-primary-300">
            Answer a few simple questions to get your personalized estate planning score and discover your urgency level in just 2 minutes.
          </p>
        </div>
        <ScoreApp />
      </div>
    </div>
  );
}
