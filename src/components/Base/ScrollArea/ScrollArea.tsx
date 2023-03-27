import { PropsWithChildren, Ref } from "react";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";

export type ScrollAreaProps = {
  className?: string;
  customRef?: Ref<HTMLDivElement>;
};

export const ScrollArea = (props: PropsWithChildren<ScrollAreaProps>) => {
  return (
    <RadixScrollArea.Root
      className={`relative box-border w-full overflow-hidden pr-4 ${props.className}`}
    >
      <RadixScrollArea.Viewport
        ref={props.customRef}
        className="box-border h-full w-full rounded-[inherit]"
      >
        {props.children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar
        className="box-border flex h-full w-1.5 touch-none select-none py-4 transition-colors"
        orientation="vertical"
      >
        <RadixScrollArea.Thumb className="relative flex-1 rounded-full bg-[#77797B]" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar
        className="box-border flex h-1.5 w-full touch-none select-none flex-col px-4 transition-colors"
        orientation="horizontal"
      >
        <RadixScrollArea.Thumb className="relative flex-1 rounded-full bg-[#77797B]" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner />
    </RadixScrollArea.Root>
  );
};

export default ScrollArea;
