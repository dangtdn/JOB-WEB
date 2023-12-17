import Banner from "@/components/Banner/Banner";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import JobCard from "@/components/Cards/JobCard/JobCard";
import Navbar from "@/components/Header/Header";
import Image from "next/image";
import { RiGlobalLine, RiFacebookFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCalendar, BsClock, BsBag, BsWatch } from "react-icons/bs";

export default function JobDetail() {
  const renderBody = () => {
    return (
      <section className="pb-24 !bg-gray-100 w-full">
        <div className="container mx-auto">
          <Breadcrumb />
          <div className="lg:grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <div className="p-8 rounded-md bg-white flex flex-wrap justify-between items-center mb-6 relative">
                <div className="flex gap-6 items-center flex-wrap">
                  <div>
                    <div style={{ marginBottom: "-7px" }}>
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                            style={{
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </span>
                        <img
                          alt="img"
                          srcSet="https://res.cloudinary.com/js-template/image/upload/v1649142612/eeli62k6lgqzrc0x56qo.png?w=128&q=75 1x, https://res.cloudinary.com/js-template/image/upload/v1649142612/eeli62k6lgqzrc0x56qo.png?w=256&q=75 2x"
                          src="https://res.cloudinary.com/js-template/image/upload/v1649142612/eeli62k6lgqzrc0x56qo.png?w=256&q=75"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                  </div>
                  <div className="mb-6 xl:mb-0">
                    <h2 className="text-lg text-black font-bold leading-6 !mb-2">
                      Billing Support Specialist Job
                    </h2>
                    <p className="text-grayLight text-xss1 font-normal !mb-2">
                      <span>Commercial/Supply</span>
                    </p>
                    <ul className="flex gap-3 flex-wrap items-center">
                      <li>
                        <span className="font-medium">Share on</span>
                      </li>
                      <li>
                        <button
                          aria-label="facebook"
                          className="react-share__ShareButton social-icon"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <div style={{ marginBottom: "-7px" }}>
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                overflow: "hidden",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: "relative",
                                maxWidth: "100%",
                              }}
                            >
                              <RiFacebookFill />
                            </span>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid">
                  <button className="py-2.5 block px-6 mb-2 leading-4 text-white bg-themePrimary rounded-md transition-all hover:bg-black hover:text-green">
                    Apply Now
                  </button>
                </div>
                <button className="!p-2 group flex absolute top-0 right-0 justify-center items-center gap-2 mb-2 leading-4 rounded-md transition-all">
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    className="text-themeLight group-hover:text-themePrimary text-lg"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                  </svg>
                </button>
              </div>
              <div className="p-8 rounded-md bg-white relative">
                <h4 className="text-lg2 font-bold text-black leading-6 mb-6">
                  Job Description
                </h4>
                <div className="mb-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isnt anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </div>
                <div className="mb-8">
                  <h4 className="text-lg2 font-bold text-black leading-6 mb-6">
                    Tagged as:
                  </h4>
                  <ul className="flex gap-3 flex-wrap">
                    <li className="text-deep text-xss1 font-normal py-0.5 px-3 rounded-sm border border-solid border-gray">
                      CSS
                    </li>
                    <li className="text-deep text-xss1 font-normal py-0.5 px-3 rounded-sm border border-solid border-gray">
                      HTML
                    </li>
                    <li className="text-deep text-xss1 font-normal py-0.5 px-3 rounded-sm border border-solid border-gray">
                      React
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="p-8 rounded-md bg-white mb-6 relative">
                <h4 className="text-lg2 font-bold text-black leading-6 mb-6">
                  Job Overview
                </h4>
                <ul>
                  <li className="flex gap-3 items-center flex-wrap !mb-3">
                    <div>
                      <div style={{ marginBottom: "-7px" }}>
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <BsCalendar />
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-black leading-5 mb-0">
                        Job Posted
                      </h5>
                      <p className="text-grayLight text-sm font-normal" />
                    </div>
                  </li>
                  <li className="flex gap-3 items-center flex-wrap !mb-3">
                    <div>
                      <div style={{ marginBottom: "-7px" }}>
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <BsClock />
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-black leading-5 mb-0">
                        Deadline
                      </h5>
                      <p className="text-grayLight text-sm font-normal">
                        April 30, 2022
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-center flex-wrap !mb-3">
                    <div>
                      <div style={{ marginBottom: "-7px" }}>
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <BsBag />
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-black leading-5 mb-0">
                        Job Types
                      </h5>
                      <p className="text-grayLight text-sm font-normal">
                        Full Time
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-center flex-wrap !mb-3">
                    <div>
                      <div style={{ marginBottom: "-7px" }}>
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <BsWatch />
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-black leading-5 mb-0">
                        Hourly Rate
                      </h5>
                      <p className="text-grayLight text-sm font-normal">
                        30 - 50 / hour
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-center flex-wrap !mb-3">
                    <div>
                      <div style={{ marginBottom: "-7px" }}>
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <FaMoneyBillWave />
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-black leading-5 mb-0">
                        Salary
                      </h5>
                      <p className="text-grayLight text-sm font-normal">
                        25k - 45k{" "}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-center flex-wrap !mb-3">
                    <div>
                      <div style={{ marginBottom: "-7px" }}>
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <MdOutlineLocationOn />
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-base font-medium text-black leading-5 mb-0">
                        Job Location
                      </h5>
                      <p className="text-grayLight text-sm font-normal">
                        Anywhere
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-md bg-white relative">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div style={{ marginBottom: "-7px" }}>
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e"
                            style={{
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </span>
                        <img
                          alt="img"
                          srcSet="https://res.cloudinary.com/js-template/image/upload/v1649142612/eeli62k6lgqzrc0x56qo.png?w=128&q=75 1x, https://res.cloudinary.com/js-template/image/upload/v1649142612/eeli62k6lgqzrc0x56qo.png?w=256&q=75 2x"
                          src="https://res.cloudinary.com/js-template/image/upload/v1649142612/eeli62k6lgqzrc0x56qo.png?w=256&q=75"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg2 font-medium text-black leading-6 mb-1">
                    JS Template
                  </h4>
                  <p className="text-xs font-normal text-black leading-5 mb-4">
                    Get it done with love
                  </p>
                  <p className="mb-3">
                    <a
                      className="text-xxs font-normal text-black leading-6 block"
                      href="mailto:rjrobi900@gmail.com"
                    >
                      rjrobi900@gmail.com
                    </a>
                    <a
                      className="text-xxs font-normal text-black leading-6 block"
                      href="tel:01980033442"
                    >
                      01980033442
                    </a>
                  </p>
                  <ul className="flex gap-3 flex-wrap justify-center">
                    <li>
                      <a
                        href="https://yourwebsite.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                      >
                        <div style={{ marginBottom: "-7px" }}>
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative",
                              maxWidth: "100%",
                            }}
                          >
                            <RiGlobalLine />
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div style={{ marginBottom: "-7px" }}>
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative",
                              maxWidth: "100%",
                            }}
                          >
                            <RiFacebookFill />
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div style={{ marginBottom: "-7px" }}>
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              overflow: "hidden",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: "relative",
                              maxWidth: "100%",
                            }}
                          >
                            <TiSocialLinkedin />
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      {/* <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center pt-12">
        <Banner />
        {renderBody()}
      </main>
      <Footer /> */}
    </div>
  );
}
