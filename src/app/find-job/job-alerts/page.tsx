"use client";

import JobAlertsInfo from "@/components/dashboard/job-alerts";
import Layout from "@/components/dashboard/layout";
import useUser, { UserGoBack, UserNotLogin } from "@/lib/auth/user";
import Head from "next/head";

export default function JobAlerts() {
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
          {userData && loggedIn && <JobAlertsInfo />}
        </main>
      </Layout>
    </>
  );
}
