import Layout from "../components/Layout";
import { RecentList } from "../components/RecentList";
import { getRecentIssues } from "../lib/api";

export default function Home(props) {
  const { data } = props;
  return (
    <Layout>
      <RecentList title="Posts" data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getRecentIssues();

  return {
    props: {
      data,
    },
  };
}
