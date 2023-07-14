import React from "react";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export type InputProps = {
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export const Input = (props: InputProps) => {
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();
    props.onChange(event.currentTarget.value);
  };

  return (
    <div
      className={`relative box-border overflow-hidden rounded bg-white p-4 shadow ${font.className}`}
    >
      <input
        value={props.value}
        className="box-border h-6 w-full leading-none text-slate-700"
        onKeyUp={onKeyUp}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
