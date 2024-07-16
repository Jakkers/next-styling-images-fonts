// I am going to create a delay to purposfully slow down this componenet
function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

//we need async and await because the delay function happens at a different time from page loading
export default async function SlowComponent() {
  await delay(5000);
  return (
    <>
      <h1 className="text-red-500">I am a slow component</h1>
      <p className="text-red-500">Be paitent, I&apos;ll get there!</p>
    </>
  );
}
