import Ani from "@/components/Ani";
import { AnimateIn } from "@/components/AnimateIn";

export default function AnimationPage() {
  return (
    <>
      <h1 className="flex flex-col items-center p-24 text-5xl animate-pulse">
        Animations
      </h1>
      <AnimateIn />
      <Ani />
    </>
  );
}
