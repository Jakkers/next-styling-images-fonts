//I am going to purposefully break this page to test my error page

export default function BrokenCoaster() {
  throw new Error(
    "Your Coaster is off-the-rails! Take a minute to go back on track"
  );
  return (
    <>
      <h1>Error</h1>
    </>
  );
}
