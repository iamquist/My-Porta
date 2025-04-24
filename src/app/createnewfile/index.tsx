"use client";


import { Heading, Text, Img, Button, Input, SelectBox } from "../../components";
import CreateNewFileRow from "../../components/CreateNewFileRow";
import Header from "../../components/Header"
import Sidebar3 from "../../components/Sidebar3";
import CreatenewfileGroup1355 from "./CreatenewfileGroup1355";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs} from "react-tabs";
import { selectOptionType } from "../../components/SelectBox"; 


const data = [
    {
        designMaterialZip: "Design Material.zip",
        pen: "img_star_gray_700.svg",
        p49MB: "4.9 MB",
        jun232023: "Jun 23, 2023",
        frame: "5 users",
    },
    {
        designMaterialZip: "Branding Package.pdf",
        pen: "img_star_gray_700.svg",
        p49MB: "4.9 MB",
        jun232023: "Jun 23, 2023",
        frame: "5 users",
        p49mb: "3.7 MB",
    },
    {
        designMaterialZip: "Design Material.zip",
        pen: "img_pen_yellow_800.svg",
        p49MB: "4.9 MB",
        jun232023: "Jun 23, 2023",
        frame: "5 users",
        p49mb: "64 KB",
    },
];

const Texts = [
  <Text as="p" className="pl-2 self-center text-[14px] font-normal !text-white-a700 hover:font-bold">
    Upload
  </Text>
];

  const options: selectOptionType[] = [
        {
          content: (
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
          )
        },
        {
          content: (
            <Button
              color="white_A700"
              leftIcon={
                <Img
                  src="img_auto_flash.svg"
                  width={24}
                  height={24}
                  alt="Auto Flash"
                  className="h-[24px]"
                />
              }
              className="self-start w-full text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
            >
              Automated Folder
            </Button>
          )
        },
        {
          content: <div className="mt-3 h-px mb-1 w-full self-stretch bg-gray-300" />
        },
        {
          content: (
            <Button
              color="white_A700"
              rightIcon={
                <Img
                  src="img_arrow_right_indigo_a200_24x24.svg"
                  width={24}
                  height={24}
                  alt="Arrow Right"
                  className="h-[24px]"
                />
              }
              className="self-start w-full pl-8 text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
            >
              Document
            </Button>
          ),
          subMenu: (
            <div className="">
            <div className="flex items-center gap-2 rounded-md px-4 py-2">
            <Img src="img_settings.svg" width={24} height={24} alt="Settings" className="h-[24px]"/>
            <Text as="p" className="self-end text-[14px] font-normal">
                Porta Paper
            </Text>
            </div>
            <div className="flex items-center gap-2 rounded-md px-4 py-2">
            <Img
                src="img_microsoft_word_logo.svg"
                width={24}
                height={24}
                alt="Microsoft Word Logo"
                className="h-[24px]"
            />
            <Text as="p" className="self-start text-[14px] font-normal">
                Word Document
            </Text>
            </div>
            <div className="flex items-center gap-2 rounded-md px-4 py-2">
            <Img
                src="img_document_2.svg"
                width={24}
                height={24}
                alt="Document 2"
                className="h-[24px]"
            />
            <Text as="p" className="self-end text-[14px] font-normal">
                Google Docs
            </Text>
            </div>
            </div>
          )
        },
        {
          content: (
            <Button
              color="white_A700"
              rightIcon={
                <Img
                  src="img_arrow_right_indigo_a200_24x24.svg"
                  width={24}
                  height={24}
                  alt="Arrow Right"
                  className="h-[24px]"
                />
              }
              className="self-start w-full pl-8 text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
            >
              Presentation
            </Button>
          ),
          subMenu: (
            <div className="">
            <div className="flex items-center gap-2 rounded-md px-4 py-2">
            <Img src="img_settings.svg" width={24} height={24} alt="Settings" className="h-[24px]"/>
            <Text as="p" className="self-end text-[14px] font-normal">
                Porta Paper
            </Text>
            </div>
            <div className="flex items-center gap-2 rounded-md px-4 py-2">
            <Img
                src="img_microsoft_word_logo.svg"
                width={24}
                height={24}
                alt="Microsoft Word Logo"
                className="h-[24px]"
            />
            <Text as="p" className="self-start text-[14px] font-normal">
                Word Document
            </Text>
            </div>
            <div className="flex items-center gap-2 rounded-md px-4 py-2">
            <Img
                src="img_document_2.svg"
                width={24}
                height={24}
                alt="Document 2"
                className="h-[24px]"
            />
            <Text as="p" className="self-end text-[14px] font-normal">
                Google Docs
            </Text>
            </div>
            </div>
          )
        },
        {
          content: (
            <Button
              color="white_A700"
              rightIcon={
                <Img
                  src="img_arrow_right_indigo_a200_24x24.svg"
                  width={24}
                  height={24}
                  alt="Arrow Right"
                  className="h-[24px]"
                />
              }
              className="self-start w-full pl-8 text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
            >
              Spreadsheet
            </Button>
          ),
          subMenu: (
            <div className="">
            <div className="flex items-center gap-2 rounded-md px-4 py-2">
            <Img src="img_settings.svg" width={24} height={24} alt="Settings" className="h-[24px]"/>
            <Text as="p" className="self-end text-[14px] font-normal">
                Porta Paper
            </Text>
            </div>
            <div className="flex items-center gap-2 rounded-md px-4 py-2">
            <Img
                src="img_microsoft_word_logo.svg"
                width={24}
                height={24}
                alt="Microsoft Word Logo"
                className="h-[24px]"
            />
            <Text as="p" className="self-start text-[14px] font-normal">
                Word Document
            </Text>
            </div>
            <div className="flex items-center gap-2 rounded-md px-4 py-2">
            <Img
                src="img_document_2.svg"
                width={24}
                height={24}
                alt="Document 2"
                className="h-[24px]"
            />
            <Text as="p" className="self-end text-[14px] font-normal">
                Google Docs
            </Text>
            </div>
            </div>
          )
        },
        {
          content: (
            <Button
              color="white_A700"
              rightIcon={
                <Img
                  src="img_arrow_right_indigo_a200_24x24.svg"
                  width={24}
                  height={24}
                  alt="Arrow Right"
                  className="h-[24px]"
                />
              }
              className="self-start w-full pl-8 text-[14px] justify-between font-normal gap-3 rounded-md px-2.5 hover:font-bold hover:!text-indigo-a200 hover:bg-gray-100_02"
            >
              More
            </Button>
          ),
          //More to add
        }
  ];

