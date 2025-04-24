import { Img, Button, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  designMaterialsZip?: React.ReactNode;
  pen?: string;
  p49mb?: React.ReactNode;
  jun232023?: React.ReactNode;
  frame?: string;
}

export default function CreateNewFileRow({
  designMaterialsZip = "Design Materials.zip",
  pen = "img_star_gray_700.svg",
  p49mb = "4.9 MB",
  jun232023 = "Jun 23, 2023",
  frame = "5 users",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col justify-center items-center self-stretch flex-1`}>
      <Button
        size="12xl"
        shape="square"
        className="w-[66px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 px-[22px] sm:p-5"
      >
        <Img src="img_pen_pink_300.svg" width={20} height={20} />
      </Button>
      <div className="flex flex-1 border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3 py-[22px] sm:self-stretch sm:py-5">
        <Text as="p" className="text-[14px] font-medium !text-gray-900_01">
          {designMaterialsZip}
        </Text>
      </div>
      <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 p-6 sm:p-5">
        <Img src={pen} width={20} height={20} alt="Pen" className="h-[20px]" />
      </div>
      <div className="flex w-[12%] justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3 py-6 sm:py-5">
        <Text as="p" className="text-[14px] font-normal !text-blue_gray-500">
          {p49mb}
        </Text>
      </div>
      <div className="flex w-[18%] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3 py-[22px] sm:py-5">
        <Text as="p" className="text-[14px] font-normal !text-blue_gray-500">
          {jun232023}
        </Text>
      </div>
      <div className="flex w-[12%] justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3 py-5">
        <Button color="gray_100_01" size="md" shape="round" className="min-w-[58px] rounded-[14px]">
          {frame}
        </Button>
      </div>
      <div className="flex flex-col items-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-100 bg-white-a700 px-3.5 py-[22px] sm:py-5">
        <Img src="img_more_vert_1.svg" width={24} height={24} alt="Create" className="h-[24px]" />
      </div>
    </div>
  );
}