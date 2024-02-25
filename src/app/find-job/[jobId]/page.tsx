"use client";

import _ from "lodash";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { toast } from "react-toastify";
// import sweetAlert from "sweetalert";
import { jobs } from "@/utils/dummy-content/mongodb-collections/jobs";
// import { jobApplies } from "@/utils/dummy-content/mongodb-collections/jobapplies";
import { usePathname, useRouter } from "next/navigation";
import useUser from "@/lib/auth/user";
import { bookmarks } from "@/utils/dummy-content/mongodb-collections/bookmarks";
import { companies } from "@/utils/dummy-content/mongodb-collections/companies";
import ImageOpt from "@/components/optimize/image";
import { ThemeContext } from "@/context/ThemeContext";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/page-title";
import { LoaderGrowing } from "@/lib/loader/loader";
import JobOverview from "@/components/Job/JobOverview";
import JobCompanyName from "@/components/Job/JobCompanyName";
import PopupModule from "@/lib/popup-modul/popup-modul";
import { Axios, authAxios } from "@/lib/utils/axiosKits";
import useSWR from "swr";
import RelatedJobs from "@/components/Job/RelatedJobs";

const fetcher = (url: string) => Axios(url).then((res) => res.data);
const authFetcher = (url: string) => authAxios(url).then((res) => res.data);

