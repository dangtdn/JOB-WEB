import dynamic from "next/dynamic";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import MainHeader from "../header";

const Layout = (props: { children: any }) => {
  const { isLogIn } = useContext(ThemeContext) as any;
  if (isLogIn) {
    return (
      <>
        <MainHeader isLogin={true}>{props.children}</MainHeader>
      </>
    );
  } else {
    return (
      <>
        <MainHeader isLogin={false}>{props.children}</MainHeader>
      </>
    );
  }
};

export default Layout;
