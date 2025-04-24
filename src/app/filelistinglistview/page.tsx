import React from "react";
import { Metadata } from "next";
import Page from "."

export const metadata: Metadata = {
    title: "File Sharing Platform",
    description: "A simple web app created for sharing and storing files"
};
export default function FileListinglistViewPage() {
    return <Page/>
}