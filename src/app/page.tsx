declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bricolage bold">CREATIVE DEVELOPER</h1>
      <p className="mt-4 text-lg">Welcome to my portfolio website!</p>
    </main>
  );
}
