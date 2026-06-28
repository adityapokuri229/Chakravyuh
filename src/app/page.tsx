import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import ThemeSection from '@/components/home/ThemeSection';
import EventsOverview from '@/components/home/EventsOverview';
import Timeline from '@/components/home/Timeline';
import SchedulePreview from '@/components/home/SchedulePreview';
import Gallery from '@/components/home/Gallery';
import Sponsors from '@/components/home/Sponsors';
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
      <Gallery />
      <Sponsors />
      <ContactSection />
    </>
  );
}
