import _ from "lodash";
import Link from "next/link";
import React from "react";
import { BsBuilding } from "react-icons/bs";
import {
  FiAlertCircle,
  FiBookOpen,
  FiFilter,
  FiMail,
  FiPackage,
  FiPlus,
  FiSettings,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import { ThemeContext } from "../../../context/ThemeContext";
import { usePathname } from "next/navigation";

const candidatesMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <Dashboard />,
    alert: "",
    image: "./assets/img/nav-img-1.svg",
  },
  {
    name: "Job Alerts",
    link: "/find-job/job-alerts",
    icon: <Alerts />,
    alert: "",
    image: "./assets/img/nav-img-4.svg",
  },
  {
    name: "Applications",
    link: "/find-job/applications",
    icon: <ApplicationIcon />,
    alert: "",
    image: "./assets/img/nav-img-5.svg",
  },
  {
    name: "Manages Resumes",
    link: "/resume/manages-resumes",
    icon: <ManagesResumeIcon />,
    alert: "",
    image: "./assets/img/nav-img-5.svg",
  },
  {
    name: "Add Resume",
    link: "/resume/add-resume",
    icon: <AddIcon />,
    alert: "",
    image: "./assets/img/nav-img-6.svg",
  },
  {
    name: "My Profile",
    link: "/my-profile",
    icon: <Profile />,
    alert: "",
    image: "./assets/img/nav-img-7.svg",
  },
];
const employerMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <Dashboard />,
    alert: "",
    image: "./assets/img/nav-img-1.svg",
  },
  {
    name: "Manages Jobs",
    link: "/find-job/manages-jobs",
    icon: <ManagesJobIcon />,
    alert: "",
    image: "./assets/img/nav-img-4.svg",
  },
  {
    name: "Submit Job",
    link: "/find-job/submit-job",
    icon: <AddIcon />,
    alert: "",
    image: "./assets/img/nav-img-5.svg",
  },
  {
    name: "Manages Companies",
    link: "/company/manages-companies",
    icon: <ManagesCompanyIcon />,
    alert: "",
    image: "./assets/img/nav-img-6.svg",
  },
  {
    name: "Add Company",
    link: "/company/add-company",
    icon: <AddIcon />,
    alert: "",
    image: "./assets/img/nav-img-6.svg",
  },
  {
    name: "My Profile",
    link: "/my-profile",
    icon: <Profile />,
    alert: "",
    image: "./assets/img/nav-img-7.svg",
  },
];
const adminMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <Dashboard />,
    alert: "",
    image: "./assets/img/nav-img-1.svg",
  },
  {
    name: "Manages Jobs",
    link: "/find-job/manages-jobs",
    icon: <ManagesJobIcon />,
    alert: "",
    image: "./assets/img/nav-img-4.svg",
    submenu: [
      {
        name: "Submit Job",
        link: "/find-job/submit-job",
        icon: <AddIcon />,
        alert: "",
        image: "./assets/img/nav-img-5.svg",
      },
      {
        name: "Applications",
        link: "/find-job/applications",
        icon: <ApplicationIcon />,
        alert: "",
        image: "./assets/img/nav-img-5.svg",
      },
      {
        name: "Job Alerts",
        link: "/find-job/job-alerts",
        icon: <AlertIcon />,
        alert: "",
        image: "./assets/img/nav-img-6.svg",
      },
      {
        name: "Category",
        link: "/find-job/category",
        icon: <CategoryIcon />,
        alert: "",
        image: "./assets/img/nav-img-6.svg",
      },
    ],
  },
  {
    name: "Manages Companies",
    link: "/company/manages-companies",
    icon: <ManagesCompanyIcon />,
    alert: "",
    image: "./assets/img/nav-img-6.svg",
    submenu: [
      {
        name: "Add Companies",
        link: "/company/add-company",
        icon: <AddIcon />,
        alert: "",
        image: "./assets/img/nav-img-6.svg",
      },
    ],
  },
  {
    name: "Manages Resumes",
    link: "/resume/manages-resumes",
    icon: <ManagesResumeIcon />,
    alert: "",
    image: "./assets/img/nav-img-5.svg",
    submenu: [
      {
        name: "Add Resumes",
        link: "/resume/add-resume",
        icon: <AddIcon />,
        alert: "",
        image: "./assets/img/nav-img-6.svg",
      },
    ],
  },
  {
    name: "My Profile",
    link: "/my-profile",
    icon: <Profile />,
    alert: "",
    image: "./assets/img/nav-img-7.svg",
  },
];

