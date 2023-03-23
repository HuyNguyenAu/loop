import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "./Separator";

export default {
  title: "Base/Separator",
  component: Separator,
  tags: ["autodocs"],
} as Meta<typeof Separator>;

export const Default: StoryObj<typeof Separator> = {
  args: {
    className: "bg-black",
  },
};
