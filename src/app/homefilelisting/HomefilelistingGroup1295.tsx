import { Img } from '../../components';
import React from "react";

export default function HomefilelistingGroup1295() {
    return (
        <div>
            <div className="flex flex-col gap-6">
                <div className="mx-6 flex justify-center md:mx-0">
                    <div className="flex flex-1">
                        <Img src="img_refresh.svg" width={36} height={36} alt="Refresh" className="h-[36px] rounded-md" />
                        <Img
                            src="img_icon_button_10.svg"
                            width={36}
                            height={36}
                            alt="Icon Button 10"
                            className="h-[36px] rounded-md"
                        />
                    </div>
                    <Img
                        src="img_icon_button_11.svg"
                        width={36}
                        height={36}
                        alt="Icon Button 11"
                        className="h-[36px] rounded-md"
                    />
                </div>
                <div className="h-px bg-gray-300" />
            </div>
        </div>
    );
}