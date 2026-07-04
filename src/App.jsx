import React, { useState, useEffect, useRef } from "react";

const G = "#34d399";
const BG = "#0a0f1e";

const IconGithub   = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>;
const IconLinkedin = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
const IconMail     = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconTest     = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>;
const IconCode     = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconBranch   = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>;
const IconBox      = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><line x1="12" y1="22" x2="12" y2="12"/></svg>;
const IconBug      = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6z"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>;
const IconChart    = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
const IconLink     = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const IconExt      = ({size=13}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const IconMenu     = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const IconClose    = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const IconCheck    = ({size=14}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
const IconPipe     = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="18" y1="10" x2="18" y2="14"/></svg>;
const IconDownload = ({size=18}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;

const CV_PDF_PATH = "/src/Zakaria_Moufid_CV (5).pdf";

function useOnScreen(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Fade({ children, delay = 0, y = 28 }) {
  const [ref, visible] = useOnScreen();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    }}>{children}</div>
  );
}

function Bar({ label, icon, level, delay = 0 }) {
  const [ref, visible] = useOnScreen();
  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "#94a3b8" }}>
          <span style={{ color: G }}>{icon}</span>{label}
        </span>
        <span style={{ fontSize: 12, color: G, fontWeight: 500 }}>{level}%</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 99, height: 4 }}>
        <div style={{
          height: "100%", borderRadius: 99,
          background: `linear-gradient(90deg,${G},#059669)`,
          width: visible ? `${level}%` : "0%",
          transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${delay}s`,
        }} />
      </div>
    </div>
  );
}

const NAV = ["about", "skills", "experience", "projects", "contact"];

const SKILLS = [
  { label: "Playwright",   icon: <IconTest  size={15}/>, level: 95 },
  { label: "TypeScript",   icon: <IconCode  size={15}/>, level: 88 },
  { label: "Selenium",     icon: <IconBug   size={15}/>, level: 80 },
  { label: "API Testing",  icon: <IconLink  size={15}/>, level: 90 },
  { label: "Azure DevOps", icon: <IconBranch size={15}/>, level: 85 },
  { label: "CI/CD Pipelines", icon: <IconPipe size={15}/>, level: 83 },
  { label: "Docker",       icon: <IconBox   size={15}/>, level: 75 },
  { label: "JavaScript",   icon: <IconCode  size={15}/>, level: 87 },
];

const EXPERIENCES = [
  {
    role: "QA Automation Engineer",
    company: "Freelance · Remote",
    date: "2023 – Present",
    desc: "Built and maintained production E2E test suites with Playwright & TypeScript covering UI, API and cross-browser scenarios. Designed CI/CD quality gates on Azure DevOps and GitHub Actions — cutting regression detection time by 60%.",
    bullets: [
      "E2E testing with Playwright + TypeScript (Page Object Model)",
      "REST API automation: GET / POST / PUT / DELETE + schema validation",
      "Azure DevOps YAML pipelines with artifact publishing",
      "HTML reports, screenshots, video & trace collection on failure",
      "Cross-browser matrix: Chromium, Firefox, WebKit",
    ],
    tags: ["Playwright", "TypeScript", "Azure DevOps", "GitHub Actions", "API Testing", "CI/CD"],
  },
  {
    role: "Backend Engineer & Web Scraping Specialist",
    company: "Freelance · Fès, Morocco",
    date: "2022 – 2023",
    desc: "Developed automation Actors for the Apify Marketplace with Node.js, Crawlee and Playwright. Built REST APIs and data pipelines, applying test-driven practices across client projects.",
    bullets: [
      "Apify Marketplace Actors (Node.js, Crawlee, Playwright)",
      "REST API development with Express.js & MongoDB",
      "Docker containerisation and deployment",
      "Data pipeline automation and scraping at scale",
    ],
    tags: ["Node.js", "Playwright", "Apify", "Docker", "MongoDB", "Express.js"],
  },
];

const PROJECTS = [
  {
    icon: <IconTest size={20}/>,
    title: "Playwright E2E & API Testing",
    subtitle: "UI · API · CI/CD · Cross-Browser",
    desc: "Production-ready test suite covering UI login flows, data-driven testing via JSON, full CRUD API validation and cross-browser execution on Chromium & Firefox. Integrated with GitHub Actions and Azure DevOps with rich HTML reporting.",
    bullets: [
      "Data-driven login tests (users.json)",
      "API CRUD: GET /products · POST /login · PUT /products/:id",
      "GitHub Actions + Azure DevOps YAML pipelines",
      "Screenshots, videos & trace ZIP on failure",
    ],
    tags: ["Playwright", "TypeScript", "GitHub Actions", "Azure DevOps", "API Testing"],
    link: "https://github.com/Moufidzakaria/playwright-end-to-end-api-testing-",
  },
  {
    icon: <IconBug size={20}/>,
    title: "Selenium Automation Testing",
    subtitle: "UI Automation · WebDriver · JavaScript",
    desc: "Selenium WebDriver framework for UI automation covering form interactions, validation scenarios and browser compatibility testing with clean test organisation and reusable utilities.",
    bullets: [
      "Selenium WebDriver UI automation",
      "Form validation & browser compatibility",
      "Reusable test utilities and helpers",
      "Structured test organisation",
    ],
    tags: ["Selenium", "JavaScript", "WebDriver", "UI Testing"],
    link: "https://github.com/Moufidzakaria/selinuim-testing",
  },
  {
    icon: <IconPipe size={20}/>,
    title: "CI/CD Azure DevOps Automation",
    subtitle: "Enterprise QA · POM · Dual CI/CD",
    desc: "Enterprise-grade Playwright framework with Page Object Model architecture, dual CI/CD infrastructure on GitHub Actions and Azure DevOps, anti-bot mitigations (custom User-Agent, route blocking), full CRUD API testing and automatic diagnostic artifact extraction.",
    bullets: [
      "Page Object Model (POM) design pattern",
      "Dual CI/CD: GitHub Actions + Azure DevOps YAML",
      "Anti-bot: custom User-Agent, Cloudflare bypass",
      "Automatic artifact publishing on pass or fail",
    ],
    tags: ["Playwright", "TypeScript", "Azure DevOps", "POM", "CI/CD", "API Testing"],
    link: "https://github.com/Moufidzakaria/automation-testing-ci-cd-azure-devops",
  },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const full = "QA Automation & Azure DevOps Engineer";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, 48);
    return () => clearInterval(t);
  }, []);

  const Tag = ({ t }) => (
    <span style={{ background: "rgba(52,211,153,0.07)", border: "0.5px solid rgba(52,211,153,0.2)", color: G, fontSize: 11, padding: "3px 10px", borderRadius: 20 }}>{t}</span>
  );

  const Btn = ({ href, children, primary, download }) => (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
      download={download}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        padding: "10px 22px", borderRadius: 6, fontSize: 13, fontWeight: primary ? 600 : 400,
        textDecoration: "none",
        background: primary ? G : "transparent",
        color: primary ? BG : "#e2e8f0",
        border: primary ? "none" : "0.5px solid rgba(255,255,255,0.18)",
      }}>{children}</a>
  );

  return (
    <div style={{ background: BG, color: "#e2e8f0", minHeight: "100vh", fontFamily: "system-ui,sans-serif" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 200,
        background: "rgba(10,15,30,0.97)",
        borderBottom: "0.5px solid rgba(52,211,153,0.12)",
        height: 58,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px",
      }}>
        <span style={{ color: G, fontWeight: 700, fontSize: 14, letterSpacing: 1.5 }}>ZAKARIA.DEV</span>

        {/* desktop */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {NAV.map(s => (
              <a key={s} href={`#${s}`}
                style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = G}
                onMouseLeave={e => e.target.style.color = "#94a3b8"}>
                {s[0].toUpperCase() + s.slice(1)}
              </a>
            ))}
            <a href={CV_PDF_PATH} download
              style={{ display: "flex", alignItems: "center", gap: 6, color: "#94a3b8", fontSize: 13, textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = G}
              onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
              <IconDownload size={15} /> CV
            </a>
            <a href="https://github.com/Moufidzakaria" target="_blank" style={{ color: "#94a3b8", display:"flex" }}
              onMouseEnter={e => e.currentTarget.style.color = G}
              onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
              <IconGithub />
            </a>
            <a  href="https://www.linkedin.com/in/zakaria-moufid-5294082a1/"  target="_blank" style={{ color: "#94a3b8", display:"flex" }}
              onMouseEnter={e => e.currentTarget.style.color = G}
              onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
              <IconLinkedin />
            </a>
          </div>
        )}

        {/* mobile burger */}
        {isMobile && (
          <button onClick={() => setOpen(o => !o)}
            style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", display: "flex", padding: 4 }}>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        )}
      </nav>

      {/* mobile drawer */}
      {isMobile && open && (
        <div style={{
          position: "fixed", top: 58, left: 0, right: 0, zIndex: 199,
          background: "rgba(10,15,30,0.99)",
          borderBottom: "0.5px solid rgba(52,211,153,0.15)",
          padding: "20px 24px",
          display: "flex", flexDirection: "column", gap: 18,
        }}>
          {NAV.map(s => (
            <a key={s} href={`#${s}`} onClick={() => setOpen(false)}
              style={{ color: "#94a3b8", fontSize: 16, textDecoration: "none" }}>
              {s[0].toUpperCase() + s.slice(1)}
            </a>
          ))}
          <a href={CV_PDF_PATH} download onClick={() => setOpen(false)}
            style={{ display: "flex", alignItems: "center", gap: 8, color: "#94a3b8", fontSize: 16, textDecoration: "none" }}>
            <IconDownload size={18} /> Download CV
          </a>
          <div style={{ display: "flex", gap: 18, paddingTop: 4 }}>
            <a href="https://github.com/Moufidzakaria" target="_blank" style={{ color: "#94a3b8" }}><IconGithub size={20}/></a>
            <a href="https://www.linkedin.com/in/zakaria-moufid-5294082a1/" target="_blank" style={{ color: "#94a3b8" }}><IconLinkedin size={20}/></a>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{ padding: "100px 24px 80px", maxWidth: 860, margin: "0 auto" }}>
        <p style={{ color: G, fontSize: 14, marginBottom: 14, opacity: 0, animation: "fu .6s ease .1s forwards" }}>
          Hello, I am
        </p>
        <h1 style={{ fontSize: "clamp(34px,8vw,58px)", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.1, marginBottom: 16, opacity: 0, animation: "fu .6s ease .3s forwards" }}>
          Zakaria Moufid
        </h1>
        <div style={{ fontSize: "clamp(14px,3vw,20px)", color: G, fontWeight: 400, marginBottom: 26, minHeight: 28, opacity: 0, animation: "fu .6s ease .5s forwards" }}>
          {typed}<span style={{ color: G }}>|</span>
        </div>
        <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.85, maxWidth: 520, marginBottom: 36, opacity: 0, animation: "fu .6s ease .7s forwards" }}>
          I build scalable QA automation systems, CI/CD pipelines and test frameworks using Playwright, TypeScript and Azure DevOps. Specialised in E2E, API testing and enterprise-grade pipeline integration.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", opacity: 0, animation: "fu .6s ease .9s forwards" }}>
          <Btn href="#projects" primary>View Projects</Btn>
          <Btn href={CV_PDF_PATH} download><IconDownload size={15}/> Download CV</Btn>
          <Btn href="#contact">Contact Me</Btn>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid rgba(255,255,255,0.07)", margin: "0 24px" }} />

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "68px 24px", maxWidth: 860, margin: "0 auto" }}>
        <Fade>
          <p style={{ color: G, fontSize: 11, letterSpacing: 3, marginBottom: 6 }}>01</p>
          <h2 style={{ fontSize: "clamp(20px,4vw,26px)", fontWeight: 600, color: "#f1f5f9", marginBottom: 18 }}>About Me</h2>
          <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.9, maxWidth: 700 }}>
            QA Automation Engineer with hands-on experience building production-ready test frameworks and CI/CD pipelines. I specialise in end-to-end testing with <span style={{ color: G }}>Playwright</span> and <span style={{ color: G }}>TypeScript</span>, REST API automation, and integrating automated quality gates into <span style={{ color: G }}>Azure DevOps</span> and GitHub Actions workflows. With a background in backend engineering, I bring a full-stack mindset to every QA challenge.
          </p>
        </Fade>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid rgba(255,255,255,0.07)", margin: "0 24px" }} />

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "68px 24px", maxWidth: 860, margin: "0 auto" }}>
        <Fade>
          <p style={{ color: G, fontSize: 11, letterSpacing: 3, marginBottom: 6 }}>02</p>
          <h2 style={{ fontSize: "clamp(20px,4vw,26px)", fontWeight: 600, color: "#f1f5f9", marginBottom: 32 }}>Skills</h2>
        </Fade>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "4px 52px" }}>
          {SKILLS.map((s, i) => <Bar key={i} {...s} delay={i * 0.07} />)}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid rgba(255,255,255,0.07)", margin: "0 24px" }} />

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: "68px 24px", maxWidth: 860, margin: "0 auto" }}>
        <Fade>
          <p style={{ color: G, fontSize: 11, letterSpacing: 3, marginBottom: 6 }}>03</p>
          <h2 style={{ fontSize: "clamp(20px,4vw,26px)", fontWeight: 600, color: "#f1f5f9", marginBottom: 36 }}>Experience</h2>
        </Fade>

        <div style={{ position: "relative", paddingLeft: isMobile ? 18 : 28, borderLeft: `1px solid rgba(52,211,153,0.18)` }}>
          {EXPERIENCES.map((e, i) => (
            <Fade key={i} delay={i * 0.12}>
              <div style={{ position: "relative", marginBottom: i < EXPERIENCES.length - 1 ? 36 : 0 }}>
                {/* dot */}
                <div style={{
                  position: "absolute",
                  left: isMobile ? -24 : -34,
                  top: 6, width: 12, height: 12,
                  borderRadius: "50%",
                  background: BG, border: `2px solid ${G}`,
                  boxShadow: `0 0 8px rgba(52,211,153,0.4)`,
                }} />

                <div style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: 12, padding: isMobile ? "18px 16px" : "22px 26px",
                }}>
                  {/* header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: isMobile ? 14 : 16, fontWeight: 600, color: "#f1f5f9" }}>{e.role}</span>
                    <span style={{ fontSize: 11, color: G, background: "rgba(52,211,153,0.1)", padding: "3px 11px", borderRadius: 20, whiteSpace: "nowrap" }}>{e.date}</span>
                  </div>
                  <p style={{ fontSize: 13, color: G, marginBottom: 12 }}>{e.company}</p>
                  <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75, marginBottom: 14 }}>{e.desc}</p>

                  {/* bullets */}
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: 7 }}>
                    {e.bullets.map((b, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#94a3b8" }}>
                        <span style={{ marginTop: 1, flexShrink: 0 }}><IconCheck /></span>{b}
                      </li>
                    ))}
                  </ul>

                  {/* tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {e.tags.map((t, j) => <Tag key={j} t={t} />)}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid rgba(255,255,255,0.07)", margin: "0 24px" }} />

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "68px 24px", maxWidth: 860, margin: "0 auto" }}>
        <Fade>
          <p style={{ color: G, fontSize: 11, letterSpacing: 3, marginBottom: 6 }}>04</p>
          <h2 style={{ fontSize: "clamp(20px,4vw,26px)", fontWeight: 600, color: "#f1f5f9", marginBottom: 36 }}>Projects</h2>
        </Fade>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {PROJECTS.map((p, i) => (
            <Fade key={i} delay={i * 0.1}>
              <div style={{
                background: "rgba(255,255,255,0.025)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: isMobile ? "18px 16px" : "24px 28px",
                transition: "border-color .2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(52,211,153,0.35)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}>

                {/* title row */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                  <span style={{ color: G }}>{p.icon}</span>
                  <div>
                    <p style={{ fontSize: isMobile ? 14 : 16, fontWeight: 600, color: "#f1f5f9", margin: 0 }}>{p.title}</p>
                    <p style={{ fontSize: 11, color: "#64748b", margin: 0 }}>{p.subtitle}</p>
                  </div>
                </div>

                <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75, margin: "14px 0" }}>{p.desc}</p>

                {/* bullets */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                  {p.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#94a3b8" }}>
                      <span style={{ marginTop: 1, flexShrink: 0 }}><IconCheck /></span>{b}
                    </li>
                  ))}
                </ul>

                {/* tags + link */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 10 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.tags.map((t, j) => <Tag key={j} t={t} />)}
                  </div>
                  <a href={p.link} target="_blank"
                    style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: G, textDecoration: "none", whiteSpace: "nowrap" }}>
                    <IconGithub size={14} /> View on GitHub <IconExt />
                  </a>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid rgba(255,255,255,0.07)", margin: "0 24px" }} />

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "68px 24px", maxWidth: 860, margin: "0 auto" }}>
        <Fade>
          <p style={{ color: G, fontSize: 11, letterSpacing: 3, marginBottom: 6 }}>05</p>
          <h2 style={{ fontSize: "clamp(20px,4vw,26px)", fontWeight: 600, color: "#f1f5f9", marginBottom: 14 }}>Contact</h2>
          <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.85, maxWidth: 480, marginBottom: 28 }}>
            Open to freelance QA Automation contracts and full-time roles. I usually reply within 24 hours.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn href="mailto:moufidzakaria92@gmail.com" primary><IconMail size={15}/> Email Me</Btn>
            <Btn href={CV_PDF_PATH} download><IconDownload size={15}/> Download CV</Btn>
           <Btn  href="https://www.linkedin.com/in/zakaria-moufid-5294082a1/" target="_blank"><IconLinkedin size={15}/> LinkedIn</Btn>
            <Btn href="https://github.com/Moufidzakaria"><IconGithub size={15}/> GitHub</Btn>
          </div>
        </Fade>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ textAlign: "center", padding: "26px 24px", borderTop: "0.5px solid rgba(255,255,255,0.06)", color: "#475569", fontSize: 12 }}>
        © 2026 <span style={{ color: G }}>Zakaria Moufid</span> — QA Automation Engineer
      </footer>

      <style>{`
        @keyframes fu {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </div>
  );
}