import { fetch } from "./fetch";
import config from "../blog.config";

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

  const transformed = data.map((o) => {
    return {
      number: o.number,
      title: o.title,
      updatedAt: o.updated_at,
    };
  });

  return transformed;
};
