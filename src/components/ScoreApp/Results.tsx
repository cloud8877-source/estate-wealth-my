import { ScoreResult } from '../../types';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '../ui/button';

interface ResultsProps {
  result: ScoreResult;
  onRetake: () => void;
}

const colorMap = {
    red: { text: 'text-red-700 dark:text-red-300', bg: 'bg-red-100 dark:bg-red-900/50', border: 'border-red-500 dark:border-red-700', progress: 'bg-red-500' },
    orange: { text: 'text-orange-700 dark:text-orange-300', bg: 'bg-orange-100 dark:bg-orange-900/50', border: 'border-orange-500 dark:border-orange-700', progress: 'bg-orange-500' },
    yellow: { text: 'text-yellow-700 dark:text-yellow-300', bg: 'bg-yellow-100 dark:bg-yellow-900/50', border: 'border-yellow-500 dark:border-yellow-700', progress: 'bg-yellow-500' },
    green: { text: 'text-green-700 dark:text-green-300', bg: 'bg-green-100 dark:bg-green-900/50', border: 'border-green-500 dark:border-green-700', progress: 'bg-green-500' }
};

export default function Results({ result, onRetake }: ResultsProps) {
  const { urgencyPercentage, urgencyLevel, urgencyColor, recommendations } = result;
  const colors = colorMap[urgencyColor];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-primary-900 dark:text-primary-100">Your Estate Planning Score</h2>
      <p className="mt-2 text-lg text-primary-600 dark:text-primary-300">Based on your answers, here is your result.</p>
      
      <div className={`mt-8 p-6 rounded-lg ${colors.bg} border ${colors.border}`}>
        <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-200">Urgency Level</h3>
        <p className={`text-4xl font-bold ${colors.text} my-2`}>{urgencyLevel}</p>
        <div className="w-full bg-primary-200 dark:bg-primary-600 rounded-full h-4 my-4">
            <div className={`${colors.progress} h-4 rounded-full`} style={{ width: `${urgencyPercentage}%`}}></div>
        </div>
        <p className="font-medium text-primary-700 dark:text-primary-200">{urgencyPercentage}% Urgency Score</p>
      </div>

      <div className="mt-10 text-left">
        <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100">Recommended Next Steps</h3>
        <ul className="mt-4 space-y-3">
          {recommendations.map((rec, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-0.5" />
              <span className="text-primary-700 dark:text-primary-300">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-200 dark:border-primary-700">
        <h3 className="text-xl font-bold dark:text-primary-100">Ready to take action?</h3>
        <p className="mt-2 text-primary-600 dark:text-primary-300">A 15-minute call with our specialist can provide clarity and a clear path forward. It's complimentary and there's no obligation.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
             <Button onClick={onRetake} variant="outline" size="lg">Retake Assessment</Button>
             <a href="tel:+60123456789">
                <Button variant="primary" size="lg">Schedule a Free Consultation</Button>
            </a>
        </div>
      </div>
    </div>
  );
}
