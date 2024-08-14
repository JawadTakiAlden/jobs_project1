import axios from "axios";

const client = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

// // Interceptor to handle 401 errors
// client.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('token');
//       // window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

export const request = async ({ ...options }) => {
  const token = localStorage.getItem('token');
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return client(options).then((res) => res);
};
