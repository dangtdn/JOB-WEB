"use client";

import Layout from "@/components/dashboard/layout";
import ImageOpt from "@/components/optimize/image";
import useUser, { UserGoBack, UserNotLogin } from "@/lib/auth/user";
import { LoaderGrowing } from "@/lib/loader/loader";
import { authAxios } from "@/lib/utils/axiosKits";
import { capitalize } from "lodash";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSWR, { useSWRConfig, Key, Fetcher } from "swr";

const fetcher = (url: string) =>
  authAxios(url).then((res: any) => res.data.data);

const EditCategory = () => {
  const router = useRouter();
  const pathName = usePathname();
  const id = pathName.split("/").at(-1);
  const [processing, setProcessing] = React.useState(false);
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(`/categories/${id}`, fetcher, {
    refreshInterval: 0,
  });

  const [photoImage, setPhotoImage] = React.useState(null);
  const { user, loggedIn, loggedOut, isAdmin } = useUser();
  const userData = user;
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    mode: "onBlur",
  });

  React.useEffect(() => {
    if (data) {
      setValue("categoryTitle", data.categoryTitle);
      setValue("subCategory", data.subCategory);
      setPhotoImage(data.avatar);
    }
  }, [data, setValue]);

  const onSubmitHandler = (data: any) => {
    // const formData = new FormData();
    // formData.append("categoryTitle", data.categoryTitle);
    // formData.append("subCategory", data.subCategory);
    // if (data.categoryIcon) {
    //   formData.append("categoryIcon", data.categoryIcon[0]);
    // }
    const request = {
      categoryTitle: data.categoryTitle,
      subCategory: data.subCategory,
      categoryIcon: data.categoryIcon ? data.categoryIcon[0] : "",
    };
    setProcessing(true);
    try {
      authAxios
        .put(`/admin/category/update/${id}`, request)
        .then((res: any) => {
          toast.success(res.data.message, {
            position: "bottom-right",
            className: "foo-bar",
          });
          // mutate("/job/category");
          setProcessing(false);
          router.push("/find-job/category");
        })
        .catch((err) => {
          toast.error(capitalize(err.response.data.message), {
            position: "bottom-right",
            className: "foo-bar",
          });
          setProcessing(false);
        });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "bottom-right",
        className: "foo-bar",
      });
      setProcessing(false);
    }

    setTimeout(() => {
      setProcessing(false);
    }, 10000);
  };

  // photo image upload preview handler
  function photoPreview(e: any) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPhotoImage(filePreview as any);
  }

  const ImageFile = register("categoryIcon", {
    required: photoImage ? false : true,
  });
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <main>
          {loggedOut && <UserNotLogin />}
          {userData && !isAdmin && <UserGoBack />}
          {userData && loggedIn && isAdmin && (
            <section className="mb-6">
              <div className="rounded-lg shadow relative">
                <div className="h-16 bg-themeDark flex items-center px-10 rounded-lg">
                  <p className="text-xxs text-white">Edit Category</p>
                </div>

                <div className="p-8">
                  {/* form  */}
                  <div>
                    {/* loader data fetch */}
                    {error && <div>failed to load data</div>}
                    {!data && <LoaderGrowing />}
                    <form
                      className="w-full"
                      onSubmit={handleSubmit(onSubmitHandler)}
                    >
                      <div className="flex flex-wrap">
                        {/* Category Name */}
                        <div className="w-full md:w-3/6 px-3 md:py-2 text-left">
                          <label
                            className="block tracking-wide text-themeDark text-xxs mb-2"
                            htmlFor="categoryTitle"
                          >
                            Category Name
                          </label>
                          <input
                            className={`appearance-none block w-full text-themeDark ${
                              errors.categoryTitle ? "!border-red-400" : ""
                            } border rounded-lg !py-3.5 px-3 mb-1 leading-tight focus:outline-none focus:bg-white`}
                            id="categoryTitle"
                            defaultValue={data?.categoryTitle}
                            {...register("categoryTitle", { required: true })}
                            type="text"
                            placeholder="Display Advertising"
                          />
                          {errors.categoryTitle && (
                            <p className="text-red-500 text-sm italic">
                              Category Name is required
                            </p>
                          )}
                        </div>
                        {/* Parent Category */}
                        <div className="w-full md:w-3/6 px-3 md:py-2 text-left">
                          <label
                            className="block tracking-wide text-themeDark text-xxs mb-2"
                            htmlFor="subCategory"
                          >
                            Parent Category
                          </label>
                          <input
                            className={`appearance-none block w-full text-themeDark ${
                              errors.subCategory ? "!border-red-400" : ""
                            } border !py-3.5 rounded-lg px-3 mb-1 leading-tight focus:outline-none focus:bg-white`}
                            id="subCategory"
                            defaultValue={data?.subCategory}
                            {...register("subCategory", { required: true })}
                            type="text"
                            placeholder="Add Sub Category..."
                          />
                          {errors.subCategory && (
                            <p className="text-red-500 text-sm italic">
                              Parent Category is required
                            </p>
                          )}
                        </div>
                        {/* Category Image */}
                        <div className="w-full md:w-3/6 !px-3 md:py-2 text-left">
                          <span>Image</span>
                          <div
                            className={`mt-2 gap-4 border ${
                              errors.categoryIcon
                                ? "!border-red-400"
                                : "border-themeLighter"
                            } rounded-lg py-1.5 !px-3`}
                          >
                            {photoImage && (
                              <span className="!mb-3 items-center flex gap-3">
                                <ImageOpt
                                  src={photoImage}
                                  width={100}
                                  height={100}
                                  alt="img"
                                />
                                <button
                                  type="button"
                                  className="bg-red-300 mt-2 text-white py-1 p-2.5 text-xss rounded hover:bg-red-500"
                                  onClick={() => {
                                    setPhotoImage(null);
                                    setValue("categoryIcon", "");
                                  }}
                                >
                                  Remove
                                </button>
                              </span>
                            )}
                            <div className="flex gap-4 items-center">
                              <label
                                className={`block text-themeDark text-xss1 duration-300  ease-in-out !py-1 !px-3 border shadow-sm cursor-pointer border-themeLighter hover:bg-green-200 hover:border-green-200 rounded`}
                                htmlFor="image"
                              >
                                Select File
                                <input
                                  className="hidden"
                                  id="image"
                                  accept="image/*"
                                  {...ImageFile}
                                  defaultValue={photoImage as any}
                                  ref={ImageFile.ref}
                                  onBlur={ImageFile.onBlur}
                                  onChange={(event) => {
                                    ImageFile.onChange(event);
                                    photoPreview(event);
                                  }}
                                  type="file"
                                />
                              </label>
                              <span className="text-xss1 text-themeLighter">
                                Maximum file size: 100 MB.
                              </span>
                            </div>
                          </div>
                          {errors.categoryIcon && (
                            <p className="text-red-500 py-1 text-sm italic">
                              Image is required
                            </p>
                          )}
                        </div>
                      </div>
                      {/* button 2 */}
                      <div className="!py-3 !px-3 block text-left">
                        <button
                          type="submit"
                          className={`!py-3 px-6 flex gap-2 items-center ${
                            processing ? "bg-themeDarkerAlt" : "bg-themePrimary"
                          } ${
                            isDirty ? "opacity-100" : "opacity-30"
                          } rounded-lg shadow text-white shadow-themePrimary`}
                          disabled={!isDirty || processing}
                        >
                          {processing ? "Please wait..." : "Update Category"}
                          {processing && (
                            <div className="spinner-grow w-5 h-5 text-themePrimary" />
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </Layout>
    </>
  );
};

export default EditCategory;
