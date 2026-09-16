import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import {
  CAMPUS_IMAGES,
  CAMPUS_FEATURES,
  ACADEMY_INFO,
} from '../data/academyData';
import { CampusImage } from '../types';
import {
  MapPin,
  Sparkles,
  Users,
  HeartHandshake,
  MonitorCheck,
  Projector,
  ShieldCheck,
  Compass,
  ArrowRight,
  Phone,
  Clock,
  X,
  Maximize2,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import { GoogleLiveMap } from '../components/GoogleLiveMap';

export const CampusPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<CampusImage | null>(null);

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-rose-400" />;
      case 'Users':
        return <Users className="h-5 w-5 text-blue-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="h-5 w-5 text-rose-400" />;
      case 'Projector':
      case 'MonitorCheck':
        return <Projector className="h-5 w-5 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-5 w-5 text-rose-400" />;
      case 'MapPin':
      default:
        return <MapPin className="h-5 w-5 text-emerald-400" />;
    }
  };

  return (
    <div className="w-full bg-slate-950 py-12 sm:py-16 lg:py-20 text-slate-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">Campus & Environment</span>
        </div>

        {/* Header (Exact per prompt) */}
        <div className="mt-6 max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            A place to settle in and do the work.
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Located at <span className="text-white font-semibold">{ACADEMY_INFO.address}</span>,
            Sultan Academy provides a clean, tranquil, and modern educational environment designed
            from the ground up for serious study, active participation, and lasting academic momentum.
          </p>
        </div>

        {/* ================= OFFICIAL CAMPUS GALLERY ================= */}
        <div className="mt-14">
          <div className="flex items-center justify-between pb-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">Campus Gallery</h2>
              <p className="text-xs text-slate-400">
                Click any image to expand full view of our Sultan Academy facility
              </p>
            </div>
            <span className="text-xs text-rose-400 font-medium">Dhaka 1219</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAMPUS_IMAGES.map((img) => (
              <div
                key={img.id}
                onClick={() => {
                  if (img.category !== 'Location') {
                    setActiveImage(img);
                  }
                }}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/20 ${
                  img.category !== 'Location' ? 'cursor-pointer' : ''
                }`}
                id={`gallery-item-${img.id}`}
              >
                {img.category === 'Location' ? (
                  <div className="relative h-72 w-full overflow-hidden">
                    <GoogleLiveMap heightClass="h-full w-full min-h-[288px]" />
                    <div className="pointer-events-none absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-10">
                      <div className="flex items-center justify-between">
                        <span className="rounded-md bg-rose-500/20 px-2 py-0.5 text-[10px] font-semibold text-rose-300 border border-rose-500/30">
                          {img.category}
                        </span>
                        <span className="rounded-full bg-rose-600/90 px-2.5 py-0.5 text-[10px] font-bold text-white shadow">
                          Live Interactive Map
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-base font-bold text-white">
                        {img.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (img.category === 'Study Environment') {
                          target.src = 'https://plain-apac-prod-public.komododecks.com/202609/16/5bIkXPbHOiJRcaXcTYbG/image.jpg';
                        } else if (img.category === 'Classrooms') {
                          target.src = 'https://plain-apac-prod-public.komododecks.com/202609/16/2p4r56B0gavOKjSvcFLa/image.jpg';
                        } else if (img.category === 'Sports') {
                          target.src = 'https://plain-apac-prod-public.komododecks.com/202609/16/KDXy62EsBArfk3GqIVmS/image.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />

                    <div className="absolute top-3 right-3 rounded-full bg-slate-900/80 p-2 text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <span className="rounded-md bg-rose-500/20 px-2 py-0.5 text-[10px] font-semibold text-rose-300 border border-rose-500/30">
                        {img.category}
                      </span>
                      <h3 className="mt-2 font-display text-base font-bold text-white">
                        {img.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= CAMPUS FEATURES (Prompt checklist) ================= */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              Facility Highlights
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Engineered for Distraction-Free Study
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Every detail of our academy is calibrated to help students maintain focus, stamina,
              and comfort.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPUS_FEATURES.map((feat) => (
              <div
                key={feat.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-slate-700 hover:bg-slate-900"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 border border-slate-700">
                  {getFeatureIcon(feat.iconName)}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{feat.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= VISITING & LOCATION GUIDE ================= */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-400">
                <Compass className="h-3.5 w-3.5" />
                <span>Visiting Sultan Academy</span>
              </div>

              <h2 className="mt-4 font-display text-3xl font-bold text-white">
                Visit Us at SultanAcademy
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                We welcome prospective students and parents for campus visits, batch consultations,
                and syllabus assessments. Centrally connected at Taltola Member Line Road with convenient access across Dhaka.
              </p>

              <div className="mt-6 space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Campus Location:</span>
                    <p className="text-slate-300 font-medium">{ACADEMY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Office & Visiting Hours:</span>
                    <p className="text-slate-300">
                      Saturday – Thursday: 10:00 AM – 8:00 PM (Friday by prior appointment)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Direct Line:</span>
                    <p className="text-slate-300">{ACADEMY_INFO.phone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href={ACADEMY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white hover:bg-rose-500 shadow-md shadow-rose-600/20 transition-all"
                  id="campus-open-google-maps-btn"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white transition-colors"
                >
                  <span>Book a Campus Visit</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={ACADEMY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Movable Google Map */}
            <div className="lg:col-span-7">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span className="font-medium text-slate-300">Live Campus Map:</span>
                  <span className="text-[11px] text-rose-400">Pannable & Zoomable</span>
                </div>
                <GoogleLiveMap heightClass="h-[380px] sm:h-[440px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-slate-950/80 p-2 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="max-h-[70vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                {activeImage.category} · Sultan Academy
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-white">
                {activeImage.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
