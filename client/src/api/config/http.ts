import axios, { AxiosInstance } from "axios";
const baseURL = "http://127.0.0.1:8080/api/v1/";
class Http {
   instance: AxiosInstance;
   constructor() {
      this.instance = axios.create({
         baseURL,
         timeout: 5000,
      });
   }
}

const http = new Http().instance;
export default http;
