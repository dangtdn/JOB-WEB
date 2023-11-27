import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  //   const { isLogIn } = useContext(ThemeContext) as any;
  const isLogIn = true;
  if (isLogIn) {
    return (
      <>
        <Header IsLogIn={true} />
        {children}
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header IsLogIn={false} />
        {children}
        <Footer />
      </>
    );
  }
};

export default Layout;
