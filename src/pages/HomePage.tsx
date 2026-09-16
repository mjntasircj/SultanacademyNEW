import React from 'react';
import { Link } from '../context/RouterContext';
import {
  ACADEMY_INFO,
  HOME_STATS,
  COURSES_DATA,
  TEACHERS_DATA,
  CAMPUS_IMAGES,
  EVENTS_DATA,
  TESTIMONIALS_DATA,
} from '../data/academyData';
import { GoogleLiveMap } from '../components/GoogleLiveMap';
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  BookOpen,
  Users,
  Trophy,
  Building2,
  Phone,
  CheckCircle2,
  Award,
  Compass,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full bg-gradient-to-tr from-rose-900/20 via-blue-900/15 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-48 h-96 w-96 rounded-full bg-rose-600/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/4 -right-48 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Core Headline & CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Refined Academic Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-300 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-rose-400" />
                <span>Cambridge & Edexcel · O & A Level Specialists</span>
              </div>

              {/* Main Heading (Exact per user instructions) */}
              <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-6xl leading-[1.12]">
                Shaping students for a{' '}
                <span className="bg-gradient-to-r from-rose-400 via-rose-300 to-blue-400 bg-clip-text text-transparent">
                  brighter future.
                </span>
              </h1>

              {/* Supporting Text (Exact per user instructions) */}
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
                A focused academy for students who want more than memorised answers. Understand
                the work, practice with purpose, and walk into the exam ready.
              </p>

              {/* CTA Buttons (Exact per user instructions) */}
              <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-rose-600/25 hover:from-rose-500 hover:to-rose-600 hover:shadow-rose-600/35 active:scale-95 transition-all"
                  id="hero-cta-conversation"
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/courses"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-base font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-800/80 hover:text-white transition-all"
                  id="hero-cta-subjects"
                >
                  <BookOpen className="h-4 w-4 text-blue-400" />
                  <span>Explore subjects</span>
                </Link>
              </div>

              {/* Micro proof points */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-6 w-full max-w-lg text-left">
                <div>
                  <div className="text-xl font-bold text-white sm:text-2xl">A*</div>
                  <p className="text-xs text-slate-400">Target Standard</p>
                </div>
                <div>
                  <div className="text-xl font-bold text-white sm:text-2xl">06</div>
                  <p className="text-xs text-slate-400">Core Disciplines</p>
                </div>
                <div>
                  <div className="text-xl font-bold text-white sm:text-2xl">100%</div>
                  <p className="text-xs text-slate-400">Concept Focused</p>
                </div>
              </div>
            </div>

            {/* Right Column: Founder & Hero Educator Image (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Premium Backing Card / Frame */}
              <div className="relative w-full max-w-md">
                {/* Visual gradient backdrop ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-rose-500/25 via-blue-500/20 to-transparent blur-xl" />

                <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-3 shadow-2xl">
                  {/* Subtle top indicator bar */}
                  <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium text-slate-300">
                      <GraduationCap className="h-3.5 w-3.5 text-rose-400" />
                      Academic Director
                    </span>
                    <span className="rounded-md bg-rose-500/15 px-2 py-0.5 text-[10px] font-semibold text-rose-400">
                      Founder
                    </span>
                  </div>

                  {/* SHUVO SIR — HERO TEACHER PHOTO */}
                  <div className="relative mt-2 flex items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800/60 pt-4 h-[420px] sm:h-[480px]">
                    {/* Atmospheric ambient backlight */}
                    <div className="absolute top-12 h-64 w-64 rounded-full bg-blue-600/20 blur-2xl pointer-events-none" />

                    <img
                      src="/images/shuvo.png"
                      alt="Sultan Mahmud Shuvo — Founder & Lead Educator"
                      className="relative z-10 h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-[1.02]"
                    />

                    {/* Gradient overlay for seamless bottom blending */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-10" />

                    {/* Floating teacher credentials badge */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 backdrop-blur-md shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="font-display text-base font-bold text-white">
                            Sultan Mahmud Shuvo
                          </h2>
                          <p className="text-xs font-medium text-rose-400">
                            Founder & Lead Educator
                          </p>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-blue-300 border border-blue-500/30">
                          Math & CS
                        </span>
                      </div>
                      <p className="mt-1.5 text-[11px] text-slate-400 italic leading-snug">
                        “Good teaching changes how a student sees a problem.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HOME STATS BAR ===================== */}
      <section className="relative border-y border-slate-800/80 bg-slate-900/70 py-6 sm:py-8 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6 text-center">
            {HOME_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/40 border border-slate-800/60"
              >
                <div className="font-display text-sm sm:text-base font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[11px] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PREVIEW: ABOUT ===================== */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl">
                <div className="relative h-[440px] sm:h-[490px] lg:h-[520px] w-full overflow-hidden rounded-xl bg-white flex items-center justify-center shadow-inner">
                  {/* Fully zoomed out uncropped image with seamless white side fill */}
                  <img
                    src="/images/philosophy-teaching.jpg"
                    alt="Students interactive discussion session"
                    className="relative z-10 h-full w-full object-contain object-center"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('komododecks.com')) {
                        target.src = 'https://plain-apac-prod-public.komododecks.com/202609/16/FYeHvBU6gVaVdUxb7uSo/image.jpg';
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider">
                <Compass className="h-4 w-4" />
                <span>Our Teaching Philosophy</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Good teaching changes how a student sees a problem.
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                At Sultan Academy, we reject mechanical rote memorization. We deconstruct syllabus
                concepts from their core foundations so students grasp the logic, build lasting
                discipline, and develop true problem-solving self-assurance.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  'Concept-based learning over memorisation',
                  'Rigorous past paper walkthroughs & marking schemes',
                  'Personalised attention with structured doubt clearance',
                  'Uncompromising academic discipline and exam readiness',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors group"
                  id="preview-about-cta"
                >
                  <span>Learn more about our philosophy & founder</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PREVIEW: COURSES ===================== */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                Curriculum Focus
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                Focused subjects. Serious progress.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
                Comprehensive Cambridge and Edexcel O Level & A Level preparation taught with
                unwavering clarity.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300 shrink-0"
              id="preview-courses-all-cta"
            >
              <span>View All Courses</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES_DATA.map((course) => (
              <div
                key={course.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-rose-500/40 hover:shadow-xl hover:shadow-rose-950/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-900 border border-slate-800 px-2.5 py-1 text-[11px] font-semibold text-rose-400">
                      {course.badge}
                    </span>
                    <span className="text-xs text-slate-400">O & A Level</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                    {course.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="text-xs font-medium text-slate-400">{course.level}</p>
                    <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-md">
                      3000 Taka /month
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Lead: {course.instructor}</span>
                  <Link
                    to="/courses"
                    className="font-semibold text-rose-400 hover:text-white inline-flex items-center gap-1"
                  >
                    <span>Syllabus</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PREVIEW: TEACHERS ===================== */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                Our Faculty
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                People behind the progress.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
                Experienced educators who take personal responsibility for each student’s academic
                growth and confidence.
              </p>
            </div>
            <Link
              to="/teachers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300 shrink-0"
              id="preview-teachers-all-cta"
            >
              <span>Meet Our Teachers</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEACHERS_DATA.map((teacher) => (
              <div
                key={teacher.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition-all hover:border-slate-700 hover:bg-slate-900"
              >
                {/* Photo container */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="rounded-md bg-slate-900/90 px-2 py-0.5 font-medium text-rose-400 border border-slate-800">
                      {teacher.subject}
                    </span>
                    {teacher.isFounder && (
                      <span className="rounded-md bg-rose-600/90 px-2 py-0.5 font-semibold text-white text-[10px]">
                        Founder
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{teacher.name}</h3>
                    <p className="text-xs font-medium text-slate-400">{teacher.title}</p>
                    <p className="mt-2.5 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {teacher.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <Link
                      to="/teachers"
                      className="text-xs font-semibold text-rose-400 hover:text-rose-300 inline-flex items-center gap-1"
                    >
                      <span>Read Full Profile</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PREVIEW: CAMPUS ===================== */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                Learning Space
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                A place to settle in and do the work.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                Sultan Academy at Taltola Member Line Road, Dhaka 1219. Designed for distraction-free focus.
              </p>
            </div>
            <Link
              to="/campus"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300 shrink-0"
              id="preview-campus-all-cta"
            >
              <span>Explore Campus</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAMPUS_IMAGES.map((img) => (
              <div
                key={img.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 h-60"
                id={`preview-campus-card-${img.id}`}
              >
                {img.category === 'Location' ? (
                  <div className="relative h-full w-full overflow-hidden">
                    <GoogleLiveMap heightClass="h-full w-full min-h-[240px]" />
                    <div className="pointer-events-none absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 z-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider">
                            {img.category}
                          </span>
                          <h3 className="font-display text-sm font-bold text-white">{img.title}</h3>
                        </div>
                        <span className="rounded-full bg-rose-600/90 px-2 py-0.5 text-[10px] font-bold text-white shadow">
                          Live Map
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider">
                        {img.category}
                      </span>
                      <h3 className="font-display text-sm font-bold text-white">{img.title}</h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PREVIEW: EVENTS ===================== */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                Academy Life
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                Beyond the classroom.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                Annual tournaments and events that foster camaraderie, leadership, and balance.
              </p>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300 shrink-0"
              id="preview-events-all-cta"
            >
              <span>View All Events</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS_DATA.map((event) => (
              <div
                key={event.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-slate-700"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-400">
                    {event.category}
                  </span>
                  <span className="text-xs text-slate-400">{event.date}</span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-white group-hover:text-rose-400 transition-colors">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {event.description}
                </p>

                {event.activities && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {event.activities.slice(0, 4).map((act, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-slate-950 border border-slate-800/80 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-white"
                  >
                    <span>Learn More & Schedule</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              Student Reflections
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Voices of Sultan Academy.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Unfiltered words from our students who walked in unsure and walked out confident.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-rose-600 to-blue-600 text-sm font-bold text-white shadow-md">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-rose-400 font-medium">{t.subject}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-300 italic leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Verified Student</span>
                  {t.grade && (
                    <span className="font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {t.grade}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BOTTOM CTA BANNER ===================== */}
      <section className="relative py-20 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.12),transparent_70%)]" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-300">
            <Award className="h-3.5 w-3.5 text-rose-400" />
            <span>Admission Open for Upcoming Exam Cycles</span>
          </div>

          <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-5xl tracking-tight">
            Ready to take the next step?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us what you are preparing for. We will help you find the right subject, level, and
            class fit with Sultan Mahmud Shuvo and our faculty.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-rose-600/30 hover:from-rose-500 hover:to-rose-600 hover:shadow-rose-600/40 active:scale-95 transition-all"
              id="home-bottom-contact-cta"
            >
              <span>Start a conversation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={`tel:${ACADEMY_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-4 text-base font-medium text-slate-200 hover:border-slate-500 hover:text-white"
            >
              <Phone className="h-4 w-4 text-rose-400" />
              <span>Call: {ACADEMY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
