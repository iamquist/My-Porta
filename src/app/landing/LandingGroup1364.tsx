import { Text, Img, Heading } from "../../components";
import React from "react";

export default function LandingGroup1364() {
  return (
    <div className="mt-[98px] self-stretch">
      <div className="flex flex-col items-center justify-center rounded-md bg-white-a700 py-16 md:py-5">
        <div className="container-xs mt-1 flex flex-col items-center md:px-5">
          <Heading size="headingxl" as="h2" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
            Features you&#39;ll love
          </Heading>
          <div className="mt-16 flex gap-6 self-stretch md:flex-col">
            <div className="flex w-[34%] flex-col items-center gap-8 rounded-md bg-indigo-50 md:w-full">
              <div className="mx-8 mt-8 flex flex-col gap-6 self-stretch md:mx-0">
                <Text
                  size="text2xl"
                  as="p"
                  className="!font-archivo text-[20px] font-normal leading-[30px] !text-gray-900_01"
                >
                  All your important files, always safe and accessible.
                </Text>
                <Text as="p" className="text-[14px] font-normal leading-[22px] !text-blue_gray-900">
                  Your secure digital hard drive in the cloud - accessible from anywhere, at any time.
                </Text>
              </div>
              <Img
                src="img_image_15.png"
                width={274}
                height={222}
                alt="Image 15"
                className="h-[222px] w-[68%] self-end rounded-[16px] object-contain"
              />
            </div>
            <div className="flex flex-1 items-start justify-center rounded-md bg-gray-100_03 md:flex-col md:self-stretch">
              <div className="mt-9 flex w-[48%] flex-col items-start md:w-full md:px-5">
                <Text size="text2xl" as="p" className="!font-archivo text-[20px] font-normal !text-gray-900_01">
                  File sharing made simple.
                </Text>
                <Text
                  as="p"
                  className="mt-3 w-[90%] text-[14px] font-normal leading-[22px] !text-blue_gray-900 md:w-full"
                >
                  Share files with colleagues, friends, or family with just a few clicks. You control who can access and
                  edit the shared content.
                </Text>
              <div className="mt-[46px] flex items-center gap-1.5 rounded-md p-1.5">
                <Text as="p" className="text-[14px] font-normal !text-indigo-a200">
                  Upload a file to share
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
          <div className="relative mt-[88px] h-[326px] w-[46%] content-center self-end md:h-auto md:w-full md:px-5">
            <Img
              src="img_image_16.png"
              width={320}
              height={326}
              alt="Image 16"
              className="ml-auto h-[326px] w-[90%] rounded-[16px] object-contain"
            />
            <div className="absolute right-[13%] top-[36%] m-auto flex w-[48%] justify-center rounded-[12px] bg-indigo-50 shadow-5xl">
              <Text as="p" className="text-[14px] font-normal !text-indigo-a200">
                Add emails
              </Text>
            </div>
            <Img
              src="img_cursor_add_3.svg"
              width={24}
              height={24}
              alt="Cursor Add 1"
              className="absolute left-[42%] top-[32%] m-auto h-[24px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-6 self-stretch md:flex-col">
        <div className="flex flex-1 flex-col items-center gap-6 rounded-md bg-gray-100_04 px-8 md:self-stretch sm:px-5">
          <div className="mt-9 flex flex-col items-start gap-3 self-stretch">
            <Text size="text2xl" as="p" className="!font-archivo text-[20px] font-normal !text-gray-900_01">
              Real-time collaboration: Document editing & previews
            </Text>
            <Text as="p" className="w-full text-[14px] font-normal leading-[22px] !text-blue_gray-900">
              Work on projects together in real-time. Comment, edit, and brainstorm directly in the cloud, without the
              need for downloading. Preview files before you open them.
            </Text>
          </div>
          <div className="flex items-center gap-1 self-start rounded-md p-1.5">
            <Text as="p" className="text-[14px] font-normal !text-indigo-a200">
              Try Porta for your team
            </Text>
          <Img
            src="img_arrow_left_indigo_a200.svg"
            width={16}
            height={16}
            alt="Arrow Left"
            className="h-[16px]"
          />
        </div>
        <div className="relative mx-5 h-[214px] content-center self-stretch md:mx-0 md:h-auto">
          <div className="flex flex-1 items-center justify-center md:flex-col">
            <div className="relative z-[2] mb-14 flex w-[18%] justify-center self-end rounded-[12px] bg-indigo-50 shadow-5xl md:w-full">
              <Text as="p" className="text-[14px] font-normal !text-indigo-a200">
                Add a comment
              </Text>
            </div>
            <Img
              src="img_image_17.png"
              width={580}
              height={214}
              alt="Image 17"
              className="relative ml-[-112px] h-[214px] w-[76%] rounded-[16px] object-contain md:ml-0 md:w-full"
            />
          </div>
          <Img
            src="img_cursor_add_2.svg"
            width={24}
            height={24}
            alt="Cursor Add 2"
            className="absolute bottom-[34%] left-[21%] z-[3] m-auto h-[24px]"
          />
        </div>
      </div>
      <div className="flex w-[34%] flex-col gap-6 rounded-md bg-deep_purple-50 p-2.5 md:w-full">
        <div className="mt-4 flex flex-col items-start gap-3">
          <Text size="text2xl" as="p" className="!font-archivo text-[20px] font-normal !text-gray-900_01">
            Automatic Backup & Sync
          </Text>
          <Text as="p" className="w-full text-[14px] font-normal leading-[22px] !text-blue_gray-900">
            Relax knowing your files are automatically backed up and synced across all your devices.
          </Text>
        </div>
        <div className="relative mx-7 h-[270px] md:mx-0">
          <Img
            src="img_rectangle_2.svg"
            width={244}
            height={244}
            alt="Rectangle 2"
            className="absolute left-0 right-0 top-0 mx-auto h-[244px] w-[84%] rounded-md object-contain"
          />
          <Img
            src="img_rectangle_3.svg"
            width={244}
            height={244}
            alt="Rectangle 3"
            className="absolute bottom-0 left-0 right-0 top-0 mx-auto h-[244px] w-[84%] rounded-md object-contain"
          />
          {/* absolute bottom-[-0.37px] right-[0.08px] my-auto ml-[30px] mr-auto h-[256px] flex-1 rounded-md  */}
          <div className=" absolute bottom-[-0.37px] left-0 right-0 top-0 mx-auto h-[244px] w-[84%] rounded-md object-contain bg-[url(/images/img_group_24.svg)] bg-cover bg-no-repeat px-6 py-8 md:ml-0 md:h-auto sm:p-5">
          <div className="flex flex-col items-center gap-[22px]">
            <Img src="img_menu_5_1.svg" width={16} height={16} alt="Menu 5 1" className="h-[16px] self-end" />
            <div className="mx-2 flex flex-col items-center gap-3 self-stretch md:mx-0">
              <Img
                src="img_file_text_1.svg"
                width={78}
                height={78}
                alt="File Text 1"
                className="h-[78px] w-[42%] object-contain"
              />
              <div className="relative h-[54px] self-stretch">
                <Text
                  as="p"
                  className="absolute left-[4.04px] top-0 m-auto rotate-[6deg] text-[14px] font-medium !text-blue_gray-900"
                >
                  Training doc.docx
                </Text>
                <Text
                  as="p"
                  className="absolute bottom-[-0.02px] left-0 m-auto rotate-[6deg] text-[14px] font-normal !text-gray-500"
                >
                  Changes saved.
                </Text>
              </div>
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}