import { dbConnect } from "@/utils/dbConnection";

export default async function MountainPage() {
  const db = dbConnect();
  const mountains = (await db.query(`SELECT * FROM mountains`)).rows;
  //   console.log(mountains);

  return (
    <>
      <h1 className="flex flex-col items-center p-24 text-5xl animate-pulse">
        Mountains
      </h1>
      <div className="grid grid-cols-6 gap-4 mx-6">
        {mountains.map((item) => (
          <div
            key={item.id}
            className="bg-yellow-400 text-gray-900 font-bold rounded-lg p-4 cursor-pointer transition-colors hover:opacity-20"
          >
            <h1> {item.name}</h1>
            <p>Country: {item.location}</p>
            <p>Country: {item.height_metres}</p>
          </div>
        ))}
      </div>
    </>
  );
}
