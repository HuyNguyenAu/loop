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
};

enum Command {
  Cut,
  Copy,
  Paste,
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
        break;

      case Command.Copy:
        break;

      case Command.Paste:
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

  return (
    <ScrollArea className="h-[350px] rounded-xl bg-white py-4 pl-4 shadow-lg">
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
          onClick={() => runCommand(Command.AlignLeft)}
        />
        <Item
          icon={TextAlignCenterIcon}
          text="Align Center"
          onClick={() => runCommand(Command.AlignCenter)}
        />
        <Item
          icon={TextAlignRightIcon}
          text="Align Right"
          onClick={() => runCommand(Command.AlignRight)}
        />
      </div>
    </ScrollArea>
  );
};
