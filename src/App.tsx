import { useState } from 'react';
import PhoneMock from './components/PhoneMock';
import PhoneScreenshot from './components/PhoneScreenshot';
import StoreButtons from './components/StoreButtons';
import type { Feature, QuestionCategory, Testimonial } from './components/types';

type FeatureWithEmoji = Feature & {
  emoji: string;
};

type DifferencePoint = {
  summary: string;
  details: string;
};

const features: FeatureWithEmoji[] = [
  {
    emoji: '💬',
    title: 'Daily Questions',
    description: 'Curated prompts that invite presence, honesty, and emotional intimacy in just a few minutes.',
    impact: 'Turns ordinary days into consistent moments of closeness.',
  },
  {
    emoji: '🧭',
    title: 'Bond Categories',
    description: 'Explore themes like communication, trust, affection, and future vision with guided depth.',
    impact: 'Makes growth structured instead of overwhelming.',
  },
  {
    emoji: '💌',
    title: 'Love Notes',
    description: 'Send private messages that feel timeless—short words that carry real emotional weight.',
    impact: 'Keeps tenderness alive, even during busy seasons.',
  },
  {
    emoji: '🕯️',
    title: 'Ritual Creation',
    description: 'Build intentional weekly or monthly rituals designed around your relationship rhythm.',
    impact: 'Creates meaningful habits that strengthen commitment.',
  },
  {
    emoji: '🗓️',
    title: 'Planning Together',
    description: 'Set shared plans, date ideas, and small goals in a space built for partnership.',
    impact: 'Moves love from intention to action.',
  },
  {
    emoji: '📸',
    title: 'Shared Memories',
    description: 'Save highlights, reflections, and milestones in a warm private archive.',
    impact: 'Helps couples revisit growth and joy over time.',
  },
  {
    emoji: '🔔',
    title: 'Gentle Notifications',
    description: 'Elegant reminders to check in, reflect, or reconnect without feeling intrusive.',
    impact: 'Supports consistency and emotional care.',
  },
  {
    emoji: '📊',
    title: 'Partner Feedback & Results',
    description: 'Understand patterns, celebrate strengths, and uncover opportunities to connect better.',
    impact: 'Builds awareness and deeper alignment.',
  },
  {
    emoji: '🫶',
    title: 'Solo & Couple Modes',
    description: 'Use Khethiwe alone for self-reflection or together for shared conversation and growth.',
    impact: 'Meets you wherever you are in your relationship journey.',
  },
];

