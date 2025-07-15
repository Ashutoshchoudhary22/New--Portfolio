"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define TypeScript interface for projects
interface Project {
  title: string;
  description: string;
  video: string;
  tags: string[];
  aiHint: string;
  slug: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Project: GAMING WEBSITE",
    description:
      "A futuristic marketplace for digital assets and game mods, featuring a slick UI and secure transactions.",
    video: "/feature-5.mp4",
    tags: ["TailwindCSS", "Gsap", "React.js","Framer-Motion"],
    aiHint: "sci-fi marketplace",
    slug: "nexus-store",
    url: "https://animation-website-azure.vercel.app/",
  },
  {
    title: "Project: LMS",
    description:
      "A social hub for gamers to connect, form guilds, and schedule raids, with a real-time chat and event system.",
    video: "/feature-4.mp4",
    tags: ["TailwindCss", "React.js", "Animation", "Framer-Motion"],
    aiHint: "gaming community",
    slug: "guildnet",
    url: "https://lms-landing-page-pi.vercel.app/",
  },
  {
    title: "Project: ANIME",
    description:
      "An immersive storytelling website for a next-gen tech corporation, using parallax and WebGL for a cinematic feel.",
    video: "/feature-3.mp4",
    tags: ["TailwindCss", "React.js", "GSAP", "Framer-Motion"],
    aiHint: "futuristic website",
    slug: "holocorp",
    url: "https://anime-website-kappa-ashen.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/feature-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mx-auto max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
            Here are some of the missions I've completed. Each one was a new
            adventure in code and design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col group border border-transparent hover:border-accent"
            >
              <div className="aspect-video relative overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.aiHint}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-white/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col items-center">
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/20 text-primary text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.url}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}