import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";

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
import { SlashMenu } from "../SlashMenu/SlashMenu";
import { ItemProps } from "./Item/Item";

export const SlashMenuSuggestion = {
  items: (): Array<ItemProps> => {
    return [
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
    ];
  },
  render: () => {
    let component: any;
    let popup: any;

    return {
      onStart: (props: any) => {
        component = new ReactRenderer(SlashMenu, {
          props,
          editor: props.editor,
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start",
        });
      },

      onUpdate(props: any) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown(props: any) {
        if (props.event.key === "Escape") {
          popup[0].hide();

          return true;
        }

        return component.ref?.onKeyDown(props);
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
};
