//create a not-found page for our dynamic page
//we add the not-found page to the specific route folder

import Link from "next/link";

export default function NotFoundAll() {
  return (
    <>
      <h1>Oops</h1>
      <p>This is not the page you are looking for...</p>
      <Link href="/">Get me outta here!</Link>
    </>
  );
}
