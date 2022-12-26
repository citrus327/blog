import Layout from "../components/Layout";
import { getRecentIssues } from "../lib/api";

const emojis = {
  xmas: {
    range: ["12.24", "12.30"],
    emoji: "🎄",
  },
  springFestival: {
    range: ["1.10", "2.10"],
    emoji: "🧨",
  },
};
function Home() {
  const renderEmoji = () => {
    const isInRange = (target, range) => {
      const p = new Date(
        new Date(range[0]).setFullYear(new Date().getFullYear())
      );
      const q = new Date(
        new Date(range[1]).setFullYear(new Date().getFullYear())
      );
      return target >= p && target <= q;
    };

    const target = Object.values(emojis).find((o) => {
      return isInRange(new Date(), o.range);
    });

    return target.emoji;
  };
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
        <div className="animate__animated animate__pulse animate__infinite">{`/* ${renderEmoji()}Hi. */`}</div>
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
