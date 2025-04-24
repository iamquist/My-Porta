"use client";

import { Link } from "react-alice-carousel";
import { Img, Text, SelectBox, Heading, Button } from "../../components";
import Header from "../../components/Header";
import HomeFileListingContainer80 from "../../components/HomeFileListingContainer80";
import Sidebar2 from "../../components/Sidebar2";
import FilelistinggridviewGroup1152 from "./FilelistinggridviewGroup1152";
import FilelistinggridviewGroup1179 from "./FilelistinggridviewGroup1179";
import FilelistinggridviewGroup1181 from "./FilelistinggridviewGroup1181";
import FilelistinggridviewGroup1759 from "./FilelistinggridviewGroup1759";
import React, { Suspense } from "react";
import { selectOptionType } from "../../components/SelectBox"; 

const data = [
  { image43: "img_image_18.png", container82: "img_container_18.svg", mediaReportNov: "Media report - Nov 2023" },
  { image43: "img_image_18.png", container82: "img_warning.svg", mediaReportNov: "(Demo) TVC Concept Art..." },
  { image43: "img_image_45.png", container82: "img_image_46.png", mediaReportNov: "Media report - Nov 2023" },
  { image43: "img_image_47.png", container82: "img_container_18.svg", mediaReportNov: "TVC Script - Brainstorm..." },
  { image43: "img_image_50.png", container82: "img_container_18.svg", mediaReportNov: "Client Feedback Form" },
  { image43: "img_image_51.png", container82: "img_grid.svg", mediaReportNov: "Ads Performance Budget" },
  { image43: "img_image_18.png", container82: "img_container_18.svg", mediaReportNov: "Media report - Nov 2023" },
  { image43: "img_image_18.png", container82: "img_container_18.svg", mediaReportNov: "Media report - Nov 2023" },
  { image43: "img_image_18.png", container82: "img_container_18.svg", mediaReportNov: "Media report - Nov 2023" },
];

const Texts = [
  <Text as="p" className="pl-2 self-center text-[14px] font-normal !text-white-a700 hover:font-bold">
    Upload
  </Text>
];

