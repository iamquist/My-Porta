"use client";

import { Button, Radio, RadioGroup, Heading, Input, Img, Text } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function CreateaFolder({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")!} isOpen={isOpen} className="min-w-[1440px]">
      <div className="w-full min-w-[1440px] rounded-[10px] bg-white-a700 py-6 sm:py-5">
        <div className="container-xs flex justify-center px-14 md:px-5">
          <div className="flex w-[52%] flex-col gap-[18px] md:w-full">
            <div className="flex flex-col items-center gap-3">
              <div className="self-stretch">
                <div className="flex flex-col gap-4">
                  <div className="mx-6 flex items-start justify-center md:mx-0">
                    <div className="flex flex-1 items-center gap-3 self-center">
                      <div className="flex flex-col items-center rounded-[18px] bg-yellow-50 p-2.5">
                        <Img src="img_folder_yellow_800.svg" width={14} height={14} alt="Folder" className="h-[14px]" />
                      </div>
                      <Text
                        size="text3xl"
                        as="p"
                        className="self-start !font-archivo text-[24px] font-normal !text-gray-900_01 md:text-[22px]"
                      >
                        Create Folder
                      </Text>
                    </div>
                  <Img src="img_e_remove_2.svg" width={24} height={24} alt="E Remove 3" className="h-[24px]" />
                </div>
                <div className="h-px bg-gray-300" />
              </div>
            </div>
            <Heading as="h1" className="ml-6 self-start text-[14px] font-bold !text-blue_gray-800 md:ml-0">
              Folder name
            </Heading>
            <Input
              color="indigo_A200_33"
              variant="outline"
              name="textfield"
              placeholder={"Untitled..."}
              className="mx-5 self-stretch rounded-[10px] !border-[5px] px-4 md:mx-0"
            />
          </div>
          <div className="mx-6 flex flex-col items-start gap-3 md:mx-0">
            <Heading as="h2" className="text-[14px] font-bold !text-blue_gray-800">
              Who can access
            </Heading>
            <RadioGroup name="group872" className="flex flex-col self-stretch">
              <Radio
                value="everyonewithaccesstobrandguidelineusers"
                label="Everyone with access to Brand Guideline (5 users)"
                className="gap-1.5 text-[14px] text-blue_gray-900"
              />
              <Radio
                size="sm"
                value="specificusers"
                label="Specific users"
                className="mt-2 gap-1.5 text-[14px] text-gray-900_01"
              />
            </RadioGroup>
          </div>
          <div className="mx-6 flex justify-end gap-[11px] md:mx-0">
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
    </ModalProvider>
  );
}