import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  container74?: string;
  documents?: React.ReactNode;
  p760gb?: React.ReactNode;
  p223files?: React.ReactNode;
}

export default function HomeFileListing1({
  container74 = "img_container_74.svg",
  documents = "Documents",
  p760gb = "760 GB",
  p223files = "223 files",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center self-stretch gap-3 flex-1`}>
      <Img src={container74} width={48} height={48} alt="Container 74" className="h-[48px] rounded-md" />
      <div className="flex-1">
        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-wrap items-center justify-between gap-5 self-stretch">
            <Heading as="p" className="text-[14px] w-2 font-bold !text-blue_gray-900">
              {documents}
            </Heading>
            <Heading size="headings" as="h6" className="text-[16px] font-bold !text-blue-700">
              {p760gb}
            </Heading>
          </div>
          <Text as="p" className="!font-archivo text-[14px] font-normal !text-gray-500">
            {p223files}
          </Text>
        </div>
      </div>
    </div>
  );
}