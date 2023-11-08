/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { getApiCoreBasePath } from './endpoints';
import { useSnackbar } from '../notistack/useSnackbar';
import client from '../axios/client';

export const useClient = () => {
  const { enqueueSnackbar } = useSnackbar();

  const getAsync = <Req, Res>(
    path: string,
    params?: Req,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Res, any>> =>
    client.get<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), { params, ...config });

  const postAsync = <Req, Res>(path: string, data: Req, config?: AxiosRequestConfig) =>
    client.post<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), data, config);

  const putAsync = <Req, Res>(path: string, data: Req, config?: AxiosRequestConfig): Promise<AxiosResponse<Res, any>> =>
    client.put<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), data, config);

  const deleteAsync = <Req, Res>(path: string, data: Req): Promise<AxiosResponse<Res, any>> =>
    client.delete<Req, AxiosResponse<Res>>(getApiCoreBasePath(path), { data: data });

  const patchAsync = <Req, Res>(path: string, data: Req): Promise<AxiosResponse<Res, any>> =>
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
            enqueueSnackbar('Đã có lỗi xảy ra!');
            break;
        }
      }
    }
  };

  return { http: { getAsync, postAsync, putAsync, deleteAsync, patchAsync }, handleErrorAPIResponse, getStatus };
};
