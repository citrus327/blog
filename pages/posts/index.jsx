import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { Label } from "../../components/Label";
import Layout from "../../components/Layout";
import { ListItem, ListItemContainer } from "../../components/ListItem";
import { getAllLabels, getIssueList } from "../../lib/api";

const Posts = (props) => {
  const { data, labels } = props;

  const [selectedLabel, setSelectedLabel] = useState(null);

  const filteredData = useMemo(() => {
    if (selectedLabel) {
      return data.filter((o) => {
        return o.labels.map((o) => o.id).includes(selectedLabel);
      });
    }
    return data;
  }, [data, selectedLabel]);

  return (
    <Layout>
      <div style={{ marginBottom: "12px", fontWeight: "bold" }}>Tags</div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}
      >
        <div>
          {labels.map((o) => {
            return (
              <Label
                color={o.color}
                key={o.id}
                selected={o.id === selectedLabel}
                onClick={() => {
                  if (selectedLabel === o.id) {
                    setSelectedLabel(null);
                  } else {
                    setSelectedLabel(o.id);
                  }
                }}
              >
                {o.name}
              </Label>
            );
          })}
        </div>
      </div>
      <ListItemContainer className="scroller">
        {filteredData.map((o) => {
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
  const labels = await getAllLabels();

  return {
    props: {
      data,
      labels,
    },
  };
}

export default Posts;
