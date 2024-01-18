import axios from "axios";
import { localGet } from "./localStore";

export const Axios = axios.create({
  baseURL: `/api`,
});

export const authAxios = axios.create({
  baseURL: `/api`,
  headers: {
    Authorization: `Bearer ${localGet("UserData")?.accessToken}`,
    Accept: "application/json",
  },
});
