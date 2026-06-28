'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, School, Users, ClipboardList, Calendar, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GoldCorner from '@/components/ui/GoldCorner';
import OrnateDivider from '@/components/ui/OrnateDivider';
import { events } from '@/lib/data';

const steps = [
  { id: 'school', label: 'Clan Details', icon: School },
  { id: 'team', label: 'Vanguard Details', icon: Users },
  { id: 'participants', label: 'Warriors', icon: ClipboardList },
  { id: 'events', label: 'Arena Selection', icon: Calendar },
  { id: 'confirm', label: 'Manifest', icon: CheckCircle },
];

export default function RegistrationPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolAddress: '',
    teacherName: '',
    teacherEmail: '',
    teacherPhone: '',
    teamName: '',
    teamLead: '',
    teamLeadEmail: '',
    teamLeadPhone: '',
    participants: [{ name: '', email: '', phone: '', class: '' }],
    selectedEvents: [] as string[],
  });

  const updateParticipant = (i: number, field: string, value: string) => {
    const updated = [...formData.participants];
    updated[i] = { ...updated[i], [field]: value };
    setFormData({ ...formData, participants: updated });
  };

  const addParticipant = () => {
    setFormData({
      ...formData,
      participants: [...formData.participants, { name: '', email: '', phone: '', class: '' }],
    });
  };

  const removeParticipant = (i: number) => {
    if (formData.participants.length > 1) {
      setFormData({
        ...formData,
        participants: formData.participants.filter((_, idx) => idx !== i),
      });
    }
  };

  const toggleEvent = (slug: string) => {
    setFormData({
      ...formData,
      selectedEvents: formData.selectedEvents.includes(slug)
        ? formData.selectedEvents.filter((s) => s !== slug)
        : [...formData.selectedEvents, slug],
    });
  };

  const canProceed = () => {
    switch (step) {
      case 0: return formData.schoolName && formData.teacherName && formData.teacherEmail && formData.teacherPhone;
      case 1: return formData.teamName && formData.teamLead && formData.teamLeadEmail;
      case 2: return formData.participants.every((p) => p.name && p.email);
      case 3: return formData.selectedEvents.length > 0;
      default: return true;
    }
  };

  return (
    <div className="pt-24 lg:pt-28 min-h-screen bg-background">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2">
              Enter the <span className="text-gradient">Labyrinth</span>
            </h1>
            <p className="text-secondary/70 text-center max-w-xl mx-auto mb-2 font-heading-alt text-sm md:text-base uppercase tracking-widest">
              Register your clan for Chakravyuh 2026
            </p>
            <OrnateDivider />
          </AnimatedSection>

          {/* Stepper container */}
          <div className="mb-10 tamrapatra-card rounded-xl p-5 border border-secondary/20">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => {
                const StepIcon = s.icon;
                const isActive = i === step;
                const isDone = i < step;
                return (
                  <div key={s.id} className="flex-1 text-center relative">
                    <div className="hidden md:flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border shadow-md ${
                          isDone
                            ? 'bg-secondary text-background border-secondary'
                            : isActive
                            ? 'bg-primary/30 text-secondary border-secondary drop-shadow-[0_0_6px_rgba(212,175,55,0.3)]'
                            : 'bg-background/80 text-white/30 border-secondary/20'
                        }`}
                      >
                        {isDone ? <Check size={16} className="stroke-[2.5]" /> : <StepIcon size={16} />}
                      </div>
                      <span
                        className={`text-[10px] mt-2 font-heading-alt uppercase tracking-wider font-semibold ${
                          isActive ? 'text-secondary' : isDone ? 'text-white/60' : 'text-white/30'
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>

                    <div className="md:hidden">
                      <div
                        className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center border ${
                          isDone || isActive ? 'bg-secondary text-background border-secondary font-bold' : 'bg-background/80 text-white/30 border-secondary/25'
                        }`}
                      >
                        {isDone ? <Check size={14} className="stroke-[2.5]" /> : <span className="text-xs">{i + 1}</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Golden Stepper Progress Line */}
            <div className="mt-5 h-1.5 bg-background border border-secondary/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-500"
                style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && (
                <div className="tamrapatra-card rounded-2xl p-6 md:p-8 border border-secondary/25">
                  <GoldCorner />
                  <h2 className="font-heading text-2xl text-white mb-6 tracking-wide">Clan Credentials (School Details)</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">School Name</label>
                      <input
                        type="text"
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                        placeholder="Enter official school name"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">School Address</label>
                      <textarea
                        value={formData.schoolAddress}
                        onChange={(e) => setFormData({ ...formData, schoolAddress: e.target.value })}
                        rows={2}
                        className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20 resize-none"
                        placeholder="Enter school location"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Teacher/Coordinator Name</label>
                        <input
                          type="text"
                          value={formData.teacherName}
                          onChange={(e) => setFormData({ ...formData, teacherName: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                          placeholder="Commander name"
                        />
                      </div>
                      <div>
                        <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Teacher Email</label>
                        <input
                          type="email"
                          value={formData.teacherEmail}
                          onChange={(e) => setFormData({ ...formData, teacherEmail: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                          placeholder="teacher@school.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Teacher Phone</label>
                      <input
                        type="tel"
                        value={formData.teacherPhone}
                        onChange={(e) => setFormData({ ...formData, teacherPhone: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                        placeholder="Coordinator contact scroll"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="tamrapatra-card rounded-2xl p-6 md:p-8 border border-secondary/25">
                  <GoldCorner />
                  <h2 className="font-heading text-2xl text-white mb-6 tracking-wide">Vanguard Details (Team Details)</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Clan/Team Name</label>
                      <input
                        type="text"
                        value={formData.teamName}
                        onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                        placeholder="Enter your clan's combat name"
                      />
                    </div>
                    <div>
                      <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Team Leader Name</label>
                      <input
                        type="text"
                        value={formData.teamLead}
                        onChange={(e) => setFormData({ ...formData, teamLead: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                        placeholder="Primary vanguard leader"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Team Leader Email</label>
                        <input
                          type="email"
                          value={formData.teamLeadEmail}
                          onChange={(e) => setFormData({ ...formData, teamLeadEmail: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                          placeholder="leader@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold">Team Leader Phone</label>
                        <input
                          type="tel"
                          value={formData.teamLeadPhone}
                          onChange={(e) => setFormData({ ...formData, teamLeadPhone: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-secondary/20 rounded-lg text-white text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                          placeholder="Leader contact"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="tamrapatra-card rounded-2xl p-6 md:p-8 border border-secondary/25">
                  <GoldCorner />
                  <div className="flex items-center justify-between mb-6 border-b border-secondary/15 pb-4">
                    <h2 className="font-heading text-2xl text-white">Clan Warriors (Members)</h2>
                    <button
                      onClick={addParticipant}
                      className="px-5 py-2 border border-secondary bg-primary/20 text-secondary rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-background transition-colors cursor-pointer"
                    >
                      + Add Warrior
                    </button>
                  </div>
                  <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-1">
                    {formData.participants.map((p, i) => (
                      <div key={i} className="p-5 bg-background/50 rounded-xl border border-secondary/15 relative">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-secondary text-xs uppercase tracking-wider font-heading-alt font-semibold">Warrior {i + 1}</span>
                          {formData.participants.length > 1 && (
                            <button
                              onClick={() => removeParticipant(i)}
                              className="text-red-400/80 hover:text-red-400 text-xs font-heading-alt uppercase font-bold tracking-wider"
                            >
                              Retire
                            </button>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={p.name}
                            onChange={(e) => updateParticipant(i, 'name', e.target.value)}
                            placeholder="Full name"
                            className="w-full px-3 py-2.5 bg-background border border-secondary/20 rounded-lg text-white text-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                          />
                          <input
                            type="email"
                            value={p.email}
                            onChange={(e) => updateParticipant(i, 'email', e.target.value)}
                            placeholder="Email"
                            className="w-full px-3 py-2.5 bg-background border border-secondary/20 rounded-lg text-white text-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                          />
                          <input
                            type="tel"
                            value={p.phone}
                            onChange={(e) => updateParticipant(i, 'phone', e.target.value)}
                            placeholder="Phone"
                            className="w-full px-3 py-2.5 bg-background border border-secondary/20 rounded-lg text-white text-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                          />
                          <input
                            type="text"
                            value={p.class}
                            onChange={(e) => updateParticipant(i, 'class', e.target.value)}
                            placeholder="Grade / Clan Group"
                            className="w-full px-3 py-2.5 bg-background border border-secondary/20 rounded-lg text-white text-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-alt placeholder-white/20"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="tamrapatra-card rounded-2xl p-6 md:p-8 border border-secondary/25">
                  <GoldCorner />
                  <h2 className="font-heading text-2xl text-white mb-2">Claim Arenas</h2>
                  <p className="text-white/60 text-sm mb-6 font-body-alt">Select the competitive grounds your clan will invade.</p>
                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                    {events.map((event) => (
                      <button
                        key={event.id}
                        onClick={() => toggleEvent(event.slug)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer relative overflow-hidden ${
                          formData.selectedEvents.includes(event.slug)
                            ? 'bg-secondary/15 border-secondary shadow-lg shadow-primary/20'
                            : 'bg-background/80 border-secondary/20 hover:border-secondary/55'
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all ${
                            formData.selectedEvents.includes(event.slug)
                              ? 'bg-secondary border-secondary'
                              : 'border-secondary/40'
                          }`}
                        >
                          {formData.selectedEvents.includes(event.slug) && (
                            <Check size={14} className="text-background stroke-[3]" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-base font-heading tracking-wide">{event.name}</p>
                          <p className="text-secondary/70 text-xs font-heading-alt font-semibold tracking-wider">{event.sanskritName} — {event.tagline}</p>
                        </div>
                        <span className="text-white/50 text-xs font-heading-alt uppercase tracking-widest">{event.timeSlot}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="tamrapatra-card rounded-2xl p-6 md:p-8 border border-secondary/25">
                  <GoldCorner />
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/20">
                      <CheckCircle className="w-8 h-8 text-secondary" />
                    </div>
                    <h2 className="font-heading text-3xl text-gradient mb-2">Registration Manifest</h2>
                    <p className="text-white/60 text-sm font-body-alt">Verify the details of your vanguard before sealing the scroll.</p>
                  </div>

                  <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-1">
                    <Section title="School Details">
                      <p className="text-white text-base font-heading tracking-wide">{formData.schoolName}</p>
                      <p className="text-white/60 text-xs font-body-alt mt-1">{formData.schoolAddress}</p>
                      <p className="text-secondary font-heading-alt text-xs font-semibold uppercase tracking-wider mt-2">Commander: {formData.teacherName} — {formData.teacherEmail}</p>
                    </Section>

                    <Section title="Team Details">
                      <p className="text-white text-base font-heading tracking-wide">{formData.teamName}</p>
                      <p className="text-secondary font-heading-alt text-xs font-semibold uppercase tracking-wider mt-1">Vanguard Leader: {formData.teamLead} — {formData.teamLeadEmail}</p>
                    </Section>

                    <Section title={`Warriors Participating (${formData.participants.length})`}>
                      <div className="grid sm:grid-cols-2 gap-2 mt-1">
                        {formData.participants.map((p, i) => (
                          <div key={i} className="p-3 bg-background/50 border border-secondary/10 rounded-lg">
                            <p className="text-white text-xs font-heading tracking-wider">{p.name}</p>
                            <p className="text-white/50 text-[10px] font-body-alt mt-0.5">{p.email}</p>
                          </div>
                        ))}
                      </div>
                    </Section>

                    <Section title="Claimed Arenas">
                      <div className="flex flex-wrap gap-2 mt-1">
                        {formData.selectedEvents.map((slug) => {
                          const event = events.find((e) => e.slug === slug);
                          return event ? (
                            <span key={slug} className="px-3.5 py-1.5 bg-primary/20 border border-secondary/45 text-secondary text-xs rounded-full font-heading-alt font-semibold uppercase tracking-wider select-none shadow-sm">
                              {event.name} ({event.sanskritName})
                            </span>
                          ) : null;
                        })}
                      </div>
                    </Section>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8 relative z-20">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 font-semibold cursor-pointer border ${
                step === 0
                  ? 'text-white/20 border-white/5 cursor-not-allowed'
                  : 'text-white border-secondary/30 hover:bg-secondary/10'
              }`}
            >
              <ChevronLeft size={14} />
              Previous
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer ${
                  canProceed()
                    ? 'bg-gradient-to-r from-primary to-primary/80 border border-secondary text-secondary hover:from-secondary hover:to-secondary hover:text-background glow-sm'
                    : 'bg-white/5 text-white/20 border-white/5 cursor-not-allowed'
                }`}
              >
                Next
                <ChevronRight size={14} />
              </button>
            ) : (
              <button className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-secondary to-accent border border-secondary text-background font-bold rounded-xl hover:from-accent hover:to-secondary hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 text-xs uppercase tracking-widest cursor-pointer">
                <Check size={14} className="stroke-[2.5]" />
                Seal Manifest
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-5 bg-background/60 rounded-xl border border-secondary/15 relative">
      <h3 className="text-secondary text-xs uppercase tracking-wider mb-2 font-heading-alt font-semibold border-b border-secondary/10 pb-1">{title}</h3>
      {children}
    </div>
  );
}
