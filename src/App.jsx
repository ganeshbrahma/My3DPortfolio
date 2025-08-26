import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

/* ---------- Personal profile (edit me) ---------- */
const PROFILE = {
  name: "Ganesh",
  title: "Data Engineer",
  education: [
    "M.S. in Computer Science — Focus: Data Engineering & Analytics",
    "Certs: Azure Data Engineer Associate, Databricks Lakehouse Fundamentals",
  ],
  visaStatus:
    "Currently on F-1 OPT (work authorized). Open to full-time roles; start date flexible.",
  summary:
    "I build reliable, observable data platforms: ELT on Spark/Databricks, Delta/Lakehouse, dbt, and BI. Strong in SQL/Python, data modeling, and governance.",
};

/* ---------- Layout helpers ---------- */
const Page = ({ children }) => (
  <div className="min-h-screen bg-black text-neutral-200 selection:bg-red-600/60 selection:text-white">
    {children}
  </div>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

/* ---------- Tiny “ML-ish” Bot Brain with deflect ---------- */
function useBotBrain() {
  const jokes = useMemo(
    () => [
      "Why did the data engineer break up with CSV? Too many commas in the relationship.",
      "I tried to start a query club, but no one had the right join.",
      "Our pipeline is like coffee: fails without proper grounds.",
    ],
    []
  );

  function score(input, keywords) {
    const txt = input.toLowerCase();
    return keywords.reduce((s, k) => s + (txt.includes(k) ? 1 : 0), 0);
  }

  function answer(input) {
    const intents = [
      {
        name: "education",
        score: score(input, ["education", "school", "study", "degree", "college", "masters", "ms"]),
        reply: "Here’s my education:\n• " + PROFILE.education.join("\n• "),
      },
      {
        name: "visa",
        score: score(input, ["visa", "work authorization", "opt", "status", "sponsorship"]),
        reply: PROFILE.visaStatus,
      },
      {
        name: "about",
        score: score(input, ["about", "summary", "introduce", "who are you", "what do you do"]),
        reply: PROFILE.summary,
      },
      {
        name: "joke",
        score: score(input, ["joke", "funny", "laugh", "lol"]),
        reply: jokes[Math.floor(Math.random() * jokes.length)],
      },
      {
        name: "greeting",
        score: score(input, ["hi", "hello", "hey", "how are you", "good morning", "good evening"]),
        reply: `Hey! I’m GBot. Ask about education, visa status, or say “tell me a joke”.`,
      },
    ];

    const best = intents.sort((a, b) => b.score - a.score)[0];
    if (best.score > 0) return best.reply;

    // Graceful deflect
    return "Great question — I’ll get back to you on that. For now I can answer my education, visa status, a short summary, or tell a joke.";
  }

  return { answer };
}

/* ---------- Centered 3D Chat (GBot) ---------- */
function ChatCenter() {
  const { answer } = useBotBrain();
  const [messages, setMessages] = useState([
    { role: "bot", text: `Hi! I’m GBot. Ask about education, visa status, a quick summary — or say “tell me a joke”.` },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const cardRef = useRef(null);
  const endRef = useRef(null);

  function onMove(e) {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 10}deg)`;
  }
  function onLeave() {
    const el = cardRef.current;
    if (el) el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send() {
    const q = input.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    // typing delay
    setTimeout(() => {
      const reply = answer(q);
      setMessages((m) => [...m, { role: "bot", text: reply }]);
      setTyping(false);
    }, 800);
  }
  function onKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="mx-auto w-full max-w-2xl"
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-[0_25px_100px_rgba(0,0,0,0.6)]"
        style={{ transform: "perspective(1000px)" }}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent">
          <div className="font-semibold">GBot</div>
          <a href="#gallery" className="rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">
            Gallery
          </a>
        </div>

        <div className="max-h-[56vh] overflow-y-auto px-5 py-4 space-y-3 text-sm">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-2xl px-3 py-2 leading-relaxed ${
                  m.role === "user" ? "bg-red-600 text-white" : "bg-white/5 text-neutral-200"
                }`}
                style={{ maxWidth: "85%" }}
              >
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-white/5 px-3 py-2 text-neutral-400">
                typing<span className="animate-pulse">…</span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="flex items-center gap-2 border-t border-white/5 px-5 py-3 bg-gradient-to-r from-transparent to-white/5">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Ask GBot about education, visa, summary, or a joke…"
            className="w-full resize-none rounded-xl bg-white/5 px-3 py-2 outline-none placeholder:text-neutral-500"
          />
          <button onClick={send} className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-500">
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- “G” intro (click to enter) ---------- */
function GIntro({ onDone }) {
  const [stage, setStage] = useState("splash"); // "splash" | "anim" | "done"

  useEffect(() => {
    if (stage === "anim") {
      const t = setTimeout(() => {
        setStage("done");
        onDone && onDone();
      }, 1800);
      return () => clearTimeout(t);
    }
  }, [stage, onDone]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {stage === "splash" && (
        <button
          onClick={() => setStage("anim")}
          className="group relative flex h-56 w-56 items-center justify-center rounded-full outline-none"
          aria-label="Start intro"
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
          <motion.div key="g-only" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative">
            <div className="relative flex items-center justify-center" style={{ width: 260, height: 260, overflow: "hidden" }}>
              <motion.div
                initial={{ scale: 0.9, letterSpacing: "0.1em", filter: "blur(0.3px)" }}
                animate={{
                  scale: [0.9, 1.08, 1],
                  letterSpacing: ["0.1em", "0.02em", "0.02em"],
                  filter: ["blur(0.3px)", "blur(0px)", "blur(0px)"],
                  textShadow: ["0 0 0 rgba(239,68,68,0)", "0 0 50px rgba(239,68,68,0.9)", "0 0 14px rgba(239,68,68,0.5)"],
                }}
                transition={{ duration: 0.85, ease: [0.2, 0.9, 0.2, 1] }}
                className="relative text-[9rem] font-black text-white leading-none select-none"
                style={{ zIndex: 10 }}
              >
                G
                <span className="pointer-events-none absolute inset-0 -z-10 bg-red-600/30 blur-2xl" />
              </motion.div>

              <motion.div
                initial={{ x: -340, rotate: -20, opacity: 0 }}
                animate={{ x: 340, rotate: -20, opacity: [0, 1, 0] }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}
                className="pointer-events-none absolute h-[140%] w-24 bg-gradient-to-r from-transparent via-white to-transparent mix-blend-screen"
                style={{ zIndex: 15 }}
              />
              <motion.div
                initial={{ x: -360, rotate: -18, opacity: 0 }}
                animate={{ x: 360, rotate: -18, opacity: [0, 0.95, 0] }}
                transition={{ duration: 1.0, ease: "easeInOut", delay: 0.15 }}
                className="pointer-events-none absolute h-[140%] w-8 bg-gradient-to-r from-transparent via-red-600 to-transparent blur-sm"
                style={{ zIndex: 14 }}
              />
              <motion.div
                initial={{ x: -380, rotate: -18, opacity: 0 }}
                animate={{ x: 380, rotate: -18, opacity: [0, 0.7, 0] }}
                transition={{ duration: 1.05, ease: "easeInOut", delay: 0.22 }}
                className="pointer-events-none absolute h-[140%] w-4 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[2px]"
                style={{ zIndex: 13 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Header (nav opens panels + Chat shortcut) ---------- */
function Header({ openPanel }) {
  function scrollTo(id) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-sm bg-red-600" />
          <span className="font-semibold tracking-wider">GANESHFLIX</span>
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-neutral-300 sm:flex">
          <button onClick={() => scrollTo("#intro")} className="hover:text-white">Home</button>
          <button onClick={() => openPanel("career")} className="hover:text-white">Career</button>
          <button onClick={() => openPanel("certs")} className="hover:text-white">Certifications</button>
          <button onClick={() => openPanel("projects")} className="hover:text-white">Projects</button>
          <button onClick={() => openPanel("experience")} className="hover:text-white">Experience</button>
          <button onClick={() => openPanel("contact")} className="hover:text-white">Contact</button>
          <button onClick={() => scrollTo("#gallery")} className="hover:text-white">Chat</button>
        </nav>
      </Container>
    </header>
  );
}

/* ---------- Details Panel (for nav items) ---------- */
function DetailsPanel({ open, title, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 240 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-2xl font-bold text-white">{title}</h4>
                <p className="mt-1 text-sm text-neutral-400">Press ESC or close to return</p>
              </div>
              <button onClick={onClose} className="rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">
                Close
              </button>
            </div>
            <div className="mt-5 text-sm leading-relaxed text-neutral-300">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 py-10 text-center text-xs text-neutral-500">
      Built with ♥ using React, Tailwind and Framer Motion. © {new Date().getFullYear()} Ganesh.
    </footer>
  );
}

/* ---------- App ---------- */
export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [panel, setPanel] = useState(null); // "career" | "certs" | "projects" | "experience" | "contact" | null

  // esc to close panels
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setPanel(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Page>
      {!showMain && <GIntro onDone={() => setShowMain(true)} />}

      <Header openPanel={setPanel} />

      {/* Hero */}
      <section id="intro" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.18),transparent_60%)]" />
        <Container className="relative py-20">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Hi, I’m <span className="text-red-500">{PROFILE.name}</span> — {PROFILE.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-4 max-w-2xl text-lg text-neutral-300">
            I design efficient data pipelines, build reliable lakehouse architectures, and turn raw data into actionable insights.
          </motion.p>
        </Container>
      </section>

      {/* GBot center stage */}
      <Container id="gallery" className="mt-2">
        <ChatCenter />
        {/* If you want the old cards below GBot, put them here. Otherwise, they're removed to keep GBot centered. */}
      </Container>

      <Footer />

      {/* Details Panels (triggered by nav) */}
      <DetailsPanel open={panel === "career"} title="Career" onClose={() => setPanel(null)}>
        <ul className="list-disc pl-5">
          <li>Azure Data Engineer focused on lakehouse patterns, Delta, and scalable ELT.</li>
          <li>Strong with SQL, Python (Pandas), Spark, and data modeling.</li>
          <li>Passionate about data quality, governance, and reliable orchestration.</li>
        </ul>
      </DetailsPanel>

      <DetailsPanel open={panel === "certs"} title="Certifications" onClose={() => setPanel(null)}>
        <ul className="list-disc pl-5">
          <li>Microsoft Certified: Azure Data Engineer Associate</li>
          <li>Databricks Lakehouse Fundamentals</li>
          <li>Snowflake SnowPro (example)</li>
        </ul>
      </DetailsPanel>

      <DetailsPanel open={panel === "projects"} title="Projects" onClose={() => setPanel(null)}>
        <p className="mb-2">A few highlights (replace with real links):</p>
        <ul className="list-disc pl-5">
          <li>Real-time Streaming Pipeline with Kafka → Spark → Delta → Power BI</li>
          <li>Data Marketplace for Claims domain — $8M deductible recovery insights</li>
          <li>dbt transformations for a unified analytics mart</li>
        </ul>
      </DetailsPanel>

      <DetailsPanel open={panel === "experience"} title="Experience" onClose={() => setPanel(null)}>
        <ul className="list-disc pl-5">
          <li>Munich Re — Data Governance & Engineering: pipelines and reporting across NADataP&I</li>
          <li>Other roles/engagements — add details here</li>
        </ul>
      </DetailsPanel>

      <DetailsPanel open={panel === "contact"} title="Contact" onClose={() => setPanel(null)}>
        <p>Reach out:</p>
        <ul className="mt-2 space-y-1">
          <li>
            Email: <a href="mailto:you@example.com" className="text-red-400 underline">you@example.com</a>
          </li>
          <li>
            LinkedIn: <a href="#" className="text-red-400 underline">linkedin.com/in/ganesh</a>
          </li>
          <li>
            GitHub: <a href="#" className="text-red-400 underline">github.com/yourhandle</a>
          </li>
        </ul>
      </DetailsPanel>
    </Page>
  );
}
