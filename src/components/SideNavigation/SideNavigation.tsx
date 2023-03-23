import {
  StarIcon,
  FileTextIcon,
  MagnifyingGlassIcon,
  PinLeftIcon,
  RocketIcon,
  ClockIcon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";
import ScrollArea from "../Base/ScrollArea/ScrollArea";
import { Item, ItemProps } from "./Item/Item";

export type SideNavigationProps = {
  items: Array<ItemProps>;
};

export const SideNavigation = (props: SideNavigationProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const onSearchChange = (value: string) => {
    setSearchText(value);
  };

  const items = props.items
    .map((props, index) => <Item {...props} icon={FileTextIcon} selected={index === 0} />)
    .filter((item) => {
      if (searchText === undefined || searchText.length <= 0) {
        return true;
      }

      const props: ItemProps = item.props;

      return props.text.includes(searchText);
    });

  return (
    <div className="h-screen w-80 p-2 box-border bg-[#F1F6F9]">
      <div className="w-full px-3 pt-3 pb-6 flex items-center justify-between">
        <div className="box-border flex items-center gap-1.5">
          <RocketIcon className="h-6 w-6 text-violet-700" />
          <p className="text-lg font-bold">Notes</p>
        </div>
        <div className="flex gap-2.5 text-[#616161]">
          <div className="hover:text-violet-700">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </div>
          <div className="hover:text-violet-700">
            <PinLeftIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
      <ScrollArea className="h-24">
        <div className="flex flex-col gap-1">
          <Item icon={ClockIcon} text="Recent"/>
          <Item icon={StarIcon} text="Favourites"/>
        </div>
      </ScrollArea>
      <ScrollArea className="h-[calc(100vh-6rem-4rem-1rem)]">
        <div className="flex flex-col gap-1">{items}</div>
      </ScrollArea>
    </div>
  );
};
