import { fetchData } from "@/utils/fetchData";
import Link from "next/link";

//if you fetch your data in a seperate file, you still need async await in the page where you are using it.
export default async function RollersPage() {
  const rollers = await fetchData();
  console.log(rollers);
  return (
    <>
      {" "}
      <h1 className="flex flex-col items-center p-24 text-5xl animate-pulse">
        List of Rollers
      </h1>
      <div className="grid grid-cols-6 gap-4 mx-6">
        {rollers.map((item) =>
          item.products.map((data) => (
            // <Link key={data.id} href={`/rollers/${params.rollerId}`}>
            <div
              key={data.id}
              className="bg-yellow-400 text-gray-900 font-bold rounded-lg p-4 cursor-pointer transition-colors hover:opacity-20"
            >
              {data.title}
            </div>
            // </Link>
          ))
        )}
      </div>
    </>
  );
}
