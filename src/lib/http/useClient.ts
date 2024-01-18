import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { getApiCoreBasePath } from "./endpoints";
import client from "../axios/client";
import { toast } from "react-toastify";

export const useClient = () => {
  const getAsync = <Req, Res>(
    path: string,
    params?: Req,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Res, any>> =>
    client.get<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), {
      params,
      ...config,
    });

  const postAsync = <Req, Res>(
    path: string,
    data: Req,
    config?: AxiosRequestConfig
  ) =>
    client.post<Req, AxiosResponse<Res>>(
      getApiCoreBasePath(path),
      data,
      config
    );

  const putAsync = <Req, Res>(
    path: string,
    data: Req,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Res, any>> =>
    client.put<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), data, config);

  const deleteAsync = <Req, Res>(
    path: string,
    data: Req
  ): Promise<AxiosResponse<Res, any>> =>
    client.delete<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), {
      data: data,
    });

  const patchAsync = <Req, Res>(
    path: string,
    data: Req
  ): Promise<AxiosResponse<Res, any>> =>
    client.patch<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), data);

  const getStatus = (error: any): number | undefined => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return error.response.status;
      }
    }
  };

  const handleErrorAPIResponse = (error: any) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status } = error.response;
        switch (status) {
          default:
            toast.error("Đã có lỗi xảy ra!", {
              position: "bottom-right",
              className: "foo-bar",
            });
            break;
        }
      }
    }
  };

  return {
    http: { getAsync, postAsync, putAsync, deleteAsync, patchAsync },
    handleErrorAPIResponse,
    getStatus,
  };
};
