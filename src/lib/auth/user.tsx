"use client";

import React from "react";
// import useSWR from "swr";
import { localGet, localRemove } from "../utils/localStore";
import { Loader } from "../loader/loader";
import { users } from "@/utils/dummy-content/mongodb-collections/Untitled";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import fetcher from "./api-user";

export default function useUser() {
  const { data, error, mutate } = useSWR("/current-user", fetcher);
  const loading = !data && !error;
  const loggedIn = localGet("UserData") !== null;
  const loggedOut = localGet("UserData") === null ? true : false;
  const localData = localGet("UserData");
  // const dataUser: GetUserProfileResponse = localData
  //   ? localGet("UserData")?.user
  //   : {
  //       ...users[0],
  //       _id: "624c18bf471afaba20bc15d3",
  //     };

  // auto logout if token is expired or not found in localStorage
  if (error && error?.response?.status === 401) {
    localRemove("UserData");
  }
  console.log("data?.data?: ", data?.data?.user);
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

  const isAdmin = data?.data?.user.role.isAdmin ?? false;
  const isConfirmed = data?.data?.user.isConfirmed ?? false;
  const isEmployer = data?.data?.user.role.isEmployer ?? false;
  const isCandidate = data?.data?.user.role.isCandidate ?? false;

  return {
    loading,
    loggedIn,
    loggedOut,
    user: data?.data?.user,
    mutate,
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
