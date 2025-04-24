"use client";

import { Heading, Text } from "../../components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function FilelistinglistviewGroup1736() {
  return (
    <div>
      <Tabs 
      className="flex flex-col gap-7 self-stretch px-5" 
      selectedTabClassName="!text-black-900 font-bold" 
      selectedTabPanelClassName="!relative tab-panel--selected"
      > 
        <TabList className="flex flex-wrap gap-4 px-2 py-3.5">
          <Tab className="text-[12px] font-normal text-gray-700">Details</Tab>
          <Tab className="text-[12px] font-normal text-gray-700">Activities</Tab>
        </TabList>
        {[...Array(2)].map((_, index) => (
          <TabPanel key={`tab-panel${index}`} className="absolute items-center">
            <div className="w-full">
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    File type
                  </Text>
                  <Heading as="p" className="text-[14px] font-bold">
                    Image
                  </Heading>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    Size
                  </Text>
                  <Heading as="p" className="text-[14px] font-bold">
                    64 KB
                  </Heading>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    Last Modified
                  </Text>
                  <Heading as="p" className="text-[14px] font-bold">
                    --
                  </Heading>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    Date Created
                  </Text>
                  <Heading as="p" className="text-[14px] font-bold">
                    Jun 23, 2023
                  </Heading>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-archivo text-[14px] font-normal">
                    Permission
                  </Text>
                  <Heading as="p" className="text-[14px] font-bold">
                    Private
                  </Heading>
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}