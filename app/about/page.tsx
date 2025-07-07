import ParticlesBackground from '@/components/ui/ParticlesBackground';
import TeamSection from '@/components/about/TeamSection';
import TimelineSection from '@/components/about/TimelineSection';

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28">
      <ParticlesBackground />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-12">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-700 drop-shadow-lg dark:text-primary-300 md:text-5xl">
            About Logic & Pixel Technologies
          </h1>
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-200">
            We are passionate about delivering innovative IT solutions that empower businesses and
            transform industries.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-primary-200 bg-primary-50/40 p-6 shadow-md backdrop-blur-lg dark:border-primary-800 dark:bg-primary-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-primary-700 dark:text-primary-300">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-200">
                To deliver cutting-edge, reliable, and scalable software solutions that drive
                growth, efficiency, and innovation for our clients worldwide.
              </p>
            </div>
            <div className="rounded-xl border border-secondary-200 bg-secondary-50/40 p-6 shadow-md backdrop-blur-lg dark:border-secondary-800 dark:bg-secondary-900/40">
              <h2 className="mb-2 text-2xl font-semibold text-secondary-700 dark:text-secondary-300">
                Our Vision
              </h2>
              <p className="text-gray-700 dark:text-gray-200">
                To be a global leader in technology, recognized for our commitment to quality,
                creativity, and customer success.
              </p>
            </div>
          </div>
        </section>
        <TeamSection />
        <TimelineSection />
      </div>
    </div>
  );
}
