import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { ScrollArea } from "../../Base/ScrollArea/ScrollArea";
import { Item, ItemProps } from "./Item/Item";

export type SlashMenuProps = {
  items: Array<ItemProps>;
  command: any;
};

export const SlashMenu = forwardRef((props: SlashMenuProps, ref: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: any) => {
    const item = props.items[index];

    if (item) {
      props.command({ id: item });
    }
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: any) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  const items = props.items.map((item, index) => (
    <Item
      icon={item.icon}
      text={item.text}
      selected={index === selectedIndex}
    />
  ));

  return (
    <ScrollArea className="h-[21rem] w-60 shadow-lg rounded-xl">
      <div className="flex flex-col gap-1 pl-4 py-4">{items}</div>
    </ScrollArea>
  );
});
