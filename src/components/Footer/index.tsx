import { SelectBox, Img, Heading, Button } from "./..";
import Link from "next/link";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center py-8 sm:py-5 bg-gray-50_01 rounded-md`}
    >
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full flex-col gap-[26px]">
          <div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-5 sm:flex-col">
                <Img
                  src="img_footer_logo.svg"
                  width={94}
                  height={32}
                  alt="Footer Logo"
                  className="h-[32px] w-[94px] object-contain rounded-md shadow-lg"
                />
                <div className="text-center text-[16px] pt-2.5 text-gray-700">
                  &copy; {new Date().getFullYear()} theBlackGame Inc. All rights reserved.
                </div>
                <ul className="flex w-[30%] flex-wrap justify-between gap-5 self-end sm:w-full">
                  <li>
                    <Link href="#">
                      <Heading size="textlg" as="p" className="text-[16px] font-medium !text-gray-700">
                        About us
                      </Heading>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Heading size="textlg" as="p" className="text-[16px] font-medium !text-gray-700">
                        Our products
                      </Heading>
                    </Link>
                  </li>
                  <li>
                    <Link href="Privacy" target="_blank" rel="noreferrer">
                      <Heading size="textlg" as="p" className="text-[16px] font-medium !text-gray-700">
                        Privacy
                      </Heading>
                    </Link>
                  </li>
                  <li>
                    <Link href="Terms" target="_blank" rel="noreferrer">
                      <Heading size="textlg" as="p" className="text-[16px] font-medium !text-gray-700">
                        Terms
                      </Heading>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="h-px bg-gray-300" />
            </div>
          </div>
          <div className="flex justify-between gap-5 md:flex-col">
            <div className="flex gap-3">
              <Button
                color="red_100"
                size="xl"
                variant="outline"
                shape="round"
                className="w-[36px] rounded-[16px] !border px-2 hover:animate-ping"
              >
                <Img src="img_logo_youtube.svg" width={20} height={20}/>
              </Button>
              <Button
                color="blue_100"
                size="xl"
                variant="outline"
                shape="round"
                className="w-[36px] rounded-[16px] !border px-2 hover:animate-ping"
              >
                <Img src="img_logo_facebook.svg" width={20} height={20} />
              </Button>
              <Button
                color="blue_100"
                size="xl"
                variant="outline"
                shape="round"
                className="w-[36px] rounded-[16px] !border px-2 hover:animate-ping"
              >
                <Img src="img_logo_linkedin.svg" width={20} height={20}/>
              </Button>
            </div>
            <div className="flex w-[44%] items-center justify-between gap-5 md:w-full sm:flex-col">
  <div className="flex flex-col items-center gap-5 sm:w-full">
    <Heading size="textlg" as="p" className="text-[16px] font-medium !text-gray-700 text-center">
      <span className="text-gray-700">Having question? Contact&nbsp;</span>
      <span className="font-manrope font-semibold text-blue-700">support.</span>
    </Heading>
   
  </div>
  <SelectBox
    color="blue_gray_50"
    indicator={
      <Img
        src="img_arrow_drop_down_large.svg"
        width={14}
        height={12}
        alt="Arrow Drop Down Large"
        className="h-[12px] w-[14px]"
      />
    }
    name="Dropdown Button"
    placeholder={`English`}
    // options={dropDownOptions}
    className="w-[40%] gap-3.5 rounded-md px-2.5 sm:w-full"
  />
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}