import { useMutation, useQuery } from "@tanstack/react-query";
import { HttpStatusCode, QueryKey } from "@/constants/appConstants";
import { useClient } from "@/lib/http/useClient";
import {
  GetUserProfileResponse,
  UsersLoginRequest,
  UsersLoginResponse,
} from "@/types/user";
import { useUserAuth } from "@/lib/auth/useUserAuth";
import { getSettingCacheTime } from "@/lib/query/client";

// export const useRegisterEmailMutation = ({
//     onSuccess: handleSuccess,
//     onError: handleError,
//   }: {
//     onSuccess: (response: any) => void;
//     onError: (status: number | undefined) => void;
//   }) => {
//     const { http, handleErrorAPIResponse, getStatus } = useClient();
//     return useMutation(
//       async (req: RegisterEmailRequest) => {
//         const res = await http.postAsync<RegisterEmailRequest, any>('register_email', req);
//         return res.data;
//       },
//       {
//         onSuccess: handleSuccess,
//         onError: (error) => {
//           const status = getStatus(error);
//           switch (status) {
//             case HttpStatusCode.conflict:
//               break;
//             default:
//               handleErrorAPIResponse(error);
//               break;
//           }
//           handleError(status);
//         },
//       }
//     );
//   };

export const useLoginMutation = ({
  onError: handleError,
}: {
  onError: (status: number | undefined) => void;
}) => {
  const { http, handleErrorAPIResponse, getStatus } = useClient();
  const { login } = useUserAuth();
  return useMutation(
    async (req: UsersLoginRequest) => {
      const res = await http.postAsync<UsersLoginRequest, UsersLoginResponse>(
        "login",
        req
      );
      return res.data;
    },
    {
      onSuccess: ({ token, user }) =>
        login(token, user.userId, user.isSupervisor, user.isWorkspaceAdmin),
      onError: (error) => {
        const status = getStatus(error);
        switch (status) {
          case HttpStatusCode.locked:
            break;
          default:
            handleErrorAPIResponse(error);
            break;
        }
        handleError(status);
      },
    }
  );
};

export const useLogoutMutation = () => {
  const { http, handleErrorAPIResponse } = useClient();
  const { logout } = useUserAuth();
  return useMutation(
    () => http.postAsync<undefined, undefined>("logout", undefined),
    {
      onSuccess: logout,
      onError: handleErrorAPIResponse,
    }
  );
};

export const useUsersQuery = (userId: string) => {
  const { http, handleErrorAPIResponse } = useClient();
  return useQuery(
    [QueryKey.users, userId],
    async () => {
      const res = await http.getAsync<undefined, GetUserProfileResponse>(
        'users'
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
      enabled: !!userId,
      ...getSettingCacheTime(),
    }
  );
};

export const useUserQuery = (userId: string) => {
  const { http, handleErrorAPIResponse } = useClient();
  return useQuery(
    [QueryKey.user, userId],
    async () => {
      const res = await http.getAsync<undefined, GetUserProfileResponse>(
        `user/${userId}`
      );
      return res.data;
    },
    {
      onError: handleErrorAPIResponse,
      enabled: !!userId,
      ...getSettingCacheTime(),
    }
  );
};
