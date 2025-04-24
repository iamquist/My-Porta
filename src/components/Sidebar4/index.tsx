"use client";

import { Img, Text } from "./..";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar4({ ...props }: Props) {
  return (
    <Sidebar
      {...props}
      width="318px !important"
      className={`${props.className} flex flex-col h-screen pt-10 top-0 sm:pt-5 bg-white-a700 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "8px 8px 8px 16px",
            gap: "8px",
            color: "#565e6c",
            fontWeight: 400,
            fontSize: "14px",
            [`&:hover, &.ps-active`]: {
              color: "#636ae8",
              fontWeight: "700 !important",
              backgroundColor: "#f2f2fd !important",
            },
          },
        }}
        className="w-full self-stretch pb-4"
      >
        <div className="ml-8 mr-10">
          <SubMenu
            icon={
              <Img
                src="img_checkmark_indigo_a200.svg"
                width={20}
                height={20}
                alt="Checkmark"
                className="h-[20px] w-[20px]"
              />
            }
            label="MY PORTA"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <Img src="img_folder_gray_700.svg" width={24} height={24} alt="Folder" className="h-[24px] w-[24px]" />
            }
            label="All files"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <MenuItem icon={<Img src="img_meeting.svg" width={24} height={24} alt="Meeting" className="h-[24px] w-[24px]" />}>
            Shared with me  
          </MenuItem>
          <MenuItem icon={<Img src="img_clock.svg" width={24} height={24} alt="Clock" className="h-[24px] w-[24px]" />}>
            Recents
          </MenuItem>
          <MenuItem icon={<Img src="img_star_gray_700.svg" width={24} height={24} alt="Star" className="h-[24px] w-[24px]" />}>
            Starred
          </MenuItem>
          <MenuItem icon={<Img src="img_trash.svg" width={24} height={24} alt="Trash" className="h-[24px] w-[24px]" />}>
            Bin
          </MenuItem>
        </div>
        <div className="mt-3 h-px bg-gray-300" />
        <div className="ml-8 mr-10">
          <MenuItem
            icon={
              <Img
                src="img_file_chart_bar_indigo_a200.svg"
                width={24}
                height={24}
                alt="File Chart Bar"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Insights
          </MenuItem>
          <MenuItem icon={<Img src="img_search.svg" width={24} height={24} alt="Search" className="h-[24px] w-[24px]" />}>
            Setting
          </MenuItem>
        </div>
        <div className="mt-[330px] h-px bg-gray-300" />
        <div className="ml-8 mr-10">
          <MenuItem icon={<Img src="img_arrow_down.svg" width={24} height={24} alt="Arrow Down" className="h-[24px] w-[24px]" />}>
            Log out
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}