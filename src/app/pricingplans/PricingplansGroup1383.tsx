import { Img, Heading } from "../../components";
import React, { Suspense } from "react";

const data = [
  { group: "img_group_black_900_01.svg" },
  { group: "img_group_black_900_01_38x154.svg" },
  { group: "img_group_black_900_01_34x152.svg" },
  { group: "img_group_black_900_01_64x108.svg" },
  { group: "img_group_gray_500.svg" },
];

export default function PricingplansGroup1383() {
  return (
    <div className="mt-[130px]">
      <div className="flex flex-col items-center rounded-md bg-white-a700 py-9 sm:py-5">
        <div className="container-xs mb-[42px] flex flex-col items-center gap-[54px] px-14 md:px-5 sm:gap-[27px]">
          <Heading size="headingxl" as="h2" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
            More than 50,000 teams use Porta, all over the world
          </Heading>
          <div className="mr-[18px] flex gap-[88px] self-stretch md:mr-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <Img
                  key={"group1351" + index}
                  src={d.group}
                  width={158}
                  height={30}
                  alt="Group"
                  className="mt-[30px] h-[30px] w-[22%] object-contain md:mt-0 md:w-full"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}