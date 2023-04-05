/* eslint-disable react/display-name */
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
  CodeIcon,
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
  ListBulletIcon,
  StrikethroughIcon,
  TableIcon,
  TextIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { ScrollArea } from "../../Base/ScrollArea/ScrollArea";
import { Item, ItemProps } from "./Item/Item";
import { Editor } from "@tiptap/react";

export type SlashMenuProps = {
  editor: Editor;
  command: any;
};

export enum Command {
  Heading1,
  Heading2,
  Heading3,
  Text,
  Bold,
  Italic,
  Underline,
  StrikeThrough,
  Code,
  Table,
  CheckList,
  BulletList,
  NumberedList,
}

export const SlashMenu = forwardRef((props: SlashMenuProps, ref: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const itemRefs: Array<RefObject<HTMLDivElement>> = [];
  const children = useRef<Array<ItemProps>>([
    {
      text: "Heading 1",
      icon: HeadingIcon,
      onClick: () => {
        props.command({
          command: Command.Heading1,
        });
      },
    },
    {
      text: "Heading 2",
      icon: HeadingIcon,
      onClick: () => {
        props.command({
          command: Command.Heading2,
        });
      },
    },
    {
      text: "Heading 3",
      icon: HeadingIcon,
      onClick: () => {
        props.command({
          command: Command.Heading3,
        });
      },
    },
    {
      text: "Text",
      icon: TextIcon,
      onClick: () => {
        props.command({
          command: Command.Text,
        });
      },
    },
    {
      text: "Bold",
      icon: FontBoldIcon,
      onClick: () => {
        props.command({
          command: Command.Bold,
        });
      },
    },
    {
      text: "Italic",
      icon: FontItalicIcon,
      onClick: () => {
        props.command({
          command: Command.Italic,
        });
      },
    },
    {
      text: "Underline",
      icon: UnderlineIcon,
      onClick: () => {
        props.command({
          command: Command.Underline,
        });
      },
    },
    {
      text: "Strikethrough",
      icon: StrikethroughIcon,
      onClick: () => {
        props.command({
          command: Command.StrikeThrough,
        });
      },
    },
    {
      text: "Code",
      icon: CodeIcon,
      onClick: () => {
        props.command({
          command: Command.Code,
        });
      },
    },
    // TODO: Requires extra controls such as delete column/row, add column/row before/after, merge cells, .etc.
    // {
    //   text: "Table",
    //   icon: TableIcon,
    //   onClick: () => {
    //     props.command({
    //       command: Command.Table,
    //     });
    //   },
    // },
    {
      text: "Check List",
      icon: CheckboxIcon,
      onClick: () => {
        props.command({
          command: Command.CheckList,
        });
      },
    },
    {
      text: "Bullet List",
      icon: ListBulletIcon,
      onClick: () => {
        props.command({
          command: Command.BulletList,
        });
      },
    },
    {
      text: "Numbered List",
      icon: ListBulletIcon,
      onClick: () => {
        props.command({
          command: Command.NumberedList,
        });
      },
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

    if (item === undefined || item.onClick === undefined) {
      return;
    }

    item.onClick();
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
      className="h-[21rem] w-60 rounded-xl shadow-lg"
    >
      <div className="flex flex-col gap-1 py-4 pl-4">{items}</div>
    </ScrollArea>
  );
});
