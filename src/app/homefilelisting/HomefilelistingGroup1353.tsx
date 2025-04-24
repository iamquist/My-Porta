import { Heading } from "../../components";
import LandingContainer25 from "../../components/LandingContainer25";
import React, { Suspense } from "react";

const data = [
    { folder1: "img_folder_1.svg", workDocuments: "Work Documents" },
    { folder1: "img_folder_1.svg", workDocuments: "Work Documents" },
    { folder1: "img_folder_1.svg", workDocuments: "Internship Program" },
    { folder1: "img_folder_1.svg", workDocuments: "Work Documents" },
    { folder1: "img_folder_1.svg", workDocuments: "Work Documents" },
    { folder1: "img_folder_1.svg", workDocuments: "Work Documents" },
];

export default function HomefilelistingGroup1353() {
    return (
        <div className="flex flex-col items-start gap-[26px] px-6 sm:px-5">
            <Heading size="headingmd" as="h2" className="text-[20px] font-bold !text-blue_gray-900">
                Folders
            </Heading>
            <div className="grid grid-cols-3 gap-6 self-stretch md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                        <LandingContainer25 {...d} key={"group1066" + index} className="rounded-md bg-white-a700 shadow-xs" />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}