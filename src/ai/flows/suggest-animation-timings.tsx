// src/ai/flows/suggest-animation-timings.ts
'use server';

/**
 * @fileOverview An AI assistant that suggests animation timings and styles based on the content type.
 *
 * - suggestAnimationTimings - A function that suggests animation timings and styles.
 * - SuggestAnimationTimingsInput - The input type for the suggestAnimationTimings function.
 * - SuggestAnimationTimingsOutput - The return type for the suggestAnimationTimings function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAnimationTimingsInputSchema = z.object({
  contentType: z
    .string()
    .describe('The type of content, e.g., image, text, video.'),
  contentDescription: z
    .string()
    .describe('A description of the content to be animated.'),
  currentAnimation: z
    .string()
    .optional()
    .describe('The current animation applied to the content, if any.'),
});
export type SuggestAnimationTimingsInput = z.infer<typeof SuggestAnimationTimingsInputSchema>;

const SuggestAnimationTimingsOutputSchema = z.object({
  animationName: z.string().describe('The suggested animation name.'),
  duration: z.string().describe('The suggested animation duration in seconds.'),
  easing: z.string().describe('The suggested easing function.'),
  description: z
    .string()
    .describe('A description of why this animation is suitable.'),
});
export type SuggestAnimationTimingsOutput = z.infer<typeof SuggestAnimationTimingsOutputSchema>;

export async function suggestAnimationTimings(
  input: SuggestAnimationTimingsInput
): Promise<SuggestAnimationTimingsOutput> {
  return suggestAnimationTimingsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAnimationTimingsPrompt',
  input: {schema: SuggestAnimationTimingsInputSchema},
  output: {schema: SuggestAnimationTimingsOutputSchema},
  prompt: `You are an expert animation designer. Given the content type and description, suggest optimal animation timings and styles.

Content Type: {{{contentType}}}
Content Description: {{{contentDescription}}}
Current Animation: {{{currentAnimation}}}

Consider the content type and description to suggest an appropriate animation name, duration, and easing function.  The animation name should be a descriptive name.  The duration should be a number of seconds. The easing function should be a standard CSS easing function.

Here's an example of a good output:
{
  "animationName": "fadeIn",
  "duration": "0.5s",
  "easing": "ease-in-out",
  "description": "A fade-in animation with a duration of 0.5 seconds and an ease-in-out easing function provides a smooth and subtle entrance for the content."
}

Suggest an animation:
`,
});

const suggestAnimationTimingsFlow = ai.defineFlow(
  {
    name: 'suggestAnimationTimingsFlow',
    inputSchema: SuggestAnimationTimingsInputSchema,
    outputSchema: SuggestAnimationTimingsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
