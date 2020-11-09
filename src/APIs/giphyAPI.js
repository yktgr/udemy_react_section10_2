const { default: Axios } = require("axios");

const giphyApi = (word) => {
  const search = word;
  const key = "kDfPv4LBhui4UHt8t8KydiqaX1Yi0mrG";
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  return Axios.get(url);
};

export default giphyApi;
