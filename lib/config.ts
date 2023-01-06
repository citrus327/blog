// TODO: change this to the notion ID of the page you want to test
export const rootNotionPageId = process.env.ROOT_PAGE_ID;

export const isDev =
  process.env.NODE_ENV === "development" || !process.env.NODE_ENV;
