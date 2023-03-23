import React from "react";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ weight: "400", subsets: ["latin"] });

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
    <div className="p-4 box-border relative overflow-hidden rounded bg-white shadow">
      <input
        value={props.value}
        className={`${notoSans.className} h-6 w-full box-border leading-none text-slate-700`}
        onKeyUp={onKeyUp}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
