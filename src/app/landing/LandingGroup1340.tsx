import { Button, Img, Text, Heading } from "../../components";
import Link from "next/link";
import React from "react";

export default function LandingGroup1340() {
  return (
    <div className="mt-[102px] self-stretch">
      <div className="flex flex-col items-center gap-8">
        <div className="container-xs md:px-5">
          <div className="flex items-start justify-between gap-5 sm:flex-col">
            <Text
              size="text4xl"
              as="p"
              className="ml-[314px] self-center !font-archivo text-[32px] font-normal !text-gray-900_01 md:text-[30px] sm:ml-0 sm:text-[28px]"
            >
              Just want to share some files quick?
            </Text>
          <div className="w-[4%] rounded-[18px] p-2 sm:w-full">
            <div className="flex h-[16px] flex-col items-center bg-[url(/images/img_group_1443.svg)] bg-cover bg-no-repeat p-0.5 md:h-auto">
             <div className="flex w-[16px] flex-col items-center gap-0.5 md:w-full">
              <div className="h-px w-px rounded-[50%] bg-gray-500" />
              <Img src="img_group.svg" width={1} height={4} alt="Group" className="h-[4px] w-full" />
            </div>
          </div>
          </div>
          </div>
        </div>
        <div className="relative h-[440px] self-stretch">
          <div className="absolute bottom-0 left-0 right-0 mx-auto h-[308px] flex-1 bg-pink-300 shadow-xs" />
          <div className="container-xs absolute left-0 right-0 top-0 flex md:px-5">
            <div className="flex w-full flex-col items-center gap-16 rounded-md bg-white-a700 px-7 py-8 shadow-4xl sm:gap-8 sm:p-5">
              <div className="self-stretch">
              <div className="flex items-center gap-8 md:flex-col">
                <div className="flex w-[30%] flex-col gap-14 self-end md:w-full sm:gap-7">
                  <div className="flex items-start justify-center gap-3">
                    <Img src="img_f_add_1.svg" width={48} height={48} alt="F Add 1" className="h-[48px]" />
                    <div className="flex flex-1 flex-col items-start gap-1.5 self-center">
                      <Heading size="headingmd" as="h2" className="text-[20px] font-bold">
                        Choose files to share
                      </Heading>
          <Heading size="textlg" as="h3" className="text-[16px] font-normal !text-gray-500 underline">
            or select a folder
          </Heading>
        </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <Heading as="h4" className="text-[14px] font-bold !text-blue_gray-800">
            Share to
          </Heading>
        <Text size="text2xl" as="p" className="mt-2 text-[20px] font-normal !text-blue_gray-200">
          Add an email address
        </Text>
        <div className="h-px w-full self-stretch bg-gray-300" />
      </div>
      </div>
      <div className="flex flex-1 flex-col gap-12 md:self-stretch">
        <div className="flex items-center justify-between gap-5 sm:flex-col">
          <div className="flex w-[42%] items-start justify-center rounded-md bg-gray-100_02 p-3 shadow-sm sm:w-full">
            <Img
              src="img_btn_play_1.svg"
              width={24}
              height={24}
              alt="Btn Play 1"
              className="h-[24px] self-center"
            />
            <div className="flex-1 self-end px-3.5">
              <div className="flex flex-col items-center">
                <Heading size="textlg" as="h5" className="text-[16px] font-medium">
                  Prototye Recording 01.mp4
                </Heading>
                <div className="flex items-center self-stretch">
                  <Text as="p" className="text-[14px] font-normal !text-blue_gray-800">
                    118 MB
                  </Text>
                <div className="mt-1.5 h-[4px] w-[4px] self-start rounded-sm bg-gray-300" />
                <Text as="p" className="ml-1.5 text-[14px] font-normal !text-blue_gray-800">
                  mp4
                </Text>
              </div>
            </div>
          </div>
        <Img
          src="img_e_remove_1.svg"
          width={12}
          height={12}
          alt="E Remove 1"
          className="ml-[18px] h-[12px]"
        />
      </div>
      <Link href="#" className="mb-4 self-end rounded-md">
        <Text as="p" className="px-3 py-2 text-[14px] font-normal !text-gray-500">
          Clear all
        </Text>
      </Link>
      </div>
      <div className="flex gap-8 md:flex-col">
        <div className="flex w-[44%] flex-col items-start justify-center md:w-full">
          <Heading as="h6" className="text-[14px] font-bold !text-blue_gray-800">
            Your email
          </Heading>
        <Text size="text2xl" as="p" className="mt-2.5 text-[20px] font-normal !text-blue_gray-200">
          Add your email address
        </Text>
        <div className="h-px w-full self-stretch bg-gray-300" />
        </div>
        <div className="flex flex-1 flex-col items-start justify-center md:self-stretch">
          <Heading as="p" className="text-[14px] font-bold !text-blue_gray-800">
            Message
          </Heading>
        <Text size="text2xl" as="p" className="mt-2 text-[20px] font-normal !text-blue_gray-200">
          Write something
        </Text>
        <div className="h-px w-full self-stretch bg-gray-300" />
      </div>
      </div>
      </div>
      </div>
      </div>
      <Button
        color="indigo_A200"
        rightIcon={
          <Img
            src="img_arrowleft.svg"
            width={16}
            height={16}
            alt="Arrow Left"
            className="h-[16px] w-[16px] object-contain"
          />
        }
        className="min-w-[160px] gap-1.5 rounded-md px-[34px] sm:px-5"
      >
        Share now
      </Button>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}