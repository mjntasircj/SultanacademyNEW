import React from 'react';
import { Link } from '../context/RouterContext';
import { TEACHERS_DATA, ACADEMY_INFO } from '../data/academyData';
import {
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  Quote,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const TeachersPage: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 py-12 sm:py-16 lg:py-20 text-slate-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">Faculty & Educators</span>
        </div>

        {/* Header (Exact per user prompt) */}
        <div className="mt-6 max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            People behind the progress.
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Our educators combine deep mastery of Cambridge and Edexcel syllabuses with genuine
            student mentorship. They don't simply lecture from slides; they guide each student
            step-by-step through tough concepts and exam-tested practice.
          </p>
        </div>

        {/* ================= TEACHERS DIRECTORY ================= */}
        <div className="mt-14 space-y-12">
          {TEACHERS_DATA.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10 transition-all hover:border-slate-700 hover:bg-slate-900/90 shadow-xl ${
                teacher.isFounder ? 'ring-1 ring-rose-500/30' : ''
              }`}
              id={`teacher-profile-${teacher.id}`}
            >
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                {/* Left: Teacher Real Photo */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative w-full max-w-xs">
                    <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
                      <img
                        src={teacher.photo}
                        alt={`${teacher.name} - ${teacher.title}`}
                        className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${
                          teacher.isFounder ? 'object-top' : 'object-top'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                        <span className="rounded-md bg-slate-900/90 border border-slate-700 px-2.5 py-1 font-semibold text-rose-400">
                          {teacher.subject}
                        </span>
                        {teacher.isFounder && (
                          <span className="rounded-md bg-rose-600 px-2.5 py-1 font-bold text-white text-[10px] tracking-wider uppercase">
                            Founder
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Educator Bio, Philosophy, and Highlights */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {teacher.name}
                    </h2>
                    <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-0.5 text-xs font-semibold text-blue-300">
                      {teacher.curriculum}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-semibold text-rose-400">
                    {teacher.title}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {teacher.bio}
                  </p>

                  {/* Teacher Quote */}
                  <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="flex gap-2.5">
                      <Quote className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm italic text-slate-200">
                        “{teacher.quote}”
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {teacher.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <BookOpen className="h-4 w-4 text-slate-500" />
                      <span>Regular doubt sessions & batch workshops</span>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-600 hover:border-rose-500 transition-colors"
                    >
                      <span>Enquire for {teacher.name.split(' ')[0]}'s Batch</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Quality Pledge */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-10 text-center">
          <Award className="h-10 w-10 text-rose-400 mx-auto" />
          <h3 className="mt-4 font-display text-2xl font-bold text-white">
            Direct Educator Access — Never Substitute Teachers
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-300 leading-relaxed">
            At Sultan Academy, your enrolled classes are personally taught by the primary educator
            you signed up for. Every worksheet review, diagnostic test, and exam strategy session is
            conducted under their direct supervision.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-500 shadow-lg shadow-rose-600/20 transition-all"
            >
              <span>Connect with Faculty</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
