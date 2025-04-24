import { Heading, RatingBar, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  johnClark?: React.ReactNode;
  theEncryptionAnd?: React.ReactNode;
  johnClark1?: React.ReactNode;
  theCollaboration?: React.ReactNode;
  sarahLee?: React.ReactNode;
  portaHasRevolutionized?: React.ReactNode;
}

export default function Landing1({
  johnClark = "John Clark",
  theEncryptionAnd = "The encryption and secure sharing options ensure that my sensitive data is well-protected.",
  johnClark1 = "John Clark",
  theCollaboration = "“The collaboration are a game changer for my business. We can work together in real-time, making team projects more efficient. Hands down, the best cloud service I've ever used!”",
  sarahLee = "Sarah Lee",
  portaHasRevolutionized = "“Porta has revolutionized the way I manage my files. The interface is user-friendly, making it a breeze to organize and access my documents from any device. Knowing that my files are protected with top-notch security measures gives me peace of mind. Kudos to the team for creating such a fantastic app!”",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[50%] sm:w-full gap-6`}>
      <div className="flex flex-col items-center gap-8 self-stretch rounded-md bg-white-a700 px-3 shadow-xs">
        <div className="mx-12 flex flex-col items-start gap-1 self-stretch">
          <Heading size="textlg" as="p" className="text-[16px] font-medium !text-blue_gray-900">
            {johnClark}
          </Heading>
          <Img
            src="img_rating_6.png"
            width={80}
            height={16}
            alt="Rating 6"
            className="h-[16px] w-[66%] object-contain"
          />
        </div>
      <Img src="img_rectangle.png" width={36} height={1} alt="Rectangle" className="h-px self-start object-cover" />
      <Heading size="textlg" as="p" className="mb-3 w-full text-[16px] font-normal leading-[26px] !text-gray-500">
        {theEncryptionAnd}
      </Heading>
      </div>
      <div className="flex flex-col gap-6 self-stretch rounded-md bg-white-a700 p-3 shadow-xs">
        <div className="flex items-center justify-center">
          <Img
            src="img_rectangle_36x36.png"
            width={36}
            height={36}
            alt="Rectangle"
            className="h-[36px] rounded-[18px] object-cover"
          />
        <div className="flex flex-1 flex-col items-start gap-1 px-3">
          <Heading size="textlg" as="p" className="text-[16px] font-medium !text-blue_gray-900">
            {johnClark1}
          </Heading>
          <RatingBar value={5} isEditable={true} size={16} className="flex gap-2.5" />
        </div>
      </div>
      <Heading size="textlg" as="p" className="text-[16px] font-normal leading-[26px] !text-gray-500">
        {theCollaboration}
      </Heading>
      </div>
      <div className="self-stretch rounded-md bg-white-a700 px-3 shadow-xs">
        <div className="mt-3 flex flex-col gap-6">
          <div className="flex items-center justify-center">
            <Img
              src="img_rectangle_1.png"
              width={36}
              height={36}
              alt="Rectangle"
              className="h-[36px] rounded-[18px] object-cover"
            />
          <div className="flex flex-1 flex-col items-start gap-1 px-3">
            <Heading size="textlg" as="p" className="text-[16px] font-medium !text-blue_gray-900">
              {sarahLee}
            </Heading>
            <RatingBar value={4} isEditable={true} size={16} className="flex gap-2.5" />
          </div>
        </div>
        <Heading size="textlg" as="p" className="text-[16px] font-normal leading-[26px] !text-gray-500">
          {portaHasRevolutionized}
        </Heading>
      </div>
    </div>
   </div>
  );
}