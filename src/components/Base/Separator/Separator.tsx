import React from "react";
import * as RadixSeparator from "@radix-ui/react-separator";

export type SeparatorProps = {
  className: string;
  orientation: "vertical" | "horizontal";
};

export const Separator = (props: SeparatorProps) => {
  const className =
    props.orientation === "vertical" ? "h-full w-px" : "h-px w-full";

  return (
    <RadixSeparator.Root
      className={`${className} ${props.className}`}
      decorative={true}
      orientation={props.orientation}
    />
  );
};

export default Separator;
