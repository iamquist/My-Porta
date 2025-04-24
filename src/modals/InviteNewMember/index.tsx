"use client";

import { Button, TextArea, Input, Text, Img, Heading } from "../../components";
import React from "react";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function InviteNewMember({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")!} isOpen={isOpen} className="min-w-[1440px]">
      <div className="w-full min-w-[1440px] rounded-[10px] bg-white-a700 py-6 sm:py-5">
        <div className="container-xs flex justify-center px-14 md:px-5">
          <div className="w-[52%] md:w-full">
            <div className="mx-6 flex items-start justify-between gap-5 md:mx-0">
              <Heading size="headinglg" as="h1" className="self-end text-[24px] font-bold md:text-[22px]">
                Invite people to your Porta
              </Heading>
              <Img src="img_e_remove_2.svg" width={24} height={24} alt="E Remove 4" className="h-[24px]" />
            </div>
            <div className="mt-3 h-px bg-gray-300" />
            <div className="mx-[22px] mt-1.5 md:mx-0">
              <div className="flex flex-col items-end">
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <Text as="p" className="mb-1.5 self-end text-[14px] font-medium !text-blue_gray-900">
                    We&#39;ll notify you when they join.
                  </Text>
                <div className="flex rounded-md p-1.5">
                  <Text as="p" className="self-end text-[14px] font-normal !text-indigo-a200">
                    Update settings
                  </Text>
                </div>
              </div>
              <Input
                color="white_A700"
                size="sm"
                name="Textbox 17"
                placeholder={ `@Users or teams `}
                className="mt-1.5 self-stretch rounded-md border-[0.5px] border-solid border-gray-300 px-2.5 !text-gray-500"
                />
            <TextArea
              shape="round"
              name="Textarea 1"
              placeholder="{ Add an optional message }"
              className="mt-4 self-stretch rounded-md !border-[0.5px] !border-gray-300 px-3 text-gray-500"
            />
            <Button color="indigo_A200" className="mt-3.5 min-w-[74px] rounded-md px-[18px]">
              Invite
            </Button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </ModalProvider>
  );
}