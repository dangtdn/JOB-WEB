import Layout from "@/components/Layout/Layout";
import ProfileBox from "@/components/dashboard/profile";
import useUser, { UserNotLogin } from "@/components/lib/user";
import { users } from "@/utils/dummy-content/mongodb-collections/Untitled";
import Head from "next/head";
import React from "react";

const MyProfile = () => {
  const { user, loggedIn, loggedOut } = useUser();
//   const userData = user?.data;
const userData = users[0]

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <main>
          {loggedOut && <UserNotLogin />}
          {userData && loggedIn && <ProfileBox data={userData} />}
        </main>
      </Layout>
    </>
  );
};

export default MyProfile;