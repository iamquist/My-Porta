import { Button, Text, Img } from "../../components";
import UploadNewFilesUploadingRow from "../../components/UploadNewFilesUploadingRow";
import React, { useEffect } from "react";
import { default as ModalProvider } from "react-modal";

interface Props {
 className?: string;
 isOpen: boolean;
 onClose: () => void;
}

export default function UploadNewFilesUploading({ isOpen, onClose, ...props }: Props) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);


 return (
   <ModalProvider {...props} appElement={document.getElementById("root")!} isOpen={isOpen} className="h-fit"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}      
      >
     <div className="mt-60 ml-[700px] z-[1] w-fit h-fit rounded-tl-md rounded-tr-md bg-white-a700 border border-dashed border-black-500 p-6 sm:p-5 shadow-md"
     onClick={(e) => e.stopPropagation()}>
       <div className="flex flex-col">
         <div className="flex items-start justify-between">
           <Text
             size="text3xl"
             as="p"
             className="self-center !font-archivo text-[24px] font-normal !text-gray-900_01"
           >
             <span>&nbsp;5&nbsp;</span>
             <span className="font-redhatdisplay">of</span>
             <span>&nbsp;10&nbsp;</span>
             <span className="font-redhatdisplay">upload completed</span>
           </Text>
           <button onClick={onClose} >
           <Img src="img_e_remove_2.svg" width={24} height={24} alt="E Remove 2" className="h-[24px] rounded-md shadow-md hover:shadow-green-400" />
           </button>
         </div>
         <Text as="p" className="w-fit text-[14px] font-normal leading-[22px] !text-blue_gray-500">
           Drag and drop here to add more
         </Text>
         <div className="flex items-center gap-2.5">
           <div className="flex flex-1 flex-col items-start gap-1.5">
             <div className="self-stretch rounded-md border-[0.5px] border-solid border-white-a700">
               <div className="flex flex-col">
                 <UploadNewFilesUploadingRow />
                 <UploadNewFilesUploadingRow
                   pen="img_pen_red_600.svg"
                   frame="Branding Package"
                   frame1="3.7 MB"
                   button="Copy link"
                 />
               </div>
         <div className="flex justify-center">
           <div className="flex w-[6%] flex-col items-start border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 px-1 py-3">
             <div className="h-[16px] w-[16px] rounded-sm border border-solid border-green-a700" />
           </div>
           <Img src="img_frame_white_a700.svg" width={32} height={40} alt="Frame" className="h-[40px]" />
           <Text
             as="p"
             className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-2.5 pl-2 pr-[34px] text-[14px] font-normal !text-gray-900_01 sm:pr-5"
           >
             Key Visuals
           </Text>
           <Text
             as="p"
             className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-2.5 pl-2 pr-[34px] text-[14px] font-normal !text-gray-900_01 sm:pr-5"
           >
             64.21 KB
           </Text>
           <div className="h-[40px] w-[24%] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700" />
         </div>
        </div>
         <Img
           src="img_slider_2.svg"
           width={192}
           height={14}
           alt="Slider 2"
           className="ml-[34px] h-[14px] w-[40%] object-contain"
         />
         </div>
         <div className="w-[3%] rounded-md border border-solid border-gray-100 bg-white-a700 py-1.5">
           <div className="mb-[86px] h-[60px] w-[4px] rounded-sm bg-blue_gray-200" />
         </div>
        </div> 
        <div className="mt-[20px] flex items-center justify-between gap-5">
         <Text as="p" className="text-[10px] font-normal !text-gray-900_01">
           <span className="text-gray-900_01">Having problem? Please </span>
           <span className="text-blue-700 hover:font-bold">support</span>
         </Text>
          <Button color="indigo_A200" className="rounded-md px-2.5 hover:text-zinc-800 hover:font-bold">
           Add more
         </Button>
         </div>
       </div>
     </div>
   </ModalProvider>
 );
}