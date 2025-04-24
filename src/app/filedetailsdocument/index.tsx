"use client";

import { Text, Img, Input, Heading, Button, SelectBox } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import Link from "next/link";
import React from "react";


export default function FileDetailsDocumentPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <div className="w-full bg-gray-100 shadow-md">
      <header className="flex items-center bg-white-a700 p-6 shadow-xs sm:p-5">
      <div className="container-sm flex justify-between gap-5 md:flex-col">
        <div className="flex w-[58%] justify-center gap-8 md:w-full md:flex-col">
              <Img
                src="img_arrow_left_gray_900_01_36x36.svg"
                width={36}
                height={36}
                alt="Arrow Left"
                className="h-[36px] w-[6%] rounded-[50%]"
              />
              <div className="flex flex-1 items-center md:self-stretch sm:flex-col">
                <Button
                  color="gray_300"
                  variant="outline"
                  leftIcon={
                    <Img
                      src="img_download_gray_900_01.svg"
                      width={16}
                      height={16}
                      alt="Download"
                      className="h-[16px] w-[16px] object-contain"
                    />
                  }
                  className="ml-1 flex-1 gap-2 rounded-md !border px-[9px] sm:ml-0 sm:self-stretch"
                >
                  Download
                </Button>
                <SelectBox
                  color="white_A700"
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
                        <Img src="img_folder.svg" width={14} height={12} alt="Folder" className="h-[12px] w-[14px]" />
                        <span>{e.label}</span>
                      </div>
                    </>
                  )}
                  name="Dropdown Button"
                  placeholder={"Open in"}
                  // options={dropDownOptions}
                  className="ml-1.5 flex-grow gap-1.5 rounded-md border-[0.5px] border-solid border-gray-300 sm:ml-0"
                />
                <Button
                  color="gray_300"
                  variant="outline"
                  leftIcon={
                    <Img
                      src="img_download_gray_900_01_16x16.svg"
                      width={16}
                      height={16}
                      alt="Download"
                      className="h-[16px] w-[16px] object-contain"
                    />
                  }
                  className="ml-1 flex-1 gap-2 rounded-md !border px-[11px] sm:ml-0 sm:self-stretch"
                >
                  Save as...
                </Button>
                <Button
                  color="gray_300"
                  variant="outline"
                  leftIcon={
                    <Img
                      src="img_lock_gray_900_01.svg"
                      width={16}
                      height={16}
                      alt="Lock"
                      className="mb-0.5 h-[20px] w-[20px] object-contain pl-2"
                    />
                  }
                  className="ml-1 flex-1 gap-2 rounded-md !border px-[9px] sm:ml-0 sm:self-stretch"
                >
                  Add request
                </Button>
                <Link href="#">
                  <Img
                    src="img_icon_button_60.svg"
                    width={36}
                    height={36}
                    alt="Icon Button 60"
                    className="ml-2.5 h-[36px] w-[6%] rounded-[50%] sm:ml-0"
                  />
                </Link>
              </div>
            </div>
      <div className="flex w-[24%] justify-center md:w-full">
        <Link href="#">
          <Img
            src="img_icon_button_64.svg"
            width={36}
            height={36}
            alt="Icon Button 82"
            className="h-[36px] w-[100%] rounded-[50%]"
          />
        </Link>
        <Link href="#">
          <Img
            src="img_icon_button_63.svg"
            width={36}
            height={36}
            alt="Icon Button 81"
            className="ml-2 h-[36px] w-[100%] rounded-[50%]"
          />
        </Link>
        <div className="ml-6 flex flex-1 justify-center">
          <Button
            color="indigo_A200"
            leftIcon={
              <Img
                src="img_meeting_white_a700.svg"
                width={16}
                height={16}
                alt="Meeting"
                className="h-[16px] w-[16px] object-contain"
              />
            }
            className="min-w-[100px] gap-3 rounded-bl-md rounded-tl-md px-5"
          >
            Share
          </Button>
          <Link href="#">
            <Button color="indigo_A200" size="xl" className="w-[36px] rounded-br-md rounded-tr-md px-3.5">
              <Img src="img_arrow_down_white_a700_1.svg" width={6} height={3} />
            </Button>
          </Link>
        </div>
      <div className="ml-3 flex w-[20%] flex-col items-end justify-end rounded-[18px] bg-[url(/images/img_avatar_14.svg)] bg-no-repeat">
        <div className="mt-6 h-[8px] w-[8px] rounded border-[1.5px] border-solid border-white-a700 bg-green-a700_01" />
      </div>
      <Link href="#">
        <Img
          src="img_icon_button_61.svg"
          width={36}
          height={36}
          alt="Icon Button 79"
          className="ml-3 h-[36px] w-[100%] rounded-[50%]"
        />
      </Link>
      </div>
    </div>
    </header>
                <div className="flex items-start md:flex-col">
                <div className="mt-[38px] flex flex-1 flex-col items-end gap-2.5 pl-14 pr-[244px] md:self-stretch md:px-5">
                    <div className="flex w-[68%] flex-col items-center rounded-md bg-white-a700 px-[22px] py-[62px] shadow-xs md:w-full md:py-5 sm:p-5">
                    <div className="mx-1.5 flex items-center justify-center self-stretch md:mx-0 sm:flex-col">
                        <div className="flex flex-1 items-start justify-center gap-4 px-9 sm:self-stretch sm:px-5">
                        <Img src="img_cutlery_75_1.svg" width={36} height={36} alt="Cutlery 75 1" className="h-[36px]" />
                        <div className="flex flex-1 flex-col items-start gap-1.5 self-center">
                            <Heading as="h1" className="text-[14px] font-bold !text-indigo_a200">
                            Golden Spoon Restaurant
                            </Heading>
                            <Text size="texts" as="p" className="text-[12px] font-normal !text-gray-500">
                            9012 East Street, Houston, TX 77020
                            </Text>
                        </div>
                        </div>
                    <Text size="texts" as="p" className="self-end text-[12px] font-normal !text-blue_gray-900">
                        Oct 13, 2023
                    </Text>
                    </div>
                    <div className="mt-3 h-px w-[92%] self-end bg-blue_gray-200" />
                    <Heading
                    size="headings"
                    as="h2"
                    className="ml-[42px] mt-[26px] self-start text-[16px] font-bold !text-blue_gray-900 md:ml-0"
                    >
                    Media Report - Nov 2023
                    </Heading>
                    <div className="mx-10 mt-6 flex flex-col items-end self-stretch md:mx-0">
                    <Button
                        size="4xl"
                        className="relative z-[1] mr-2 w-[48px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] px-1.5 shadow-xs md:mr-0"
                    >
                        <Img src="img_container_217.png" width={36} height={36} />
                    </Button>
                    <Text
                        size="textxs"
                        as="p"
                        className="relative mt-[-36px] w-full text-[11px] font-normal leading-[18px] !text-gray-900_01"
                    >
                        Quis esse cillum pariatur id veniam officia consequat ea qui. Ipsum dolore reprehenderit occaecat mollit
                        nostrud esse mollit in laborum ad aliquip irure amet ex ut.Est excepteur duis aliqua in do mollit nulla
                        ad esse officia enim culpa cupidatat voluptate irure consectetur ullamco. Eiusmod tempor ex ullamco
                        adipisicing exercitation non adipisicing aute incididunt aliquip Lo
                    </Text>
                    </div>
                    <div className="relative mx-10 mt-11 h-[100px] content-center self-stretch md:mx-0 md:h-auto">
                    <Text size="textxs" as="p" className="w-full text-[11px] font-normal leading-[18px] !text-gray-900_01">
                        Minim occaecat commodo aliqua reprehenderit ullamco nostrud enim est in ea id cillum do elit elit.
                        Fugiat quis nulla aliqua ut tempor eiusmod nulla ullamco laborum eu nostrud sunt. Sint do commodo
                        incididunt cupidatat consectetur aliquip.Eiusmod est dolor Lorem id dolore laboris sunt non aute magna
                        reprehenderit Lorem commodo do sint. Voluptate officia enim cupidatat reprehenderi
                    </Text>
                    <Button
                        size="4xl"
                        className="absolute right-[13%] top-[26px] m-auto w-[48px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] px-1.5 shadow-xs"
                    >
                        <Img src="img_rectangle_4.png" width={36} height={36} />
                    </Button>
                    </div>
                    <div className="mx-10 mb-[74px] mt-3 flex flex-col items-start self-stretch md:mx-0">
                    <Button
                        size="4xl"
                        className="relative z-[2] ml-[114px] w-[48px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] px-1.5 shadow-xs md:ml-0"
                    >
                        <Img src="img_rectangle_4.png" width={36} height={36} />
                    </Button>
                    <Text
                        size="textxs"
                        as="p"
                        className="relative mt-[-34px] w-full text-[11px] font-normal leading-[18px] !text-gray-900_01"
                    >
                        Minim occaecat commodo aliqua reprehenderit ullamco nostrud enim est in ea id cillum do elit elit.
                        Fugiat quis nulla aliqua ut tempor eiusmod nulla ullamco laborum eu nostrud sunt. Sint do commodo
                incididunt cupidatat consectetur aliquip.Eiusmod est dolor Lorem id dolore laboris sunt non aute magna
                reprehenderit Lorem commodo do sint. Voluptate officia enim cupid
            </Text>
            </div>
            </div>
            <div className="mr-[100px] flex w-[34%] items-center justify-center rounded-md bg-gray-900_01 p-3 shadow-xl md:mr-0 md:w-full">
                        <Img
                          src="img_icon_button_74.svg"
                          width={32}
                          height={32}
                          alt="Icon Button 74"
                          className="h-[32px] w-[18%] rounded-[50%]"
                        />
                        <Text as="p" className="ml-4 text-[14px] font-normal !text-blue_gray-200">
                          54%
                        </Text>
                        <Img
                          src="img_icon_button_75.svg"
                          width={32}
                          height={32}
                          alt="Icon Button 75"
                          className="ml-4 h-[32px] w-[18%] rounded-[50%]"
                        />
                        <div className="flex flex-1 items-center justify-end gap-6">
                          <div className="h-[22px] w-px bg-gray-500" />
                          <Img
                            src="img_icon_button_76.svg"
                            width={32}
                            height={32}
                            alt="Icon Button 76"
                            className="h-[32px] w-[56%] rounded-[50%]"
                          />
                        </div>
                      </div>
            </div>
            <div className="flex w-[22%] flex-col gap-3 self-center bg-white-a700 py-3 shadow-xs md:w-full md:px-5">
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
                    alt="Icon Button 90"
                    className="h-[36px] rounded-md"
                />
                <Img
                    src="img_icon_button_11.svg"
                    width={36}
                    height={36}
                    alt="Icon Button 89"
                    className="h-[36px] rounded-md"
                />
                </div>
            </div>
            <div className="mb-44 flex flex-col items-center">
                <div className="h-px w-full self-stretch bg-gray-100" />
                <div className="mx-6 mt-4 flex justify-center self-stretch md:mx-0">
                <div className="flex flex-1 items-center">
                    <Img
                    src="img_icon_button_71.svg"
                    width={32}
                    height={32}
                    alt="Icon Button 92"
                    className="h-[32px] rounded-md"
                    />
                    <Heading size="textlg" as="h2" className="self-end mb-2 text-[16px] font-medium">
                    MediaReport.doc
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
                <div className="mt-4 h-px w-full self-stretch bg-gray-100" />
                <div className="mx-6 mt-3 flex self-stretch md:mx-0">
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
            </div>
            <div className="mx-6 mt-6 flex items-center self-stretch md:mx-0">
                <Input
                size="xs"
                name="Textbox 10"
                placeholder={`Search comments...`}
                value={searchBarValue1}
                onChange={(e) => setSearchBarValue1(e.target.value)}
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
                    searchBarValue1.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue1("")} height={12} width={16} fillColor="#171a1fff" />
                    ) : null
                }
                className="flex-grow gap-1.5 rounded-[14px] px-2.5 text-blue_gray-200"
                />
            <Img
            src="img_icon_button_72.svg"
            width={32}
            height={32}
            alt="Icon Button 93"
            className="ml-3 h-[32px] w-[12%] rounded-[50%]"
            />
            <Img
            src="img_icon_button_73.svg"
            width={32}
            height={32}
            alt="Icon Button 94"
            className="h-[32px] w-[12%] rounded-[50%]"
            />
            </div>
            <div className="mt-3 flex flex-col gap-2.5 self-stretch bg-gray-100_c9 px-6 sm:px-5">
            <div className="h-px bg-gray-300" />
            <div className="flex items-center">
                <Img
                src="img_avatar_44.svg"
                width={36}
                height={36}
                alt="Avatar 44"
                className="h-[36px] w-[12%] rounded-[50%]"
                />
                <div className="flex flex-1 justify-end">
                <Img
                    src="img_icon_button_1.svg"
                    width={28}
                    height={28}
                    alt="Icon Button 86"
                    className="h-[28px] w-[12%] rounded-[50%]"
                />
                <Img
                    src="img_icon_button_66.svg"
                    width={28}
                    height={28}
                    alt="Icon Button 87"
                    className="h-[28px] w-[12%] rounded-[50%]"
                />
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
            <Text as="p" className="text-[14px] font-medium !text-blue_gray-500">
                Christopher
            </Text>
            <Text size="texts" as="p" className="text-[12px] font-normal !text-blue_gray-800">
                Just now
            </Text>
            </div>
            <Text as="p" className="text-[14px] font-normal leading-[22px] !text-gray-900_01">
            Thanks for the feedback! The revised version will be ready by Jul 1.
            </Text>
            <div className="h-px bg-gray-300" />
            </div>
            <Img
            src="img_avatar_11.svg"
            width={36}
            height={36}
            alt="Avatar 45"
            className="ml-6 mt-3 h-[36px] w-[12%] self-start rounded-[50%] md:ml-0"
            />
            <div className="mx-6 mt-2 flex flex-wrap items-center gap-[22px] self-stretch md:mx-0">
            <Text as="p" className="text-[14px] font-medium !text-blue_gray-500">
                Jessica Hill
            </Text>
            <Text size="texts" as="p" className="self-end text-[12px] font-normal !text-gray-500">
                3 mins ago
            </Text>
            </div>
            <Text as="p" className="ml-6 mt-3 self-start text-[14px] font-normal !text-gray-900_01 md:ml-0">
            Some sentences could be rephrased...
            </Text>
            <div className="mx-6 mt-3 h-px self-stretch bg-gray-300 md:mx-0" />
            <Img
            src="img_avatar_33.svg"
            width={36}
            height={36}
            alt="Avatar 46"
            className="ml-6 mt-2.5 h-[36px] w-[12%] self-start rounded-[50%] md:ml-0"
            />
            <div className="mx-6 mt-2 flex flex-wrap items-center gap-[22px] self-stretch md:mx-0">
            <Text as="p" className="text-[14px] font-medium !text-blue_gray-500">
                Jessica Hill
            </Text>
            <Text size="texts" as="p" className="self-end text-[12px] font-normal !text-gray-500">
                2 hrs ago
            </Text>
            </div>
            <Text as="p" className="mt-2 w-[84%] text-[14px] font-normal leading-[22px] !text-gray-900_01 md:w-full">
            Check for consistent formatting, particularly headings
            </Text>
            <Text as="p" className="ml-6 mt-[18px] self-start text-[14px] font-normal !text-blue-700 md:ml-0">
            6 replies
            </Text>
            <div className="mx-6 mt-3 h-px self-stretch bg-gray-300 md:mx-0" />
            <Img
            src="img_avatar_12.svg"
            width={36}
            height={36}
            alt="Avatar 47"
            className="ml-6 mt-2.5 h-[36px] w-[12%] self-start rounded-[50%] md:ml-0"
            />
            <div className="mx-6 mt-2.5 flex flex-wrap items-center gap-[9px] self-stretch md:mx-0">
            <Text as="p" className="text-[14px] font-medium !text-blue_gray-500">
                Ryan Brown
            </Text>
            <Text size="texts" as="p" className="self-end text-[12px] font-normal !text-gray-500">
                2 hrs ago
            </Text>
            </div>
            <Text as="p" className="ml-6 mt-2.5 self-start text-[14px] font-normal !text-gray-900_01 md:ml-0">
            Well-structured document :)
            </Text>
            </div>
            </div>
            </div>
            </div>
        );
}