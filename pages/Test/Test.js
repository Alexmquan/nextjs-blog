import Head from "next/head.js";
import Link from "next/link.js";

export default function Test() {
  return (
    <>
      <Head>
        <title>Test page</title>
      </Head>
      <h2><Link href="/posts/first-post">Back to homepage</Link> </h2>
    </>
  );
}