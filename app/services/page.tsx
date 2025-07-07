import ParticlesBackground from '@/components/ui/ParticlesBackground';
import ServicesList from '@/components/services/ServicesList';

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="rounded-3xl border-2 border-primary-200 bg-white/70 p-8 shadow-2xl backdrop-blur-xl dark:border-primary-800 dark:bg-gray-900/70 md:p-16">
          <h1 className="mb-8 text-center text-4xl font-extrabold uppercase tracking-tight text-primary-700 drop-shadow-lg dark:text-primary-300 md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg font-medium text-gray-700 dark:text-gray-200 md:text-xl">
            We offer a full suite of software solutions for healthcare, business, and education.
            Explore our core services below.
          </p>
          <ServicesList />
        </div>
      </div>
    </div>
  );
}
