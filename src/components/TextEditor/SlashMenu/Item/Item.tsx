import React, { Ref } from "react";
import { Open_Sans } from "next/font/google";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export type ItemProps = {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
  selected?: boolean;
  customRef?: Ref<HTMLDivElement>;
  onClick?: () => void;
};

export const Item = (props: ItemProps) => {
  const border = props.selected ? "border-black" : "border-transparent";

  return (
    <div
      onClick={props.onClick}
      ref={props.customRef}
      className={`box-border flex h-10 w-44 cursor-pointer items-center rounded-lg border border-solid bg-white px-3 hover:bg-[#EBEBEB] ${font.className} ${border}`}
    >
      <div className="flex items-center gap-2">
        <props.icon className="box-border h-5 w-5" />
        <p className={`text-sm text-[#424242]`}>{props.text}</p>
      </div>
    </div>
  );
};
