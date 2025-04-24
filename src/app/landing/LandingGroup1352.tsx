import { Img, Text, Heading } from '../../components';
import Landing1 from '../../components/Landing1';
import React from "react";

export default function LandingGroup1352() {
    return (
        <div className="mt-[98px] self-stretch">
            <div className="flex justify-center rounded-md bg-gray-50_01">
                <div className="container-xs flex justify-center md:px-5">
                    <div className="flex w-full items-start md:flex-col">
                        <div className="mt-[118px] flex flex-1 flex-col items-start gap-8 md:self-stretch">
                            <Heading
                                size="headingxl"
                                as="h2"
                                className="w-[76%] text-[32px] font-bold leading-[48px] md:w-full md:text-[30px] sm:text-[28px]"
                            >
                                We have the trust of 208,000 registered users and 90,000 teams globally
                            </Heading>
                            <div className="flex items-center gap-1.5 rounded-md p-1.5">
                                <Text as="p" className="text-[14px] font-normal !text-indigo-a200">
                                    Join our community
                                </Text>
                                <Img
                                    src="img_arrow_left_indigo_a200.svg"
                                    width={16}
                                    height={16}
                                    alt="Arrow Left"
                                    className="h-[16px]"
                                />
                            </div>
                        </div>
                        <div className="flex w-[42%] gap-6 self-center md:w-full md:flex-row sm:flex-col">
                            <Landing1 />
                            <Landing1 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}