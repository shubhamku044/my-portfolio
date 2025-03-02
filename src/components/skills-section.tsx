import { Badge } from './ui/badge';

const skills = [
  'Java',
  'TypeScript',
  'JavaScript',
  'Python',
  'Spring',
  'Spring Boot',
  'React',
  'React Native',
  'NestJs',
  'NextJs',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'Google Cloud',
  'Langchain',
  'LlamaIndex',
  'Langsmith',
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