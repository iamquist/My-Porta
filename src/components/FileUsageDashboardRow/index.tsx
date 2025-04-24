import { Img, Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  rectangle?: string;
  angelGomez?: React.ReactNode;
  frame?: React.ReactNode;
  frame1?: React.ReactNode;
  frame2?: React.ReactNode;
}

export default function FileUsageDashboardRow({
  rectangle = "img_container_211.png",
  angelGomez = "Angel Gomez",
  frame = "requested access for",
  frame1 = "Key Visual Opt.02",
  frame2 = "Pending",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex md:flex-col justify-center items-center self-stretch flex-1`}>
      <div className="flex w-[24%] items-center gap-2 border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-2">
        <Img src={rectangle} width={36} height={36} alt="Rectangle" className="h-[36px] rounded-[18px] object-cover" />
        <Text as="p" className="mb-1.5 self-end text-[14px] font-medium !text-gray-900_01">
          {angelGomez}
        </Text>
      </div>
      <Text 
        as="p"
        className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 px-1 py-4 text-[14px] font-normal !text-gray-900_01"
      >
        {frame}
      </Text>
      <Heading
        as="p"
        className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-4 pl-1 pr-[34px] text-[14px] font-bold !text-blue-700 sm:pr-5"
      >
        {frame1}
      </Heading>
      <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 px-2 py-3.5">
        <Text
          size="textxs"
          as="p"
          className="flex items-center justify-center rounded-[12px] bg-yellow-50 px-2 py-1 text-[11px] font-normal !text-lime-900"
        >
          {frame2}
        </Text>
      </div>
      <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 px-2 py-2.5">
        <Img src="img_button.svg" width={70} height={32} alt="Button" className="h-[32px] w-full rounded sm:h-auto" />
      </div>
    </div>
  );
}