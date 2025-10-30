import { Question, QuestionOption } from '../../types';
import { Card } from '../ui/Card';

interface QuestionProps {
  question: Question;
  onAnswer: (questionId: string, score: number) => void;
}

export default function QuestionComponent({ question, onAnswer }: QuestionProps) {
  const handleOptionClick = (option: QuestionOption) => {
    onAnswer(question.id, option.score);
  };

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100">{question.question}</h3>
      {question.description && (
        <p className="mt-2 text-primary-600 dark:text-primary-300">{question.description}</p>
      )}
      <div className="mt-8 space-y-4">
        {question.options.map((option, index) => (
          <Card 
            key={index} 
            onClick={() => handleOptionClick(option)}
            className="p-4 border border-primary-200 dark:border-primary-700"
          >
            <p className="font-medium text-lg text-primary-800 dark:text-primary-200">{option.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
