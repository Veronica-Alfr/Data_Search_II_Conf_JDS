import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001", // Update with your Nest.js API URL
});

export default instance;
