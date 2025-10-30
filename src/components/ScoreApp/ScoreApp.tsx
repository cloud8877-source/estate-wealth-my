import { useState } from 'react';
import { questions } from '../../lib/questions';
import { calculateScore } from '../../lib/scoreCalculator';
import { UserAnswers, ScoreResult } from '../../types';
import QuestionComponent from './Question';
import Results from './Results';
import LeadCapture from './LeadCapture';

type AppStage = 'questions' | 'leadCapture' | 'results';

export default function ScoreApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [stage, setStage] = useState<AppStage>('questions');
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);

  const handleAnswer = (questionId: string, score: number) => {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const result = calculateScore(newAnswers);
      setScoreResult(result);
      setStage('leadCapture');
    }
  };

  const handleLeadCaptureSubmit = () => {
    setStage('results');
  };
  
  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setScoreResult(null);
    setStage('questions');
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-primary-800 rounded-xl shadow-2xl overflow-hidden my-8">
      <div className="p-8">
        {stage === 'questions' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-primary-800 dark:text-primary-100 mb-2">
                Question {currentQuestionIndex + 1} of {questions.length}
              </h2>
              <div className="w-full bg-primary-200 dark:bg-primary-600 rounded-full h-2.5">
                <div 
                  className="bg-accent-500 h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${progress}%` }}>
                </div>
              </div>
            </div>
            <QuestionComponent
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          </div>
        )}
        {stage === 'leadCapture' && scoreResult && (
          <LeadCapture 
            scoreResult={scoreResult} 
            onSubmit={handleLeadCaptureSubmit} 
          />
        )}
        {stage === 'results' && scoreResult && (
          <Results 
            result={scoreResult} 
            onRetake={handleRetake} 
          />
        )}
      </div>
    </div>
  );
}
