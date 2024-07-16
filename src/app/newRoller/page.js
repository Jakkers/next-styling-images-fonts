//import the database connection
import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

//we are going to create a form to collect data from the user

export default function NewRollerPage() {
  //we need to handle submit
  //the handleSubmit function is async!
  //we use a parameter as a placeholder for the real input values
  async function handleSubmit(formData) {
    //! I need to tell the function to submit the form in the server!
    "use server";
    //get the formData from the inputs
    const name = formData.get("name");
    const country = formData.get("country");
    const height = formData.get("height");

    //we need to put the data in the database
    const db = dbConnect();
    await db.query(
      `INSERT INTO coaster_rollers(name, country, height) VALUES ($1, $2, $3)`,
      [name, country, height]
    );
    //revalidating the data and redirecting the user
    //revalidate refreshes the path with new data
    revalidatePath("/rollers");
    //redirect takes the user to the path where their data is
    redirect("/rollers");
  }
  return (
    //Keep your input names consistent with column names in your database
    //Make sure the type attribute value matched the type of data your column is accepting
    <>
      <h1>Form</h1>
      <form
        action={handleSubmit}
        className="flex flex-col w-96 content-center p-4"
      >
        <label htmlFor="name">Roller Name</label>
        <input className="text-black" type="text" id="name" name="name"></input>
        <label htmlFor="country">Country</label>
        <input
          className="text-black"
          type="text"
          id="name"
          name="country"
        ></input>
        <label htmlFor="height">Height</label>
        <input
          className="text-black"
          type="number"
          id="height"
          name="height"
          min={0}
        ></input>
        <button
          className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
