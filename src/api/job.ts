import { useMutation, useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/constants/appConstants";
import { useClient } from "@/lib/http/useClient";
import { getSettingCacheTime } from "@/lib/query/client";
import { GetJobsResponse, PostJobRequest, PutJobRequest } from "@/types/job";

export const useJobsQuery = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useQuery(
    [QueryKey.jobs],
    async () => {
      const res = await http.getAsync<undefined, GetJobsResponse>("jobs");
      return res.data.jobs;
    },
    {
      onError: handleErrorAPIResponse,
      ...getSettingCacheTime(),
    }
  );
};

export const useCreateJobMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useMutation(
    async (req: PostJobRequest) => {
      const res = await http.postAsync<PostJobRequest, undefined>(
        "admin/job/create",
        req
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
    }
  );
};

export const useUpdateJobMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useMutation(
    async (req: PutJobRequest) => {
      const res = await http.putAsync<PutJobRequest, undefined>(
        `/admin/job/update/${req._id}`,
        req
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
    }
  );
};

export const useDeleteJobMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useMutation(
    async (jobId: string) => {
      const res = await http.deleteAsync<undefined, undefined>(
        `/admin/job/delete/${jobId}`,
        undefined
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
    }
  );
};
