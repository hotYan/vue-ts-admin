import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "/api", //`http://10.1.10.8:8099`,
  timeout: 30000,
  withCredentials: true
};
interface Result {
  code: number;
  message: string;
}

interface ResultData<T = any> extends Result {
  data: T;
}

class Request {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // const userStore = useUserStore();
        // if (userStore.token) {
        //   config.headers.Authorization = `Bearer ${userStore.token}`;
        // }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject("ERROR" + error);
      }
    );
    this.service.interceptors.response.use((response: AxiosResponse) => {
      const { data } = response;

      return data;
    });
  }
  get<T = any>(url: string, params?: object, config?: InternalAxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.get(url, { ...config, params });
  }
  post<T = any>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.post(url, data, config);
  }
  put<T = any>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.put(url, data, config);
  }
  patch<T = any>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.patch(url, data, config);
  }
  delete<T = any>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.delete(url, { ...config, data });
  }
  download(url: string, data?: object): Promise<BlobPart> {
    return this.service.post(url, data, { responseType: "blob" });
  }
  getDownload(url: string, params?: object, config?: InternalAxiosRequestConfig) {
    return this.service.get(url, { ...config, params });
  }
}

export default new Request(config);
