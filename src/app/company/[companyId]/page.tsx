"use client";

import _ from "lodash";
import Head from "next/head";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import sweetAlert from "sweetalert";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import React from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import { bookmarks } from "@/data/mongodb collections/bookmarks";
import useUser from "@/lib/auth/user";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/page-title";
import { Loader, LoaderGrowing } from "@/lib/loader/loader";
import ImageOpt from "@/components/optimize/image";
import CompanyJobItem from "@/components/company/company-job-item";
import CompanyInfo from "@/components/company/company-info";
import { jobs } from "@/data/mongodb collections/jobs";
import PopupModule from "@/lib/popup-modul/popup-modul";
import { Axios, authAxios } from "@/lib/utils/axiosKits";
import useSWR, { useSWRConfig } from "swr";
import { MdLocalPhone, MdMailOutline } from "react-icons/md";

const fetcher = (url: string) => Axios(url).then((res) => res.data);
const authFetcher = (url: string) =>
  authAxios(url).then((res) => res.data.data);

export default function CompanyProfile() {
  const pathName = usePathname();
  const id = pathName.split("/").at(-1);
  const { LoginPopupHandler } = React.useContext(ThemeContext) as any;
  const [loading, setLoading] = React.useState(false);
  const { user, loggedIn } = useUser();
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  const { data, error } = useSWR(`/company/${id}`, fetcher, {
    refreshInterval: 0,
    fallbackData: {
      company: {
        avarageSalary: "1050",
        category: "Category Name",
        companyEmail: "info@exasssmple.com",
        companyName: "Company Name",
        companySize: "0-10",
        companyTagline: "Company Tagline",
        companyWebsite: "https://example.com",
        createdAt: "2022-03-21T07:53:03.164Z",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        eatablishedDate: "17-04-19",
        location: "Location",
        locationMap: { latitude: "12345", longitude: "12345" },
        logo: "/assets/img/avatar.png",
        phoneNumber: "123456789",
        socialLink: {
          linkedin: "https://linkedin/example",
          facebook: "https://facebook/example",
          twitter: "https://twitter/example",
        },
        status: { isPublished: true, isApproved: false, isActive: true },
        thumb: "/assets/img/findjob-banner-bg.svg",
        videoLink: "https://video-example.com",
        _id: "62382edf2c6ba97982654a5e",
      },
      loading: true,
    },
  });
  const jobsData = jobs.filter((item) => item.company.$oid === id);
  console.log("dataId: ", data);

  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <main>
          <PageTitle title="Company Details" image={data?.company.thumb} />
          <section className="pt-16 pb-24 bg-light">
            <div className="container">
              <div className="lg:grid grid-cols-12 gap-6">
                <div className="col-span-8">
                  {/* left Top */}
                  <div className="p-8 rounded-md bg-white flex flex-wrap gap-10 xl:gap-36 items-center mb-6 relative">
                    <div className="flex gap-4 items-center flex-wrap">
                      <div>
                        <ImageOpt
                          width={100}
                          height={100}
                          className="rounded-md"
                          src={
                            data?.company.logo
                              ? data?.company.logo
                              : "/assets/img/avatar.png"
                          }
                          alt="img"
                        />
                      </div>
                      <div className="mb-6 xl:mb-0">
                        <h2 className="text-lg text-black font-bold leading-6 mb-2">
                          {data?.company.companyName}
                        </h2>
                        <p className="text-grayLight text-xss1 font-normal mb-3">
                          {data?.company.companyTagline}
                        </p>
                        <ul className="flex gap-3 flex-wrap">
                          {/* website link */}
                          {data?.company.companyWebsite !== "" && (
                            <li>
                              <a
                                href={data?.company.companyWebsite}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ImageOpt
                                  width={36}
                                  height={36}
                                  noPlaceholder
                                  src="/assets/img/global.svg"
                                  alt="icon"
                                />
                              </a>
                            </li>
                          )}
                          {/* facebook link */}
                          {data?.company.socialLink?.facebook !== "" && (
                            <li>
                              <a
                                href={data?.company.socialLink?.facebook}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ImageOpt
                                  width={36}
                                  height={36}
                                  noPlaceholder
                                  src="/assets/img/fb.svg"
                                  alt="icon"
                                />
                              </a>
                            </li>
                          )}
                          {/* linkedin link */}
                          {data?.company.socialLink?.linkedin !== "" && (
                            <li>
                              <a
                                href={data?.company.socialLink?.linkedin}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ImageOpt
                                  width={36}
                                  height={36}
                                  noPlaceholder
                                  src="/assets/img/linkedin.svg"
                                  alt="icon"
                                />
                              </a>
                            </li>
                          )}
                          {/* twitter link */}
                          {data?.company.socialLink?.twitter !== "" && (
                            <li>
                              <a
                                href={data?.company.socialLink?.twitter}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <ImageOpt
                                  width={36}
                                  height={36}
                                  noPlaceholder
                                  src="/assets/img/twitter2.svg"
                                  alt="icon"
                                />
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="mb-0">
                      <MdMailOutline size={20} />
                      <a
                        className="text-xxs font-normal text-black leading-6 block !mb-3"
                        href={`mailto:${data?.company.companyEmail}`}
                      >
                        {data?.company.companyEmail}
                      </a>
                      <a
                        className="text-xxs font-normal text-black leading-6 block"
                        href={`mailto:${data?.company.phoneNumber}`}
                      >
                        <MdLocalPhone size={20} />
                        {data?.company.phoneNumber}
                      </a>
                    </div>
                  </div>
                  {/* left Bottom */}
                  <div className="p-8 rounded-md bg-white relative">
                    {/* {(!data?.data || data?.loading) && <LoaderGrowing />} */}
                    <h4 className="text-lg2 font-bold text-black leading-6 mb-6">
                      About Company
                    </h4>
                    <div className="mb-0 text-xs text-deep font-normal leading-6">
                      {data?.company.description}
                    </div>
                  </div>

                  <div className="pt-12 mb-6">
                    <h4 className="text-lg2 font-bold text-black leading-6 mb-6">
                      Open Job
                    </h4>

                    {jobsData?.length > 0 ? (
                      <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
                        {_.map(jobsData, (item, index) => {
                          return (
                            <CompanyJobItem
                              key={index}
                              item={item}
                              loading={null}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="text-lg2 font-bold text-themeLighter py-6">
                          This company has no open job
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-4">
                  <CompanyInfo data={data} />
                  {/* <Map data={data?.data} /> */}
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
