"use client";

import React from "react";
// import useSWR from "swr";
import { localGet, localRemove } from "../utils/localStore";
import fetcher from "./api-user";
import { Loader } from "../loader/loader";
import { users } from "@/utils/dummy-content/mongodb-collections/Untitled";
import { useRouter } from "next/navigation";

export default function useUser() {
  // const { data, mutate, error } = useSWR("/users/retrives", fetcher);
  const data = users[0];
  const loading = false;
  const loggedIn = localGet("UserData") !== null;
  const loggedOut = localGet("UserData") === null ? true : false;
  const localData = localGet("UserData");

  // auto logout if token is expired or not found in localStorage
  // if (error && error?.response?.status === 401) {
  //   localRemove("UserData");
  // }

  React.useEffect(() => {
    if (localData) {
      // auto logout if time is expired
      const time = new Date(localData.expires_in).getTime();
      const now = new Date().getTime();
      if (now > time) {
        localRemove("UserData");
      }
    }
  }, [localData]);

  const isAdmin = data?.role.isAdmin;
  const isConfirmed = data?.isConfirmed;
  const isEmployer = data?.role.isEmployer;
  const isCandidate = data?.role.isCandidate;

  return {
    loading,
    loggedIn,
    loggedOut,
    user: data,
    // mutate,
    isConfirmed,
    isAdmin,
    isEmployer,
    isCandidate,
  };
}

export const UserNotLogin = () => {
  const { loggedOut } = useUser();
  const router = useRouter();
  React.useEffect(() => {
    if (loggedOut) {
      router.replace("/login");
    }
  }, [loggedOut, router]);
  return <Loader />;
};

export const UserGoBack = () => {
  const { loggedIn } = useUser();
  const router = useRouter();
  React.useEffect(() => {
    if (loggedIn) {
      router.back();
    }
  }, [loggedIn, router]);
  return <Loader />;
};

export const UserLogin = () => {
  const { loggedIn } = useUser();
  const router = useRouter();
  React.useEffect(() => {
    if (loggedIn) {
      router.replace("/dashboard");
    }
  }, [loggedIn, router]);
  return <Loader />;
};
