import Head from "next/head";
import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId } from "../lib/config";
import notion from "../lib/notion";

export const getStaticProps = async () => {
  const recordMap = await notion.getPage(rootNotionPageId as string);
  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function Home({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Citrus327's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />
      </main>
    </>
  );
}
