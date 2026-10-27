import Link from "next/link";
import { Suspense } from "react";
import { projects } from "../../../lib/projects";
async function ProjectsContent({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const results = await searchParams;
  const myProjects = projects;

  console.log(results);
  return (
    <div>
      <ul>
        {myProjects.map((project) => (
          <div key={project.id}>
            <h3 key={project.id}>{project.name}</h3>
            <Link href={`projects/${project.id}`}>Project Link</Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  // const filters = await searchParams;
  // console.log(filters);

  // const query = filters.status;
  // console.log(query);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>A Project</h1>
          <Suspense fallback={"Loading projects..."}>
            {" "}
            <ProjectsContent searchParams={searchParams} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
