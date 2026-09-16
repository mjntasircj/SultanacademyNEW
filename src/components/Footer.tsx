import React from 'react';
import { Link } from '../context/RouterContext';
import { ACADEMY_INFO, COURSES_DATA } from '../data/academyData';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 text-slate-400">
      {/* Subtle top ambient glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3" id="footer-logo">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-md shadow-rose-900/20 ring-1 ring-slate-700/60">
                <img
                  src="/images/logo.png"
                  alt="Sultan Academy Official Logo"
                  className="h-full w-full rounded-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  Sultan Academy
                </span>
                <p className="text-xs font-medium text-rose-400">
                  {ACADEMY_INFO.motto}
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              A premier coaching centre based in Taltola, Dhaka. Dedicated to excellence in
              Cambridge and Edexcel O Level and A Level education with concept-first teaching,
              disciplined practice, and proven board exam results.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5">
                <GraduationCap className="h-4 w-4 text-blue-400" />
                <span>Cambridge & Edexcel</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5">
                <ShieldCheck className="h-4 w-4 text-rose-400" />
                <span>O & A Level Focus</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Academy
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-rose-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-rose-400 transition-colors">
                  About the Academy
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-rose-400 transition-colors">
                  Courses & Syllabuses
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="hover:text-rose-400 transition-colors">
                  Faculty & Educators
                </Link>
              </li>
              <li>
                <Link to="/campus" className="hover:text-rose-400 transition-colors">
                  Campus & Facilities
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-rose-400 transition-colors">
                  Events & Tournaments
                </Link>
              </li>
              <li>
                <a
                  href={ACADEMY_INFO.paymentFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors flex items-center gap-1.5"
                  id="footer-payment-link"
                >
                  <span>Fee & Payment</span>
                  <ArrowUpRight className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-400 transition-colors">
                  Contact & Admission
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Subjects */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Subjects
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {COURSES_DATA.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/courses"
                    className="group flex items-center justify-between hover:text-rose-400 transition-colors"
                  >
                    <span>{c.name}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-rose-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={ACADEMY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 hover:text-white transition-colors"
                id="footer-address-link"
              >
                <MapPin className="h-4 w-4 shrink-0 text-rose-400 mt-0.5 group-hover:text-rose-300" />
                <span className="text-slate-300 group-hover:text-white group-hover:underline decoration-rose-500/50 underline-offset-2">
                  {ACADEMY_INFO.address}
                </span>
                <ExternalLink className="h-3 w-3 text-slate-500 group-hover:text-rose-400 mt-1 shrink-0" />
              </a>

              <a
                href={`tel:${ACADEMY_INFO.rawPhone}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors text-slate-300"
              >
                <Phone className="h-4 w-4 shrink-0 text-rose-400" />
                <span>{ACADEMY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${ACADEMY_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors text-slate-300 break-all"
              >
                <Mail className="h-4 w-4 shrink-0 text-rose-400" />
                <span>{ACADEMY_INFO.email}</span>
              </a>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={ACADEMY_INFO.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-2 text-xs font-medium text-slate-300 hover:border-blue-500/50 hover:text-white transition-all"
                  id="footer-facebook"
                >
                  <Facebook className="h-4 w-4 text-blue-400" />
                  <span>Facebook</span>
                </a>
                <a
                  href={ACADEMY_INFO.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-2 text-xs font-medium text-slate-300 hover:border-rose-500/50 hover:text-white transition-all"
                  id="footer-instagram"
                >
                  <Instagram className="h-4 w-4 text-rose-400" />
                  <span>@sultanacademy21</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Sultan Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Founder & Lead Educator: {ACADEMY_INFO.founder}</span>
            <span className="text-slate-700">·</span>
            <span className="text-amber-400/90 font-medium">{ACADEMY_INFO.aim}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
