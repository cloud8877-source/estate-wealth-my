import { useForm, SubmitHandler } from 'react-hook-form';
import { ScoreResult } from '../../types';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface LeadCaptureProps {
  scoreResult: ScoreResult;
  onSubmit: (data: FormValues) => void;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

export default function LeadCapture({ scoreResult, onSubmit }: LeadCaptureProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();
  
  const processSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Lead captured:", data);
    // In a real app, you would send this to a backend/CRM
    onSubmit(data);
  };
  
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-primary-900 dark:text-primary-100">Your Results Are Ready!</h2>
      <p className="mt-4 text-lg text-primary-600 dark:text-primary-300">
        Your estate planning urgency is <span className="font-bold">{scoreResult.urgencyLevel}</span>. 
        Enter your details below to see your full report and personalized recommendations.
      </p>

      <form onSubmit={handleSubmit(processSubmit)} className="mt-8 max-w-lg mx-auto text-left space-y-6">
        <Input 
          label="Full Name"
          {...register("name", { required: "Name is required" })}
          error={errors.name?.message}
          placeholder="e.g. John Doe"
        />
        
        <Input 
          label="Email Address"
          type="email"
          {...register("email", { 
            required: "Email is required", 
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          error={errors.email?.message}
          placeholder="you@example.com"
        />

        <Input 
          label="Phone Number (Optional)"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
          placeholder="012-345 6789"
        />

        <div className="pt-2">
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'See My Full Report'}
            </Button>
        </div>
        
        <p className="text-xs text-primary-500 dark:text-primary-500 text-center">
          By submitting, you agree to our Privacy Policy and to receive a copy of your results via email.
        </p>
      </form>
    </div>
  );
}
