import React from "react";
import Layout from "../../components/Layout";
import config from "../../blog.config";
const About = (props) => {
  console.log(props);
  return (
    <Layout>
      {props.data.map((o) => {
        return <div key={o.id}>{o.title}</div>;
      })}
    </Layout>
  );
};

export async function getServerSideProps() {
  // Get external data from the file system, API, DB, etc.
  const res = await fetch(
    `https://api.github.com/repos/${config.username}/${config.issueRepo}/issues?sorted=created&state=closed`,
    {
      headers: {
        Authorization: `token ${Buffer.from(config.accessToken, "base64")}`,
        Accept: "application/json",
      },
    }
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default About;
