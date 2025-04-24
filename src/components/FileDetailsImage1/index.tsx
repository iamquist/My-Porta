import { Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  joshuaDavis?: React.ReactNode;
  p3minsago?: React.ReactNode;
  iAlsoThinkThe?: React.ReactNode;
}

export default function FileDetailsImage1({
  joshuaDavis = "Joshua Davis",
  p3minsago = "3 mins ago",
  iAlsoThinkThe = "I also think the ribbon doesn't fit in.",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex items-center self-stretch flex-1`}>
      <div className="flex w-full flex-col items-start gap-2.5">
        <Img
          src="img_avatar_14.svg"
          width={36}
          height={36}
          alt="Avatar 32"
          className="h-[36px] w-[14%] rounded-[50%]"
        />
        <div className="flex flex-wrap items-center gap-2 self-stretch">
          <Text as="p" className="text-[14px] font-medium !text-blue_gray-500">
            {joshuaDavis}
          </Text>
          <Text size="texts" as="p" className="self-end text-[12px] font-normal !text-gray-500">
            {p3minsago}
          </Text>
        </div>
        <Text as="p" className="text-[14px] font-normal !text-gray-900_01">
          {iAlsoThinkThe}
        </Text>
      </div>
    </div>
  );
}