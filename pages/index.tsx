import Head from "next/head";
import { NotionAPI } from "notion-client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const action = async () => {
      const notion = new NotionAPI();
      const recordMap = await notion.getPage(
        "067dd719a912471ea9a3ac10710e7fdf"
      );

      console.log(recordMap);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Citrus327's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>123</main>
    </>
  );
}
