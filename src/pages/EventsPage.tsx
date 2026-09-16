import React from 'react';
import { Link } from '../context/RouterContext';
import { EVENTS_DATA } from '../data/academyData';
import {
  Trophy,
  Calendar,
  MapPin,
  ArrowRight,
  Gamepad2,
  Users,
  Sparkles,
  Flame,
} from 'lucide-react';

export const EventsPage: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 py-12 sm:py-16 lg:py-20 text-slate-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">Events & Student Life</span>
        </div>

        {/* Page Header */}
        <div className="mt-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-400">
            <Trophy className="h-3.5 w-3.5" />
            <span>Academy Tournaments & Traditions</span>
          </div>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Beyond the classroom.
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Excellence in O and A Levels is about discipline, camaraderie, and mental sharpness.
            Our signature tournaments bring students, teachers, and alumni together to compete,
            recharge, and build lifelong bonds.
          </p>
        </div>

        {/* ================= EVENTS GRID ================= */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS_DATA.map((event) => (
            <div
              key={event.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:border-rose-500/40 hover:bg-slate-900 hover:shadow-2xl hover:shadow-rose-950/20"
              id={`event-card-${event.id}`}
            >
              {/* Event Visual Banner */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={event.bannerImage}
                  alt={event.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (event.id === 'sa-cup-season-3') {
                      if (!target.src.includes('komododecks.com')) {
                        target.src = 'https://plain-apac-prod-public.komododecks.com/202609/16/X97uLyh5RaYCg8vnmuJ5/image.jpg';
                      } else if (!target.src.includes('sa-cup-tournament.jpg')) {
                        target.src = '/images/sa-cup-tournament.jpg';
                      }
                    } else if (event.id === 'indoor-event-season-2') {
                      if (!target.src.includes('komododecks.com')) {
                        target.src = 'https://plain-apac-prod-public.komododecks.com/202609/16/3kVetYPKjQxUEnK8IcL0/image.jpg';
                      } else if (!target.src.includes('indoor-event-trophies.jpg')) {
                        target.src = '/images/indoor-event-trophies.jpg';
                      }
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-rose-600/90 px-3 py-1 text-xs font-bold text-white shadow-md">
                    {event.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${
                      event.status === 'Upcoming'
                        ? 'border-emerald-500/40 bg-emerald-950/80 text-emerald-300'
                        : 'border-slate-700 bg-slate-900/90 text-slate-300'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    {event.season}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white group-hover:text-rose-400 transition-colors">
                    {event.title}
                  </h2>
                </div>
              </div>

              {/* Event Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-rose-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Key Activities */}
                  {event.activities && (
                    <div className="mt-6">
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
                        Featured Events & Contests:
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {event.activities.map((act, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-200"
                          >
                            <Flame className="h-3 w-3 text-rose-400" />
                            <span>{act}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Learn More Button */}
                <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Open to Sultan Academy Students</span>

                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-rose-600/20 hover:from-rose-500 hover:to-rose-600 transition-all"
                    id={`btn-learn-more-${event.id}`}
                  >
                    <span>Learn More & Rules</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Statement */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Interested in Organizing or Participating?
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                Tournament registration guidelines and student committee announcements are posted
                regularly on campus notice boards and official WhatsApp groups.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-white hover:bg-rose-600 hover:border-rose-500 transition-colors shrink-0"
            >
              Contact Event Committee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
