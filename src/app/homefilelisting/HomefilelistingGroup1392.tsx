import { Heading } from "../../components";
import HomeFileListingContainer80 from "../../components/HomeFileListingContainer80";
import React, { Suspense } from "react";

const data = [
    { image43: "img_image_47.png", container82: "img_container_18.svg", mediaReportNov: "TVC Script - Brainstorm..." },
    { image43: "img_image_50.png", container82: "img_container_18.svg", mediaReportNov: "Client Feedback Form" },
    { image43: "img_image_51.png", container82: "img_grid.svg", mediaReportNov: "Ads Performance Budget" },
    { image43: "img_image_47.png", container82: "img_warning.svg", mediaReportNov: "Podcast rough cut 01" },
    { image43: "img_image_47.png", container82: "img_container_18.svg", mediaReportNov: "TVC Script - Brainstorm..." },
    { image43: "img_image_47.png", container82: "img_container_18.svg", mediaReportNov: "TVC Script - Brainstorm..." },
];

export default function HomefilelistingGroup1392() {
    return (
        <div className="flex flex-col items-start gap-[26px] px-6 sm:px-5">
            <Heading size="headingmd" as="h3" className="text-[26px] font-bold !text-blue_gray-900">
                Files
            </Heading>
            <div className="grid grid-cols-3 gap-6 self-stretch md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                        <HomeFileListingContainer80 {...d} key={"group1073" + index} className="w-full" />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}