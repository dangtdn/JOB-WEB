import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import JobCard from "@/components/Cards/JobCard/JobCard";
import Navbar from "@/components/Header/Header";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

export default function FindJob() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between pt-12 !bg-light">
        <Banner />
        <section className="pt-14 pb-20">
          <div className="container 2xl:px-0">
            <div className="xl:grid grid-cols-12 gap-6">
              <div className="col-span-3">
                <div className="bg-white rounded-lg">
                  <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
                    <p className="text-xs py-2 font-bold text-black leading-4">
                      Search Filter
                    </p>
                  </div>
                  <div className="p-6">
                    <form className="border-b border-gray">
                      <div className="mb-4">
                        <input
                          className="bg-light rounded-md w-full text-grayLight text-base py-3 px-6 leading-tight focus:outline-none"
                          type="text"
                          name="jobTitle"
                          placeholder="Job Title or Keyword"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="bg-light rounded-md w-full text-grayLight text-base py-3 px-6 leading-tight focus:outline-none"
                          type="text"
                          name="location"
                          placeholder="Location"
                        />
                      </div>
                      <div className="jobCategorise pb-4">
                        <select
                          aria-label="Categories"
                          name="category"
                          className="form-select !border-0 focus:shadow-none !py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
                        >
                          <option value="">Select Categories</option>
                          <option value="Automotive">Automotive</option>
                          <option value="Bank/ Non-Bank Fin">
                            Bank/ non-bank fin
                          </option>
                          <option value="Commercial/Supply">
                            Commercial/supply
                          </option>
                          <option value="Construction/Facilities">
                            Construction/facilities
                          </option>
                          <option value="Design/Creative">
                            Design/creative
                          </option>
                          <option value="Education Training">
                            Education training
                          </option>
                          <option value="Engineer/Architects">
                            Engineer/architects
                          </option>
                          <option value="Hospitality/Travel">
                            Hospitality/travel
                          </option>
                          <option value="Electrician/Repair">
                            Electrician/repair
                          </option>
                          <option value="Marketing/Sales">
                            Marketing/sales
                          </option>
                          <option value="IT/Telecommunication">
                            It/telecommunication
                          </option>
                          <option value="Accounting/Finance">
                            Accounting/finance
                          </option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="collapsed-group mb-4">
                    <div className="mb-2">
                      <div className="px-6 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-black leading-4">
                            Job Type
                          </p>
                        </div>
                      </div>
                      <div className="collapsed-item px-6 py-4">
                        <div className="border-b border-gray">
                          <div className="mb-3 w-full relative">
                            <div className="w-full">
                              <div className="text-themeLight css-1p9dbw5 form-check">
                                <input
                                  type="checkbox"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgb(213, 221, 229)",
                                    borderColor: "rgb(213, 221, 229)",
                                    borderRadius: "3px",
                                    marginTop: "2px",
                                  }}
                                  id="Contact Base-3"
                                  className="form-check-input"
                                />
                                <label
                                  htmlFor="Contact Base-3"
                                  className="form-check-label"
                                >
                                  Contact base
                                </label>
                              </div>
                            </div>
                            <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                              3
                            </span>
                          </div>
                          <div className="mb-3 w-full relative">
                            <div className="w-full">
                              <div className="text-themeLight css-1p9dbw5 form-check">
                                <input
                                  type="checkbox"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgb(213, 221, 229)",
                                    borderColor: "rgb(213, 221, 229)",
                                    borderRadius: "3px",
                                    marginTop: "2px",
                                  }}
                                  id="Freelance-7"
                                  className="form-check-input"
                                />
                                <label
                                  htmlFor="Freelance-7"
                                  className="form-check-label"
                                >
                                  Freelance
                                </label>
                              </div>
                            </div>
                            <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                              7
                            </span>
                          </div>
                          <div className="mb-3 w-full relative">
                            <div className="w-full">
                              <div className="text-themeLight css-1p9dbw5 form-check">
                                <input
                                  type="checkbox"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgb(213, 221, 229)",
                                    borderColor: "rgb(213, 221, 229)",
                                    borderRadius: "3px",
                                    marginTop: "2px",
                                  }}
                                  id="Full Time-11"
                                  className="form-check-input"
                                />
                                <label
                                  htmlFor="Full Time-11"
                                  className="form-check-label"
                                >
                                  Full time
                                </label>
                              </div>
                            </div>
                            <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                              11
                            </span>
                          </div>
                          <div className="mb-3 w-full relative">
                            <div className="w-full">
                              <div className="text-themeLight css-1p9dbw5 form-check">
                                <input
                                  type="checkbox"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgb(213, 221, 229)",
                                    borderColor: "rgb(213, 221, 229)",
                                    borderRadius: "3px",
                                    marginTop: "2px",
                                  }}
                                  id="Internship-3"
                                  className="form-check-input"
                                />
                                <label
                                  htmlFor="Internship-3"
                                  className="form-check-label"
                                >
                                  Internship
                                </label>
                              </div>
                            </div>
                            <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                              3
                            </span>
                          </div>
                          <div className="mb-3 w-full relative">
                            <div className="w-full">
                              <div className="text-themeLight css-1p9dbw5 form-check">
                                <input
                                  type="checkbox"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgb(213, 221, 229)",
                                    borderColor: "rgb(213, 221, 229)",
                                    borderRadius: "3px",
                                    marginTop: "2px",
                                  }}
                                  id="Part Time-7"
                                  className="form-check-input"
                                />
                                <label
                                  htmlFor="Part Time-7"
                                  className="form-check-label"
                                >
                                  Part time
                                </label>
                              </div>
                            </div>
                            <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                              7
                            </span>
                          </div>
                          <div className="mb-3 w-full relative">
                            <div className="w-full">
                              <div className="text-themeLight css-1p9dbw5 form-check">
                                <input
                                  type="checkbox"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgb(213, 221, 229)",
                                    borderColor: "rgb(213, 221, 229)",
                                    borderRadius: "3px",
                                    marginTop: "2px",
                                  }}
                                  id="Remote-5"
                                  className="form-check-input"
                                />
                                <label
                                  htmlFor="Remote-5"
                                  className="form-check-label"
                                >
                                  Remote
                                </label>
                              </div>
                            </div>
                            <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                              5
                            </span>
                          </div>
                          <div className="mb-3 w-full relative">
                            <div className="w-full">
                              <div className="text-themeLight css-1p9dbw5 form-check">
                                <input
                                  type="checkbox"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgb(213, 221, 229)",
                                    borderColor: "rgb(213, 221, 229)",
                                    borderRadius: "3px",
                                    marginTop: "2px",
                                  }}
                                  id="Temporary-2"
                                  className="form-check-input"
                                />
                                <label
                                  htmlFor="Temporary-2"
                                  className="form-check-label"
                                >
                                  Temporary
                                </label>
                              </div>
                            </div>
                            <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="px-6 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-black leading-4">
                            Experience
                          </p>
                        </div>
                      </div>
                      <div className="collapsed-item px-6 py-4">
                        <div>
                          <div className="mb-3 w-full relative">
                            <div className="w-full">
                              <div className="text-themeLight css-1p9dbw5 form-check">
                                <input
                                  type="checkbox"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgb(213, 221, 229)",
                                    borderColor: "rgb(213, 221, 229)",
                                    borderRadius: "3px",
                                    marginTop: "2px",
                                  }}
                                  className="form-check-input"
                                />

                                <label className="form-check-label">
                                  + Years
                                </label>
                              </div>
                            </div>
                            <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                              5
                            </span>
                          </div>
                          <div className="mb-3 w-full relative">
                            <div className="w-full">
                              <div className="text-themeLight css-1p9dbw5 form-check">
                                <input
                                  type="checkbox"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgb(213, 221, 229)",
                                    borderColor: "rgb(213, 221, 229)",
                                    borderRadius: "3px",
                                    marginTop: "2px",
                                  }}
                                  className="form-check-input"
                                />

                                <label className="form-check-label">
                                  3+ Years
                                </label>
                              </div>
                            </div>
                            <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                              9
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-9">
                <div className="!bg-white py-2 rounded-md md:flex flex-wrap justify-between items-center mb-6 md:py-2">
                  <p className="text-xs font-bold text-black leading-4 px-6 mb-6 md:mb-0">
                    We have found <span className="text-themePrimary">28</span>{" "}
                    Jobs
                  </p>
                  <div className="px-2">
                    <select
                      aria-label="Default select example"
                      name="sortBy"
                      className="!border-0 focus:shadow-none w-40 !py-2 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none form-select"
                    >
                      <option value="">Sort By</option>
                      <option value="ascending">Ascending</option>
                      <option value="descending">Descending</option>
                      <option value="featured">Featured</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center">
                  <Suspense fallback={<p>Loading...</p>}>
                    <JobCard />
                  </Suspense>
                </div>
                <div className="mx-auto px-4 mt-10" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
