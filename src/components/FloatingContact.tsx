import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/academyData';
import { MessageCircle, Phone, Mail, Instagram, Facebook, X, ArrowUpRight } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {expanded && (
        <div className="flex flex-col gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/98 p-3.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200 w-64">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-semibold text-slate-300">
            <span>Direct Inquiries & Help</span>
            <button
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded-md hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* WhatsApp */}
          <a
            href={ACADEMY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-between rounded-xl bg-emerald-600/15 border border-emerald-500/30 px-3 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-600/25 transition-all group"
            id="floating-whatsapp-chat"
          >
            <div className="flex items-center gap-2.5">
              <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>WhatsApp Chat</span>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Normal Call */}
          <a
            href={`tel:${ACADEMY_INFO.rawPhone}`}
            className="flex items-center justify-between rounded-xl bg-rose-600/15 border border-rose-500/30 px-3 py-2 text-xs font-medium text-rose-300 hover:bg-rose-600/25 transition-all"
            id="floating-phone-call"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-rose-400 shrink-0" />
              <span>Normal Call</span>
            </div>
            <span className="text-[10px] text-rose-300/70 font-mono">01708-661040</span>
          </a>

          {/* Facebook */}
          <a
            href={ACADEMY_INFO.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-between rounded-xl bg-blue-600/15 border border-blue-500/30 px-3 py-2 text-xs font-medium text-blue-300 hover:bg-blue-600/25 transition-all group"
            id="floating-facebook-chat"
          >
            <div className="flex items-center gap-2.5">
              <Facebook className="h-4 w-4 text-blue-400 shrink-0" />
              <span>Facebook Inquiries</span>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Instagram */}
          <a
            href={ACADEMY_INFO.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-between rounded-xl bg-pink-600/15 border border-pink-500/30 px-3 py-2 text-xs font-medium text-pink-300 hover:bg-pink-600/25 transition-all group"
            id="floating-instagram-chat"
          >
            <div className="flex items-center gap-2.5">
              <Instagram className="h-4 w-4 text-pink-400 shrink-0" />
              <span>Instagram DM</span>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-pink-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${ACADEMY_INFO.email}`}
            className="flex items-center justify-between rounded-xl bg-sky-600/15 border border-sky-500/30 px-3 py-2 text-xs font-medium text-sky-300 hover:bg-sky-600/25 transition-all group"
            id="floating-email-chat"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-sky-400 shrink-0" />
              <span>Email Us</span>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-sky-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-tr from-rose-600 to-rose-500 text-white shadow-xl shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all"
        aria-label="Contact Academy via WhatsApp, Phone, Facebook, Instagram, or Email"
        id="floating-contact-trigger"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
        {expanded ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};
