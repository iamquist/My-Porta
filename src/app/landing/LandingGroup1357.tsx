import { Heading } from "../../components";
import LandingContainer44 from "../../components/LandingContainer44";
import React from "react";

export default function LandingGroup1357() {
    return (
        <div className="mt-[98px] self-stretch">
            <div className="flex flex-col items-center justify-center rounded-md bg-white-a700 py-[116px] md:py-5">
                <div className="container-xs mt-1 flex flex-col items-center gap-[50px] md:px-5">
                    <Heading size="headingxl" as="h2" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
                        What will you use Porta for?
                    </Heading>
                    <div className="flex gap-6 self-stretch md:flex-col">
                        <LandingContainer44 />
                        <LandingContainer44
                            image27="img_image_28.png"
                            forWork="For Personal Use"
                            storeAndShare="Keep all your personal projects and valuable materials in one place. Organize Porta like your second brain."
                            button10="Get Porta for Personal Use"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}