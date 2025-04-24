"use client";

import { Button, Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import LandingGroup1340 from "./LandingGroup1340";
import LandingGroup1344 from "./LandingGroup1344";
import LandingGroup1352 from "./LandingGroup1352";
import LandingGroup1357 from "./LandingGroup1357";
import LandingGroup1361 from "./LandingGroup1361";
import LandingGroup1364 from "./LandingGroup1364";
import LandingGroup845 from "./LandingGroup845";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="w-full bg-white-a700 shadow-md">
      <header className="relative">
        <div className="flex justify-center bg-gray-900_02 py-3">
          <div className="container-xs flex justify-center px-14 md:px-5">
            <Heading size="textlg" as="p" className="text-[16px] font-medium !text-white-a700">
              LIMITED-TIME DEAL: 50% OFF of Business Plan{" "}
            </Heading>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 bg-white-a700 px-[26px] py-4 md:flex-col sm:px-5">
          <Img
            src="img_header_logo.svg"
            width={94}
            height={32}
            alt="Header Logo"
            className="ml-1 h-[32px] w-[94px] object-contain md:ml-0 rounded-md shadow-lg"
          />
          <div className="flex w-[62%] items-center justify-between gap-5 md:w-full md:flex-col">
            <div className="flex px-3 py-3.5">
              <ul className="flex gap-[22px]">
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[14px] font-normal !text-black-900_01 hover:font-bold hover:!text-gray-900_01">
                      Contact
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text as="p" className="text-[14px] font-normal !text-black-900_01 hover:font-bold hover:!text-gray-900_01">
                      Get app
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="pricingplans">
                    <Text as="p" className="text-[14px] font-normal !text-black-900_01 hover:font-bold hover:!text-gray-900_01">
                      Plans
                    </Text>
                  </Link>
                </li>
                <li
                  onMouseLeave={() => {
                    setMenuOpen(false);
                  }}
                  onMouseEnter={() => {
                    setMenuOpen(true);
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-2">
                    <Text as="p" className="text-[14px] font-normal !text-black-900_01 hover:font-bold hover:!text-gray-900_01">
                      Community
                    </Text>
                    <Img
                      src="img_arrow_down_black_900_01.svg"
                      width={12}
                      height={12}
                      alt="Arrow Down"
                      className="h-[12px] w-[12px]"
                    />
                  </div>
                  {menuOpen ? <MegaMenu1 /> : null}
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <Link href="homefilelisting">
                <Text as="p" className="mb-1.5 self-end text-[14px] font-normal !text-indigo-a200 hover:font-bold hover:!text-indigo-a200">
                  Go to your Porta
                </Text>
              </Link>
              <Button
                color="indigo_A200"
                rightIcon={
                  <Img
                    src="img_arrowleft.svg"
                    width={16}
                    height={16}
                    alt="Arrow Left"
                    className="mb-0.5 h-[16px] w-[16px] object-contain"
                  />
                }
                className="min-w-[198px] gap-1 rounded-md px-2.5 hover:font-bold hover:!text-gray-900_01"
              >
                Try Porta for your team
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center">
        <LandingGroup1344 />
        <LandingGroup1340 />
        <LandingGroup845 />
        <LandingGroup1364 />
        <LandingGroup1361 />
        <LandingGroup1357 />
        <LandingGroup1352 />
        <div className="container-xs mt-[98px] md:px-5">
          <div className="flex items-center justify-between gap-5">
            <Heading size="headingxl" as="h2" className="self-end text-[32px] font-bold md:text-[30px] sm:text-[28px]">
              Keep all your valuable files in once safe digital vault.
            </Heading>
            <Link href="homefilelisting">
            <Button
              color="indigo_A200"
              size="7xl"
              rightIcon={
                <Img
                  src="img_arrowleft.svg"
                  width={24}
                  height={24}
                  alt="Arrow Left"
                  className="mb-0.5 h-[24px] w-[24px] object-contain"
                />
              }
              className="min-w-[210px] gap-1.5 rounded-md px-5 shadow-lg"
            >
              Go to your Porta
            </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer className="mt-32" />
    </div>
  );
}