// React Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Tailwind CSS
import "../styles/tailwind.css";
// React slick slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// React Skeleton CSS
import "react-loading-skeleton/dist/skeleton.css";
import ThemeContext from "../src/context/ThemeContext";
import { ToastProvider } from "react-toast-notifications";
import Head from "next/head";
import _ from "lodash";
import React from "react";
import PopupLogin from "../src/components/register/popup-login";
import PopupRegister from "../src/components/register/popup-register";
import LostPassword from "../src/components/register/lost-password";
import { usePathname } from "next/navigation";

export default function MyApp({ Component, pageProps }) {
  const pathname = usePathname();
  let pageTitle = pathname.split("/")[1];
  pageTitle =
    pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1).replace(/-/g, " ");

  return (
    <ToastProvider>
      <ThemeContext>
        <Head>
          <title>{pageTitle !== "" ? pageTitle : "Home"} - Meta Jobs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <PopupLogin />
        <PopupRegister />
        <LostPassword />
      </ThemeContext>
    </ToastProvider>
  );
}
