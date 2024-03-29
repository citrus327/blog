import * as React from "react";
import {
  ExtendedRecordMap,
  ListCollectionView,
  TableCollectionView,
} from "notion-types";
import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId } from "../lib/config";
import notion from "../lib/notion";

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId as string;
  try {
    const recordMap = await notion.getPage(pageId);
    return {
      props: {
        recordMap,
      },
      revalidate: 10,
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export async function getStaticPaths() {
  const recordMap = await notion.getPage(rootNotionPageId as string);

  const paths = Object.values(recordMap.collection_view)
    .filter((o) => {
      const collectionView = o.value;
      return collectionView.type === "list";
    })
    .map((o) => {
      // @ts-ignore
      return (o.value as ListCollectionView).page_sort;
    })
    .flat()
    .map((o) => {
      return `/${o.replaceAll("-", "")}`;
    })
    .concat(`/${rootNotionPageId}`);

  return {
    paths: paths,
    fallback: true,
  };
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
