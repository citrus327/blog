import * as React from "react";
import { ExtendedRecordMap, TableCollectionView } from "notion-types";
import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId } from "../lib/config";
import notion from "../lib/notion";

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId as string;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const recordMap = await notion.getPage(rootNotionPageId as string);

  const paths = Object.values(recordMap.collection_view)
    .filter((o) => {
      const collectionView = o.value;
      return collectionView.type === "table";
    })
    .map((o) => (o.value as TableCollectionView).page_sort)
    .flat()
    .map((o) => {
      return `/${o.replaceAll("-", "")}`;
    });

  return {
    paths: paths,
    fallback: true,
  };
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
