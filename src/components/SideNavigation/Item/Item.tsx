import React from "react";
import { Noto_Sans } from "next/font/google";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const notoSans = Noto_Sans({ weight: "400", subsets: ["latin"] });

export type ItemProps = {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  text: string;
  selected?: boolean;
};

export const Item = (props: ItemProps) => {
  const backgroundColour = props.selected ? 'bg-white' : 'bg-[#F1F6F9]';
  const hover = props.selected ? '' : 'hover:bg-[#EBEBEB]';

  return (
    <div className={`h-10 f-full pl-6 pr-3 box-border flex items-center rounded-lg ${backgroundColour} ${hover}`}>
      <div className="flex items-center gap-2">
        <props.icon className="h-5 w-5 box-border" />
        <p className={`${notoSans.className} text-sm text-[#424242]`}>{props.text}</p>
      </div>
    </div>
  );
};
