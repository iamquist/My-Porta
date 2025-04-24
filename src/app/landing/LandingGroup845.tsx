import { Heading } from "../../components";
import React from "react";

export default function LandingGroup845() {
    return (
        <div className="self-stretch">
            <div className="flex flex-col items-center justify-center bg-gray-50 py-24 md:py-5">
                <div className="container-xs mt-1 flex flex-col items-center gap-3.5 px-14 md:px-5">
                    <Heading size="headingxl" as="h2" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
                        What is a Porta, and what can it do for you?
                    </Heading>
                    <Heading size="textlg" as="h3" className="text-[16px] font-normal !text-blue_gray-900">
                        Porta is a complete cloud services solution designed to cater to all your data management needs for personal 
                        and business usage.{" "}
                    </Heading>
                </div>
            </div>
        </div>
    );
}