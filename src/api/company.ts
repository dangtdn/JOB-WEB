import { useMutation, useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/constants/appConstants";
import { useClient } from "@/lib/http/useClient";
import { getSettingCacheTime } from "@/lib/query/client";
import {
  GetCompaniesResponse,
  PostCompanyRequest,
  PutCompanyRequest,
} from "@/types/company";

export const useCompaniesQuery = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useQuery(
    [QueryKey.companies],
    async () => {
      const res = await http.getAsync<undefined, GetCompaniesResponse>(
        "companies"
      );
      return res.data.companies;
    },
    {
      onError: handleErrorAPIResponse,
      ...getSettingCacheTime(),
    }
  );
};

export const useCreateCompanyMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useMutation(
    async (req: PostCompanyRequest) => {
      const res = await http.postAsync<PostCompanyRequest, undefined>(
        "admin/company/create",
        req
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
    }
  );
};

export const useUpdateCompanyMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useMutation(
    async (req: PutCompanyRequest) => {
      const res = await http.putAsync<PutCompanyRequest, undefined>(
        `/admin/company/update/${req._id}`,
        req
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
    }
  );
};

export const useDeleteCompanyMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useMutation(
    async (companyId: string) => {
      const res = await http.deleteAsync<undefined, undefined>(
        `/admin/company/delete/${companyId}`,
        undefined
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
    }
  );
};
