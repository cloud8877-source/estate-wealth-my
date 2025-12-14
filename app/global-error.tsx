'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-MY">
      <body style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        fontFamily: 'system-ui, sans-serif',
        padding: '24px'
      }}>
        <div style={{ maxWidth: '400px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>🔧</div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#0f172a',
            marginBottom: '16px'
          }}>
            Critical Error
          </h1>
          <p style={{
            color: '#64748b',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            A critical error occurred. We apologize for the inconvenience.
            Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            style={{
              backgroundColor: '#c5a059',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '4px',
              border: 'none',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              marginRight: '12px'
            }}
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              backgroundColor: 'transparent',
              color: '#0f172a',
              padding: '12px 32px',
              borderRadius: '4px',
              border: '2px solid #c5a059',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Go Home
          </button>
        </div>
      </body>
    </html>
  );
}
