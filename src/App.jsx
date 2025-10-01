// src/NewNetflix.jsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";


const asset = (p) => {
  const base = import.meta.env.BASE_URL || "/";
  return (base.endsWith("/") ? base.slice(0, -1) : base) + p; // avoids double slashes
};

/* ===== Content ===== */
const PROFILE = {
  name: "Ganesh",
  title: "Data Engineer",
  avatar: asset("/avatar/ganesh.jpeg"),
  summary:
  "I am a Data Engineer with 4+ years across healthcare, insurance and retail. I build reliable lakehouse pipelines on Databricks/Spark + Delta, orchestrate with Airflow/ADF, and model data for BI (Power BI/Tableau). Strong in SQL/Python, data modeling, and governance (Unity Catalog) across AWS, Azure & GCP. Currently exploring opportunities always happy to connect.",
  links: {
    email: "ganeshbrahma304@gmail.com",
    linkedin: "https://www.linkedin.com/in/ganeshbrahma/",
    github: "https://github.com/ganeshbrahma",
    resume: asset("/resume/Ganesh_Kollapudi_Resume.pdf"),
  },
  skills:
    "Python, PySpark, Java, SQL, PL/SQL, Scala, Linux, Spark SQL, BigQuery • Spark, Hive, Sqoop, Hadoop, Databricks, Azure Data Factory, Airflow, Unity Catalog, Terraform • Azure (ADLS, Synapse, Blob, HDInsight), AWS (Lambda, S3, Glue, Redshift, Athena), GCP • Power BI, GitLab/Jenkins CI/CD",
  projects: [
    {
      name: "My 3D Portfolio",
      stack: "React, Tailwind CSS, Framer Motion, Vite, GitHub Pages, Node.js",
      time: "Sep 2025",
      repo: "https://github.com/ganeshbrahma/My3DPortfolio",  // update link if different
      bullets: [
        "This portfolio itself was designed as a Netflix inspired interactive site to showcase my projects, skills, and experience in an engaging format.",
        "Built the front-end with React, Tailwind CSS, and Framer Motion for smooth animations, neon hover effects, and responsive design.",
        "Set up Vite for fast development and optimized builds, and deployed via GitHub Pages for lightweight hosting.",
        "Engineered modular card style sections for Projects, Skills, and Experience, each with glossy hover states, neon glows, and smooth modal transitions.",
        "Integrated **GPT-5** through a custom assistant called *Sparkie Bot*, which dynamically answers visitor questions about my education, skills, and experience.",
        "Implemented Sparkie by feeding it structured profile data and wiring it into the UI with Node.js and APIs — showcasing practical AI/ML integration within a portfolio project."
      ]
    },
    {
      name: "MailMatrix",
      stack: "Python, Flask, AWS Lambda, SES, S3, EventBridge, MySQL",
      time: "Jan 2025",
      repo: "https://github.com/ganeshbrahma/MailMatrix",
      bullets: [
        "This project aimed to streamline bulk and conditional email communication in organizations where manual triggers often led to errors and delays.",
        "Our objective was to design a lightweight, serverless pipeline using Flask and AWS Lambda that ingests files from S3, applies business rules, and dispatches emails via SES.",
        "To ensure compliance and traceability, we integrated MySQL for email history and authentication, while EventBridge + CloudWatch handled automation, retries, and monitoring.",
        "The outcome minimized operational overhead and reduced errors in large scale email campaigns, letting teams focus more on messaging strategy than infrastructure troubleshooting."
      ],
    },
    {
      name: "AviationProject",
      stack: "Spark, Kafka, Java, MySQL, Cloudera, Hive, HBase, Sqoop, Tableau",
      time: "Jun 2020",
      repo: "https://github.com/ganeshbrahma/AviationProject",
      bullets: [
        "This project tackled the challenge of migrating and analyzing large volumes of airport operations data, where legacy systems lacked the scalability needed for real-time insights.","We migrated relational data from MySQL into Hadoop using Sqoop, enabling both batch and streaming pipelines with Spark/Flink.",
        "Processed data was stored in Hive for warehousing and HBase for NoSQL access, ensuring flexible querying options.",
        "Finally, insights were delivered through Tableau/Power BI dashboards, empowering business stakeholders to monitor KPIs like passenger traffic and flight operations with much greater accuracy and timeliness."
      ],
    },
  ],

  /* ===== Experience ===== */
  experience: [
    {
      company: "Munich Re",
      role: "Data Engineering & Analysis Intern",
      type: "Internship",
      timeRange: "Jun 2025 – Aug 2025",
      location: "New York, USA",
      bullets: [
        "Built a Deductible Recovery report uncovering ~$8M in unpaid deductibles; improved Claims recovery tracking.",
        "Developed Databricks Delta Live Tables ETL (PySpark/Python), +40% processing speed; enforced governance via Unity Catalog.",
        "Automated multi-sheet Excel ingestion to ADLS; orchestrated REST API workflows for Databricks job deps/monitoring.",
      ],
      tags: [
        "Databricks",
        "Delta Live Tables",
        "PySpark",
        "Python",
        "Unity Catalog",
        "Azure ADLS",
        "REST APIs",
        "Pandas",
        "Event Hub",
      ],
    },
    {
      company: "Cognizant @ Molina Healthcare",
      role: "Associate Data Engineer",
      type: "Fulltime",
      timeRange: "Oct 2020 – Dec 2023",
      location: "Remote",
      bullets: [
        "Boosted AnG pipeline speed 57% (7h → 3h) via Spark/Scala optimizations on Databricks.",
        "Migrated pipelines from Cloudera to Azure; implemented CI/CD for scale/maintainability.",
        "ETL processing 500M+ records/week with Python/SQL/Airflow; added DQ/gov checks to reduce rework 20–30%.",
      ],
      tags: [
        "Databricks",
        "Spark",
        "Scala",
        "Azure",
        "Airflow",
        "Python",
        "SQL",
        "Hive",
        "CI/CD",
        "Data Quality",
      ],
    },
    {
      company: "Applaudo @ Walmart",
      role: "Data Engineer",
      type: "Freelance",
      timeRange: "Nov 2022 – May 2023",
      location: "Remote",
      bullets: [
        "BigQuery ingestion & transformations on GCP using SQL, Airflow, Terraform; GitLab CI — 40% runtime reduction.",
      ],
      tags: ["GCP", "BigQuery", "Airflow", "Terraform", "Dataflow", "GitLab CI", "Spark SQL"],
    },
    {
      company: "Cognizant",
      role: "Data Analysis Intern",
      type: "Internship",
      timeRange: "Feb 2020 – Oct 2020",
      location: "Remote",
      bullets: [
        "Built system from scratch: migrated MySQL to Hadoop via Sqoop; used HBase for NoSQL storage; enabled real-time analytics with Spark Streaming.",
        "Executed ETL testing and applied Business Continuity Protocols ensuring seamless transition and accuracy.",
      ],
      tags: ["MySQL", "Hadoop", "Sqoop", "HBase", "Spark Streaming", "ETL Testing", "BCP"],
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
      name: "The Data Scientist's Toolbox (Coursera)",
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

/* ===== Global scroll un-locker (hard override) ===== */
function GlobalScrollFix() {
  useEffect(() => {
    document.documentElement.classList.remove("overflow-hidden", "fixed", "h-screen");
    document.body.classList.remove("overflow-hidden", "fixed", "h-screen");

    const style = document.createElement("style");
    style.setAttribute("data-scroll-fix", "");
    style.innerHTML = `
      html, body { overflow-y: auto !important; overflow-x: hidden; height: auto !important; }
      body { position: static !important; }
    `;
    document.head.appendChild(style);
    return () => { try { document.head.removeChild(style); } catch {} };
  }, []);
  return null;
}

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

  const companyReply = (name) => {
    const exp = PROFILE.experience.find((e) => new RegExp(name, "i").test(e.company));
    if (!exp) return null;
    const head = `${exp.company} — ${exp.role} (${exp.timeRange}, ${exp.location})`;
    const bullets = exp.bullets.map((b) => `• ${b}`).join("\n");
    return `${head}\n${bullets}`;
  };

  function answer(q) {
    const intents = [
      {
        k: "standout",
        s: score(q, ["unique", "stand out", "standout", "strength", "differentiator", "developer"]),
        a:
      "I bring a mix of technical depth and business focus. I’ve built data pipelines that run faster and more reliably, cutting runtimes by over 50% and improving data quality. I’ve worked in both healthcare, insurance and retail domains, so I know how to balance compliance with speed. I have hands on across Azure, Databricks, GCP and AWS, and I make it a point to explain technical work in simple terms so business teams can use it. What makes me different is that I don’t just deliver pipelines — I deliver solutions that actually move the needle for the business.",
    },
      {
        k: "munichExperience",
        s: (score(q, ["munich"]) > 0 && (score(q, ["experience"]) > 0 || /expreience/i.test(q))) ? 3 : 0,
        a: companyReply("Munich Re"),
      },
      {
        k: "education",
        s: score(q, ["education", "school", "study", "degree", "college", "masters", "ms"]),
        a: "Here's my education:\n• University of Central Missouri — M.S., Computer Science (Jan 2024 – Aug 2025)",
      },
      {
        k: "visa",
        s: score(q, ["visa", "authorization", "opt", "status", "sponsorship"]),
        a: "Currently on F-1 OPT (work authorized). Open to full-time roles; start date flexible.",
      },
      {
        k: "resume",
        s: score(q, ["resume", "cv", "curriculum", "download", "pdf"]),
        a: `You can view or download my Resume here: ${PROFILE.links.resume}`,
      },
      { k: "summary", s: score(q, ["about", "summary", "introduce", "who are you"]), a: PROFILE.summary },
      { k: "skills", s: score(q, ["skills", "stack", "tech", "tooling"]), a: "Core skills: " + PROFILE.skills },
      { k: "joke", s: score(q, ["joke", "funny", "laugh", "lol"]), a: jokes[Math.floor(Math.random() * jokes.length)] },
      { k: "hi", s: score(q, ["hi", "hello", "hey"]), a: `Hey! I'm Sparkie. Ask about education, visa status, summary, skills — or say "tell me a joke".` },
    ].sort((a, b) => b.s - a.s)[0];

    return intents.s > 0 && intents.a
      ? intents.a
      : "Great question — I'll get back to you on that. For now I can answer education, visa status, summary, skills, or tell a joke.";
  }

  return { answer };
}

/* ===== Small inline icons ===== */
const IconBriefcase = (props) => (
  <svg viewBox="0 0 24 24" className={`h-4 w-4 ${props.className || ""}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M3 13h18" />
  </svg>
);
const IconCalendar = (props) => (
  <svg viewBox="0 0 24 24" className={`h-4 w-4 ${props.className || ""}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const IconPin = (props) => (
  <svg viewBox="0 0 24 24" className={`h-4 w-4 ${props.className || ""}`} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 22s7-5.4 7-12a7 7 0 0 0-14 0c0 6.6 7 12 7 12Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
/*const asset = (p) => import.meta.env.BASE_URL + p;

/* ===== Company logos (add your files under /public/logos) ===== */
const COMPANY_LOGOS = {
  "munich re": asset("/logos/munich-re.svg"),
  "cognizant @ molina healthcare": asset("/logos/cognizant.svg"),
  "applaudo @ walmart": asset("/logos/applaudo.png"),
  "cognizant": asset("/logos/cognizant.svg"),
};
const getLogo = (company = "") => COMPANY_LOGOS[company.toLowerCase()];

/* ===== RED pill ===== */
function SkillPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#e50914]/30 bg-[#e50914]/10 px-3 py-1.5 text-[13px] font-medium text-red-300">
      {children}
    </span>
  );
}

/* ========================================================================== */
/*                              TECHNICAL EXPERTISE                           */
/* ========================================================================== */

/** Icon paths — put SVG/PNG under /public/icons. Fallback is emoji/letter. */
const ICONS = {
  python: asset("/icons/python.png"),
  pyspark: asset("/icons/pyspark.png"),
  sql: asset("/icons/sql.png"),
  nosql: asset("/icons/nosql.png"),
  bigquery: asset("/icons/bigquery.png"),
  java: asset("/icons/java.png"),
  linux: asset("/icons/linux.png"),
  javascript: asset("/icons/javascript.png"),
  scala: asset("/icons/scala.png"),

  spark: asset("/icons/spark.png"),
  hadoop: asset("/icons/hadoop.png"),
  hive: asset("/icons/hive.png"),
  databricks: asset("/icons/databricks.png"),
  airflow: asset("/icons/airflow.png"),
  kafka: asset("/icons/kafka.png"),
  terraform: asset("/icons/terraform.svg"),
  snowflake: asset("/icons/snowflake.png"),

  azure: asset("/icons/azure.png"),
  aws: asset("/icons/aws.png"),
  gcp: asset("/icons/gcp.svg"),

  git: asset("/icons/git.svg"),
  powerbi: asset("/icons/powerbi.svg"),
  tableau: asset("/icons/tableau.png"),
  docker: asset("/icons/docker.png"),
  kubernetes: asset("/icons/kubernetes.png"),
  vscode: asset("/icons/vscode.png"),
};

const YEARS_BADGE = "4y+";

/** UPDATED: Optimized for Data Engineering with proper icon synchronization */
const SKILL_SECTIONS = [
  {
    icon: "💻",
    title: "Programming Languages",
    items: [
      { k: "python", name: "Python", sub: "AI/ML, automation, APIs, scripting" },
      { k: "pyspark", name: "PySpark", sub: "Distributed data processing, Spark SQL" },
      { k: "sql", name: "SQL", sub: "MySQL, SQL Server, Oracle, PostgreSQL, Teradata, PL/SQL" },
      { k: "nosql", name: "NoSQL", sub: "MongoDB, HBase, DynamoDB, Cosmos DB" },
      { k: "scala", name: "Scala", sub: "Spark optimization, functional programming" },
      { k: "java", name: "Java", sub: "Enterprise applications, Spring Boot" },
      { k: "linux", name: "Linux", sub: "Shell scripting, system administration" },
      { k: "javascript", name: "JavaScript", sub: "Full stack development, React, Node.js" },
    ],
  },
  {
    icon: "🧱",
    title: "Data Integration / ETL",
    items: [
      { k: "spark", name: "Apache Spark", sub: "Batch + streaming processing" },
      { k: "hadoop", name: "Hadoop", sub: "HDFS, MapReduce, YARN" },
      { k: "hive", name: "Hive / HiveQL", sub: "Data warehousing, SQL on Hadoop" },
      { k: "databricks", name: "Databricks", sub: "Delta Live Tables, Unity Catalog, Lakehouse" },
      { k: "airflow", name: "Airflow", sub: "Workflow orchestration, DAGs" },
      { k: "kafka", name: "Kafka", sub: "Real-time event streaming" },
      { k: "terraform", name: "Terraform", sub: "Infrastructure as Code" },
      { k: "snowflake", name: "Snowflake", sub: "Cloud data warehouse, Snowpark" },
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Platforms",
    items: [
      { k: "azure", name: "Microsoft Azure", sub: "ADLS, ADF, Synapse, Databricks" },
      { k: "aws", name: "AWS", sub: "S3, Lambda, Glue, Redshift, Athena" },
      { k: "gcp", name: "GCP", sub: "BigQuery, Dataflow, Cloud Storage" },
    ],
  },
  {
    icon: "🧰",
    title: "Developer Tools",
    items: [
      { k: "git", name: "Git", sub: "Git, GitLab, GitHub, CI/CD pipelines" },
      { k: "powerbi", name: "BI & Analytics", sub: "Power BI, Tableau, data visualization" },
      { k: "docker", name: "Containers", sub: "Docker, Kubernetes, containerization" },
      { k: "vscode", name: "Editors & IDE", sub: "VS Code, IntelliJ, Jupyter" },
    ],
  },
];

/** Small right-aligned "4y+" badge */
function YearsBadge() {
  return (
    <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-neutral-100">
      <span className="opacity-75">⏱</span> {YEARS_BADGE}
    </span>
  );
}

/** Inline icon without any background box, fits tightly like your blue example */
function InlineIcon({ k, label }) {
  const src = ICONS[k];
  if (!src) {
    // text fallback (no background)
    return <span className="inline-block align-middle text-[15px]">{label?.[0] ?? "•"}</span>;
  }
  return (
    <img
      src={src}
      alt={label || k}
      className="inline-block h-[18px] w-auto align-middle object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

/** A single row (one skill per line) */
function SkillRow({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex items-center gap-3 rounded-xl border border-white/20
                 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.25)]
                 px-3 py-2.5 transition-all duration-300 transform
                 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(255,255,255,0.6)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <InlineIcon k={item.k} label={item.name} />
      <div className="min-w-0 flex-1 flex items-center justify-between">
        <div className="min-w-0">
          <div className="text-[15px] font-semibold text-white whitespace-nowrap">{item.name}</div>
          <div className="relative overflow-hidden">
            <motion.div
              className="text-[12px] text-neutral-300 whitespace-nowrap"
              animate={{ x: isHovered ? [-0, -50, 0] : 0 }}
              transition={{ duration: 8, repeat: isHovered ? Infinity : 0, ease: "linear" }}
            >
              {item.sub}
            </motion.div>
          </div>
        </div>
        <YearsBadge />
      </div>
    </li>
  );
}


/** Card that glows on hover; rows highlight individually on hover */
function SkillsCard({ section }) {
  return (
    <div
      className="group rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6
                 shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                 transition
                 hover:border-red-500/30
                 hover:shadow-[0_0_0_1px_rgba(229,9,20,.25),0_24px_80px_rgba(229,9,20,.18)]"
    >
      <div className="mb-3 flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-lg">{section.icon}</div>
        <h4 className="text-lg font-semibold text-white">{section.title}</h4>
      </div>
      <ul className="space-y-2">
        {section.items.map((it) => (
          <SkillRow key={it.k + it.name} item={it} />
        ))}
      </ul>
    </div>
  );
}

/** Full Technical Expertise block (used in both main Skills section & the Skills modal) */
function TechnicalExpertise() {
  const [PL, ETL, CLOUD, DEV] = SKILL_SECTIONS;

  return (
    <div>
      <div className="mb-2">
        <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Technical Expertise</h3>
        <p className="mt-1 text-sm text-neutral-400">
          Technologies I've used in real world projects and professional environments.
        </p>
      </div>

      {/* 1 col (mobile) → 2 cols (md) → 3 cols (lg+) */}
      <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        {/* Col 1: Programming Languages */}
        <div className="h-full">
          <SkillsCard section={PL} />
        </div>

        {/* Col 2: Data Integration / ETL */}
        <div className="h-full">
          <SkillsCard section={ETL} />
        </div>

        {/* Col 3: Cloud (top) + Developer Tools (below) */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <SkillsCard section={CLOUD} />
          <SkillsCard section={DEV} />
        </div>
      </div>
    </div>
  );
}


/* ===== Experience timeline (glossy + neon, clipped) ===== */
function ExperienceTimeline({ items, scrollMode = "window" }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // NEW: which card is hovered (for glow/border)
  const [hovered, setHovered] = useState(null);

  // Neon palettes (same vibe as ProjectCard)
  const NEON = {
    blue:   { accent: "rgba(56,189,248,0.55)",  shadow: "rgba(56,189,248,0.28)",  radial: "rgba(56,189,248,0.22)" },
    pink:   { accent: "rgba(236,72,153,0.55)",  shadow: "rgba(236,72,153,0.28)",  radial: "rgba(236,72,153,0.22)" },
    red:    { accent: "rgba(239,68,68,0.60)",   shadow: "rgba(239,68,68,0.30)",   radial: "rgba(239,68,68,0.24)"  },
    yellow: { accent: "rgba(250,204,21,0.65)",  shadow: "rgba(250,204,21,0.30)",  radial: "rgba(250,204,21,0.22)" },
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

    const handleWindow = () => {
      const rect = el.getBoundingClientRect();
      const center = window.innerHeight * 0.5;
      const scrolled = center - rect.top;
      const pct = clamp(scrolled / rect.height, 0, 1);
      setProgress(pct);
    };
    const handleSelf = () => {
      const st = el.scrollTop;
      const h = el.scrollHeight - el.clientHeight;
      const pct = h > 0 ? clamp(st / h, 0, 1) : 1;
      setProgress(pct);
    };

    if (scrollMode === "self") {
      el.addEventListener("scroll", handleSelf, { passive: true });
      handleSelf();
      return () => el.removeEventListener("scroll", handleSelf);
    } else {
      window.addEventListener("scroll", handleWindow, { passive: true });
      window.addEventListener("resize", handleWindow);
      handleWindow();
      return () => {
        window.removeEventListener("scroll", handleWindow);
        window.removeEventListener("resize", handleWindow);
      };
    }
  }, [scrollMode]);

  return (
    <div ref={containerRef} className={scrollMode === "self" ? "max-h-[64vh] overflow-y-auto pr-2" : ""}>
      <div className="relative mx-auto w-full max-w-5xl py-6 sm:py-8">
        {/* rail */}
        <div className="absolute left-1/2 top-0 -ml-[2px] h-full w-1 rounded bg-white/10" />
        {/* progress */}
        <div
          className="absolute left-1/2 top-0 -ml-[2px] w-1 rounded bg-[#e50914] shadow-[0_0_16px_rgba(229,9,20,0.8)]"
          style={{ height: `${progress * 100}%` }}
        />

        <div className="relative space-y-16">
          {items.map((e, idx) => {
            const right = idx % 2 === 0;
            const logo = getLogo(e.company);

            // Alternate neon tones (allow e.color override)
            const toneKey = e.color || (idx % 3 === 0 ? "pink" : idx % 3 === 1 ? "blue" : "red");
            const T = NEON[toneKey] || NEON.pink;
            const isHover = hovered === idx;

            return (
              <div key={`${e.company}-${idx}`} className="relative">
                {/* node */}
                <div className="absolute left-1/2 top-10 -ml-3 h-6 w-6 rounded-full border border-white/15 bg-black">
                  <div className="m-1 h-4 w-4 rounded-full bg-[#e50914] shadow-[0_0_12px_rgba(229,9,20,0.9)]" />
                </div>

                <div className="grid items-start gap-6 sm:gap-8 sm:grid-cols-[1fr_40px_1fr]">
                  <div className={`${right ? "hidden sm:block" : ""}`} />
                  <div className="hidden sm:block" />

                  {/* Glossy + neon wrapper with CLIP to prevent bleed */}
                  <div
                    className="group relative"
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* CLIP LAYER (keeps glow and sheen inside rounded card) */}
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl">
                      {/* radial neon glow (clipped) */}
                      <span
                        className="absolute -top-1/3 -left-1/3 h-[220%] w-[220%]
                                   opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: `radial-gradient(55% 40% at 25% 0%, ${T.radial}, transparent 55%)` }}
                      />
                      {/* animated sheen (clipped) */}
                      <span
                        aria-hidden
                        className="absolute inset-0 -translate-x-full
                                   bg-[linear-gradient(115deg,transparent,rgba(255,255,255,.14),transparent)]
                                   mix-blend-screen opacity-0 transition-all duration-700
                                   group-hover:opacity-100 group-hover:translate-x-full"
                      />
                    </div>

                    {/* CARD CONTENT (same as before) */}
                    <motion.div
                      initial={{ opacity: 0, y: 16, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ type: "spring", damping: 22, stiffness: 220 }}
                      className={`relative z-10 rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8 text-[16px] text-neutral-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
                        right ? "" : "sm:order-first"
                      }`}
                      style={{
                        boxShadow: isHover
                          ? `0 0 0 1px ${T.accent}, 0 28px 90px ${T.shadow}`
                          : undefined,
                        borderColor: isHover ? T.accent : undefined,
                        transform: isHover ? "translateY(-4px)" : undefined,
                        transition: "box-shadow 300ms, transform 300ms, border-color 300ms",
                      }}
                    >
                      {/* header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 text-white">
                          {logo ? (
                            <img
                              src={logo}
                              alt=""
                              className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-contain
                                         bg-white border border-black/10 p-1.5
                                         shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-xl
                                            bg-white border border-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                              <IconBriefcase className="h-6 w-6 text-neutral-700" />
                            </div>
                          )}

                          <div className="text-xl sm:text-2xl font-semibold leading-tight">{e.role}</div>
                        </div>
                        {e.type && (
                          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs sm:text-sm text-neutral-300">
                            {e.type}
                          </span>
                        )}
                      </div>

                      {/* company */}
                      <div className="mt-2 text-red-300 font-semibold text-base sm:text-lg">{e.company}</div>

                      {/* meta */}
                      <div className="mt-2 flex flex-wrap items-center gap-5 text-sm text-neutral-400">
                        <span className="inline-flex items-center gap-1.5">
                          <IconCalendar className="text-neutral-500 h-4 w-4" /> {e.timeRange}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <IconPin className="text-neutral-500 h-4 w-4" /> {e.location}
                        </span>
                      </div>

                      {/* bullets */}
                      <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed">
                        {e.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>

                      {/* tags */}
                      {!!e.tags?.length && (
                        <div className="mt-5 flex flex-wrap gap-2.5">
                          {e.tags.map((t) => (
                            <SkillPill key={t}>{t}</SkillPill>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PreOpenHints({ onAsk }) {
  // label = what we show; query = what Sparkie should answer with
  const hints = [
    { label: "Hey there 👋 — Ask me about Ganesh’s skills ✨", query: "What are your core skills?" },
    { label: "Hey there 👋 — Ask me a joke 😊",               query: "tell me a joke" },
    { label: "Hey there 👋 — Ask me about experience 💼",      query: "Tell me about your experience" },
    { label: "Hey there 👋 — Ask me about Visa status? ✨",     query: "What is your visa status?" },
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % hints.length), 4800);
    return () => clearInterval(id);
  }, []);

  const curr = hints[i];

  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={curr.label}
        onClick={() => onAsk?.(curr.query)}
        type="button"
        initial={{ opacity: 0, y: 6, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -6, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-28 right-6 z-[51] max-w-[78vw] sm:max-w-xs
                   rounded-2xl border border-white/10 bg-[rgba(20,8,8,0.92)]
                   px-4 py-2.5 text-sm text-neutral-100 shadow-[0_20px_80px_rgba(229,9,20,0.18)]
                   backdrop-blur-md text-left hover:bg-white/10"
      >
        {curr.label}
        <span
          className="absolute -bottom-2 right-6 h-4 w-4 rotate-45
                     rounded-sm border-r border-b border-white/10
                     bg-[rgba(20,8,8,0.92)]"
          aria-hidden
        />
      </motion.button>
    </AnimatePresence>
  );
}




function SparkieFloating({ open, setOpen }) {
  const [sparks, setSparks] = useState([]);
  const [pendingQ, setPendingQ] = useState(null);
  const openAndAsk = (q) => {
    setPendingQ(q);
    setOpen(true);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setSparks((s) =>
        [...s, { id: crypto.randomUUID(), left: Math.random() * 36, size: 4 + Math.random() * 6 }].slice(-10)
      );
    }, 350);
    return () => clearInterval(id);
  }, []);

  return (
    <>
    {!open && <PreOpenHints onAsk={openAndAsk} />}
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Sparkie"
        className="fixed bottom-6 right-6 z-50 h-[64px] w-[64px] rounded-full
                   bg-gradient-to-br from-red-500 to-red-600
                   shadow-[0_16px_50px_rgba(229,9,20,0.55)]
                   outline-none animate-bob-slow"
      >
        <span className="absolute inset-0 rounded-full ring-2 ring-red-400/55" />
        <span className="absolute inset-0 grid place-items-center text-white text-[22px]">⚡</span>
        <span className="pointer-events-none absolute -bottom-2 left-1/2 -ml-5 h-2.5 w-10 rounded-full bg-black/45 blur-sm" />
        {sparks.map((p) => (
          <span
            key={p.id}
            className="pointer-events-none absolute bottom-0 left-0 rounded-full bg-white/70"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              animation: "spark-rise 1.8s linear forwards",
              boxShadow: "0 0 8px rgba(255,255,255,0.8)",
            }}
          />
        ))}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-24 right-6 z-50 w-[94vw] max-w-[640px] overflow-hidden
                       rounded-3xl border border-red-400/15
                       bg-[rgba(20,8,8,0.92)] backdrop-blur-md
                       shadow-[0_30px_140px_rgba(229,9,20,0.20),0_12px_36px_rgba(0,0,0,0.6)]
                       animate-bob-slower"
          >
            <SparkieChat
              onClose={() => setOpen(false)}
              autoQuestion={pendingQ}
              onDrained={() => setPendingQ(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animations */}
      <style>{`
        @keyframes spark-rise {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-60px) scale(0.6); opacity: 0; }
        }
        @keyframes bob-slow   { 0%{ transform: translateY(0) } 50%{ transform: translateY(-4px) } 100%{ transform: translateY(0) } }
        @keyframes bob-slower { 0%{ transform: translateY(0) } 50%{ transform: translateY(-3px) } 100%{ transform: translateY(0) } }
        .animate-bob-slow   { animation: bob-slow 3.6s ease-in-out infinite; }
        .animate-bob-slower { animation: bob-slower 4.8s ease-in-out infinite; }
      `}</style>
    </>
  );
}

/* ===== Make plain-text URLs clickable in chat (show filename for PDFs/paths) ===== */
function linkify(text) {
  // Split on absolute URLs or root-relative paths
  const splitRe = /(https?:\/\/[^\s]+|\/[^\s]+(?:\.[^\s]+)?)/g;
  // Non-global test for a single token
  const testRe  = /^(https?:\/\/[^\s]+|\/[^\s]+(?:\.[^\s]+)?)$/i;

  const parts = String(text).split(splitRe);

  return parts.map((part, i) => {
    if (!testRe.test(part)) return <span key={i}>{part}</span>;

    const href = part; // keep full link target

    // Derive a nice display text:
    // - If it's a path or a URL with a filename, show the filename (e.g. Ganesh_Kollapudi_Resume.pdf)
    // - Else fall back to the raw text
    let display = part;
    try {
      const url = new URL(part, window.location.origin); // handles root-relative too
      const last = url.pathname.split("/").pop();
      if (last && /\.[a-z0-9]+$/i.test(last)) {
        // has an extension => looks like a file
        display = last;
      }
    } catch {
      // If it's not a valid URL (shouldn't happen with our regex), try a simple split
      const last = part.split("/").pop();
      if (last && /\.[a-z0-9]+$/i.test(last)) display = last;
    }

    const isPdf = /\.pdf(\?|#|$)/i.test(href);

    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-red-400/70 hover:text-white hover:decoration-red-400"
        download={isPdf ? "" : undefined}
      >
        {display}
      </a>
    );
  });
}




function SparkieChat({ onClose, autoQuestion, onDrained }) {
  const { answer } = useBotBrain();
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text:
        `Hi there 👋 I'm Sparkie. Try: "tell me a joke" 😊, "ask about Ganesh’s skills", "show experience", or "what's your visa status".`,
      typewriter: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef(null);

  const suggestions = useMemo(
    () => [
      "What makes you unique as a developer?",
      "Give me a quick summary",
      "Tell me about Munich Experience",
      "What are your core skills?",
    ],
    []
  );
  const [suggIndex, setSuggIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSuggIndex((v) => (v + 1) % suggestions.length), 4200);
    return () => clearInterval(id);
  }, [suggestions.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  useEffect(() => {
  if (!autoQuestion) return;
  // tiny delay so the panel paints before we push messages
  const id = setTimeout(() => {
    // send() already handles adding user msg + bot reply
    send(autoQuestion);
    onDrained?.();
  }, 60);
  return () => clearTimeout(id);
}, [autoQuestion]);


  function send(qIn) {
  const mapped = qIn === "joke" ? "tell me a joke" : qIn;
  const q = (mapped ?? input).trim();
  if (!q) return;

  setMessages((m) => [...m, { role: "user", text: q }]);
  setInput("");
  setThinking(true);
  setTimeout(() => {
    const reply = answer(q);
    const hasLink = /(https?:\/\/[^\s]+|\/[^\s]+\.pdf(?:[?#][^\s]+)?)/i.test(reply);
    setMessages((m) => [
      ...m,
      { role: "bot", text: reply, typewriter: !hasLink }, // no typewriter if it has a link
    ]);
    setThinking(false);
  }, 700);
}

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-red-600 text-base">⚡</div>
          <div>
            <div className="font-semibold text-white text-lg md:text-xl">Sparkie • AI Assistant</div>
            <div className="text-[11px] md:text-xs text-neutral-300">Showcasing Ganesh's expertise</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="rounded-md bg-white/10 px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/20"
        >
          Close
        </button>
      </div>

      {/* Stream */}
      <div
        ref={scrollRef}
        className="max-h-[58vh] min-h-[260px] space-y-3 overflow-y-auto px-5 py-4 text-[15px] md:text-base"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`rounded-2xl px-4 py-2.5 leading-relaxed ${
                m.role === "user" ? "bg-red-600 text-white" : "bg-white/8 text-neutral-200"
              }`}
              style={{ maxWidth: "85%" }}
            >
              {m.typewriter ? <Typewriter text={m.text} /> : linkify(m.text)}
            </div>
          </div>
        ))}
        {thinking && (
          <div className="flex justify-start">
            <div className="rounded-2xl bg-white/8 px-4 py-2.5 text-neutral-300">
              thinking…
              <span className="ml-2 inline-block h-[2px] w-16 animate-pulse rounded bg-white/60" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 border-t border-white/10 bg-gradient-to-r from-transparent to-white/5 px-5 py-4">
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Ask Sparkie…"
          className="min-w-0 flex-1 resize-none rounded-2xl bg-white/8 px-4 py-3 text-base outline-none placeholder:text-neutral-500"
        />
        <button
          onClick={() => send()}
          className="rounded-2xl bg-red-600 px-5 py-2.5 text-base font-semibold hover:bg-red-500 text-white"
        >
          Send
        </button>
      </div>

      {/* Single rotating suggestion */}
      <div className="px-5 pb-4 pt-2">
        <AnimatePresence mode="wait">
          <motion.button
            key={suggestions[suggIndex]}
            onClick={() => send(suggestions[suggIndex])}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.26 }}
            className="inline-flex items-center gap-2 rounded-full
                       bg-white/10 hover:bg-white/15
                       px-4 py-2 md:px-5 md:py-2.5
                       text-sm md:text-base text-neutral-100"
          >
            <span className="text-[18px]">✨</span>
            <span className="font-medium">{suggestions[suggIndex]}</span>
          </motion.button>
        </AnimatePresence>
      </div>
    </>
  );
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

/* ===== Role Wheel ===== */
function RoleWheel({ stepMs = 1600, gapPx = 6, className = "" }) {
  const STEPS = [
    { left: "Data",     right: "Engineer" },
    { left: "Data",     right: "Scientist" },
    { left: "Data",     right: "Analyst" },
    { left: "Business", right: "Analyst" },
  ];
  const LEFT_VALUES  = ["Data", "Business"];
  const RIGHT_VALUES = ["Engineer", "Scientist", "Analyst"];

  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % STEPS.length), stepMs);
    return () => clearInterval(id);
  }, [stepMs]);

  const leftIndex  = LEFT_VALUES.indexOf(STEPS[i].left);
  const rightIndex = RIGHT_VALUES.indexOf(STEPS[i].right);

  const rootRef = useRef(null);
  const [leftWidths, setLeftWidths] = useState([0, 0]);
  const [rightMax, setRightMax]     = useState(0);

  useEffect(() => {
    const measure = () => {
      const node = rootRef.current;
      if (!node) return;

      const cs = getComputedStyle(node);
      const mk = () => {
        const s = document.createElement("span");
        Object.assign(s.style, {
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          left: "-99999px",
          top: "0",
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          fontStyle: cs.fontStyle,
          fontStretch: cs.fontStretch || "",
          letterSpacing: cs.letterSpacing,
        });
        document.body.appendChild(s);
        return s;
      };

      const meas = mk();
      const widthOf = (w) => { meas.textContent = w; return meas.offsetWidth; };

      const buffer = 3;
      setLeftWidths(LEFT_VALUES.map(w => Math.ceil(widthOf(w) + buffer)));
      setRightMax(Math.ceil(Math.max(...RIGHT_VALUES.map(widthOf)) + buffer));

      document.body.removeChild(meas);
    };

    measure();
    const id = setTimeout(measure, 0);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(id); window.removeEventListener("resize", measure); };
  }, []);

  function Wheel({ items, index, widthPx, transitionWidth = false }) {
    const wrapRef = useRef(null);
    const [linePx, setLinePx] = useState(0);

    useEffect(() => {
      const calc = () => setLinePx(wrapRef.current?.offsetHeight || 0);
      calc();
      window.addEventListener("resize", calc);
      return () => window.removeEventListener("resize", calc);
    }, []);

    return (
      <span
        ref={wrapRef}
        className="relative inline-block overflow-hidden align-baseline whitespace-nowrap"
        style={{
          height: "1em",
          width: widthPx ?? "auto",
          transition: transitionWidth ? "width 420ms cubic-bezier(.2,.8,.2,1)" : undefined,
        }}
      >
        <span
          className="block will-change-transform"
          style={{
            transform: `translateY(-${index * linePx}px)`,
            transition: "transform 700ms cubic-bezier(.2,.8,.2,1)",
          }}
        >
          {items.map((w) => (
            <span key={w} className="block h-[1em] leading-[1em]">{w}</span>
          ))}
        </span>
      </span>
    );
  }

  const leftCurrentWidth = leftWidths[leftIndex] || 0;

  return (
    <span
      ref={rootRef}
      className={`inline-flex items-baseline whitespace-nowrap leading-none
                  text-3xl sm:text-4xl font-semibold tracking-tight ${className}`}
      aria-label={`I can be your ${STEPS[i].left} ${STEPS[i].right}`}
    >
      <span className="mr-[6px]">I can be your</span>
      <Wheel items={LEFT_VALUES} index={leftIndex} widthPx={leftCurrentWidth} transitionWidth />
      <span style={{ width: gapPx }} aria-hidden="true" />
      <Wheel items={RIGHT_VALUES} index={rightIndex} widthPx={rightMax} />
    </span>
  );
}

/* ===== Header ===== */
function Header({ activeId, onNavClick, onLogoClick }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => (onLogoClick ? onLogoClick() : onNavClick("home"))}
          className="flex items-center gap-2 text-white"
          aria-label="Go to Home"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-red-600 text-xs font-black">G</div>
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

/* ===== Sections ===== */
function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {title && (
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Experience</h2>
          <p className="mt-2 text-sm text-neutral-400">
            My professional journey through various roles in AI/ML, software development, and technical leadership positions.
          </p>
        </div>
      )}
      {children}
    </section>
  );
}

