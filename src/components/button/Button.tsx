import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={`bg-black text-white py-3 px-6 rounded-md text-sm hover:bg-slate-800 active:bg-slate-900 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
