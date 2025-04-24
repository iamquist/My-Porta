import { Button, Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  pen?: string;
  frame?: string;
  frame1?: React.ReactNode;
  button?: string;
}

export default function UploadNewFilesUploadingRow({
  pen = "img_folder_1.svg",
  frame = "Design Materials.zip",
  frame1 = "4.9 MB",
  button = "Copy link",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center self-stretch flex-1`}>
      <div className="flex flex-1 flex-col items-start border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-[18px]">
        <Img src="img_checkmark_green_a700.svg" width={16} height={16} alt="Checkmark" className="h-[16px]" />
      </div>
      <div className="flex flex-1 pl-5 flex-col items-start border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-[18px]">
        <Img src={pen} width={16} height={16} alt="Pen" className="h-[16px]" />
      </div>
      <Button
        size="5xl"
        shape="square"
        className="min-w-[152px] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 !text-gray-900_01"
      >
        {frame}
      </Button>
      <Text
        as="p"
        className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-4 pl-2 pr-[34px] text-[14px] font-normal !text-gray-900_01 sm:pr-5"
      >
        {frame1}
      </Text>
      <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 p-2">
        <Button color="gray_100_02" className="min-w-[84px] rounded-md px-2.5">
          {button}
        </Button>
      </div>
    </div>
  );
}