import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import { Item } from "./Item/Item";
import { CursorTextIcon, FilePlusIcon, OpenInNewWindowIcon, TrashIcon } from "@radix-ui/react-icons";
import Separator from "../../Base/Separator/Separator";

export type ContextMenu = {};

export const ContextMenu = (props: ContextMenu) => {
  return (
    <ScrollArea>
      <div className="flex flex-col gap-1">
        <Item icon={FilePlusIcon} text="New SubPage" />
        <Item icon={OpenInNewWindowIcon} text="Open" />
        <Item icon={CursorTextIcon} text="Rename" />
        <Separator className="bg-[#CFCFCF]" orientation="horizontal" />
        <Item icon={TrashIcon} text="Delete" />
      </div>
    </ScrollArea>
  );
};
