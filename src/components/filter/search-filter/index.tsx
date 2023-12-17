"use client";

import { categoryList } from "@/components/PopularCategories/PopularCategories";
import { ThemeContext } from "@/context/ThemeContext";
import { categories } from "@/utils/dummy-content/mongodb-collections/categories";
import { filters } from "@/utils/dummy-content/mongodb-collections/filters";
import styled from "@emotion/styled";
import _ from "lodash";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import useSWR from 'swr'
// import { ThemeContext } from '../../../../context/ThemeContext'
// import { Axios } from '../../../utils/axiosKits'

// const fetcher = (url: string) => Axios(url).then((res) => res.data.data);

export const JobsFilter = ({
  types,
  jobExperience,
  setCurrentPage,
}: {
  types: any;
  jobExperience: any;
  setCurrentPage: any;
}) => {
  //   const { categoryData } = useContext(ThemeContext) as any;
  const router = useRouter() as any;
  const [jobTitle, setJobTitle] = useState("") as any;
  const [location, setLocation] = useState("") as any;
  const [category, setCategory] = useState("") as any;
  const [jobTypes, setJobTypes] = useState([]) as any;
  const [experienceYear, setExperience] = useState([]) as any;
  const { register, setValue, reset, watch } = useForm();
  const categoryData = categories;

  //   /* ------------ auto complete filed if router query is not empty ------------ */
  //   useEffect(() => {
  //     const CallRouter = async () => {
  //       if (
  //         router.query.jobTitle &&
  //         (router.query.jobTitle !== "") !== jobTitle
  //       ) {
  //         await setValue("jobTitle", router.query.jobTitle);
  //         await setJobTitle(router.query.jobTitle);
  //       }
  //       if (!router.query.jobTitle && jobTitle !== "") {
  //         await setJobTitle("");
  //         await setValue("jobTitle", "");
  //       }
  //     };
  //     CallRouter();
  //   }, [router.query.jobTitle]);

  //   useEffect(() => {
  //     const CallRouter = async () => {
  //       if (
  //         router.query.location &&
  //         (router.query.location !== "") !== location
  //       ) {
  //         await setValue("location", router.query.location);
  //         await setLocation(router.query.location);
  //       }
  //       if (!router.query.location && location !== "") {
  //         await setLocation("");
  //         await setValue("jobTitle", "");
  //       }
  //     };
  //     CallRouter();
  //   }, [router.query.location]);

  //   useEffect(() => {
  //     const CallRouter = async () => {
  //       if (
  //         router.query.category &&
  //         (router.query.category !== "") !== category
  //       ) {
  //         await setValue("category", router.query.category);
  //         await setCategory(router.query.category);
  //       }
  //       if (!router.query.category && category !== "") {
  //         await setCategory("");
  //         await setValue("category", "");
  //       }
  //     };
  //     CallRouter();
  //   }, [router.query.category]);

  //   useEffect(() => {
  //     const CallRouter = async () => {
  //       if (
  //         router.query.jobTypes &&
  //         router.query.jobTypes.split(",").length !== jobTypes.length
  //       ) {
  //         await setJobTypes(_.split(router.query.jobTypes, ","));
  //       }
  //       if (
  //         router.query.experienceYear &&
  //         router.query.experienceYear.split(",").length !== experienceYear.length
  //       ) {
  //         await setExperience(_.split(router.query.experienceYear, ","));
  //       }
  //       if (!router.query.jobTypes && jobTypes.length > 0) {
  //         setJobTypes([]);
  //       }
  //       if (!router.query.experienceYear && experienceYear.length > 0) {
  //         setExperience([]);
  //       }
  //     };
  //     CallRouter();
  //   }, [router.query.jobTypes, router.query.experienceYear]);

  //   /* --------- job title,location auto complete router query --------- */
  //   useEffect(() => {
  //     if (
  //       jobTitle ||
  //       watch("jobTitle") !== "" ||
  //       router.query.jobTitle !== jobTitle ||
  //       location ||
  //       watch("location") !== "" ||
  //       router.query.location !== location
  //     ) {
  //       const delayDebounceFn = setTimeout(() => {
  //         const values = {
  //           jobTitle: watch("jobTitle"),
  //           location: watch("location"),
  //           category: watch("category"),
  //           jobTypes: `${jobTypes.join(",")}`,
  //           experienceYear: `${experienceYear.join(",")}`,
  //         };
  //         const filtered = _.pickBy(
  //           values,
  //           (value) =>
  //             value !== "" &&
  //             value !== null &&
  //             value !== undefined &&
  //             value.length > 0
  //         );
  //         router.push({
  //           pathname: "/find-job",
  //           query: filtered,
  //         });
  //       }, 1000);
  //       return () => clearTimeout(delayDebounceFn);
  //     }
  //   }, [jobTitle, location]);

  //   /* --------- category auto complete router query --------- */
  //   useEffect(() => {
  //     if (
  //       watch("category") !== "" ||
  //       category ||
  //       router.query.category !== category
  //     ) {
  //       const values = {
  //         jobTitle: watch("jobTitle"),
  //         location: watch("location"),
  //         category: watch("category"),
  //         jobTypes: `${jobTypes.join(",")}`,
  //         experienceYear: `${experienceYear.join(",")}`,
  //       };
  //       const filtered = _.pickBy(
  //         values,
  //         (value) =>
  //           value !== "" &&
  //           value !== null &&
  //           value !== undefined &&
  //           value.length > 0
  //       );
  //       router.push({
  //         pathname: "/find-job",
  //         query: filtered,
  //       });
  //     }
  //   }, [category]);

  //   /* ----------- jobTypes,experienceYear auto complete router query ----------- */
  //   useEffect(() => {
  //     const CallRouter = async () => {
  //       if (
  //         jobTypes.length > 0 ||
  //         router.query.jobTypes !== jobTypes.join(",") ||
  //         experienceYear.length > 0 ||
  //         router.query.experienceYear !== experienceYear.join(",")
  //       ) {
  //         const values = {
  //           jobTitle: watch("jobTitle"),
  //           location: watch("location"),
  //           category: watch("category"),
  //           jobTypes: `${jobTypes.join(",")}`,
  //           experienceYear: `${experienceYear.join(",")}`,
  //         };
  //         const filtered = _.pickBy(
  //           values,
  //           (value) =>
  //             value !== "" &&
  //             value !== null &&
  //             value !== undefined &&
  //             value.length > 0
  //         );
  //         router.push({
  //           pathname: "/find-job",
  //           query: filtered,
  //         });
  //       }
  //     };

  //     CallRouter();
  //   }, [jobTypes, experienceYear]);

  /* --------------- reset all form field on click reset button --------------- */
  const ClearFilterHandler = () => {
    setJobTitle("");
    setLocation("");
    setCategory("");
    setJobTypes([]);
    setCurrentPage(0);
    setExperience([]);
    reset();
    router.push({
      pathname: "/find-job",
      query: {},
    });
  };

  /* -------------------- set value to jobTypes form field -------------------- */
  const AddJobTypesHandler = async (value: any, e: any) => {
    if (e.target.checked) {
      if (!jobTypes.includes(value)) {
        await setJobTypes([...jobTypes, value]);
        setCurrentPage(0);
      }
    } else {
      await setJobTypes(jobTypes.filter((item: any) => item !== value));
      setCurrentPage(0);
    }
  };

  /* ------------------- set value to experienceYear form field ------------------- */
  const AddExperienceHandler = async (value: any, e: any) => {
    if (e.target.checked) {
      if (!experienceYear.includes(value)) {
        await setExperience([...experienceYear, value]);
        setCurrentPage(0);
      }
    } else {
      await setExperience(_.without(experienceYear, value));
      setCurrentPage(0);
    }
  };

  /* ------------------- register jobTitle,location,category ------------------ */
  const job_title = register("jobTitle");
  const location_name = register("location");
  const category_name = register("category");

  return (
    <div className="col-span-3">
      <div className="bg-white rounded-lg">
        <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
          <p className="text-xs py-2 font-bold text-black leading-4">
            Search Filter
          </p>
          {(location !== "" ||
            jobTitle !== "" ||
            category !== "" ||
            jobTypes.length > 0 ||
            experienceYear.length > 0) && (
            <button
              type="button"
              onClick={ClearFilterHandler}
              className="text-xss1 font-normal text-grayLight px-2.5 py-2 rounded-lg duration-300 ease-in-out hover:text-red-400 leading-4"
            >
              Clear
            </button>
          )}
        </div>
        <div className="p-6">
          <form className="border-b border-gray">
            <div className="mb-4">
              <input
                className="bg-light rounded-md w-full text-grayLight text-base py-3 px-6 leading-tight focus:outline-none"
                type="text"
                {...job_title}
                onChange={(e) => {
                  job_title.onChange(e); // method from hook form register
                  setCurrentPage(0); // current page reset to 0
                  setJobTitle(e.target.value); // your method
                }}
                onBlur={job_title.onBlur}
                ref={job_title.ref}
                placeholder="Job Title or Keyword"
              />
            </div>
            <div className="mb-4">
              <input
                className="bg-light rounded-md w-full text-grayLight text-base py-3 px-6 leading-tight focus:outline-none"
                type="text"
                {...location_name}
                onChange={(e) => {
                  location_name.onChange(e); // method from hook form register
                  setCurrentPage(0); // current page reset to 0
                  setLocation(e.target.value); // your method
                }}
                onBlur={location_name.onBlur}
                ref={location_name.ref}
                placeholder="Location"
              />
            </div>
            <div className="jobCategorise pb-4">
              <Form.Select
                aria-label="Categories"
                {...category_name}
                onChange={(e) => {
                  category_name.onChange(e); // method from hook form register
                  setCurrentPage(0); // current page reset to 0
                  setCategory(e.target.value); // your method
                }}
                onBlur={category_name.onBlur}
                ref={category_name.ref}
                value={category}
                className="border-0 focus:shadow-none p-3 w-full bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
              >
                <option value="">Select Categories</option>
                {_.map(categoryData, (item, index) => {
                  return (
                    <option value={item.categoryTitle} key={index}>
                      {_.capitalize(item.categoryTitle)}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </form>
        </div>

        {/* <!-- check Option --> */}
        <div className="collapsed-group mb-4">
          {types?.length > 0 && (
            <div className="mb-2">
              <div className="px-6 flex items-center justify-between">
                <div className="">
                  <p className="text-xs font-bold text-black leading-4">
                    Job Type
                  </p>
                </div>
                {/* <button className="btnCollapsedToggle">
                  <Image
                    width={20}
                    height={20}
                    noPlaceholder
                    src="assets/img/minus.svg"
                    alt="icon"
                  />
                </button> */}
              </div>
              {/* <!-- collapsed-item --> */}
              <div className="collapsed-item px-6 py-4">
                <div className="border-b border-gray">
                  {_.map(_.sortBy(types, "_id"), (item, key) => {
                    return (
                      <div className="mb-3 w-full relative" key={key}>
                        <div
                          className="w-full"
                          onChange={(e) => AddJobTypesHandler(item._id, e)}
                        >
                          <InputCheckBox
                            id={`${item._id}-${item.count}`}
                            type="checkbox"
                            onChange={() => {}}
                            label={_.capitalize(item._id)}
                            checked={jobTypes.includes(item._id)}
                            className="text-themeLight"
                          />
                        </div>
                        <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                          {item.count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <!--/ collapsed-item --> */}
            </div>
          )}
          {jobExperience?.length > 0 && (
            <div className="mb-2">
              <div className="px-6 flex items-center justify-between">
                <div className="">
                  <p className="text-xs font-bold text-black leading-4">
                    Experience
                  </p>
                </div>
                {/* <button className="btnCollapsedToggle">
                  <Image
                    width={20}
                    height={20}
                    noPlaceholder
                    src="assets/img/minus.svg"
                    alt="icon"
                  />
                </button> */}
              </div>
              {/* <!-- collapsed-item --> */}
              <div className="collapsed-item px-6 py-4">
                <div>
                  {_.map(_.sortBy(jobExperience, "_id"), (item, key) => {
                    const name = _.replace(item._id, / /g, "-").toLowerCase();
                    return (
                      <div className="mb-3 w-full relative" key={key}>
                        <div
                          className="w-full"
                          onChange={(e) => AddExperienceHandler(name, e)}
                        >
                          <InputCheckBox
                            id={item._id + key}
                            type="checkbox"
                            label={`${item._id}+ Years`}
                            onChange={() => {}}
                            checked={experienceYear.includes(name)}
                            className="text-themeLight"
                          />
                        </div>
                        <span className="text-xs text-deep font-normal top-0 right-0 absolute">
                          {item.count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <!--/ collapsed-item --> */}
            </div>
          )}
          {/* <div className="mb-2">
              <div className="px-6 flex items-center justify-between">
                <div className="">
                  <p className="text-xs font-bold text-black leading-4">
                    Skill
                  </p>
                </div>
                <button className="btnCollapsedToggle">
                  <Image
                    width={20}
                    height={20}
                    noPlaceholder
                    src="assets/img/minus.svg"
                    alt="icon"
                  />
                </button>
              </div>
              {/* <!-- collapsed-item --> */}
          {/*<div className="collapsed-item px-6 py-4">
                <div className="">
                  <div className="mb-1 flex justify-between">
                    <label className="checkItem">
                      <input type="checkbox" checked="checked" />
                      <span className="checkmark"></span>
                      HTML
                    </label>
                    <span className="text-xs text-deep font-normal">123</span>
                  </div>
                  <div className="mb-1 flex justify-between">
                    <label className="checkItem">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      CSS
                    </label>
                    <span className="text-xs text-deep font-normal">123</span>
                  </div>
                  <div className="mb-1 flex justify-between">
                    <label className="checkItem">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      JavaScript
                    </label>
                    <span className="text-xs text-deep font-normal">123</span>
                  </div>
                  <div className="mb-1 flex justify-between">
                    <label className="checkItem">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      React
                    </label>
                    <span className="text-xs text-deep font-normal">123</span>
                  </div>
                  <div className="mb-1 flex justify-between">
                    <label className="checkItem">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Node.Js
                    </label>
                    <span className="text-xs text-deep font-normal">123</span>
                  </div>
                  <div className="mb-1 flex justify-between">
                    <label className="checkItem">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Laravel
                    </label>
                    <span className="text-xs text-deep font-normal">123</span>
                  </div>
                </div>
              </div>
              {/* <!--/ collapsed-item --> */}
          {/*</div> */}
          {/* Button hidden */}
          {/* <div className="text-center pb-4 px-6">
              <button
                type="button"
                className="w-full bg-themePrimary text-white px-6 py-3 text-xs font-medium rounded-md hover:bg-black transition-all outline-none"
              >
                Search Job
              </button>
            </div> */}
        </div>
        {/* <!--/ check Option --> */}
      </div>
    </div>
  );
};

export const CompanyFilter = ({ setCurrentPage }: { setCurrentPage: any }) => {
  const router = useRouter() as any;
  const { categoryData } = React.useContext(ThemeContext) as any;
  const [companyName, setCompanyName] = useState("") as any;
  const [industry, setIndustry] = React.useState("") as any;
  const [Size, setSize] = useState("") as any;
  const [Salary, setSalary] = React.useState("") as any;
  const [Revenue, setRevenue] = React.useState("") as any;
  const { register, setValue, reset, watch } = useForm({
    mode: "Blur" as any,
  });

  /* --------------- reset all form field on click reset button --------------- */
  const ClearFilterHandler = () => {
    setCompanyName("");
    setIndustry("");
    setSize("");
    setSalary("");
    setRevenue("");
    reset();
    router.push({
      pathname: "/company",
      query: {},
    });
  };

  /* ------------------- register jobTitle,location,category ------------------ */
  const company_name = register("companyName");
  const industry_name = register("industry");
  const size = register("Size");
  const salary = register("Salary");
  const revenue = register("Revenue");

  return (
    <div className="col-span-3">
      <div className="bg-white rounded-lg">
        <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
          <p className="text-xs py-2 font-bold text-black leading-4">
            Search Filter
          </p>
          {(companyName !== "" ||
            industry !== "" ||
            Size !== "" ||
            Salary !== "" ||
            Revenue !== "") && (
            <button
              type="button"
              onClick={ClearFilterHandler}
              className="text-xss1 font-normal text-grayLight px-2.5 py-2 rounded-lg duration-300 ease-in-out hover:text-red-400 leading-4"
            >
              Clear
            </button>
          )}
        </div>
        <div className="p-6">
          <form className="">
            <div className="mb-4">
              <input
                className="bg-light rounded-md w-full py-3 px-6 leading-tight focus:outline-none"
                type="text"
                {...company_name}
                onChange={(e) => {
                  company_name.onChange(e); // method from hook form register
                  setCurrentPage(0); // current page reset to 0
                  setCompanyName(e.target.value); // your method
                }}
                onBlur={company_name.onBlur}
                ref={company_name.ref}
                placeholder="Company Name"
              />
            </div>
            <div className="jobCategorise pb-4">
              <Form.Select
                aria-label="Default select example"
                {...industry_name}
                onChange={(e) => {
                  industry_name.onChange(e); // method from hook form register
                  setCurrentPage(0); // current page reset to 0
                  setIndustry(e.target.value); // your method
                }}
                onBlur={industry_name.onBlur}
                ref={industry_name.ref}
                value={industry}
                className="border-0 focus:shadow-none py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
              >
                <option value="">Select Category</option>
                {_.map(categoryData, (item) => {
                  return (
                    <option key={item._id} value={item.categoryTitle}>
                      {item.categoryTitle}
                    </option>
                  );
                })}
                {categoryData?.length === 0 && (
                  <option value="" disabled>
                    No Category Found
                  </option>
                )}
              </Form.Select>
            </div>
            <div className="jobCategorise pb-4">
              <Form.Select
                aria-label="Default select example"
                {...size}
                onChange={(e) => {
                  size.onChange(e); // method from hook form register
                  setCurrentPage(0); // current page reset to 0
                  setSize(e.target.value); // your method
                }}
                onBlur={size.onBlur}
                ref={size.ref}
                value={Size}
                className="border-0 focus:shadow-none py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
              >
                <option value="">Company Size</option>
                {_.map(filters[0]?.companySize, (item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
                {filters[0]?.companySize.length === 0 && (
                  <option value="" disabled>
                    No Size Found
                  </option>
                )}
              </Form.Select>
            </div>
            <div className="jobCategorise pb-4">
              <Form.Select
                aria-label="Default select example"
                {...salary}
                onChange={(e) => {
                  salary.onChange(e); // method from hook form register
                  setCurrentPage(0); // current page reset to 0
                  setSalary(e.target.value); // your method
                }}
                onBlur={salary.onBlur}
                ref={salary.ref}
                value={Salary}
                className="border-0 focus:shadow-none py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
              >
                <option value="">AVG. Salary</option>
                {_.map(filters[0]?.avarageSalary, (item, key) => {
                  return (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  );
                })}
                {filters[0]?.avarageSalary.length === 0 && (
                  <option value="" disabled>
                    No Salary Found
                  </option>
                )}
              </Form.Select>
            </div>
            <div className="jobCategorise pb-4">
              <Form.Select
                aria-label="Default select example"
                {...revenue}
                onChange={(e) => {
                  revenue.onChange(e); // method from hook form register
                  setCurrentPage(0); // current page reset to 0
                  setRevenue(e.target.value); // your method
                }}
                onBlur={revenue.onBlur}
                ref={revenue.ref}
                value={Revenue}
                className="border-0 focus:shadow-none py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
              >
                <option value="">Revenue</option>
                {_.map(filters[0]?.revenue, (item, key) => {
                  return (
                    <option key={key} value={item}>
                      {item}
                    </option>
                  );
                })}
                {filters[0]?.revenue.length === 0 && (
                  <option value="" disabled>
                    No Revenue Found
                  </option>
                )}
              </Form.Select>
            </div>
          </form>
          {/* <div className="text-center pt-2 pb-3">
            <button
              type="button"
              className="w-full bg-themePrimary text-white px-6 py-3 text-xs font-medium rounded-md hover:bg-black transition-all outline-none"
            >
              Search Company
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

// export const CandidateFilter = ({
//   setCurrentPage,
// }: {
//   setCurrentPage: any;
// }) => {
//   const { categoryData } = useContext(ThemeContext) as any;
//   const router = useRouter();
//   const [serviceName, setServiceName] = useState("") as any;
//   const [category, setCategory] = useState("") as any;
//   const [industry, setIndustry] = React.useState("") as any;
//   const [skill, setSkill] = React.useState("") as any;
//   const { register, handleSubmit, setValue, reset, watch } = useForm({
//     mode: "Blur" as any,
//   });
//   const { data: filterData, error: filterError } = useSWR(
//     "/admin/filters/retrives",
//     fetcher,
//     {
//       refreshInterval: 0,
//     }
//   );
//   /* ------------ auto complete filed if router query is not empty ------------ */
//   useEffect(() => {
//     // serviceName function call
//     if (
//       router.query.professionalTitle &&
//       (router.query.professionalTitle !== "") !== serviceName
//     ) {
//       setValue("serviceName", router.query.professionalTitle);
//       setServiceName(router.query.professionalTitle);
//     } else if (!router.query.professionalTitle && serviceName !== "") {
//       setServiceName("");
//       setValue("serviceName", "");
//     }
//     // industry function call
//     if (router.query.industry && (router.query.industry !== "") !== industry) {
//       setValue("industry", router.query.industry);
//       setIndustry(router.query.industry);
//     } else if (!router.query.industry && industry !== "") {
//       setIndustry("");
//       setValue("industry", "");
//     }

//     // skill function call
//     if (router.query.skills && (router.query.skills !== "") !== skill) {
//       setValue("skill", router.query.skills);
//       setSkill(router.query.skills);
//     } else if (!router.query.skills && skill !== "") {
//       setSkill("");
//       setValue("skill", "");
//     }

//     // category function call
//     if (router.query.category && (router.query.category !== "") !== category) {
//       setValue("category", router.query.category);
//       setCategory(router.query.category);
//     } else if (!router.query.category && category !== "") {
//       setCategory("");
//       setValue("category", "");
//     }
//   }, [
//     router.query.professionalTitle,
//     router.query.industry,
//     router.query.skills,
//     router.query.category,
//   ]);

//   /* --------- service name auto complete router query --------- */
//   useEffect(() => {
//     if (
//       serviceName !== "" ||
//       (router.query.professionalTitle && serviceName === "")
//     ) {
//       const delayDebounceFn = setTimeout(() => {
//         const values = {
//           professionalTitle: serviceName,
//           category: category,
//           industry: industry,
//           skills: skill,
//         };
//         const filtered = _.pickBy(values, (value) => value !== "");
//         router.push({
//           pathname: "/candidate",
//           query: filtered,
//         });
//       }, 1500);
//       return () => clearTimeout(delayDebounceFn);
//     }
//   }, [serviceName]);

//   /* --------- service name auto complete router query --------- */
//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       if (
//         watch("skill") ||
//         skill ||
//         router.query.companySizes !== skill ||
//         watch("category") ||
//         category ||
//         router.query.category !== category
//       ) {
//         const values = {
//           professionalTitle: serviceName,
//           category: category,
//           skills: skill,
//         };
//         const filtered = _.pickBy(values, (value) => value !== "");
//         router.push({
//           pathname: "/candidate",
//           query: filtered,
//         });
//       }
//     }, 200);
//     return () => clearTimeout(delayDebounceFn);
//   }, [category, skill]);

//   const OnSubmitHandler = (data: any) => {
//     const values = {
//       professionalTitle: data.serviceName.replace(/[ ]/g, "-"),
//       category: data.category,
//       industry: data.industry,
//       skills: data.skill,
//     };
//     const filtered = _.pickBy(values, (value) => value !== "");
//     router.push({
//       pathname: "/candidate",
//       query: filtered,
//     });
//   };

//   /* --------------- reset all form field on click reset button --------------- */
//   const ClearFilterHandler = () => {
//     setServiceName("");
//     setCategory("");
//     setIndustry("");
//     setSkill("");
//     reset();
//     router.push({
//       pathname: "/candidate",
//       query: {},
//     });
//   };

//   /* ------------------- register jobTitle,location,category ------------------ */
//   const candidate_title = register("serviceName");
//   const category_name = register("category");
//   const skill_name = register("skill");

//   return (
//     <div className="col-span-3">
//       <div className="bg-white rounded-lg">
//         <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
//           <p className="text-xs py-2 font-bold text-black leading-4">
//             Search Filter
//           </p>
//           {(serviceName !== "" ||
//             industry !== "" ||
//             skill !== "" ||
//             category !== "") && (
//             <button
//               type="button"
//               onClick={ClearFilterHandler}
//               className="text-xss1 font-normal text-grayLight px-2.5 py-2 rounded-lg duration-300 ease-in-out hover:text-red-400 leading-4"
//             >
//               Clear
//             </button>
//           )}
//         </div>
//         <div className="p-6">
//           <form className="" onSubmit={handleSubmit(OnSubmitHandler)}>
//             <div className="mb-4">
//               <input
//                 className="bg-light rounded-md w-full py-3 px-6 leading-tight focus:outline-none"
//                 type="text"
//                 {...candidate_title}
//                 onChange={(e) => {
//                   candidate_title.onChange(e); // method from hook form register
//                   setCurrentPage(0); // current page reset to 0
//                   setServiceName(e.target.value); // your method
//                 }}
//                 onBlur={candidate_title.onBlur}
//                 ref={candidate_title.ref}
//                 placeholder="Search By Service"
//               />
//             </div>
//             {/* <div className="jobCategorise pb-4">
//               <Form.Select
//                 aria-label="Default select example"
//                 {...industry_name}
//                 onChange={(e) => {
//                   industry_name.onChange(e) // method from hook form register
//                   setIndustry(e.target.value) // your method
//                 }}
//                 onBlur={industry_name.onBlur}
//                 ref={industry_name.ref}
//                 className="border-0 focus:shadow-none py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
//               >
//                 <option value="">Industry</option>
//                 {_.map(industryList, (item, index) => {
//                   const value = _.replace(item.name.toLowerCase(), /[ ]/g, '-')
//                   return (
//                     <option key={index} value={value}>
//                       {item.name}
//                     </option>
//                   )
//                 })}
//               </Form.Select>
//             </div> */}
//             <div className="jobCategorise pb-4">
//               <Form.Select
//                 aria-label="Default select example"
//                 {...category_name}
//                 onChange={(e) => {
//                   category_name.onChange(e); // method from hook form register
//                   setCurrentPage(0); // current page reset to 0
//                   setCategory(e.target.value); // your method
//                 }}
//                 onBlur={category_name.onBlur}
//                 ref={category_name.ref}
//                 className="border-0 focus:shadow-none py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
//               >
//                 <option value="">Select Category</option>
//                 {_.map(categoryData, (item, index) => {
//                   return (
//                     <option key={index} value={item.categoryTitle}>
//                       {item.categoryTitle}
//                     </option>
//                   );
//                 })}
//               </Form.Select>
//             </div>
//             <div className="jobCategorise pb-4">
//               <Form.Select
//                 aria-label="Default select example"
//                 {...skill_name}
//                 onChange={(e) => {
//                   skill_name.onChange(e); // method from hook form register
//                   setCurrentPage(0); // current page reset to 0
//                   setSkill(e.target.value); // your method
//                 }}
//                 onBlur={skill_name.onBlur}
//                 ref={skill_name.ref}
//                 className="border-0 focus:shadow-none py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none"
//               >
//                 <option value="">Select Skill</option>
//                 {_.map(filterData?.skills, (item, index) => {
//                   return (
//                     <option key={index} value={item}>
//                       {item}
//                     </option>
//                   );
//                 })}
//               </Form.Select>
//             </div>
//             {/* <div className="text-center pt-2 pb-3">
//               <button
//                 type="submit"
//                 className="w-full bg-themePrimary text-white px-6 py-3 text-xs font-medium rounded-md hover:bg-black transition-all outline-none"
//               >
//                 Search Company
//               </button>
//             </div> */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

const InputCheckBox = styled(Form.Check)`
  .form-check-input {
    width: 20px;
    height: 20px;
    background-color: #d5dde5;
    border-color: #d5dde5;
    border-radius: 3px;
    margin-top: 2px;
    :checked {
      background-color: #1caf57;
      border-color: #1caf57;
    }
    :focus {
      box-shadow: none;
    }
  }
  .form-check-label {
    padding-left: 10px;
    width: 100%;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
  }
`;
