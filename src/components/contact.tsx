"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { handleContactSubmit } from "@/app/action";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await handleContactSubmit(values);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: errorMessage,
      });
    }
  }

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      >
        <source src="/feature-4.mp4" type="video/mp4" />
      </video>

      <div className="container relative z-10 flex flex-col bilingual items-center">
        <div className="text-center mb-12">
          <h2 className="mx-auto max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
            Start a Co-Cop
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl mt-4 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
            Got a quest for me or just want to team up? Send a transmission.
          </p>
        </div>
        <div className="relative">
          {/* Character Placeholder */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gray-500 rounded-full opacity-40 blur-md"></div>
          <Card className="max-w-xl mx-auto border-gray-500/50 bg-transparent shadow-lg rounded-xl p-4 relative z-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="font-headline text-white text-2xl">
                Contact Me
              </CardTitle>
              <CardDescription className="text-gray-200">
                Fill out the form below and I’ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200 font-medium">
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            className="border-gray-500/50 focus:ring-gray-400 focus:border-gray-400 transition-all bg-transparent text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200 font-medium">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            className="border-gray-500/50 focus:ring-gray-400 focus:border-gray-400 transition-all bg-transparent text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200 font-medium">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me드 about your project or just say hello!"
                            className="min-h-[120px] border-gray-500/50 focus:ring-gray-400 focus:border-gray-400 transition-all bg-transparent text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 rounded-lg transition-all"
                  >
                    {form.formState.isSubmitting
                      ? "Transmitting..."
                      : "Transmit Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}