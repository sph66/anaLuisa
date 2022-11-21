import axios from "axios";

export const findPosts = async (page, limit = 18) => {
  const { data } = await axios.get("https://dummyapi.io/data/v1/post/", {
    headers: { "app-id": "63765e6ee4cbda0dd89af9ba" },
    params: {
      limit,
      page,
    },
  });

  return data;
};

export default {
  findPosts,
};
