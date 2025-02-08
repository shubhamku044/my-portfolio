"use client";
import React, { useEffect } from "react";
import { ProjectCard } from ".";

const projectRepositories = [
  "restaurant-management-system",
  "miro-board",
  "typospeed-tracker",
];

interface IProject {
  id: number;
  name: string;
  language: string;
  description: string | null;
  stargazers_count: number;
  forks: number;
  homepage: string | null;
}

function getProjectName(name: string) {
  return name
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function removeDuplicates(array: IProject[]) {
  return array.filter(
    (project, index, self) =>
      self.findIndex((p) => p.name === project.name) === index
  );
}

const staticProjects: IProject[] = [
  {
    id: 795162648,
    name: "restaurant-management-system",
    language: "Go",
    description: null,
    stargazers_count: 0,
    forks: 0,
    homepage: null,
  },
  {
    id: 753245172,
    name: "miro-board",
    language: "TypeScript",
    description:
      "It is a collaborative whiteboard application that allows users to draw, write, and chat with each other in real-time. It is built using NextJs, Convex and Liveblocks.",
    stargazers_count: 1,
    forks: 0,
    homepage: "",
  },
  {
    id: 714350916,
    name: "typospeed-tracker",
    language: "TypeScript",
    description:
      "TypoSpeed Tracker is your gateway to honing your typing skills. Test your typing speed and accuracy with our user-friendly platform, akin to 10fastfingers. Improve your typing prowess and track your progress with TypoSpeed Tracker today!",
    stargazers_count: 1,
    forks: 0,
    homepage: "https://typospeed-tracker.vercel.app",
  },
];

const Projects = () => {
  const [projects, setProjects] = React.useState<IProject[]>([]);

  useEffect(() => {
    const promises = projectRepositories.map((repo) =>
      fetch(`https://api.github.com/repos/shubhamku044/${repo}`)
    );
    Promise.all(promises).then((responses) => {
      responses.forEach((response) => {
        response.json().then((data) => {
          if (!data.id) return;
          const project = {
            id: data.id,
            name: data.name,
            language: data.language,
            description: data.description,
            stargazers_count: data.stargazers_count,
            forks: data.forks,
            homepage: data.homepage,
          };
          setProjects((prevProjects) => [...prevProjects, project]);
        });
      });
    });
  }, []);

  return (
    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {((projects.length && removeDuplicates(projects)) || staticProjects).map(
        (project) => (
          <li key={project.id}>
            <ProjectCard
              name={getProjectName(project.name)}
              description={project.description}
              githubLink={`https://github.com/shubhamku044/${project.name}`}
              liveLink={project.homepage}
              language={project.language}
              stars={project.stargazers_count}
              forks={project.forks}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default Projects;
