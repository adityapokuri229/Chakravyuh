import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import ThemeSection from '@/components/home/ThemeSection';
import EventsOverview from '@/components/home/EventsOverview';
import Timeline from '@/components/home/Timeline';
import SchedulePreview from '@/components/home/SchedulePreview';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ThemeSection />
      <EventsOverview />
      <Timeline />
      <SchedulePreview />
      <ContactSection />
    </>
  );
}
