// import { fetchDynamicData } from "@/utils/fetchData";

//import dbConnect from dbConnection
import { dbConnect } from "@/utils/dbConnection";

export default async function RollerIdPage({ params }) {
  // const result = await fetch(`https://dummyjson.com/carts/${params.rollerId}`);
  // const data = await result.json();
  // const wrangledData = data.products;

  //call the dbConnect function, so the connecttion to the db is working
  const db = dbConnect();
  const oneRoller = (
    await db.query(
      `SELECT * FROM coaster_rollers WHERE id = ${params.rollerId}`
    )
  ).rows;
  console.log(oneRoller);

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
