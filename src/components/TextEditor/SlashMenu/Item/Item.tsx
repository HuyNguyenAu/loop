import React from "react";
import { Open_Sans } from "next/font/google";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export type ItemProps = {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
  selected?: boolean;
};

export const Item = (props: ItemProps) => {
  const border = props.selected
    ? "border-solid ml-0"
    : " border-hidden";

  return (
    <div
      className={`h-10 ml-[1px] w-44 border border-solid box-border border-black flex items-center rounded-lg cursor-pointer bg-white hover:bg-[#EBEBEB] ${font.className} ${border}`}
    >
      <div className="px-3 flex items-center gap-2">
        <props.icon className="h-5 w-5 box-border" />
        <p className={`text-sm text-[#424242]`}>{props.text}</p>
      </div>
    </div>
  );
};
