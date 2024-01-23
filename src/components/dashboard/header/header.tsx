import styled from "@emotion/styled";
import _ from "lodash";
import Link from "next/link";
import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import Moment from "react-moment";
import { ThemeContext } from "../../../context/ThemeContext";
import Image from "../../optimize/image";
import { authAxios } from "@/lib/utils/axiosKits";
import useUser from "@/lib/auth/user";
import { usePathname } from "next/navigation";

const Menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Find Job",
    link: "/find-job",
  },
  {
    name: "Company",
    link: "/company",
  },
  {
    name: "Candidate",
    link: "/candidate",
  },
  {
    name: "Career Advice",
    link: "/career-advice",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

const DashboardMenuList = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Messages",
    link: "/messages",
  },
  {
    name: "Job Alerts",
    link: "/job/job-alerts",
  },
  {
    name: "Manages Resumes",
    link: "/resume/manages-resumes",
  },
  {
    name: "My Profile",
    link: "/my-profile",
  },
];

const EmployerMenuList = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Messages",
    link: "/messages",
  },
  {
    name: "Manges Jobs",
    link: "/job/manages-jobs",
  },
  {
    name: "Manages Companies",
    link: "/company/manages-companies",
  },
  {
    name: "My Profile",
    link: "/my-profile",
  },
];

const AdminMenuList = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Messages",
    link: "/messages",
  },
  {
    name: "Manges Jobs",
    link: "/job/manages-jobs",
  },
  {
    name: "Manages Companies",
    link: "/company/manages-companies",
  },
  {
    name: "Manages Resumes",
    link: "/resume/manages-resumes",
  },
  {
    name: "My Profile",
    link: "/my-profile",
  },
];

const fetcher = (url: string) => authAxios(url).then((res) => res.data);

