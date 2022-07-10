import config from "../blog.config";
const BASE_URL = "https://api.github.com";

const addQueryParams = (url, params) => {
  if (!params || Object.keys(params).length === 0) {
    return url;
  }

  const queryString = Object.entries(params)
    .map((o) => {
      const [key, value] = o;
      return `${key}=${value}`;
    })
    .join("&");

  return `${url}?${queryString}`;
};

export const fetch = async (url, options) => {
  const { type = "get", params = {}, headers = {} } = options;
  const finalUrl = addQueryParams(`${BASE_URL}${url}`, params);
  const res = await global.fetch(finalUrl, {
    headers: {
      Authorization: `token ${Buffer.from(config.accessToken, "base64")}`,
      Accept: "application/json",
      ...headers,
    },
    type,
  });

  return res.json();
};
