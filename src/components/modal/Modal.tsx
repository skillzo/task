import React from "react";
import close from "../../assets/icons/close.png";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ children, open, onClose }: Props) {
  if (open)
    return (
      <div className="fixed top-0 left-0 z-20 w-full h-full backdrop-blur-sm bg-gray-200/50 flex justify-center items-center cursor-pointer">
        <div className=" bg-white px-6 pt-12 pb-6 rounded-lg relative z-40 min-w-[400px]">
          <div
            className="border absolute top-4 right-4 w-8 h-8 flex justify-center items-center border-gray-50 hover:bg-gray-50 cursor-pointer rounded-full "
            onClick={onClose}
          >
            <img src={close} className="w-4 h-4 " />
          </div>

          {children}
        </div>
      </div>
    );
}
