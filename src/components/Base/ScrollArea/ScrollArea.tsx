import { PropsWithChildren } from "react";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";

export type ScrollAreaProps = {
  className?: string;
};

export const ScrollArea = (props: PropsWithChildren<ScrollAreaProps>) => {
  return (
    <RadixScrollArea.Root
      className={`w-full pr-4 box-border relative overflow-hidden ${props.className}`}
    >
      <RadixScrollArea.Viewport className="h-full w-full box-border rounded-[inherit]">
        {props.children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar
        className="h-full w-1.5 py-4 box-border flex touch-none select-none transition-colors"
        orientation="vertical"
      >
        <RadixScrollArea.Thumb className="flex-1 relative rounded-full bg-[#77797B]" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar
        className="h-1.5 w-full px-4 box-border flex flex-col touch-none select-none transition-colors"
        orientation="horizontal"
      >
        <RadixScrollArea.Thumb className="flex-1 relative rounded-full bg-[#77797B]" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner />
    </RadixScrollArea.Root>
  );
};

export default ScrollArea;
