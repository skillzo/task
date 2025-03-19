import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  return (
    <div className="fixed top-0 left-0 z-30 w-full h-full bg-black/30 flex justify-center items-center">
      <div className="bg-white px-4 py-6 rounded-lg relative z-40 min-w-[400px]">
        {children}
      </div>
    </div>
  );
}
