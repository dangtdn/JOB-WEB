import { ThemeContext } from "@/context/ThemeContext";
import useUser from "@/lib/auth/user";
import { authAxios } from "@/lib/utils/axiosKits";
import _ from "lodash";
import Multiselect from "multiselect-react-dropdown";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (url: any) => authAxios(url).then((res) => res.data.data);

const EditJob = () => {
  //   const { data: filterData, error: filterError } = useSWR(
  //     "/admin/filters/retrives",
  //     fetcher,
  //     {
  //       refreshInterval: 0,
  //     }
  //   );
  const { data: companiesData, error: companiesError } = useSWR(
    "/companies",
    fetcher,
    {
      refreshInterval: 0,
    }
  );
  // remove isApproved false from companiesData
  const ApprovedCompanies = _.filter(companiesData, (company) => {
    return company.status.isApproved && company.status.isActive;
  });
  const { categoryData } = React.useContext(ThemeContext) as any;
  const [companyName, setCompanyName] = React.useState("");
  const [categoryName, setCategoryName] = React.useState("");
  const [JobHeaderImg, setJobHeaderImg] = React.useState("");
  const jobForm = companyName ? false : true;
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const { data, error } = useSWR(
    `/jobs/job/${router?.query?.active_id}`,
    fetcher,
    {
      refreshInterval: 0,
    }
  );
  const { user, loggedIn, loggedOut, isCandidate } = useUser();
  const userData = user;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    mode: "onChange",
  }) as any;

  // submit job form handler
  const onSubmit = async (data: any) => {
    const {
      jobTitle,
      jobDescription,
      applyLink,
      category,
      companyName,
      email,
      headerImage,
      hourlyrateMaximum,
      hourlyrateMinimum,
      location,
      jobTypes,
      region,
      salaryMaximum,
      salaryMinimum,
      specialTags,
    } = data;
    const formData = new FormData();
    formData.append("jobTitle", jobTitle); // return string
    formData.append("jobDescription", jobDescription); // return string
    formData.append("applyLink", applyLink); // return string
    formData.append("category", category[0].categoryTitle); // return category title
    formData.append("company", companyName[0]._id); // return company id
    formData.append("email", email); // return company email
    if (data.headerImage) {
      formData.append("headerImage", headerImage[0]); // return image file
    }
    formData.append("hourlyrateMaximum", hourlyrateMaximum); // return number
    formData.append("hourlyrateMinimum", hourlyrateMinimum); // return number
    formData.append("location", location); // return string
    formData.append("jobTypes", jobTypes); // return array
    formData.append("region", region[0]); // return string
    formData.append("salaryMaximum", salaryMaximum); // return number
    formData.append("salaryMinimum", salaryMinimum); // return number
    formData.append("specialTags", specialTags); // return array

    try {
      await authAxios({
        method: "PUT",
        url: `/jobs/job/${router?.query?.active_id}`,
        data: formData,
      }).then((res) => {
        toast.success(res.data.message, {
          position: "bottom-right",
          className: "foo-bar",
        });
        mutate("/jobs/private");
        reset();
        router.push("/job/manages-jobs");
      });
    } catch (error: any) {
      toast.error(error.message, {
        position: "bottom-right",
        className: "foo-bar",
      });
    }
  };

  // company log image upload preview handler
  function PreviewImage(
    e: any,
    setImage: {
      (value: React.SetStateAction<string>): void;
      (arg0: string): void;
    }
  ) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setImage(filePreview);
  }

  const header_Image = register("headerImage");
  const company_name = register("companyName", {
    required: "Company name is required",
  });

  // default value set
  React.useEffect(() => {
    if (data) {
      const getCompanyName = _.find(ApprovedCompanies, (company) => {
        return company._id === data?.company;
      });
      const getCategoryName = _.find(categoryData, (category) => {
        return category.categoryTitle === data?.category;
      });
      setCompanyName(data?.company ? [data?.company] : ("" as any));
      setValue("companyName", data?.company ? [data?.company] : "");
      setValue("jobTitle", data?.jobTitle);
      setValue("email", data?.email);
      setValue("jobDescription", data?.jobDescription);
      setValue("salaryMinimum", data?.salary?.minimum);
      setValue("salaryMaximum", data?.salary?.maximum);
      setValue("hourlyrateMinimum", data?.hourlyrate?.minimum);
      setValue("hourlyrateMaximum", data?.hourlyrate?.maximum);
      setValue("location", data?.location);
      setValue("applyLink", data?.applyLink);
      setCategoryName(getCategoryName && [getCategoryName]);
      setValue("category", getCategoryName && [getCategoryName]);
      // setValue("headerImage", data?.headerImage);
      if (data?.avatar) {
        setJobHeaderImg(data?.avatar);
      }
      setValue("jobTypes", data?.jobTypes);
      setValue("specialTags", data?.specialTags);
      setValue("region", [data?.region]);
    }
  }, [data, setValue]);

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/*  */}
    </>
  );
};

export default EditJob;
