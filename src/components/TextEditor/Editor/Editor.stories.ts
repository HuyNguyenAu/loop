import type { Meta, StoryObj } from "@storybook/react";

import { Editor } from "./Editor";

export default {
  title: "Text Editor/Editor",
  component: Editor,
  tags: ["autodocs"],
} as Meta<typeof Editor>;

export const Default: StoryObj<typeof Editor> = {
  args: {},
};
