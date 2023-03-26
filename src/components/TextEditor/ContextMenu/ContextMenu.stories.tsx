import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu } from "./ContextMenu";

export default {
  title: "Text Editor/Context Menu",
  component: ContextMenu,
  tags: ["autodocs"],
} as Meta<typeof ContextMenu>;

export const Default: StoryObj<typeof ContextMenu> = {
  args: {
  },
};
