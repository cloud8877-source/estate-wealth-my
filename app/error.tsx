'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console for debugging (could integrate with error reporting service)
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-3xl font-serif font-bold text-brand-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          We encountered an unexpected error. Don&apos;t worry - your information is safe.
          Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset}>
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline">
              Go Home
            </Button>
          </Link>
        </div>
        <p className="text-sm text-slate-400 mt-8">
          Error ID: {error.digest || 'Unknown'}
        </p>
      </div>
    </div>
  );
}
