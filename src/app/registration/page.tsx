import Link from 'next/link';

export default function RegistrationPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-deep pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(218,122,5,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center">
          <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="font-samarkan text-4xl md:text-6xl text-gradient mb-4" style={{ fontStyle: 'normal' }}>
          Registrations Opening Soon
        </h1>

        <p className="text-white/70 text-sm md:text-base font-body-alt leading-relaxed mb-10 max-w-md mx-auto">
          The gates to the arena are being prepared. Check back soon to register your clan and claim your place in the Chakravyuh.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 btn-gold-outline px-8 py-3 text-xs"
        >
          &larr; Return Home
        </Link>
      </div>
    </section>
  );
}
