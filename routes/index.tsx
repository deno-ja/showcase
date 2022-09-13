import projects from "../showcase.json" assert { type: "json" };
import { Head } from "$fresh/runtime.ts";
import GitHub from "tabler-icons/brand-github.tsx";

interface Project {
  title: string;
  link: string;
  github?: string;
  image: string;
  description: string;
  tags: string[];
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Showcase | deno-ja</title>
      </Head>
      <div class="flex">
        <div class="flex-1">
          <Projects items={projects} />
        </div>
      </div>
    </>
  );
}

interface ProjectProps {
  items: Project[];
}

export function Projects(props: ProjectProps) {
  return (
    <div
      class={`pt-8 grid grid-cols-1 md:grid-cols-3 items-center`}
    >
      {props.items.map((project) => (
        <div class="w-full max-w-sm mx-auto group">
          <a href={project.link} tabIndex={-1}>
            <img
              loading="lazy"
              src={`/screenshot/${project.image}1x.jpg`}
              srcset={`/screenshot/${project.image}2x.jpg 2x, /screenshot/${project.image}1x.jpg 1x`}
              alt={project.title}
              width={600}
              height={337}
              style={{ aspectRatio: "16/9" }}
              class="object-cover shadow-lg group-hover:(shadow-xl opacity-70) rounded-lg"
            />
          </a>
          <div class="mt-4 flex items-center">
            <div class="text(lg gray-600) flex-1 group-hover:text-underline">
              <a href={project.link}>{project.title}</a>
            </div>
            {project.github && (
              <a
                href={`https://github.com/${project.github}`}
                class="ml-2 text-gray-500 hover:text-gray-700"
              >
                <GitHub />
                <span class="sr-only">GitHub</span>
              </a>
            )}
          </div>
          <div>
            {project.tags.map((tag) => (
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {tag}
              </span>
            ))}
          </div>
          <div class="mt-2 text-gray-600">{project.description}</div>
        </div>
      ))}
    </div>
  );
}
