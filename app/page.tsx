import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';
import ParticlesBackground from '@/components/ui/ParticlesBackground';

// Dynamically import components with no SSR to avoid hydration issues
const Hero = dynamic(() => import('@/components/home/Hero'), {
  ssr: false,
  loading: () => <Skeleton className="h-screen w-full" />,
});

const AboutUs = dynamic(() => import('@/components/home/AboutUs'), {
  loading: () => <Skeleton className="h-96 w-full" />,
});

const Services = dynamic(() => import('@/components/home/Services'), {
  loading: () => <Skeleton className="h-96 w-full" />,
});

const Industries = dynamic(() => import('@/components/home/Industries'), {
  loading: () => <Skeleton className="h-96 w-full" />,
});

const ClientsSection = dynamic(() => import('@/components/home/ClientsSection'), {
  loading: () => <Skeleton className="h-48 w-full" />,
});

const Testimonials = dynamic(() => import('@/components/home/Testimonials'), {
  loading: () => <Skeleton className="h-96 w-full" />,
});

const CallToAction = dynamic(() => import('@/components/home/CallToAction'), {
  loading: () => <Skeleton className="h-96 w-full" />,
});

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <ParticlesBackground key="home-particles" />
      <div className="relative z-10">
        <Suspense fallback={<Skeleton className="h-screen w-full" />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <AboutUs />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <Industries />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-48 w-full" />}>
          <ClientsSection />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96 w-full" />}>
          <CallToAction />
        </Suspense>
      </div>
    </main>
  );
}

// Add metadata for better SEO
export const metadata = {
  title: 'Random IT - Innovative IT Solutions',
  description:
    'Leading software development company specializing in custom solutions, web development, mobile apps, and enterprise software.',
  keywords: [
    'software development',
    'web development',
    'mobile apps',
    'custom software',
    'IT solutions',
    'EHR',
    'ERP',
    'healthcare software',
  ],
  openGraph: {
    title: 'Random IT',
    description: 'Innovative IT Solutions for Every Industry',
    url: 'https://randomit.tech',
    siteName: 'Random IT',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Random IT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random IT',
    description: 'Innovative IT Solutions for Every Industry',
    images: ['/images/og-image.jpg'],
  },
};
