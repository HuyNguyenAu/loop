import {
  StarIcon,
  MagnifyingGlassIcon,
  PinLeftIcon,
  RocketIcon,
  ClockIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import { ContextMenu as RadixContextMenu } from "../../Base/ContextMenu/ContextMenu";
import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import Separator from "../../Base/Separator/Separator";
import { ContextMenu } from "./ContextMenu/ContextMenu";
import { Item, ItemProps } from "./Item/Item";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export type SideNavigationProps = {
  items: Array<ItemProps>;
};

export const SideNavigation = (props: SideNavigationProps) => {
  const items = (
    <div className="flex flex-col gap-1">
      {props.items.map((props, index) => (
        <Item key={`side_nav_item_${index}`} {...props} />
      ))}
    </div>
  );

  return (
    <div
      className={`box-border h-screen w-80 bg-[#F1F6F9] p-2 ${font.className}`}
    >
      <div className="mb-1.5 flex w-full items-center justify-between">
        <div className="mr-3 box-border flex h-10 w-full cursor-pointer items-center gap-1.5 rounded-lg pl-3 hover:bg-[#EBEBEB]">
          <RocketIcon className="h-6 w-6 text-violet-700" />
          <p className="text-lg font-bold text-[#242424]">Daily Life</p>
          <p className="ml-2.5 rounded-lg bg-violet-100 px-1.5 py-0.5 text-xs text-violet-700">
            Alpha
          </p>
        </div>
        <div className="flex gap-2.5 pr-3 text-[#616161]">
          <BellIcon className="h-4 w-4 cursor-pointer hover:text-violet-700" />
          <MagnifyingGlassIcon className="h-4 w-4 cursor-pointer hover:text-violet-700" />
          <PinLeftIcon className="h-4 w-4 cursor-pointer hover:text-violet-700" />
        </div>
      </div>
      <ScrollArea className="h-24">
        <div className="flex flex-col gap-1">
          <Item icon={ClockIcon} text="Recent" />
          <Item icon={StarIcon} text="Favourites" />
        </div>
      </ScrollArea>
      <Separator className="mb-3 bg-[#CFCFCF]" orientation="horizontal" />
      {/* Side Drawer: 1 rem, Header: 2.875rem, Sticky Items: 6 rem, Separator: 0.75 rem + 1 px. */}
      <ScrollArea className="h-[calc(100vh-1rem-2.875rem-6rem-0.75rem-1px)]">
        <RadixContextMenu trigger={items}>
          <ContextMenu />
        </RadixContextMenu>
      </ScrollArea>
    </div>
  );
};
