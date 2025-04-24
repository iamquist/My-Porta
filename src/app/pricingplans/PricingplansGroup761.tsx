import { Button, Text, Img } from "../../components";
import React from "react";

export default function PricingplansGroup761() {
  return (
    <div className="mt-[30px]">
      <div className="relative h-[264px] content-end rounded-md bg-gray-900 shadow-xs md:h-auto">
        <div className="relative mx-auto h-[228px] flex-1">
          <Img
            src="img_oval_7.png"
            width={424}
            height={228}
            alt="Oval 7"
            className="absolute bottom-0 right-px top-0 my-auto h-[228px] w-[30%] object-contain"
          />
          <div className="absolute left-0 right-0 top-7 mx-auto flex flex-1 items-center justify-between gap-5 px-[120px] md:relative md:flex-col md:px-5">
            <Text
              size="text5xl"
              as="p"
              className="ml-2.5 w-[46%] !font-archivo text-[48px] font-normal leading-[50px] !text-white-a700 md:ml-0 md:w-full md:text-[44px] sm:text-[38px]"
            >
              Clients love our support team, and so will you!
            </Text>
            <Button color="gray_100_02" size="7xl" className="min-w-[362px] rounded-md px-[18px]">
              Find a Customer Support to guide you
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}