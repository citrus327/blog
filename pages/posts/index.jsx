import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { ListItem, ListItemContainer } from "../../components/ListItem";
import { getIssueList } from "../../lib/api";

const Posts = (props) => {
  return (
    <Layout>
      <ListItemContainer>
        {props.data.map((o) => {
          return (
            <ListItem key={o.number}>
              <Link href={`/post/${o.number}`}>{o.title}</Link>
            </ListItem>
          );
        })}
      </ListItemContainer>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getIssueList();

  return {
    props: {
      data,
    },
  };
}

export default Posts;
