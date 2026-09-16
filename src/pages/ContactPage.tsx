import React from 'react';
import { Link } from '../context/RouterContext';
import { ACADEMY_INFO } from '../data/academyData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  Instagram,
  Facebook,
  ExternalLink,
  Navigation,
  ArrowUpRight,
} from 'lucide-react';
import { GoogleLiveMap } from '../components/GoogleLiveMap';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 py-12 sm:py-16 lg:py-20 text-slate-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">Contact & Admission</span>
        </div>

        {/* Page Header */}
        <div className="mt-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Admissions & Inquiries</span>
          </div>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to take the next step?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Reach out through your preferred channel for syllabus queries, batch schedules, fees, or campus visits.
            We are here to help you achieve your A* goals.
          </p>
        </div>

        {/* ================= MAIN CONTACT CHANNELS (ALL BIG CARDS) ================= */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp Hotline */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all hover:border-emerald-500/40 hover:bg-slate-900/90 shadow-xl group">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                  Fastest Response
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-white">WhatsApp Hotline</h2>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Direct messaging for syllabus queries, batch times, admission assistance, and fee clearance.
              </p>
              <div className="mt-4 text-base font-bold text-emerald-400 font-mono">
                {ACADEMY_INFO.phone}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600/20 border border-emerald-500/30 px-4 py-3 text-xs font-semibold text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all shadow-md active:scale-98"
                id="contact-whatsapp-btn"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Normal Call */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all hover:border-rose-500/40 hover:bg-slate-900/90 shadow-xl group">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-rose-400">
                  Direct Line
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-white">Phone & Normal Call</h2>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Speak directly with our academic coordinators for immediate queries and consultation.
              </p>
              <div className="mt-4 text-base font-bold text-rose-400 font-mono">
                {ACADEMY_INFO.phone}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={`tel:${ACADEMY_INFO.rawPhone}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600/20 border border-rose-500/30 px-4 py-3 text-xs font-semibold text-rose-300 hover:bg-rose-600 hover:text-white transition-all shadow-md active:scale-98"
                id="contact-phone-call-btn"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Facebook Page & Queries */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all hover:border-blue-500/40 hover:bg-slate-900/90 shadow-xl group">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Facebook className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-blue-400">
                  Official Page
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-white">Facebook Page & Queries</h2>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Connect on our official Facebook page for updates, announcements, messenger queries, and community news.
              </p>
              <div className="mt-4 text-sm font-semibold text-blue-400">
                Sultan Academy Official
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={ACADEMY_INFO.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600/20 border border-blue-500/30 px-4 py-3 text-xs font-semibold text-blue-300 hover:bg-blue-600 hover:text-white transition-all shadow-md active:scale-98"
                id="contact-facebook-btn"
              >
                <Facebook className="h-4 w-4" />
                <span>Message & Queries on Facebook</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Instagram Community (Big Option) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all hover:border-pink-500/40 hover:bg-slate-900/90 shadow-xl group">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500/10 to-rose-500/10 text-pink-400 border border-pink-500/20">
                  <Instagram className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-pink-400">
                  @sultanacademy21
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-white">Instagram Community</h2>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Explore student highlights, classroom moments, annual tournaments, academic celebrations, and direct messages.
              </p>
              <div className="mt-4 text-sm font-semibold text-pink-400 font-mono">
                instagram.com/sultanacademy21
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={ACADEMY_INFO.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600/20 to-rose-600/20 border border-pink-500/30 px-4 py-3 text-xs font-semibold text-pink-300 hover:from-pink-600 hover:to-rose-600 hover:text-white transition-all shadow-md active:scale-98"
                id="contact-instagram-btn"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow us on Instagram</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all hover:border-sky-500/40 hover:bg-slate-900/90 shadow-xl group">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-sky-400">
                  Official Inquiries
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-white">Email Address</h2>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                For detailed queries, documentation, syllabus inquiries, and official communications.
              </p>
              <div className="mt-4 text-sm font-medium text-slate-200 break-all">
                {ACADEMY_INFO.email}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={`mailto:${ACADEMY_INFO.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600/20 border border-sky-500/30 px-4 py-3 text-xs font-semibold text-sky-300 hover:bg-sky-600 hover:text-white transition-all shadow-md active:scale-98"
                id="contact-email-btn"
              >
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Visiting Hours */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all hover:border-amber-500/40 hover:bg-slate-900/90 shadow-xl group">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-amber-400">
                  Campus Hours
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-white">Campus Visiting Hours</h2>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Visit our campus in-person for consultation, mock test registration, or parent meetings.
              </p>
              <div className="mt-4 space-y-1">
                <div className="text-sm font-semibold text-white">
                  Sat – Thu: 10:00 AM – 8:00 PM
                </div>
                <div className="text-xs text-slate-400">
                  Friday: Prior appointment recommended
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={ACADEMY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600/20 border border-amber-500/30 px-4 py-3 text-xs font-semibold text-amber-300 hover:bg-amber-600 hover:text-white transition-all shadow-md active:scale-98"
                id="contact-hours-directions-btn"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= LIVE MOVEABLE GOOGLE MAP SECTION ================= */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
                <MapPin className="h-3.5 w-3.5" />
                <span>Campus Coordinates</span>
              </div>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                Find Us on Google Maps
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                {ACADEMY_INFO.address} · Centrally situated at Taltola Member Line Road, Dhaka.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={ACADEMY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-rose-500 shadow-md shadow-rose-600/20 transition-all"
                id="contact-open-google-maps-full"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <GoogleLiveMap heightClass="h-[420px] sm:h-[480px]" />
        </div>
      </div>
    </div>
  );
};
