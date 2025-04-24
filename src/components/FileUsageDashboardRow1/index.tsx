import { Button, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  frame?: string;
  frame1?: React.ReactNode;
  frame2?: string;
}

export default function FileUsageDashboardRow1({
  frame = "+82",
  frame1 = "new files uploaded",
  frame2 = "Details",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center self-stretch flex-1 `}>
      <div className="w-[18%] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-3">
        <Button color="gray_100_02" shape="round" className="self-stretch rounded-[18px] px-2.5">
          {frame}
        </Button>
      </div>
      <Text
        as="p"
        className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-3 pl-3 pr-7 text-[14px] font-normal !text-blue_gray-900 sm:pr-5"
      >
        {frame1}
      </Text>
      <Button
        size="9xl"
        shape="square"
        className="min-w-[70px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 px-3.5 !text-blue-400"
      >
        {frame2}
      </Button>
    </div>
  );
}