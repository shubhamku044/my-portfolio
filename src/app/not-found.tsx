import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="flex h-dvh items-center justify-center bg-amber-50 p-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="relative mx-auto mb-12 size-64 animate-pulse">
          <svg viewBox="0 0 200 200" className="text-amber-100">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
            <circle cx="140" cy="80" r="12" className="fill-amber-200" />
            <circle cx="80" cy="130" r="8" className="fill-amber-200" />
            <path
              d="M100 30 L110 50 L90 50 Z"
              className="animate-fade-in-up fill-stone-800"
              style={{ animationDelay: '0.5s' }}
            />
            <circle cx="40" cy="40" r="2" className="animate-pulse fill-stone-800" />
            <circle cx="160" cy="60" r="1.5" className="animate-pulse fill-stone-800" />
          </svg>
        </div>

        <h1 className="text-6xl font-bold text-stone-900 sm:text-7xl">404</h1>
        <p className="mt-4 text-xl text-stone-800/90">Lost in the digital cosmos...</p>
        <p className="mt-2 text-stone-800/80">
          The page you&apos;re looking for seems to have entered orbit.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-sm font-medium text-amber-50 transition-all hover:bg-amber-700 hover:shadow-sm"
          >
            <ArrowLeftIcon className="size-4" />
            Go Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-stone-800/70">
          Still lost? Try contacting me via{' '}
          <a
            href="mailto:shubhamku044@gmail.com"
            className="text-amber-600 underline hover:text-amber-700"
          >
            email
          </a>
        </p>
      </div>
    </div>
  );
}