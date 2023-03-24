import type { Meta, StoryObj } from "@storybook/react";

import { Item } from "./Item";

export default {
  title: "Text Editor/Draggable/Item",
  component: Item,
  tags: ["autodocs"],
} as Meta<typeof Item>;

export const Default: StoryObj<typeof Item> = {
  args: {
  },
};
