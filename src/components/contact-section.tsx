import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from './ui/badge';

export default function ContactSection() {
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
            <a href="#" className="text-blue-500 underline">
              with a direct question on X
            </a>{' '}
            and I&apos;ll respond whenever I can. I will ignore all soliciting.
          </p>
          <p className="mt-2 font-medium text-red-500">Actively looking for opportunities.</p>
        </div>

        <Card className="mx-auto mt-8 max-w-xl border border-gray-200 p-6 shadow-lg">
          <CardContent>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" className="w-full" required />
              <Input type="email" placeholder="Your Email" className="w-full" required />
              <Textarea placeholder="Your Message" className="w-full" required />
              <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}