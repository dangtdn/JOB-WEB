"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/page-title";
import { jobs } from "@/utils/dummy-content/mongodb-collections/jobs";
import { JobsFilter } from "@/components/filter/search-filter";
import SortBy from "@/components/filter/data-sort-by";
import ImageOpt from "@/components/optimize/image";
import Pagination from "@/components/pagination";
import { jobFilter } from "@/utils/dummy-content/mongodb-collections/jobfilters";
import JobItem from "@/components/Job/JobItem";
import { Axios } from "@/lib/utils/axiosKits";
import useSWR from "swr";
import _ from "lodash";
import { Loader } from "@/lib/loader/loader";

const fetcher = (url: string) => Axios(url).then((res) => res.data);

export default function FindJob() {
  const [jobTypes, setJobTypes] = useState<{ types: string; count: number }[]>(
    []
  );
  const [jobExperience, setJobExperience] = useState<
    { value: string; count: number }[]
  >([]);

  // get current pages
  const [currentPage, setCurrentPage] = useState(0);
  const [jobsPerPage] = useState(9);
  const [allJobs, setAllJobs] = useState<{
    totalJobCount: number;
    jobs: any[];
  }>({
    totalJobCount: 0,
    jobs: [],
  });
  const [jobFilter, setJobFilter] = useState<any[]>([]);
  // const data = { data: jobs, loading: false };

  // call SWR
  const jobAPI = "/jobs";
  const { data, error } = useSWR(jobAPI, fetcher, {
    fallbackData: {
      jobs: [
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
        {
          id: 1,
          img: "./assets/img/loader/job_loader.svg",
        },
      ],
      filter: {
        jobTypes: jobTypes,
        jobExperience: jobExperience,
      },
      totalJobCount: allJobs?.totalJobCount || 0,
      loading: true,
    },
  });
  console.log("jobs: ", data);
  useEffect(() => {
    if (data.success) {
      const filter = {
        jobTypes: (
          data?.jobs?.map((item: any) => item.jobTypes) as string[][]
        ).reduce((arr, item) => (arr = [...arr, ...item]), []),
        jobExperience: data?.jobs?.map(
          (item: any) => item.jobExperience
        ) as string[],
      };
      const filterJobTypes = filter?.jobTypes.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      const filterJobExperience = filter?.jobExperience.filter(
        (value, index, self) => {
          return self.indexOf(value) === index;
        }
      );

      setJobTypes(
        filterJobTypes.map((type) => ({
          types: type,
          count: data?.jobs?.filter((job: any) =>
            job.jobTypes.includes(type.trim())
          ).length,
        }))
      );
      setJobExperience(
        filterJobExperience
          .filter((value) => value)
          .map((experience) => ({
            value: experience,
            count: data?.jobs?.filter(
              (job: any) => job.jobExperience === experience
            ).length,
          }))
      );
      setJobFilter(data.jobs);
    }
  }, [data]);

  useEffect(() => {
    if (jobFilter) {
      setAllJobs({
        totalJobCount: jobFilter.length,
        jobs: [...jobFilter],
      });
    }
  }, [jobFilter]);

  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <Layout>
        <main>
          <PageTitle title="Find Your Dream Job" excerpt={null} image={null} />
          {/* {error && <div>Error! {error.message}</div>} */}
          {!data && <Loader />}
          {data && (
            <>
              <section className="pt-14 pb-20 !bg-light">
                <div className="container 2xl:px-0">
                  <div className="xl:grid grid-cols-12 gap-6">
                    <JobsFilter
                      types={jobTypes}
                      jobExperience={jobExperience}
                      setCurrentPage={setCurrentPage}
                      setJobFilter={setJobFilter}
                      defaultData={data.data}
                    />

                    <div className="col-span-9">
                      <SortBy totalCount={allJobs.jobs.length} />
                      {data?.loading && (
                        <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center">
                          {_.map(data?.data, (item) => (
                            <div key={item._id.$oid}>
                              <ImageOpt
                                src={item.avatar}
                                alt="image"
                                width={315}
                                height={418}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center">
                        {allJobs?.jobs?.map((item: any, index: number) => (
                          <JobItem key={index} item={item} />
                        ))}
                      </div>
                      {allJobs?.jobs?.length === 0 && (
                        <div className="h-80 flex justify-center items-center text-center">
                          <h2 className="text-4xl font-semibold">
                            No Data Found ☹️
                          </h2>
                        </div>
                      )}
                      {allJobs?.totalJobCount > jobsPerPage && (
                        <Pagination
                          totalCount={allJobs?.totalJobCount}
                          showPerPage={jobsPerPage}
                          handlePageChange={handlePageChange}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </main>
      </Layout>
    </div>
  );
}
