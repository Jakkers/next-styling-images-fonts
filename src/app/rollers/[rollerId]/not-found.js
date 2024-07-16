//create a not-found page for our dynamic page
//we add the not-found page to the specific route folder

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Oops</h1>
      <p>This is not the coaster you are looking for...</p>
      <Link href="/rollers">Take me back to the rollers!</Link>
    </>
  );
}
