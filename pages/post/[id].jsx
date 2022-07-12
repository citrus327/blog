import React from "react";
import Layout from "../../components/Layout";
import { getIssueByIssueNumber, getIssueList } from "../../lib/api";

const Post = (props) => {
  return (
    <Layout>
      <div
        className="markdown-body scroller"
        dangerouslySetInnerHTML={{
          __html: props.html,
        }}
      ></div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await getIssueList();
  const numbers = data.map((o) => {
    return {
      params: { id: String(o.number) },
    };
  });
  return {
    paths: numbers,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getIssueByIssueNumber(params.id);

  return {
    props: {
      html: data.body_html,
    },
  };
}

export default Post;