export default function JobDetails() {
  const router = useRouter();
  const pathName = usePathname();
  const id = pathName.split("/").at(-1);
  const { user, loggedIn, isEmployer } = useUser();
  const { data: jobApplies } = useSWR(
    loggedIn ? `/jobs/${id}/job-apply` : null,
    authFetcher,
    {
      refreshInterval: 0,
    }
  );
  console.log("jobApplies: ", jobApplies);
  const isApplied = _.find(jobApplies, (item) => item?.jobItem?.$oid === id);
  // const data = _.find([...jobs], (item) => item?._id.$oid === id);
  const { data, error } = useSWR(id ? `/jobs/${id}` : null, fetcher, {
    fallbackData: {
      job: {
        applyLink: "https://localhost.com",
        avatar:
          "https://res.cloudinary.com/js-template/image/upload/v1647869499/fo7kcvjmwabbjheb7urc.jpg",
        category: "IT/Telecommunication",
        company: {
          _id: "6232421d2b674a4761d4a050",
          companyName: "Company Name",
          companyTagline: "Get it done with love",
          companyEmail: "info@example.com",
          phoneNumber: "123456789",
          companyWebsite: "https://yourwebsite.com",
          socialLink: {
            linkedin: "undefined",
            facebook: "undefined",
            twitter: "undefined",
          },
          logo: "/assets/img/avatar.png",
        },
        createdAt: "2022-03-20T13:38:21.874Z",
        email: "info@gmail.com",
        hourlyrate: { minimum: 22, maximum: 22 },
        jobDescription: "adeqwdqw",
        jobTitle: "developer",
        jobTypes: ["Full Time", "Freelance"],
        location: "dhaka",
        region: "America",
        salary: { minimum: 222, maximum: 222 },
        specialTags: ["HTML", "Development"],
        status: {
          isApproved: false,
          isPublished: true,
          isFeatured: false,
          isActive: true,
        },
        updatedAt: "2022-03-21T13:31:40.115Z",
      },
      loading: true,
    },
  });
  console.log("data: ", data);
  const companiesData = [...companies];
  const [Show, setShow] = React.useState(false);
  const [bookmark, setBookmark] = React.useState(false);
  const { LoginPopupHandler } = React.useContext(ThemeContext) as any;
  const [loading, setLoading] = React.useState(false);
  // const { mutate } = useSWRConfig();
  const [FileName, setFileName] = React.useState();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const {
    register: bookmarkRegister,
    handleSubmit: bookmarkHandleSubmit,
    reset: bookmarkReset,
    formState: { isSubmitting: bookmarkIsSubmitting },
  } = useForm({
    mode: "onChange",
  });

  // job apply submit form
  const jobApplySubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("coverLetter", data.coverLetter);
    formData.append("cvFile", data.cvFile[0]);
    formData.append("jobItem", id ?? "");

    // try {
    // 	await authAxios({
    // 		method: 'post',
    // 		url: `/jobs/apply/retrives`,
    // 		data: formData,
    // 	}).then((res) => {
    // 		mutate('/jobs/apply/retrives').then(() => {
    // 			addToast(res.data.message, {
    // 				appearance: 'success',
    // 				autoDismiss: true,
    // 			})
    // 			setShow(false)
    // 			reset()
    // 			setFileName('' as any)
    // 		})
    // 	})
    // } catch (error: any) {
    // 	if (error?.response?.data) {
    // 		addToast(error?.response?.data?.message, {
    // 			appearance: 'error',
    // 			autoDismiss: true,
    // 		})
    // 	} else {
    // 		addToast(error.message, {
    // 			appearance: 'error',
    // 			autoDismiss: true,
    // 		})
    // 	}
    // }
  };

  const FileInput = register("cvFile", {
    pattern: {
      value: /\.(pdf|doc|docx)$/i,
      message: "Please upload a valid file",
    },
  });

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <main>
          <PageTitle image={data.job?.avatar} title="Job Details" />
          <section className="pt-20 pb-24 !bg-light">
            <div className="container">
              <div className="lg:grid grid-cols-12 gap-6">
                <div className="col-span-8">
                  {/* left Top */}
                  <div className="p-8 rounded-md bg-white flex flex-wrap justify-between items-center mb-6 relative">
                    {(!data.job || loading || loading) && <LoaderGrowing />}
                    <div className="flex gap-6 items-center flex-wrap">
                      <div className="">
                        <ImageOpt
                          width={100}
                          height={100}
                          src={
                            data?.job?.company?.logo
                              ? data?.job?.company?.logo
                              : "/assets/img/avatar.png"
                          }
                          alt="img"
                        />
                      </div>
                      <div className="mb-6 xl:mb-0">
                        <h2 className="text-lg text-black font-bold leading-6 !mb-2">
                          {data?.job?.jobTitle
                            ? data?.job?.jobTitle
                            : "Job Name"}
                        </h2>
                        <p className="text-grayLight text-xss1 font-normal !mb-2">
                          <span>
                            {data?.job?.category ? data?.job?.category : ""}
                          </span>
                        </p>
                        {/* social icons */}
                        <ul className="flex gap-3 flex-wrap items-center">
                          <li>
                            <span className="font-medium">Share on</span>
                          </li>
                          {/* <li>
                            <a href="#">
                              <Image
                                width={36}
                                height={36}
                                noPlaceholder
                                src="/assets/img/global.svg"
                                alt="icon"
                              />
                            </a>
                          </li> */}
                          <li>
                            {/* facebook share link */}
                            <FacebookShareButton
                              url={`/api/v1/job/${id}`}
                              quote={`${data?.job?.jobTitle}`}
                              className="social-icon"
                            >
                              <ImageOpt
                                width={36}
                                height={36}
                                noPlaceholder
                                src="/assets/img/fb.svg"
                                alt="icon"
                              />
                            </FacebookShareButton>
                          </li>
                          <li>
                            <TwitterShareButton
                              url={`/api/v1/job/${id}`}
                              title={data?.job?.jobTitle}
                              className="social-icon"
                            >
                              <ImageOpt
                                width={36}
                                height={36}
                                noPlaceholder
                                src="/assets/img/twitter2.svg"
                                alt="icon"
                              />
                            </TwitterShareButton>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid">
                      {user && user?._id === data?.user ? (
                        <Link
                          href={`/find-job/${data?._id}/edit-job`}
                          className="py-2.5 block px-6 mb-2 leading-4 text-white bg-themePrimary rounded-md transition-all hover:bg-black hover:text-green"
                        >
                          Edit Job
                        </Link>
                      ) : (
                        !isEmployer &&
                        (isApplied ? (
                          <span className="py-2.5 block px-6 mb-2 leading-4 text-white bg-themePrimary rounded-md transition-all">
                            Applied
                          </span>
                        ) : (
                          <button
                            onClick={() => setShow(!Show)}
                            className="py-2.5 block px-6 mb-2 leading-4 text-white bg-themePrimary rounded-md transition-all hover:bg-black hover:text-green"
                          >
                            Apply Now
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                  {/* left bottom */}
                  <div className="p-8 rounded-md bg-white relative">
                    {(!data?.job || data?.loading) && <LoaderGrowing />}
                    <h4 className="text-lg2 font-bold text-black leading-6 mb-6">
                      Job Description
                    </h4>
                    <div className="mb-8">
                      {data?.job?.jobDescription
                        ? data?.job?.jobDescription
                        : "No description"}
                    </div>
                    {/* Tags */}
                    <div className="mb-8">
                      <h4 className="text-lg2 font-bold text-black leading-6 mb-6">
                        Tagged as:
                      </h4>
                      <ul className="flex gap-3 flex-wrap">
                        {_.map(data?.job?.specialTags, (tag, index) => (
                          <li
                            className="text-deep text-xss1 font-normal py-0.5 px-3 rounded-sm border border-solid border-gray"
                            key={index}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-4">
                  <JobOverview data={data} />
                  <JobCompanyName data={data} />
                </div>
              </div>
            </div>
          </section>
          {data?.relatedJobs && data?.relatedJobs.length > 0 && (
            <RelatedJobs data={data} />
          )}
        </main>
      </Layout>

      {/* Job Application popup */}
      <PopupModule
        PopupTitle={`Apply For This Job`}
        Popup={Show}
        PopupHandler={() => setShow(!Show)}
      >
        {loggedIn ? (
          user && !isEmployer ? (
            <form onSubmit={handleSubmit(jobApplySubmit)}>
              {/* Full Name */}
              <div className="mb-6">
                <label
                  className="block mb-2 text-themeDarker font-normal"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
                    errors?.fullName ? "!border-red-500" : "border-gray"
                  } placeholder:font-normal placeholder:text-xss1 rounded placeholder-themeDarkAlt focus:outline-none focus:ring-2 focus:ring-themePrimary focus:ring-opacity-50`}
                  type="fullName"
                  id="fullName"
                  {...register("fullName", { required: true })}
                  placeholder="Enter Your Full Name"
                />
                {errors?.fullName && (
                  <span className="text-red-500 text-xss italic">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email Address */}
              <div className="mb-6">
                <label
                  className="block mb-2 text-themeDarker font-normal"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
                    errors?.email ? "!border-red-500" : "border-gray"
                  } placeholder:font-normal placeholder:text-xss1 rounded placeholder-themeDarkAlt focus:outline-none focus:ring-2 focus:ring-themePrimary focus:ring-opacity-50`}
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Full Name"
                />
                {errors?.email && (
                  <span className="text-red-500 text-xss italic">
                    This field is required
                  </span>
                )}
              </div>
              {/* Message */}
              <div className="mb-6">
                <label
                  className="block mb-2 text-themeDarker font-normal"
                  htmlFor="coverLetter"
                >
                  Message
                </label>
                <textarea
                  className={`appearance-none block w-full !p-3 leading-5 text-themeDarker border ${
                    errors?.coverLetter ? "!border-red-500" : "border-gray"
                  } placeholder:font-normal h-40 placeholder:text-xss1 rounded placeholder-themeDarkAlt focus:outline-none focus:ring-2 focus:ring-themePrimary focus:ring-opacity-50`}
                  id="coverLetter"
                  {...register("coverLetter")}
                  placeholder="Your cover letter/coverLetter sent to the employer"
                />
              </div>
              <div className="mb-6">
                <span>
                  Upload CV{" "}
                  <span className="text-themeLighter text-xs">(optional)</span>
                </span>
                <div className="mt-2 border border-themeLighter rounded p-2 relative">
                  {FileName && (
                    <span className="!mb-3 items-center flex gap-3">
                      <span className="chip bg-green-100 text-themeLight rounded text-xs leading-4 !p-2">
                        {FileName}
                      </span>
                      <button
                        type="button"
                        className="bg-red-300 text-white !py-1 px-2.5 text-xss rounded-md hover:bg-red-500"
                        onClick={() => {
                          setFileName("" as any);
                          // setResumeImage(null);
                          setValue("cvFile", "");
                        }}
                      >
                        Remove
                      </button>
                    </span>
                  )}
                  <div className="flex gap-3 items-center">
                    <label
                      className="block text-themeDark text-sm duration-300 ease-in-out py-1 px-3 border border-themeLight shadow-sm cursor-pointer hover:bg-green-200 hover:border-green-200 rounded"
                      htmlFor="cvFile"
                    >
                      Select File
                      <input
                        className="hidden"
                        id="cvFile"
                        accept=".doc,.docx,.pdf"
                        {...FileInput}
                        ref={FileInput.ref}
                        onBlur={FileInput.onBlur}
                        onChange={(e: any) => {
                          FileInput.onChange(e);
                          setFileName(e.target.files[0].name);
                        }}
                        type="file"
                      />
                      {errors?.image && (
                        <span className="text-red-500 text-xs italic">
                          {errors?.image?.message as string}
                        </span>
                      )}
                    </label>
                    <span className="text-xss1 text-themeLighter">
                      Maximum file size: 100 MB.
                    </span>
                  </div>
                </div>
              </div>
              <button
                className={`!py-3 px-7 flex gap-2 justify-center items-center transition-all duration-300 ease-in-out mb-6 w-full text-base text-white font-normal text-center leading-6 ${
                  isSubmitting ? "bg-themeDarkerAlt" : "bg-themePrimary"
                } rounded-md hover:bg-black`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Please wait..." : "Send Application"}
                {isSubmitting && (
                  <div
                    className="spinner-grow w-5 h-5 text-themePrimary"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </button>
              <p>
                You can apply to this job and others using your online resume.
                Click the button above to send your online resume and email your
                application to the employer.
              </p>
            </form>
          ) : (
            <div className="text-center grid justify-center items-center h-40">
              <div>
                <p className="text-lg2 text-themeLight !mb-4">
                  You must be a candidate to apply for this job.
                </p>
              </div>
            </div>
          )
        ) : (
          <div className="text-center grid justify-center items-center h-40">
            <div>
              <p className="text-xxs text-themeLighter !mb-4">
                You must be logged in to apply for this job.
              </p>
              <button
                className="bg-themePrimary text-white px-10 !py-3 hover:bg-themeDarkerAlt transition-all duration-300 ease-in-out rounded text-base font-normal"
                onClick={() => {
                  LoginPopupHandler();
                  setShow(!Show);
                }}
              >
                Login Now
              </button>
            </div>
          </div>
        )}
      </PopupModule>
    </>
  );
}
