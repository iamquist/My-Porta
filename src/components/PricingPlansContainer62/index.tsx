import { Button, Img, Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  plantleaf1?: string;
  freePlan?: React.ReactNode;
  oneAccountUser?: React.ReactNode;
  frame?: React.ReactNode;
  limitedLargeFile?: React.ReactNode;
  p000?: React.ReactNode;
  month?: React.ReactNode;
  button22?: string;
}

export default function PricingPlansContainer62({
  plantleaf1 = "img_plant_leaf_1.svg",
  freePlan = "Free plan",
  oneAccountUser = "One account user, log in once in a while.",
  frame = "15 GB of storage",
  limitedLargeFile = "Limited large file delivery (up to 2 GB per month)",
  p000 = "$0.00",
  month = "/month",
  button22 = "Join for free",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full p-6 sm:p-5 border-gray-300 border border-solid cursor-pointer hover:border-indigo-a200 hover:border-2 hover:border-solid hover:shadow-4xl`}
    >
      <Img src={plantleaf1} width={24} height={24} alt="Plant Leaf 1" className="h-[24px]" />
      <Heading size="headinglg" as="h4" className="mt-8 !font-redhatsidplay text-[24px] font-bold">
        {freePlan}
      </Heading>
      <Text as="p" className="mt-1.5 text-[14px] font-normal !text-blue_gray-500">
        {oneAccountUser}
      </Text>
      <div className="mt-[46px] self-stretch rounded-md border-[0.5px] border-solid border-white-a700">
        <div className="flex justify-center">
          <Button size="xl" shape="square" className="w-[36px] px-2">
            <Img src="img_checkmark.svg" width={10} height={6} />
          </Button>
          <Text as="p" className="bg-white-a700 py-2 pr-[34px] text-[14px] font-normal !text-gray-900_01 sm:pr-5">
            {frame}
          </Text>
        </div>
        <div className="flex">
          <div className="flex w-[10%] flex-col items-start bg-white-a700 px-1.5 py-5">
            <Img src="img_pen.svg" width={16} height={16} alt="Pen" className="h-[16px]" />
          </div>
          <div className="flex flex-1 bg-white-a700 py-1.5">
            <Text as="p" className="w-[96%] text-[14px] font-normal leading-[22px] !text-gray-900_01">
              {limitedLargeFile}
            </Text>
          </div>
        </div>
      </div>
      <div className="mt-32 flex flex-col gap-6 self-stretch">
        <div className="h-px bg-gray-300" />
        <div className="ml-[66px] mr-20 flex flex-wrap items-center justify-between gap-5">
          <Heading size="heading2xl" as="h1" className="text-[40px] font-bold !text-blue_gray-900">
            {p000}
          </Heading>
          <Text as="p" className="text-[14px] font-normal">
            {month}
          </Text>
        </div>
        <Button
          color="gray_100"
          rightIcon={
            <Img
              src="img_arrowleft_gray_700.svg"
              width={16}
              height={16}
              alt="Arrow Left"
              className="h-[16px] w-[16px] object-contain"
            />
          }
          className="gap-1.5 self-stretch rounded-md px-[34px] sm:px-5"
        >
          {button22}
        </Button>
      </div>
    </div>
  );
}