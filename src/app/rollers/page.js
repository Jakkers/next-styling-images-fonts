// import { fetchData } from "@/utils/fetchData";

//import the db that I have in dbConnection.js
import { dbConnect } from "@/utils/dbConnection";

//if you fetch your data in a seperate file, you still need async await in the page where you are using it.
export default async function RollersPage() {
  // const rollers = await fetchData();
  // console.log(rollers);

  //connect util dbConnection here
  const db = dbConnect();
  //write a SQL qeury to get data from database
  const rollers = (await db.query(`SELECT * FROM coaster_rollers`)).rows;
  // console.log(rollers);

  return (
    <>
      {" "}
      <h1 className="flex flex-col items-center p-24 text-5xl animate-pulse">
        List of Rollers
      </h1>
      <div className="grid grid-cols-6 gap-4 mx-6">
        {rollers.map((item) => (
          <div
            key={item.id}
            className="bg-yellow-400 text-gray-900 font-bold rounded-lg p-4 cursor-pointer transition-colors hover:opacity-20"
          >
            <h1> {item.name}</h1>
            <p>Country: {item.country}</p>
            <p>Country: {item.height}</p>
          </div>
        ))}
      </div>
    </>
  );
}
