import Link from 'next/link';
import Image from "next/image.js";

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
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Alex"
      />
    </>
  );
}