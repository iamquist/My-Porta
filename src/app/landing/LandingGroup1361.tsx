"use client";

import { Heading, Text, Img, Button, SelectBox } from "../../components";
import LandingContainer25 from "../../components/LandingContainer25";
import Link from "next/link";
import React, { Suspense } from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const data = [
  { folder1: "img_folder_1.svg", workDocuments: "Work Documents" },
  { folder1: "img_folder_1.svg", workDocuments: "Work Documents" },
  { folder1: "img_folder_play_1.svg", workDocuments: "Showreels" },
  { folder1: "img_folder_1.svg", workDocuments: "Work Documents" },
];
const Texts = [
    <Text as="p" className="pl-3 self-center text-[14px] font-normal !text-white-a700 hover:font-bold">
      Upload
    </Text>
];
const accordionData = [
  { get15GbOfCloud: "Get 15 GB of cloud storage FREE for basic plan"  },
  { get15GbOfCloud: "“Porta: content-ready, no compromise.”" },
  { get15GbOfCloud: "Porta simplifies managing multiple clients and teams simultaneously." },
  { get15GbOfCloud: "Porta for Business: active collaboration, streamlined processes." },
  { get15GbOfCloud: "Porta has tailor security settings to your needs" },
];
type selectOptionType = { 
  content: React.ReactElement<HTMLDivElement> & {
    props: {
      className?: string;
      children?: React.ReactNode;
      }
  }
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

export default function LandingGroup1361() {
  return (
    <div className="mt-[98px] self-stretch">
      <div className="rounded-md bg-white-a700 px-14 py-16 md:p-5">
        <div className="mb-1 flex items-center justify-center md:flex-col">
          <div className="mt-1 flex w-[56%] flex-col items-start gap-16 md:w-full sm:gap-8">
            <Heading size="headingxl" as="h2" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
              What else can Porta help you do?
            </Heading>
            <Accordion preExpanded={[0]} className="flex flex-col gap-[110px] self-stretch">
              {accordionData.map((d, i) => (
                <AccordionItem uuid={i} key={`Group 1014${i}`}>
                  <div className="flex flex-1 flex-col gap-3">
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {(props) => (
                            <>
                              <div className="flex items-center justify-between gap-5 sm:flex-col">
                                <Heading size="headingmd" as="h3" className="!font-manrope text-[20px] font-extrabold hover:text-indigo-a200 hover:animate-bounce">
                                  {d.get15GbOfCloud}
                                </Heading>
                                {/* <Img
                                  src="img_arrow_up.svg"
                                  width={62}
                                  height={54}
                                  alt="Arrow Up"
                                  className="mr-[120px] h-[54px] w-[10%] object-contain sm:mr-0 sm:w-full"
                                /> */}
                              </div>
                            </>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div>
                        <div className="flex flex-col gap-3">
                          <Heading
                            size="textlg"
                            as="h4"
                            className="w-[72%] text-[16px] font-normal leading-[26px] !text-blue_gray-900 md:w-full"
                          >
                            Access your data from any device with an internet connection and share with anyone, ensuring
                            you stay productive even on the go.
                          </Heading>
                          <div className="flex items-center mr-10 gap-2 md:mx-0">
                            <Link href="#">
                              <Text as="p" className="text-[14px] font-normal !text-indigo-a200">
                                Learn more
                              </Text>
                            </Link>
                            <Img
                              src="img_arrow_left_indigo_a200.svg"
                              width={16}
                              height={16}
                              alt="Arrow Left"
                              className="h-[16px]"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex w-[38%] flex-col items-end rounded-md bg-indigo-a200 shadow-xl md:w-full">
            <div className="mt-[82px] pl-5 flex w-[88%] flex-col items-start gap-[30px] rounded-tl-[16px] bg-white-a700 py-6 md:w-full md:px-5 sm:p-5">
              <div className="self-stretch">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center">
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
                      className="w-[34%] gap-1.5 rounded-[16px] px-2.5"
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
                      placeholder={'Create new'}
                      options={options}
                      className="ml-3 w-[36%] gap-1.5 rounded-[16px] px-2.5"
                    />
                  <Img
                    src="img_icon_button_1.svg"
                    width={36}
                    height={36}
                    alt="Icon Button 1"
                    className="ml-3 h-[36px] w-[8%] rounded-[50%]"
                  />
                </div>
                <div className="flex items-center sm:flex-col">
                  <div className="flex flex-1 flex-col items-start sm:self-stretch">
                    <div className="flex items-start self-stretch">
                      <Heading
                        size="headingmd"
                        as="h5"
                        className="mt-[46px] text-[20px] font-bold !text-blue_gray-900"
                      >
                        Recent
                      </Heading>
                      {/* <Img
                        src="img_image_26.png"
                        width={220}
                        height={144}
                        alt="Image 26"
                        className="relative ml-[-20px] h-[144px] w-[76%] self-center object-contain"
                      /> */}
                    </div>
                    <div className="mt-[-46px] w-[84%] rounded-md bg-gray-100 shadow-xs md:w-full">
                      <Img
                        src="img_image_18.png"
                        width={180}
                        height={192}
                        alt="Image 18"
                        className="mx-6 mt-6 h-[192px] w-full object-cover md:mx-0 md:h-auto"
                      />
                      <div className="relative mt-[-48px] flex items-center gap-2 bg-white-a700 p-3">
                        <Img
                          src="img_container_18.svg"
                          width={24}
                          height={24}
                          alt="Container 18"
                          className="h-[24px] rounded-md"
                        />
                        <Text as="p" className="self-start text-[14px] font-medium !text-blue_gray-900">
                          Contract.docx
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="relative ml-[-16px] w-[38%] self-end rounded-md bg-gray-100 shadow-xs sm:ml-0 sm:w-full">
                    <div className="relative mt-6 h-[178px] content-center md:h-auto">
                      <Img
                        src="img_image_19.png"
                        width={138}
                        height={178}
                        alt="Image 19"
                        className="ml-auto h-[178px] w-[84%] rounded-md object-contain"
                      />
                      <Button
                        size="lg"
                        shape="circle"
                        className="absolute right-[20%] top-[38%] m-auto w-[32px] rounded-[16px] px-2.5"
                      >
                        <Img src="img_arrow_right_gray_500.svg" width={8} height={10} />
                      </Button>
                    </div>
                    <div className="relative z-[4] mt-[-34px] flex items-center justify-center gap-2 bg-white-a700 py-3">
                      <Img
                        src="img_warning.svg"
                        width={24}
                        height={24}
                        alt="Warning"
                        className="h-[24px] rounded-md"
                      />
                      <Text as="p" className="self-end text-[14px] font-medium !text-blue_gray-900">
                        (Demo) TVC Concept Art...
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Heading size="headingmd" as="h6" className="ml-6 text-[20px] font-bold !text-blue_gray-900 md:ml-0">
              Folders
            </Heading>
            <div className="mb-3 ml-6 grid pr-8 grid-cols-2 gap-6 self-stretch md:ml-0 md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <LandingContainer25
                    {...d}
                    key={`group951 + ${index}`}
                    className="cursor-pointer rounded-md bg-white-a700 shadow-xs hover:shadow-xs"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}