"use client";

import { Button, Img, Text, SelectBox, Input, Heading } from "../../components";
import ShareAFolder1 from "../../components/ShareAFolder1";
import React, { Suspense } from "react";
import { default as ModalProvider } from "react-modal";

const data = [
  { joshuaDavisYou: "Joshua Davis (You)", joshDavisHotmailCom: "josh.davis@hotmail.com", owner: "Owner" },
  { joshuaDavisYou: "Joshua Davis (You)", joshDavisHotmailCom: "josh.davis@hotmail.com", owner: "Owner" },
  { joshuaDavisYou: "Joshua Davis (You)", joshDavisHotmailCom: "josh.davis@hotmail.com", owner: "Owner" },
  { joshuaDavisYou: "Joshua Davis (You)", joshDavisHotmailCom: "josh.davis@hotmail.com", owner: "Owner" },
  {
    joshuaDavisYou: "Joshua Davis (You)",
    joshDavisHotmailCom: "josh.davis@hotmail.com",
    owner: "Can view and comment",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
  isOpen: boolean;
}

export default function ShareaFolder({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")!} isOpen={isOpen} className="min-w-[1176px]">
      <div className="container-xs flex min-w-[1176px] justify-center px-14 md:px-5">
        <div className="flex w-[52%] flex-col gap-8 rounded-[10px] bg-white-a700 px-[22px] py-6 md:w-full sm:p-5">
          <div className="flex items-center justify-center gap-3 sm:flex-col">
            <div className="flex flex-1 items-center justify-center sm:self-stretch">
              <div className="flex flex-1 items-center gap-3">
                <Button color="yellow_50" size="xl" shape="circle" className="w-[36px] rounded-[18px] px-2.5">
                  <Img src="img_folder_yellow_800.svg" width={14} height={14} />
                </Button>
                <Heading size="headinglg" as="h1" className="self-start text-[24px] font-bold md:text-[22px]">
                  Share &quot;Brand Guideline&quot;
                </Heading>
              </div>
               <Img src="img_search_blue_gray_900.svg" width={24} height={24} alt="Search" className="h-[24px]" />
            </div>
            <Img src="img_c_info_1.svg" width={24} height={24} alt="C Info 1" className="h-[24px] sm:w-full" />
          </div>
          <div>
            <div className="flex flex-col gap-[34px]">
              <div className="flex flex-col gap-[34px]">
                <div className="flex items-center gap-3 sm:flex-col">
                  <Input
                    color="gray_300"
                    size="sm"
                    variant="outline"
                    name="Textbox 15"
                    placeholder="{ @Users or teams }"
                    className="flex-grow rounded-md !border-[0.5px] px-2.5"
                  />
                  <SelectBox
                    indicator={
                      <Img
                        src="img_arrow_down_gray_700.svg"
                        width={16}
                        height={16}
                        alt="Arrow Down"
                        className="h-[16px] w-[16px]"
                      />
                    }
                    name="Button 43"
                    placeholder={ `Can edit` }
                    options={dropDownOptions}
                    className="w-[20%] gap-1 rounded-md pl-4 !text-gray-700 sm:w-full"
                  />
                </div>
                <div className="flex flex-col items-start gap-[18px]">
                  <Text as="p" className="text-[14px] font-medium !text-blue_gray-900">
                    People have access
                  </Text>
                  <div className="flex flex-col gap-3.5 self-stretch">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <ShareAFolder1 {...d} key={"group894" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <Text as="p" className="text-[14px] font-medium !text-blue_gray-900">
                  General access
                </Text>
                <div className="mt-[18px] flex items-center gap-2 self-stretch">
                  <Img
                    src="img_icon_button_128.svg"
                    width={36}
                    height={36}
                    alt="Icon Button 128"
                    className="h-[36px] w-[6%] rounded-[50%]"
                  />
                  <SelectBox
                    indicator={
                      <Img
                        src="img_arrowdown_gray_900_01.svg"
                        width={14}
                        height={12}
                        alt="Arrow Down"
                        className="h-[12px] w-[14px]"
                      />
                    }
                    name="Dropdown Button"
                    placeholder={ `Restricted` }
                    options={dropDownOptions}
                    className="w-[50%] gap-3.5 rounded-md px-2.5"
                  />
                </div>
                <Text size="texts" as="p" className="ml-11 mt-2.5 text-[12px] font-normal !text-gray-500 md:ml-0">
                  Only people with access can open with the link.
                </Text>
                <div className="mt-[22px] flex self-stretch">
                  <Button
                    color="gray_100_02"
                    leftIcon={
                      <Img
                        src="img_hyperlink.svg"
                        width={16}
                        height={16}
                        alt="Hyperlink"
                        className="mb-0.5 h-[16px] w-[16px] object-contain"
                      />
                    }
                    className="min-w-[110px] gap-1.5 rounded-md px-2.5"
                  >
                    Copy link
                  </Button>
                  <div className="flex flex-1 justify-end gap-[11px]">
                    <Button color="gray_100" className="min-w-[70px] rounded-md px-2.5">
                      Cancel
                    </Button>
                    <Button color="indigo_A200" className="min-w-[74px] rounded-md px-3.5">
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}