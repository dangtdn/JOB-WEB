"use client";
import Layout from "@/components/Layout/Layout";
import AddCompanyForm from "@/components/dashboard/form/add-company-form";
import useUser, { UserGoBack, UserNotLogin } from "@/lib/auth/user";
import Head from "next/head";
import React from "react";

export default function AddCompany() {
  const { user, loggedIn, loggedOut, isCandidate } = useUser();
  const userData = user;

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <main>
          {loggedOut && <UserNotLogin />}
          {isCandidate && <UserGoBack />}
          {userData && loggedIn && !isCandidate && <AddCompanyForm />}
        </main>
      </Layout>
    </>
  );
}