const SideNav = ({ data }: { data: any }) => {
  const { isSideNavOpen, setIsSideNavOpen, logOutHandler } = React.useContext(
    ThemeContext
  ) as any;
  const pathName = usePathname();
  let path = pathName.split("/");
  path = path[path.length - 1] as any;

  const sideNavMenuHandler = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
  console.log("isSideNavOpen: ", isSideNavOpen);

  return (
    <>
      <div
        className={`${
          isSideNavOpen ? "block" : "hidden"
        } lg:block navbar-menu relative z-50`}
      >
        <div
          className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-20"
          onClick={sideNavMenuHandler}
        ></div>
        <nav className="fixed top-16 xl:top-20 left-0 bottom-0 flex flex-col w-24 xl:w-80 pt-6 pb-3 bg-white shadow overflow-y-auto">
          <div>
            <ul className="text-sm">
              {/* {!data && (
                <>
                  {_.map(
                    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    (item, key) => (
                      <li key={key} className="p-3 mb-2">
                        <Skeleton count={1} height="20px" />
                      </li>
                    )
                  )}
                </>
              )} */}
              {data?.role?.isCandidate &&
                candidatesMenu.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.link}
                      className={`${
                        pathName === (menu.link as any)
                          ? "bg-themePrimary text-white"
                          : "hover:bg-themePrimary hover:!text-white"
                      } relative mx-auto flex duration-300 ease-in-out gap-3 group items-center xl:w-full w-14 h-14 xl:h-auto xl:py-4 xl:px-7 mb-2 xl:justify-start justify-center text-gray-500 rounded-full xl:rounded-none`}
                    >
                      {menu.icon}
                      <span
                        data-config-id="link7"
                        className={`hidden xl:block text-xxs font-normal`}
                      >
                        {menu.name}
                      </span>
                      {menu.alert !== "" && (
                        <span
                          className={`${
                            pathName === (menu.link as any)
                              ? "bg-red-400 text-white"
                              : "bg-themePrimary text-white"
                          } flex justify-center items-center group-hover:bg-red-400 text-xsss xl:static absolute top-0 right-1 rounded-full w-4 h-4`}
                        >
                          {menu.alert}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              {employerMenu.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.link}
                    className={`${
                      pathName === (menu.link as any)
                        ? "bg-themePrimary text-white"
                        : "hover:bg-themePrimary hover:!text-white"
                    } relative mx-auto flex duration-300 ease-in-out gap-3 group items-center xl:w-full w-14 h-14 xl:h-auto xl:py-4 xl:px-7 mb-2 xl:justify-start justify-center text-gray-500 rounded-full xl:rounded-none`}
                  >
                    {menu.icon}
                    <span
                      data-config-id="link7"
                      className={`hidden xl:block text-xxs font-normal`}
                    >
                      {menu.name}
                    </span>
                    {menu.alert !== "" && (
                      <span
                        className={`${
                          pathName === (menu.link as any)
                            ? "bg-red-400 text-white"
                            : "bg-themePrimary text-white"
                        } flex justify-center items-center group-hover:bg-red-400 text-xsss xl:static absolute top-0 right-1 rounded-full w-4 h-4`}
                      >
                        {menu.alert}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              {data?.role?.isAdmin &&
                adminMenu.map((menu, index) => {
                  return (
                    <li key={index} className={"mb-2 group"}>
                      {menu?.submenu ? (
                        <>
                          <Dropdown menu={menu} pathName={pathName} />
                        </>
                      ) : (
                        <Link
                          href={menu.link}
                          className={`mb-2 ${
                            pathName === (menu.link as any)
                              ? "bg-themePrimary text-white"
                              : "hover:bg-themePrimary hover:!text-white"
                          } relative mx-auto flex duration-300 ease-in-out gap-3 group items-center xl:w-full w-14 h-14 xl:h-auto xl:py-4 xl:px-7 xl:justify-start justify-center text-gray-500 rounded-full xl:rounded-none`}
                        >
                          {menu.icon}
                          <span
                            data-config-id="link7"
                            className={`hidden xl:block text-xxs font-normal`}
                          >
                            {menu.name}
                          </span>
                          {menu.alert !== "" && (
                            <span
                              className={`${
                                pathName === (menu.link as any)
                                  ? "bg-red-400 text-white"
                                  : "bg-themePrimary text-white"
                              } flex justify-center items-center group-hover:bg-red-400 text-xsss xl:static absolute top-0 right-1 rounded-full w-4 h-4`}
                            >
                              {menu.alert}
                            </span>
                          )}
                        </Link>
                      )}
                    </li>
                  );
                })}
              {data && (
                <li>
                  <button
                    onClick={logOutHandler}
                    className="flex duration-300 ease-in-out mx-auto justify-center items-center xl:w-full w-14 h-14 xl:h-auto xl:py-4 xl:px-7 xl:justify-start text-gray-500 hover:!text-white hover:bg-red-500 rounded-full xl:rounded-none"
                  >
                    <Logout />
                    <span
                      data-config-id="link12"
                      className="hidden xl:block ml-4 font-normal text-xxs"
                    >
                      Log Out
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

const Dropdown = ({ menu, pathName }: { menu: any; pathName: any }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    for (let i = 0; i < menu.submenu.length; i++) {
      if (pathName === menu.submenu[i].link) {
        setShow(true);
      }
    }
  }, [pathName, menu]);

  const OnClickHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className={`${
          show || pathName === menu.link
            ? "bg-themePrimary text-white"
            : "hover:bg-themePrimary hover:!text-white"
        } flex justify-between items-center duration-300 ease-in-out`}
      >
        <Link
          href={menu.link}
          className={`${
            pathName === menu.link ? "text-white" : "hover:!text-white"
          } relative mx-auto flex gap-3 group items-center xl:w-full w-14 h-14 xl:h-auto xl:py-4 xl:px-7 xl:justify-start justify-center text-gray-500 rounded-full xl:rounded-none`}
        >
          {menu.icon}
          <span
            data-config-id="link7"
            className={`hidden xl:block text-xxs font-normal`}
          >
            {menu.name}
          </span>
          {menu.alert !== "" && (
            <span
              className={`${
                pathName === menu.link || show
                  ? "bg-red-400 text-white"
                  : "bg-themePrimary text-white"
              } flex justify-center items-center group-hover:bg-red-400 text-xsss xl:static absolute top-0 right-1 rounded-full w-4 h-4`}
            >
              {menu.alert}
            </span>
          )}
        </Link>
        <button type="button" onClick={OnClickHandler} className="p-2.5">
          <RiArrowDownSLine
            className={`text-xxs text-themeDark duration-300 ease-in-out ${
              (show && menu?.submenu) || pathName === menu.link
                ? "rotate-180"
                : ""
            }`}
          />
        </button>
      </div>
      {((show && menu?.submenu) || pathName === menu.link) && (
        <ul id="dropdown">
          {_.map(menu?.submenu, (submenu, index) => (
            <li key={index}>
              <Link
                href={submenu.link}
                className={`${
                  pathName === submenu.link
                    ? "!text-themePrimary"
                    : "hover:!text-themePrimary"
                } relative mx-auto flex text-themeDark duration-300 ease-in-out bg-green-100 gap-3 group items-center xl:w-full w-14 h-14 xl:h-auto xl:py-4 xl:px-7 xl:justify-start justify-center text-gray-500 rounded-full xl:rounded-none`}
              >
                {submenu.icon}
                <span
                  data-config-id="link7"
                  className={`hidden xl:block text-xs font-normal`}
                >
                  {submenu.name}
                </span>
                {submenu.alert !== "" && (
                  <span
                    className={`${
                      pathName === submenu.link
                        ? "bg-red-400 text-white"
                        : "bg-themePrimary text-white"
                    } flex justify-center items-center group-hover:bg-red-400 text-xsss xl:static absolute top-0 right-1 rounded-full w-4 h-4`}
                  >
                    {submenu.alert}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

function Dashboard() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18V8H18V18H10ZM0 10V0H8V10H0ZM6 8V2H2V8H6ZM0 18V12H8V18H0ZM2 16H6V14H2V16ZM12 16H16V10H12V16ZM10 0H18V6H10V0ZM12 2V4H16V2H12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Bookmarks() {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Alerts() {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15H20V17H0V15H2V8C2 5.87827 2.84285 3.84344 4.34315 2.34315C5.84344 0.842855 7.87827 0 10 0C12.1217 0 14.1566 0.842855 15.6569 2.34315C17.1571 3.84344 18 5.87827 18 8V15ZM16 15V8C16 6.4087 15.3679 4.88258 14.2426 3.75736C13.1174 2.63214 11.5913 2 10 2C8.4087 2 6.88258 2.63214 5.75736 3.75736C4.63214 4.88258 4 6.4087 4 8V15H16ZM7 19H13V21H7V19Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Messages() {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 20.5L10.2 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V5.103C4 4.83778 4.10536 4.58343 4.29289 4.39589C4.48043 4.20836 4.73478 4.103 5 4.103H21C21.2652 4.103 21.5196 4.20836 21.7071 4.39589C21.8946 4.58343 22 4.83778 22 5.103V16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H15.8L13 20.5ZM14.839 15H20V6.103H6V15H11.161L13 17.298L14.839 15ZM1 0H18V2H2V13H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Profile() {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99955 15C12.6616 15 15.8646 16.575 17.6066 18.925L15.7646 19.796C14.3466 18.116 11.8466 17 8.99955 17C6.15255 17 3.65255 18.116 2.23455 19.796L0.393555 18.924C2.13555 16.574 5.33755 15 8.99955 15ZM8.99955 0C10.3256 0 11.5974 0.526784 12.5351 1.46447C13.4728 2.40215 13.9996 3.67392 13.9996 5V8C13.9995 9.28846 13.502 10.5272 12.6109 11.4578C11.7198 12.3884 10.5038 12.9391 9.21655 12.995L8.99955 13C7.67347 13 6.4017 12.4732 5.46402 11.5355C4.52634 10.5979 3.99955 9.32608 3.99955 8V5C3.99963 3.71154 4.4971 2.47284 5.38821 1.54222C6.27933 0.611607 7.49531 0.0609194 8.78255 0.00500011L8.99955 0ZM8.99955 2C8.23434 1.99996 7.49804 2.29233 6.94129 2.81728C6.38455 3.34224 6.04945 4.06011 6.00455 4.824L5.99955 5V8C5.9988 8.7809 6.30257 9.53133 6.84633 10.0918C7.39008 10.6523 8.13095 10.9787 8.91152 11.0016C9.69209 11.0245 10.4508 10.7422 11.0265 10.2145C11.6022 9.68691 11.9495 8.9556 11.9946 8.176L11.9996 8V5C11.9996 4.20435 11.6835 3.44129 11.1209 2.87868C10.5583 2.31607 9.7952 2 8.99955 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Logout() {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V4H14V2H2V18H14V16H16V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H1ZM14 14V11H7V9H14V6L19 10L14 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Resume() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 0C17.552 0 18 0.448 18 1V4.757L16 6.757V2H2V18H16V15.242L18 13.242V19C18 19.552 17.552 20 17 20H1C0.448 20 0 19.552 0 19V1C0 0.448 0.448 0 1 0H17ZM18.778 6.808L20.192 8.222L12.414 16L10.998 15.998L11 14.586L18.778 6.808ZM10 10V12H5V10H10ZM13 6V8H5V6H13Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ApplicationIcon() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 21 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 0C17.552 0 18 0.448 18 1V4.757L16 6.757V2H2V18H16V15.242L18 13.242V19C18 19.552 17.552 20 17 20H1C0.448 20 0 19.552 0 19V1C0 0.448 0.448 0 1 0H17ZM18.778 6.808L20.192 8.222L12.414 16L10.998 15.998L11 14.586L18.778 6.808ZM10 10V12H5V10H10ZM13 6V8H5V6H13Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Packages() {
  return <FiPackage className="text-lg2 xl:text-xs" />;
}

function AddIcon() {
  return <FiPlus className="text-lg2 xl:text-xs" />;
}

function EmailIcon() {
  return <FiMail className="text-lg2 xl:text-xs" />;
}

function FilterIcon() {
  return <FiFilter className="text-lg2 xl:text-xs" />;
}

function AlertIcon() {
  return <FiAlertCircle className="text-lg2 xl:text-xs" />;
}

function CategoryIcon() {
  return <FiTag className="text-lg2 xl:text-xs" />;
}

function SettingIcon() {
  return <FiSettings className="text-lg2" />;
}

function ManagesJobIcon() {
  return <FiBookOpen className="text-lg2" />;
}

function ManagesResumeIcon() {
  return <FiUsers className="text-lg2" />;
}

function ManagesCompanyIcon() {
  return <BsBuilding className="text-lg2" />;
}

export default SideNav;
