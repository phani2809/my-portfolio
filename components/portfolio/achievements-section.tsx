"use client";

import { useEffect, useRef, useState } from "react";
import { Trophy, Star } from "lucide-react";

type Achievement = {
  title: string;
  context: string; // e.g., program or event
  year: string | number;
  note?: string; // optional short badge-like text
};

const achievementsData: Achievement[] = [
  {
    title: "Elite Silver",
    context: "NPTEL Introduction to Algorithms and Analysis",
    year: 2024,
    note: "Top 5%",
  },
  {
    title: "Silver Badge",
    context: "Let's Upgrade - Campus Ambassador Program",
    year: 2024,
    note: "Best Innovation",
  },
];

function AchieveCard({ item, index }: { item: Achievement; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const gradients = [
    "from-amber-500/25 via-primary/10 to-cyan-500/25",
    "from-indigo-500/25 via-primary/10 to-fuchsia-500/25",
  ];
  const ring = ["ring-amber-400/50", "ring-indigo-400/50"][index % 2];
  const bg = `bg-gradient-to-br ${gradients[index % gradients.length]}`;

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 min-h-44 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] hover:ring-2 ${ring}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`absolute inset-0 rounded-2xl ${bg} opacity-40`} />
      <div className="relative z-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
          {index % 2 === 0 ? (
            <Trophy className="h-5 w-5 text-primary" />
          ) : (
            <Star className="h-5 w-5 text-primary" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.context} • {item.year}</p>
        </div>
      </div>
      {item.note && (
        <div className="relative z-10 mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          {item.note}
        </div>
      )}
    </div>
  );
}

export function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Achievements</h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-muted-foreground">A selection of recognitions and milestones.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {achievementsData.map((item, i) => (
            <AchieveCard key={`${item.title}-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
