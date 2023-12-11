"use client";

import { blogsData } from "@/data/blogData";
import { testimonialsData } from "@/data/testimonialsData";
import Banner from "@/components/Banner/Banner";
import Layout from "@/components/Layout/Layout";
import Blogs from "@/components/Blogs/Blogs";
import PopularCategories, { Categories } from "@/components/PopularCategories/PopularCategories";
import { jobs } from "@/utils/dummy-content/mongodb-collections/jobs";
import RecentJob from "@/components/Job/RecentJob";
import Testimonials from "@/components/testimonials/Testimonials";
import getData from "@/utils/dummy-content/i"

const loadingCategory = [
  {
    _id: "621253b9bdd5a651f22648c9",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "45457679i8uyjfgser3465578iui",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "43545676uyjhgfbert45",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "456576787978545634trhfhty",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "34657869796774563452345",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "3452345456767897896575634",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "34523543456457568767856745",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "621346456456dd5a651f22648c9",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "dfgrtuy45634524354",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "wet45645766iujtygberer",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "45645676yjhrfdgw",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
  {
    _id: "ewreryt676879i6kujrythgbe45",
    status: {
      isFeatured: false,
      isActive: true,
    },
    categoryTitle: "Category Name",
    avatar: "/assets/img/avatar.png",
    count: 0,
  },
];

const Home = () => {
  const { } = getData();
  const totalCount = 0;
  const categories: Categories[] = [...categories];

  const CategoryData = ({
    categoryData,
    categoryError,
  }: {
    categoryData: any;
    categoryError: any;
  }) => {
    // if (categoryError) return <div>Error! {categoryError.message}</div>
    if (!categoryData) {
      return <PopularCategories data={categories} />;
    }

    return <>{categoryData && <PopularCategories data={categoryData} />}</>;
  };

  const PopularJobsData = ({ data }: { data: any }) => {
    return (
      <>
        <RecentJob data={data} />
      </>
    );
  };

  return (
    <div>
      <Layout>
        <main>
          <Banner totalCount={totalCount} categories={categories} />
          {/* <CategoryData
						categoryData={categoryData}
						categoryError={categoryError}
					/> */}
          <PopularCategories />
          <PopularJobsData data={jobs} />
          <Blogs data={blogsData} />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
