import {
  CheckboxIcon,
  HeadingIcon,
  ListBulletIcon,
  TableIcon,
} from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";

import { SlashMenu } from "./SlashMenu";

export default {
  title: "Text Editor/Slash Menu",
  component: SlashMenu,
  tags: ["autodocs"],
} as Meta<typeof SlashMenu>;

export const Default: StoryObj<typeof SlashMenu> = {
  args: {
    items: [
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
    ],
  },
};
