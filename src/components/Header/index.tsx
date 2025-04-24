"use client";

import { SelectBox, Img, Input } from "./..";
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

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex items-center p-8 sm:p-5 bg-white-a700 shadow-xs`}>
      <div className="mx-auto flex w-full max-w-[1376px] items-start justify-between gap-5 md:flex-col">
        <div className="flex w-[12%] justify-between gap-5 md:w-full">
          <Link href="#">
            <Img src="img_menu_8_1.svg" width={32} height={32} alt="Menu 8 1" className="h-[32px]" />
          </Link>
          <Img
            src="img_header_logo.svg"
            width={92}
            height={32}
            alt="Header Logo"
            className="h-[32px] w-[92px] object-contain rounded-md shadow-lg"
          />
        </div>
        <div className="flex w-[70%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
          <Input
            shape="round"
            name="Textbox 4"
            placeholder={`Search...`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            prefix={
              <Img
                src="img_rewind.svg"
                width={20}
                height={20}
                alt="Rewind"
                className="h-[20px] w-[20px] object-contain"
              />
            }
            suffix={
              searchBarValue?.length > 0 ? (
                <Img
                  src="img_preferences.svg"
                  width={20}
                  height={20}
                  alt="Preferences"
                  onClick={() => setSearchBarValue("")}
                  className="h-[20px] w-[20px] object-contain"
                />
              ) : null
            }
            className="w-[58%] gap-2 self-center rounded-[20px] px-4 text-blue-gray-200 md:w-full"
          />
          <div className="flex flex-auto pl-10 w-[14%] justify-center md:w-full">
            <Link href="#">
              <Img
                src="img_icon_button_7.svg"
                width={36}
                height={36}
                alt="Icon Button 7"
                className="h-[36px] w-[82%] rounded-[50%]"
              />
            </Link>
            <Link href="#">
              <Img
                src="img_icon_button_8.svg"
                width={36}
                height={36}
                alt="Icon Button 8"
                className="ml-2 h-[36px] w-[72%] rounded-[50%]"
              />
            </Link>
            <Link href="#">
                <Img
                  src="img_avatar_14.svg"
                  width={36}
                  height={36}
                  alt="Arrow Down"
                  className="h-[36px] w-[82px] ml-[-5px]"
                />
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}