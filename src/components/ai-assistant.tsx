"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestAnimationTimings, type SuggestAnimationTimingsOutput } from '@/ai/flows/suggest-animation-timings';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles } from 'lucide-react';

const formSchema = z.object({
  contentType: z.string().min(1, { message: 'Please select a content type.' }),
  contentDescription: z.string().min(10, { message: 'Please provide a description of at least 10 characters.' }),
});

export function AiAssistant() {
  const [suggestion, setSuggestion] = useState<SuggestAnimationTimingsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contentType: '',
      contentDescription: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSuggestion(null);

    try {
      const result = await suggestAnimationTimings({
        ...values,
        currentAnimation: 'none',
      });
      setSuggestion(result);
    } catch (e) {
      setError('An error occurred. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-assistant" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">AI Animation Assistant</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Not sure how to animate an element? Describe it and let AI suggest the perfect animation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Get a suggestion</CardTitle>
              <CardDescription>Fill out the form to get an AI-powered animation suggestion.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="contentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a content type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Image">Image</SelectItem>
                            <SelectItem value="Text">Text</SelectItem>
                            <SelectItem value="Button">Button</SelectItem>
                            <SelectItem value="Card">Card</SelectItem>
                            <SelectItem value="Video">Video</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contentDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., A primary call-to-action button for submitting a form." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? 'Thinking...' : 'Suggest Animation'}
                    {!isLoading && <Sparkles className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="lg:mt-0 min-h-[300px]">
            {isLoading && (
              <Card className="flex items-center justify-center p-10 h-full">
                <div className="flex flex-col items-center gap-4 text-muted-foreground">
                  <Sparkles className="h-8 w-8 animate-spin text-primary" />
                  <p>Generating suggestion...</p>
                </div>
              </Card>
            )}
            {error && <p className="text-destructive">{error}</p>}
            {suggestion && (
              <Card className="bg-primary/5 h-full">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" />
                    Animation Suggestion
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-semibold text-foreground">Animation Name</h3>
                    <p className="text-muted-foreground font-mono bg-muted px-2 py-1 rounded-md inline-block mt-1">{suggestion.animationName}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Duration</h3>
                    <p className="text-muted-foreground font-mono bg-muted px-2 py-1 rounded-md inline-block mt-1">{suggestion.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Easing</h3>
                    <p className="text-muted-foreground font-mono bg-muted px-2 py-1 rounded-md inline-block mt-1">{suggestion.easing}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Description</h3>
                    <p className="text-muted-foreground mt-1">{suggestion.description}</p>
                  </div>
                </CardContent>
              </Card>
            )}
            {!isLoading && !suggestion && !error && (
              <Card className="flex items-center justify-center p-10 border-dashed h-full">
                <p className="text-muted-foreground text-center">Your animation suggestion will appear here.</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
