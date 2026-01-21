"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Users, ClipboardList } from "lucide-react";

type RoleItem = {
  role: string;
  org: string;
  points: string[];
};

const rolesData: RoleItem[] = [
  {
    role: "Draft Officer",
    org: "Institution Innovation Council (IIC)",
    points: [
      "Created and maintained official drafts and records.",
      "Managed website updates and announcements.",
      "Coordinated communication across departments",
    ],
  },
  {
    role: "Technical Lead",
    org: "Google developer student clubs VVIT",
    points: [
      "Fullfilled technical needs for the clubs.",
      "Conducted hackathons and coding events.",
      "Maintained some of the club's web applications.",
    ],
  },
  {
    role: "Member",
    org: "Coding Club VVIT",
    points: [
      "Conducted coding contests and workshops.",
      "Motivated upcoming developers.",
      "Learnt more coding skills through it.",
    ],
  },
];

function RoleCard({ item, index }: { item: RoleItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const gradients = [
    "from-sky-500/20 via-primary/10 to-emerald-500/20",
    "from-violet-500/20 via-primary/10 to-rose-500/20",
    "from-orange-500/20 via-primary/10 to-lime-500/20",
  ];
  const bg = `bg-gradient-to-br ${gradients[index % gradients.length]}`;

  const icon = [
    <ShieldCheck key="shield" className="h-5 w-5 text-primary" />,
    <Users key="users" className="h-5 w-5 text-primary" />,
    <ClipboardList key="clip" className="h-5 w-5 text-primary" />,
  ][index % 3];

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 min-h-44 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] hover:ring-2 ring-primary/40`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`absolute inset-0 rounded-2xl ${bg} opacity-40`} />
      <div className="relative z-10 mb-3 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
          <p className="text-sm text-muted-foreground">{item.org}</p>
        </div>
      </div>
      <ul className="relative z-10 space-y-2 text-sm text-muted-foreground">
        {item.points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RolesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="roles" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Roles & Responsibilities</h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-muted-foreground">Key roles and the responsibilities carried out.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rolesData.map((item, i) => (
            <RoleCard key={`${item.role}-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
