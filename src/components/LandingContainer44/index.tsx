import { Button, Img, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  image27?: string;
  forWork?: React.ReactNode;
  storeAndShare?: React.ReactNode;
  button10?: string;
}

export default function LandingContainer44({
  image27 = "img_image_27.png",
  forWork = "For Work",
  storeAndShare = "Store and share essential work with your team. Create and manage different client portals.",
  button10 = "Get Porta for Work ",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[50%] mdw:w-full gap-[26px] bg-white-A700 shadow-sm rounded-md`}
    >
      <Img
        src={image27}
        width={576}
        height={200}
        alt="Image 27"
        className="h-[200px] w-full rounded-tl-md rounded-tr-md object-cover sm:h-auto"
      />
      <div className="mx-6 mb-6 flex flex-col items-start self-stretch sm:mx-0">
        <Heading size="headingxl" as="h2" className="text-[32px] font-bold sm:text-[27px]">
          {forWork}
        </Heading>
        <Heading
          size="textlg"
          as="p"
          className="mt-3.5 w-full text-[16px] font-normal leading-[26px] !text-blue_gray-900 sm:w-full sm:text-[13px]"
        >
          {storeAndShare}
        </Heading>
        <Button
          color="indigo_A200"
          size="3xl"
          rightIcon={
            <Img
              src="img_arrowleft.svg"
              width={20}
              height={20}
              alt="Arrow Left"
              className="h-[20px] w-[20px] object-contain"
            />
          }
          className="mt-[30px] gap-2.5 self-stretch rounded-md px-[34px] sm:px-5"
        >
          {button10}
        </Button>
      </div>
    </div>
  );
}