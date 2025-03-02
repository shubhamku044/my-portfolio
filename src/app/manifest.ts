import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shubham Sharma | Full-Stack Developer & DevOps Enthusiast',
    short_name: 'Shubhams.dev',
    description:
      'Hello, I am Shubham Sharma, a full-stack developer specializing in TypeScript, Go',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffbeb',
    theme_color: '#fffbeb',
    orientation: 'portrait',
    // icons: [
    //   {
    //     src: '/icons/icon-192x192.png',
    //     sizes: '192x192',
    //     type: 'image/png',
    //   },
    //   {
    //     src: '/icons/icon-512x512.png',
    //     sizes: '512x512',
    //     type: 'image/png',
    //   },
    //   {
    //     src: '/favicon.ico',
    //     sizes: 'any',
    //     type: 'image/x-icon',
    //   },
    // ],
    scope: '/',
    lang: 'en',
    id: '/',
  };
}