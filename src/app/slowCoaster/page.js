import SlowComponent from "@/components/SlowComponent";

export default function slowCoasterPage() {
  return (
    <>
      <h1>I am a sloooooooooow cooooaaasster</h1>
      <p>This page will load after the loading page!</p>
      <SlowComponent />
    </>
  );
}
