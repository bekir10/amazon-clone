import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-699d4/us-central1/api", // the api url(cloud func)
});

export default instance;
