import React from "react";
import { Open_Sans } from "next/font/google";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export type ItemProps = {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
  keyboard?: string;
  selected?: boolean;
};

export const Item = (props: ItemProps) => {
  const border = props.selected ? "border-black" : "border-transparent";

  return (
    <div
      className={`h-10 px-3 w-full border border-solid box-border flex items-center justify-between rounded-lg cursor-pointer bg-white hover:bg-[#EBEBEB] ${font.className} ${border}`}
    >
      <div className="flex items-center gap-3">
        <props.icon className="h-5 w-5 box-border" />
        <p className={`text-sm text-[#424242]`}>{props.text}</p>
      </div>
      <p className="text-[#424242] font-normal text-sm">{props.keyboard}</p>
    </div>
  );
};
