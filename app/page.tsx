"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const curriculumRef = useRef<HTMLElement | null>(null);
  const logoDotRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  cardsRef.current.forEach((el) => el && observer.observe(el));

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const handleScroll = () => {
    const timeline = timelineRef.current;
    const logoDot = logoDotRef.current;

    if (!timeline || !logoDot) return;

    const rect = timeline.getBoundingClientRect();
    const viewportMiddle = window.innerHeight * 0.45;

    const progress = Math.min(
      Math.max((viewportMiddle - rect.top) / rect.height, 0),
      1
    );

    logoDot.style.top = `${progress * 100}%`;
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <main className="min-h-screen bg-white text-[#0a2540] overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-xl border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="IconsBase Logo"
            width={140}
            height={40}
            className="w-[140px] h-auto"
          />

          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <a href="#curriculum">Curriculum</a>
            <a href="#projects">Projects</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <button className="bg-[#f4b400] text-[#0a2540] px-6 py-3 rounded-lg font-bold shadow-lg shadow-yellow-200 hover:scale-105 transition">
            Book Free Counseling →
          </button>
        </nav>
      </header>

    <section className="hero-minimal">
  <div className="hero-left">
    
    <span className="hero-tag">
      🚀 12 Weeks AI Website Development Course
    </span>

    <h1>
      Master <span>AI Website Development</span><br />
      in 12 Weeks.
    </h1>

    <p>
      Learn React, Next.js, AI tools, GitHub and deployment by building
      real portfolio-ready websites with mentor-guided practice.
    </p>

    <div className="hero-buttons">
      <button className="cta-yellow">
        Book Free Counseling →
      </button>

      <button className="cta-outline">
        View Curriculum
      </button>
    </div>

    <p className="hero-note">
      Free 15-min roadmap call • Only 23 seats left • Next batch starting soon
    </p>

    <div className="hero-stats">
      <div>
        <h3>12</h3>
        <p>Weeks</p>
      </div>
      <div>
        <h3>8+</h3>
        <p>Projects</p>
      </div>
      <div>
        <h3>₹25k</h3>
        <p>Course Fee</p>
      </div>
    </div>

  </div>

  <div className="hero-right-final">
  <div className="hero-shape-final"></div>
  <div className="hero-ring-final"></div>
  <div className="hero-dot-final"></div>
  <div className="hero-pattern-final"></div>

  

  <div className="hero-dashboard-final">
    <p>Week 6 / 12</p>
    <h3>Building AI SaaS Dashboard</h3>

    <div className="hero-progress-final">
      <span></span>
      <b>60%</b>
    </div>

    <div className="hero-row-final">
      <span>Project Progress</span>
      <em>In Progress</em>
    </div>

    <div className="hero-row-final">
      <span>Mentorship</span>
      <em className="green">Active</em>
    </div>

    <div className="hero-row-final">
      <span>Deployment</span>
      <em className="green">Ready</em>
    </div>
  </div>

  <div className="hero-mini-final ai-final">
    <div className="hero-mini-icon">💻</div>
    <h4>AI Tools</h4>
    <p>Build smarter with AI</p>
  </div>

  <div className="hero-mini-final vercel-final">
    <div className="hero-mini-icon">☁</div>
    <h4>Vercel</h4>
    <p>Deploy in one click</p>
  </div>

  <div className="hero-project-final">
    <p>Recent Project</p>

    <div className="hero-project-screen">
      <span>AI Landing Page</span>
      <h4>Next Generation AI Landing Page</h4>
      <button>Explore Project</button>
    </div>

    <div className="hero-project-foot">
      <b>AI Landing Page</b>
      <span>● Live</span>
    </div>
  </div>
</div>
</section>
    {/* PROBLEM SECTION */}
<section className="relative px-6 py-32 bg-[#07111f] text-white overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,91,255,0.28),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(255,90,150,0.18),transparent_35%)]" />
  <div className="absolute inset-0 problem-grid" />

  <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    <div>
      <p className="text-[#9b8cff] font-extrabold mb-4">
        The Problem
      </p>

      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#0a2540] to-[#635bff] bg-clip-text text-transparent">
        Random learning creates confusion, not confidence.
      </h2>

      <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
        Most students watch tutorials for months but still cannot build,
        deploy, or explain a real project. This course fixes that with a clear
        roadmap and guided execution.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -inset-8 bg-[#635bff]/20 blur-3xl rounded-full" />

      <div className="relative space-y-5">
        {[
          ["01", "No clear roadmap", "Students jump between HTML, CSS, React, Next.js and AI tools without knowing what to learn first."],
          ["02", "No real portfolio", "Watching videos does not create proof of skill. Recruiters want real deployed projects."],
          ["03", "No code review", "Without feedback, students repeat mistakes and never learn professional coding habits."],
          ["04", "No deployment confidence", "Many can make UI, but struggle with GitHub, hosting, deployment and explaining the project."],
        ].map(([num, title, desc]) => (
          <div
            key={num}
            ref={(el) => {
              if (el) cardsRef.current[Number(num) - 1] = el;
            }}
              style={{ transitionDelay: `${Number(num) * 0.1}s` }}

            className="problem-card group relative p-6 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl transition duration-500"
          >
            <div className="absolute left-0 top-6 h-10 w-1 rounded-r-full bg-[#635bff]" />

            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white text-[#635bff] flex items-center justify-center font-extrabold">
                {num}
              </div>

              <div>
                <h3 className="text-xl font-extrabold mb-2">
                  {title}
                </h3>
                <p className="text-white/65 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* TRANSFORMATION SECTION */}
<section className="relative px-6 py-32 bg-[#fffaf0] overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,91,255,0.16),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(255,90,150,0.12),transparent_35%)]" />

  <div className="relative max-w-7xl mx-auto">
    <div className="max-w-4xl mx-auto text-center mb-16 transformation-reveal">
      <p className="text-[#f4b400] font-extrabold mb-4">
        The Transformation
      </p>

      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-[#0a2540]">
        From confused learner to{" "}
        <span className="bg-gradient-to-r from-[#f4b400] to-[#ffcc33] bg-clip-text text-transparent">
          confident developer.
        </span>
      </h2>

      <p className="text-xl text-[#425466] leading-relaxed max-w-3xl mx-auto">
        This course helps students move from random tutorials to a clear
        development workflow — planning, building, improving, deploying and
        presenting real projects.
      </p>
    </div>

    <div className="transformation-wrapper grid lg:grid-cols-4 gap-6">
      {[
        {
          num: "01",
          title: "Plan",
          desc: "Understand layout, structure, content flow and user journey.",
          icon: "🧠",
        },
        {
          num: "02",
          title: "Build",
          desc: "Create responsive websites using React and Next.js.",
          icon: "🛠️",
        },
        {
          num: "03",
          title: "Improve",
          desc: "Use AI tools and code reviews to improve your work.",
          icon: "💻",
        },
        {
          num: "04",
          title: "Launch",
          desc: "Deploy projects and prepare a portfolio-ready presence.",
          icon: "🚀",
        },
      ].map((item, index) => (
        <div
  key={item.num}
  className={`transformation-card group relative min-h-[320px] p-7 rounded-[2rem] bg-white/95 border border-yellow-100 shadow-[0_25px_80px_rgba(244,180,0,0.14)] transition duration-500 overflow-hidden ${
    item.title === "Build" ? "active" : ""
  }`}
  style={{ animationDelay: `${index * 0.15}s` }}

  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }}
>

          <span className="absolute top-6 right-6 text-6xl font-extrabold text-indigo-100 group-hover:text-indigo-200 transition">
            {item.num}
          </span>

          <div className="relative">
            <div className="transformation-icon w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center text-2xl shadow-md mb-12 group-hover:scale-110 transition">
              {item.icon}
            </div>

            <h3 className="text-2xl font-extrabold mb-4 text-[#0a2540]">
              {item.title}
            </h3>

            <p className="text-[#425466] leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    

{/* CURRICULUM SECTION */}
<section
  id="curriculum"
  ref={curriculumRef}
  className="relative px-6 py-32 bg-[#07111f] text-white overflow-hidden"
>
  <div className="absolute inset-0 problem-grid" />
  <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#635bff]/20 blur-[120px] rounded-full" />

  <div className="hidden lg:block absolute right-20 top-32 w-[430px]">
  <div className="code-float rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-[0_30px_90px_rgba(99,91,255,0.25)] overflow-hidden">
    <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
      <span className="w-3 h-3 rounded-full bg-red-400"></span>
      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
      <span className="w-3 h-3 rounded-full bg-green-400"></span>
      <p className="ml-3 text-sm text-white/60 font-bold">roadmap.tsx</p>
    </div>

    <div className="p-6 font-mono text-sm leading-7">
      <p><span className="text-purple-300">const</span> roadmap = [</p>
      <p className="pl-4 text-white/80">"HTML + CSS",</p>
      <p className="pl-4 text-white/80">"JavaScript",</p>
      <p className="pl-4 text-white/80">"React",</p>
      <p className="pl-4 text-white/80">"Next.js",</p>
      <p className="pl-4 text-white/80">"AI Tools",</p>
      <p className="pl-4 text-white/80">"Deployment"</p>
      <p>];</p>
      <p className="mt-4 text-green-300">deploy("portfolio-ready");</p>
    </div>
  </div>
</div>

  <div className="relative max-w-7xl mx-auto">
    <div className="max-w-3xl mb-16">
      <p className="text-[#9b8cff] font-extrabold mb-4">
        Curriculum
      </p>

      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        A clear 12-week roadmap from basics to deployment.
      </h2>

      <p className="text-xl text-white/70 leading-relaxed">
        Learn step-by-step with weekly modules, practical assignments,
        real-world projects and guided code reviews.
      </p>
    </div>

    <div ref={timelineRef} className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-white/15" />
      <div
  ref={logoDotRef}
className="hidden md:flex absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-white shadow-[0_0_50px_rgba(99,91,255,0.8)] border-4 border-[#635bff] items-center justify-center transition-all duration-300">
  <Image
    src="/logo.png"
    alt="Moving logo"
    width={52}
    height={52}
    className="object-contain"
  />
</div>

      <div className="space-y-8">
        {[
          {
            week: "Week 1–2",
            title: "Web Foundations",
            desc: "HTML, CSS, JavaScript, responsive layout and UI basics.",
          },
          {
            week: "Week 3–4",
            title: "React Development",
            desc: "Components, props, state, hooks and reusable UI sections.",
          },
          {
            week: "Week 5–6",
            title: "Next.js Framework",
            desc: "App router, pages, layouts, routing and production structure.",
          },
          {
            week: "Week 7–8",
            title: "AI Tools & Integration",
            desc: "Use AI for design, content, coding support and web app features.",
          },
          {
            week: "Week 9–10",
            title: "Full Project Build",
            desc: "Build complete portfolio-ready websites with professional workflow.",
          },
          {
            week: "Week 11–12",
            title: "Git, Deployment & Portfolio",
            desc: "GitHub, hosting, deployment, portfolio polish and code reviews.",
          },
        ].map((item, index) => (
          <div
            key={item.week}
            className={`relative grid md:grid-cols-2 gap-8 items-center ${
              index % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"
            }`}
          >
            <div
              className={`relative p-7 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/15 hover:-translate-y-2 transition duration-300 ${
                index % 2 === 0 ? "md:mr-10" : "md:ml-10"
              }`}
            >
              <span className="inline-block text-sm font-extrabold text-[#9b8cff] mb-3">
                {item.week}
              </span>

              <h3 className="text-2xl font-extrabold mb-3">
                {item.title}
              </h3>

              <p className="text-white/65 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* PROJECTS SECTION */}
<section
  id="projects"
  className="relative px-6 py-32 bg-[#050b18] text-white overflow-hidden"
>
  <div className="absolute inset-0 project-grid" />
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#635bff]/25 blur-[160px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/15 blur-[140px] rounded-full" />

  <div className="relative max-w-7xl mx-auto">
    <div className="max-w-4xl mx-auto text-center mb-20">
      <p className="text-[#9b8cff] font-extrabold mb-4">
        Portfolio Projects
      </p>

      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Build portfolio projects that feel like real SaaS products.
      </h2>

      <p className="text-xl text-white/65 leading-relaxed">
        Students don’t just practice tutorials — they build modern interfaces,
        AI-powered workflows, dashboards and deployed portfolio projects.
      </p>
    </div>

    <div className="grid lg:grid-cols-12 gap-6">
      {[
        {
          title: "AI Landing Page",
          desc: "A high-converting landing page with animated hero, sections, CTA flow and responsive layout.",
          tag: "Frontend",
          icon: "✨",
          span: "lg:col-span-7",
        },
        {
          title: "SaaS Dashboard",
          desc: "A modern dashboard with analytics cards, clean layout, sidebar and product-style UI.",
          tag: "Dashboard",
          icon: "📊",
          span: "lg:col-span-5",
        },
        {
          title: "AI Chatbot Website",
          desc: "A premium AI website concept with prompt sections, chat-style UI and smart interaction flow.",
          tag: "AI Workflow",
          icon: "💻",
          span: "lg:col-span-5",
        },
        {
          title: "Portfolio Website",
          desc: "A polished personal portfolio deployed online with GitHub workflow and project showcase.",
          tag: "Deployment",
          icon: "🚀",
          span: "lg:col-span-7",
        },
      ].map((item, index) => (
        <div
          key={item.title}
          className={`saas-project-card ${item.span}`}
          style={{ animationDelay: `${index * 0.15}s` }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
          }}
        >
          <div className="saas-card-glow" />

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-12">
                <div className="saas-project-icon">
                  {item.icon}
                </div>

                <span className="saas-project-tag">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold mb-5">
                {item.title}
              </h3>

              <p className="text-white/70 leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </div>

            <button className="saas-project-btn mt-12">
              <span>Explore project</span>
              <span className="project-arrow">→</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* PRICING SECTION */}
<section id="pricing" className="pricing-section">
  <div className="pricing-bg-grid" />

  <div className="pricing-container">
    <div className="pricing-header">
      <p className="pricing-label">Pricing</p>

      <h2 className="pricing-title">
        One course. <span>Everything to build.</span>
      </h2>

      <p className="pricing-sub">
        A complete 12-week AI website development program with real projects,
        deployment guidance and personal code reviews.
      </p>
    </div>

    <div className="pricing-wrapper">
      <div className="pricing-left">
        {[
          "React, Next.js and modern frontend workflow",
          "AI tools for faster design, content and coding",
          "8+ portfolio-ready real-world projects",
          "GitHub, hosting and deployment practice",
          "1:1 code reviews and guided improvement",
        ].map((item, i) => (
          <div className="pricing-feature" key={item}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div
        className="pricing-card"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }}
      >
        <div className="pricing-glow" />

        <div className="pricing-card-content">
          <p className="pricing-badge">Most Popular</p>

          <h3>AI Website Development</h3>

          <div className="price">
            ₹25,000
            <span>/ course</span>
          </div>

          <p className="pricing-card-desc">
            12 weeks of structured learning, practical projects and portfolio
            building.
          </p>

          <div className="pricing-mini">
            <p>✓ Lifetime access</p>
            <p>✓ Real projects</p>
            <p>✓ Portfolio-ready workflow</p>
          </div>

          <button className="pricing-btn">
            Book Free Counseling →
          </button>

          <p className="pricing-note">
            Limited seats • Beginner-friendly • Mentor guided
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* OUTCOMES / SOCIAL PROOF */}
<section className="relative px-6 py-32 bg-[#0a0f1f] overflow-hidden">

  {/* background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,91,255,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,90,150,0.12),transparent_40%)]" />

  <div className="relative max-w-7xl mx-auto">

    {/* heading */}
    <div className="text-center mb-20">
      <p className="text-[#8b7fff] font-semibold mb-4">Outcomes</p>

      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        What you’ll be able to do after 12 weeks.
      </h2>
    </div>

    {/* cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Build real client-level projects",
          desc: "Create modern websites, dashboards and AI-powered apps ready for portfolio.",
        },
        {
          title: "Write clean production code",
          desc: "Understand structure, components, scalability and best practices used in real teams.",
        },
        {
          title: "Deploy like a professional",
          desc: "Use GitHub, hosting and deployment pipelines confidently.",
        },
        {
          title: "Use AI in real workflow",
          desc: "Integrate AI tools for faster development and smarter solutions.",
        },
        {
          title: "Build a strong portfolio",
          desc: "Create projects that actually impress recruiters and clients.",
        },
        {
          title: "Think like a developer",
          desc: "Move from tutorial dependency to independent problem solving.",
        },
      ].map((item, i) => (
        <div
          key={item.title}
          className="outcome-card group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-3 transition duration-500 overflow-hidden"
          style={{ animationDelay: `${i * 0.12}s` }}
        >

          {/* glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(99,91,255,0.25),transparent_60%)]" />

          <div className="relative">
            <h3 className="text-xl font-bold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-[#9fb0c8] leading-relaxed">
              {item.desc}
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>
{/* FINAL CTA SECTION */}
<section className="relative px-6 py-20 bg-[#f7f9ff] overflow-hidden">
  <div className="relative max-w-5xl mx-auto">
    <div
      className="cta-card relative overflow-hidden rounded-[2rem] bg-[#0a2540] text-white px-8 py-14 md:px-14 text-center shadow-[0_35px_100px_rgba(10,37,64,0.28)]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
      }}
    >
      <div className="absolute inset-0 cta-grid" />
      <div className="light-sweep" />

      <div className="relative z-10">
        <p className="text-[#9b8cff] font-extrabold mb-4">
          Ready to Start?
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Start building AI-powered websites in 12 weeks.
        </h2>

        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
          Book a free counseling call and understand the roadmap, projects,
          pricing and how this course can help you become portfolio-ready.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button className="cta-btn-primary">
            Book Free Counseling →
          </button>

          <button className="cta-btn-secondary">
            View Curriculum
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
{/* FINAL TRUST / CLOSING STRIP */}
<section className="py-16 px-6 bg-[#f7f9ff]">
  <div className="max-w-6xl mx-auto text-center">

    <p className="text-sm font-semibold text-[#6b6ef5] mb-4">
      Trusted by aspiring developers
    </p>

    <h3 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-10">
      Everything you need to go from beginner to job-ready developer.
    </h3>

    <div className="grid md:grid-cols-4 gap-6">
      
      <div className="trust-card">
        <h4>12 Weeks</h4>
        <p>Structured roadmap</p>
      </div>

      <div className="trust-card">
        <h4>8+ Projects</h4>
        <p>Portfolio-ready work</p>
      </div>

      <div className="trust-card">
        <h4>1:1 Support</h4>
        <p>Code reviews & guidance</p>
      </div>

      <div className="trust-card">
        <h4>AI + Deploy</h4>
        <p>Real-world workflow</p>
      </div>

    </div>

  </div>
</section>

    </main>
  );
}