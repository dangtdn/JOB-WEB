import React from "react";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage:
          'url("https://metajobs.vercel.app/assets/img/findjob-banner-bg.svg")',
      }}
    >
      <div
        className="absolute w-full h-full left-0 top-0 z-2"
        style={{ backgroundColor: "rgba(0, 124, 50, 0.7)" }}
      />
      <div className="container p-16">
        <div className="w-10/12 m-auto z-4 relative pt-10 pb-7">
          <div className="text-center">
            <h1 className="text-xxl xl:text-xxxl font-bold text-white text-center leading-none mb-6">
              Find Your Dream Job
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
