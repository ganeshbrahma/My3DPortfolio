import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

/* ===== Content ===== */
const PROFILE = {
  name: "Ganesh",
  title: "Data Engineer",
  summary:
    "I build reliable, observable data platforms with Spark/Databricks + Delta/Lakehouse, dbt and BI. Strong in SQL/Python, data modeling, and governance.",
  links: {
    email: "ganeshbrahma304@gmail.com",
    linkedin: "https://www.linkedin.com/in/ganeshbrahma/",
    github: "https://github.com/ganeshbrahma",
  },
  skills:
    "Python, PySpark, Java, SQL, PL/SQL, Scala, Linux, Spark SQL, BigQuery • Spark, Hive, Sqoop, Hadoop, Databricks, Azure Data Factory, Airflow, Unity Catalog, Terraform • Azure (ADLS, Synapse, Blob, HDInsight), AWS (Lambda, S3, Glue, Redshift, Athena), GCP • Power BI, GitLab/Jenkins CI/CD",
  projects: [
    {
      name: "MailMatrix",
      stack: "Python, Flask, AWS Lambda, SES, S3, EventBridge, MySQL",
      time: "Jan 2025",
      repo: "https://github.com/ganeshbrahma/MailMatrix",
      bullets: [
        "Flask app + Lambda backend to send bulk, conditional emails via SES triggered by S3 uploads.",
        "Auth, file uploads, email history (MySQL). EventBridge + CloudWatch for automation/monitoring.",
      ],
    },
    {
      name: "AviationProject",
      stack: "MySQL, Hadoop, Cloudera, Spark, Hive, HBase, Sqoop, Tableau",
      time: "Jun 2020",
      repo: "https://github.com/ganeshbrahma/AviationProject",
      bullets: [
        "MySQL → Hadoop migration with batch & stream (Spark/Flink).",
        "ETL to Hive/HBase; dashboards in Tableau/Power BI.",
      ],
    },
  ],
  experience: [
    {
      company: "Munich Re",
      role: "Data Engineering & Analysis Intern",
      time: "Jun 2025 – Aug 2025 • New York, USA",
      bullets: [
        "Built a Deductible Recovery report uncovering ~$8M in unpaid deductibles; improved Claims recovery tracking.",
        "Developed Databricks Delta Live Tables ETL (PySpark/Python), +40% processing speed; enforced governance via Unity Catalog.",
        "Automated multi-sheet Excel ingestion to ADLS; orchestrated REST API workflows for Databricks job deps/monitoring.",
      ],
    },
    {
      company: "Cognizant @ Molina Healthcare",
      role: "Associate Data Engineer",
      time: "Oct 2020 – Dec 2023 • Remote",
      bullets: [
        "Boosted AnG pipeline speed 57% (7h → 3h) via Spark/Scala optimizations on Databricks.",
        "Migrated pipelines from Cloudera to Azure; implemented CI/CD for scale/maintainability.",
        "ETL processing 500M+ records/week with Python/SQL/Airflow; added DQ/gov checks to reduce rework 20–30%.",
      ],
    },
    {
      company: "Applaudo @ Walmart",
      role: "Data Engineer",
      time: "Nov 2022 – May 2023 • Remote",
      bullets: [
        "BigQuery ingestion & transformations with SQL, Airflow, Terraform, GitLab CI — 40% runtime reduction.",
      ],
    },
  ],
  certs: [
    {
      name: "Microsoft Certified: Azure Data Engineer Associate",
      link:
        "https://learn.microsoft.com/api/credentials/share/en-in/ganeshbrahma-2238/256CB5CDCC227EC9?sharingId",
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals",
      link:
        "https://learn.microsoft.com/api/credentials/share/en-in/ganeshbrahma-2238/58713C8EB434ED97?sharingId",
    },
    {
      name: "The Data Scientist’s Toolbox (Coursera)",
      link: "https://www.coursera.org/account/accomplishments/verify/MCXN6QU5MC66",
    },
  ],
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certs", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

/* ===== Bot brain ===== */
function useBotBrain() {
  const jokes = useMemo(
    () => [
      "Why did the data engineer break up with CSV? Too many commas in the relationship.",
      "I tried to start a query club, but nobody had the right join.",
      "Our pipeline is like coffee: it fails without proper grounds.",
    ],
    []
  );
  const score = (q, words) =>
    words.reduce((s, w) => s + (q.toLowerCase().includes(w) ? 1 : 0), 0);

  function answer(q) {
    const intents = [
      {
        k: "education",
        s: score(q, ["education", "school", "study", "degree", "college", "masters", "ms"]),
        a:
          "Here’s my education:\n• University of Central Missouri — M.S., Computer Science (Jan 2024 – Aug 2025)",
      },
      { k: "visa", s: score(q, ["visa", "authorization", "opt", "status", "sponsorship"]), a: "Currently on F-1 OPT (work authorized). Open to full-time roles; start date flexible." },
      { k: "summary", s: score(q, ["about", "summary", "introduce", "who are you"]), a: PROFILE.summary },
      { k: "skills", s: score(q, ["skills", "stack", "tech", "tooling"]), a: "Core skills: " + PROFILE.skills },
      { k: "joke", s: score(q, ["joke", "funny", "laugh", "lol"]), a: jokes[Math.floor(Math.random() * jokes.length)] },
      { k: "hi", s: score(q, ["hi", "hello", "hey"]), a: `Hey! I’m GBot. Ask about education, visa status, summary, skills — or say “tell me a joke”.` },
    ].sort((a, b) => b.s - a.s)[0];
    return intents.s > 0
      ? intents.a
      : "Great question — I’ll get back to you on that. For now I can answer education, visa status, summary, skills, or tell a joke.";
  }
  return { answer };
}

/* ===== Typewriter ===== */
function Typewriter({ text, speed = 16 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    setI(0);
    if (!text) return;
    let id;
    const tick = () => {
      setI((v) => {
        const n = v + 1;
        if (n <= text.length) {
          id = setTimeout(tick, speed);
          return n;
        }
        return v;
      });
    };
    id = setTimeout(tick, speed);
    return () => clearTimeout(id);
  }, [text, speed]);
  return <span>{text?.slice(0, i)}</span>;
}

