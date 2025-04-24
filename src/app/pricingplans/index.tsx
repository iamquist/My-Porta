"use client";

import { Button, Img, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import PricingPlansGroup1383 from "./PricingplansGroup1383";
import PricingPlansGroup1395 from "./PricingplansGroup1395";
import PricingPlansGroup1397 from "./PricingplansGroup1397";
import PricingPlansGroup761 from "./PricingplansGroup761";
import Link from "next/link";
import React from "react";

export default function PricingPlansPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="w-full bg-white-a700 shadow-md">
      <header className="relative flex items-center justify-between gap-5 bg-white-a700 px-[26px] py-4 md:flex-col sm:px-5">
        <Img
          src="img_header_logo.svg"
          width={92}
          height={32}
          alt="Header Logo"
          className="ml-1 h-[32px] w-[92px] object-contain md:ml-0"
        />
        <div className="flex w-[62%] items-center justify-center gap-5 md:w-full md:flex-col">
          <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch sm:flex-col">
            <div className="flex px-3">
              <ul className="flex items-start gap-[22px]">
                <li>
                  <Link href="#" className="cursor-pointer">
                    <Text
                      as="p"
                      className="text-[14px] font-normal !text-black-900_01 hover:font-bold hover:!text-gray-900_01"
                    >
                      Contact
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="cursor-pointer">
                    <Text
                      as="p"
                      className="text-[14px] font-normal !text-black-900_01 hover:font-bold hover:!text-gray-900_01"
                    >
                      Get app
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="flex flex-col items-center gap-3">
                      <Heading as="p" className="mt-4 text-[14px] font-bold">
                        Plans
                      </Heading>
                      <div className="h-[4px] w-full bg-gray-900_01" />
                    </div>
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
                    <Text
                      as="p"
                      className="cursor-pointer text-[14px] font-normal !text-black-900_01 hover:font-bold hover:!text-gray-900_01"
                    >
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
            <Link href="homefilelisting">
                <Text as="p" className="mb-1.5 self-end text-[14px] font-normal !text-indigo-a200 hover:font-bold hover:!text-indigo-a200">
                  Go to your Porta
                </Text>
              </Link>
          </div>
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
      </header>
      <div className="mt-[98px]">
        <PricingPlansGroup1397 />
        <PricingPlansGroup1383 />
        <PricingPlansGroup1395 />
        <PricingPlansGroup761 />
      </div>
      <Footer className="mt-1" />
    </div>
  );
}