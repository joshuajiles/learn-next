import Link from "next/link";
import { projects } from "../../../../lib/projects";
import { notFound } from "next/navigation";

function ProjectDisplay({ id }: { id: string }) {
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Status: {project.status}</p>
      <p>Client: {project.client}</p>
    </div>
  );
}
export default async function Page({ params }: PageProps<"/projects/[id]">) {
  const { id } = await params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>A Project</h1>
          <ProjectDisplay id={id} />
          <Link href={`/projects`}>Goto Projects</Link>
        </div>
      </main>
    </div>
  );
}
