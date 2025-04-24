"use client";

import { Link } from "react-alice-carousel";
import { Img, Heading, Button, Text, SelectBox } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar11 from "../../components/Sidebar11";
import FileListinglistviewGroup1379 from "./FilelistinglistviewGroup1379";
import FileListinglistviewGroup1736 from "./FilelistinglistviewGroup1736";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { selectOptionType } from "../../components/SelectBox"; 
import { styleText } from "util";

const tableData = [
    {
        frame: "img_pen_pink_300.svg",
        frame1: "Design Materials.zip",
        frame2: "img_star_gray_700.svg",
        frame3: "4.9 MB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
    {
        frame: "img_pen_red_600.svg",
        frame1: "Branding Package.pdf",
        frame2: "img_star_gray_700.svg",
        frame3: "3.7 MB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
    {
        frame: "img_pen_blue_gray_800.svg",
        frame1: "Key Visuals.jpg",
        frame2: "img_pen_yellow_800.svg",
        frame3: "64 KB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
    {
        frame: "img_pen_blue_gray_800.svg",
        frame1: "POSM mockup.jpg",
        frame2: "img_star_gray_700.svg",
        frame3: "127 KB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
    {
        frame: "img_pen_yellow_900.svg",
        frame2: "img_star_gray_700.svg",
        frame3: "6.2 MB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
    {
        frame: "img_pen_yellow_900.svg",
        frame2: "img_star_gray_700.svg",
        frame3: "7.1 MB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
    {
        frame: "img_pen_green_800.svg",
        frame1: "Quatation/ Invoice.xlsx",
        frame2: "img_star_gray_700.svg",
        frame3: "116 KB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
    {
        frame: "img_pen_blue_700.svg",
        frame1: "Clients Document.docx",
        frame2: "img_star_gray_700.svg",
        frame3: "93 MB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
    {
        frame: "img_pen_blue_700.svg",
        frame1: "Contract Template.docx",
        frame2: "img_star_gray_700.svg",
        frame3: "87 MB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
    {
        frame: "img_pen_blue_700.svg",
        frame2: "img_star_gray_700.svg",
        frame3: "78 MB",
        frame4: "Jun 23, 2023",
        group1680: "5 users",
    },
];
const Texts = [
  <Text as="p" className="pl-2 self-center text-[14px] font-normal !text-white-a700 hover:font-bold">
    Upload
  </Text>
]

type TableRowType = {
    frame: string;
    frame1?: string;
    frame2: string;
    frame3: string;
    frame4: string;
    group1680: string;
};

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
export default function FileListinglistViewPage() {
    const tableColumns = React.useMemo(() => {
        const tableColumnHelper = createColumnHelper<TableRowType>();
        return [
            tableColumnHelper.accessor("frame", {
                cell: (info) => (
                    <div className="flex h-[46px]  flex-1 flex-col items-center border-gray-100 py-3.5">
                        <Img src={info.getValue<string>()} width={20} height={20} alt="Pen" className="h-[20px]" />
                    </div>
                ),
                header: (info) => (
                    <div className=" collapse h-[46px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-gray-50" >
                        ......
                    </div>
                ),
                meta: { width: "48px" },
            }),
            tableColumnHelper.accessor("frame1", {
                cell: (info) => (
                    <Text
                        as="p"
                        className="py-3.5 pl-4 flex pt-4 flex-col flex-1 h-[46px] whitespace-nowrap border-gray-100 text-[14px] font-medium !text-gray-900_01"
                    >
                        {info.getValue<string>()}
                    </Text>
                ),
                header: (info) => (
                    <Heading
                        as="h2"
                        className="h-[46px] py-3.5 pr-4 pl-4 border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-gray-50 text-center text-[14px] font-bold !text-gray-700"
                    >
                        Name
                    </Heading>
                ),
                meta: { width: "234px" },
            }),
            tableColumnHelper.accessor("frame2", {
                cell: (info) => (
                    <div className="h-[46px] py-3.5 flex flex-1 flex-col size-16 items-center px-3.5">
                        <Img src={info.getValue<string>()} width={60} height={60} alt="Pen" className="h-[20px]" />
                    </div>
                ),
                header: (info) => (
                    <div className="h-[46px] collapse border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-gray-50">
                       ......
                    </div>
                ),
                meta: { width: "48px" },
            }),
            tableColumnHelper.accessor("frame3", {
                cell: (info) => (
                    <Text
                        as="p"
                        className="h-[46px] py-3.5 pl-5 pr-5 pt-4 whitespace-nowrap text-[14px] font-normal !text-blue_gray-500"
                    >
                        {info.getValue<string>()}
                    </Text>
                ),
                header: (info) => (
                    <Heading
                        as="h3"
                        className="h-[46px] py-3.5 border-b-[0.5px] border-t-[0.5px] border-solid pl-4 pr-4 border-gray-100 bg-gray-50 text-center text-[14px] font-bold !text-gray-700"
                    >
                        Size
                    </Heading>
                ),
                meta: { width: "154px" },
            }),
            tableColumnHelper.accessor("frame4", {
                cell: (info) => (
                    <Text
                        as="p"
                        className="h-[46px] py-3.5 pr-4 pl-4 pt-4 text-[14px] font-normal !text-blue_gray-500"
                    >
                        {info.getValue<string>()}
                    </Text>
                ),
                header: (info) => (
                    <Heading
                        as="h3"
                        className="h-[46px] py-3.5 border-b-[0.5px] border-t-[0.5px] border-solid whitespace-nowrap pr-4 pl-4 border-gray-100 bg-gray-50 text-center text-[14px] font-bold !text-gray-700"
                    >
                        Last Modified
                    </Heading>                    
                ),
                meta: { width: "200px" },
            }),
            tableColumnHelper.accessor("group1680", {
                cell: (info) => (
                    <div className="h-[46px] flex justify-center">
                        <div className="items-center flex flex-1 p-3 ">
                            <Button color="gray_100_01" size="md" shape="round" className="min-w-[58px] items-center pr-4 pl-4 rounded-[14px]">
                                {info.getValue<string>()}
                            </Button>
                            <Button className="min-w-fit items-center rounded-[14px] bg-transparent">
                            <Img src="img_more_vert_1.svg" width={24} height={24} alt="Create" className="h-[24px]" />
                            </Button>
                        </div>
                    </div>
                ),
                header: (info) => (
                    <div className="flex">
                        <Heading
                            as="h5"
                            className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-gray-50 py-3.5 pl-4 pr-5 text-[14px] font-bold !text-gray-700 sm:pr-5"
                        >
                            Shared to
                        </Heading>
                        <div className="h-[46px] border-b-[0.5px] border-t-[0.5px] text-center border-solid border-gray-100 bg-gray-50" />
                    </div>
                ),
                meta: { width: "154px" },
            }),
        ];
    }, []);

    return (
        <div className="w-full bg-gray-50 shadow-md">
            <div>
                <Header />
                <div className="flex items-start gap-4">
                    <Sidebar11 />
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
                            <div className="mb-3 flex gap-3 justify-between self-end sm:px-5 md:w-full">
                              <Link href="filelistinggridview">
                                <Img
                                    src="img_icon_button_21.svg"
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
                        <div className="flex flex-col gap-3.5 rounded-[16px] bg-white-a700 px-[8px] py-6 sm:p-5">
                            <div className="flex flex-col gap-6">
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
                                    <Button
                                        color="gray_100"
                                        variant="outline"
                                        shape="round"
                                        leftIcon={
                                            <Img
                                                src="img_filter_list.svg"
                                                width={14}
                                                height={14}
                                                alt="Filter List"
                                                className="my-0.5 h-[14px] w-[14px] object-contain"
                                            />
                                        }
                                        rightIcon={
                                            <Img
                                                src="img_lightbulb.svg"
                                                width={14}
                                                height={14}
                                                alt="Light Bulb"
                                                className="my-0.5 h-[14px] w-[14px] object-contain"
                                            />
                                        }
                                        className="min-w-[188px] gap-1.5 rounded-[16px] !border-[0.5px] px-2.5"
                                    >
                                        Sort: Last Modified
                                        </Button>
                                        </div>
                                        <div className="h-px bg-gray-300 bg-"/>
                                        </div>
                                        <ReactTable 
                                        size="xs"
                                        className="group1667 mb-[18px] mr-1 border-separate border-spacing-0 rounded-[16px] border-[0.5px] border-solid border-white-a700 md:mr-0 sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                                        bodyProps={{ className: ""}}
                                        headerCellProps={{ className: "bg-gray-50"}}
                                        rowDataProps={{className: "hover:bg-sky-100"}}
                                        headerProps={{ className: "border-gray-100 border border-solid"}}
                                        columns={tableColumns}
                                        data={tableData}
                                        />
                                        </div>
                                        </div>
                                        <div className="w-[22%] bg-white-a700 py-6 shadow-xs sm:py-5">
                                            
                                                <div className="flex flex-col gap-6">
                                                    <div className="ml-6 mr-8 flex justify-between gap-5 md:mx-0">
                                                        <div className="flex">
                                                            <Img src="img_refresh.svg" width={36} height={36} alt="Refresh" className="h-[36px] rounded-md"/>
                                                            <Img 
                                                            src="img_icon_button_10.svg"
                                                            width={36}
                                                            height={36}
                                                            alt="Icon Button 24"
                                                            className="h-[36px] rounded-md"
                                                            />
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <Img 
                                                            src="img_icon_button_25.svg"
                                                            width={36}
                                                            height={36}
                                                            alt="Icon Button 25"
                                                            className="h-[36px] rounded-md"
                                                            />
                                                            <Img 
                                                            src="img_icon_button_26.svg"
                                                            width={36}
                                                            height={36}
                                                            alt="Icon Button 26"
                                                            className="h-[36px] rounded-md"
                                                            />
                                                            <Img 
                                                            src="img_icon_button_11.svg"
                                                            width={36}
                                                            height={36}
                                                            alt="Icon Button 27"
                                                            className="h-[36px] rounded-md"
                                                            />
                                                        </div>
                                                        </div>
                                                        <div className="h-px bg-gray-300"/>
                                                        </div>
                                                        
                                                        <div className="mt-[22px] flex flex-col gap-1.5 px-6 sm:px-5">
                                                            <div className="flex items-center">
                                                                <Img src="img_icon_button_28.svg" width={36} height={36} alt="Icon Button 38" className="h-[36px] mb-3 rounded-md"/>
                                                                <Heading size="textlg" as="h2" className="mb-5 self-end text-[16px] font-medium">
                                                                    Key visuals
                                                                </Heading>
                                                            </div>
                                                            <Img
                                                                src="img_image_61.png"
                                                                width={272}
                                                                height={162}
                                                                alt="image 63"
                                                                className="h-[162px] rounded-tl-md rounded-tr-md object-cover"
                                                            />
                                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <FileListinglistviewGroup1379 />
                                            <FileListinglistviewGroup1736 />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}