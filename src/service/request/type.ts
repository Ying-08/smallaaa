import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface ZYInterceptors<T = AxiosResponse> {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface ZYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZYInterceptors<T>;
  showLoading?: boolean;
}
