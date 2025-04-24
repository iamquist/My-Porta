import { Img } from "../../components";
import React from "react";

export default function FilelistinggridviewGroup1152() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="ml-6 mr-8 flex justify-between gap-5 md:mx-0">
          <div className="flex">
            <Img src="img_refresh.svg" width={36} height={36} alt="Refresh" className="h-[36px] rounded-md" />
            <Img
              src="img_icon_button_10.svg"
              width={36}
              height={36}
              alt="Icon Button 34"
              className="h-[36px] rounded-md"
            />
          </div>
          <div className="flex flex-1 justify-end">
            <Img
              src="img_icon_button_25.svg"
              width={36}
              height={36}
              alt="Icon Button 35"
              className="h-[36px] rounded-md"
            />
            <Img
              src="img_icon_button_26.svg"
              width={36}
              height={36}
              alt="Icon Button 36"
              className="h-[36px] rounded-md"
            />
            <Img
              src="img_icon_button_11.svg"
              width={36}
              height={36}
              alt="Icon Button 37"
              className="h-[36px] rounded-md"
            />
          </div>
        </div>
        <div className="h-px bg-gray-300" />
      </div>
    </div>
  );
}