import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
    </Layout>
  );
}

/*
The Link component enables client-side navigation between two pages in the same Next.js app.

Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

Here’s a simple way you can verify it:

Use the browser’s developer tools to change the background CSS property of <html> to yellow.
Click on the links to go back and forth between the two pages.
You’ll see that the yellow background persists between page transitions.
This shows that the browser does not load the full page and client-side navigation is working.
*/
