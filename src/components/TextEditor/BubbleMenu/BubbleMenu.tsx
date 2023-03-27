import { Editor } from "@tiptap/core";
import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";
import { PropsWithChildren } from "react";

export type BubbleMenuProps = {
  editor?: Editor;
};

export const BubbleMenu = (props: PropsWithChildren<BubbleMenuProps>) => {
  if (props.editor === undefined) {
    return <></>;
  }

  return (
    <TipTapBubbleMenu editor={props.editor} tippyOptions={{ duration: 100 }}>
      {props.children}
    </TipTapBubbleMenu>
  );
};
