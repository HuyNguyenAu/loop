import type { Meta, StoryObj } from "@storybook/react";

import { BubbleMenu } from "./BubbleMenu";

export default {
  title: "Text Editor/Bubble Menu",
  component: BubbleMenu,
  tags: ["autodocs"],
} as Meta<typeof BubbleMenu>;

export const Default: StoryObj<typeof BubbleMenu> = {
  args: {
  },
};
