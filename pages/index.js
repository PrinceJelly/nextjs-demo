import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Alert from "../components/alert";
import { useState } from "react";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My demo blog for next.js</p>
        <p>Hi there! Praticing Next.Js</p>
        <Alert />
      </section>
    </Layout>
  );
}
