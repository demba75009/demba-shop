import * as axios from "axios";

const Service = axios.create({
  baseURL: "https://text-bcfd3-default-rtdb.firebaseio.com/",
});

export default Service;
