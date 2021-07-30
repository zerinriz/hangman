import axios from "axios";
const KEY = "05198e442625199bcbb16f52a684f1dc";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  params: {
    api_key: KEY,
  },
  headers: {},
});
