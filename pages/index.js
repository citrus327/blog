import Layout from "../components/Layout";
import { RecentList } from "../components/RecentList";
import { getRecentIssues } from "../lib/api";

export default function Home(props) {
  const { data } = props;
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
        }}
      >
        <div className="animate__animated animate__pulse animate__infinite">{`/* Hi. */`}</div>
      </div>
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
