import { useMutation, useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/constants/appConstants";
import { useClient } from "@/lib/http/useClient";
import { getSettingCacheTime } from "@/lib/query/client";
import {
  GetCategoriesResponse,
  PostCategoryRequest,
  PutCategoryRequest,
} from "@/types/category";

export const useCategoriesQuery = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useQuery(
    [QueryKey.categories],
    async () => {
      const res = await http.getAsync<undefined, GetCategoriesResponse>(
        "categories"
      );
      return res.data.job;
    },
    {
      onError: handleErrorAPIResponse,
      ...getSettingCacheTime(),
    }
  );
};

export const useCreateCategoryMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useMutation(
    async (req: PostCategoryRequest) => {
      const res = await http.postAsync<PostCategoryRequest, undefined>(
        "admin/category/create",
        req
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
    }
  );
};

export const useUpdateCategoryMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useMutation(
    async (req: PutCategoryRequest) => {
      const res = await http.putAsync<PutCategoryRequest, undefined>(
        `/admin/category/update/${req._id}`,
        req
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
    }
  );
};

export const useDeleteCategoryMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  return useMutation(
    async (categoryId: string) => {
      const res = await http.deleteAsync<undefined, undefined>(
        `/admin/category/delete/${categoryId}`,
        undefined
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
    }
  );
};
