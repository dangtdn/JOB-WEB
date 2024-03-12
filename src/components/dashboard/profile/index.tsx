"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";
import { FormLoader, LoaderGrowing } from "../../../lib/loader/loader";
import { authAxios, authAxios1 } from "../../../lib/utils/axiosKits";
import ImageOpt from "../../optimize/image";
import { GetUserProfileResponse } from "@/types/user";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";

const ProfileBox = ({
  currentUser,
}: {
  currentUser: GetUserProfileResponse;
}) => {
  const [photoImage, setPhotoImage] = React.useState(null) as any;
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: currentUser?.fullName.firstName,
      lastName: currentUser?.fullName.lastName,
      email: currentUser?.email,
      aboutMe: currentUser?.aboutMe,
    },
  }) as any;

  const {
    register: register2,
    formState: {
      errors: errors2,
      isSubmitting: isSubmitting2,
      isDirty: isDirty2,
    },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onChange",
  }) as any;

  React.useEffect(() => {
    if (currentUser) {
      setPhotoImage(currentUser.avatar);
    }
  }, [currentUser]);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("aboutMe", data.aboutMe);
    if (data.profileImage) {
      const imagePath = data.profileImage[0];
      formData.append("profileImage", imagePath);
    }

    try {
      await authAxios({
        method: "PUT",
        url: `/admin/user/update/${currentUser._id}`,
        data: formData,
      }).then((res: any) => {
        mutate("/current-user").then(() => {
          toast.success(res.data.message, {
            position: "bottom-right",
            className: "foo-bar",
          });
          setTimeout(() => {
            router.refresh();
            reset();
          }, 4000);
        });
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "bottom-right",
        className: "foo-bar",
      });
    }
  };

  // photo image upload preview handler
  function photoPreview(e: any) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPhotoImage(filePreview as any);
  }

  const ImageFile = register("profileImage" as any);

  // reset Password handler
  const onSubmitPassword = async (data: any) => {
    // validate new-password
    const newPass = data.newPassword;
    if (newPass.length < 6) {
      return toast.error("Too-short New password", {
        position: "bottom-right",
        className: "foo-bar",
      });
    } else if (newPass.length > 30) {
      return toast.error("Too-long New password", {
        position: "bottom-right",
        className: "foo-bar",
      });
    } else if (newPass.search(/\d/) == -1) {
      return toast.error("Need Number in New password", {
        position: "bottom-right",
        className: "foo-bar",
      });
    } else if (newPass.search(/[a-zA-Z]/) == -1) {
      return toast.error("Need Letter in New password", {
        position: "bottom-right",
        className: "foo-bar",
      });
    } else if (newPass.search(/[A-Z]/) == -1) {
      return toast.error("Need Uppercase in New password", {
        position: "bottom-right",
        className: "foo-bar",
      });
    } else if (newPass.search(/[a-z]/) == -1) {
      return toast.error("Need Lowercase in New password", {
        position: "bottom-right",
        className: "foo-bar",
      });
    } else if (newPass.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
      return toast.error("Bad character in New password", {
        position: "bottom-right",
        className: "foo-bar",
      });
    }

    const passwordData = {
      currentPassword: data?.currentPassword,
      newPassword: data?.newPassword,
    };
    try {
      await authAxios({
        method: "PUT",
        url: `/users/password/reset`,
        data: passwordData,
      }).then((res) => {
        toast.success(res.data.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "bottom-right",
        className: "foo-bar",
      });
    }
  };

  return (
    <section className="mb-6">
      <div className="rounded-lg shadow-lg bg-white">
        <div className="h-16 bg-themeDark mb-8 flex items-center px-10 rounded-lg">
          <p className="text-xxs text-white">My Profile</p>
        </div>

        {/* Loader */}
        {!currentUser && <LoaderGrowing />}

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="!mx-5 xl:mx-10 justify-center items-center grid grid-cols-12">
            <div className="mb-4 col-span-12 md:col-span-4 lg:col-span-3">
              <div className="flex justify-center">
                <div className="relative inline-block w-40 h-40 xl:w-52 xl:h-52 rounded-full border-3 !border-gray">
                  <label htmlFor="image">
                    {photoImage && (
                      <ImageOpt
                        className="rounded-full p-1"
                        layout="fill"
                        src={photoImage}
                        alt="Profile image"
                      />
                    )}
                    {!photoImage && (
                      <ImageOpt
                        className="rounded-full p-1"
                        layout="fill"
                        src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                        alt="Profile image"
                      />
                    )}
                    <span className="absolute flex justify-center cursor-pointer items-center bg-gray w-12 h-12 bottom-0 right-0 ml-24 rounded-full">
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
                      <FaCamera className="text-xl text-themeDark" />
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4 col-span-12 md:col-span-8 lg:col-span-9">
              {/* form  */}
              <div>
                <div className="w-full">
                  {/* <form className="w-full" onSubmit={handleSubmit(onSubmit)}> */}
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-3/6 px-3 md:py-2">
                      <label
                        className="block tracking-wide text-themeDark text-xxs mb-2"
                        htmlFor="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className={`appearance-none block w-full text-themeDark border ${
                          errors.firstName ? "!border-red-500" : "border-gray"
                        } rounded py-2.5 px-3  leading-tight focus:outline-none focus:bg-white`}
                        id="grid-first-name"
                        {...register("firstName", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Jane"
                      />
                      {errors.firstName && (
                        <span className="text-red-400 text-sm italic">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="w-full md:w-3/6 px-3 md:py-2">
                      <label
                        className="block tracking-wide text-themeDark text-xxs mb-2"
                        htmlFor="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className={`appearance-none block w-full text-themeDark border ${
                          errors.lastName ? "!border-red-500" : "border-gray"
                        } rounded py-2.5 px-3 leading-tight focus:outline-none focus:bg-white`}
                        id="grid-first-name"
                        {...register("lastName", {
                          required: true,
                        })}
                        type="text"
                        placeholder="Ferdinand"
                      />
                      {errors.lastName && (
                        <span className="text-red-400 text-sm italic">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="w-full md:w-3/6 px-3 md:py-2">
                      <label
                        className="block tracking-wide text-themeDark text-xxs mb-2  mt-3"
                        htmlFor="grid-last-name"
                      >
                        Email
                      </label>
                      <input
                        className={`appearance-none block w-full text-themeDark border ${
                          errors.email ? "!border-red-500" : "border-gray"
                        } rounded py-2.5 px-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name`}
                        {...register("email", {
                          required: true,
                        })}
                        type="text"
                        readOnly
                        placeholder="info@gmail.com"
                      />
                      {errors.email && (
                        <span className="text-red-400 text-sm italic">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="w-full md:w-3/6 px-3 md:py-2">
                      <label
                        className="block tracking-wide text-themeDark text-xxs mb-2 mt-3"
                        htmlFor="grid-last-name"
                      >
                        Phone
                      </label>
                      <input
                        className="appearance-none block w-full text-themeDark border border-gray rounded py-2.5 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        {...register("phoneNumber")}
                        type="text"
                        placeholder="(406) 555-0120"
                        defaultValue={currentUser.phoneNumber}
                      />
                    </div>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
          {/* button 1 */}
          <div className="mx-10 mt-3">
            <p className="themeDark text-xxs">About Me</p>
            <textarea
              className="w-full h-36 border border-gray focus:outline-none focus:bg-white mt-3 p-3 rounded"
              placeholder="Type something"
              {...register("aboutMe")}
            />
            <div className="mt-12 pb-10">
              <button
                type="submit"
                disabled={!isDirty || isSubmitting}
                className={`!py-3 px-8 flex gap-2 items-center ${
                  isSubmitting ? "bg-themeDarkerAlt" : "bg-themePrimary"
                } rounded-lg shadow-themePrimary ${
                  isDirty ? "opacity-100" : "opacity-30"
                } text-white font-medium text-xxs`}
              >
                {/* <Link href="#"> */}
                {isSubmitting ? "Please wait..." : "Save Changes"}
                {isSubmitting && <FormLoader />}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Change Password 2 */}
      <form key={2} onSubmit={handleSubmit2(onSubmitPassword)}>
        <div className="mt-12 rounded-lg shadow-lg bg-white">
          <div className="mx-10">
            <p className="pt-6 text-themeDark text-xxs font-medium   ">
              Change Password
            </p>
            <hr className="mt-3 border-gray" />
            <div className="pt-6 md:flex gap-6">
              <div className="w-full md:w-3/6">
                <label
                  className="block tracking-wide text-themeDark text-xxs mb-2"
                  htmlFor="grid-last-name"
                >
                  Current Password
                </label>
                <input
                  className={`appearance-none block w-full text-themeDark border ${
                    errors2.currentPassword ? "!border-red-500" : "border-gray"
                  } rounded py-2.5 px-3  leading-tight focus:outline-none focus:bg-white`}
                  id="grid-first-name"
                  type="password"
                  placeholder="********"
                  {...register2("currentPassword", {
                    required: true,
                  })}
                />
                {errors2.currentPassword && (
                  <span className="text-red-400 text-sm italic">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-full md:w-3/6">
                <label
                  className="block tracking-wide text-themeDark text-xxs mb-2"
                  htmlFor="grid-last-name"
                >
                  New Password
                </label>
                <input
                  className={`appearance-none block w-full text-themeDark border ${
                    errors2.newPassword ? "!border-red-500" : "border-gray"
                  } rounded py-2.5 px-3 leading-tight focus:outline-none focus:bg-white`}
                  id="grid-first-name"
                  type="password"
                  placeholder="********"
                  {...register2("newPassword", {
                    required: true,
                  })}
                />
                {errors2.newPassword && (
                  <span className="text-red-400 text-sm italic block">
                    This field is required
                  </span>
                )}

                <span className="text-sm italic text-themeLight">
                  6 characters or longer. Combine upper and lovercase letters
                  and numbers.
                </span>
              </div>
            </div>
            {/* button 2 */}
            <div className="pt-8 pb-10">
              <button
                type="submit"
                disabled={!isDirty2 || isSubmitting2}
                className={`!py-3 px-8 flex gap-2 items-center ${
                  isSubmitting2 ? "bg-themeDarkerAlt" : "bg-themePrimary"
                }  rounded-lg shadow-themePrimary ${
                  isDirty2 ? "opacity-100" : "opacity-30"
                } text-white font-medium text-xxs`}
              >
                {isSubmitting2 ? "Please wait..." : "Save Changes"}
                {isSubmitting2 && <FormLoader />}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default ProfileBox;
