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
      className={`box-border flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-solid bg-white text-[#424242] hover:bg-[#EBEBEB] data-[state=on]:border-[#EBEBEB] data-[state=off]:border-transparent ${font.className}`}
      value={props.value}
      aria-label="Toggle"
    >
      <props.icon className="box-border h-5 w-5" />
    </RadixToggle.Root>
  );
};
