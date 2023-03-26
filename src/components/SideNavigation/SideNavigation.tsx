import {
  StarIcon,
  MagnifyingGlassIcon,
  PinLeftIcon,
  RocketIcon,
  ClockIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import { ContextMenu as RadixContextMenu } from "../Base/ContextMenu/ContextMenu";
import ScrollArea from "../Base/ScrollArea/ScrollArea";
import Separator from "../Base/Separator/Separator";
import { ContextMenu } from "./ContextMenu/ContextMenu";
import { Item, ItemProps } from "./Item/Item";

export type SideNavigationProps = {
  items: Array<ItemProps>;
};

export const SideNavigation = (props: SideNavigationProps) => {
  const items = (
    <div className="flex flex-col gap-1">
      {props.items.map((props, index) => (
        <Item {...props} />
      ))}
    </div>
  );

  return (
    <div className="h-screen w-80 p-2 box-border bg-[#F1F6F9]">
      <div className="mb-1.5 w-full flex items-center justify-between">
        <div className="h-10 w-full pl-3 mr-3 box-border flex items-center gap-1.5 rounded-lg cursor-pointer hover:bg-[#EBEBEB]">
          <RocketIcon className="h-6 w-6 text-violet-700" />
          <p className="text-lg font-bold text-[#242424]">Daily Life</p>
          <p className="ml-2.5 px-1.5 py-0.5 rounded-lg text-xs font-semibold bg-violet-100 text-violet-700">
            Alpha
          </p>
        </div>
        <div className="pr-3 flex gap-2.5 text-[#616161]">
          <BellIcon className="h-4 w-4 hover:text-violet-700 cursor-pointer" />
          <MagnifyingGlassIcon className="h-4 w-4 hover:text-violet-700 cursor-pointer" />
          <PinLeftIcon className="h-4 w-4 hover:text-violet-700 cursor-pointer" />
        </div>
      </div>
      <ScrollArea className="h-24">
        <div className="flex flex-col gap-1">
          <Item icon={ClockIcon} text="Recent" />
          <Item icon={StarIcon} text="Favourites" />
        </div>
      </ScrollArea>
      <Separator className="bg-[#CFCFCF] mb-3" orientation="horizontal" />
      {/* Side Drawer: 1 rem, Header: 2.875rem, Sticky Items: 6 rem, Separator: 0.75 rem + 1 px. */}
      <ScrollArea className="h-[calc(100vh-1rem-2.875rem-6rem-0.75rem-1px)]">
        <RadixContextMenu trigger={items}>
          <ContextMenu />
        </RadixContextMenu>
      </ScrollArea>
    </div>
  );
};
