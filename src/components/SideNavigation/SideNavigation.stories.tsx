import type { Meta, StoryObj } from "@storybook/react";

import { SideNavigation } from "./SideNavigation";

export default {
  title: "Side Navigation",
  component: SideNavigation,
  tags: ["autodocs"],
} as Meta<typeof SideNavigation>;

export const Default: StoryObj<typeof SideNavigation> = {
  args: {
    items: Array.from({ length: 100 }).map((value, index) => {
      return {
        text: `Radix Primitives ${index}`,
      };
    }),
  },
};
