import { BASE_URL, TIME_OUT } from "./request/config";
import ZYRequest from "./request";

const zyRequest = new ZYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config;
    },
  },
});

export default zyRequest;
