import React from 'react';
import { Link } from '../context/RouterContext';
import { ACADEMY_INFO, TEACHERS_DATA } from '../data/academyData';
import {
  BrainCircuit,
  GraduationCap,
  Target,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  BookCheck,
  Quote,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const shuvoSir = TEACHERS_DATA.find((t) => t.isFounder)!;

  const pillars = [
    {
      title: 'Concept-Based Learning',
      description:
        'We teach why formulas exist, how proofs connect, and what the core principles mean. When students grasp underlying mechanics, exam variations become easy to solve.',
      icon: BrainCircuit,
    },
    {
      title: 'Rigorous Exam Preparation',
      description:
        'Complete Cambridge and Edexcel past paper walkthroughs. We train students on examiner keywords, mark allocations, time management, and presentation precision.',
      icon: Target,
    },
    {
      title: 'Practice & Discipline',
      description:
        '“Where practice meets perfection.” Mastery requires deliberate, repeated problem-solving. Weekly structured assignments build mental stamina and eliminate careless mistakes.',
      icon: BookCheck,
    },
    {
      title: 'Student Confidence & Growth',
      description:
        'Confidence is not born; it is earned through clarity. We cultivate an approachable atmosphere where students ask questions freely without hesitation or fear of judgement.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="w-full bg-slate-950 py-12 sm:py-16 lg:py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Top label */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">About the Academy</span>
        </div>

        {/* Page Hero Header */}
        <div className="mt-6 max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            Good teaching changes how a student sees a problem.
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
            Sultan Academy was founded on a simple conviction: when an educator replaces fear with
            lucid understanding, every student can achieve board exam excellence.
          </p>
        </div>

        {/* ================= FOUNDER SPOTLIGHT ================= */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left: Founder Photo Frame */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-rose-600/30 to-blue-600/20 blur-xl" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-2 shadow-2xl">
                  <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden rounded-xl bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800/40 flex items-end justify-center">
                    <img
                      src={shuvoSir.photo}
                      alt="Sultan Mahmud Shuvo — Founder & Lead Educator"
                      className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-2xl"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent z-10" />
                  </div>
                  <div className="p-4 text-center">
                    <h2 className="font-display text-xl font-bold text-white">
                      Sultan Mahmud Shuvo
                    </h2>
                    <p className="text-xs font-semibold text-rose-400">
                      Founder & Lead Educator
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Mathematics D · Additional Mathematics · Computer Science
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Founder Message & Story */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-400 w-fit">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Founder's Message</span>
              </div>

              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white">
                “When you master the concept, you eliminate the anxiety.”
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {shuvoSir.bio}
              </p>

              <div className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 backdrop-blur-sm">
                <div className="flex gap-3">
                  <Quote className="h-6 w-6 text-rose-400 shrink-0 mt-1" />
                  <p className="text-sm sm:text-base italic text-slate-200 leading-relaxed">
                    “My promise to every student who walks into Sultan Academy is simple: we will
                    never rush you, we will never let you pretend to understand something you
                    don't, and we will drill until you look at past exam questions and smile.”
                  </p>
                </div>
                <div className="mt-3 text-right">
                  <span className="text-xs font-bold text-white">— Sultan Mahmud Shuvo</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shuvoSir.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= CORE PILLARS ================= */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              The Sultan Methodology
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Engineered for O & A Level Triumph
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              The four educational pillars that turn average grades into straight A* achievements.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition-all hover:border-slate-700 hover:bg-slate-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= CURRICULA COVERAGE ================= */}
        <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider">
                <GraduationCap className="h-4 w-4" />
                <span>International Exam Boards</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                Cambridge & Edexcel Specialist Training
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you are preparing for Cambridge Assessment International Education (CAIE) or
                Pearson Edexcel, our syllabus coverage is exhaustive and targeted to each board's
                unique paper formats, mark schemes, and examiner expectations.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <h4 className="font-display font-bold text-white text-sm">O Level (Ordinary Level)</h4>
                  <p className="mt-1 text-xs text-slate-300">
                    Building robust fundamentals, algebraic fluency, conceptual scientific models,
                    and precise exam paper techniques for students aged 14–16.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <h4 className="font-display font-bold text-white text-sm">A Level (Advanced Level)</h4>
                  <p className="mt-1 text-xs text-slate-300">
                    Advanced calculus, complex physics principles, chemical reaction mechanisms, and
                    macroeconomic essays preparing students for top global universities.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-rose-400" />
                  <h3 className="font-display text-lg font-bold text-white">
                    Where Practice Meets Perfection
                  </h3>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The motto on our official crest reflects our daily reality. We don't just lecture;
                  we evaluate weekly question papers, pinpoint weak areas, and coach each student
                  until answers match full marks criteria.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-500/20 bg-gradient-to-r from-rose-950/30 to-blue-950/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    Take the first step today.
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Book a free consultation at our Taltola campus or speak to Shuvo Sir.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-rose-500 transition-colors shrink-0"
                  id="about-cta-contact"
                >
                  <span>Talk to Us</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
