"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Headshot from "@/app/assets/headshot.jpg";
import Signature from "@/app/components/Signature";
import Image from "next/image";
import { GalleryHorizontalEnd } from "lucide-react";

const Bullet = () => (
  <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
);

const SubItem = ({ children }) => (
  <li className="relative flex items-start gap-4 group/item">
    <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
    <span className="text-stone-600 dark:text-stone-400">{children}</span>
  </li>
);

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto">
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <Bullet />
          <span className="text-stone-600 dark:text-stone-400">
            full stack developer @ <span className="font-medium text-stone-800 dark:text-stone-200">SkillSync</span>{" "}
            (remote, singapore · aug 2025 – present)
          </span>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <Bullet />
          <span className="text-stone-600 dark:text-stone-400">
            b.tech cse (data science) @{" "}
            <span className="font-medium text-stone-800 dark:text-stone-200">IES IPS Academy</span>, indore · 8.49 cgpa
          </span>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <Bullet />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">recently:</span>
          <ul className="grid gap-1 pl-4">
            <SubItem>
              led a backend migration from Node.js to{" "}
              <span className="font-medium text-stone-800 dark:text-stone-200">Java (Spring Boot)</span> for better
              scalability and performance
            </SubItem>
            <SubItem>
              built{" "}
              <Link href="https://cogent-one.vercel.app/" className="font-medium">
                Cogent
              </Link>
              , an autonomous terminal coding agent that works with Anthropic, Gemini &amp; Groq
            </SubItem>
            <SubItem>
              shipped{" "}
              <Link href="https://opal-web-nine.vercel.app/" className="font-medium">
                Opal
              </Link>
              , a screen recording SaaS (web + Electron desktop) with AI transcription &amp; summaries
            </SubItem>
            <SubItem>
              made{" "}
              <Link href="https://corina-ai-ten.vercel.app/" className="font-medium">
                Corinna AI
              </Link>
              , an AI sales chatbot that books appointments and manages leads
            </SubItem>
          </ul>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <Bullet />
          <span className="text-stone-600 dark:text-stone-400">
            i work across the stack with React, Next.js, Node.js, Spring Boot, PostgreSQL &amp; MySQL, and like
            building with LLMs
          </span>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border-2 border-stone-400 dark:border-stone-600 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        see what i&apos;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <div className="flex items-center justify-center gap-2 text-stone-600 dark:text-stone-400 mt-4">
        <span>or, </span>
        <span>→</span>
        <Link href="/resume.pdf" className="font-medium">
          view my resume
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
        <div className="relative flex-1 flex items-center">
          <Signature />
        </div>
        <div className="w-48 h-48 relative rounded-full border-2 border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden bg-stone-50 dark:bg-stone-800">
          <Image src={Headshot} alt="Faizan Shaikh" fill className="object-cover object-top rounded-full" />
        </div>
      </div>
    </div>
  );
}
