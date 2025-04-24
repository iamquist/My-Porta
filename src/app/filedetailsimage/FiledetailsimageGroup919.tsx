"use client";

import { Text, Img, Input, Heading } from "../../components";
import FileDetailsImage1 from "../../components/FileDetailsImage1";
import { CloseSVG } from "../../components/Input/close";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const data = [
  {
    joshuaDavis: "Joshua Davis",
    p3MinsAgo: "3 mins ago",
    iAlsoThinkThe: "I also think the ribbon doesn't fit in.",
  },
  {
    joshuaDavis: "Joshua Davis",
    p3MinsAgo: "3 mins ago",
    iAlsoThinkThe: "I also think the ribbon doesn't fit in.",
  },
  {
    joshuaDavis: "Joshua Davis",
    p3MinsAgo: "3 mins ago",
    iAlsoThinkThe: "I also think the ribbon doesn't fit in.",
  },
];

export default function FiledetailsimageGroup919() {
  const [searchBarValue6, setSearchBarValue6] = React.useState("");

  return (
    <div className="mb-44 flex flex-col gap-3.5">
      <div>
        <div className="flex flex-col gap-3">
          <div className="mx-6 flex justify-center md:mx-0">
            <Img
              src="img_arrow_left_gray_900_01.svg"
              width={36}
              height={36}
              alt="Arrow Left"
              className="h-[36px] rounded-md"
            />
            <div className="flex flex-1 justify-end">
              <Img
                src="img_icon_button_69.svg"
                width={36}
                height={36}
                alt="Icon Button 69"
                className="h-[36px] rounded-md"
              />
              <Img
                src="img_icon_button_11.svg"
                width={36}
                height={36}
                alt="Icon Button 68"
                className="h-[36px] rounded-md"
              />
            </div>
          </div>
          <div className="h-px bg-gray-100" />
        </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="mx-6 flex justify-center md:mx-0">
              <div className="flex flex-1 items-center">
                <Img
                  src="img_icon_button_71.svg"
                  width={32}
                  height={32}
                  alt="Icon Button 71"
                  className="h-[32px] rounded-md"
                />
                <Heading size="textlg" as="h1" className="self-end text-[16px] mb-2 font-medium">
                  Key Visuals.jpg
                </Heading>
              </div>
              <Img
                src="img_arrow_right_gray_500_32x32.svg"
                width={32}
                height={32}
                alt="Arrow Right"
                className="h-[32px] rounded-md"
              />
            </div>
            <div className="h-px bg-gray-100" />
          </div>
      </div>
      <Tabs
        className="flex flex-col gap-6 self-stretch"
        selectedTabClassName="!text-black-900 font-bold"
        selectedTabPanelClassName="!relative tab-panel--selected"
      >
        <TabList className="mx-6 flex flex-wrap gap-[22px] px-3 py-4 md:mx-0">
          <div className="flex w-[50%] flex-col items-center gap-3">
              <Heading as="h3" className="mt-4 text-[10px] text-center h-3 font-bold !text-black-900">
              Comments (12)
              </Heading>
          <div className="h-[4px] w-full self-stretch bg-black-900" />
          </div>
          <div className="flex flex-1 px-3 py-4">
          <Text as="p" className="text-[14px] font-normal">
              Activities
          </Text>
          </div>
          {/* <Tab className="text-[14px] font-normal text-gray-700">Comments (12)</Tab>
          <Tab className="text-[14px] font-normal text-gray-700">Activities</Tab> */}
        </TabList>
        {[...Array(2)].map((_, index) => (
          <TabPanel key={`tab-panel${index}`} className="absolute items-center">
            <div className="w-full">
              <div className="flex flex-col gap-3">
                <div className="mx-6 flex items-center md:mx-0">
                  <Input
                    size="xs"
                    name="Textbox 9"
                    placeholder={`Search comments...`}
                    value={searchBarValue6}
                    onChange={(e) => setSearchBarValue6(e.target.value)}
                    prefix={
                      <Img
                        src="img_search_gray_900_01.svg"
                        width={16}
                        height={12}
                        alt="Search"
                        className="my-0.5 h-[12px] w-[16px] object-contain"
                      />
                    }
                    suffix={
                      searchBarValue6?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue6("")} height={12} width={16} fillColor="#f171a1ff" />
                      ) : null
                    }
                    className="flex-grow gap-1.5 rounded-[14px] px-2.5 text-blue gray-200"
                  />
                  <Img
                    src="img_icon_button_72.svg"
                    width={32}
                    height={32}
                    alt="Icon Button 72"
                    className="ml-3 h-[32px] w-[12%] rounded-[50%]"
                  />
                  <Img
                    src="img_icon_button_73.svg"
                    width={32}
                    height={32}
                    alt="Icon Button 73"
                    className="h-[32px] w-[12%] rounded-[50%]"
                  />
                </div>
                <div className="flex flex-col gap-2.5 bg-gray-100_c9 px-6 sm:px-5">
                  <div className="h-px bg-gray-300" />
                  <div className="flex items-center">
                    <Img
                      src="img_avatar_14.svg"
                      width={36}
                      height={36}
                      alt="Avatar 31"
                      className="h-[36px] w-[12%] rounded-[50%]"
                    />
                    <div className="flex flex-1 justify-end">
                      <Img
                        src="img_icon_button_1.svg"
                        width={28}
                        height={28}
                        alt="Icon Button 65"
                        className="h-[28px] w-[12%] rounded-[50%]"
                      />
                      <Img
                        src="img_icon_button_66.svg"
                        width={28}
                        height={28}
                        alt="Icon Button 66"
                        className="h-[28px] w-[12%] rounded-[50%]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Text as="p" className="text-[14px] font-medium !text-blue_gray-500">
                      Joshua Davis
                    </Text>
                    <Text size="texts" as="p" className="text-[12px] font-normal !text-blue_gray-800">
                      Just now
                    </Text>
                  </div>
                  <Text as="p" className="text-[14px] font-normal leading-[22px] !text-gray-900_01">
                    Thanks for the feedback! The revised design will be ready by Jul 1.
                  </Text>
                  <div className="h-px bg-gray-300" />
                </div>
                <div className="mx-6 flex flex-col gap-3 md:mx-0">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <FileDetailsImage1 {...d} key={"group917" + index} className="mr-[38px] md:mr-0" />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}