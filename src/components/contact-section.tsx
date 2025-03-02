'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const ContactSchema = z.object({
  name: z.string().min(2, 'Name is required').max(50),
  email: z.string().email(),
  message: z.string().min(100),
  honeypot: z.string(),
});

type ContactSchemaType = z.infer<typeof ContactSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit: SubmitHandler<ContactSchemaType> = async (data: ContactSchemaType) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
      } else {
        toast.error('An error occurred while sending the message. Please try again later.');
      }
    } catch (error) {
      toast('An error occurred while sending the message. Please try again later.');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="">
      <div className="mx-auto max-w-4xl space-y-12 py-12 text-center">
        <div className="mx-auto">
          <Badge className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white">
            Contact
          </Badge>
          <h2 className="mt-4 text-4xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Want to chat? Just shoot me a DM{' '}
            <Link href="#" className="font-medium text-stone-900 underline">
              with a direct question on X
            </Link>{' '}
            and I&apos;ll respond whenever I can.
          </p>
          <div className="mt-6 inline-block animate-pulse rounded-lg bg-amber-100/90 px-4 py-2">
            <div className="flex items-center text-sm font-medium text-stone-800/90">
              <span className="mr-2">🚀</span>
              Actively exploring new opportunities
            </div>
          </div>
        </div>

        <Card className="mx-auto mt-8 max-w-xl border border-gray-200 p-6 shadow-lg">
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input placeholder="Your Name" {...register('name')} className="w-full" />
                {errors.name && (
                  <p className="mt-1 text-left text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Your Email"
                  type="email"
                  {...register('email')}
                  className="w-full"
                />
                {errors.email && (
                  <p className="mt-1 text-left text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Your Message (min. 100 characters)"
                  {...register('message')}
                  className="min-h-[120px] w-full"
                />
                {errors.message && (
                  <p className="mt-1 text-left text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <input type="hidden" id="honeypot" {...register('honeypot')} />

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}