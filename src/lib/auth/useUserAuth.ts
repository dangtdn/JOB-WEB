import { useQueryClient } from '@tanstack/react-query';

import { useUserState } from '@/stores/userState';
import { useWorkspaceState } from '@/stores/workspaceState';

export const useUserAuth = () => {
  const queryClient = useQueryClient();
  const { token, setUserState, resetUserState } = useUserState();
  const { resetWorkspaceState } = useWorkspaceState();

  const login = (token: string, userId: string, isSupervisor: boolean, isWorkspaceAdmin: boolean) => {
    setUserState(token, userId, isSupervisor, isWorkspaceAdmin);
  };

  const logout = () => {
    resetUserState();
    resetWorkspaceState();
    queryClient.removeQueries();
    localStorage.clear();
  };

  return { token, login, logout };
};
