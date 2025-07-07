import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="font-bold text-9xl text-primary-600 dark:text-primary-400">404</div>
        <h1 className="font-extrabold text-4xl text-gray-900 dark:text-white">Page Not Found</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Oops! The page you&apos;re looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="primary" size="lg">
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
