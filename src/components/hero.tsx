'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex space-x-2">
          <div>
            <h1 className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi, I&apos;m Shubham
            </h1>
            <p className="inline-block max-w-[600px] md:text-xl">
              Software Engineer on the journey of becoming an Entrepreneur & Indie Maker. I am
              passionate about building products. Very active on X.
            </p>
          </div>
          <Image
            src="https://avatars.githubusercontent.com/u/77788249?v=4"
            alt="Shubham Kumar"
            width={120}
            height={120}
            className="mb-4 rounded-full border-4 border-purple-100"
          />
        </div>
      </div>
    </section>
  );
}