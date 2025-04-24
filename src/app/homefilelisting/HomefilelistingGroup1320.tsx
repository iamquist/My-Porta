import { Text, Heading } from "../../components";
import React from "react";

export default function HomefilelistingGroup1320() {
    return (
        <div className="mt-[30px] flex flex-col items-center gap-7">
            <Heading size="headings" as="h4" className="ml-6 self-start text-[16px] font-bold md:ml-0">
                Storage
            </Heading>
            <div className="mx-1.5 flex h-[120px] items-end justify-center self-stretch bg-[url(/images/img_group_21.svg)] bg-cover bg-no-repeat md:mx-0 md:h-auto">
                <div className="mt-[62px] flex flex-col items-center gap-0.5">
                    <Heading size="headinglg" as="h5" className="text-[24px] font-bold !text-blue_gray-900 md:text-[22px]">
                        2160 GB
                    </Heading>
                    <Text as="p" className="text-[14px] font-medium !text-gray-500">
                        used of 3000 GB
                    </Text>
                </div>
            </div>
            <Text as="p" className="w-[64%] text-[14px] font-normal leading-[22px] !text-blue-700 underline md:w-full">
                Upgrade storage for more space
            </Text>
            <div className="h-px w-full self-stretch bg-gray-100"/>
        </div>
    );
}