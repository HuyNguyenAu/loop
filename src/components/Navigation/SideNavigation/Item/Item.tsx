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
  const backgroundColour = props.selected ? "bg-white" : "bg-[#F1F6F9]";
  const hover = props.selected ? "" : "hover:bg-[#EBEBEB]";

  return (
    <div
      className={`box-border flex h-10 w-full cursor-pointer items-center rounded-lg pl-6 pr-3 ${font.className} ${backgroundColour} ${hover}`}
    >
      <div className="flex items-center gap-2">
        <props.icon className="box-border h-5 w-5" />
        <p className={`text-sm text-[#424242]`}>
          {props.text}
        </p>
      </div>
    </div>
  );
};
