// import { fetchDynamicData } from "@/utils/fetchData";

//import dbConnect from dbConnection
import { dbConnect } from "@/utils/dbConnection";

//import not-found
import { notFound } from "next/navigation";

export default async function RollerIdPage({ params }) {
  //call the dbConnect function, so the connecttion to the db is working
  const db = dbConnect();
  const oneRoller = (
    await db.query(
      `SELECT * FROM coaster_rollers WHERE id = ${params.rollerId}`
    )
  ).rows;

  //we want our app to display the not-found page only when there is not a param matching the database id

  //when we query the database, we get an array with one item, so the length property is 1
  // if the length is 0, it means that the array is empty
  if (oneRoller.length === 0) {
    notFound();
  }

  return (
    <>
      <h1>This is an individual Roller Coaster: {params.rollerId}</h1>
      {/* I map throught the database  */}
      {oneRoller.map((item) => (
        <>
          <h2 key={item.id}>{item.name}</h2>
          <p>{item.country}</p>
          <p>{item.height}</p>
        </>
      ))}
    </>
  );
}
