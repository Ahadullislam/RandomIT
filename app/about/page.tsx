import ParticlesBackground from '@/components/ui/ParticlesBackground';
import TeamSection from '@/components/about/TeamSection';
import TimelineSection from '@/components/about/TimelineSection';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-28 flex flex-col items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-700 dark:text-primary-300 drop-shadow-lg">About Logic & Pixel Technologies</h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">We are passionate about delivering innovative IT solutions that empower businesses and transform industries.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="rounded-xl p-6 shadow-md bg-primary-50/40 dark:bg-primary-900/40 backdrop-blur-lg border border-primary-200 dark:border-primary-800">
              <h2 className="text-2xl font-semibold mb-2 text-primary-700 dark:text-primary-300">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-200">To deliver cutting-edge, reliable, and scalable software solutions that drive growth, efficiency, and innovation for our clients worldwide.</p>
            </div>
            <div className="rounded-xl p-6 shadow-md bg-secondary-50/40 dark:bg-secondary-900/40 backdrop-blur-lg border border-secondary-200 dark:border-secondary-800">
              <h2 className="text-2xl font-semibold mb-2 text-secondary-700 dark:text-secondary-300">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-200">To be a global leader in technology, recognized for our commitment to quality, creativity, and customer success.</p>
            </div>
          </div>
        </section>
        <TeamSection />
        <TimelineSection />
      </div>
    </div>
  );
}
