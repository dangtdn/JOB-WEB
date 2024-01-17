import React, { useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import PopupLogin from "@/components/register/popup-login";
import PopupRegister from "@/components/register/popup-register";
import LostPassword from "@/components/register/lost-password";
import ThemeContext from "@/context/ThemeContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  //   const { isLogIn } = useContext(ThemeContext) as any;
  const isLogIn = false;
  return (
    <>
      <ThemeContext>
        <Header IsLogIn={isLogIn} />
        {children}
        <ToastContainer />
        <Footer />
        <PopupLogin />
        <PopupRegister />
        <LostPassword />
      </ThemeContext>
    </>
  );
};

export default Layout;
