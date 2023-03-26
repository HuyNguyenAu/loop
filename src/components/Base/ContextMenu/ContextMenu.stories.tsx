import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu } from "./ContextMenu";

export default {
  title: "Base/Context Menu",
  component: ContextMenu,
  tags: ["autodocs"],
} as Meta<typeof ContextMenu>;

export const Default: StoryObj<typeof ContextMenu> = {
  args: {
    trigger: <p>Right click here!</p>,
    children: (
      <>
        <p>Hello World!</p>
        <p>Hello World!</p>
        <p>Hello World!</p>
      </>
    ),
  },
};
