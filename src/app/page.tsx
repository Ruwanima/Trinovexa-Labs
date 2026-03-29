"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = localStorage.getItem("theme") as ThemeMode | null;
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";
  const logoSrc = isDark
    ? "/WhatsApp Image 2026-03-29 at 20.50.28.jpeg"
    : "/WhatsApp Image 2026-03-29 at 21.51.04.jpeg";

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="navbar sticky top-0 z-50 border-b border-slate-200 px-6 py-4 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={logoSrc}
              alt="Trinovexa Labs logo"
              width={200}
              height={64}
              className="h-9 w-auto sm:h-11"
              priority
            />
          </div>

          <ul className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-sm font-medium transition-colors hover:text-[#1E90FF]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="ghost-btn px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              aria-label="Toggle dark mode"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <a href="#contact" className="primary-btn px-4 py-1 text-xs sm:px-5 sm:py-2 sm:text-sm">
              Get Started
            </a>
            <button
              type="button"
              className="md:hidden ghost-btn px-3 py-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <ul className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3 md:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link block px-3 py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <header id="home" className="hero-glow relative overflow-hidden px-6 pb-20 pt-12 sm:px-10 lg:px-16">
        <section className="mx-auto mt-4 grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="section-kicker">Digital Engineering Partner</p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Building standout products for ambitious companies.
            </h1>
            <p className="alt-heading text-lg font-semibold text-[#0A1F44] sm:text-xl">
              Three Minds. Infinite Innovation.
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Trinovexa Labs helps teams design, build, and scale modern
              software with speed, quality, and confidence.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Innovative",
                "Intelligent",
                "Modern",
                "Collaborative",
              ].map((trait) => (
                <span key={trait} className="pill">
                  {trait}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#services" className="primary-btn px-7 py-3 text-center">
                Explore Services
              </a>
              <a href="#about" className="ghost-btn px-7 py-3 text-center">
                Why Trinovexa
              </a>
            </div>
          </div>
          <div className="feature-panel reveal-up">
            <p className="section-kicker">What We Deliver</p>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>Web & mobile platforms built for scale</li>
              <li>Cloud-native architecture and DevOps automation</li>
              <li>AI-powered business workflows and analytics</li>
              <li>Reliable support from discovery to deployment</li>
            </ul>
          </div>
        </section>
      </header>

      <main>
        <section id="services" className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <p className="section-kicker">Core Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              From concept to launch, end-to-end.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Product Engineering",
                  text: "Custom applications using modern frameworks and robust architecture.",
                },
                {
                  title: "Cloud Modernization",
                  text: "Migration, optimization, and managed operations across cloud platforms.",
                },
                {
                  title: "Data & AI",
                  text: "Data pipelines, dashboards, and intelligent systems that drive decisions.",
                },
                {
                  title: "Quality Assurance",
                  text: "Automated and manual testing strategies for reliable delivery cycles.",
                },
              ].map((service) => (
                <article key={service.title} className="service-card reveal-up">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about-us" className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="about-band mx-auto grid w-full max-w-6xl gap-8 rounded-[2rem] p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="section-kicker">About Trinovexa Labs</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                Precision, creativity, and momentum.
              </h2>
            </div>
            <div className="space-y-4 text-slate-700">
              <p>
                We blend strong engineering standards with practical business
                thinking, so every release creates measurable value.
              </p>
              <p>
                Our teams move fast without sacrificing quality, giving your
                company a trusted technology partner for long-term growth.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <p className="section-kicker">Logo Usage Rules</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Keep the Trinovexa identity clean and consistent.
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rule-card">
                <h3 className="alt-heading text-xl font-semibold text-[#0A1F44]">
                  Do
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                  <li>Keep clear spacing around the logo.</li>
                  <li>Always use original brand colors.</li>
                  <li>Use transparent PNG logo assets.</li>
                </ul>
              </article>
              <article className="rule-card">
                <h3 className="alt-heading text-xl font-semibold text-[#0A1F44]">
                  Don&apos;t
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                  <li>Do not stretch or distort the logo.</li>
                  <li>Do not change colors randomly.</li>
                  <li>Do not add extra shadows or visual effects.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer border-t border-slate-200 px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">
            Ready to build your next big product?
          </h2>
          <p className="text-slate-600">
            Contact Trinovexa Labs to discuss your vision and launch with confidence.
          </p>
          <a
            className="primary-btn inline-flex w-fit items-center justify-center px-8 py-3"
            href="mailto:hello@trinovexalabs.com"
          >
            hello@trinovexalabs.com
          </a>
        </div>
      </footer>
    </>
  );
}
