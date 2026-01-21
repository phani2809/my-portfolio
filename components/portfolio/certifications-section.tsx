"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Award } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  issuerUrl?: string;
  year: string | number;
  badge?: string; // e.g., "Professional", "Elite", "Elite Silver", "Elite Silver (Top 5%)"
  certUrl?: string;
};

const certificationsData: Certification[] = [
  {
    title: "Full Stack Development",
    issuer: "Geeks for Geeks",
    issuerUrl: "https://www.geeksforgeeks.org/",
    year: 2025,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQCATRKWHpotR5apbNHBBuoIATJJ3D27gkY8RhvYJS59XDk?e=VWTWDA",
  },
  {
    title: "Google Skill Boost",
    issuer: "Google",
    issuerUrl: "https://www.skills.google/",
    year: 2024,
    certUrl: "https://www.cloudskillsboost.google/public_profiles/ba7dae73-df75-4048-9812-414083867b93",
  },
  {
    title: "Google Developer credentials",
    issuer: "Google",
    issuerUrl: "#",
    year: 2024,
    certUrl: "https://g.dev/phani_vvitcollege",
  },
  {
    title: "Java Full Stack",
    issuer: "Wipro TalentNext",
    issuerUrl: "#",
    year: 2025,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQCeo2nzahZKRbCF0nFXRftQARW1PcrU6eCO2Kl7bWJ8PVk?e=lfnyKg",
  },
  {
    title: "AWS Machine Learning Fundamentals",
    issuer: "AWS",
    issuerUrl: "https://aws.amazon.com/",
    year: 2025,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQCn3neQU4ynQKGl-ngwTDoeASJRgwKxwsAivJbLtKvFsjU?e=JWpqNN",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS",
    issuerUrl: "https://aws.amazon.com/",
    year: 2025,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQCbUnSDgcnHT6QcGaFHgtI6AciHs9qdtWPosSgcEya0ng4?e=PURBej",
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM",
    issuerUrl: "https://skillsbuild.org/",
    year: 2025,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQBrgdXfwBujQKHOJL0z48lUASr_-13Xvegp9MJ6wDJN89c?e=scxq6u",
  },
  {
    title: "Agentforce Specialist",
    issuer: "Salesforce",
    issuerUrl: "https://www.salesforce.com/in/",
    year: 2025,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQA4KJZDJ_b_Qqu-2c0yXbOdAZnL9kulPw7-N5hTKroxErk?e=Ua96VN",
  },
  {
    title: "Oracle OCI Associate Developer",
    issuer: "Oracle University",
    issuerUrl: "https://www.oracle.com/education/",
    year: 2025,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQB4VsAxP888SLQS6xCeqPM0AeF80h6n9KwltUeLMAJqxKY?e=y7bBie",
  },
  {
    title: "Data Analyatics essentials",
    issuer: "CISCO Networking Academy",
    issuerUrl: "https://www.netacad.com/",
    year: 2024,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQC6JLZEPCoURYYjtmoNBvGZAXaFRg-n25eM3CA_S6z0rfc?e=PHREQj",
  },
  {
    title: "SQL",
    issuer: "Infosys Springboard",
    issuerUrl: "https://infyspringboard.onwingspan.com/web/en/login",
    year: 2024,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQCz5dmolgWOSIHSQmSNbG_LAYNJVKrSSJr841r0I5gS3C0?e=TRV69S",
  },
  {
    title: "HTML",
    issuer: "Infosys Springboard",
    issuerUrl: "https://infyspringboard.onwingspan.com/web/en/login",
    year: 2025,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQCnVfugNXEKSLeWtWUPQFvgAYxACobZ_HC4DC_ueW_-44s?e=ymynRk",
  },
  {
    title: "CSS",
    issuer: "Infosys Springboard",
    issuerUrl: "https://infyspringboard.onwingspan.com/web/en/login",
    year: 2025,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQBk1hHfr2oeSJzZ03I2Pb2oAd2pWmybnWjS1xzawu_ethk?e=1PqEek",
  },
  {
    title: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL",
    issuerUrl: "https://nptel.ac.in/",
    year: 2024,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQDzYvLD99IVRYfRw_HyO-lOAe35PySvE3S7SzIPUoNCU6s?e=XeaHEo",
  },
  {
    title: "Introduction to algorithms and analysis",
    issuer: "NPTEL",
    issuerUrl: "https://nptel.ac.in/",
    year: 2024,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQCeTsMyLlhZT5rHm6rfWqwXAVPDXryRiyJP4qM3_vavQ50?e=1it3qf",
  },
  {
    title: "AI Powered tools and their Applications",
    issuer: "L4G",
    issuerUrl: "#",
    year: 2024,
    certUrl: "https://1drv.ms/b/c/f859129683113422/IQCQq2EUFK4dTL-1ZHHwZUuBAVlSQiYzOrbrXVneqpxseaw?e=gL3yuj",
  },
];

function CertCard({ cert, index }: { cert: Certification; index: number }) {
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

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-700 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <Award className="h-4 w-4 text-primary" />
          </div>
          <h3 className="text-base font-semibold leading-snug line-clamp-2 text-foreground">{cert.title}</h3>
        </div>
        {cert.certUrl && (
          <a
            href={cert.certUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View certificate"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {cert.issuerUrl ? (
          <a
            href={cert.issuerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {cert.issuer}
          </a>
        ) : (
          <span>{cert.issuer}</span>
        )}
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>{cert.year}</span>
      </div>
    </div>
  );
}

export function CertificationsSection() {
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
    <section ref={sectionRef} id="certifications" className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Professional <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Selected certifications and recognitions earned across platforms and programs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <CertCard key={`${cert.title}-${cert.issuer}`} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
