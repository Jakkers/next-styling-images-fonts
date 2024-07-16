import Link from "next/link";
import HeaderStyles from "@/components/Header.module.css";

//I'm going to import some Clerk components, so the user can intercat with authentication
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
// we need to import auth to get the user Id
import { auth } from "@clerk/nextjs/server";

export default function Header() {
  //destructure the userId from auth
  const { userId } = auth();
  return (
    <>
      <nav className={HeaderStyles.nav}>
        <Link href="/">Home</Link> | <Link href="/rollers">Rollers</Link> |{" "}
        <Link href="/animations">Animations</Link> |{" "}
        <Link href="/mountains">Mountains</Link> |{" "}
        <Link href="/newRoller">Add New Roller</Link> |{" "}
        <Link href="/slowCoaster">Slow page</Link> |{" "}
        <Link href="/fastPageSlowCoaster">Fast Page Slow Coaster</Link> |{" "}
        <Link href="/brokenCoaster">Error page</Link> |{" "}
        {/* authentication navigation  */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignUpButton className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Sign Up
          </SignUpButton>
          <SignInButton className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Sign In
          </SignInButton>
        </SignedOut>
      </nav>
    </>
  );
}
