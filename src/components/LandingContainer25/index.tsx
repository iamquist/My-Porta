import { Img, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  folder1?: string;
  workDocuments?: React.ReactNode;
}

export default function LandingContainer25({
  folder1 = "img_folder_1.svg",
  workDocuments = "Work Documents",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center w-full gap-3 px-3 py-3.5`}>
      <Img src={folder1} width={20} height={20} alt="Folder 1" className="h-[20px]" />
      <div className="flex flex-1 items-center justify-between gap-5">
        <Text as="p" className="text-[14px] font-medium text-blue_gray-900">
          {workDocuments}
        </Text>
        <Img src="img_more_vert_1.svg" width={20} height={20} alt="More Vert 1" className="h-[20px]" />
      </div>
    </div>
  );
}