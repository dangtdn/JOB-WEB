import { ApiProxyBasePath, baseURL } from "@/constants/appConstants";

export const getApiCoreBasePath = (path: string): string =>
  `${baseURL}/${ApiProxyBasePath.api}/${path}`;