const Header = () => {
  const {
    isSideNavOpen,
    setIsSideNavOpen,
    windowWidth,
    recentNotification,
    recentNotificationError,
  } = React.useContext(ThemeContext) as any;
  const [show, setShow] = React.useState(false);
  const { user } = useUser();
  const userData = user;
  const [UserMenu, setUserMenu] = React.useState(false);
  const [notification, setNotification] = React.useState(false);
  const pathName = usePathname();
  let path = pathName.split("/");
  path = path[path.length - 1] as any;

  const newNotification =
    _.filter(recentNotification, (item) => {
      return _.lowerCase(item.status) === "unread";
    }).length > 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SideNavMenuHandler = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const UserMenuHandler = () => {
    setUserMenu(!UserMenu);
  };

  return (
    <>
      <div className="fixed top-0 w-full py-2.5 xl:py-4 px-6 bg-white shadow-md z-50">
        <nav className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="xl:pl-5 lg:w-auto lg:pr-0 xl:w-80">
                {/* Desktop logo here ... */}
                <Link
                  href="/dashboard"
                  className="text-xl font-bold"
                  data-config-id="brand"
                >
                  <span className="hidden xl:flex items-center">
                    <Image
                      src="/../assets/img/logo.svg" // logo image here ...
                      alt="Logo Artemis"
                      width={146}
                      height={33}
                    />
                  </span>
                  {/* Mobile Logo Text */}
                  <h1 className="m-0 pr-3 text-4xl font-bold text-black xl:hidden lg:block">
                    M
                  </h1>
                </Link>
              </div>
              <div className="lg:hidden">
                <button
                  className="flex items-center"
                  onClick={SideNavMenuHandler}
                >
                  <svg
                    className="text-white bg-themePrimary block h-8 w-8 p-2 rounded"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <div className="hidden lg:block">
                <ul className="bg-white w-full z-50 menu-open md:space-x-8 space-x-6 font-normal hidden absolute left-0 top-20 lg:static lg:flex">
                  {Menu.map((item, index) => (
                    <li className="ml-6 xl:ml-0 xl:mb-0" key={index}>
                      <Link
                        href={item.link}
                        className={`text-themeDark text-sm  font-medium transition-all hover:text-themePrimary`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <ul className="flex items-center space-x-6 mr-6">
                <li className="relative !p-1 grid items-center">
                  <button
                    className={`text-themeDark relative hover:text-themePrimary ${
                      notification ? "!text-themePrimary" : ""
                    }`}
                    onClick={() => setNotification(!notification)}
                  >
                    {newNotification && (
                      <span className="w-2 h-2 absolute -top-1 -right-0.5 rounded-full bg-red-400" />
                    )}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  {windowWidth > 1020 && (
                    <NotificationMenu active={notification} />
                  )}
                </li>
              </ul>
              <div className="hidden lg:block">
                <div className="relative">
                  {userData && (
                    <div
                      className="flex items-center text-center cursor-pointer"
                      onClick={UserMenuHandler}
                    >
                      <div className="mr-3 lg:pl-4 lg:border-l lg:border-l-themeLighter flex items-center">
                        {userData?.avatar && (
                          <Image
                            className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                            src={userData?.avatar}
                            alt="User image"
                            width={50}
                            height={50}
                          />
                        )}
                        {!userData?.avatar && (
                          <Image
                            className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                            src="https://res.cloudinary.com/dyor9qtzh/image/upload/v1646289332/Meta-jobs/user_biyxrq.png"
                            alt="User image"
                            width={50}
                            height={50}
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-sm leading-8">
                          {userData?.fullName?.firstName}{" "}
                          {userData?.fullName?.lastName}
                        </p>
                      </div>
                      <span
                        className={`ml-2 transition duration-200 ease-in-out ${
                          UserMenu ? "rotate-180" : ""
                        }`}
                      >
                        <HiChevronDown />
                      </span>
                    </div>
                  )}
                  {!(userData !== undefined) && (
                    <div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Skeleton circle width={40} height={40} />
                        </div>
                        <div>
                          <Skeleton width={120} height={20} />
                        </div>
                      </div>
                    </div>
                  )}
                  <DashboardMenu active={UserMenu} />
                </div>
              </div>
            </div>
            <div className="lg:hidden flex items-center gap-2">
              <ul className="flex items-center space-x-6 !mr-2">
                <li className="relative !p-1 grid items-center">
                  <button
                    className={`text-themeDark relative hover:text-themePrimary ${
                      notification ? "!text-themePrimary" : ""
                    }`}
                    onClick={() => setNotification(!notification)}
                  >
                    {newNotification && (
                      <span className="w-2 h-2 absolute -top-1 -right-0.5 rounded-full bg-red-400" />
                    )}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  {windowWidth >= 640 && (
                    <NotificationMenu active={notification} />
                  )}
                </li>
              </ul>
              <div>
                <div className="relative">
                  {userData && (
                    <div
                      className="flex items-center text-center cursor-pointer"
                      onClick={UserMenuHandler}
                    >
                      <div className="mr-3 pl-3 border-l border-l-themeLighter flex items-center">
                        {userData?.avatar && (
                          <Image
                            className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                            src={userData?.avatar}
                            alt="User image"
                            width={50}
                            height={50}
                          />
                        )}
                        {!userData?.avatar && (
                          <Image
                            className="rounded-full object-cover object-right p-1 border border-solid border-gray-500"
                            src="https://res.cloudinary.com/dyor9qtzh/image/upload/v1646289332/Meta-jobs/user_biyxrq.png"
                            alt="User image"
                            width={50}
                            height={50}
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-sm leading-8">
                          {userData?.fullName?.firstName}
                        </p>
                      </div>
                      <span
                        className={`ml-2 transition duration-200 ease-in-out ${
                          UserMenu ? "rotate-180" : ""
                        }`}
                      >
                        <HiChevronDown />
                      </span>
                    </div>
                  )}
                  {!(userData !== undefined) && (
                    <div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Skeleton circle width={48} height={48} />
                        </div>
                        <div>
                          <Skeleton width={120} height={20} />
                        </div>
                      </div>
                    </div>
                  )}
                  <DashboardMenu active={UserMenu} />
                </div>
              </div>
              <button className="flex items-center" onClick={handleShow}>
                <svg
                  className="text-white bg-themePrimary block h-8 w-8 p-2 rounded"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <MobileMenuWrapper className={show ? "show" : "hide"}>
        <MobileMenu className={show ? "show" : "hide"}>
          <MobileMenuHeader>
            <CloseIcon>
              <MdClose onClick={handleClose} />
            </CloseIcon>
          </MobileMenuHeader>
          <MobileMenuBody>
            <div>
              <ul>
                {Menu.map((item, index) => (
                  <li key={index} className="border-b">
                    <Link
                      href="/"
                      className="block rounded w-full px-4 py-2 text-base text-themeDark hover:text-white hover:bg-themePrimary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </MobileMenuBody>
        </MobileMenu>
        <OverlayContainer
          className={show ? "show" : "hide"}
          onClick={handleClose}
        />
      </MobileMenuWrapper>

      {/* mobile notification component */}
      <MobileMenuWrapper
        className={`${notification ? "show" : "hide"} sm:hidden`}
      >
        <MobileMenu className={notification ? "show" : "hide"}>
          <MobileMenuHeader>
            <CloseIcon>
              <MdClose onClick={() => setNotification(!notification)} />
            </CloseIcon>
          </MobileMenuHeader>
          <MobileMenuBody>
            <div className="!p-4">
              {/* center loader */}
              {!recentNotification && !recentNotificationError && (
                <div className="flex py-7 justify-center items-center h-full">
                  <div
                    className="spinner-border w-7 h-7 text-themePrimary"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {/* error */}
              {recentNotificationError && (
                <div className="flex py-7 justify-center items-center h-full">
                  <div className="text-center">
                    <p className="text-sm text-themeLighterAlt">
                      Something went wrong. Please try again later.
                    </p>
                  </div>
                </div>
              )}
              {/* data */}
              {recentNotification && (
                <>
                  {_.map(recentNotification, (notify, index) => (
                    <div
                      className="flex justify-between gap-3 !py-2 border-b cursor-pointer border-themeLighter"
                      onMouseEnter={() => notificationSeenHandler(notify._id)}
                    >
                      <div>
                        <p className="text-sm text-themeDarker inline-block relative">
                          {notify.event}
                          {_.lowerCase(notify.status) === "unread" && (
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full absolute top-0 -right-3" />
                          )}
                        </p>
                        <p className="text-sm text-themeLight">
                          {notify.message}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-themeLight">
                          {/* <Moment fromNow>{notify.timestamp}</Moment> */}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between gap-3 !pt-3">
                    <div>
                      <p className="text-sm text-text-themeDarker">
                        {recentNotification.length} new notifications
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-text-themeDarker">
                        <Link
                          href="/notifications"
                          className="text-themePrimary hover:text-themeLighterAlt"
                        >
                          View all
                        </Link>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </MobileMenuBody>
        </MobileMenu>
        <OverlayContainer
          className={notification ? "show" : "hide"}
          onClick={() => setNotification(!notification)}
        />
      </MobileMenuWrapper>

      <DashboardMenuOverlay
        className={UserMenu ? "active" : ""}
        onClick={UserMenuHandler}
      />
      <NotificationMenuOverlay
        className={notification ? "active" : ""}
        onClick={() => setNotification(!notification)}
      />
    </>
  );
};

// on mouse enter notification seen handler
const notificationSeenHandler = async (id: any) => {
  // update notification
  try {
    await authAxios({
      method: "PUT",
      url: `/notifications/recent/catalog/${id}`,
      data: {
        status: "READ",
      },
    }).then((res) => {
      //   mutate("/notifications/recent/catalog");
    });
  } catch (error: any) {
    console.error(error);
  }
};

function DashboardMenu({ active }: { active: any }) {
  const { logOutHandler } = React.useContext(ThemeContext) as any;
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
                onClick={logOutHandler}
                className="block text-left rounded w-full duration-300 ease-in-out py-2 text-base text-themeDarker hover:text-red-400"
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

function NotificationMenu({ active }: { active: any }) {
  const { recentNotification, recentNotificationError } = React.useContext(
    ThemeContext
  ) as any;
  return (
    <>
      <NotificationMenuWrapper
        className={`${
          active ? "active" : ""
        } bg-themeLighterAlt text-white absolute`}
      >
        <NotificationList className="!p-4">
          {/* center loader */}
          {!recentNotification && !recentNotificationError && (
            <div className="flex py-7 justify-center items-center h-full">
              <div
                className="spinner-border w-7 h-7 text-themePrimary"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {/* error */}
          {recentNotificationError && (
            <div className="flex py-7 justify-center items-center h-full">
              <div className="text-center">
                <p className="text-sm text-themeDarker">
                  Something went wrong. Please try again later.
                </p>
              </div>
            </div>
          )}
          {/* data */}
          {recentNotification && (
            <>
              {_.map(recentNotification, (notify, index) => (
                <div
                  className="flex justify-between gap-3 !py-2 border-b cursor-pointer border-themeDarkAlt"
                  onMouseEnter={() =>
                    _.lowerCase(notify.status) === "unread" &&
                    notificationSeenHandler(notify._id)
                  }
                >
                  <div>
                    <p className="text-sm text-themeDarker inline-block relative">
                      {notify.event}
                      {_.lowerCase(notify.status) === "unread" && (
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full absolute top-0 -right-3" />
                      )}
                    </p>
                    <p className="text-sm text-themeLighter">
                      {notify.message}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-themeLight">
                      {/* <Moment fromNow>{notify.timestamp}</Moment> */}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between gap-3 !pt-3">
                <div>
                  <p className="text-sm text-themeDarker">
                    {recentNotification.length} new notifications
                  </p>
                </div>
                <div>
                  <p className="text-sm text-themeDarker">
                    <Link
                      href="/notifications"
                      className="text-themePrimary hover:text-themeDarker"
                    >
                      View all
                    </Link>
                  </p>
                </div>
              </div>
            </>
          )}
        </NotificationList>
      </NotificationMenuWrapper>
    </>
  );
}

export default Header;

const MobileMenuWrapper = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: -100%;
  z-index: 100;
  transition: all ease-in-out 0.5s;
  &.show {
    right: 0;
  }
`;
const MobileMenu = styled("div")`
  position: absolute;
  top: 0;
  overflow: auto;
  right: -100%;
  max-width: 400px;
  width: 100%;
  height: 100%;
  padding: 15px;
  background: #fff;
  z-index: 110;
  transition: all ease-in-out 0.5s;
  &.show {
    right: 0;
  }
`;
const MobileMenuHeader = styled("div")`
  height: 40px;
`;
const MobileMenuBody = styled("div")``;
const CloseIcon = styled("div")`
  cursor: pointer;
  position: absolute;
  left: 20px;
  & svg {
    width: 30px;
    height: 30px;
    color: #000;
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
  right: -100%;
  transition: all ease-in-out 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &.show {
    right: 0;
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
  right: -15px;
  text-align: left;
  z-index: 999;
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
  z-index: 9;
  top: 0;
  opacity: 0;
  transform: scale(0);
  &.active {
    opacity: 1;
    transform: scale(1);
  }
`;
const NotificationMenuWrapper = styled("div")`
  top: calc(100% - 8px);
  width: 400px;
  right: -5px;
  border-radius: 3px;
  box-shadow: 0px 0 8px 0px rgb(0 0 0 / 10%);
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 12%);
  padding: 0;
  top: 150%;
  right: -150%;
  text-align: left;
  z-index: 999;
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
    right: 50px;
    top: -6px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid rgb(247 248 250);
    transition: border-color 0.3s;
  }
`;
const NotificationList = styled("div")`
  max-height: 400px;
  height: 100%;
  overflow-y: auto;
`;
const NotificationMenuOverlay = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9;
  top: 0;
  opacity: 0;
  transform: scale(0);
  &.active {
    opacity: 1;
    transform: scale(1);
  }
`;