/* ===== GBot (scroll-fix: container scrollTo, not page) ===== */
function HologramChat() {
  const { answer } = useBotBrain();
  const [messages, setMessages] = useState([
    { role: "bot", text: `Hi! I’m GBot. Ask about education, visa status, a short summary, skills — or say “tell me a joke”.`, typewriter: true },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const scrollRef = useRef(null);

  // keep chat scrolled to bottom when new stuff appears (no page jump)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  function send(qIn) {
    const mapped = qIn === "joke" ? "tell me a joke" : qIn;
    const q = (mapped ?? input).trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      const reply = answer(q);
      setMessages((m) => [...m, { role: "bot", text: reply, typewriter: true }]);
      setThinking(false);
    }, 800);
  }
  function onKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  const chips = ["education", "visa", "summary", "skills", "joke"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.05 }}
      className="relative mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/80 shadow-[0_25px_120px_rgba(0,0,0,0.6)] backdrop-blur"
    >
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="font-semibold">GBot</div>
        <div className="text-xs text-neutral-400">hologram channel</div>
      </div>

      <div
        ref={scrollRef}
        className="chat-scroll max-h-[70vh] min-h-[280px] overflow-y-scroll px-5 py-4 space-y-3 text-sm"
        style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`rounded-2xl px-3 py-2 leading-relaxed ${
                m.role === "user" ? "bg-red-600 text-white" : "bg-white/5 text-neutral-200"
              }`}
              style={{ maxWidth: "85%" }}
            >
              {m.typewriter ? <Typewriter text={m.text} /> : m.text}
            </div>
          </div>
        ))}

        {thinking && (
          <div className="flex justify-start">
            <div className="relative rounded-2xl bg-white/5 px-3 py-2 text-neutral-400">
              thinking…
              <span className="ml-2 inline-block h-[2px] w-16 animate-holo-shimmer rounded bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 border-t border-white/5 bg-gradient-to-r from-transparent to-white/5 px-5 py-3">
        <div className="hidden gap-2 sm:flex">
          {chips.map((t) => (
            <button
              key={t}
              onClick={() => send(t)}
              className="h-9 whitespace-nowrap rounded-xl bg-white/5 px-3 text-xs font-medium text-neutral-300 transition hover:bg-white/10"
            >
              {t}
            </button>
          ))}
        </div>
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="Ask GBot…"
          className="w-full resize-none rounded-xl bg-white/5 px-3 py-2 outline-none placeholder:text-neutral-500"
        />
        <button onClick={() => send()} className="h-9 rounded-xl bg-red-600 px-4 text-sm font-semibold hover:bg-red-500">
          Send
        </button>
      </div>
    </motion.div>
  );
}

