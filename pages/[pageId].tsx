import * as React from "react";

import { ExtendedRecordMap } from "notion-types";

import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId } from "../lib/config";
import notion from "../lib/notion";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";
export const getStaticProps = async (context) => {
  const pageId = (context.params.pageId as string) || rootNotionPageId!;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
