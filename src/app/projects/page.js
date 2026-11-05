"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import CogentImage from "../assets/projects/cogent.png";
import OpalImage from "../assets/projects/opal.png";
import CorinaImage from "../assets/projects/corina.png";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Cogent",
      href: "https://cogent-one.vercel.app/",
      description:
        "an autonomous terminal coding agent with an iterative agent loop, streaming LLM responses, and filesystem, shell, search & Git tools. Provider-agnostic (Anthropic, Gemini, Groq) with permission controls, persistent sessions and context compaction.",
      image: CogentImage,
      imageAlt: "Cogent",
      technologies: ["TypeScript", "Node.js", "Anthropic", "Gemini", "Groq", "LLM Agents"],
      github: "https://github.com/faiz7077/cogent",
      demo: "https://cogent-one.vercel.app/",
    },
    {
      title: "Opal",
      href: "https://opal-web-nine.vercel.app/",
      description:
        "a full-stack screen recording SaaS with a Next.js web app and Electron desktop client — record, manage and share videos with real-time cloud uploads, plus AI-powered transcription and summaries.",
      image: OpalImage,
      imageAlt: "Opal",
      technologies: ["Next.js", "Electron", "Express.js", "PostgreSQL", "Socket.io", "OpenAI", "Cloudinary", "Clerk", "Stripe"],
      github: "https://github.com/faiz7077/Opal-web",
      demo: "https://opal-web-nine.vercel.app/",
    },
    {
      title: "Corinna AI",
      href: "https://corina-ai-ten.vercel.app/",
      description:
        "an AI-powered sales chatbot for real-time conversations, automated appointment booking, lead management and customizable chatbot workflows, with email marketing and plan-based features.",
      image: CorinaImage,
      imageAlt: "Corinna AI",
      technologies: ["Next.js", "PostgreSQL", "OpenAI", "Stripe", "Clerk"],
      github: "https://github.com/faiz7077/Corinna",
      demo: "https://corina-ai-ten.vercel.app/",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="relative">
        <Search className="absolute top-2.5 left-3 size-6 text-stone-400" />
        <input
          type="text"
          placeholder="search for a project, technology, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-700 pl-10"
        />
      </div>
      <ProjectList
        projects={projects.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((technology) =>
              technology.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )}
      />
      <p>
        You can check out the rest of my projects{" "}
        <Link href="https://github.com/faiz7077?tab=repositories&q=&type=source">
          here
        </Link>
        .
      </p>
    </>
  );
}
