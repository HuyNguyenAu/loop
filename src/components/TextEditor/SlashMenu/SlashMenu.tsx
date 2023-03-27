import React, {
  forwardRef,
  ReactNode,
  RefObject,
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

  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const itemRefs: Array<RefObject<HTMLDivElement>> = [];
  const items: Array<ReactNode> = props.items.map((item, index) => {
    itemRefs.push(React.createRef<HTMLDivElement>());

    return (
      <Item
        customRef={itemRefs[index]}
        key={`slash_item_${index}`}
        icon={item.icon}
        text={item.text}
        selected={index === selectedIndex}
      />
    );
  });

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

  useEffect(() => {
    scrollAreaRef.current?.scrollTo({
      top:
        (itemRefs[selectedIndex]?.current?.offsetHeight ?? 0) * selectedIndex +
        (4 * selectedIndex + 1),
    });
  }, [selectedIndex]);

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

  return (
    <ScrollArea
      customRef={scrollAreaRef}
      className="h-[21rem] w-60 shadow-lg rounded-xl"
    >
      <div className="flex flex-col gap-1 pl-4 py-4">{items}</div>
    </ScrollArea>
  );
});
