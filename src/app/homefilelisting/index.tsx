"use client";

import { Heading, SelectBox, Img, Text, Button } from "../../components";
import Header from "../../components/Header";
import HomeFileListing1 from "../../components/HomeFileListing1";
import HomeFileListingContainer80 from "../../components/HomeFileListingContainer80";
import Sidebar1 from "../../components/Sidebar1";
import HomefilelistingGroup1295 from "./HomefilelistingGroup1295";
import HomefilelistingGroup1320 from "./HomefilelistingGroup1320";
import HomefilelistingGroup1353 from "./HomefilelistingGroup1353";
import HomefilelistingGroup1392 from "./HomefilelistingGroup1392";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { selectOptionType } from "../../components/SelectBox"; 


const data = [
  { container74: "img_container_74.svg", documents: "Documents", p760GB: "760 GB", p223Files: "223 files" },
  { container74: "img_warning_yellow_50.svg", documents: "Documents", p760GB: "760 GB", p223Files: "223 files" },
  {
    container74: "img_container_76.svg",
    documents: "Images",
    p760GB: "760 GB",
    p223Files: "223 files",
    p760gb: "360 GB",
    p223files: "472 files"
  },
  { container74: "img_container_77.svg", documents: "Documents", p760GB: "760 GB", p223Files: "223 files" },
  { container74: "img_inbox.svg", documents: "Documents", p760GB: "760 GB", p223Files: "223 files" }
];
const data1 = [
  { image43: "img_image_18.png", container82: "img_container_18.svg", mediaReportNov: "Media report - Nov 2023" },
  { image43: "img_image_18.png", container82: "img_warning.svg", mediaReportNov: "(Demo) TVC Concept Art..." },
  { image43: "img_image_45.png", container82: "img_image_46.png", mediaReportNov: "Media report - Nov 2023" }
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

export default function HomeFileListingPage() {
  return (
    <div className="w-full bg-gray-50 shadow-md">
      <div>
        <Header />
        <div className="flex gap-4">
          <Sidebar1 />
          <div className="flex flex-1 items-center gap-4 md:flex-col">
            <div className="flex flex-1 flex-col gap-1 md:self-stretch md:px-5">
              <div className="ml-5 mr-6 flex items-center justify-between gap-5 md:mx-0">
                <div className="flex flex-1 items-center gap-5 text-[24px] mb-auto w-[32%] self-end px-2.5 font-bold text-gray-900_01">
                  My Porta
                  <Img
                    src="img_arrow_down_gray_700_64x64.svg"
                    width={64}
                    height={64}
                    alt="Arrow Down"
                    className="h-[64px] w-[16%] object-contain"
                  />
                </div>
                <div className="mb-3 flex gap-3 self-end">
                  <Img
                    src="img_megaphone.svg"
                    width={36}
                    height={36}
                    alt="Megaphone"
                    className="h-[36px] w-[32%] rounded-[50%]"
                  />
                  <Img
                    src="img_icon_button_17.svg"
                    width={36}
                    height={36}
                    alt="Icon Button 17"
                    className="h-[36px] w-[32%] rounded-[50%]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[34px] rounded-[16px] bg-white-a700 py-6 sm:py-5">
                <div className="mx-[22px] flex flex-col gap-6 md:mx-0">
                  <div className="flex items-center sm:flex-col">
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
                              <Img
                                src="img_e_add.svg"
                                width={14}
                                height={12}
                                alt="E Add"
                                className="h-[12px] w-[14px]"
                              />
                              <span>{e.label}</span>
                            </div>
                          </>
                        )}
                        name="Dropdown Button"
                        placeholder={`Create new`}
                        options={options}
                        className="ml-3 w-[32%] gap-1.5 rounded-[16px] px-2.5"
                      />
                      <Img
                        src="img_icon_button_1.svg"
                        width={36}
                        height={36}
                        alt="Icon Button 13"
                        className="ml-3 h-[36px] w-[6%] rounded-[50%]"
                      />
                      </div>
                      <SelectBox
                        variant="outline"
                        shape="round"
                        indicator={
                          <Img
                            src="img_lightbulb.svg"
                            width={14}
                            height={12}
                            alt="Light Bulb"
                            className="h-[12px] w-[14px]"
                          />
                        }
                        formatOptionLabel={(e: any) => (
                          <>
                            <div className="flex items-center">
                              <Img
                                src="img_filter_list.svg"
                                width={14}
                                height={12}
                                alt="Filter List"
                                className="h-[12px] w-[14px]"
                              />
                              <span>{e.label}</span>
                            </div>
                          </>
                        )}
                        name="Dropdown Button"
                        placeholder={`Sort: Last Modified`}
                        // options={dropDownOptions}
                        className="w-[32%] gap-1.5 rounded-[16px] !border-[0.5px] px-2.5 sm:w-full"
                      />
                  </div>
                  <div className="flex flex-col items-start gap-6">
                    <div className="h-px w-full self-stretch bg-gray-300" />
                    <Heading size="headingmd" as="h1" className="text-[20px] font-bold !text-blue_gray-900">
                      Recommend
                    </Heading>
                  </div>
                <div className="flex gap-6 md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data1.map((d, index) => (
                      <HomeFileListingContainer80 {...d} key={"group1068" + index} className="w-[32%] md:w-full" />
                    ))}
                  </Suspense>
                </div>
          </div>
          <div className="flex flex-col gap-[34px]">
            <HomefilelistingGroup1353 />
            <HomefilelistingGroup1392 />
          </div>
        </div>
      </div>
      <Tabs
        className="w-[28%] bg-white-a700 py-6 shadow-xs md:w-full md:px-5 sm:p-5"
        selectedTabClassName="!text-black-900 font-bold"
        selectedTabPanelClassName="mt-6 mb-[456px] mx-[22px] md:mx-0 !relative tab-panel--selected"
      >
        <HomefilelistingGroup1295 />
        <HomefilelistingGroup1320 />
        <TabList className="mx-6 mt-2.5 flex flex-wrap gap-4 px-2 py-3.5 md:mx-0">
          <Tab className="text-[12px] font-normal text-gray-700">Details</Tab>
          <Tab className="text-[12px] font-normal text-gray-700">Activities</Tab>
        </TabList>
        {[...Array(2)].map((_, index) => (
          <TabPanel key={`tab-panel${index}`} className="absolute mx-[22px] mb-[456px] mt-6 items-center md:mx-0">
            <div className="w-full">
              <div className="flex flex-col gap-4">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <HomeFileListing1 {...d} key={"group1058" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
    </div>
    </div>
    </div>
  );
}