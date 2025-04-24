"use client";

import { Img, Text, Button, SelectBox } from "../../components";
import FiledetailsimageGroup919 from "./FiledetailsimageGroup919";
import Link from "next/link";
import React from "react";

export default function FileDetailsImagePage() {
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
          <div className="relative h-[698px] w-[76%] content-center md:h-auto">
            <Img
              src="img_image_83.png"
              width={558}
              height={698}
              alt="Image 83"
              className="ml-auto h-[698px] w-[88%] rounded-tl-md rounded-tr-md object-contain"
            />
            <div className="absolute left-0 right-0 top-[16%] mx-auto flex w-[72%] flex-col items-end">
              <Button
                size="4xl"
                className="mr-1.5 w-[48px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] px-1.5 shadow-xs md:mr-0"
              >
                <Img src="img_container_211.png" width={36} height={36} />
              </Button>
              <Button
                size="4xl"
                className="mr-[54px] mt-[124px] w-[48px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] px-1.5 shadow-xs md:mr-0"
              >
                <Img src="img_container_209.png" width={36} height={36} />
              </Button>
              <div className="mt-[46px] flex items-start justify-between gap-5 self-stretch">
                <Button
                  size="4xl"
                  className="mb-8 ml-[140px] w-[48px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] px-1.5 shadow-xs"
                >
                  <Img src="img_container_209.png" width={36} height={36} />
                </Button>
                <Button
                  size="4xl"
                  className="w-[48px] self-end rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] px-1.5 shadow-xs"
                >
                  <Img src="img_container_208.png" width={36} height={36} />
                </Button>
              </div>
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
        <div className="w-[22%] self-center bg-white-a700 py-3 shadow-xs md:w-full md:px-5">
          <FiledetailsimageGroup919 />
        </div>
      </div>
    </div>
  );
}