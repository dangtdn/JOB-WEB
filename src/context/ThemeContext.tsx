// import { AxiosRequestConfig } from 'axios'
// import { AxiosRequestConfig } from 'axios'
import { useRouter } from "next/router";
import React, { createContext } from "react";
import { useToasts } from "react-toast-notifications";
// import useSWR from 'swr'
import useUser from "../components/lib/user";
import { authAxios, Axios } from "../components/utils/axiosKits";
import { localRemove } from "../components/utils/localStore";
import { categories } from "@/utils/dummy-content/mongodb-collections/categories";

export const ThemeContext = createContext({});

// const fetcher = (url: AxiosRequestConfig<any>) =>
// 	Axios(url).then((res: any) => res.data.data)
// const authFetcher = (url: AxiosRequestConfig<any>) =>
// 	authAxios(url).then((res: any) => res.data.data.notification)
// const JobCategoryAPI = '/jobs/categories/retrives'

const ThemeContextProvider = ({ children }: { children: any }) => {
  const apiEndPoint = `/api/v1`;
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window === "object" && window.innerWidth
  );
  const [windowHeight, setWindowHeight] = React.useState(
    typeof window === "object" && window.innerHeight
  );
  const body = typeof window === "object" && document.querySelector("body");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // mobile menu open
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(false); // side nav open
  const [LoginPopup, setLoginPopup] = React.useState(false); // Login Popup
  const [RegisterPopup, setRegisterPopup] = React.useState(false); // register popup
  const [lostPasswordShow, setLostPasswordShow] = React.useState(false); // lost password popup

  // user after login fetch data
  const { user, loggedOut, loggedIn, mutate } = useUser() as any;

  // Frontend data fetching hooks
  // const {
  // 	data: categoryData,
  // 	error: categoryError,
  // 	mutate: categoryMutate,
  // } = useSWR(JobCategoryAPI, fetcher, {
  // 	revalidateOnFocus: false,
  // })
  const categoryData = categories;

  // // user notification data fetching hooks
  // const { data: recentNotification, error: recentNotificationError } = useSWR(
  // 	loggedIn && `/notifications/recent/retrives`,
  // 	authFetcher
  // )

  const router = useRouter();
  const { addToast } = useToasts();

  React.useEffect(() => {
    const body = document.querySelector("body") as any;
    let resizeWindow = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      window.innerWidth >= 768 && window.innerWidth < 1300
        ? body.setAttribute("data-sidebar-style", "overlay")
        : window.innerWidth <= 768
        ? body.setAttribute("data-sidebar-style", "overlay")
        : body.setAttribute("data-sidebar-style", "full");
    };
    body.setAttribute("data-typography", "poppins");
    body.setAttribute("data-theme-version", "light");
    body.setAttribute("data-theme-version", "dark");
    body.setAttribute("data-layout", "vertical");
    body.setAttribute("data-nav-headerbg", "color_1");
    body.setAttribute("data-headerbg", "color_1");
    body.setAttribute("data-sidebar-style", "overlay");
    body.setAttribute("data-sibebarbg", "color_1");
    body.setAttribute("data-primary", "color_1");
    body.setAttribute("data-sidebar-position", "fixed");
    body.setAttribute("data-header-position", "fixed");
    body.setAttribute("data-container", "wide");
    body.setAttribute("direction", "ltr");
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const LoginPopupHandler = () => {
    setLoginPopup(!LoginPopup);
  };

  const RegisterPopupHandler = () => {
    setRegisterPopup(!RegisterPopup);
  };

  const lostPasswordHandler = () => {
    setLostPasswordShow(!lostPasswordShow);
    setLoginPopup(false);
  };

  const logOutHandler = async () => {
    try {
      localRemove("UserData");
      await mutate(null);
      await router.replace("/login");
      addToast("You have successfully logged out", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error: any) {
      addToast(error.response.data.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const frontendLogOutHandler = async () => {
    try {
      await localRemove("UserData");
      await mutate(null);
      addToast("You have successfully logged out", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error: any) {
      addToast(error.response.data.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        apiEndPoint,
        body,
        windowWidth,
        windowHeight,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isSideNavOpen,
        setIsSideNavOpen,
        LoginPopup,
        LoginPopupHandler,
        setLoginPopup,
        RegisterPopup,
        RegisterPopupHandler,
        setRegisterPopup,
        lostPasswordShow,
        lostPasswordHandler,
        categoryData,
        // categoryError,
        // categoryMutate,
        logOutHandler,
        frontendLogOutHandler,
        // recentNotification,
        // recentNotificationError,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
