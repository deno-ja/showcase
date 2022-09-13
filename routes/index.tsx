import projects from "../showcase.json" assert { type: "json" };
import { Head } from "$fresh/runtime.ts";
interface Project {
  title: string;
  link: string;
  github: string;
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

      <div class="flex flex-col min-h-screen">
        <div class="flex-1">
          <Projects items={projects} />
        </div>
      </div>
    </>
  );
}

function Showcase({ items }: { items: Project[] }) {
  return (
    <section class="max-w-screen-lg mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 class="text(3xl gray-600) font-bold">
        Showcase
      </h2>
      <p class="text-gray-600">
        <a
          href="https://github.com/denoland/fresh/blob/main/www/data/showcase.json"
          class="text-blue-600 hover:underline"
        >
          Add yours!
        </a>
      </p>
    </section>
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
                <span class="sr-only">GitHub</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
