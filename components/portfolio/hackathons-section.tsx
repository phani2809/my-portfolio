"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Hammer } from "lucide-react";

 type HackEvent = {
  name: string;
  location: string;
  project: string;
};

const hackathonsData: HackEvent[] = [
  {
    name: "PSCMR Computer Science Hackathon",
    location: "Vijayawada, Andhra Pradesh",
    project: "Trip planner Web App",
  },
  {
    name: "Design Venture Workshop at VVIT",
    location: "Guntur, Andhra Pradesh",
    project: "Easy Event Management Application",
  },
  {
    name: "4weeks Agentic AI IBM Workshop",
    location: "Online",
    project: "Worked on Agentic AI Tools",
  },
];

function HackCard({ event, index }: { event: HackEvent; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const gradients = [
    "from-cyan-500/20 via-primary/10 to-fuchsia-500/20",
    "from-emerald-500/20 via-primary/10 to-sky-500/20",
    "from-pink-500/20 via-primary/10 to-violet-500/20",
  ];
  const rings = ["ring-cyan-500/40", "ring-emerald-500/40", "ring-pink-500/40"];
  const bgClass = `bg-gradient-to-br ${gradients[index % gradients.length]}`;
  const ringClass = rings[index % rings.length];

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 min-h-40 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] hover:ring-2 ${ringClass}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* decorative gradient layer */}
      <div className={`absolute inset-0 -z-0 rounded-2xl ${bgClass} opacity-40`} />

      <div className="relative z-10 mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 shadow-inner">
            <Hammer className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold leading-snug text-foreground">{event.name}</h3>
        </div>
      </div>

      <div className="relative z-10 mb-3 flex items-center gap-2 text-sm">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {event.location}
        </span>
      </div>

      <p className="relative z-10 text-sm text-muted-foreground">
        <span className="mr-2 rounded-md bg-primary/10 px-2 py-0.5 text-primary">Project</span>
        {event.project}
      </p>
    </div>
  );
}

export function HackathonsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="hackathons" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Hackathons & Workshops
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A few events I participated in and the projects built.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hackathonsData.map((event, index) => (
            <HackCard key={`${event.name}-${index}`} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
