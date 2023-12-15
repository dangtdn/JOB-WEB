import Banner from "@/components/Banner/Banner";
import CompanyCard from "@/components/Cards/CompanyCard/CompanyCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Header";
import React from "react";

const Company = () => {
  return (
    <div>
      <header>{/* <Navbar /> */}</header>
      <main className="flex min-h-screen flex-col items-center justify-between pt-12 !bg-light">
        {/* <Banner /> */}
        <section className="pt-16 pb-20">
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
                    <form>
                      <div className="mb-4">
                        <input
                          className="bg-light rounded-md w-full py-3 px-6 leading-tight focus:outline-none"
                          type="text"
                          name="companyName"
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="jobCategorise pb-4">
                        <select
                          aria-label="Default select example"
                          name="industry"
                          className="!border-0 focus:shadow-none !py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none form-select"
                        >
                          <option value="">Select Category</option>
                          <option value="Automotive">Automotive</option>
                          <option value="Bank">Bank</option>
                          <option value="Commercial/Supply">
                            Commercial/Supply
                          </option>
                          <option value="Construction/Facilities">
                            Construction/Facilities
                          </option>
                          <option value="Design/Creative">
                            Design/Creative
                          </option>
                          <option value="Education Training">
                            Education Training
                          </option>
                          <option value="Engineer/Architects">
                            Engineer/Architects
                          </option>
                          <option value="Hospitality/Travel">
                            Hospitality/Travel
                          </option>
                          <option value="Electrician/Repair">
                            Electrician/Repair
                          </option>
                          <option value="Marketing/Sales">
                            Marketing/Sales
                          </option>
                          <option value="IT/Telecommunication">
                            IT/Telecommunication
                          </option>
                          <option value="Accounting/Finance">
                            Accounting/Finance
                          </option>
                        </select>
                      </div>
                      <div className="jobCategorise pb-4">
                        <select
                          aria-label="Default select example"
                          name="Size"
                          className="!border-0 focus:shadow-none !py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none form-select"
                        >
                          <option value="">Company Size</option>
                          <option value="1-10">1-10</option>
                          <option value="10-50">10-50</option>
                          <option value="50-100">50-100</option>
                          <option value="100-500">100-500</option>
                        </select>
                      </div>
                      <div className="jobCategorise pb-4">
                        <select
                          aria-label="Default select example"
                          name="Salary"
                          className="!border-0 focus:shadow-none !py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none form-select"
                        >
                          <option value="">AVG. Salary</option>
                          <option value="10K">10K</option>
                          <option value="20K">20K</option>
                          <option value="30K">30K</option>
                          <option value="40K">40K</option>
                          <option value="50K+">50K+</option>
                        </select>
                      </div>
                      <div className="jobCategorise pb-4">
                        <select
                          aria-label="Default select example"
                          name="Revenue"
                          className="!border-0 focus:shadow-none !py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none form-select"
                        >
                          <option value="">Revenue</option>
                          <option value="0-5000">0-5000</option>
                          <option value="5000-10">5000-10</option>
                          <option value="10000-20">10000-20</option>
                          <option value="20000-30">20000-30</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-span-9">
                <div className="bg-white rounded-md md:flex flex-wrap justify-between items-center mb-6 py-2.5 md:py-2">
                  <p className="text-xs font-bold text-black leading-4 px-6 mb-6 md:mb-0">
                    We have found <span className="text-themePrimary">16</span>{" "}
                    Company
                  </p>
                  <div className="text-center mr-2.5">
                    <a
                      className="block w-auto bg-themePrimary text-white px-6 py-2.5 text-xss font-medium rounded-md hover:bg-black transition-all outline-none"
                      href="/company/add-company"
                    >
                      Add Your Company
                    </a>
                  </div>
                </div>
                <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                  <CompanyCard />
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
};

export default Company;
