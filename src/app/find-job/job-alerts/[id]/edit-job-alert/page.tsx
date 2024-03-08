"use client";

import { MultiSelect } from "@/components/dashboard/form/multi-select-dropdown";
import Layout from "@/components/dashboard/layout";
import { ThemeContext } from "@/context/ThemeContext";
import { filters } from "@/data/mongodb collections/filters";
import useUser, { UserGoBack, UserNotLogin } from "@/lib/auth/user";
import { LoaderGrowing } from "@/lib/loader/loader";
import { authAxios } from "@/lib/utils/axiosKits";
import _ from "lodash";
import Head from "next/head";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSWR from "swr";

const fetcher = (url: string) => authAxios(url).then((res) => res.data.data);

const EditJobAlert = () => {
  const router = useRouter();
  const filterData = filters[0];
  const pathName = usePathname();
  const jobAlertId = pathName.split("/")[3];
  const { data, error } = useSWR(`/jobs/alert/${jobAlertId}`, fetcher, {
    onLoadingSlow: () => <LoaderGrowing />,
  });
  const { user, loggedIn, loggedOut, isEmployer } = useUser();
  const userData = user?.data;
  const [loading, setLoading] = React.useState(true);
  const { categoryData } = React.useContext(ThemeContext) as any;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({});

  React.useEffect(() => {
    if (data && !isDirty) {
      setValue("alertName", data.name);
      setValue("keyword", data.keyword);
      setValue("region", [data.region]);
      setValue("category", [data.category]);
      setValue("tags", data.tags);
      setValue("type", data.type);
      setValue("frequency", data.emailFrequency);
      setLoading(false);
    }
  }, [data, setValue, isDirty]);

  const onSubmitHandler = async (data: any) => {
    const newData = {
      name: data.alertName,
      keyword: data.keyword,
      region: data.region[0],
      category: data.category[0].categoryTitle,
      tags: data.tags,
      type: data.type,
      emailFrequency: data.frequency,
    };

    try {
      await authAxios({
        method: "PUT",
        url: `/jobs/alert/${jobAlertId}/update`,
        data: newData,
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success(res.data.message, {
            position: "bottom-right",
            className: "foo-bar",
          });
          reset();
          router.push("/find-job/job-alerts");
        }
      });
    } catch (error: any) {
      if (error?.response?.data) {
        toast.error(error.response.data.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
      } else {
        toast.error(error.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
      }
    }
  };

  return (
    <>
      <Head>
        <meta name="description" content="Edit job alert" />
      </Head>

      <Layout>
        <main>
          {loggedOut && <UserNotLogin />}
          {isEmployer && <UserGoBack />}
          {userData && loggedIn && !isEmployer && (
            <section className="mb-6">
              <div className="rounded-lg shadow">
                <div className="h-16 bg-themeDark grid items-center mb-10 rounded-lg">
                  <p className="text-xxs text-white !py-3 ml-10">Edit Alert</p>
                </div>
                <Form
                  onSubmit={handleSubmit(onSubmitHandler)}
                  className="relative"
                >
                  {((!filterData && !data) || loading) && <LoaderGrowing />}
                  <>
                    <Row className="!mx-5 xl:mx-10 justify-center items-center">
                      <Col xs={12} md={9} lg={12} className="mb-4">
                        {/* form  */}
                        <div>
                          <div className="flex flex-wrap">
                            {/* Name */}
                            <div className="w-full md:w-3/6 px-3 md:py-2">
                              <label
                                className="block tracking-wide text-gray-700 text-xxs mb-2"
                                htmlFor="grid-first-name"
                              >
                                Alert Name
                              </label>
                              <input
                                className={`appearance-none block w-full text-gray-700 border ${
                                  errors?.alertName ? "!border-red-400" : ""
                                } rounded py-2.5 px-3 leading-tight focus:outline-none focus:bg-white`}
                                id="grid-first-name"
                                type="text"
                                placeholder="Restaurant Dishwasher"
                                {...register("alertName", {
                                  required: true,
                                })}
                              />
                              {errors?.alertName && (
                                <p className="text-red-400 text-sm italic py-2">
                                  This field is required
                                </p>
                              )}
                            </div>

                            {/* Keyword */}
                            <div className="w-full md:w-3/6 px-3 md:py-2">
                              <label
                                className="block tracking-wide text-gray-700 text-xxs mb-2"
                                htmlFor="grid-last-name"
                              >
                                Keyword
                              </label>
                              <input
                                className={`appearance-none block w-full text-gray-700 border ${
                                  errors?.keyword ? "!border-red-400" : ""
                                } rounded py-2.5 px-3 leading-tight focus:outline-none focus:bg-white`}
                                id="grid-first-name"
                                type="text"
                                placeholder='"Restaurant Dishwasher" (optionally add a keyword to match hobs against)'
                                {...register("keyword", {
                                  required: true,
                                })}
                              />
                              {errors?.keyword && (
                                <p className="text-red-400 text-sm italic py-2">
                                  This field is required
                                </p>
                              )}
                            </div>

                            {/* Region Name */}
                            <div className="w-full md:w-3/6 px-3 md:py-2">
                              <label
                                className="block tracking-wide text-gray-700 text-xxs mb-2"
                                htmlFor="grid-last-name"
                              >
                                Job Region
                              </label>
                              <MultiSelect
                                options={filterData?.region}
                                name="region"
                                isObject={false}
                                selectedValues={[data?.region]}
                                validationSyntax={{ required: true }}
                                error={errors?.region}
                                register={register}
                                setValue={setValue}
                                emptyRecordMsg="No Region Found"
                                placeholder="Add Region..."
                                singleSelect
                                forwardRef={undefined}
                                displayValue={undefined}
                                disabled={undefined}
                                className={undefined}
                              />
                              {errors?.region && (
                                <p className="text-red-400 text-sm italic py-2">
                                  This field is required
                                </p>
                              )}
                            </div>

                            {/* Categories */}
                            <div className="w-full md:w-3/6 px-3 md:py-2">
                              <label
                                className="block tracking-wide text-gray-700 text-xxs mb-2"
                                htmlFor="grid-last-name"
                              >
                                Categories
                              </label>
                              <MultiSelect
                                options={categoryData}
                                selectedValues={[
                                  { categoryTitle: data?.category },
                                ]}
                                displayValue="categoryTitle"
                                name="category"
                                validationSyntax={true}
                                register={register}
                                error={errors?.category}
                                setValue={setValue}
                                emptyRecordMsg="No category found"
                                placeholder="Select Category"
                                singleSelect
                                forwardRef={undefined}
                                disabled={undefined}
                                className={undefined}
                                isObject={undefined}
                              />
                              {errors?.region && (
                                <p className="text-red-400 text-sm italic py-2">
                                  This field is required
                                </p>
                              )}
                            </div>

                            {/* Tags */}
                            <div className="w-full md:w-3/6 px-3 md:py-2">
                              <label
                                className="block tracking-wide text-gray-700 text-xxs mb-2"
                                htmlFor="grid-last-name"
                              >
                                Tags
                              </label>
                              <MultiSelect
                                options={filterData?.tags}
                                isObject={false}
                                name="tags"
                                selectedValues={data?.tags}
                                validationSyntax={{ required: true }}
                                error={errors?.tags}
                                register={register}
                                setValue={setValue}
                                emptyRecordMsg="No tags found"
                                placeholder="Add Tags..."
                                forwardRef={undefined}
                                displayValue={undefined}
                                disabled={undefined}
                                singleSelect={undefined}
                                className={undefined}
                              />
                              {errors?.tags && (
                                <p className="text-red-400 text-sm italic py-2">
                                  This field is required
                                </p>
                              )}
                            </div>

                            {/* Types */}
                            <div className="w-full md:w-3/6 px-3 md:py-2">
                              <label
                                className="block tracking-wide text-gray-700 text-xxs mb-2"
                                htmlFor="grid-last-name"
                              >
                                Job Type
                              </label>
                              <MultiSelect
                                options={filterData?.jobTypes}
                                isObject={false}
                                name="type"
                                validationSyntax={true}
                                error={errors?.type}
                                selectedValues={data?.type}
                                register={register}
                                setValue={setValue}
                                emptyRecordMsg="No job type found"
                                placeholder="Select Job Type"
                                forwardRef={undefined}
                                displayValue={undefined}
                                disabled={undefined}
                                singleSelect={undefined}
                                className={undefined}
                              />
                              {errors?.type && (
                                <p className="text-red-400 text-sm italic py-2">
                                  This field is required
                                </p>
                              )}
                            </div>

                            {/* Email Frequency */}
                            <div className="w-full md:w-3/6 px-3 md:py-2">
                              <label
                                className="block tracking-wide text-gray-700 text-xxs mb-2"
                                htmlFor="grid-last-name"
                              >
                                Email Frequency
                              </label>
                              <Form.Select
                                aria-label="Default select example"
                                className={`appearance-none block w-full text-gray-700 border ${
                                  errors?.frequency ? "!border-red-400" : ""
                                } rounded py-2.5 px-3 leading-tight focus:outline-none focus:bg-white`}
                                defaultValue={""}
                                {...register("frequency", {
                                  required: true,
                                })}
                              >
                                <option value="">Select Frequency</option>
                                {_.map(
                                  ["Daily", "Weekly", "Fortnightly", "Monthly"],
                                  (item, index) => (
                                    <option value={item} key={index}>
                                      {item}
                                    </option>
                                  )
                                )}
                              </Form.Select>
                              {errors?.frequency && (
                                <p className="text-red-400 text-sm italic py-2">
                                  This field is required
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        {/* Submit button */}
                        <div className="mt-6 px-3 pb-7">
                          <button
                            type="submit"
                            className={`py-2.5 flex gap-2 items-center px-8 ${
                              isSubmitting
                                ? "bg-themeDarkerAlt"
                                : "bg-themePrimary"
                            } rounded-lg shadow shadow-themePrimary text-white font-medium text-xxs`}
                          >
                            {isSubmitting ? "Please wait..." : "Save Alert"}
                            {isSubmitting && (
                              <div className="spinner-grow w-5 h-5 text-themePrimary" />
                            )}
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </>
                </Form>
              </div>
            </section>
          )}
        </main>
      </Layout>
    </>
  );
};

export default EditJobAlert;
