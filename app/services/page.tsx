import ParticlesBackground from '@/components/ui/ParticlesBackground';
import ServicesList from '@/components/services/ServicesList';

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="rounded-3xl border-2 border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-2xl p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-primary-700 dark:text-primary-300 drop-shadow-lg tracking-tight uppercase">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-12 text-center max-w-2xl mx-auto font-medium">
            We offer a full suite of software solutions for healthcare, business, and education. Explore our core services below.
          </p>
          <ServicesList />
        </div>
      </div>
    </div>
  );
}
