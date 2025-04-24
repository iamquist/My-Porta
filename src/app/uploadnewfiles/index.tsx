"use client";

import { Link } from "react-alice-carousel";
import { Heading, Text, Img, Button, SelectBox } from "../../components";
import Header from "../../components/Header";
import Sidebar3 from "../../components/Sidebar3";
import React, { useState } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import UploadNewFilesUploading from "@/modals/UploadNewFilesUploading";
import { selectOptionType } from "../../components/SelectBox"; 

const Texts = [
  <Text as="p" className="pl-2 self-center text-[14px] font-normal !text-white-a700">
  Upload
</Text>
];
const optionss: selectOptionType[] = [
  {
    content: (
      <div>
          {/* <Img src="img_vector.svg" width={14} height={6} alt="Vector" className="ml-6 h-[6px] md:ml-0" /> */}
          <div className="flex w-auto justify-center rounded-md bg-white-a700  md:w-full">
            <div className="w-full">
              <button >
              <div className="flex items-center justify-start rounded-md p-2">
                <Img
                  src="img_arrow_right.svg"
                  width={24}
                  height={24}
                  alt="Arrow Right"
                  className="h-[24px]"
                />
                <Text as="p" className="self-end mb-1 pr-1 text-[14px] font-normal hover:font-bold">
                  Upload Files
                </Text>
              </div>
              </button>
              <br></br>
              <button >
              <div className="flex items-center justify-start rounded-md p-2">
                <Img src="img_close.svg" width={24} height={24} alt="Close" className="h-[24px]"/>
                <Text as="p" className="self-end mb-1 pl-1 text-[14px] font-normal hover:font-bold">
                  Upload Folders
                </Text>
              </div>
              </button>
            </div>
          </div>
      </div>
    )
  },
];
const options: selectOptionType[] = [
  {
    content: (
      <div>
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

export default function UploadNewFilesPage() {
 
  return (
    <div className="w-full bg-gray-50 shadow-md">
      <div>
        <Header />
        <div className="flex items-start gap-4">
          <Sidebar3 />
          <div className="flex-1">
            <div className="flex flex-col gap-1">
            <div className="ml-5 mr-6 flex items-center justify-between gap-5 md:mx-0 sm:flex-col">
              <div className="flex flex-1 items-center justify-center px-5 sm:flex-col sm:self-stretch sm:px-5">
                <Heading size="headinglg" as="h1" className="mb-5 self-end text-[24px] font-bold md:text-[22px]">
                    My Porta
                </Heading>
                <Img
                    src="img_arrow_right_gray_700_64x64.svg"
                    width={64}
                    height={64}
                    alt="Arrow Right"
                    className="ml-5 h-[64px] w-[12%] object-contain sm:ml-0 sm:w-full"
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
        <div className="mb-3 flex gap-3 self-end sm:px-5">
          <Img
            src="img_icon_button_21.svg"
            width={36}
            height={36}
            alt="Icon Button 46"
            className="h-[36px] w-[22%] rounded-[50%]"
          />
          <Img
            src="img_icon_button_17.svg"
            width={36}
            height={36}
            alt="Icon Button 47"
            className="h-[36px] w-[22%] rounded-[50%]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[70px] rounded-[16px] bg-white-a700 px-[22px] py-6 md:gap-[52px] sm:gap-[35px] sm:p-5">
        <div className="flex flex-col gap-2.5">
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
                 options={optionss}
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
              alt="Icon Button 45"
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
      <div>
        
      <div className="relative mt-[30px] flex justify-center rounded-md border border-dashed border-blue-700 bg-gray-100_99 p-[26px] shadow-xs sm:p-5">
        <div className="mt-1 flex flex-col items-center">
          <Img
            src="img_close_blue_50.svg"
            width={48}
            height={48}
            alt="Close"
            className="h-[48px] w-[16%] rounded-[50%]"
          />
          <Text as="p" className="mt-[26px] text-[14px] font-normal !text-blue_gray-800">
            Drag and drop here to upload.
          </Text>
          <Text as="p" className="mt-1.5 text-[14px] font-medium !text-blue_gray-900 underline hover:font-extrabold">
            Choose files or folders from your computer.
          </Text>
          <Text size="texts" as="p" className="mt-3.5 text-[12px] font-normal italic !text-blue_gray-500">
            Support .zip and .rar files
          </Text>
          </div>
          </div>
        </div>
      </div>
      <div className="w-fit mb-[104px] rounded-md ml-20 bg-white-a700 p-3 shadow-xl md:mx-0">
        <div className="mb-5 flex flex-col gap-8">
          <div className="flex items-center justify-between gap-5">
            <Text
              size="texts"
              as="p"
              className="self-end !font-archivo text-[12px] font-normal uppercase !text-blue_gray-500"
            >
              More of what you can do:
            </Text>
            <Img
              src="img_button_28.svg"
              width={32}
              height={32}
              alt="Button 28"
              className="h-[32px] rounded"
            />
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-center">
              <Img
                src="img_phone_button_1.svg"
                width={16}
                height={16}
                alt="Phone Button 1"
                className="h-[16px]"
              />
              <div className="flex flex-1 flex-wrap px-3">
                <Text as="p" className="text-[14px] font-medium !text-gray-900_01 underline hover:font-extrabold">
                  Get the mobile app
                </Text>
                <Text as="p" className="ml-1 text-[14px] font-normal !text-gray-900_01">
                  to upload from your phone.
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-center sm:flex-col">
              <Img src="img_pc_1.svg" width={16} height={16} alt="PC 1" className="h-[16px] sm:w-full" />
              <div className="flex flex-1 flex-wrap px-3 sm:self-stretch">
                <Text as="p" className="text-[14px] font-medium !text-gray-900_01 underline hover:font-extrabold">
                  Get the desktop app
                </Text>
                <Text as="p" className="ml-1 text-[14px] font-normal !text-gray-900_01">
                  to upload files larger than 50 GB.{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-wrap items-center sm:flex-col">
              <Img src="img_lock.svg" width={16} height={16} alt="Lock" className="h-[16px] sm:w-full" />
              <Text as="p" className="ml-3 text-[14px] font-medium !text-gray-900_01 underline sm:ml-0 hover:font-extrabold">
                Request files
              </Text>
              <Text as="p" className="ml-1 text-[14px] font-normal !text-gray-900_01 sm:ml-0">
                to be added to this folder by other users.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div className="w-[22%]">
      <div className="flex flex-col gap-[22px] bg-white-a700 py-6 shadow-xs sm:py-5">
        <div className="flex flex-col gap-6">
          <div className="ml-6 mr-8 flex justify-between gap-5 md:mx-0">
            <div className="flex">
              <Img src="img_refresh.svg" width={36} height={36} alt="Refresh" className="h-[36px] rounded-md" />
              <Img
                src="img_icon_button_10.svg"
                width={36}
                height={36}
                alt="Icon Button 49"
                className="h-[36px] rounded-md"
              />
            </div>
            <div className="flex flex-1 justify-end">
              <Img
                src="img_icon_button_25.svg"
                width={36}
                height={36}
                alt="Icon Button 50"
                className="h-[36px] rounded-md"
              />
              <Img
                src="img_icon_button_26.svg"
                width={36}
                height={36}
                alt="Icon Button 51"
                className="h-[36px] rounded-md"
              />
              <Img
                src="img_icon_button_11.svg"
                width={36}
                height={36}
                alt="Icon Button 52"
                className="h-[36px] rounded-md"
              />
            </div>
          </div>
        <div className="h-px bg-gray-300" />
      </div>
      <div className="mx-6 md:mx-0">
        <div className="flex flex-col items-center">
          <div className="flex items-center self-stretch">
            <Img
              src="img_icon_button_28.svg"
              width={36}
              height={36}
              alt="Icon Button 53"
              className="h-[36px] rounded-md"
            />
            <Heading size="textlg" as="h2" className="text-[16px] font-medium">
              Brand Guideline
            </Heading>
          </div>
          <Img
            src="img_folder_1.svg"
            width={64}
            height={64}
            alt="Folder 10"
            className="mt-[42px] h-[64px] w-[24%] object-contain"
          />
          <div className="mt-[50px] flex flex-col items-start gap-3 self-stretch">
            <Heading as="h3" className="text-[14px] font-bold !text-gray-700">
              Shared to
            </Heading>
            <div className="self-stretch">
              <div className="flex">
                <div className="flex w-[42%]">
                  <div className="flex w-full">
                    <Img
                      src="img_avatar_9.svg"
                      width={36}
                      height={36}
                      alt="Avatar 23"
                      className="h-[36px] w-[50%] rounded-[50%]"
                    />
                    <Img
                      src="img_avatar_10.svg"
                      width={36}
                      height={36}
                      alt="Avatar 24"
                      className="relative ml-[-8px] h-[36px] w-[50%] rounded-[50%]"
                    />
                </div>
                <div className="relative ml-[-8px] flex w-full">
                  <Img
                    src="img_avatar_11.svg"
                    width={36}
                    height={36}
                    alt="Avatar 25"
                    className="h-[36px] w-[50%] rounded-[50%]"
                  />
                  <Img
                    src="img_avatar_12.svg"
                    width={36}
                    height={36}
                    alt="Avatar 26"
                    className="relative ml-[-8px] h-[36px] w-[50%] rounded-[50%]"
                  />
                </div>
              </div>
              <Button size="xl" shape="square" className="relative ml-[-8px] w-[36px]">
                <Img src="img_icon_button_88.svg" width={36} height={36} />
              </Button>
              </div>
            </div>
          </div>
          <Heading as="h4" className="mt-[26px] self-start text-[14px] font-bold !text-gray-700">
            Owned by
          </Heading>
          <div className="mt-3 flex items-center gap-4 self-stretch">
            <Img
              src="img_avatar_14.svg"
              width={36}
              height={36}
              alt="Avatar 28"
              className="h-[36px] w-[14%] rounded-[50%]"
            />
            <Text as="p" className="text-[14px] font-normal">
              You
            </Text>
          </div>
        </div>
      </div>
      <Tabs
        className="mb-[38px] self-stretch"
        selectedTabClassName="!text-black-900 font-bold"
        selectedTabPanelClassName="mt-[26px] ml-6 mr-5 md:mx-0 !relative tab-panel--selected"
      >
        <div className="h-px bg-gray-300" />
        <TabList className="mx-6 mt-2.5 flex flex-wrap gap-4 px-2 py-3.5 md:mx-0">
          <Tab className="text-[12px] font-normal text-gray-700">Details</Tab>
          <Tab className="text-[12px] font-normal text-gray-700">Activities</Tab>
        </TabList>
        {[...Array(2)].map((_, index) => (
          <TabPanel key={`tab-panel${index}`} className="absolute ml-6 mr-5 mt-[26px] items-center md:mx-0">
            <div className="w-full">
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    File Type
                  </Text>
                  <Heading as="h5" className="text-[14px] font-bold">
                    Folder
                  </Heading>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    Size
                  </Text>
                  <Heading as="h6" className="text-[14px] font-bold">
                    --
                  </Heading>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    Last Modified
                  </Text>
                  <Heading as="p" className="text-[14px] font-bold">
                    Jan 18, 2023
                  </Heading>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    Date Created
                  </Text>
                  <Heading as="p" className="text-[14px] font-bold">
                    Jan 17, 2023
                  </Heading>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    Permission
                  </Text>
                  <Heading as="p" className="text-[14px] font-bold">
                    Private
                  </Heading>
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}