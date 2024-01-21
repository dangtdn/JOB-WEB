import { capitalize } from "lodash";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ImageOpt from "../../optimize/image";
import { authAxios } from "../../../lib/utils/axiosKits";

const AddCategoryForm = () => {
  const [photoImage, setPhotoImage] = React.useState(null) as any;
  const [processing, setProcessing] = React.useState(false) as any;
  // const { mutate } = useSWRConfig()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  }) as any;

  const onSubmitHandler = (data: any) => {
    const formData = new FormData();
    formData.append("categoryTitle", data.categoryTitle);
    formData.append("categoryIcon", data.categoryIcon[0]);
    formData.append("subCategory", data.subCategory);
    setProcessing(true);
    try {
      authAxios
        .post("/admin/categories/retrives", formData)
        .then((res) => {
          toast.success(res.data.message, {
            position: "bottom-right",
            className: "foo-bar",
          });
          // mutate('/admin/categories/retrives').then(() => {
          // 	reset()
          // 	setPhotoImage(null)
          // 	Router.push(`/job/category`)
          // 	setProcessing(false)
          // })
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

  // resume image upload preview handler
  function resumePreview(event: any) {
    const selectedFile = event.target.files[0];
    const filePreview = URL.createObjectURL(selectedFile);
    setResumeImage(filePreview);
  }

  const ImageFile = register("categoryIcon", { required: true });

  return (
    <section className="mb-6">
      <div className="rounded-lg shadow">
        <div className="h-16 bg-themeDark flex items-center px-10 rounded-lg">
          <p className="text-xxs text-white">Add Category</p>
        </div>

        <div className="p-8">
          {/* form  */}
          <div>
            <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="flex flex-wrap">
                {/* Category Name */}
                <div className="w-full md:w-3/6 px-3 md:py-2">
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
                <div className="w-full md:w-3/6 px-3 md:py-2">
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
                <div className="w-full md:w-3/6 !px-3 md:py-2">
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
                          style={{
                            minWidth: "100px",
                            minHeight: "100px",
                          }}
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
              <div className="!py-3 !px-3 block">
                <button
                  type="submit"
                  className={`!py-3 px-6 flex gap-2 items-center ${
                    processing ? "bg-themeDarkerAlt" : "bg-themePrimary"
                  } rounded-lg shadow text-white text-xxs shadow-themePrimary`}
                >
                  {processing ? "Please wait..." : "Add Category"}
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
  );
};

export default AddCategoryForm;
function setResumeImage(filePreview: string) {
  throw new Error("Function not implemented.");
}
