"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const heroData = {
  name: "Yanna Phani Srinath Reddy",
  role: "Full Stack Developer",
  tagline: "Turning ideas into scalable web solutions.I build responsive, high-performance web applications with clean code and modern technologies.",
  resumeUrl: "https://drive.google.com/file/d/17HJEqoa30WPU513RT-ih3QJaaQRWJHSL/view?usp=sharing", // Replace with your resume URL
};

// Typing effect words
const typingWords = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast","Technical Leader"];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Tagline highlighting
  const highlightWords = [
    "scalable",
    "responsive",
    "high-performance",
    "modern",
    "clean",
  ];

  const renderHighlightedTagline = (text: string) => {
    const parts = text.split(/(\b)/); // keep word boundaries
    const highlights = new Set(highlightWords.map((w) => w.toLowerCase()));
    return parts.map((part, idx) => {
      const key = `${part}-${idx}`;
      const word = part.replace(/[^\p{L}\p{N}-]/gu, "");
      if (highlights.has(word.toLowerCase())) {
        return (
          <span
            key={key}
            className="bg-primary/10 text-primary rounded px-1"
          >
            {part}
          </span>
        );
      }
      return <span key={key}>{part}</span>;
    });
  };

  // Typing animation effect
  useEffect(() => {
    const word = typingWords[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      {/* Animated background circles */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 animate-pulse rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl delay-1000" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Greeting */}
        <p className="mb-4 text-lg text-muted-foreground animate-fade-in">
          {"Hello, I'm"}
        </p>

        {/* Name */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-5xl animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-accent to-primary/80 bg-clip-text text-transparent">
            {heroData.name}
          </span>
        </h1>

        

        {/* Typing effect role */}
        <div className="mb-6 h-12 text-2xl font-semibold text-primary sm:text-3xl lg:text-4xl">
          <span>{currentText}</span>
          <span className="ml-1 animate-pulse text-primary">|</span>
        </div>
        {/* Specialization and CGPA */}
        <p className="mb-4 text-xl text-muted-foreground animate-fade-in">
          Computer Science Student | CGPA: 9.16
        </p>

        {/* Tagline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground animate-fade-in">
          {renderHighlightedTagline(heroData.tagline)}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" suppressHydrationWarning>
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="group gap-2 px-8"
          >
            View Projects
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2 px-8 bg-transparent"
          >
            <a href={heroData.resumeUrl} target="_blank" download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            type="button"
            onClick={() =>
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to about section"
            className="text-muted-foreground transition-colors hover:text-primary"
            suppressHydrationWarning
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
