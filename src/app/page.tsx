import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import ThemeSection from '@/components/home/ThemeSection';
import EventsOverview from '@/components/home/EventsOverview';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ThemeSection />
      <EventsOverview />
    </>
  );
}
