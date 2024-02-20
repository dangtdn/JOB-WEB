import React from "react";
import { authAxios } from "../../../lib/utils/axiosKits";
import useUser from "@/lib/auth/user";
import { jobs } from "@/data/mongodb collections/jobs";
import { untitled } from "@/data/mongodb collections/Untitled";
import { resumes } from "@/data/mongodb collections/resumes";
import { jobApplies } from "@/data/mongodb collections/jobapplies";
import { companies } from "@/data/mongodb collections/companies";
import { toast } from "react-toastify";
import useSWR from "swr";

const fetcher = (url: string) => authAxios(url).then((res) => res.data);
const dashboardStatic = "/users/statistics";

const UserInfoBox = (): any => {
  // Use SWR
  const { data, error } = useSWR("/user/statistics", fetcher);
  const { user, isAdmin, isEmployer, isCandidate } = useUser();
  const dataJobs = [...jobs];
  console.log("data: ", data);
  // total job count for Employees
  const totalJobCount = dataJobs.filter(
    (job) => job?._id?.$oid === user?._id
  ).length;
  // count the total isFeatured jobs for Employee
  const featuredJobCount = dataJobs.filter(
    (job) => job.status.isFeatured
  ).length;
  // count total isPublished jobs for admin from job  model
  const totalPublishedJobCount = dataJobs.filter(
    (job) => job.status.isPublished
  ).length;
  // count total isApproved jobs from job  model
  const approvedJobCount = dataJobs.filter(
    (job) => job.status.isApproved
  ).length;
  // total employer count for admin
  const totalEmployerCount = untitled.filter(
    (user) => user.role.isEmployer
  ).length;
  // total resume count for a candidate
  const totalResumeCount = resumes.filter(
    (resume) => resume?.user?.$oid === user?._id
  ).length;
  //total isApproved resume count for a candidate
  const approvedResumeCount = resumes.filter(
    (resume) => resume.status.isApproved
  ).length;
  //total published resume count for admin
  const totalPublishedResumeCount = resumes.filter(
    (resume) => resume.status.isPublished
  ).length;
  //total resume count
  const activeResumeCount = resumes.filter(
    (resume) => resume.status.isActive
  ).length;
  const appliedJobCount = jobApplies.filter(
    (jobApplie) => jobApplie?.user?.$oid === user?._id
  ).length;
  const publishedCompanyCount = companies.filter(
    (company) => company.status.isPublished
  ).length;

  const getDashboardStat = () => {
    if (isAdmin) {
      return [
        {
          title: "Total Jobs",
          count: totalPublishedJobCount,
        },
        {
          title: "Total Resumes",
          count: totalPublishedResumeCount,
        },
        {
          title: "Total Employees",
          count: totalEmployerCount,
        },
        {
          title: "Total Companies",
          count: publishedCompanyCount,
        },
      ];
    } else if (isEmployer) {
      return [
        {
          title: "Total Jobs",
          count: totalJobCount,
        },
        {
          title: "Featured Jobs",
          count: featuredJobCount,
        },
        {
          title: "Approved Jobs",
          count: approvedJobCount,
        },
        // {
        //   title: "Bookmarked",
        //   count: bookmarkCount,
        // },
      ];
    } else if (isCandidate) {
      return [
        {
          title: "Total Resumes",
          count: totalResumeCount,
        },
        {
          title: "Approved Resumes",
          count: approvedResumeCount,
        },
        // {
        //   title: "Bookmarked",
        //   count: bookmarkCount,
        // },
        {
          title: "Applied Jobs",
          count: appliedJobCount,
        },
      ];
    } else {
      return [];
    }
  };

  // if (error) return 'An error has occurred.'
  if (!getDashboardStat().length)
    return (
      <section className="mb-8">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="shadow py-4 px-3 bg-[#FB8B2F] text-white rounded-lg text-center">
              <p className="font-normal text-lg mb-3">Total Jobs</p>
              <h2 className="text-5xl font-semibold">00</h2>
            </div>

            <div className="shadow py-4 px-3 bg-[#1CAF57] text-white rounded-lg text-center">
              <p className="font-normal text-lg mb-3">Total Resumes</p>
              <h2 className="text-5xl font-semibold">00</h2>
            </div>
            <div className="shadow py-4 px-3 bg-[#3CC6FC] text-white rounded-lg text-center">
              <p className="font-normal text-lg mb-3">Total Employe</p>
              <h2 className="text-5xl font-semibold">00</h2>
            </div>
            <div className="shadow py-4 px-3 bg-[#4F6BF1] text-white rounded-lg text-center">
              <p className="font-normal text-lg mb-3">Total Companies</p>
              <h2 className="text-5xl font-semibold">00</h2>
            </div>
          </div>
        </div>
      </section>
    );
  return (
    <section className="mb-8">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2   gap-4">
          {getDashboardStat().map((item: any, index: number) => (
            <div
              key={index}
              className={`shadow py-4 px-3 ${
                item.title === "Applied Jobs" || item.title === "Total Jobs"
                  ? "bg-[#FB8B2F]"
                  : item.title === "Favorite Jobs" ||
                    item.title === "Total Resumes" ||
                    item.title === "Featured Jobs"
                  ? "bg-[#1CAF57]"
                  : item.title === "Job Alerts" ||
                    item.title === "Total Employee" ||
                    item.title === "Published Jobs"
                  ? "bg-[#3CC6FC]"
                  : item.title === "Resumes Views" ||
                    item.title === "Total Companies"
                  ? "bg-[#4F6BF1]"
                  : "bg-[#4F6BF1]"
              } text-white rounded-lg text-center`}
            >
              <p className="font-normal text-lg mb-3">{item.title}</p>
              <h2 className="text-5xl font-semibold">{item.count}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserInfoBox;
