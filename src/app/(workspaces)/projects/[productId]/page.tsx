export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const filters = await searchParams;
  // const filters = (await searchParams).filters;
  // console.log("myParams:     ", myParams);
  console.log(filters);

  const query = await searchParams;
  console.log(query);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>A Project</h1>
        </div>
      </main>
    </div>
  );
}
