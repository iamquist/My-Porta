import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  joshuaDavisYou?: React.ReactNode;
  joshDavisHotmailCom?: React.ReactNode;
  owner?: React.ReactNode;
}

export default function ShareAFolder1({
  joshuaDavisYou,
  joshDavisHotmailCom = "josh.davis@hotmail.com",
  owner = "Owner",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col justify-center items-center self-stretch flex-1`}>
      <div className="flex flex-1 items-center justify-center gap-1.5 sm:self-stretch">
        <Img
          src="img_container_200.png"
          width={36}
          height={36}
          alt="Rectangle"
          className="h-[36px] rounded-[18px] object-cover"
        />
        <div className="flex flex-1 flex-col items-start gap-0.5">
          <Heading as="p" className="text-[14px] font-bold">
            <span>Joshua Davis&nbsp;</span>
            <span className="font-manrope font-medium">(You)</span>
          </Heading>
          <Text size="texts" as="p" className="text-[12px] font-normal !text-gray-500">
            {joshDavisHotmailCom}
          </Text>
        </div>
      </div>
      <Text as="p" className="text-[14px] font-normal !text-blue_gray-900">
        {owner}
      </Text>
    </div>
  );
}