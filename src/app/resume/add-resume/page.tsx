"use client";

import ResumeForm from "@/components/dashboard/add-resume/resume-form";
import Layout from "@/components/dashboard/layout";
import useUser, { UserGoBack, UserNotLogin } from "@/lib/auth/user";
import Head from "next/head";
import React from "react";

export default function AddResume() {
  const { user, loggedIn, loggedOut, isEmployer } = useUser();
  const userData = user;

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <main>
          {loggedOut && <UserNotLogin />}
          {isEmployer && <UserGoBack />}
          {userData && loggedIn && !isEmployer && <ResumeForm />}
        </main>
      </Layout>
    </>
  );
}
