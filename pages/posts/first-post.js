import Link from 'next/link';
import Image from "next/image.js";
import Head from "next/head";
import Script from "next/script.js";
import Layout from "../../components/layout.js";

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>Website Header</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
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
    </Layout>
  );
}