"use client";

import { Text, Img, Heading, Button, SelectBox } from "../../components";
import FileUsageDashboardRow from "../../components/FileUsageDashboardRow";
import FileUsageDashboardRow1 from "../../components/FileUsageDashboardRow1";
import FileUsageDashboardRow2 from "../../components/FileUsageDashboardRow2";
import Header from "../../components/Header";
import Sidebar4 from "../../components/Sidebar4";
import Link from "next/link";
import React, { Suspense } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  { frame: "+82", frame1: "new files uploaded", frame2: "Details" },
  { frame: "+7", frame1: "active members", frame2: "Details" },
  { frame: "39", frame1: "external views", frame2: "Details" },
  { frame: "+72", frame1: "new comments", frame2: "Details" },
  { frame: "+28", frame1: "file requests", frame2: "Details" },
  { frame: "4", frame1: "invite pending", frame2: "Details" },
];
const data1 = [
  {
    rectangle: "img_container_211.png",
    angelGomezActive: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    frame: "Details",
  },
  {
    rectangle: "img_rectangle_6.png",
    angelGomezActive: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    frame: "Details",
  },
  {
    rectangle: "img_rectangle_7.png",
    angelGomezActive: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    frame: "Details",
  },
  {
    rectangle: "img_container_209.png",
    angelGomezActive: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    frame: "Details",
  },
  {
    rectangle: "img_container_217.png",
    angelGomezActive: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    frame: "Details",
  },
  {
    rectangle: "img_rectangle_1.png",
    angelGomezActive: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    frame: "Details",
  },
];
const data2 = [
  {
    rectangle: "img_container_211.png",
    angelGomez: "Angel Gomez",
    frame: "requested access for",
    frame1: "Key Visual Opt.02",
    frame2: "Pending",
  },
  {
    rectangle: "img_rectangle_7.png",
    angelGomez: "Brian Baker",
    frame: "requested access for",
    frame1: "Key Visual Opt.02",
    frame2: "Pending",
  },
  {
    rectangle: "img_rectangle_7.png",
    angelGomez: "Brian Baker",
    frame: "commented on",
    frame1: "Key Visual",
    frame2: "Unread",
  },
  {
    rectangle: "img_container_209.png",
    angelGomez: "Ryan Brown",
    frame: "commented on",
    frame1: "Key Visual",
    frame2: "Read",
  },
  {
    rectangle: "img_rectangle_6.png",
    angelGomez: "Sarah Green",
    frame: "commented on",
    frame1: "TVC Creative Idea",
    frame2: "Replied",
  },
  {
    rectangle: "img_container_217.png",
    angelGomez: "Thomas Johnson",
    frame: "was invited to",
    frame1: "Brand Guideline",
    frame2: "Pending",
  },
  {
    rectangle: "img_container_211.png",
    angelGomez: "Angel Gomez",
    frame: "replied to you on",
    frame1: "Key Visual",
    frame2: "Replied",
  },
  {
    rectangle: "img_container_211.png",
    angelGomez: "Angel Gomez",
    frame: "requested access for",
    frame1: "Key Visual Opt.02",
    frame2: "Pending",
  },
  {
    rectangle: "img_container_209.png",
    angelGomez: "Ryan Brown",
    frame: "was invited to",
    frame1: "Brand Guideline",
    frame2: "Done",
  },
  {
    rectangle: "img_rectangle_7.png",
    angelGomez: "Brian Baker",
    frame: "was invited to",
    frame1: "Brand Guideline",
    frame2: "Done",
  },
];

