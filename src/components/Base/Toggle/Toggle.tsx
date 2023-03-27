import * as RadixToggle from "@radix-ui/react-toggle";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export type ToggleProps = {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  value: string;
};

export const Toggle = (props: ToggleProps) => {
  return (
    <RadixToggle.Root
      className={`h-10 w-10 border border-solid box-border flex items-center justify-center rounded-lg cursor-pointer bg-white hover:bg-[#EBEBEB] text-[#424242] data-[state=on]:border-[#EBEBEB] data-[state=off]:border-transparent ${font.className}`}
      value={props.value}
      aria-label="Toggle"
    >
      <props.icon className="h-5 w-5 box-border" />
    </RadixToggle.Root>
  );
};
