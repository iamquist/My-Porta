import { Img, Text, Button, Heading } from "../../components";
import PricingPlansContainer62 from "../../components/PricingPlansContainer62";
import React, { Suspense } from "react";

const data = [
  {
    plantLeaf1: "img_plant_leaf_1.svg",
    freePlan: "Free plan",
    oneAccountUser: "One account user, log in once in a while.",
    frame: "15 GB of storage",
    limitedLargeFile: "Limited large file delivery (up to 2 GB per month)",
    p000: "$0.00",
    month: "/month",
    button22: "Join for free",
  },
  {
    plantLeaf1: "img_plant_leaf_1.svg",
    freePlan: "Family",
    oneAccountUser: "A shared vault for family to store videos, photos, and family documents.",
    frame: "15 GB of storage",
    limitedLargeFile: "Limited large file delivery (up to 2 GB per month)",
    p000: "$9.99",
    month: "/month",
    button22: "Get 1-month free trial",
    plantleaf1: "img_home.svg",
  },
  {
    plantLeaf1: "img_plant_leaf_1.svg",
    freePlan: "free plan",
    oneAccountUser: "One account user, log in once in a while.",
    frame: "15 GB of storage",
    limitedLargeFile: "Limited large file delivery (up to 2 GB per month)",
    p000: "$0.00",
    month: "/month",
    button22: "Join for free",
  },
  {
    plantLeaf1: "img_plant_leaf_1.svg",
    freePlan: "Free plan",
    oneAccountUser: "One account user, log in once in a while.",
    frame: "15 GB of storage",
    limitedLargeFile: "Limited large file delivery (up to 2 GB per month)",
    p000: "$0.00",
    month: "/month",
    button22: "Join for free",
  },
  {
    plantLeaf1: "img_plant_leaf_1.svg",
    freePlan: "Free plan",
    oneAccountUser: "One account user, log in once in a while.",
    frame: "15 GB of storage",
    limitedLargeFile: "Limited large file delivery (up to 2 GB per month)",
    p000: "$0.00",
    month: "/month",
    button22: "Join for free",
  },
  {
    plantLeaf1: "img_plant_leaf_1.svg",
    freePlan: "Free plan",
    oneAccountUser: "One account user, log in once in a while.",
    frame: "15 GB of storage",
    limitedLargeFile: "Limited large file delivery (up to 2 GB per month)",
    p000: "$0.00",
    month: "/month",
    button22: "Join for free",
  },
];

export default function PricingplansGroup1397() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-[76px] md:gap-[57px] md:px-5 sm:gap-[38px]">
        <div className="mx-[250px] self-stretch md:mx-0">
          <div className="flex flex-col items-center gap-[26px]">
            <Heading size="heading3xl" as="h1" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
              Simple pricing for everyone.
            </Heading>
            <Heading
              size="textxl"
              as="h2"
              className="self-stretch text-center text-[18px] font-normal leading-7 !text-blue_gray-900"
            >
              <span>
                <>
                  Choose a plan that best suits your business.<br />
                </>
              </span>
              <a href="#" className="inline font-bold underline">
                Start 1-month free trial: no obligation, no activation fee.
              </a>
            </Heading>
            <div className="relative h-[70px] w-[40%]">
              <div className="absolute left-0 top-0 my-auto ml-auto mr-5 flex flex-1 rounded-[20px] bg-green-a700_01 shadow-xl md:mr-0">
                <Button shape="round" className="w-full rounded-[18px] px-3">
                  Monthly Billing
                </Button>
                <div className="flex w-full justify-center rounded-[18px] bg-green-a700_01 p-1.5">
                  <Text as="p" className="self-end text-[14px] font-normal !text-green-900">
                    Annually Billing{" "}
                  </Text>
                </div>
              </div>
            <Text
              as="p"
              className="absolute bottom-[-0.77px] right-[16%] m-auto text-[14px] font-normal !text-green-a700"
            >
              *Save up to 30%
            </Text>
            <Img
              src="img_image_32.svg"
              width={46}
              height={44}
              alt="Image 32"
              className="absolute bottom-[5.87px] right-[-0.32px] m-auto h-[44px]"
            />
          </div>
          </div>
        </div>
        <div className="self-stretch">
          <div className="grid grid-cols-3 justify-center gap-[58px] gap-y-[58px] md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <PricingPlansContainer62
                  {...d}
                  key={"group1625" + index}
                  className="rounded-tl-md bg-white-a700 hover:border-2 hover:border-solid hover:border-indigo-a200 hover:shadow-4xl"
                />
              ))}
            </Suspense>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-md p-1.5">
          <Text as="p" className="text-[14px] font-normal !text-indigo-a200">
            Compare all features
          </Text>
          <Img src="img_arrow_left_indigo_a200.svg" width={16} height={16} alt="Arrow Left" className="h-[16px]" />
        </div>
      </div>
    </div>
  );
}