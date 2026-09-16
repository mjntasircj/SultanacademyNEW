import React, { useEffect } from 'react';
import { Link } from '../context/RouterContext';
import { ACADEMY_INFO } from '../data/academyData';
import {
  CreditCard,
  ExternalLink,
  ShieldCheck,
  Phone,
  Home,
} from 'lucide-react';

export const PaymentPage: React.FC = () => {
  useEffect(() => {
    // Automatically redirect to the official Google Form for payments
    window.location.replace(ACADEMY_INFO.paymentFormUrl);
  }, []);

  return (
    <div className="w-full bg-slate-950 py-16 sm:py-24 text-slate-100 min-h-[75vh] flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-6">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">Payment</span>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6">
            <CreditCard className="h-8 w-8" />
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Redirecting to Official Payment Form...
          </h1>

          <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            You are being forwarded to the official Sultan Academy tuition and payment clearance form on Google Docs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ACADEMY_INFO.paymentFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-rose-600/25 hover:from-rose-500 hover:to-rose-600 transition-all active:scale-95"
              id="payment-direct-redirect-btn"
            >
              <span>Open Payment Form</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <Link
              to="/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Verified Google Forms Portal</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-rose-400" />
              <span>Assistance: {ACADEMY_INFO.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
