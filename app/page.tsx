"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight,
  BicepsFlexed,
  CalendarClock,
  Check,
  ChevronRight,
  Dumbbell,
  Flame,
  HeartPulse,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Trophy,
  Users,
  Waves
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const phone = "076800 69791";
const phoneHref = "tel:+917680069791";
const whatsAppHref = "https://wa.me/917680069791?text=Hi%20A7%20Fitness%20Studio%2C%20I%20want%20to%20book%20a%20free%20trial.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
} satisfies Variants;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
} satisfies Variants;

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${latest}${suffix}`;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function SectionIntro({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-400">{eyebrow}</p>
      <h2 className="font-display text-5xl leading-none text-white md:text-7xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">{text}</p>
    </motion.div>
  );
}

const stats = [
  { label: "Reviews", value: 140, suffix: "+", icon: Star },
  { label: "Modern Equipment", value: 40, suffix: "+", icon: Dumbbell },
  { label: "Certified Trainers", value: 7, suffix: "+", icon: Trophy },
  { label: "Spacious Workout Area", value: 100, suffix: "%", icon: Waves },
  { label: "Flexible Weekly Hours", value: 100, suffix: "+", icon: Timer }
];

const services: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Strength Training", text: "Progressive programs for power, posture, and everyday confidence.", Icon: Dumbbell },
  { title: "Weight Loss Programs", text: "Structured coaching, cardio, and nutrition-aware guidance.", Icon: Flame },
  { title: "Cardio Training", text: "High-energy conditioning zones for stamina and fat burn.", Icon: HeartPulse },
  { title: "Personal Training", text: "Focused coaching with accountability and measurable progress.", Icon: Users },
  { title: "Muscle Building", text: "Hypertrophy-focused routines for serious physique transformation.", Icon: BicepsFlexed },
  { title: "Functional Fitness", text: "Athletic movement, mobility, and real-world strength.", Icon: Sparkles },
  { title: "Beginner Guidance", text: "Friendly onboarding so first-time members train with confidence.", Icon: ShieldCheck }
];

const trainers = [
  ["Trainer Name", "Strength Coach", "Powerlifting basics, muscle building, form correction"],
  ["Trainer Name", "Fat Loss Coach", "Weight loss, cardio routines, accountability"],
  ["Trainer Name", "Functional Trainer", "Mobility, conditioning, athletic movement"]
];

const gallery = [
  ["Gym Interior Placeholder", "md:row-span-2"],
  ["Workout Area Placeholder", ""],
  ["Modern Equipment Placeholder", ""],
  ["Trainer Session Placeholder", "md:col-span-2"],
  ["Members Training Placeholder", ""],
  ["Cardio Section Placeholder", ""],
  ["Strength Section Placeholder", "md:col-span-2"]
];

const testimonials = [
  ["Professional trainers and the environment keeps you motivated every day.", "Rohit M.", "Training Support"],
  ["Clean, spacious, and filled with modern equipment. Great value for the fees.", "Sneha K.", "Hygiene and Equipment"],
  ["Friendly management, positive atmosphere, and timings that actually work.", "Arjun P.", "Flexible Timings"]
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <nav className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-24px))] -translate-x-1/2 rounded-full border border-white/10 bg-black/45 px-4 py-3 shadow-2xl backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-red-600 to-orange-400 font-display text-2xl text-white">A7</span>
            <span className="hidden text-sm font-black uppercase tracking-[0.16em] sm:block">Fitness Studio</span>
          </a>
          <div className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.15em] text-zinc-300 md:flex">
            <a href="#training">Training</a>
            <a href="#trainers">Trainers</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <a href={phoneHref} className="hidden rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-orange-400 md:inline-flex">
            Call Now
          </a>
          <button className="grid size-10 place-items-center rounded-full border border-white/10 md:hidden" aria-label="Open navigation">
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <section id="home" className="hero-media relative flex min-h-screen items-center pb-20 pt-28">
        <motion.div
          className="absolute right-6 top-28 hidden rounded-full border border-red-400/40 bg-red-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-100 shadow-[0_0_40px_rgba(255,31,53,0.25)] lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Replace hero image/video here
        </motion.div>
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 backdrop-blur-xl">
              <span className="flex items-center gap-1 text-yellow-300">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" />
                ))}
              </span>
              <span className="text-xs font-black uppercase tracking-[0.16em]">4.8 Rating · 140 Reviews</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-[4.35rem] leading-[0.84] text-white sm:text-[7rem] lg:text-[9.4rem]">
              Transform
              <span className="block">Your Body.</span>
              <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Transform
                <span className="block sm:inline"> Your Life.</span>
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 md:text-xl">
              Certified trainers, modern equipment, a motivating atmosphere, hygiene-first spaces, and flexible timings built for real transformation in Erragadda.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#membership" className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-orange-400 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_0_42px_rgba(255,31,53,0.28)]">
                Join Now <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </a>
              <a href={whatsAppHref} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/14 bg-white/8 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:bg-white hover:text-black">
                Book Free Trial
              </a>
              <a href={phoneHref} className="inline-flex items-center justify-center gap-3 rounded-full border border-red-400/40 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-red-100 transition hover:bg-red-500/20">
                <Phone size={17} /> Call Now
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 grid gap-3 max-w-2xl sm:grid-cols-3">
              {["140+ happy members", "Open till 12 AM", "Affordable premium training"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/34 p-4 text-xs font-extrabold uppercase tracking-[0.12em] text-zinc-200 backdrop-blur">
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="fitness-placeholder min-h-[520px] rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute inset-x-8 top-8 z-10 flex items-center justify-between">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-black">Hero Gym Visual</span>
              <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">Cinematic Slot</span>
            </div>
            <p className="placeholder-label">Replace with gym action photo or training video</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <motion.div className="section-shell grid gap-4 md:grid-cols-5" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          {stats.map(({ label, value, suffix, icon: Icon }) => (
            <motion.div key={label} variants={fadeUp} className="premium-card glow-border rounded-3xl p-5 transition duration-300 hover:-translate-y-1">
              <Icon className="mb-7 text-orange-400" size={28} />
              <p className="font-display text-5xl leading-none"><CountUp value={value} suffix={suffix} /></p>
              <p className="mt-2 text-sm font-bold text-zinc-300">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="about" className="py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div className="fitness-placeholder rounded-[2rem]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="placeholder-label">Gym Interior Placeholder · Replace image here</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} variants={stagger}>
            <motion.p variants={fadeUp} className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-400">About A7</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-5xl leading-none md:text-7xl">A premium transformation gym made accessible.</motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-zinc-300">
              A7 Fitness Studio Unisex Gym brings together serious training, friendly management, clean facilities, spacious workout zones, and trainers who make progress feel possible. It is built for beginners, lifters, weight-loss journeys, and anyone ready to become stronger.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Professional trainers", "Motivating environment", "Modern equipment", "Hygiene and cleanliness", "Affordable pricing", "Positive atmosphere"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Check className="text-orange-400" size={18} />
                  <span className="font-bold text-zinc-100">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="training" className="py-24">
        <div className="section-shell">
          <SectionIntro eyebrow="Training Programs" title="Train For Results" text="Every program is designed around consistency, form, intensity, and confidence, with coaches who keep the energy high." />
          <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {services.map(({ title, text, Icon }) => (
              <motion.div key={title} variants={fadeUp} className="premium-card glow-border group rounded-3xl p-7 transition duration-300 hover:-translate-y-2">
                <div className="mb-8 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-red-600 to-orange-400 shadow-[0_0_35px_rgba(255,31,53,0.25)]">
                  <Icon size={25} />
                </div>
                <h3 className="font-display text-4xl">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{text}</p>
                <ChevronRight className="mt-7 text-orange-400 transition group-hover:translate-x-2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="trainers" className="py-24">
        <div className="section-shell">
          <SectionIntro eyebrow="Coach Led Fitness" title="Trainers Who Push You Right" text="Reviews consistently point to supportive trainers, friendly guidance, and an atmosphere that keeps members coming back." />
          <div className="grid gap-6 md:grid-cols-3">
            {trainers.map(([name, role, detail], index) => (
              <motion.article key={`${role}-${index}`} className="premium-card overflow-hidden rounded-[2rem]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.65 }}>
                <div className="fitness-placeholder min-h-[360px]">
                  <p className="placeholder-label">Trainer Photo Placeholder · Replace image here</p>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-400">{role}</p>
                  <h3 className="mt-2 font-display text-4xl">{name}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{detail}</p>
                  <div className="mt-5 flex gap-3">
                    <span className="grid size-10 place-items-center rounded-full border border-white/10"><Instagram size={17} /></span>
                    <span className="grid size-10 place-items-center rounded-full border border-white/10"><MessageCircle size={17} /></span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24">
        <div className="section-shell">
          <SectionIntro eyebrow="Gym Gallery" title="The A7 Atmosphere" text="A polished gallery system ready for real interior, equipment, trainer, and member photos." />
          <motion.div className="grid auto-rows-[230px] gap-5 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
            {gallery.map(([label, span], index) => (
              <motion.div key={label} variants={fadeUp} className={`fitness-placeholder group rounded-[1.75rem] transition duration-500 hover:scale-[1.02] ${span}`}>
                <div className="absolute right-5 top-5 z-10 rounded-full bg-black/45 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-white backdrop-blur">Replace Image Here</div>
                <p className="placeholder-label">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <motion.div className="absolute inset-0 opacity-70" style={{ background: "linear-gradient(120deg, rgba(255,31,53,.26), transparent 45%, rgba(255,122,24,.2))" }} />
        <div className="section-shell">
          <motion.div className="max-w-4xl" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} variants={stagger}>
            <motion.p variants={fadeUp} className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-orange-300">Transformation Mindset</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-6xl leading-[0.9] md:text-8xl">Push Beyond Limits. Stronger Every Day.</motion.h2>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200">
              The difference is not just equipment. It is the atmosphere, the discipline, and the people around you who make one more rep feel possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <SectionIntro eyebrow="Member Stories" title="What Members Feel" text="Built around the most repeated review themes: trainers, energy, cleanliness, affordability, equipment, and flexible access." />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map(([quote, name, theme], index) => (
              <motion.div key={name} className="premium-card rounded-3xl p-7" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <div className="mb-5 flex text-yellow-300">{[...Array(5)].map((_, i) => <Star key={i} size={17} fill="currentColor" />)}</div>
                <p className="text-lg font-bold leading-8 text-white">"{quote}"</p>
                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-black">{name}</p>
                  <p className="text-sm text-orange-300">{theme}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="py-24">
        <div className="section-shell">
          <SectionIntro eyebrow="Membership" title="Choose Your Start" text="Premium training energy with accessible plan options. Replace the pricing placeholders when final fees are ready." />
          <div className="grid gap-5 lg:grid-cols-3">
            {["Monthly Plan", "Quarterly Plan", "Personal Training"].map((plan, index) => (
              <motion.div key={plan} className={`premium-card rounded-[2rem] p-7 ${index === 1 ? "border-orange-400/60 shadow-[0_0_70px_rgba(255,122,24,0.18)]" : ""}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                {index === 1 && <p className="mb-5 inline-flex rounded-full bg-orange-400 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-black">Recommended</p>}
                <h3 className="font-display text-5xl">{plan}</h3>
                <p className="mt-4 text-zinc-300">Pricing placeholder</p>
                <p className="mt-6 font-display text-6xl">₹ --</p>
                <div className="mt-7 space-y-3">
                  {["Trainer support", "Modern equipment access", "Flexible timing slots"].map((feature) => (
                    <p key={feature} className="flex items-center gap-3 text-zinc-200"><Check size={17} className="text-orange-400" /> {feature}</p>
                  ))}
                </div>
                <a href={whatsAppHref} className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-orange-400">
                  Enquire Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div className="premium-card rounded-[2rem] p-7 md:p-9" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-400">Visit A7</p>
            <h2 className="font-display text-5xl leading-none md:text-7xl">Start Today</h2>
            <div className="mt-8 space-y-5 text-zinc-200">
              <p className="flex gap-4 leading-7"><MapPin className="mt-1 shrink-0 text-orange-400" />2nd floor, Gokul theater, Beside Sanman Hotel, Above Royal Enfield Showroom, Vikaspuri, Erragadda, Hyderabad, Telangana 500114</p>
              <p className="flex gap-4"><Phone className="shrink-0 text-orange-400" />{phone}</p>
              <p className="flex gap-4 leading-7"><CalendarClock className="mt-1 shrink-0 text-orange-400" />Sunday: 6 AM - 12 PM<br />Monday to Saturday: 5 AM - 12 PM, 4 PM - 12 AM</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref} className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-orange-400 px-6 py-4 text-sm font-black uppercase tracking-[0.14em]">Call Gym</a>
              <a href={whatsAppHref} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/14 px-6 py-4 text-sm font-black uppercase tracking-[0.14em]">WhatsApp</a>
            </div>
          </motion.div>
          <motion.div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] min-h-[420px]" initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <iframe
              title="A7 Fitness Studio Unisex Gym map"
              className="map-frame h-full min-h-[420px] w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=A7%20Fitness%20Studio%20Unisex%20Gym%20Erragadda%20Hyderabad&output=embed"
            />
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-4xl">A7 Fitness Studio Unisex Gym</p>
            <p className="mt-2 text-sm text-zinc-400">Premium transformation-focused fitness in Erragadda, Hyderabad.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-zinc-300">
            <a href="#training">Training</a>
            <a href="#trainers">Trainers</a>
            <a href="#gallery">Gallery</a>
            <a href="#membership">Membership</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-3 py-4 text-xs font-black uppercase tracking-[0.08em] text-black shadow-2xl">
          <Phone size={17} /> Call
        </a>
        <a href={whatsAppHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-400 px-3 py-4 text-xs font-black uppercase tracking-[0.08em] shadow-2xl">
          <MessageCircle size={17} /> Trial
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
        <a href={phoneHref} aria-label="Call A7 Fitness Studio" className="grid size-14 place-items-center rounded-full bg-white text-black shadow-2xl transition hover:scale-105"><Phone size={21} /></a>
        <a href={whatsAppHref} aria-label="WhatsApp A7 Fitness Studio" className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-red-600 to-orange-400 shadow-2xl transition hover:scale-105"><MessageCircle size={21} /></a>
      </div>
    </main>
  );
}
