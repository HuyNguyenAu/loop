import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import { Item } from "./Item/Item";
import {
  ClipboardIcon,
  CopyIcon,
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
  PinLeftIcon,
  PinRightIcon,
  ScissorsIcon,
  StrikethroughIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import Separator from "../../Base/Separator/Separator";
import { Toggle } from "../../Base/Toggle/Toggle";
import { Editor } from "@tiptap/react";

export type ContextMenu = {
  editor?: Editor;
  clipboardMode?: boolean;
};

enum Command {
  Cut,
  Copy,
  Paste,
  Undo,
  Redo,
  IncreaseIndent,
  DecreaseIndent,
  AlignLeft,
  AlignCenter,
  AlignRight,
}

export const ContextMenu = (props: ContextMenu) => {
  const runCommand = (command: Command) => {
    switch (command) {
      case Command.Cut:
        props.editor?.chain().focus();
        break;

      case Command.Copy:
        props.editor?.chain().focus().keyboardShortcut("Copy").run();
        break;

      case Command.Paste:
        props.editor?.chain().focus().keyboardShortcut("Paste").run();
        break;

      case Command.IncreaseIndent:
        props.editor?.chain().focus().sinkListItem("listItem").run();
        break;

      case Command.DecreaseIndent:
        props.editor?.chain().focus().liftListItem("listItem").run();
        break;

      case Command.AlignLeft:
        if (props.editor?.isActive({ textAlign: "left" })) {
          props.editor?.chain().focus().unsetTextAlign().run();
        } else {
          props.editor?.chain().focus().setTextAlign("left").run();
        }
        break;

      case Command.AlignCenter:
        if (props.editor?.isActive({ textAlign: "center" })) {
          props.editor?.chain().focus().unsetTextAlign().run();
        } else {
          props.editor?.chain().focus().setTextAlign("center").run();
        }
        break;

      case Command.AlignRight:
        if (props.editor?.isActive({ textAlign: "right" })) {
          props.editor?.chain().focus().unsetTextAlign().run();
        } else {
          props.editor?.chain().focus().setTextAlign("right").run();
        }
        break;

      default:
        break;
    }
  };

  const clipboard = (
    <>
      <Item
        icon={ScissorsIcon}
        text="Cut"
        keyboard="⌘+X"
        onClick={() => runCommand(Command.Cut)}
      />
      <Item
        icon={CopyIcon}
        text="Copy"
        keyboard="⌘+C"
        onClick={() => runCommand(Command.Copy)}
      />
      <Item
        icon={ClipboardIcon}
        text="Paste"
        keyboard="⌘+V"
        onClick={() => runCommand(Command.Paste)}
      />
    </>
  );

  if (props.clipboardMode === true) {
    return clipboard;
  }

  return (
    <ScrollArea className="h-[350px]">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 p-1  ">
          <Toggle icon={FontBoldIcon} value="" />
          <Toggle icon={FontItalicIcon} value="" />
          <Toggle icon={StrikethroughIcon} value="" />
          <Toggle icon={UnderlineIcon} value="" />
          <Toggle icon={HeadingIcon} value="" />
          <Toggle icon={HeadingIcon} value="" />
          <Toggle icon={HeadingIcon} value="" />
        </div>
        <Separator className="bg-[#CFCFCF]" orientation="horizontal" />
        {clipboard}
        <Separator className="bg-[#CFCFCF]" orientation="horizontal" />
        <Item
          icon={PinRightIcon}
          text="Increase Indent"
          onClick={() => runCommand(Command.IncreaseIndent)}
        />
        <Item
          icon={PinLeftIcon}
          text="Decrease Indent"
          onClick={() => runCommand(Command.DecreaseIndent)}
        />
        <Separator className="bg-[#CFCFCF]" orientation="horizontal" />
        <Item
          icon={TextAlignLeftIcon}
          text="Align Left"
          selected={props.editor?.isActive({ textAlign: "left" })}
          onClick={() => runCommand(Command.AlignLeft)}
        />
        <Item
          icon={TextAlignCenterIcon}
          text="Align Center"
          selected={props.editor?.isActive({ textAlign: "center" })}
          onClick={() => runCommand(Command.AlignCenter)}
        />
        <Item
          icon={TextAlignRightIcon}
          text="Align Right"
          selected={props.editor?.isActive({ textAlign: "right" })}
          onClick={() => runCommand(Command.AlignRight)}
        />
      </div>
    </ScrollArea>
  );
};
