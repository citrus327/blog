import Layout from "../components/Layout";
import { getRecentIssues } from "../lib/api";

function Home() {
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

export default Home;

export async function getStaticProps() {
  const data = await getRecentIssues();

  return {
    props: {
      data,
    },
  };
}
