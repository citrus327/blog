import { fetch } from "./fetch";
import config from "../blog.config";
import _take from "lodash-es/take";
export const getIssueList = async () => {
  const data = await fetch(
    `/repos/${config.username}/${config.issueRepo}/issues`,
    {
      params: {
        sorted: "updated",
        state: "closed",
      },
    }
  );

  const transformed = data.map((o) => {
    return {
      number: o.number,
      title: o.title,
      updatedAt: o.updated_at,
    };
  });

  return transformed;
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
