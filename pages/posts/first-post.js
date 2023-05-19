import Link from 'next/link';

export default function firstPost() {
  return (
    <>
      <h1>FirstPost</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>
        <Link href="/Test/Test">Take me to test page</Link>
      </h2>
    </>
  );
}