//   <div className="w-[40%] self-center rounded-md bg-white-a700 p-3 sm:w-full">
//     <div className="flex items-center gap-2 rounded-md px-4 py-2">
//     <Img src="img_settings.svg" width={24} height={24} alt="Settings" className="h-[24px]"/>
//     <Text as="p" className="self-end text-[14px] font-normal">
//         Porta Paper
//     </Text>
// </div>
// <div className="flex items-center gap-2 rounded-md px-4 py-2">
//     <Img
//         src="img_microsoft_word_logo.svg"
//         width={24}
//         height={24}
//         alt="Microsoft Word Logo"
//         className="h-[24px]"
//     />
//     <Text as="p" className="self-start text-[14px] font-normal">
//         Word Document
//     </Text>
// </div>
// <div className="flex items-center gap-2 rounded-md px-4 py-2">
//     <Img
//         src="img_document_2.svg"
//         width={24}
//         height={24}
//         alt="Document 2"
//         className="h-[24px]"
//     />
//     <Text as="p" className="self-end text-[14px] font-normal">
//         Google Docs
//     </Text>
// </div>
// </div>

export default function CreateNewFilePage() {
    return (
        <div className="w-full bg-gray-50 shadow-md">
            <div>
                <Header/>
                <div className="flex gap-4 md:flex-col">
                    <div className="flex flex-1 items-start gap-4 md:self-stretch md:px-5">
                        <Sidebar3/>
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
                                <div className="mb-3 flex gap-3 self-end">
                                    <Img
                                        src="img_icon_button_21.svg"
                                        width={36}
                                        height={36}
                                        alt="Icon Button 98"
                                        className="h-[36px] w-[22%] rounded-[50%]"
                                    />
                                    <Img
                                        src="img_icon_button_17.svg"
                                        width={36}
                                        height={36}
                                        alt="Icon Button 99"
                                        className="h-[36px] w-[22%] rounded-[50%]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3.5 rounded-[16px] bg-white-white-a700 px-[18px]">
                                <div className="ml-1 mt-6 md:ml-0">
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
                                                        //   options={Texts}
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
                                </div>
                                <div className="ml-1 rounded-[16px] border-[0.5px] border-solid border-white-a700 md:ml-0">
                                    <div className="relative z-[2] h-[272px] px-[184px] md:h-auto md:px-5">
                                        <div className=" flex flex-1 flex-col items-start gap-[26px]">
                                            <Img
                                                src="img_vector_white_a700.png"
                                                width={14}
                                                height={1}
                                                alt="vector"
                                                className="ml-6 h-px object-cover md:ml-0"
                                            />
                                           {/* <>hhhhhhhhhhh</> */}
                                        </div>
                                    </div>
                                    <div className="relative mt-[-272px]">
                                        <div className="flex items-center">
                                            <div className="h-[68px] w-[66px] border-b-[0.5px] border-solid border-gray-100 bg-gray-50"/>
                                            <Button 
                                                color="gray_50"
                                                size="11xl"
                                                shape="square"
                                                className="min-w-[228px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 font-archivo font-bold"
                                            >
                                                Name
                                            </Button>
                                            <Heading 
                                                as="h2"
                                                className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-gray-50 py-6 pl-3 pr-[34px] text-[14px] font-bold !text-gray-700 sm:py-5 sm:pr-5"
                                            >
                                                Size
                                            </Heading>
                                            <Heading 
                                                as="h3"
                                                className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-gray-50 py-6 pl-3 pr-8 text-[14px] font-bold !text-gray-700 sm:py-5 sm:pr-5"
                                            >
                                                Last Modified
                                            </Heading>
                                            <Button 
                                                color="gray_50"
                                                size="11xl"
                                                shape="square"
                                                className="min-w-[94px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 font-archivo font-bold"
                                            >
                                                Shared to
                                            </Button>
                                            {/* <>There is a problem here below</> */}
                                            <div className="h-[68px] w-[4%] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-blue-50"/>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="flex flex-col self-stretch">
                                                <Suspense fallback={<div>Loading feed...</div>}>
                                                    {data.map((d, index) => (
                                                        <CreateNewFileRow {...d} key={"group1859" + index} />
                                                    ))}
                                                </Suspense>
                                            </div>
                                            {/* <div className="relative ml-[196px] mt-[-198px] h-px w-[36%] self-start bg-blue_gray-200 md:ml-0"/> */}
                                            <div className="relative z-[1] mx-[98px] flex items-start justify-end self-stretch md:mx-0 sm:flex-col">
                                                {/* <Img
                                                    src="img_vector_white_a700_16x8.svg"
                                                    width={8}
                                                    height={16}
                                                    alt="vector"
                                                    className="mt-2.5 h-[16px] sm:w-full"
                                                /> */}
                                                {/* <div className="w-[40%] self-center rounded-md bg-white-a700 p-3 sm:w-full">
                                                    <div className="flex items-center gap-2 rounded-md px-4 py-2">
                                                    <Img src="img_settings.svg" width={24} height={24} alt="Settings" className="h-[24px]"/>
                                                    <Text as="p" className="self-end text-[14px] font-normal">
                                                        Porta Paper
                                                    </Text>
                                                </div>
                                                <div className="flex items-center gap-2 rounded-md px-4 py-2">
                                                    <Img
                                                        src="img_microsoft_word_logo.svg"
                                                        width={24}
                                                        height={24}
                                                        alt="Microsoft Word Logo"
                                                        className="h-[24px]"
                                                    />
                                                    <Text as="p" className="self-start text-[14px] font-normal">
                                                        Word Document
                                                    </Text>
                                                </div>
                                                <div className="flex items-center gap-2 rounded-md px-4 py-2">
                                                    <Img
                                                        src="img_document_2.svg"
                                                        width={24}
                                                        height={24}
                                                        alt="Document 2"
                                                        className="h-[24px]"
                                                    />
                                                    <Text as="p" className="self-end text-[14px] font-normal">
                                                        Google Docs
                                                    </Text>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="mt-[30px] self-stretch">
                                            <div className="flex justify-center md:flex-col">
                                                <div className="flex flex-1 justify-center md:self-stretch">
                                                    <Button
                                                        size="12xl"
                                                        shape="square"
                                                        className="w-[66px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 px-[22px] sm:p-5"
                                                    >
                                                        <Img src="img_pen_blue_gray_800.svg" width={20} height={20} />
                                                    </Button>
                                                    <Input
                                                        color="white_A700"
                                                        size="lg"
                                                        shape="square"
                                                        name="Frame"
                                                        placeholder={`POSM mockup.jpg`}
                                                        className="flex-grow border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 px-3 font-medium"
                                                    />
                                                </div>
                                                <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 p-6 sm:p-5">
                                                    <Img src="img_star_gray_700.svg" width={20} height={20} alt="Pen" className="h-[20px]" />
                                                </div>
                                                <Text
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 py-6 pl-3 pr-7 text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pr-5"
                                                >
                                                    127 KB
                                                </Text>
                                                <Text
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 py-6 pl-3 pr-[34px] text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pr-5"
                                                >
                                                    Jun 23, 2023
                                                </Text>
                                                <div className="flex w-[12%] justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3 py-5 md:w-full">
                                                    <Button color="gray_100_01" size="md" shape="round" className="min-w-[58px] rounded-[14px]">
                                                        5 users
                                                    </Button>
                                                </div>
                                                <div className="flex flex-col items-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3.5 py-[22px] sm:py-5">
                                                    <Img src="img_more_vert_1.svg" width={24} height={24} alt="create" className="h-[24px]" />
                                                </div>
                                            </div>
                                            <div className="flex justify-center md:flex-col">
                                                <div className="flex flex-1 justify-center md:self-stretch">
                                                    <Button
                                                        size="12xl"
                                                        shape="square"
                                                        className="w-[66px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 px-[22px] sm:p-5"
                                                    >
                                                        <Img src="img_pen_yellow_900.svg" width={20} height={20} />
                                                    </Button>
                                                    <Button
                                                        size="11xl"
                                                        shape="square"
                                                        className="min-w-[228px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 font-medium !text-gray-900_01"
                                                    >
                                                        Social Media Template 01.pptx
                                                    </Button>
                                                </div>
                                                <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 p-6 sm:p-5">
                                                    <Img src="img_star_gray_700.svg" width={20} height={20} alt="Pen" className="h-[20px]" />
                                                </div>
                                                <Text
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 py-6 pl-3 pr-[26px] text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pr-5"
                                                >
                                                    6.2 MB
                                                </Text>
                                                <Text
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 py-6 pl-3 pr-[34px] text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pr-5"
                                                >
                                                    Jun 23, 2023
                                                </Text>
                                                <div className="flex w-[12%] justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3 py-5 md:w-full">
                                                    <Button color="gray_100_01" size="md" shape="round" className="min-w-[58px] rounded-[14px]">
                                                            5 users
                                                    </Button>
                                                </div>
                                                <div className="flex flex-col items-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3.5 py-[22px] sm:py-5">
                                                    <Img src="img_more_vert_1.svg" width={24} height={24} alt="Pen" className="h-[24px]" />
                                                </div>
                                            </div>
                                            <div className="flex justify-center md:flex-col">
                                                <div className="flex flex-1 justify-center md:self-stretch">
                                                    <Button
                                                        size="12xl"
                                                        shape="square"
                                                        className="w-[66px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 px-[22px] sm:p-5"
                                                    >
                                                        <Img src="img_pen_yellow_900.svg" width={20} height={20} />
                                                    </Button>
                                                    <div className="flex-1 border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 p-3">
                                                        <Text as="p" className="text-[14px] font-medium leading-[22px] !text-gray-900_01">
                                                            Social Media Template 02.pptx
                                                        </Text>
                                                    </div>
                                                </div>
                                                <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 p-6 sm:p-5">
                                                    <Img src="img_star_gray_700.svg" width={20} height={20} alt="Pen" className="h-[20px]" />
                                                </div>
                                                <Text
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 py-6 pl-3 pr-8 text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pr-5"
                                                >
                                                    7.1 MB
                                                </Text>
                                                <Text
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 pb-5 pl-3 pr-[34px] pt-6 text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pt-5"
                                                >
                                                    Jun 23, 2023
                                                </Text>
                                                <div className="flex w-[12%] justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3 py-4 md:w-full">
                                                    <Button color="gray_100_01" size="md" shape="round" className="min-w-[58px] self-end rounded-[14px]">
                                                        5 users
                                                    </Button>
                                                </div>
                                                <div className="flex flex-col items-center justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3.5 py-[18px]">
                                                    <Img src="img_more_vert_1.svg" width={24} height={24} alt="Pen" className="h-[24px]" />
                                                </div>
                                            </div>
                                            <div className="flex justify-center md:flex-col">
                                                <div className="flex flex-1 justify-center md:self-stretch">
                                                    <Button
                                                        size="12xl"
                                                        shape="square"
                                                        className="w-[66px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 px-5"
                                                    >
                                                        <Img src="img_pen_blue_700.svg" width={20} height={20} />
                                                    </Button>
                                                    <Text
                                                        as="p"
                                                        className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 py-[22px] pl-3 pr-[30px] text-[14px] font-medium !text-gray-900_01 sm:py-5 sm:pr-5"
                                                    >
                                                        Clients Document Te...dox
                                                    </Text>
                                                </div>
                                                <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 p-5">
                                                    <Img src="img_star_gray_700.svg" width={20} height={20} alt="Pen" className="h-[20px] self-end"/>
                                                </div>
                                                <Text
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 py-[22px] pl-3 pr-[30px] text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pr-5"
                                                >
                                                    116 KB
                                                </Text>
                                                <Text
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 pb-5 pl-3 pr-[34px] pt-6 text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pt-5"
                                                >
                                                    Jun 23, 2023
                                                </Text>
                                                <div className="flex w-[12%] justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3 py-4 md:w-full">
                                                    <Button color="gray_100_01" size="md" shape="round" className="min-w-[58px] self-end rounded-[14px]">
                                                        5 users
                                                    </Button>
                                                </div>
                                                <div className="flex flex-col items-center justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3.5 py-[18px]">
                                                    <Img src="img_more_vert_1.svg" width={24} height={24} alt="Pen" className="h-[24px]" />
                                                </div>
                                            </div>
                                            <div className="flex justify-center md:flex-col">
                                                <div className="flex flex-1 justify-center md:self-stretch">
                                                    <Button
                                                        size="10xl"
                                                        shape="square"
                                                        className="w-[66px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 px-5"
                                                    >
                                                        <Img src="img_pen_blue_700.svg" width={20} height={20}/>
                                                    </Button>
                                                    <Text
                                                        as="p"
                                                        className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 py-[22px] pl-3 pr-[30px] text-[14px] font-medium !text-gray-900_01 sm:pr-5"
                                                    >
                                                        Client Document Te...docx
                                                    </Text>
                                                </div>
                                                <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 p-5">
                                                    <Img
                                                        src="img_star_gray_700.svg"
                                                        width={20}
                                                        height={20}
                                                        alt="Pen"
                                                        className="h-[20px] self-end"
                                                    />
                                                </div>
                                                <Text 
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 py-[22px] pl-3 pr-[30px] text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pr-5" 
                                                >
                                                    93 MB
                                                </Text>
                                                <Text 
                                                    as="p"
                                                    className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 pb-5 pl-3 pr-[34px] pt-6 text-[14px] font-normal !text-blue_gray-500 sm:py-5 sm:pt-5" 
                                                >
                                                    Jun 23, 2023
                                                </Text>
                                                <div className="flex w-[12%] justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3 py-4 md:w-full">
                                                    <Button
                                                        color="gray_100_01"
                                                        size="md"
                                                        shape="round"
                                                        className="min-w-[58px] self-end rounded-[14px]"
                                                    >
                                                        5 users
                                                    </Button>
                                                </div>
                                                <div className="flex flex-col items-center justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3.5 py-[18px]">
                                                    <Img src="img_more_vert_1.svg" width={24} height={24} alt="Pen" className="h-[24px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[22%] bg-white-a700 py-6 shadow-xs md:w-full md:px-5 sm:p-5">
                    <div>
                        <div className="flex flex-col gap-6">
                            <div className="ml-6 mr-8 flex justify-between gap-5 md:mx-0">
                                <div className="flex">
                                    <Img src="img_refresh.svg" width={36} height={36} alt="Refresh" className="h-[36px] rounded-md" />
                                    <Img
                                        src="img_icon_button_10.svg"
                                        width={36}
                                        height={36}
                                        alt="Icon Button 101"
                                        className="h-[36px] rounded-md"
                                    />
                                </div>
                                <div className="flex flex-1 justify-end">
                                    <Img
                                        src="img_icon_button_25.svg"
                                        width={36}
                                        height={36}
                                        alt="Icon Button 102"
                                        className="h-[36px] rounded-md"
                                    />  
                                    <Img
                                        src="img_icon_button_26.svg"
                                        width={36}
                                        height={36}
                                        alt="Icon Button 103"
                                        className="h-[36px] rounded-md"
                                    />
                                    <Img
                                        src="img_icon_button_11.svg"
                                        width={36}
                                        height={36}
                                        alt="Icon Button 104"
                                        className="h-[36px] rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="h-px bg-gray-300" />
                        </div>
                    </div>
                        <div className="mx-6 mt-[22px] flex flex-col gap-1.5 md:mx-0">
                            <div className="flex items-center">
                                <Img
                                    src="img_icon_button_28.svg"
                                    width={36}
                                    height={36}
                                    alt="Icon Button 105"
                                    className="h-[36px] rounded-md"
                                />
                                <Heading size="textlg" as="h5" className="mb-2 self-end text-[16px] font-medium">
                                    Key visuals
                                </Heading>
                            </div>  
                            <Img
                                src="img_image_61.png"
                                width={272}
                                height={162}
                                alt="Image 85"
                                className="h-[162px] rounded-tl-md rounded-tr-md object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <CreatenewfileGroup1355 />
                            <Tabs
                                className="ml-6 mr-5 flex flex-col gap-7 self-stretch md:mx-0"
                                selectedTabClassName="text-black-900 font-bold"
                                selectedTabPanelClassName="relative tab-panel--selected"
                            >
                                <TabList className="flex flex-wrap gap-4 px-2 py-3.5">
                                    <Tab className="text-[12px] font-normal text-gray-700">Detail</Tab>
                                    <Tab className="text-[12px] font-normal text-gray-700">Activities</Tab>
                                </TabList>
                                {[...Array(2)].map((_, index) => (
                                    <TabPanel key={`tab-panel${index}`} className="absolute items-center">
                                        <div className="w-full">
                                            <div className="flex flex-col gap-3.5">
                                                <div className="flex flex-wrap justify-between gap-5">
                                                    <Text as="p" className="!font-archivo text-[14px] font-normal">
                                                        File type
                                                    </Text>
                                                    <Heading as="p" className="text-[14px] font-bold">
                                                        Image
                                                    </Heading>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-5">
                                                    <Text as="p" className="!font-archivo text-[14px] font-normal">
                                                        Size
                                                    </Text>
                                                    <Heading as="p" className="text-[14px] font-bold">
                                                        64 KB
                                                    </Heading>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-5">
                                                    <Text as="p" className="!font-archivo text-[14px] font-normal">
                                                        Last Modified
                                                    </Text>
                                                    <Heading as="p" className="text-[14px] font-bold">
                                                        --
                                                    </Heading>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-5">
                                                    <Text as="p" className="!font-archivo text-[14px] font-normal">
                                                        Date Created
                                                    </Text>
                                                    <Heading as="p" className="text-[14px] font-bold">
                                                        Jun 23, 2023
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
