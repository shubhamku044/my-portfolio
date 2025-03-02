'use client';
import Image from 'next/image';

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
              Software Engineer on the journey of becoming an Entrepreneur & Indie Maker. I am
              passionate about building products. Very active on X.
            </p>
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