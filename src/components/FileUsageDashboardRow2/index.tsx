import { Button, Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  rectangle?: string;
  angelGomezActive?: React.ReactNode;
  frame?: string;
}

export default function FileUsageDashboardRow2({
  rectangle = "img_container_211.png",
  angelGomezActive,
  frame = "Details",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center self-stretch flex-1`}>
      <div className="flex flex-col border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-2.5">
        <Img src={rectangle} width={36} height={36} alt="Rectangle" className="h-[36px] rounded-[18px] object-cover" />
      </div>
      <div className="flex-1 border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 p-1">
        <Text as="p" className="self-end text-[14px] font-normal leading-[22px] !text-blue_gray-900">
          <span className="font-manrope font-semibold text-blue_gray-900">
            <>
              Angel Gomez
              <br />
            </>
          </span>
        </Text>
        <span className="text-[12px] text-green-a700">Active</span>
      </div>
      <Button
        size="8xl"
        shape="square"
        className="min-w-[70px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 px-3.5 !text-blue-400"
      >
        {frame}
      </Button>
    </div>
  );
}