/* ===== Header with active underline and G logo ===== */
function Header({ activeId, onNavClick }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavClick("home")}
          className="flex items-center gap-2 text-white"
          aria-label="Go to Home"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-red-600 text-xs font-black">
            G
          </div>
        </button>

        <nav className="hidden items-center gap-6 sm:flex text-sm">
          {NAV.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`relative pb-1 text-neutral-300 transition hover:text-white ${isActive ? "text-white" : ""}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0 left-0 h-[2px] rounded bg-red-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

/* ===== Section wrapper ===== */
function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {title && <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>}
      {children}
    </section>
  );
}

/* ===== Intro “G” overlay (restored) ===== */
function GIntro({ onDone }) {
  const [stage, setStage] = useState("splash");
  useEffect(() => {
    if (stage === "anim") {
      const t = setTimeout(() => {
        setStage("done");
        onDone?.();
      }, 1100);
      return () => clearTimeout(t);
    }
  }, [stage, onDone]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {stage === "splash" && (
        <button
          onClick={() => setStage("anim")}
          className="group relative flex h-56 w-56 items-center justify-center rounded-full outline-none"
          aria-label="Enter"
        >
          <span className="absolute inset-0 rounded-full bg-red-600/20 blur-xl transition group-hover:bg-red-600/30" />
          <span className="relative text-8xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">
            G
          </span>
          <span className="absolute -bottom-10 text-sm text-neutral-400">click to enter</span>
        </button>
      )}
      <AnimatePresence>
        {stage === "anim" && (
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="relative flex items-center justify-center" style={{ width: 260, height: 260, overflow: "hidden" }}>
              <motion.div
                initial={{ scale: 0.9, letterSpacing: "0.1em", filter: "blur(0.3px)" }}
                animate={{
                  scale: [0.9, 1.08, 1],
                  letterSpacing: ["0.1em", "0.02em", "0.02em"],
                  filter: ["blur(0.3px)", "blur(0px)", "blur(0px)"],
                  textShadow: ["0 0 0 rgba(239,68,68,0)", "0 0 50px rgba(239,68,68,0.9)", "0 0 14px rgba(239,68,68,0.5)"],
                }}
                transition={{ duration: 0.8 }}
                className="relative select-none text-[9rem] font-black leading-none text-white"
              >
                G
                <span className="pointer-events-none absolute inset-0 -z-10 bg-red-600/30 blur-2xl" />
              </motion.div>
              <motion.div
                initial={{ x: -340, rotate: -20, opacity: 0 }}
                animate={{ x: 340, rotate: -20, opacity: [0, 1, 0] }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.05 }}
                className="pointer-events-none absolute h-[140%] w-24 bg-gradient-to-r from-transparent via-white to-transparent mix-blend-screen"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===== App ===== */
export default function App() {
  const [activeId, setActiveId] = useState("home");
  const [showMain, setShowMain] = useState(false);

  // Always start at the very top (fix for opening mid-page)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll-spy
  useEffect(() => {
    if (!showMain) return;
    const ids = NAV.map((n) => n.id);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [showMain]);

  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
  }

  return (
    <div className="min-h-screen bg-black text-neutral-200 selection:bg-red-600/60 selection:text-white">
      {!showMain && (
        <GIntro
          onDone={() => {
            setShowMain(true);
            // ensure the hero top is visible after intro
            setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 10);
          }}
        />
      )}

      {showMain && (
        <>
          <Header activeId={activeId} onNavClick={scrollToId} />

          <main className="pt-20">
            <Section id="home">
              <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
                Hi, I’m <span className="text-red-500">{PROFILE.name}</span> — {PROFILE.title}
              </h1>
              <p className="mt-3 max-w-3xl text-lg text-neutral-300">{PROFILE.summary}</p>
              <HologramChat />
            </Section>

            <Section id="skills" title="Skills">
              <p className="max-w-4xl leading-relaxed text-neutral-300">{PROFILE.skills}</p>
            </Section>

            <Section id="projects" title="Projects">
              <div className="grid gap-4 sm:grid-cols-2">
                {PROFILE.projects.map((p) => (
                  <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                      <a className="text-red-400 underline" href={p.repo} target="_blank" rel="noreferrer">
                        repo
                      </a>
                    </div>
                    <p className="mt-1 text-xs text-neutral-400">
                      {p.stack} • {p.time}
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="experience" title="Experience">
              <div className="space-y-5">
                {PROFILE.experience.map((e) => (
                  <div key={e.company} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        {e.role} — {e.company}
                      </h3>
                      <span className="text-xs text-neutral-400">{e.time}</span>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                      {e.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="certs" title="Certifications">
              <ul className="space-y-2">
                {PROFILE.certs.map((c) => (
                  <li key={c.name} className="text-neutral-300">
                    <a className="text-red-400 underline" href={c.link} target="_blank" rel="noreferrer">
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="contact" title="Contact">
              <ul className="space-y-2 text-neutral-300">
                <li>
                  Email:{" "}
                  <a className="text-red-400 underline" href={`mailto:${PROFILE.links.email}`}>
                    {PROFILE.links.email}
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a className="text-red-400 underline" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                    linkedin.com/in/ganeshbrahma
                  </a>
                </li>
                <li>
                  GitHub:{" "}
                  <a className="text-red-400 underline" href={PROFILE.links.github} target="_blank" rel="noreferrer">
                    github.com/ganeshbrahma
                  </a>
                </li>
              </ul>
            </Section>

            <footer className="border-t border-white/5 py-10 text-center text-xs text-neutral-500">
              Built with ♥ React, Tailwind & Framer Motion. © {new Date().getFullYear()} Ganesh.
            </footer>
          </main>
        </>
      )}
    </div>
  );
}
