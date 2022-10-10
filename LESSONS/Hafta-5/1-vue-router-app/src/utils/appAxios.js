import axios from "axios";
export const appAxios = axios.create({
  baseUrl: "http://localhost:3000", //db.json un local i
  withCredentials: false,
  headers: {
    tokenX: "myToken",
    "content-type": "application/json",
  },
});
