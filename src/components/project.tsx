
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

// Define TypeScript interface for projects
interface Project {
  title: string;
  description: string;
  video: string; // Changed from image to video
  tags: string[];
  aiHint: string;
  slug: string;
}

const projects: Project[] = [
 
  {
    title: 'Project: Nexus Store',
    description: 'A futuristic marketplace for digital assets and game mods, featuring a slick UI and secure transactions.',
    video: '/feature-5.mp4', // Replace with actual video path
    tags: ['E-commerce', 'TailwindCSS', 'Stripe', 'UI/UX'],
    aiHint: 'sci-fi marketplace',
    slug: 'nexus-store',
  },
  {
    title: 'Project: GuildNet',
    description: 'A social hub for gamers to connect, form guilds, and schedule raids, with a real-time chat and event system.',
    video: '/feature-4.mp4', // Replace with actual video path
    tags: ['Mobile App', 'React Native', 'Firebase', 'UX'],
    aiHint: 'gaming community',
    slug: 'guildnet',
  },
  {
    title: 'Project: HoloCorp',
    description: 'An immersive storytelling website for a next-gen tech corporation, using parallax and WebGL for a cinematic feel.',
    video: '/feature-5.mp4', // Replace with actual video path
    tags: ['Branding', 'WebGL', 'GSAP', 'Storytelling'],
    aiHint: 'futuristic website',
    slug: 'holocorp',
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
          <source src="/feature-2.mp4" type="video/mp4" /> {/* Replace with actual background video path */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2
          className="mx-auto max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse"
        >
My Projects
        </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4 text-white">
            Here are some of the missions Ive completed. Each one was a new adventure in code and design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Dialog.Root key={project.title}>
              <Dialog.Trigger asChild>
                <div className="cursor-pointer">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col group border border-transparent hover:border-accent">
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
                      <CardTitle className="font-headline text-2xl text-white">{project.title}</CardTitle>
                      <CardDescription className="text-white/70">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg max-w-lg w-full">
                  <VisuallyHidden>
                    <Dialog.Title>{project.title}</Dialog.Title>
                  </VisuallyHidden>
                  <Dialog.Description className="text-muted-foreground mb-4">
                    {project.description}
                  </Dialog.Description>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                  >
                    View Project Details
                  </Link>
                  <Dialog.Close asChild>
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      aria-label="Close dialog"
                    >
                      ✕
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </div>
    </section>
  );
}