export default function FileUsageDashboardPage() {
  return (
    <div className="w-full bg-gray-50 shadow-md">
      <div className="mb-1.5">
        <Header />
        <div className="mr-6 flex items-start gap-6 md:mr-0">
          <Sidebar4 />
          <div className="flex flex-1 items-center gap-6 md:flex-col">
            <div className="flex flex-1 flex-col gap-6 md:self-stretch md:px-5">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-start gap-6">
                  <Heading
                    size="headingxl"
                    as="h1"
                    className="text-[32px] font-bold !text-blue_gray-900 md:text-[30px] sm:text-[28px]"
                  >
                    Insights
                  </Heading>
                  <div className="flex items-center self-stretch rounded-md border border-solid border-gray-300 bg-white-a700 px-6 py-[26px] md:flex-col sm:p-5">
                    <div className="flex w-[46%] justify-center md:w-full">
                      <div className="flex w-full flex-col items-start">
                        <Heading size="textxl" as="h2" className="text-[18px] font-medium">
                          Storage
                        </Heading>
                        <Heading
                          size="heading2xl"
                          as="h3"
                          className="mt-8 text-[40px] font-bold md:text-[38px] sm:text-[36px]"
                        >
                          2160 MB
                        </Heading>
                        <Heading size="textxl" as="h4" className="mt-2 text-[18px] font-normal !text-blue_gray-900_cc">
                          of 3000 GB used
                        </Heading>
                        <div className="mt-[34px] flex items-center justify-center gap-[19px] self-stretch">
                          <div className="flex items-center gap-1.5 rounded-[18px] border border-solid border-indigo-a200 p-1.5">
                            <Img src="img_f_add_1.svg" width={16} height={16} alt="F Add" className="h-[16px]" />
                            <Text as="p" className="self-end text-[14px] font-normal !text-indigo-a200">
                              Get more storage
                            </Text>
                          </div>
                          <Text as="p" className="mb-1.5 self-end text-[14px] font-normal !text-indigo-a200">
                            Clean up space
                          </Text>
                        </div>
                      </div>
                    </div>
              <div className="flex flex-1 items-center gap-7 md:self-stretch">
                <div className="relative h-[158px] flex-1">
                  <CircularProgressbar
                    strokeWidth={15}
                    value={35}
                    styles={{
                      trail: { stroke: "#636ae8" },
                      path: {
                        strokeLinecap: "square",
                        stroke: "#e8618c",
                        transformOrigin: "center",
                        transform: "rotate(-190deg)",
                      },
                    }}
                    className="absolute bottom-0 right-0 top-0 my-auto h-[158px] flex-1"
                  />
                  <CircularProgressbar
                    strokeWidth={15}
                    value={6}
                    styles={{
                      trail: { stroke: "#636ae8" },
                      path: { strokeLinecap: "square", stroke: "#e1602c" },
                    }}
                    className="absolute bottom-0 right-0 top-0 my-auto h-[158px] flex-1"
                  />
                  <CircularProgressbar
                    strokeWidth={15}
                    value={4}
                    styles={{
                      trail: { stroke: "#636ae8" },
                      path: { strokeLinecap: "square", stroke: "#dee1e6" },
                    }}
                    className="absolute bottom-0 right-0 top-0 my-auto h-[158px] flex-1"
                  />
                </div>
                <div className="flex w-[34%] flex-col gap-[18px]">
                  <div className="flex items-center justify-center gap-6">
                    <div className="h-[12px] w-[12px] rounded-md bg-indigo-a200" />
                    <Text as="p" className="text-[14px] font-normal">
                      Documents
                    </Text>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="h-[12px] w-[12px] rounded-md bg-pink-300" />
                    <Text as="p" className="text-[14px] font-normal">
                      Media
                    </Text>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="h-[12px] w-[12px] rounded-md bg-deep_orange-600" />
                    <Text as="p" className="text-[14px] font-normal">
                      Others
                    </Text>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    <div className="h-[12px] w-[12px] rounded-md bg-gray-300" />
                    <Text as="p" className="text-[14px] font-normal">
                      Available
                    </Text>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-8 rounded-md border border-solid border-gray-300 bg-white-a700 p-6 sm:p-5">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="flex flex-col items-start gap-1.5">
                      <div className="flex items-start self-stretch sm:flex-col">
                        <Heading size="textxl" as="h5" className="text-[18px] font-medium">
                          How files are used?
                        </Heading>
                        <div className="flex flex-1 items-center justify-end gap-3.5 self-center sm:self-stretch">
                          <SelectBox
                            color="white_A700"
                            size="xs"
                            shape="round"
                            indicator={
                              <Img
                                src="img_arrowdown_gray_900_01.svg"
                                width={12}
                                height={12}
                                alt="Arrow Down"
                                className="h-[12px] w-[12px]"
                              />
                            }
                            name="Dropdown Button"
                            placeholder={`Last 7 days`}
                            // options={dropdownOptions}
                            className="w-[32%] gap-3.5 rounded-[14px] border-[0.5px] border-solid border-gray-300 px-2.5"
                          />
                          <Img
                            src="img_icon_button_142.svg"
                            width={32}
                            height={32}
                            alt="Icon Button 142"
                            className="h-[32px] w-[6%] rounded-[50%]"
                          />
                      </div>
                    </div>
                    <Text as="p" className="text-[14px] font-normal !text-gray-500">
                      How has your Porta been used for personal and collaboration?
                    </Text>
                    </div>
                    </div>
                    <div className="rounded-md bg-white-a700 px-[18px] py-7 shadow-xs sm:py-5">
                    <div className="flex items-center gap-2.5 md:flex-col">
                        <div className="flex w-[8%] flex-col items-start md:w-full">
                        <Text as="p" className="w-full text-[14px] font-normal leading-[22px] !text-gray-500">
                            500 GB
                        </Text>
                        <Text
                            as="p"
                            className="mt-1.5 w-full text-[14px] font-normal leading-[22px] !text-gray-500"
                        >
                            400 GB
                        </Text>
                        <Text
                            as="p"
                            className="mt-1.5 w-full text-[14px] font-normal leading-[22px] !text-gray-500"
                        >
                            300 GB
                        </Text>
                        <Text
                            as="p"
                            className="mt-1.5 w-full text-[14px] font-normal leading-[22px] !text-gray-500"
                        >
                            200 GB
                        </Text>
                        <Text as="p" className="mt-1.5 text-[14px] font-normal !text-gray-500">
                            100 GB
                        </Text>
                        <Text as="p" className="mt-[30px] text-[14px] font-normal !text-gray-500">
                            0
                        </Text>
                        </div>
                        <div className="relative h-[250px] flex-1 bg-[url(/images/img_group_26.svg)] bg-cover bg-no-repeat md:w-full md:flex-none md:self-stretch">
                        <Img
                            src="img_image_91.svg"
                            width={572}
                            height={250}
                            alt="Image 91"
                            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[250px] flex-1"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[240px] flex-1 bg-[url(/images/img_group_28.svg)] bg-cover bg-no-repeat md:h-auto">
                        <Img
                            src="img_image_93.svg"
                            width={572}
                            height={168}
                            alt="Image 93"
                            className="mt-[70px] h-[168px] w-full md:h-auto"
                        />
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-4 sm:flex-col">
                    <div className="flex w-[22%] justify-between gap-5 sm:w-full">
                        <div className="flex items-center gap-2">
                        <Img
                            src="img_checkmark_deep_purple_700.svg"
                            width={16}
                            height={16}
                            alt="Checkmark"
                            className="h-[16px]"
                        />
                        <Text as="p" className="text-[14px] font-normal !text-gray-900_01">
                            All
                        </Text>
                        </div>
                        <div className="flex items-center gap-2">
                        <Img
                            src="img_checkmark_pink_700.svg"
                            width={16}
                            height={16}
                            alt="Checkmark"
                            className="h-[16px]"
                        />
                        <Text as="p" className="text-[14px] font-normal !text-gray-900_01">
                            Upload
                        </Text>
                        </div>
                        </div>
                        <div className="flex items-center gap-2">
                        <Img
                            src="img_checkmark_indigo_700.svg"
                            width={16}
                            height={16}
                            alt="Checkmark"
                            className="h-[16px]"
                        />
                        <Text as="p" className="text-[14px] font-normal !text-gray-900_01">
                            Comment & Edit
                        </Text>
                        </div>
                        <div className="flex flex-1 items-center gap-2 px-4 sm:self-stretch">
                        <Img
                            src="img_checkmark_deep_orange_800.svg"
                            width={16}
                            height={16}
                            alt="Checkmark"
                            className="h-[16px]"
                        />
                        <Text as="p" className="text-[14px] font-normal !text-gray-900_01">
                            Download
                        </Text>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className="rounded-md border border-solid border-gray-300 bg-white-a700 p-[18px]">
                    <div className="mt-1.5 flex flex-col gap-[18px]">
                        <div className="flex items-center gap-3 md:flex-col">
                        <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
                            <Heading size="textxl" as="h6" className="text-[18px] font-medium">
                            Activity
                            </Heading>
                            <SelectBox
                            color="white_A700"
                            size="xs"
                            shape="round"
                            indicator={
                                <Img
                                src="img_arrowdown_gray_900_01.svg"
                                width={12}
                                height={12}
                                alt="Arrow Down"
                                className="h-[12px] w-[12px]"
                                />
                            }
                            name="Dropdown Button"
                            placeholder={`Last 24 hours`}
                            // options={dropdownOptions}
                            className="w-[26%] gap-3.5 rounded-[14px] border-[0.5px] border-solid border-gray-300 px-2.5"
                            />
                        </div>
                        <Img
                            src="img_icon_button_142.svg"
                            width={32}
                            height={32}
                            alt="Icon Button 145"
                            className="h-[32px] w-[5%] rounded-[50%]"
                        />
                        </div>
                        <div>
                        <div className="flex flex-wrap px-3 py-3.5">
                        <Heading as="p" className="text-[14px] font-bold !text-indigo-a200">
                            All
                        </Heading>
                        <Text as="p" className="ml-6 self-end text-[14px] font-normal">
                            File Requests
                        </Text>
                        <Text as="p" className="ml-6 text-[14px] font-normal">
                            Comments
                        </Text>
                        <Text as="p" className="ml-6 text-[14px] font-normal">
                            Invitation
                        </Text>
                        <Text as="p" className="ml-6 self-end text-[14px] font-normal">
                            Upload
                        </Text>
                        <Text as="p" className="ml-6 text-[14px] font-normal">
                            Download
                        </Text>
                        </div>
                        <div className="flex flex-col rounded-md">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {data2.map((d, index) => (
                            <FileUsageDashboardRow {...d} key={"table17" + index} />
                            ))}
                        </Suspense>
                        </div>
                    </div>
                    <div className="flex gap-1.5 md:flex-col">
                        <div className="flex flex-1 items-center justify-center md:self-stretch">
                            <Text as="p" className="text-[14px] font-normal !text-gray-900_01">
                                <span>Show&nbsp;</span>
                                <span className="font-manrope font-semibold">1</span>
                                <span>&nbsp;to&nbsp;</span>
                                <span className="font-manrope font-semibold">10</span>
                                <span>&nbsp;of&nbsp;</span>
                                <span className="font-manrope font-semibold">25</span>
                            </Text>
                        <div className="flex flex-1 justify-end">
                            <Img 
                            src="img_arrow_left_gray_500.svg"
                            width={36}
                            height={36}
                            alt="Arrow Left"
                            className="h-[36px] w-[6%] rounded-[50%]"
                            />
                        <Button color="gray_300" className="ml-2 min-w-[30px] rounded-[14px] px-3">
                            1
                        </Button>
                        <div className="ml-1.5 flex h-[36px] w-[32px] flex-col items-center justify-center rounded-[16px] md:h-auto">
                         <Text as="p" className="text-[14px] font-normal !text-gray-500">
                            2
                         </Text>
                         </div>
                         <div className="ml-1.5 flex h-[36px] w-[32px] flex-col items-center justify-center rounded-[16px] md:h-auto">
                         <Text as="p" className="text-[14px] font-normal !text-gray-500">
                            3
                         </Text>
                         </div>
                         </div>
                         </div>
                         <Img 
                         src="img_arrow_right_gray_500_32x32.svg"
                         width={36}
                         height={36}
                         alt="Arrow Right"
                         className="h-[36px] w-[5%] rounded-[50%]"
                         />
                         </div>
                         </div>
                         </div>
                         </div>
                         </div>
                        <div className="flex w-[30%] flex-col gap-6 md:w-full md:px-5">
                        <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-[30px] rounded-[10px] border border-solid border-gray-300 bg-white-a700 p-[22px] sm:p-5">
                            <div className="flex items-center justify-between gap-5">
                            <Heading size="textxl" as="p" className="self-end text-[18px] font-medium">
                                Stats
                            </Heading>
                            <SelectBox
                                color="white_A700"
                                size="xs"
                                shape="round"
                                indicator={
                                <Img
                                    src="img_arrowdown_gray_900_01.svg"
                                    width={12}
                                    height={12}
                                    alt="Arrow Down"
                                    className="h-[12px] w-[12px]"
                                />
                                }
                                name="Dropdown Button"
                                placeholder={`Last 7 days`}
                                // options={dropdownOptions}
                                className="w-[50%] gap-3.5 rounded-[14px] border-[0.5px] border-solid border-gray-300 px-2.5"
                            />
                            </div>
                            <div className="flex flex-col rounded-md">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {data.map((d, index) => (
                                <FileUsageDashboardRow1 {...d} key={"table15" + index} />
                                ))}
                            </Suspense>
                            </div>
                        </div>
                        <div>
                        <div className="flex flex-col items-start justify-center rounded-[10px] border border-solid border-gray-300 bg-white-a700 px-[22px] py-5 sm:px-5">
                            <div className="flex items-center justify-between gap-5 self-stretch">
                            <Heading size="textxl" as="p" className="self-end text-[18px] font-medium">
                            Licenses used
                            </Heading>
                            <Button color="gray_100" size="lg" shape="circle" className="w-[32px] rounded-[16px] px-2">
                            <Img src="img_profile.svg" width={8} height={14} />
                            </Button>
                        </div>
                        <Text as="p" className="mt-3 w-full text-[14px] font-normal leading-[22px] !text-gray-500">
                            Licenses let your team members access to your Porta.
                        </Text>
                        <div className="mt-8 flex items-center self-stretch">
                            <div className="flex flex-1 flex-wrap items-center">
                            <Heading
                                size="heading2xl"
                                as="h1"
                                className="text-[40px] font-bold md:text-[38px] sm:text-[36px]"
                            >
                                18
                            </Heading>
                            <Heading size="textxl" as="p" className="text-[18px] font-normal !text-blue_gray-900_cc">
                                /25
                            </Heading>
                            </div>
                            <Link href="#" className="self-end rounded">
                            <Text size="texts" as="p" className="p-1.5 text-[12px] font-normal !text-blue-400">
                                See all
                            </Text>
                            </Link>
                        </div>
                        <Img
                            src="img_slider_3.svg"
                            width={284}
                            height={28}
                            alt="Slider 3"
                            className="h-[28px] w-full md:h-auto"
                        />
                        <Text as="p" className="mt-[26px] text-[14px] font-medium !text-blue_gray-900 underline">
                            Request licenses
                        </Text>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-[30px] rounded-[10px] border border-solid border-gray-300 bg-white-a700 p-[22px] sm:p-5">
                        <div className="flex items-center justify-between gap-5">
                            <Heading size="textxl" as="p" className="text-[18px] font-medium">
                            Active members
                            </Heading>
                            <Img
                            src="img_icon_button_142.svg"
                            width={32}
                            height={32}
                            alt="Icon Button 144"
                            className="h-[32px] w-[10%] rounded-[50%]"
                            />
                        </div>
                        <div className="flex flex-col rounded-md">
                            <Suspense fallback={<div>Loading feed...</div>}>
                            {data1.map((d, index) => (
                                <FileUsageDashboardRow2 {...d} key={"table16" + index} />
                            ))}
                            </Suspense>
                        </div>
                        </div>
                        <div className="flex flex-col items-start rounded-[10px] border border-solid border-gray-300 bg-white-a700 px-6 py-[22px] sm:p-5">
                        <div className="flex items-center justify-between gap-5 self-stretch">
                            <Heading size="textxl" as="p" className="self-end text-[18px] font-medium">
                            External sharing
                            </Heading>
                        <Img
                            src="img_icon_button_142.svg"
                            width={32}
                            height={32}
                            alt="Icon Button 146"
                            className="h-[32px] w-[10%] rounded-[50%]"
                        />
                        </div>
                        <Text as="p" className="mt-2.5 w-full text-[14px] font-normal leading-[22px] !text-gray-500">
                            Create a report of sharing activities, who shared them and more.
                        </Text>
                        <div className="mt-6 self-stretch">
                            <div className="flex">
                            <div className="flex">
                                <Img
                                src="img_frame_gray_100_06.svg"
                                width={48}
                                height={48}
                                alt="Frame"
                                className="h-[48px] w-[50%] rounded-[50%]"
                                />
                                <Img
                                src="img_frame_red_50.svg"
                                width={48}
                                height={48}
                                alt="Frame"
                                className="relative ml-[-6px] h-[48px] w-[50%] rounded-[50%]"
                                />
                            </div>
                            <Img
                            src="img_frame_gray_100_05.svg"
                            width={48}
                            height={48}
                            alt="Frame"
                            className="relative ml-[-6px] h-[48px] w-[16%] rounded-[50%]"
                            />
                        </div>
                        </div>
                        <Text as="p" className="mb-[68px] mt-[34px] text-[14px] font-medium !text-blue_gray-900 underline">
                            Export Report
                        </Text>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
  );
}