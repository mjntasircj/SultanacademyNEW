import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { ACADEMY_INFO } from '../data/academyData';
import { Menu, X, Phone, ArrowUpRight, GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Teachers', path: '/teachers' },
    { label: 'Campus', path: '/campus' },
    { label: 'Events', path: '/events' },
    {
      label: 'Payment',
      path: ACADEMY_INFO.paymentFormUrl,
      isExternal: true,
    },
    { label: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl transition-all">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Official Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
          id="nav-brand-logo"
        >
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-md shadow-rose-950/20 ring-1 ring-slate-700/60">
            <img
              src="/images/logo.png"
              alt="Sultan Academy Official Logo"
              className="h-full w-full rounded-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-rose-400 sm:text-xl">
              Sultan Academy
            </span>
            <span className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              Cambridge & Edexcel
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg text-slate-300 hover:text-white hover:bg-slate-900/50 flex items-center gap-1 group"
                  id={`nav-${link.label.toLowerCase()}`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rose-400" />
                </a>
              );
            }

            const isActive =
              link.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive
                    ? 'text-white bg-slate-900/90 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                }`}
                id={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-600/20 hover:from-rose-500 hover:to-rose-600 hover:shadow-rose-600/30 transition-all active:scale-95"
            id="nav-contact-cta"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 lg:hidden"
            aria-label="Toggle navigation menu"
            id="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950/98 px-4 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.isExternal) {
                return (
                  <a
                    key={link.label}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors text-slate-300 hover:bg-slate-900 hover:text-white"
                    id={`mobile-nav-${link.label.toLowerCase()}`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500" />
                  </a>
                );
              }

              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-rose-500" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href={`tel:${ACADEMY_INFO.rawPhone}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white"
            >
              <Phone className="h-4 w-4 text-rose-400" />
              <span>Call: {ACADEMY_INFO.phone}</span>
            </a>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-rose-600/25"
              id="mobile-nav-contact-cta"
            >
              <GraduationCap className="h-5 w-5" />
              <span>Enroll / Start Conversation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
