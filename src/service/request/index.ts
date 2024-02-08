import axios from "axios";
import type { AxiosInstance } from "axios";
import type { ZYRequestConfig } from "./type";

class ZYRequest {
  instance: AxiosInstance;

  constructor(config: ZYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.requestInterceptorCatch
    );
  }

  // 封装网络请求的方法
  request<T = any>(config: ZYRequestConfig<T>) {
    // 单次请求的成功处理拦截
    // if (config.interceptors?.requestInterceptor) {
    //   config = config.interceptors.requestInterceptor(config);
    // }

    // 返回promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应成功拦截处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: ZYRequestConfig<T>) {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: ZYRequestConfig<T>) {
    return this.request({ ...config, method: "POST" });
  }
  delete<T = any>(config: ZYRequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: ZYRequestConfig<T>) {
    return this.request({ ...config, method: "PATCH" });
  }
}

export default ZYRequest;
