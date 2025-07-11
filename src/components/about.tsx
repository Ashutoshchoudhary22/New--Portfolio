import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Star } from "lucide-react";

// Define TypeScript interfaces
interface SkillCategory {
  category: string;
  skills: { name: string; description: string }[];
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const skillCategories: SkillCategory[] = [
 
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", description: "Markup language for structuring web content." },
      { name: "CSS3", description: "Stylesheet language for designing and laying out web pages." },
      { name: "JavaScript", description: "Used for client-side interactivity and dynamic UI." },
      { name: "React.js", description: "A JavaScript library for building user interfaces." },
      { name: "Next.js", description: "A React framework for server-side rendering and static sites." },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", description: "A JavaScript runtime for server-side development." },
      { name: "PHP", description: "Used for server-side logic and dynamic web applications." },
      { name: "Express.js", description: "A minimalist Node.js framework for building APIs." },
      { name: "ASP.NET Core", description: "A cross-platform .NET framework for building modern web apps." },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", description: "A relational database management system for structured data." },
      { name: "MongoDB", description: "A NoSQL database for flexible, unstructured data storage." },
    ],
  },
];

const experiences: Experience[] = [
  {
    role: "Web Developer",
    company: "Einfratech Systems India, Bengaluru",
    period: "Jan-2025",
    description:
      "Developed and maintained responsive web applications for various clients using React and Next.js. Specialized in creating engaging user interfaces with complex animations.",
  },
  {
    role: "UI/UX Design Training",
    company: "Nasscom Foundation",
    period: "2024 - Current",
    description:
      "Currently undergoing UI/UX design training to enhance skills in user interface and experience design.",
  },
  {
    role: "AWS Cloud Certification",
    company: "N/A",
    period: "2023",
    description:
      "Completed certification in AWS Cloud to gain expertise in cloud computing and related technologies.",
  },
  {
    role: "Interview Skills Certification",
    company: "TCS iON",
    period: "2023",
    description:
      "Completed certification to enhance interview techniques and professional communication skills.",
  },
  {
    role: "Etiquette Skills Certification",
    company: "TCS iON",
    period: "2023",
    description:
      "Completed certification to improve professional etiquette and interpersonal skills.",
  },
];

const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Complete Board of Higher Education",
    period: "2020 - 2024",
    description:
      "Completed B.Tech with a CGPA of 6.34, focusing on computer science and engineering principles.",
  },
  {
    degree: "Intermediate Education",
    institution: "N/A",
    period: "2020",
    description: "Completed intermediate education curriculum.",
  },
  {
    degree: "Higher Education",
    institution: "N/A",
    period: "2018",
    description: "Completed higher education curriculum.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 motion-reduce:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 md:opacity-70"
          aria-label="Background video of abstract digital patterns"
        >
          <source src="/hero-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 backdrop-blur-sm"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mx-auto max-w-[700px] text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
            Highly motivated and dedicated Computer Science Engineering student
            with a strong academic background. Proficient in programming
            languages such as HTML, CSS, and JavaScript. Skilled in
            problem-solving and analytical thinking, with a keen interest in
            Software Development and Web Technologies. Seeking to apply my
            skills and knowledge in a challenging and dynamic environment.
          </p>
        </div>
        <div className="flex justify-center">
          <Tabs defaultValue="skills" className="w-full max-w-4xl">
            <TabsList className="grid w-full grid-cols-3 bg-transparent border border-white/20">
              <TabsTrigger
                value="skills"
                className="focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-white text-sm md:text-base"
              >
                <Star className="mr-2 h-4 w-4 text-green-400" /> Skills
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-white text-sm md:text-base"
              >
                <Briefcase className="mr-2 h-4 w-4 text-green-400" /> Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-white text-sm md:text-base"
              >
                <GraduationCap className="mr-2 h-4 w-4 text-green-400" /> Education
              </TabsTrigger>
            </TabsList>
            <TabsContent value="skills">
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="pt-6 space-y-6">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-lg md:text-xl font-semibold text-white">
                        {category.category}:
                        {category.category === "Languages"
                          ? ` ${category.skills.map((skill) => skill.name).join(", ")}`
                          : ""}
                      </h4>
                      {category.category !== "Languages" && (
                        <div className="ml-4 space-y-2">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-start gap-3">
                              <Star className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                              <div>
                                <h5 className="text-base md:text-lg font-semibold text-white">
                                  {skill.name}
                                </h5>
                                <p className="text-sm md:text-base text-white/70">
                                  {skill.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="pt-6 space-y-6 md:space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-4 md:gap-6"
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-green-400/20 border border-green-400/50 shrink-0">
                          <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
                        </div>
                        {index < experiences.length - 1 && (
                          <div className="w-px h-full bg-white/20 my-2 md:my-4 hidden sm:block"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <p className="text-white/70 font-mono text-xs md:text-sm">
                          {exp.period}
                        </p>
                        <h3 className="text-lg md:text-xl font-headline text-white">
                          {exp.role}
                        </h3>
                        <p className="font-semibold text-white/80 text-sm md:text-base">
                          {exp.company}
                        </p>
                        <p className="text-white/70 mt-2 text-sm md:text-base">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="pt-6 space-y-6 md:space-y-8">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-4 md:gap-6"
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-green-400/20 border border-green-400/50 shrink-0">
                          <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
                        </div>
                        {index < education.length - 1 && (
                          <div className="w-px h-full bg-white/20 my-2 md:my-4 hidden sm:block"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <p className="text-white/70 font-mono text-xs md:text-sm">
                          {edu.period}
                        </p>
                        <h3 className="text-lg md:text-xl font-headline text-white">
                          {edu.degree}
                        </h3>
                        <p className="font-semibold text-white/80 text-sm md:text-base">
                          {edu.institution}
                        </p>
                        <p className="text-white/70 mt-2 text-sm md:text-base">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}