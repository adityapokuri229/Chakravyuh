'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Calendar, Image, Users, Download,
  Settings, Plus, Edit, Trash2, Upload, Clock,
  MessageSquare, Phone, Trophy,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

type Tab = 'dashboard' | 'events' | 'schedule' | 'gallery' | 'registrations' | 'sponsors' | 'faq' | 'contact' | 'settings';

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'events', label: 'Events', icon: Trophy },
  { id: 'schedule', label: 'Schedule', icon: Calendar },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'registrations', label: 'Registrations', icon: Users },
  { id: 'sponsors', label: 'Sponsors', icon: Settings },
  { id: 'faq', label: 'FAQ', icon: MessageSquare },
  { id: 'contact', label: 'Contact', icon: Phone },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const stats = [
  { label: 'Total Registrations', value: '0', change: '0', icon: Users },
  { label: 'Events', value: '5', change: '0', icon: Trophy },
  { label: 'Schools Registered', value: '0', change: '0', icon: Users },
  { label: 'Gallery Items', value: '0', change: '0', icon: Image },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  return (
    <div className="pt-24 lg:pt-28 min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <aside className="lg:w-64 shrink-0 border-r border-secondary/10">
          <div className="p-4 lg:p-6">
            <h2 className="font-heading text-white text-lg tracking-wider mb-6 hidden lg:block">
              Admin Panel
            </h2>
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                      activeTab === tab.id
                        ? 'bg-secondary/10 text-secondary border border-secondary/20'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <TabIcon size={16} />
                    <span className="hidden lg:inline font-body-alt">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-4 lg:p-8">
          <AnimatedSection>
            {activeTab === 'dashboard' && (
              <div>
                <h1 className="font-heading text-2xl md:text-3xl text-white mb-6">Dashboard</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {stats.map((stat, i) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={i} className="glass rounded-xl p-5">
                        <div className="flex items-center justify-between mb-3">
                          <StatIcon size={20} className="text-secondary/70" />
                          <span className="text-green-400 text-xs font-body-alt">+{stat.change}</span>
                        </div>
                        <p className="text-2xl font-heading text-white mb-1">{stat.value}</p>
                        <p className="text-white/40 text-xs font-body-alt">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="font-heading text-white text-lg mb-4">Recent Activity</h3>
                  <div className="text-center py-8">
                    <Clock className="w-12 h-12 text-white/20 mx-auto mb-3" />
                    <p className="text-white/40 font-body-alt text-sm">No recent activity</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="font-heading text-2xl md:text-3xl text-white">Manage Events</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-background rounded-xl text-sm font-semibold hover:bg-secondary/90 transition-colors">
                    <Plus size={16} />
                    Add Event
                  </button>
                </div>
                <div className="glass rounded-xl p-6">
                  <p className="text-white/40 text-center py-12 font-body-alt">
                    No events created yet. Click &quot;Add Event&quot; to get started.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="font-heading text-2xl md:text-3xl text-white">Manage Schedule</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-background rounded-xl text-sm font-semibold hover:bg-secondary/90 transition-colors">
                    <Plus size={16} />
                    Add Slot
                  </button>
                </div>
                <div className="glass rounded-xl p-6">
                  <p className="text-white/40 text-center py-12 font-body-alt">
                    Click &quot;Add Slot&quot; to add schedule entries.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="font-heading text-2xl md:text-3xl text-white">Manage Gallery</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-background rounded-xl text-sm font-semibold hover:bg-secondary/90 transition-colors">
                    <Upload size={16} />
                    Upload Media
                  </button>
                </div>
                <div className="glass rounded-xl p-6">
                  <p className="text-white/40 text-center py-12 font-body-alt">
                    Upload images and videos for the gallery.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'registrations' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="font-heading text-2xl md:text-3xl text-white">Registrations</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-background rounded-xl text-sm font-semibold hover:bg-secondary/90 transition-colors">
                    <Download size={16} />
                    Export CSV
                  </button>
                </div>
                <div className="glass rounded-xl p-6">
                  <p className="text-white/40 text-center py-12 font-body-alt">
                    No registrations yet.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'sponsors' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="font-heading text-2xl md:text-3xl text-white">Manage Sponsors</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-background rounded-xl text-sm font-semibold hover:bg-secondary/90 transition-colors">
                    <Plus size={16} />
                    Add Sponsor
                  </button>
                </div>
                <div className="glass rounded-xl p-6">
                  <p className="text-white/40 text-center py-12 font-body-alt">
                    No sponsors added yet.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="font-heading text-2xl md:text-3xl text-white">Manage FAQs</h1>
                  <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-background rounded-xl text-sm font-semibold hover:bg-secondary/90 transition-colors">
                    <Plus size={16} />
                    Add FAQ
                  </button>
                </div>
                <div className="glass rounded-xl p-6">
                  <p className="text-white/40 text-center py-12 font-body-alt">
                    No FAQs added yet.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <h1 className="font-heading text-2xl md:text-3xl text-white mb-6">Contact Information</h1>
                <div className="glass rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      { label: 'Email', value: 'chakravyuh@school.edu', icon: Phone },
                      { label: 'Instagram', value: '@chakravyuh', icon: MessageSquare },
                      { label: 'WhatsApp', value: '+91 XXXXXXXXXX', icon: MessageSquare },
                      { label: 'Address', value: 'School Auditorium, Main Campus', icon: Phone },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                        <span className="text-white/60 text-sm font-body-alt">{item.label}</span>
                        <span className="text-white text-sm font-body-alt">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h1 className="font-heading text-2xl md:text-3xl text-white mb-6">Settings</h1>
                <div className="glass rounded-xl p-6">
                  <h3 className="font-heading text-white text-sm uppercase tracking-wider mb-4">Countdown Target</h3>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-3 bg-white/5 border border-secondary/10 rounded-xl text-white text-sm focus:outline-none focus:border-secondary/50 transition-colors mb-6"
                    defaultValue="2026-07-02T07:30"
                  />

                  <h3 className="font-heading text-white text-sm uppercase tracking-wider mb-4">Site Configuration</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Site Title', value: 'Chakravyuh' },
                      { label: 'Tagline', value: 'Devise & Dominate' },
                      { label: 'Event Date', value: '2 July 2026' },
                    ].map((item, i) => (
                      <div key={i}>
                        <label className="block text-white/40 text-xs uppercase tracking-wider mb-2 font-body-alt">{item.label}</label>
                        <input
                          type="text"
                          defaultValue={item.value}
                          className="w-full px-4 py-3 bg-white/5 border border-secondary/10 rounded-xl text-white text-sm focus:outline-none focus:border-secondary/50 transition-colors font-body-alt"
                        />
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 px-6 py-2.5 bg-secondary text-background font-semibold rounded-xl hover:bg-secondary/90 transition-colors text-sm">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </AnimatedSection>
        </main>
      </div>
    </div>
  );
}