/* ===== Intro overlay ===== */
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
          <span className="absolute -bottom-10 text-sm text-neutral-400">Click to continue</span>
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

/* ===== Hub images ===== */
const HUB_IMAGES = {
  home: asset("/cards/about.jpg"),
  experience: asset("/cards/experience.jpg"),
  skills: asset("/cards/skills.jpg"),
  certs: asset("/cards/certs.png"),
  contact: asset("/cards/contact.jpg"),
  projects: asset("/cards/projects.png"),
  resume: asset("/cards/resume.png"),
};

/* ===== Quick Look rail (no outer box, glass cards, infinite auto-scroll, center pop) ===== */
function QuickLookRail({ onOpenModal }) {
  // Base items (one cycle)
  const BASE = [
    { id: "home",       label: "About me",       hint: "Summary" },
    { id: "experience", label: "Experience",     hint: "Roles & impact" },
    { id: "skills",     label: "Skills",         hint: "Tech stack & tools" },
    { id: "projects",   label: "Projects",       hint: "Selected work" },
    { id: "certs",      label: "Certifications", hint: "Credentials" },
    { id: "contact",    label: "Contact",        hint: "Reach out" },
    { id: "resume",     label: "Resume",         hint: "PDF download" },
  ];

  // Artwork: use icons for these sections so they don't look magnified
  const ART = {
    certs:     { kind: "icon", icon: (cls) => <IconCertQL       className={cls} /> },
    contact:   { kind: "icon", icon: (cls) => <IconContactQL     className={cls} /> },
    resume:    { kind: "icon", icon: (cls) => <IconResumeQL      className={cls} /> },
    experience:{ kind: "icon", icon: (cls) => <IconExperienceQL  className={cls} /> },
    skills:    { kind: "icon", icon: (cls) => <IconSkillsQL      className={cls} /> },
    projects:  { kind: "icon", icon: (cls) => <IconProjectsQL    className={cls} /> },
    // others fall back to photos via HUB_IMAGES
  };

  // Triplicate list so we can loop seamlessly
  const items = useMemo(() => [...BASE, ...BASE, ...BASE], []); // length = 3N
  const N = BASE.length;
  const START = N; // start in the middle cycle

  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIdx, setActiveIdx] = useState(START);

  const centerToIndex = useCallback((idx, behavior = "smooth") => {
    const wrap = scrollerRef.current;
    const node = cardRefs.current[idx];
    if (!wrap || !node) return;
    const wrapRect = wrap.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    const delta = (nodeRect.left + nodeRect.width / 2) - (wrapRect.left + wrapRect.width / 2);
    wrap.scrollBy({ left: delta, behavior });
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => centerToIndex(START, "instant"));
    return () => cancelAnimationFrame(id);
  }, [centerToIndex]);

  const recomputeActive = useCallback(() => {
    const wrap = scrollerRef.current;
    if (!wrap) return;
    const wrapRect = wrap.getBoundingClientRect();
    const centerX = wrapRect.left + wrapRect.width / 2;
    let best = 0, bestDist = Infinity;
    cardRefs.current.forEach((node, i) => {
      if (!node) return;
      const r = node.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const d = Math.abs(cx - centerX);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    setActiveIdx(best);
  }, []);

  useEffect(() => {
    const on = () => recomputeActive();
    window.addEventListener("resize", on);
    const wrap = scrollerRef.current;
    wrap && wrap.addEventListener("scroll", on, { passive: true });
    recomputeActive();
    return () => {
      window.removeEventListener("resize", on);
      wrap && wrap.removeEventListener("scroll", on);
    };
  }, [recomputeActive]);

  // Auto-advance: 1.5s feels alive but not rushed
  useEffect(() => {
    const id = setInterval(() => {
      if (activeIdx >= N * 2 - 1) {
        centerToIndex(activeIdx - N, "instant");
        setActiveIdx((v) => v - N);
        return;
      }
      const next = activeIdx + 1;
      centerToIndex(next, "smooth");
      setActiveIdx(next);
    }, 1500);
    return () => clearInterval(id);
  }, [activeIdx, centerToIndex, N]);

  const nudge = (dir) => {
    let next = activeIdx + dir;
    if (next <= N - 1) {
      centerToIndex(next + N, "instant");
      next += N;
    } else if (next >= N * 2) {
      centerToIndex(next - N, "instant");
      next -= N;
    }
    centerToIndex(next, "smooth");
    setActiveIdx(next);
  };

  const baseActive = activeIdx % N;

  return (
    <div className="mt-6">
      {/* header row */}
      <div className="mb-2 flex items-baseline gap-2 px-1">
        <span className="text-white font-semibold">Quick look</span>
        <span className="text-xs text-neutral-400">Tap a card to peek</span>
        <div className="ml-auto hidden sm:flex items-center gap-2">
          <button onClick={() => nudge(-1)}
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-300 hover:bg-white/10">←</button>
          <button onClick={() => nudge(1)}
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-300 hover:bg-white/10">→</button>
        </div>
      </div>

      {/* Rail */}
      <div className="relative" style={{ perspective: 1000 }}>
        {/* soft edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent" />

        <div
          ref={scrollerRef}
          className="no-scrollbar grid auto-cols-[minmax(180px,240px)] grid-flow-col gap-3
                     overflow-x-auto snap-x snap-mandatory scroll-pl-2 pr-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {items.map((it, i) => {
            const isActive = i === activeIdx;
            const isNeighbor = Math.abs(i - activeIdx) === 1;
            const baseIdx = i % N;
            const baseId = BASE[baseIdx].id;
            const def = ART[baseId] || { kind: "photo", src: HUB_IMAGES[baseId] };
            const isIcon = def.kind === "icon";

            return (
              <button
                key={`${it.id}-${i}`}
                ref={(el) => (cardRefs.current[i] = el)}
                onClick={() => {
                  if ((i % N) === baseActive) onOpenModal?.(baseId);
                  else centerToIndex(i, "smooth");
                }}
                className="group relative aspect-[16/10] w-[min(72vw,240px)] shrink-0
                           overflow-hidden rounded-2xl ring-1 ring-white/10 text-left snap-center"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  transform: isActive
                    ? "translateY(-6px) scale(1.07)"
                    : isNeighbor
                    ? "scale(1.02)"
                    : "scale(0.97)",
                  transition: "transform 420ms cubic-bezier(.2,.8,.2,1), box-shadow 300ms, filter 300ms",
                  boxShadow: isActive
                    ? "0 0 0 1px rgba(229,9,20,.25), 0 22px 70px rgba(229,9,20,.18)"
                    : "0 10px 28px rgba(0,0,0,0.35)",
                  zIndex: isActive ? 2 : 1,
                }}
              >
                {/* Artwork layer */}
                {isIcon ? (
                  <>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(60% 60% at 50% 45%, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                      }}
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      {def.icon("text-white/90")}
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={def.src}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-55 transition group-hover:opacity-75"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-white/[0.03]" />
                  </>
                )}

                {/* neon breath only for photo cards */}
                {!isIcon && (
                  <span
                    className="pointer-events-none absolute -top-1/3 -left-1/3 h-[220%] w-[220%] rounded-full transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(55% 40% at 25% 0%, rgba(229,9,20,0.18), transparent 55%)",
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                )}

                {/* labels */}
                <div className="relative z-10 flex h-full w-full flex-col justify-end p-3">
                  <div className="text-[15px] sm:text-base font-bold text-white drop-shadow">
                    {BASE[baseIdx].label}
                  </div>
                  <div className={`text-[10px] ${isIcon ? "text-neutral-200" : "text-neutral-300"}`}>
                    {BASE[baseIdx].hint}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


/* ===== ProjectCard (glossy card + neon hover) ===== */
function ProjectCard({ p, variant = "pink" }) {
  // allow per-project override via p.color: "pink" | "blue"
  const tone = (p.color || variant);

  // neon palettes (tuned to look vivid on dark / Netflix theme)
  const NEON = {
    blue: {
      accent: "rgba(56,189,248,0.55)",   // cyan-400
      shadow: "rgba(56,189,248,0.28)",
      radial: "rgba(56,189,248,0.22)",
    },
    pink: {
      accent: "rgba(236,72,153,0.55)",   // pink-500
      shadow: "rgba(236,72,153,0.28)",
      radial: "rgba(236,72,153,0.22)",
    },
    red: { 
    accent: "rgba(239,68,68,0.60)",
    shadow: "rgba(239,68,68,0.30)",
    radial: "rgba(239,68,68,0.24)"  
    },
    yellow: { accent: "rgba(250,204,21,0.65)",  shadow: "rgba(250,204,21,0.30)",  radial: "rgba(250,204,21,0.22)" }, // yellow-400

  }[tone] || { accent: "rgba(236,72,153,0.55)", shadow: "rgba(236,72,153,0.28)", radial: "rgba(236,72,153,0.22)" };;

  const [hover, setHover] = useState(false);
  const tags = (p.stack || "").split(",").map((t) => t.trim()).filter(Boolean);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative overflow-hidden rounded-[26px]
                 border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                 backdrop-blur-md p-5 sm:p-6
                 shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                 transition-all duration-300"
      style={{
        // neon outline + long shadow only when hovered, keeps Tailwind tidy
        boxShadow: hover
          ? `0 0 0 1px ${NEON.accent}, 0 28px 90px ${NEON.shadow}`
          : undefined,
        borderColor: hover ? NEON.accent : undefined,
        transform: hover ? "translateY(-4px)" : undefined,
      }}
    >
      {/* soft radial neon glow */}
      <span
        className="pointer-events-none absolute -top-1/3 -left-1/3 h-[220%] w-[220%] rounded-full
                   opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(55% 40% at 25% 0%, ${NEON.radial}, transparent 55%)`,
        }}
      />

      {/* animated sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full
                   bg-[linear-gradient(115deg,transparent,rgba(255,255,255,.14),transparent)]
                   mix-blend-screen opacity-0 transition-all duration-700
                   group-hover:opacity-100 group-hover:translate-x-full"
      />

      {/* Hover GitHub button (keeps neon ring) */}
      <a
      href={p.repo}                // << repo from your PROFILE.projects
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${p.name} on GitHub`}
        title="View on GitHub"
        className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center
        rounded-xl bg-white/10 text-white/80 ring-1 ring-white/10
        opacity-0 transition-opacity duration-300
        group-hover:opacity-100 focus:opacity-100 hover:bg-white/20 hover:text-white"
      >
        <IconGitHub className="h-5 w-5" />
      </a>

      {/* Title */}
      <h4 className="relative z-10 text-xl sm:text-2xl font-extrabold leading-tight text-white">
        {p.name}
      </h4>

      {/* Meta */}
      <p className="relative z-10 mt-1 text-xs text-neutral-400">
        {p.time}
      </p>

      {/* Tags */}
      {!!tags.length && (
        <div className="relative z-10 mt-3 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[12px] text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Bullets */}
      {!!p.bullets?.length && (
        <ul className="relative z-10 mt-4 list-disc space-y-1.5 pl-5 text-sm text-neutral-300">
          {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}


/* ===== Modal content ===== */
function ModalBody({ id }) {
  if (id === "home") {
  return (
    <div>
      {/* top headings mimic the reference */}
      <div className="mb-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        {/* LEFT — avatar + My Journey */}
        <div className="space-y-4">
          {/* big round photo next to heading */}
          <div className="flex items-center gap-4">
            <img
              src={PROFILE.avatar}
              alt="Ganesh portrait"
              className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover
                         border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                         ring-4 ring-red-500/10"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-3xl font-extrabold text-white">My Journey</h3>
          </div>

          {/* story paragraphs */}
          <div className="space-y-4 text-[15px] leading-relaxed">
            <p className="text-neutral-200">
              I build reliable, observable data platforms on <span className="font-semibold text-white">Databricks + Delta/Lakehouse</span>,
              with strong <span className="font-semibold text-white">SQL/Python</span>, data modeling, and governance delivering end to end
              pipelines and BI that teams actually use.
            </p>
            <p className="text-neutral-300">
              My journey has been about impact: speeding up pipelines (up to <span className="font-semibold text-white">57%</span>),
              hardening quality with <span className="font-semibold text-white">Unity Catalog</span>, and shipping iteratively with clear docs
              and observability.
            </p>
            <p className="text-neutral-300">
              When I’m off the clock, I’m at the <span className="font-semibold text-white">gym</span>, out on a <span className="font-semibold text-white">trail/hike</span>,
              or saying yes to the next <span className="font-semibold text-white">adventure</span>.
            </p>
          </div>
        </div>

        {/* RIGHT — How I Work */}
        <div className="space-y-4">
          <h3 className="text-3xl font-extrabold text-white">How I Work</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <WorkTile
              icon={<IconCode2 className="h-5 w-5" />}
              title="Clean Code"
              text="Maintainable, testable pipelines with clear models, docs & alerts."
            />
            <WorkTile
              icon={<IconBulb className="h-5 w-5" />}
              title="Innovation"
              text="Stay ahead on data tooling and apply it pragmatically to deliver value."
            />
            <WorkTile
              icon={<IconUsers2 className="h-5 w-5" />}
              title="Collaboration"
              text="Translate business goals into data that analysts & engineers can use."
            />
            <WorkTile
              icon={<IconBolt2 className="h-5 w-5" />}
              title="Performance"
              text="Optimize costs & runtimes with smart partitioning, caching, and design."
            />
          </div>
        </div>
      </div>
    </div>
  );
}



  if (id === "skills") {
    // Use the *same* component the main page uses to keep everything in sync
    return <TechnicalExpertise />;
  }

  if (id === "experience") {
    return (
      <div className="-mr-2">
        <div className="mb-4 text-center">
          <h3 className="text-2xl font-extrabold text-white">My Tech Journey</h3>
          <p className="mt-1 text-xs text-neutral-400">
            Designing data platforms, accelerating pipelines, and shipping cloud-first solutions.
          </p>
        </div>
        <ExperienceTimeline items={PROFILE.experience} scrollMode="self" />
      </div>
    );
  }

  if (id === "projects") {
    return (
      <div>
        <h3 className="mb-2 text-xl font-bold text-white">Projects</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {PROFILE.projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} variant={ i % 3 === 0 ? "pink" : i % 3 === 1 ? "blue" : "red" } />
            ))}
        </div>
      </div>
      );
  }


  if (id === "certs") {
    return (
      <div>
        <h3 className="mb-2 text-xl font-bold text-white">Certifications</h3>
        <ul className="space-y-2 text-sm text-neutral-300">
          {PROFILE.certs.map((c) => (
            <li key={c.name}>
              <a className="text-red-400 underline" href={c.link} target="_blank" rel="noreferrer">
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (id === "contact") {
    return (
      <div className="space-y-2 text-sm text-neutral-300">
        <h3 className="text-xl font-bold text-white">Contact</h3>
        <p>Prefer email for fastest response.</p>
        <p>
          Email:{" "}
          <a className="text-red-400 underline" href={`mailto:${PROFILE.links.email}`}>
            {PROFILE.links.email}
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a className="text-red-400 underline" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/ganeshbrahma
          </a>
        </p>
        <p>
          Resume:{" "}
          <a
            className="text-red-400 underline"
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
          >
            View / Download PDF
          </a>
        </p>
      </div>
      );
  }

    if (id === "resume") {
    return (
      <div>
        <h3 className="mb-3 text-2xl font-extrabold text-white">Resume</h3>

        <div className="mb-4 flex flex-wrap gap-3">
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm text-neutral-100 hover:bg-white/20"
          >
            View PDF
          </a>
          <a
            href={PROFILE.links.resume}
            download
            className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
          >
            Download
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <iframe
            src={PROFILE.links.resume}
            title="Ganesh Resume"
            className="h-[72vh] w-full"
          />
        </div>
      </div>
    );
  }

  return null;
}

function Modal({ id, onClose }) {
  if (!id) return null;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {id && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative z-[61] w-[92vw] max-w-5xl rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-sm text-neutral-300 hover:bg-white/20"
            >
              ✕
            </button>
            {/* FIX: allow scrolling within modal content */}
            <div className="max-h-[76vh] overflow-auto pr-1">
              <ModalBody id={id} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function WavingHand({ className = "" }) {
  return (
    <motion.span
      role="img"
      aria-label="waving hand"
      className={`inline-block align-baseline select-none ${className}`}
      style={{ transformOrigin: "70% 70%" }}  // pivot near the wrist
      animate={{ rotate: [0, 14, -8, 14, 0] }}
      transition={{
        duration: 1.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.4,
      }}
    >
      👋
    </motion.span>
  );
}

/* ===== Mini icons (clean, light SVGs) ===== */
const IconCode2 = (p) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${p.className||""}`} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 18l-6-6 6-6" /><path d="M15 6l6 6-6 6" />
  </svg>
);
const IconBulb = (p) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${p.className||""}`} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 18h6" /><path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12c.7.7 1 1.7 1 2.8V18h6v-1.2c0-1.1.3-2.1 1-2.8A7 7 0 0 0 12 2z"/>
  </svg>
);
const IconUsers2 = (p) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${p.className||""}`} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconBolt2 = (p) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${p.className||""}`} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);
/* ===== Mini icon: GitHub ===== */
const IconGitHub = (p) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${p.className||""}`} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.29-1.71-1.29-1.71-1.06-.73.08-.72.08-.72 1.18.09 1.8 1.22 1.8 1.22 1.04 1.79 2.74 1.27 3.41.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.26 1.2-3.06-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.21 1.17a11.1 11.1 0 0 1 5.84 0c2.23-1.48 3.2-1.17 3.2-1.17.64 1.57.24 2.73.12 3.02.75.8 1.2 1.81 1.2 3.06 0 4.41-2.69 5.38-5.25 5.67.42.36.8 1.07.8 2.17v3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"
    />
  </svg>
);
/* ===== Small inline icons for QuickLook (no magnification) ===== */
const IconContactQL = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className={`h-12 w-12 ${p.className||""}`}>
    <rect x="3" y="4" width="18" height="16" rx="3"/>
    <circle cx="12" cy="10" r="3"/>
    <path d="M5 17c2-2 4.5-3 7-3s5 1 7 3"/>
  </svg>
);

const IconCertQL = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className={`h-12 w-12 ${p.className||""}`}>
    <circle cx="12" cy="8" r="5"/>
    <path d="M8.5 14.5 7 22l5-2 5 2-1.5-7.5"/>
  </svg>
);

const IconResumeQL = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className={`h-12 w-12 ${p.className||""}`}>
    <rect x="4" y="3" width="16" height="18" rx="2" ry="2"/>
    <circle cx="12" cy="9" r="2.5"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
    <line x1="8" y1="17" x2="16" y2="17"/>
  </svg>
);

/* ===== More QuickLook icons (Experience, Skills, Projects) ===== */
const IconExperienceQL = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className={`h-12 w-12 ${p.className||""}`}>
    <rect x="3" y="7" width="18" height="12" rx="2"/>
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
    <path d="M3 13h18"/>
  </svg>
);

// Gear (no inner circles)
const IconSkillsQL = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    className={`h-12 w-12 ${p.className || ""}`}
    aria-hidden="true"
  >
    {/* Teeth NESW */}
    <rect x="11" y="2"  width="2" height="3" />
    <rect x="11" y="19" width="2" height="3" />
    <rect x="2"  y="11" width="3" height="2" />
    <rect x="19" y="11" width="3" height="2" />

    {/* Teeth diagonals (copy rotated 45° around center) */}
    <g transform="rotate(45 12 12)">
      <rect x="11" y="2"  width="2" height="3" />
      <rect x="11" y="19" width="2" height="3" />
      <rect x="2"  y="11" width="3" height="2" />
      <rect x="19" y="11" width="3" height="2" />
    </g>

    {/* Optional tiny square hub — uncomment if you want a center mark */}
    {/* <rect x="11.2" y="11.2" width="1.6" height="1.6" /> */}
  </svg>
);

const IconProjectsQL = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" className={`h-12 w-12 ${p.className||""}`}>
    <rect x="3" y="4" width="18" height="14" rx="2"/>
    <path d="M3 9h18"/>
    <path d="M8 17h8"/>
  </svg>
);




function WorkTile({ icon, title, text }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl
                 border border-white/10 bg-gradient-to-br from-white/[0.035] to-white/[0.02]
                 p-5 sm:p-6 transition-all duration-300
                 hover:-translate-y-1.5 hover:border-red-400/40
                 hover:shadow-[0_18px_70px_rgba(229,9,20,0.22),0_0_0_1px_rgba(229,9,20,0.22)]"
    >
      {/* soft radial glow on hover */}
      <span
        className="pointer-events-none absolute -top-1/4 -left-1/4 h-[220%] w-[220%] rounded-full
                   opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 40% at 25% 0%, rgba(229,9,20,0.20), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl
                        bg-gradient-to-br from-red-500 to-rose-600 text-white shadow
                        ring-1 ring-white/10">
          {icon}
        </div>
        <div className="text-lg font-semibold text-white">{title}</div>
      </div>
      <p className="relative z-10 mt-2 text-sm text-neutral-300">{text}</p>
    </div>
  );
}
// put this near the other small utils/constants, before VisitorCounter()
const VISITOR_NS = "ganesh-portfolio";       // fixed namespace for CountAPI
const VISITOR_KEY = "visits";
const withTimeout = (p, ms = 2500) =>
  Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))]);

/* ===== Visitor Counter (debounced for StrictMode) ===== */
function VisitorCounter({ className = "" }) {
  const [count, setCount] = useState(null);
  const [state, setState] = useState("loading"); // loading | ok | err

  useEffect(() => {
  const host = typeof location !== "undefined" ? location.hostname : "";
  const isLocal =
    host === "localhost" || host === "127.0.0.1" || host.endsWith(".local");

  // ---- StrictMode guard: allow only one "bump" per ~1.5s ----
  const lockKey = isLocal ? "gbk_lock_dev" : "gbk_lock_prod";
  const now = Date.now();
  let shouldBump = true;
  try {
    const last = Number(localStorage.getItem(lockKey) || 0);
    if (now - last < 1500) shouldBump = false; // prevent double increment
    localStorage.setItem(lockKey, String(now));
  } catch {}

  const run = async () => {
    // Dev-only (unchanged): use localStorage counter
    if (isLocal) {
      const k = "gbk_dev_global_counter";
      const cur = Number(localStorage.getItem(k) || 0);
      const next = shouldBump ? cur + 1 : cur;
      try { localStorage.setItem(k, String(next)); } catch {}
      setCount(next);
      setState("ok");
      return;
    }

    // --- PROD path with timeout + multi-provider fallback ---
    const countapiHit = async () => {
      const url = `https://api.countapi.xyz/hit/${VISITOR_NS}/${VISITOR_KEY}`;
      const r = await withTimeout(fetch(url, { cache: "no-store" }));
      if (!r.ok) throw new Error(`countapi ${r.status}`);
      const d = await r.json();
      if (typeof d?.value !== "number") throw new Error("countapi no value");
      return d.value;
    };

    const hitsJson = async () => {
      // increment via beacon if we’re counting this view
      if (shouldBump) {
        const key = encodeURIComponent(`${location.host}${location.pathname}`);
        const img = new Image();
        img.referrerPolicy = "no-referrer";
        img.src = `https://hits.sh/${key}.svg?view=1`;
      }
      const key = encodeURIComponent(`${location.host}${location.pathname}`);
      const r = await withTimeout(fetch(`https://hits.sh/${key}.json`, { cache: "no-store" }));
      if (!r.ok) throw new Error(`hits ${r.status}`);
      const d = await r.json();
      if (typeof d?.hits !== "number") throw new Error("hits no value");
      return d.hits;
    };

    try {
      const v = await countapiHit();
      setCount(v);
      setState("ok");
      return;
    } catch (e1) {
      try {
        const v2 = await hitsJson();
        setCount(v2);
        setState("ok");
        return;
      } catch (e2) {
        // Final local fallback so you always see *something*
        const k = "gbk_fallback_counter";
        const cur = Number(localStorage.getItem(k) || 0);
        const next = shouldBump ? cur + 1 : cur;
        try { localStorage.setItem(k, String(next)); } catch {}
        setCount(next);
        setState("ok");
      }
    }
  };

  run();
}, []);


  if (state === "err") return null;

  return (
    <div
      className={`mx-auto mt-6 inline-flex items-center gap-3 rounded-full
                  border border-white/10 bg-white/[0.06] px-4 py-2
                  text-sm text-neutral-200 ring-1 ring-white/5 backdrop-blur ${className}`}
      style={{ boxShadow: "0 0 0 1px rgba(229,9,20,0.20), 0 18px 60px rgba(229,9,20,0.18)" }}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full
                       bg-gradient-to-br from-red-500 to-red-600 text-white text-sm">👀</span>
      <div className={`font-semibold ${state === "loading" ? "text-neutral-300" : "text-white"}`}>
        {state === "loading" ? "Visitor —" : `Visitor #${count}`}
      </div>
    </div>
  );
}



/* ===== App ===== */
export default function NewNetflix() {
  const [activeId, setActiveId] = useState("home");
  const [showMain, setShowMain] = useState(false);
  const [modal, setModal] = useState(null);
  const [sparkieOpen, setSparkieOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Highlight the nav item of the section whose center is closest to the viewport center
  useEffect(() => {
    if (!showMain) return;

    const ids = NAV.map((n) => n.id);

    const updateActive = () => {
      const mid = window.innerHeight * 0.5;
      let bestId = null;
      let bestDist = Infinity;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }

      if (bestId) setActiveId(bestId);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [showMain]);

  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
  }

  return (
    <div className="min-h-screen bg-black text-neutral-200 selection:bg-red-600/60 selection:text-white">
      <GlobalScrollFix />

      {!showMain && (
        <GIntro
          onDone={() => {
            setShowMain(true);
            setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 10);
          }}
        />
      )}

      <Modal id={modal} onClose={() => setModal(null)} />

      {showMain && (
        <>
          <Header
            activeId={activeId}
            onNavClick={scrollToId}
            onLogoClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Sparkie */}
          <SparkieFloating open={sparkieOpen} setOpen={setSparkieOpen} />

          <main className="pt-20">
            {/* HERO */}
            <section id="home" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
  <span className="inline-flex items-center gap-2">
    <span>Hi,</span>
    <WavingHand className="text-4xl sm:text-6xl" />
  </span>{" "}
  I&apos;m <span className="text-red-500">{PROFILE.name}</span>
</h1>

                <p className="mt-3 text-xl text-neutral-300">
                  <RoleWheel />
                </p>
                <VisitorCounter />
              </div>

              {/* Quick look rail */}
              <QuickLookRail onOpenModal={(id) => setModal(id)} />
            </section>

            {/* SKILLS (now identical to modal content for perfect sync) */}
            <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
              <TechnicalExpertise />
            </section>

            <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
              <h2 className="mb-4 text-2xl font-bold text-white">Projects</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {PROFILE.projects.map((p, i) => (
                  <ProjectCard key={p.name} p={p} variant={ i % 3 === 0 ? "pink" : i % 3 === 1 ? "blue" : "red" } />
                ))}
              </div>
            </section>

            <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Experience</h2>
    <p className="mt-2 text-sm text-neutral-400">
      Designing data platforms, accelerating pipelines, and shipping cloud-first solutions.
    </p>
  </div>
  <ExperienceTimeline items={PROFILE.experience} scrollMode="window" />
</section>


            <section id="certs" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
              <h2 className="mb-4 text-2xl font-bold text-white">Certifications</h2>
              <ul className="space-y-2">
                {PROFILE.certs.map((c) => (
                  <li key={c.name} className="text-neutral-300">
                    <a className="text-red-400 underline" href={c.link} target="_blank" rel="noreferrer">
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
              <h2 className="mb-4 text-2xl font-bold text-white">Contact</h2>
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
                <li>
                  Resume:{" "}
                  <a
                    className="text-red-400 underline"
                    href={PROFILE.links.resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View / Download PDF
                  </a>
                </li>
              </ul>
            </section>

            <footer className="border-t border-white/5 py-10 text-center text-xs text-neutral-500">
              🏋️‍♂️ fueled, ☕️ powered, 💻 built. © {new Date().getFullYear()} Ganesh.
            </footer>
          </main>
        </>
      )}
    </div>
  );
}
