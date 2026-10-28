import Link from "next/link";
import { projects } from "../../../lib/projects";

export default async function Page() {
  const myProjects = projects.filter(
    (project) => project.status === "completed",
  );
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>A Project</h1>
          <ul>
            {myProjects.map((project) => (
              <li key={project.id}>
                <h3>{project.name}</h3>
                <Link href={`/projects/${project.id}`}>Project Link</Link>
                <p>__</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
