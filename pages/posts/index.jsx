import React from "react";
import Layout from "../../components/Layout";
import { ListItem, ListItemContainer } from "../../components/ListItem";
import { getIssueList } from "../../lib/api";

const Posts = (props) => {
  return (
    <Layout>
      <ListItemContainer>
        {props.data.map((o) => {
          return <ListItem key={o.number}>{o.title}</ListItem>;
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