const options: selectOptionType[] = [
  {
    content: (
      <div className="pr-3 pl-3 pb-4 mt-4">
      <Button
      color="white_A700"
      leftIcon={
          <Img
              src="img_folder_gray_700_18x24.png"
              width={24}
              height={18}
              alt="Folder"
              className="h-[18px]"
          />
      }
      className="self-start w-full justify-start pr-20 text-[14px] font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
      >
      Folder
      </Button>
        <Button
          color="white_A700"
          leftIcon={
          <Img
          src="img_auto_flash.svg"
          width={24}
          height={24}
          alt="Auto Flash"
          className="h-[24px] "
          />
          }
          className="self-start w-full text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
          >
          Automated Folder
      </Button>

      <div className="mt-3 h-px mb-1 w-full self-stretch bg-gray-300" />

      <Button
          color="white_A700"
          rightIcon={
              <Img
              src="img_arrow_right_indigo_a200_24x24.svg"
              width={24}
              height={24}
              alt="Arrow Right"
              className="h-[24px] "
              />
          }
          className="self-start w-full pl-8 text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
          >
          Document
      </Button>
      <Button
          color="white_A700"
          rightIcon={
              <Img
              src="img_arrow_right_indigo_a200_24x24.svg"
              width={24}
              height={24}
              alt="Arrow Right"
              className="h-[24px] "
              />
          }
          className="self-start w-full pl-8 text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
          >
          Presentation
      </Button>
      <Button
          color="white_A700"
          rightIcon={
              <Img
              src="img_arrow_right_indigo_a200_24x24.svg"
              width={24}
              height={24}
              alt="Arrow Right"
              className="h-[24px] "
              />
          }
          className="self-start w-full pl-8 text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
          >
          Spreadsheet
      </Button>
      <Button
          color="white_A700"
          rightIcon={
              <Img
              src="img_arrow_right_indigo_a200_24x24.svg"
              width={24}
              height={24}
              alt="Arrow Right"
              className="h-[24px] "
              />
          }
          className="self-start w-full pl-8 text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
          >
          More
      </Button>
      </div>
    )
  },
];
export default function FileListingGridViewPage() {
  return (
    <div className="w-full bg-gray-50 shadow-md">
      <div>
        <Header />
        <div className="flex items-start gap-4">
          <Sidebar2 />
          <div className="flex flex-1 flex-col gap-1">
            <div className="ml-[-70px] flex items-center justify-center md:mr-0 sm:flex-col">
              <div className="flex flex-1 items-center justify-center px-5 sm:flex-col sm:self-stretch sm:px-5">
                  <Heading size="headinglg" as="h1" className="mb-5 self-end text-[24px] font-bold md:text-[22px]">
                      My Porta
                  </Heading>
                  <Img
                      src="img_arrow_right_gray_700_64x64.svg"
                      width={64}
                      height={64}
                      alt="Arrow Right"
                      className="ml-4 h-[64px] w-[12%] object-contain sm:ml-0 sm:w-full"
                  />
                      Brand Guideline 
                  {/* <SelectBox
                      size="sm"
                      shape="square"
                      name="Brand Guideline"
                      placeholder={`Brand Guideline`}
                      options={dropDownOptions}
                      className="ml-5 w-[36%] px-2.5 text-gray-700 sm:ml-0 sm:w-full"
                  /> */}
                  <Img
                      src="img_arrow_down_gray_700_64x64.svg"
                      width={64}
                      height={64}
                      alt="Arrow Down"
                      className="ml-5 h-[64px] w-[12%] object-contain sm:ml-0 sm:w-full"
                  />
              </div>
              {/* <div className="mb-3 flex gap-3 self-end sm:px-5">
                <Img
                  src="img_megaphone.svg"
                  width={36}
                  height={36}
                  alt="Megaphone"
                  className="h-[36px] w-[22%] rounded-[50%]"
                />
                <Img
                  src="img_icon_button_17.svg"
                  width={36}
                  height={36}
                  alt="Icon Button 32"
                  className="h-[36px] w-[22%] rounded-[50%]"
                />
              </div> */}
              <div className="mb-3 flex gap-3 justify-between self-end sm:px-5 md:w-full">
                <Link href="filelistinglistview">
                  <Img
                      src="img_megaphone.svg"
                      width={32}
                      height={32}
                      alt="Icon Button 21"
                      className="h-[32px]"
                  />
                  </Link>
                  <Img
                      src="img_icon_button_17.svg"
                      width={36}
                      height={36}
                      alt="Icon Button 22"
                      className="h-[36px] rounded-[50%]"
                  />
              </div>
            </div>
            <div className="flex flex-col gap-[22px] rounded-[16px] bg-white-a700 px-[22px] sm:px-5">
              <div className="mt-6 flex flex-col gap-6">
                <div className="flex items-center justify-center sm:flex-col">
                  <div className="flex flex-1 items-center sm:self-stretch">
                    <SelectBox
                      color="indigo_A200"
                      shape="round"
                      indicator={
                        <Img
                          src="img_arrowdown_white_a700.svg"
                          width={14}
                          height={12}
                          alt="Arrow Down"
                          className="h-[12px] w-[14px]"
                        />
                      }
                      formatOptionLabel={(e: any) => (
                        <>
                          <div className="flex items-center">
                            <Img 
                             src="img_twitter.svg"
                             width={14} 
                             height={12} 
                             alt="Twitter" 
                             className="h-[12px] w-[14px]" 
                             />
                            <span>{e.label}</span>
                          </div>
                        </>
                      )}
                      name="Dropdown Button"
                      placeholder={Texts}
                      // options={dropDownOptions}
                      className="w-[24%] gap-1.5 rounded-[16px] px-2.5"
                    />
                    <SelectBox
                      shape="round"
                      indicator={
                        <Img
                          src="img_arrowdown_gray_900_01.svg"
                          width={14}
                          height={12}
                          alt="Arrow Down"
                          className="h-[12px] w-[14px]"
                        />
                      }
                      formatOptionLabel={(e: any) => (
                        <>
                          <div className="flex items-center">
                            <Img src="img_e_add.svg" width={14} height={12} alt="E Add" className="h-[12px] w-[14px]" />
                            <span>{e.label}</span>
                          </div>
                        </>
                      )}
                      name="Dropdown Button"
                      placeholder={"Create new"}
                      options={options}
                      className="ml-3 w-[32%] gap-1.5 rounded-[16px] px-2.5"
                    />
                    <Img
                      src="img_icon_button_1.svg"
                      width={36}
                      height={36}
                      alt="Icon Button 39"
                      className="ml-3 h-[36px] w-[6%] rounded-[50%]"
                    />
                  </div>
                  <div className="flex flex-wrap items-end gap-1.5 rounded-[16px] border-[0.5px] border-solid border-gray-100 p-1.5">
                    <Img src="img_filter_list.svg" width={14} height={14} alt="Filter List" className="h-[14px]" />
                    <Text as="p" className="self-center text-[14px] font-normal !text-gray-900_01">
                      Sort: Last Modified
                    </Text>
                    <Img src="img_lightbulb.svg" width={14} height={14} alt="Light Bulb" className="h-[14px]" />
                  </div>
                </div>
                <div className="h-px bg-gray-300" />
              </div>
              <div className="grid grid-cols-3 justify-center gap-6 md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <HomeFileListingContainer80 {...d} key={"group1000" + index} className="w-full" />
                  ))}
                </Suspense>
              </div>
              </div>
            </div>
            <div className="w-[22%] bg-white-a700 py-6 shadow-xs sm:py-5">
              <FilelistinggridviewGroup1152 />
              <FilelistinggridviewGroup1181 />
              <div className="flex flex-col gap-2.5">
                <FilelistinggridviewGroup1179 />
                <FilelistinggridviewGroup1759 />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};