import { Badge } from './ui/badge';

const skills = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Go',
  'React',
  'React Native',
  'Vue.js',
  'Nuxt.js',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'Redis',
  'Prisma',
  'Docker',
  'GitHub Actions',
  'CI/CD',
  'Supabase',
  'Clerk',
  'Prompt Engineering',
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <Badge
              className="cursor-default bg-amber-200/60 text-stone-900 transition-all hover:bg-amber-200/50"
              key={skill}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}