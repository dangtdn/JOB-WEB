import { authAxios } from "@/lib/utils/axiosKits";

const requestAxios = (
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: any
) => ({
  method,
  url,
  data,
});

export const getJobsService = async () => {
  return await authAxios(requestAxios("GET", "/jobs"));
};

export const getSingleJobService = async (id: string) => {
  return await authAxios(requestAxios("GET", `/jobs/${id}`));
};
