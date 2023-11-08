"use client";

import { pathNameNavBar } from "@/constants/appConstants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const currentPathName = pathName.split("/")[1];
  console.log("currentPathName: ", pathName.split("/"));

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
            width={50}
            height={50}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MetaJob
          </span>
        </Link>
        <div className="flex md:order-2 gap-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign In
          </button>
          <button
            type="button"
            className="text-black bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-slate-400 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:slate-400 dark:hover:slate-400 dark:focus:ring-slate-400"
          >
            Sign Up
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li
              className={`py-3 md:hover:border-b-2 border-blue-700 ${
                pathNameNavBar.home === currentPathName
                  ? "border-b-2 border-blue-700"
                  : ""
              }`}
            >
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 md:bg-transparent md:p-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathNameNavBar.home === currentPathName
                    ? "md:text-blue-700"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li
              className={`py-3 md:hover:border-b-2 border-blue-700 ${
                pathNameNavBar.findJob === currentPathName
                  ? "border-b-2 border-blue-700"
                  : ""
              }`}
            >
              <Link
                href="find-job"
                className={`block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 md:bg-transparent md:p-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathNameNavBar.findJob === currentPathName
                    ? "md:text-blue-700"
                    : ""
                }`}
              >
                Find jobs
              </Link>
            </li>
            <li
              className={`py-3 md:hover:border-b-2 border-blue-700 ${
                pathNameNavBar.company === currentPathName
                  ? "border-b-2 border-blue-700"
                  : ""
              }`}
            >
              <Link
                href="company"
                className={`block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 md:bg-transparent md:p-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathNameNavBar.company === currentPathName
                    ? "md:text-blue-700"
                    : ""
                }`}
              >
                Company
              </Link>
            </li>
            <li
              className={`py-3 md:hover:border-b-2 border-blue-700 ${
                pathNameNavBar.contact === currentPathName
                  ? "border-b-2 border-blue-700"
                  : ""
              }`}
            >
              <Link
                href="contact"
                className={`block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 md:bg-transparent md:p-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathNameNavBar.contact === currentPathName
                    ? "md:text-blue-700"
                    : ""
                }`}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
