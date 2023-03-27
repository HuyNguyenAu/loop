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

export type ContextMenu = {};

export const ContextMenu = (props: ContextMenu) => {
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
        <Item icon={ScissorsIcon} text="Cut" keyboard="⌘+X" />
        <Item icon={CopyIcon} text="Copy" keyboard="⌘+C" />
        <Item icon={ClipboardIcon} text="Paste" keyboard="⌘+V" />
        <Separator className="bg-[#CFCFCF]" orientation="horizontal" />
        <Item icon={PinRightIcon} text="Increase Indent" />
        <Item icon={PinLeftIcon} text="Decrease Indent" />
        <Separator className="bg-[#CFCFCF]" orientation="horizontal" />
        <Item icon={TextAlignLeftIcon} text="Align Left" />
        <Item icon={TextAlignCenterIcon} text="Align Center" />
        <Item icon={TextAlignRightIcon} text="Align Right" />
      </div>
    </ScrollArea>
  );
};
