import { Text, Img, Heading, Button } from '../../components';
import React from "react";

export default function FilelistinglistviewGroup1379() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-px w-full self-stretch bg-gray-300" />
            <div className="mx-6 mt-6 flex flex-col items-start gap-3 self-stretch md:mx-0">
                <Heading as="p" className="text-[14px] font-bold !text-gray-700">
                    Shared to
                </Heading>
                <div className="self-stretch">
                    <div className="flex">
                        <div className="flex w-[42%]">
                            <div className="flex w-full">
                                <Img
                                    src="img_avatar_9.svg"
                                    width={36}
                                    height={36}
                                    alt="Avatar 9"
                                    className="h-[36px] w-[50%] rounded-[50%]"
                                />
                                <Img
                                    src="img_avatar_10.svg"
                                    width={36}
                                    height={36}
                                    alt="Avatar 10"
                                    className="relative ml-[-8px] h-[36px] w-[50%] rounded-[50%]"
                                />
                            </div>
                            <div className="relative ml-[-8px] flex w-full">
                                <Img
                                    src="img_avatar_11.svg"
                                    width={36}
                                    height={36}
                                    alt="Avatar 11"
                                    className="h-[36px] w-[50%] rounded-[50%]"
                                />
                                <Img
                                    src="img_avatar_12.svg"
                                    width={36}
                                    height={36}
                                    alt="Avatar 12"
                                    className="relative ml-[-8px] h-[36px] w-[50%] rounded-[50%]"
                                />
                            </div>
                        </div>
                        <Button size="xl" shape="square" className="relative ml-[-10px] w-[40px]">
                                <Img 
                                    src="img_icon_button_88.svg"
                                    width={100}
                                    height={100}
                                    alt="Share Add"
                                    className="relative ml-[-8px] h-[100px] w-[100px] rounded-[50%]"
                                />
                        </Button>
                    </div>
                </div>
            </div>
            <Heading as="p" className="ml-6 mt-[26px] self-start text-[14px] font-bold !text-gray-700 md:ml-0">
                Owned by
            </Heading>
            <div className="mx-6 mt-3 flex items-center gap-4 self-stretch md:mx-0">
                <Img
                    src="img_avatar_14.svg"
                    width={36}
                    height={36}
                    alt="Avatar 14"
                    className="h-[36px] w-[14%] rounded-[50%]"
                />
                <Text as="p" className="text-[14px] font-normal">
                    You
                </Text>
            </div>
            <div className="mt-6 h-px w-full self-stretch bg-gray-300"/>
        </div>
    );
}