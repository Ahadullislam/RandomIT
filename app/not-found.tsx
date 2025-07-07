import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Page Not Found</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Button variant="primary" size="lg" asChild>
            <Link href="/">
              Go back home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
