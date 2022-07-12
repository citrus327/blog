import { fetch } from "./fetch";
import config from "../blog.config";
import _take from "lodash-es/take";
import _groupBy from "lodash-es/groupBy";
import _min from "lodash-es/min";
import _max from "lodash-es/max";
import _uniqBy from "lodash-es/uniqBy";
import _flattenDeep from "lodash-es/flattenDeep";

export const getIssueList = async () => {
  const data = await fetch(
    `/repos/${config.username}/${config.issueRepo}/issues`,
    {
      params: {
        sorted: "created",
        state: "closed",
      },
    }
  );

  const grouped = _groupBy(data, (o) => {
    return o.milestone?.title || "rest";
  });

  const result = [
    ...grouped.rest.map((o) => {
      return {
        number: o.number,
        title: o.title,
        labels: _uniqBy(o.labels, "id"),
        createdAt: +new Date(o.created_at),
        updatedAt: +new Date(o.updated_at),
      };
    }),
    ...Object.entries(grouped)
      .filter((o) => {
        const [key] = o;
        return key !== "rest";
      })
      .map((o) => {
        const [key, value] = o;
        return {
          number: value.map((o) => o.number),
          title: key,
          labels: _uniqBy(_flattenDeep(value.map((o) => o.labels)), "id"),
          createdAt: +new Date(_min(value.map((o) => +new Date(o.created_at)))),
          updatedAt: +new Date(_max(value.map((o) => +new Date(o.update_at)))),
        };
      }),
  ].sort((a, b) => {
    return +new Date(b.createdAt) - +new Date(a.createdAt);
  });

  return result;
};

export const getAllLabels = async () => {
  const data = await getIssueList();

  const labels = _uniqBy(_flattenDeep(data.map((o) => o.labels)), "id");

  return labels;
};

export const getIssueByIssueNumber = async (issueNumber) => {
  const data = await fetch(
    `/repos/${config.username}/${config.issueRepo}/issues/${issueNumber}`,
    {
      headers: {
        Accept: "application/vnd.github.v3.html+json",
      },
    }
  );

  return data;
};

export const getRecentIssues = async () => {
  const data = await getIssueList();

  return _take(data, 5);
};
