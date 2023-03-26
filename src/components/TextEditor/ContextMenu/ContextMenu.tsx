import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import { Item } from "./Item/Item";
import {
  ClipboardIcon,
  CopyIcon,
  PinLeftIcon,
  PinRightIcon,
  ScissorsIcon,
} from "@radix-ui/react-icons";
import Separator from "../../Base/Separator/Separator";

export type ContextMenu = {};

export const ContextMenu = (props: ContextMenu) => {
  return (
    <ScrollArea>
      <div className="flex flex-col gap-1">
        <Separator className="bg-[#CFCFCF]" orientation="horizontal" />
        <Item icon={ScissorsIcon} text="Cut" keyboard="⌘+X" />
        <Item icon={CopyIcon} text="Copy" keyboard="⌘+C" />
        <Item icon={ClipboardIcon} text="Paste" keyboard="⌘+V" />
        <Separator className="bg-[#CFCFCF]" orientation="horizontal" />
        <Item icon={PinRightIcon} text="Increase Indent" />
        <Item icon={PinLeftIcon} text="Decrease Indent" />
      </div>
    </ScrollArea>
  );
};
