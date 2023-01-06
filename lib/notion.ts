import { NotionAPI } from "notion-client";

const notion = new NotionAPI({
  activeUser: process.env.USER_ID,
  authToken: process.env.AUTH_TOKEN_V2,
});
export default notion;
