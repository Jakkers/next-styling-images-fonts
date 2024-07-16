// import our db connection string
import { dbConnect } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditPage({ params }) {
  //to pre-fill the form, we need to select the data from the database
  const db = dbConnect();
  const data = (
    await db.query(
      `SELECT * FROM coaster_rollers WHERE id = ${params.rollerId}`
    )
  ).rows[0];

  console.log(data);

  //we need a function to handle the update submit
  async function handleEdit(formData) {
    "use server";

    const name = formData.get("name");
    const country = formData.get("country");
    const height = formData.get("height");

    const db = dbConnect();
    await db.query(
      `UPDATE coaster_rollers SET name = $1, country = $2, height = $3 WHERE id = ${params.rollerId}`,
      [name, country, height]
    );

    revalidatePath("/rollers");
    revalidatePath(`/rollers/${params.rollerId}/edit`);
    redirect(`/rollers/${params.rollerId}`);
  }
  return (
    <div>
      <h1>Update Roller</h1>
      {/* we need a form  */}
      <form
        action={handleEdit}
        className="flex gap-4 flex-col w-96 content-center p-4"
      >
        <label htmlFor="name">Roller Name</label>
        <input
          defaultValue={data.name}
          className="text-black"
          type="text"
          id="name"
          name="name"
        ></input>
        <label htmlFor="country">Country</label>
        <input
          className="text-black"
          type="text"
          id="name"
          name="country"
          defaultValue={data.country}
        ></input>
        <label htmlFor="height">Height</label>
        <input
          className="text-black"
          type="number"
          id="height"
          name="height"
          min={0}
          defaultValue={data.height}
        ></input>
        <button
          className="flex hover:bg-red-600 h-8 hover:text-white bg-white rounded text-black items-center"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
