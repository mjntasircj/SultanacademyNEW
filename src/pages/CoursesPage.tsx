import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { COURSES_DATA, ACADEMY_INFO } from '../data/academyData';
import { Course } from '../types';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Filter,
  ArrowRight,
  X,
  Calendar,
  UserCheck,
  FileText,
  Tag,
} from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = ['All', 'Mathematics', 'Sciences', 'Computer', 'Business'];

  const filteredCourses =
    selectedCategory === 'All'
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === selectedCategory);

  return (
    <div className="w-full bg-slate-950 py-12 sm:py-16 lg:py-20 text-slate-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">Courses & Subjects</span>
        </div>

        {/* Header (Exact per prompt) */}
        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Focused subjects. Serious progress.
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We specialize strictly in the subjects where high-level conceptual teaching makes the
              decisive difference between average results and top Cambridge and Edexcel board
              percentiles.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 p-1.5 self-start md:self-end">
            <Filter className="h-4 w-4 text-slate-400 ml-2" />
            <span className="text-xs text-slate-400 mr-1">Filter:</span>
            <div className="flex flex-wrap gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  id={`course-filter-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-rose-500/40 hover:bg-slate-900 hover:shadow-2xl hover:shadow-rose-950/20"
              id={`course-card-${course.id}`}
            >
              <div>
                {/* Badge & Board tags */}
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 text-xs font-semibold text-rose-400">
                    {course.badge || course.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <GraduationCap className="h-3.5 w-3.5 text-blue-400" />
                    <span>Cambridge / Edexcel</span>
                  </div>
                </div>

                {/* Subject Name */}
                <h3 className="mt-5 font-display text-2xl font-bold text-white group-hover:text-rose-400 transition-colors">
                  {course.name}
                </h3>

                {/* Level */}
                <div className="mt-1.5 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  <span>{course.level}</span>
                </div>

                {/* Monthly Tuition Price */}
                <div className="mt-4 flex items-center justify-between rounded-xl border border-rose-500/20 bg-rose-500/5 px-3.5 py-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Tag className="h-3.5 w-3.5 text-rose-400" />
                    <span className="font-medium text-slate-400">Monthly Tuition:</span>
                  </div>
                  <div className="flex items-baseline gap-1 text-right">
                    <span className="font-display text-lg font-bold text-white tracking-tight">3,000</span>
                    <span className="text-xs font-semibold text-rose-400">Taka</span>
                    <span className="text-[11px] text-slate-400">/month</span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {course.description}
                </p>

                {/* Feature Highlights */}
                <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-4">
                  {course.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with CTAs */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  <span className="block text-[10px] uppercase text-slate-400">Lead Educator</span>
                  <span className="font-semibold text-white">{course.instructor}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(course)}
                    className="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
                    id={`btn-syllabus-${course.id}`}
                  >
                    Details
                  </button>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-rose-600/20 hover:from-rose-500 hover:to-rose-600 transition-all"
                    id={`btn-enquire-${course.id}`}
                  >
                    <span>Enquire</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Curriculum Advisory Section */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Custom Batch Placement</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Need help deciding your subject combination or tier?
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Every student starts with a brief diagnostic assessment. We evaluate current
                foundation strengths and tailor the batch pace for optimal board exam performance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-500 shadow-lg shadow-rose-600/25 transition-all"
              >
                Schedule Diagnostic Assessment
              </Link>
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white hover:border-slate-600 transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL: COURSE SYLLABUS & DETAILS ================= */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 rounded-full border border-slate-700 bg-slate-800 p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="rounded-md bg-rose-500/15 border border-rose-500/30 px-2.5 py-0.5 text-xs font-semibold text-rose-400">
                {selectedCourse.level}
              </span>
              <span className="text-xs text-slate-400">Cambridge & Edexcel</span>
            </div>

            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
              {selectedCourse.name}
            </h2>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {selectedCourse.description}
            </p>

            <div className="mt-6 border-t border-slate-800 pt-5">
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
                Key Focus & Syllabus Breakdown:
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedCourse.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800 pt-4 text-xs">
              <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-3">
                <span className="text-slate-400 block text-[11px]">Monthly Tuition</span>
                <span className="font-semibold text-rose-400 text-sm">{selectedCourse.monthlyFee || '3000 Taka / month'}</span>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <span className="text-slate-400 block text-[11px]">Lead Educator</span>
                <span className="font-semibold text-white text-sm">{selectedCourse.instructor}</span>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <span className="text-slate-400 block text-[11px]">Campus Location</span>
                <span className="font-semibold text-white text-sm">Taltola Member Line Road</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedCourse(null)}
                className="rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setSelectedCourse(null)}
                className="rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 px-5 py-2.5 text-xs font-semibold text-white hover:from-rose-500 hover:to-rose-600 shadow-md shadow-rose-600/30"
              >
                Enquire for This Subject
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
