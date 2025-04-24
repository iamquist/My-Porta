import { Img, Text, Button, Heading } from "../../components";
import React from "react";

export default function LandingGroup1344() {
    return (
        <div className="self-stretch">
            <div className="flex justify-center bg-white-a700 py-14 md:py-5">
                <div className="container-xs mb-2 flex items-center justify-center md:flex-col md:px-5">
                    <div className="flex w-[34%] flex-col self-end md:w-full">
                        <Heading
                            size="heading2xl"
                            as="h1"
                            className="w-[82%] text-[40px] font-bold leading-[56px] md:w-full md:text-[38px] sm:text-[36px]"
                        >
                            Secure your files, access from any devices.
                        </Heading>
                        <Heading
                            size="textlg"
                            as="h2"
                            className="mt-8 w-[82%] text-[16px] font-normal leading-[30px] !text-blue_gray-900 md:w-full"
                        >
                            Create multiple portals 
                            for your clients and teams. Work on projects together in real-time, from any devices, anywhere.
                        </Heading>
                        <div className="mt-16 flex gap-[7px]">
                            <Button
                                color="gray_100_02"
                                rightIcon={
                                    <Img
                                        src="img_download.svg"
                                        width={16}
                                        height={16}
                                        alt="Download"
                                        className="mb-0.5 h-[16px] w-[16px] object-contain"
                                    />
                                }
                                className="min-w-[230px] gap-1 rounded-md px-2.5 shadow-lg"
                            >
                                Download Porta for desktop
                            </Button>
                            <Button color="indigo_A200" className="min-w-[108px] rounded-md px-2.5 shadow-lg">
                                Start on web
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[478px] flex-1 md:w-full md:flex-none md:self-stretch">
                        <div className="absolute bottom-0 left-0 right-0 mx-10 flex flex-1 flex-col items-end md:mx-0">
                            <div className="relative h-[392px] self-stretch">
                                <div className="absolute bottom-0 right-[11.50px] top-0 my-auto ml-[74px] mr-3 h-max flex-1 rounded-[10px] bg-white-a700 shadow-xs md:mx-0">
                                    <Img
                                        src="img_image_29.png"
                                        width={592}
                                        height={392}
                                        alt="Image 29"
                                        className="h-[392px] w-full rounded-[10px] object-cover md:h-auto"
                                    />
                                </div>
                                <div className="absolute bottom-[33%] right-[-0.50px] m-auto flex w-[22%] justify-center rounded-[12px] bg-gray-100_02 shadow-5xl">
                                    <Text as="p" className="text-[14px] font-normal !text-indigo-a200">
                                        Add a comment
                                    </Text>
                                </div>
                            <Img
                                src="img_cursor_add_3.svg"
                                width={24}
                                height={24}
                                alt="Cursor Add 3"
                                className="absolute bottom-[37%] right-[20%] m-auto h-[24px]"
                            />
                        </div>
                        <div className="relative z-[1] mr-[136px] mt-[-24px] flex w-[60%] justify-center rounded-[26px] bg-blue_gray-900 p-4 shadow-4xl md:mr-0 md:w-full">
                            <Text as="p" className="text-[149px] font-normal Italic text-blue_gray-100">
                            @Users or teams to share files...
                            </Text>
                        </div>
                    </div>
                    <div className="absolute left-[9%] top-0 m-auto w-[10%] rounded-md bg-indigo-a700 px-2 py-3 shadow-2xl">
                        <Img
                            src="img_collapsed_sidebar.svg"
                            width={56}
                            height={216}
                            alt="Collapsed Sidebar"
                            className="h-[216px] w-full md:h-auto"
                        />
                        <div className="mx-1.5 mt-6 h-px w-[42px] bg-blue_gray-200 md:mx-0" />
                        <Img
                            src="img_calculator.svg"
                            width={40}
                            height={80}
                            alt="Calculator"
                            className="mx-1.7 mt-2 h-[80px] w-full md:mx-0 md:h-auto"
                        />
                    </div>
                    <div className="absolute right-[-1.50px] top-0 m-auto w-[36%] rounded-md bg-white-a700 p-2.5 shadow-3xl">
                        <div className="mt-1">
                            <div className="flex flex-col items-start">
                                <Text as="p" className="text-[14px] font-medium !text-blue_gray-900">
                                    Free storage
                                </Text>
                                <div className="flex flex-wrap justify-between gap-5 self-stretch">
                                    <Text as="p" className="text-[14px] font-normal !text-gray-500">
                                        546 GB of 1000 GB used
                                    </Text>
                                    <Text as="p" className="text-[14px] font-normal !text-gray-500">
                                        52%
                                    </Text>
                                    </div>
                                </div>
                            </div>
                            <Img
                                src="img_slider_1.svg"
                                width={254}
                                height={22}
                                alt="Slider 1"
                                className="h-[22px] w-full md:h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}