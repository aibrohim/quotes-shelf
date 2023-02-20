import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://quote.n51projects.click/quotes",
});