const categories: QuestionCategory[] = [
  {
    name: 'Emotional Intimacy',
    tone: 'Soft, vulnerable, and reassuring',
    prompts: [
      'When do you feel most emotionally close to me?',
      'What is one small thing that helps you feel deeply seen?',
    ],
  },
  {
    name: 'Real Talk',
    tone: 'Honest, grounded, and direct',
    prompts: [
      'What is something you need more of from me lately?',
      'Where do we avoid hard conversations, and why?',
    ],
  },
  {
    name: 'Deep & Intimate',
    tone: 'Soulful and reflective',
    prompts: [
      'What fear do you want us to handle with more tenderness?',
      'What part of your story do you wish I asked about more often?',
    ],
  },
  {
    name: 'Conflict & Repair',
    tone: 'Constructive and healing',
    prompts: [
      'What helps you feel safe after we misunderstand each other?',
      'How can we apologize in ways that truly land?',
    ],
  },
  {
    name: 'Family & Values',
    tone: 'Intentional and principled',
    prompts: [
      'What value do you want our relationship to always protect?',
      'Which tradition would you love us to create together?',
    ],
  },
  {
    name: 'Future Plans',
    tone: 'Vision-led and hopeful',
    prompts: [
      'What season of life are you preparing your heart for?',
      'How do we want our relationship to feel one year from now?',
    ],
  },
  {
    name: 'Light & Fun',
    tone: 'Playful and warm',
    prompts: [
      'What mini challenge should we try this week just for fun?',
      'What would your dream spontaneous date look like this month?',
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      'Khethiwe made us slow down and truly hear each other. It feels less like an app and more like a ritual for our relationship.',
    name: 'Nadia & Elias',
    role: 'Together 4 years',
  },
  {
    quote:
      'I use solo mode every evening. The prompts helped me understand my emotional patterns before bringing them into my relationship.',
    name: 'Ayanda M.',
    role: 'Solo reflection user',
  },
  {
    quote:
      'The design is beautiful, but what surprised us most is how intentional every question feels. We feel closer and calmer.',
    name: 'Leila & Mark',
    role: 'Newly engaged couple',
  },
];

const differencePoints: DifferencePoint[] = [
  {
    summary: 'Most relationship apps focus on messaging.',
    details: 'Khethiwe is designed for meaningful moments that build emotional safety over time.',
  },
  {
    summary: 'Grow as an individual and as a couple in one space.',
    details: 'This keeps your growth journey connected, practical, and easier to sustain together.',
  },
  {
    summary: 'Every touchpoint is crafted to feel thoughtful and intimate.',
    details: 'From daily prompts to shared rituals, the experience is premium and emotionally intentional.',
  },
  {
    summary: 'Khethiwe balances romance and structure.',
    details: 'Connection is not left to chance—it is built consistently with clear shared intention.',
  },
];

export default function App() {
  const [expandedDifferenceCards, setExpandedDifferenceCards] = useState<Record<number, boolean>>({});

  const toggleDifferenceCard = (index: number) => {
    setExpandedDifferenceCards((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

  return (
    <div className="relative overflow-x-hidden bg-hero-radial pb-16">
      <header className="section-shell pt-6 sm:pt-8">
        <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
          <p className="text-lg font-semibold tracking-wide text-cream">Khethiwe</p>
          <a
            href="#download"
            className="rounded-full border border-copper/45 px-4 py-2 text-sm text-beige transition hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
          >
            Download
          </a>
        </nav>
      </header>

      <main className="mt-10 space-y-16 sm:space-y-24">
        <section className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-caramel">Relationship app for modern love</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl">
                Deeper connection, designed with intention.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-beige sm:text-lg">
                Khethiwe is a premium relationship app designed to help people connect more deeply through thoughtful
                questions, shared rituals, love notes, planning, reflection, and meaningful daily moments.
              </p>
              <div className="mt-8">
                <StoreButtons />
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="pointer-events-none absolute inset-0 -z-10 m-auto h-60 w-60 rounded-full bg-copper/20 blur-3xl" />
              <div className="flex flex-wrap items-start justify-center gap-4 lg:justify-end">
                <PhoneScreenshot src="/screenshots/values-principles.svg" alt="Values and principles screen" className="hidden sm:block" />
                <PhoneScreenshot src="/screenshots/journey-entry.svg" alt="Journey entry screen" className="mt-8" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-caramel">App overview</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">A guided space for intentional connection.</h2>
            <p className="text-beige leading-relaxed">
              Khethiwe is built for the way real relationships evolve. Use it as a couple to stay emotionally aligned,
              or in solo mode to build self-awareness and communicate with more clarity. Every experience blends
              romance, structure, and shared growth in one calm, luxurious environment.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PhoneMock title="Love Notes" subtitle="Private" lines={['I loved how you checked in today.', 'Save to memory']} />
            <div className="pt-10">
              <PhoneMock title="Weekly Ritual" subtitle="Together" lines={['Sunday check-in', '12 min reflection', 'Complete streak']} />
            </div>
          </div>
        </section>

        <section className="section-shell">
          <p className="text-xs uppercase tracking-[0.24em] text-caramel">Core features</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Everything you need to nurture closeness with depth.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="glass rounded-3xl p-5 shadow-soft">
                <p className="text-2xl leading-none" aria-hidden="true">
                  {feature.emoji}
                </p>
                <h3 className="text-xl font-semibold text-cream">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-beige">{feature.description}</p>
                <p className="mt-4 text-sm font-medium text-caramel">Why it matters: {feature.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="glass rounded-[2rem] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-caramel">What makes Khethiwe different</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Not just conversation. True emotional bonding.</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {differencePoints.map((point, index) => (
                <article key={point.summary} className="rounded-2xl border border-copper/25 bg-[#1f1512]/70 p-4 text-beige">
                  <div className="flex items-start justify-between gap-4">
                    <p className="min-w-0 flex-1 truncate">{point.summary}</p>
                    <button
                      type="button"
                      onClick={() => toggleDifferenceCard(index)}
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-copper/40 text-lg font-medium leading-none text-caramel transition hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                      aria-expanded={Boolean(expandedDifferenceCards[index])}
                      aria-label={`${expandedDifferenceCards[index] ? 'Collapse' : 'Expand'} this difference card`}
                    >
                      {expandedDifferenceCards[index] ? '−' : '+'}
                    </button>
                  </div>
                  {expandedDifferenceCards[index] ? <p className="mt-3 leading-relaxed">{point.details}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <p className="text-xs uppercase tracking-[0.24em] text-caramel">Question showcase</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Prompts that open the right conversations.</h2>
          <div className="mt-8 space-y-4">
            {categories.map((category) => (
              <article key={category.name} className="glass rounded-3xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-cream">{category.name}</h3>
                  <p className="text-sm text-caramel">{category.tone}</p>
                </div>
                <ul className="mt-4 space-y-2 text-beige">
                  {category.prompts.map((prompt) => (
                    <li key={prompt} className="rounded-xl border border-copper/20 bg-[#221713]/80 px-4 py-3">
                      “{prompt}”
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <p className="text-xs uppercase tracking-[0.24em] text-caramel">Reviews</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Loved by couples and thoughtful individuals.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="glass rounded-3xl p-6">
                <blockquote className="text-beige leading-relaxed">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-caramel">
                  <span className="block font-semibold text-cream">{testimonial.name}</span>
                  {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <p className="text-xs uppercase tracking-[0.24em] text-caramel">Screenshots & experience</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A calm, luxurious interface made for emotional focus.</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['Mood Check', 'How connected do you feel today?'],
              ['Date Planner', 'Friday candlelit dinner at home'],
              ['Growth Insight', 'You both value reassurance'],
              ['Memory Vault', 'Our 1-year reflection note'],
            ].map(([title, line], index) => (
              <div
                key={title}
                className={`gold-border rounded-3xl bg-gradient-to-b from-[#2c1d17]/80 to-[#140e0b] p-4 ${index % 2 ? 'sm:mt-10' : ''}`}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-caramel">Preview</p>
                <p className="mt-4 text-lg font-medium text-cream">{title}</p>
                <p className="mt-2 text-sm text-beige">{line}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className="section-shell">
          <div className="rounded-[2rem] border border-copper/35 bg-gradient-to-br from-maroon/40 via-[#2b1715] to-[#1a120f] p-8 text-center shadow-glow sm:p-12">
            <p className="text-xs uppercase tracking-[0.24em] text-caramel">Ready to begin</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Bring intention back to your connection.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-beige">
              Download Khethiwe and experience daily moments of emotional depth, warmth, and meaningful partnership.
            </p>
            <div className="mt-8">
              <StoreButtons centered />
            </div>
          </div>
        </section>
      </main>

      <footer className="section-shell mt-16 border-t border-copper/20 pt-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">Khethiwe</p>
            <p className="mt-3 max-w-sm text-sm text-beige">
              A premium relationship companion for deeper conversations, shared rituals, and emotionally rich daily
              connection.
            </p>
          </div>
          <div>
            <p className="font-medium text-cream">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-beige">
              <li><a href="#" className="hover:text-cream">Home</a></li>
              <li><a href="#" className="hover:text-cream">Features</a></li>
              <li><a href="#" className="hover:text-cream">Questions</a></li>
              <li><a href="#download" className="hover:text-cream">Download</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-cream">Store & developer</p>
            <ul className="mt-3 space-y-2 text-sm text-beige">
              <li><a href="#" className="hover:text-cream">Google Play</a></li>
              <li><a href="#" className="hover:text-cream">App Store</a></li>
              <li>Developed by <span className="text-cream">Your Name — Independent Developer</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
