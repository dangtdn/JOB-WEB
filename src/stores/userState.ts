import { atom, useRecoilState, useResetRecoilState } from 'recoil';

import { LocalStorageKey, RecoilAtomKey } from '@/constants/appConstants';
import { localStorageEffect } from '@/lib/recoil/localStorageEffect';

const tokenState = atom({
  key: RecoilAtomKey.token,
  default: '',
  effects: [localStorageEffect(LocalStorageKey.token)],
});

const userIdState = atom({
  key: RecoilAtomKey.userId,
  default: '',
  effects: [localStorageEffect(LocalStorageKey.userId)],
});

const isSupervisorState = atom({
  key: RecoilAtomKey.isSupervisor,
  default: false,
  effects: [localStorageEffect(LocalStorageKey.isSupervisor)],
});

export const isWorkspaceAdminState = atom({
  key: RecoilAtomKey.isWorkspaceAdmin,
  default: false,
  effects: [localStorageEffect(LocalStorageKey.isWorkspaceAdmin)],
});

export const useUserState = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const resetTokenState = useResetRecoilState(tokenState);

  const [userId, setUserId] = useRecoilState(userIdState);
  const resetUserIdState = useResetRecoilState(userIdState);

  const [isSupervisor, setIsSupervisor] = useRecoilState(isSupervisorState);
  const resetIsSupervisorState = useResetRecoilState(isSupervisorState);

  const [isWorkspaceAdmin, setIsWorkspaceAdmin] = useRecoilState(isWorkspaceAdminState);
  const resetIsWorkspaceAdminState = useResetRecoilState(isWorkspaceAdminState);

  const setUserState = (token: string, userId: string, isSupervisor: boolean, isWorkspaceAdmin: boolean) => {
    setToken(token);
    setUserId(userId);
    setIsSupervisor(isSupervisor);
    setIsWorkspaceAdmin(isWorkspaceAdmin);
  };

  const resetUserState = () => {
    resetTokenState();
    resetUserIdState();
    resetIsSupervisorState();
    resetIsWorkspaceAdminState();
  };

  return {
    token,
    userId,
    isSupervisor,
    isWorkspaceAdmin,
    setUserState,
    resetUserState,
  };
};
