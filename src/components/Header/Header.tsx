"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import ImageOpt from "../optimize/image";
import { ThemeContext } from "@/context/ThemeContext";
import { users } from "@/utils/dummy-content/mongodb-collections/Untitled";
import useSticky from "@/hooks/useSticky";
import useUser from "@/lib/auth/user";

const Menu = [
  {
    name: "Home",
    link: "/",
    pathName: "",
  },
  {
    name: "Find Job",
    link: "/find-job",
    pathName: "find-job",
  },
  {
    name: "Company",
    link: "/company",
    pathName: "company",
  },
  {
    name: "Contact Us",
    link: "/contact",
    pathName: "contact",
  },
];

const DashboardMenuList = [
  {
    name: "Dashboard",
    link: "/dashboard",
    pathName: "",
  },
  {
    name: "Job Alerts",
    link: "/job/job-alerts",
    pathName: "",
  },
  {
    name: "Manages Resumes",
    link: "/resume/manages-resumes",
    pathName: "",
  },
  {
    name: "My Profile",
    link: "/my-profile",
    pathName: "",
  },
];

const EmployerMenuList = [
  {
    name: "Dashboard",
    link: "/dashboard",
    pathName: "",
  },
  {
    name: "Manges Jobs",
    link: "/find-job/manages-jobs",
    pathName: "",
  },
  {
    name: "Manages Companies",
    link: "/company/manages-companies",
    pathName: "",
  },
  {
    name: "My Profile",
    link: "/my-profile",
    pathName: "",
  },
];

const AdminMenuList = [
  {
    name: "Dashboard",
    link: "/dashboard",
    pathName: "",
  },
  {
    name: "Manges Jobs",
    link: "/find-job/manages-jobs",
    pathName: "",
  },
  {
    name: "Manages Companies",
    link: "/company/manages-companies",
    pathName: "",
  },
  {
    name: "Manages Resumes",
    link: "/resume/manages-resumes",
    pathName: "",
  },
  {
    name: "My Profile",
    link: "/my-profile",
    pathName: "",
  },
];

