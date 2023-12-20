import React, { useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastProvider } from "react-toast-notifications";
import PopupLogin from "@/components/register/popup-login";
import PopupRegister from "@/components/register/popup-register";
import LostPassword from "@/components/register/lost-password";
import ThemeContext from "@/context/ThemeContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  //   const { isLogIn } = useContext(ThemeContext) as any;
  const isLogIn = false;
  return (
    <>
      <ToastProvider>
        <ThemeContext>
          <Header IsLogIn={isLogIn} />
          {children}
          <Footer />
          <PopupLogin />
          <PopupRegister />
          <LostPassword />
        </ThemeContext>
      </ToastProvider>
    </>
  );
};

export default Layout;
