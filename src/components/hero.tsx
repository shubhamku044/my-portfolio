'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaEnvelopeCircleCheck } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex space-x-4">
          <div className="">
            <h1 className="inline-block text-3xl font-bold tracking-tighter text-stone-900 sm:text-5xl">
              Hi, I&apos;m Shubham 👋
            </h1>
            <p className="mt-2 inline-block max-w-[600px] md:text-xl">
              Software engineer building scalable web solutions. Solving complex problems through
              modern technologies.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <div className="inline-block animate-pulse rounded-lg bg-amber-100/90 px-4 py-2">
                <div className="flex items-center text-sm font-medium text-stone-800/90">
                  <span className="mr-2">🚀</span>
                  Actively exploring new opportunities
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="mailto:shubhamku044@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg text-sm font-medium transition-all"
                >
                  <FaEnvelopeCircleCheck className="size-6 text-stone-900" />
                </Link>
                <Link
                  href="https://x.com/shubhamku044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg text-sm font-medium transition-all"
                >
                  <FaXTwitter className="size-6 text-stone-900" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex min-w-24 items-center justify-center overflow-hidden rounded-full sm:min-w-36">
            <Image
              src="https://avatars.githubusercontent.com/u/77788249?v=4"
              alt="Shubham Kumar"
              width={200}
              height={200}
              className="aspect-square rounded-full border-4 border-amber-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}