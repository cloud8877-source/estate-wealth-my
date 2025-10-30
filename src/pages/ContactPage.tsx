import { useForm, SubmitHandler } from 'react-hook-form';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

interface ContactFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the data to a backend service
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="relative bg-white dark:bg-primary-900">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-primary-50 dark:bg-primary-800" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-primary-50 dark:bg-primary-800 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-primary-900 dark:text-primary-100 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-primary-600 dark:text-primary-300">
              Have questions or ready to start planning? Reach out to us. We offer a complimentary, no-obligation initial consultation.
            </p>
            <dl className="mt-8 text-base text-primary-600 dark:text-primary-300">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-primary-400 dark:text-primary-500" aria-hidden="true" />
                  <span className="ml-3">+60 12-345 6789</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="flex-shrink-0 h-6 w-6 text-primary-400 dark:text-primary-500" aria-hidden="true" />
                  <span className="ml-3">info@estatewealthmy.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white dark:bg-primary-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <Input 
                  label="First Name" 
                  {...register('firstName', { required: 'First name is required' })} 
                  error={errors.firstName?.message} 
                />
                <Input 
                  label="Last Name" 
                  {...register('lastName', { required: 'Last name is required' })} 
                  error={errors.lastName?.message} 
                />
              </div>
              <Input 
                label="Email" 
                type="email" 
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } })}
                error={errors.email?.message} 
              />
              <Input 
                label="Phone (Optional)" 
                type="tel" 
                {...register('phone')} 
              />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-primary-300 rounded-lg bg-primary-50 focus:outline-none focus:ring-2 focus:ring-accent-500 dark:bg-primary-700 dark:border-primary-600 dark:text-primary-100"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>}
              </div>
              <div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
