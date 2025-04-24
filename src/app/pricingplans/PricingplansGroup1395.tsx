"use client";

import { Text, Heading, RatingBar, Button, Img, Slider } from "../../components";
import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";

export default function PricingplansGroup1395() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <div className="mt-8">
      <div className="flex flex-col items-center justify-center rounded-md bg-white-a700 py-16 md:py-5">
        <div className="container-xs flex flex-col items-center md:px-5">
          <Button
            shape="round"
            className="min-w-[128px] rounded-[18px] border border-solid border-green-a700 px-[11px] !text-green-a700"
          >
            TESTIMONIALS
          </Button>
          <Text
            size="text4xl"
            as="p"
            className="mt-9 !font-archivo text-[32px] font-normal !text-gray-900_01 md:text-[30px] sm:text-[28px]"
          >
            Don&#39;t just take our words for it
          </Text>
          <div className="mt-3 flex items-center justify-center self-end" />
          <div className="mx-auto mt-11 flex w-full self-stretch">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ "0": { items: 1 }, "551": { items: 1 }, "1051": { items: 1 } }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e: EventObject) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex items-center sm:flex-col">
                    <div className="flex h-[400px] flex-1 items-center justify-center rounded-[16px] bg-[url(/images/img_group_12.png)] bg-cover bg-no-repeat px-14 py-[174px] md:h-auto md:p-5 sm:self-stretch "> 
                    <Button size="6xl" shape="circle" className="w-[52px] rounded-[26px] px-3.5 bg-sky-400">
                      <Img src="img_arrow_right_gray_500_52x52.svg" width={24} height={24} />
                    </Button>
                    </div>
                    <div className="relative ml-[-32px] flex w-[40%] flex-col items-start rounded-md bg-white-a700 p-6 shadow-xl sm:ml-0 sm:w-full sm:p-5">
                      <Heading
                        size="textlg"
                        as="h2"
                        className="w-full text-[16px] font-medium leading-[26px] !text-blue_gray-900"
                      >
                        I highly recommend Porta to any CEO looking to enhance productivity and data protection.
                      </Heading>
                      <div className="mt-3 flex flex-col gap-6 self-stretch">
                        <RatingBar value={5} isEditable={true} size={16} className="flex gap-2.5" />
                        <Text as="p" className="text-[14px] font-normal leading-[22px] !text-gray-500">
                          When it comes to choosing cloud services for my business, security is my top concern. 
                          Porta&#39;s robust encryption and user-authenticated receivers have earned my trust 
                          completely.{" "}
                        </Text>
                      </div>
                      <Heading size="textlg" as="h3" className="mt-[92px] text-[16px] font-normal !text-blue_gray-900">
                        Reynolds Wegbebu
                      </Heading>
                      <Text as="p" className="mt-1 text-[14px] font-normal !text-blue_gray-500">
                        <span className="font-manrope font-medium">CEO,</span>
                        <span>&nbsp;</span>
                        <span className="italic">M&M Inc.</span>
                      </Text>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}