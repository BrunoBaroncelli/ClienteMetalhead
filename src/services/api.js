import axios from "axios";
const api = axios.create({
  baseURL: "https://api-metalhead.herokuapp.com",
});
const token = localStorage.getItem("token");
if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}
export default api;
