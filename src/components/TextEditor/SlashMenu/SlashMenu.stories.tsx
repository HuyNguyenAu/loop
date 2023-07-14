import type { Meta, StoryObj } from "@storybook/react";

import { SlashMenu } from "./SlashMenu";

export default {
  title: "Text Editor/Slash Menu",
  component: SlashMenu,
  tags: ["autodocs"],
} as Meta<typeof SlashMenu>;

export const Default: StoryObj<typeof SlashMenu> = {
  args: {
  },
};
