import React from "react";
import ImageOpt from "../optimize/image";
import { LoaderGrowing } from "../../lib/loader/loader";

const JobCompanyName = ({ data }: { data: any }) => {
  return (
    <div className="p-8 rounded-md bg-white relative">
      {(!data?.job || data?.loading) && <LoaderGrowing />}
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <ImageOpt
            width={100}
            height={100}
            noPlaceholder
            src={
              data?.job?.company?.logo
                ? data?.job?.company.logo
                : "/assets/img/avatar.png"
            }
            alt="img"
          />
        </div>
        <h4 className="text-lg2 font-medium text-black leading-6 mb-1">
          {data?.job?.company?.companyName
            ? data?.job?.company.companyName
            : "Company Name"}
        </h4>
        <p className="text-xs font-normal text-black leading-5 mb-4">
          {data?.job?.company?.companyTagline
            ? data?.job?.company.companyTagline
            : "Company Tagline"}
        </p>
        <p className="mb-3">
          <a
            className="text-xxs font-normal text-black leading-6 block"
            href={`mailto:${
              data?.job?.company?.companyEmail
                ? data?.job?.company.companyEmail
                : "info@example.com"
            }`}
          >
            {data?.job?.company?.companyEmail
              ? data?.job?.company.companyEmail
              : "info@example.com"}
          </a>
          <a
            className="text-xxs font-normal text-black leading-6 block"
            href={`tel:${
              data?.job?.company?.phoneNumber
                ? data?.job?.company?.phoneNumber
                : "123456789"
            }`}
          >
            {data?.job?.company?.phoneNumber
              ? data?.job?.company?.phoneNumber
              : "123456789"}
          </a>
        </p>
        <ul className="flex gap-3 flex-wrap justify-center">
          {/* website link */}
          {data?.job?.company?.companyWebsite && (
            <li>
              <a
                href={`${data?.job?.company?.companyWebsite}`}
                target="_blank"
                rel="noreferrer"
                className="block"
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
          {data?.job?.company?.socialLink?.facebook && (
            <li>
              <a
                href={data?.job?.company?.socialLink?.facebook}
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
          {data?.job?.company?.socialLink?.linkedin && (
            <li>
              <a
                href={data?.job?.company?.socialLink?.linkedin}
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
          {data?.job?.company?.socialLink?.twitter && (
            <li>
              <a
                href={data?.job?.company?.socialLink?.twitter}
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
  );
};

export default JobCompanyName;
