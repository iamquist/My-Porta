import { Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  image43?: string;
  container82?: string;
  mediaReportNov?: React.ReactNode;
}

export default function HomeFileListingContainer80({
  image43 = "img_image_18.png",
  container82 = "img_container_18.svg",
  mediaReportNov = "Media report - Nov 2023",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex items-end bg-gray-100 shadow-xs rounded-md`}>
      <div className="mt-6 w-full">
        <Img src={image43} width={180} height={192} alt="Image 43" className="mx-6 h-[192px] w-full pr-12 items-center object-contain" />
        <div className="relative mt-[-48px] flex items-center justify-center gap-2 bg-white-a700 p-3">
          <Img src={container82} width={24} height={24} alt="Container 82" className="h-[24px] rounded-md" />
          <Text as="p" className="self-center text-[14px] font-medium !text-blue_gray-900">
            {mediaReportNov}
          </Text>
        </div>
      </div>
    </div>
  );
}