import React, {
  forwardRef,
  ReactNode,
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  CheckboxIcon,
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
  ListBulletIcon,
  StrikethroughIcon,
  TableIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { ScrollArea } from "../../Base/ScrollArea/ScrollArea";
import { Item, ItemProps } from "./Item/Item";
import { Editor } from "@tiptap/react";

export type SlashMenuProps = {
  editor: Editor;
  command: any;
};

export const SlashMenu = forwardRef((props: SlashMenuProps, ref: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // onClick={() => props.editor.chain().focus().toggleHeading({ level: 1 }).run()}
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const itemRefs: Array<RefObject<HTMLDivElement>> = [];
  const children = useRef<Array<ItemProps>>([
    {
      text: "Heading 1",
      icon: HeadingIcon,
    },
    {
      text: "Heading 2",
      icon: HeadingIcon,
    },
    {
      text: "Heading 3",
      icon: HeadingIcon,
    },
    {
      text: "Bold",
      icon: FontBoldIcon,
    },
    {
      text: "Italic",
      icon: FontItalicIcon,
    },
    {
      text: "Underline",
      icon: UnderlineIcon,
    },
    {
      text: "Strikethrough",
      icon: StrikethroughIcon,
    },
    {
      text: "Table",
      icon: TableIcon,
    },
    {
      text: "Check List",
      icon: CheckboxIcon,
    },
    {
      text: "Bullet List",
      icon: ListBulletIcon,
    },
    {
      text: "Numbered List",
      icon: ListBulletIcon,
    },
  ]);
  const items: Array<ReactNode> = children.current.map((item, index) => {
    itemRefs.push(React.createRef<HTMLDivElement>());

    return (
      <Item
        customRef={itemRefs[index]}
        key={`slash_item_${index}`}
        selected={index === selectedIndex}
        {...item}
      />
    );
  });

  const selectItem = (index: any) => {
    const item = children.current[index];

    if (item) {
      props.command({ id: item });
    }
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + children.current.length - 1) % children.current.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % children.current.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [children]);

  useEffect(() => {
    scrollAreaRef.current?.scrollTo({
      top:
        (itemRefs[selectedIndex]?.current?.offsetHeight ?? 0) * selectedIndex +
        (4 * selectedIndex + 1),
    });
  }, [selectedIndex, itemRefs]);

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
      className="h-[21rem] w-60 rounded-xl shadow-lg"
    >
      <div className="flex flex-col gap-1 py-4 pl-4">{items}</div>
    </ScrollArea>
  );
});
