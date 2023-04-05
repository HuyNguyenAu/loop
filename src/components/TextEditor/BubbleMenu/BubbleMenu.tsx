import { Editor } from "@tiptap/core";
import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";
import { PropsWithChildren } from "react";

export type BubbleMenuProps = {
  editor?: Editor;
  className?: string;
};

export const BubbleMenu = (props: PropsWithChildren<BubbleMenuProps>) => {
  if (props.editor === undefined) {
    return <></>;
  }

  return (
    <TipTapBubbleMenu className={props.className} editor={props.editor} tippyOptions={{ duration: 100 }}>
      {props.children}
    </TipTapBubbleMenu>
  );
};
