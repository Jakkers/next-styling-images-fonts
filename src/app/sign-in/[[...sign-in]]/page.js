//import the sign-in component
import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="flex flex-col items-center p-24 text-5xl animate-pulse">
        Please I request your lovely data
      </h1>
      <SignIn />
    </div>
  );
}
