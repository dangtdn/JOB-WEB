import _ from "lodash";
import Link from "next/link";
import React from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import Moment from "react-moment";
import { Axios, authAxios } from "../../../lib/utils/axiosKits";
import { ThemeContext } from "../../../context/ThemeContext";

// create fetcher with authaxios
const fetcher = (url: string) => Axios(url).then((res) => res.data.data);
const activitiesAPI = "/users/notifications/catalog";

const RecentActivities = () => {
  // const { data, error } = useSWR(activitiesAPI, fetcher);
  const { recentNotification, recentNotificationError } = React.useContext(
    ThemeContext
  ) as any;

  if (!recentNotification) {
    return (
      <div>
        <div className="shadow p-4 rounded h-full">
          <div className="pb-3 border-b border-themeLight mb-3">
            <h2 className="text-lg2 font-semibold">Recent Activities</h2>
          </div>
        </div>
      </div>
    );
  }
  // if error
  if (recentNotificationError) {
    return <div>failed to load</div>;
  }
  // if data

  return (
    <div className="shadow p-4 rounded h-full">
      <div className="pb-3 border-b border-themeLight mb-3">
        <h2 className="text-lg2 font-semibold">Recent Activities</h2>
      </div>
      <div>
        {recentNotification &&
          _.map(recentNotification, (notify, index) => (
            <div
              className="flex flex-wrap justify-between !p-2 !mb-2"
              key={index}
            >
              <div className="flex items-center gap-3 lg:gap-4">
                <div>
                  <div className="flex w-12 h-12 justify-center items-center rounded-full bg-[#21b75d2a]">
                    <HiOutlineCurrencyDollar className="text-lg2 text-themePrimary " />
                  </div>
                </div>
                <div>
                  <p className="text-sm sm:text-xs break-all text-themeDarker">
                    {notify.event}
                  </p>
                  <p className="text-sm text-themeLighter">{notify.message}</p>
                  <span className="block sm:hidden text-sm text-themeLight">
                    {/* <Moment fromNow>{notify.timestamp}</Moment> */}
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-sm text-themeLight">
                  {/* <Moment fromNow>{notify.timestamp}</Moment> */}
                </span>
              </div>
            </div>
          ))}
        <div className=" flex items-center justify-between w-full !pt-4 border-t border-themeLighter !mt-2">
          <div>
            <p className="text-xs !pl-2 text-themeDarker">
              {recentNotification.length} Recent Activities
            </p>
          </div>
          <Link
            href="/notifications"
            className="text-sm text-white transition-all duration-300 ease-in-out bg-themePrimary hover:bg-themeDarkerAlt !py-3 px-8 rounded"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
