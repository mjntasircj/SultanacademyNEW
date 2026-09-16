import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { EVENTS_DATA, ACADEMY_INFO } from '../data/academyData';
import {
  Trophy,
  Calendar,
  MapPin,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Users,
  Award,
} from 'lucide-react';

interface EventDetailPageProps {
  eventId?: string;
}

export const EventDetailPage: React.FC<EventDetailPageProps> = ({ eventId }) => {
  const { currentPath } = useRouter();

  // Extract event id from path if not explicitly provided
  const idFromPath = eventId || currentPath.replace('/events/', '');
  const event = EVENTS_DATA.find((e) => e.id === idFromPath) || EVENTS_DATA[0];

  return (
    <div className="w-full bg-slate-950 py-12 sm:py-16 lg:py-20 text-slate-100 min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 hover:text-white transition-colors"
          id="event-detail-back-btn"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Events</span>
        </Link>

        {/* Event Header Banner */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
            <img
              src={event.bannerImage}
              alt={event.title}
              className="h-full w-full object-cover object-center"
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
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-rose-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                  {event.category}
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300">
                  {event.season}
                </span>
              </div>
              <h1 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold text-white">
                {event.title}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {/* Meta bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-800 pb-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Date & Timing</span>
                  <span className="font-semibold text-white">{event.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Venue / Arena</span>
                  <span className="font-semibold text-white">{event.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Status</span>
                  <span className="font-semibold text-white">{event.status}</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="mt-8">
              <h2 className="font-display text-2xl font-bold text-white">Event Overview</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {event.description}
              </p>
            </div>

            {/* Activities List */}
            {event.activities && (
              <div className="mt-10">
                <h3 className="font-display text-lg font-bold text-white">
                  Schedule of Competitions & Activities
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.activities.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3.5"
                    >
                      <Flame className="h-4 w-4 text-rose-400 shrink-0" />
                      <span className="text-sm font-medium text-slate-200">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rules & Guidelines */}
            {event.rules && (
              <div className="mt-10">
                <h3 className="font-display text-lg font-bold text-white">
                  Tournament Guidelines & Eligibility
                </h3>
                <div className="mt-4 space-y-2.5">
                  {event.rules.map((rule, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            {event.highlights && (
              <div className="mt-10">
                <h3 className="font-display text-lg font-bold text-white">Event Highlights</h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {event.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-300"
                    >
                      <span className="font-bold text-rose-400 block mb-1">Highlight {i + 1}</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Registration CTA */}
            <div className="mt-12 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 to-slate-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-white text-base">
                  Have questions regarding team slots?
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Contact the Sultan Academy sports desk at our Taltola campus.
                </p>
              </div>
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-rose-500 transition-colors shrink-0"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
