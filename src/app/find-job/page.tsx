"use client";

import { useState } from "react";
import Loading from "./loading";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/page-title";
import { jobs } from "@/utils/dummy-content/mongodb-collections/jobs";
import { JobsFilter } from "@/components/filter/search-filter";
import SortBy from "@/components/filter/data-sort-by";
import ImageOpt from "@/components/optimize/image";
import Pagination from "@/components/pagination";

export default function FindJob() {
  const [jobTypes, setJobTypes] = useState([]);
  const [jobExperience, setJobExperience] = useState([]);

  // get current pages
  const [currentPage, setCurrentPage] = useState(0);
  const [jobsPerPage] = useState(9);
  const [AllJobs, setAllJobs] = useState({
    totalJobCount: 0,
    jobs: [],
  });
  const data = jobs;

  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <Layout>
        <main>
          <PageTitle title="Find Your Dream Job" excerpt={null} image={null} />
          {/* {error && <div>Error! {error.message}</div>} */}
          {!data && (
            <div className="h-80 w-full flex justify-center items-center">
              <h1 className="text-5xl font-semibold text-center">Loading...</h1>
            </div>
          )}
          {data && (
            <>
              <section className="pt-14 pb-20 !bg-light">
                <div className="container 2xl:px-0">
                  <div className="xl:grid grid-cols-12 gap-6">
                    <JobsFilter
                      types={jobTypes}
                      jobExperience={jobExperience}
                      setCurrentPage={setCurrentPage}
                    />

                    <div className="col-span-9">
                      <SortBy totalCount={data.length} />
                      {/* {data?.loading && (
												<div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center">
													{_.map(data.jobs, (item) => (
														<div key={item.id}>
															<ImageOpt
																src={item.img}
																alt="image"
																width={315}
																height={418}
															/>
														</div>
													))}
												</div>
											)} */}
                      {/* <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center">
												{!error &&
													!data?.loading &&
													data?.jobs.map((item: any) => (
														<JobItem key={item._id} item={item} />
													))}
											</div>
											{!data?.loading && data?.jobs?.length === 0 && (
												<div className="h-80 flex justify-center items-center text-center">
													<h2 className="text-4xl font-semibold">
														No Data Found ☹️
													</h2>
												</div>
											)} */}
                      {AllJobs?.totalJobCount > jobsPerPage && (
                        <Pagination
                          totalCount={AllJobs?.totalJobCount}
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
