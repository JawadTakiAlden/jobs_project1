import axios from "axios";

const client = axios.create({ baseURL: "https://api.houseofgeniuses.tech/api/v1"});
export const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('farah_token')}`;
  return client(options).then((res) => res);
};
