import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description: "Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience.",
    icon: <Code className="h-10 w-10 text-white" />,
    videoSrc: "/feature-3.mp4",
  },
  {
    title: "UI/UX Design",
    description: "UI/UX design is the process of creating the look and feel of a product or service, with the goal of providing a meaningful user experience.",
    icon: <Paintbrush className="h-10 w-10 text-white" />,
    videoSrc: "/feature-2.mp4",
  },
  {
    title: "App Design",
    description: "The process of creating the look and feel of an application, including its layout, visual elements, and interactive features.",
    icon: <Smartphone className="h-10 w-10 text-white" />,
    videoSrc: "/feature-1.mp4",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
        <h2
          className="mx-auto max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse"
        >
My Services
        </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="relative text-center p-6 text-white shadow-lg rounded-lg transition-all duration-300 bg-transparent border-none"
            >
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src={service.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              </div>
              <CardHeader className="p-0 flex justify-center mb-4 relative z-10">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white/10">
                  {service.icon}
                </div>
              </CardHeader>
              <CardTitle className="text-2xl mb-4 relative z-10">{service.title}</CardTitle>
              <CardContent className="p-0 relative z-10">
                <p className="text-white/90 mb-4">{service.description}</p>
              
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}