const Header = () => {
  const { stickyRef, sticky } = useSticky();
  const [show, setShow] = useState(false);
  const { LoginPopupHandler, RegisterPopupHandler } = React.useContext(
    ThemeContext
  ) as any;
  const { user: userData, loggedIn } = useUser();
  const [UserMenu, setUserMenu] = React.useState(false);
  const pathName = usePathname();
  let path = pathName.split("/") as any;
  path = path[path.length - 1];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const UserMenuHandler = () => {
    setUserMenu(!UserMenu);
  };
  console.log("loggedIn: ", loggedIn);
  return (
    <>
      {/* Header Component */}
      <header
        ref={stickyRef}
        className={`shadow-sm ${sticky ? "sticky-header shadow-md" : ""}`}
      >
        <nav className="container py-2.5 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Desktop logo here ... */}
              <Link href="/" className="hidden sm:flex">
                <ImageOpt
                  src="/assets/img/logo.svg" // logo image here ...
                  width={146}
                  height={33}
                  alt="logo"
                />
              </Link>
              {/* Mobile logo here ... */}
              <Link href="/" className="sm:hidden flex">
                <ImageOpt
                  src="/assets/img/logo.svg" // logo image here ...
                  width={100}
                  height={33}
                  alt="logo"
                />
              </Link>
            </div>
            <div>
              <ul className="bg-white w-full z-50 menu-open md:space-x-8 space-x-6 font-semibold hidden absolute left-0 top-20 lg:static lg:flex">
                {Menu.map((item, index) => (
                  <li className="ml-6 xl:ml-0 xl:mb-0" key={index}>
                    <Link
                      href={item.link}
                      className={`${
                        path === item.pathName
                          ? "text-themePrimary"
                          : "text-arsenic"
                      } text-xs  font-medium transition-all hover:text-themePrimary`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {userData && loggedIn ? (
                <>
                  {/* After user login design */}
                  {userData && (
                    <div className="flex gap-2 items-center">
                      <div className="relative">
                        <button
                          className="flex items-center hover:text-arsenic pr-2 border-r border-r-themeLighter lg:pr-0 lg:border-0 text-center cursor-pointer"
                          onClick={UserMenuHandler}
                        >
                          <div className="mr-3 flex items-center">
                            {userData?.avatar && (
                              <ImageOpt
                                className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                                src={userData?.avatar}
                                alt="User image"
                                width={48}
                                height={48}
                              />
                            )}
                            {!userData?.avatar && (
                              <ImageOpt
                                className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                                src="https://res.cloudinary.com/dyor9qtzh/image/upload/v1646289332/Meta-jobs/user_biyxrq.png"
                                alt="User image"
                                width={48}
                                height={48}
                              />
                            )}
                          </div>
                          <div>
                            <p className="text-sm leading-8">
                              {userData?.fullName?.firstName}
                            </p>
                          </div>
                          <span
                            className={`ml-1 transition duration-200 ease-in-out ${
                              UserMenu ? "rotate-180" : ""
                            }`}
                          >
                            <HiChevronDown />
                          </span>
                        </button>
                        <DashboardMenu active={UserMenu} />
                      </div>
                      <button
                        className="mobile-toogle flex lg:hidden p-2 rounded-full transition-all outline-none"
                        onClick={handleShow}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* before user login design */}
                  <ul className="flex py-2">
                    <li className="">
                      {path === "/login" || path === "/sign-up" ? (
                        <Link
                          href={"/login"}
                          className="block bg-arsenic text-white px-3 py-2 text-xs font-medium rounded-md hover:!bg-themePrimary transition-all outline-none"
                        >
                          Sign In
                        </Link>
                      ) : (
                        <button
                          onClick={LoginPopupHandler}
                          className="block bg-arsenic text-white px-3 py-2 text-xs font-medium rounded-md hover:!bg-themePrimary transition-all outline-none"
                        >
                          Sign In
                        </button>
                      )}
                    </li>

                    <li className="ml-4 hidden md:block">
                      {path === "/login" || path === "/sign-up" ? (
                        <Link
                          href={"/sign-up"}
                          className="block bg-themePrimary text-white px-3 py-2 text-xs font-medium rounded-md hover:bg-arsenic transition-all outline-none"
                        >
                          Sign Up
                        </Link>
                      ) : (
                        <button
                          onClick={RegisterPopupHandler}
                          className="block bg-themePrimary text-white px-3 py-2 text-xs font-medium rounded-md hover:bg-arsenic transition-all outline-none"
                        >
                          Sign Up
                        </button>
                      )}
                    </li>
                    <li>
                      <button
                        className="mobile-toogle flex lg:hidden p-2 rounded-full transition-all outline-none"
                        onClick={handleShow}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      {/* Header End */}

      <MobileMenuWrapper className={show ? "show" : "hide"}>
        <MobileMenu className={show ? "show" : "hide"}>
          <MobileMenuHeader>
            <CloseIcon>
              <MdClose onClick={handleClose} />
            </CloseIcon>
          </MobileMenuHeader>
          <MobileMenuBody>
            {userData && (
              <div className="px-4">
                <div className="relative">
                  <div className="flex gap-3 items-center text-center cursor-pointer">
                    <div className="flex items-center">
                      {userData?.avatar && (
                        <ImageOpt
                          className="rounded-lg object-cover object-right p-1 border border-solid border-gray-500"
                          src={userData?.avatar}
                          alt="User image"
                          width={50}
                          height={50}
                        />
                      )}
                      {!userData?.avatar && (
                        <ImageOpt
                          className="rounded-lg object-cover object-right p-1 border border-solid border-gray-500"
                          src="https://res.cloudinary.com/dyor9qtzh/image/upload/v1646289332/Meta-jobs/user_biyxrq.png"
                          alt="User image"
                          width={50}
                          height={50}
                        />
                      )}
                    </div>
                    <div className="text-left">
                      <p className="text-sm leading-4 text-white">
                        {userData?.fullName?.firstName}{" "}
                        {userData?.fullName?.lastName}
                      </p>
                      <span className="text-xss1 text-deep">
                        {userData?.email}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <ul className="flex flex-col mt-6">
              {Menu.map((item, index) => (
                <li className="flex items-center" key={index}>
                  <Link
                    href={item.link}
                    className={`${
                      path === item.pathName
                        ? "text-themePrimary !border-themePrimary"
                        : "text-light"
                    } text-xxs py-3.5 px-4 border-b border-deep w-full transition-all hover:text-themePrimary hover:!border-themePrimary`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileMenuBody>
        </MobileMenu>
        <OverlayContainer
          className={show ? "show" : "hide"}
          onClick={handleClose}
        />
      </MobileMenuWrapper>
      <DashboardMenuOverlay
        className={UserMenu ? "active" : ""}
        onClick={UserMenuHandler}
      />
    </>
  );
};

function DashboardMenu({ active }: { active: any }) {
  const { frontendLogOutHandler } = React.useContext(ThemeContext) as any;
  const { user, isCandidate, isEmployer, isAdmin } = useUser();
  
  return (
    <>
      <DashboardMenuWrapper
        className={`${active ? "active" : ""} bg-themeLighterAlt text-white`}
      >
        <div className="p-3">
          <ul>
            {user && isCandidate && (
              <>
                {DashboardMenuList.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="block rounded w-full duration-300 ease-in-out py-2 text-base text-themeDarker hover:text-themePrimary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </>
            )}
            {user && isEmployer && (
              <>
                {EmployerMenuList.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="block rounded w-full duration-300 ease-in-out py-2 text-base text-themeDarker hover:text-themePrimary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </>
            )}
            {user && isAdmin && (
              <>
                {AdminMenuList.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="block rounded w-full duration-300 ease-in-out py-2 text-base text-themeDarker hover:text-themePrimary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </>
            )}
            <li>
              <button
                className="block text-left rounded w-full duration-300 ease-in-out py-2 text-base text-themeDarker hover:text-red-400"
                onClick={frontendLogOutHandler}
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </DashboardMenuWrapper>
    </>
  );
}

export default Header;

const MobileMenuWrapper = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  z-index: 100;
  transition: all ease-in-out 0.5s;
  &.show {
    left: 0;
  }
`;
const MobileMenu = styled("div")`
  position: absolute;
  top: 0;
  left: -100%;
  max-width: 400px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  // blur background
  backdrop-filter: blur(10px);
  z-index: 110;
  transition: all ease-in-out 0.5s;
  &.show {
    left: 0;
  }
`;
const MobileMenuHeader = styled("div")`
  height: 60px;
`;
const MobileMenuBody = styled("div")``;
const CloseIcon = styled("div")`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 15px;
  & svg {
    width: 30px;
    height: 30px;
    color: #f2f5f8;
    transition: all ease-in-out 0.5s;
    &:hover {
      color: #ff0000;
    }
  }
`;
const OverlayContainer = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  transition: all ease-in-out 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &.show {
    left: 0;
  }
`;
const DashboardMenuWrapper = styled("div")`
  top: calc(100% - 8px);
  width: 200px;
  right: -5px;
  border-radius: 3px;
  box-shadow: 0px 0 8px 0px rgb(0 0 0 / 10%);
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 12%);
  padding: 0;
  position: absolute;
  top: 120%;
  right: 10px;
  text-align: left;
  z-index: 100;
  transform: scale(0.95);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  pointer-events: none;
  &.active {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  &::before {
    content: "";
    position: absolute;
    right: 43px;
    top: -6px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid rgb(247 248 250);
    transition: border-color 0.3s;
  }
`;
const DashboardMenuOverlay = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 30;
  opacity: 0;
  transform: scale(0);
  &.active {
    opacity: 1;
    transform: scale(1);
  }
`;
