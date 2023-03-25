import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";

import { Item } from "./Item";

export default {
  title: "Base/Context Menu/Item",
  component: Item,
  tags: ["autodocs"],
} as Meta<typeof Item>;

export const Default: StoryObj<typeof Item> = {
  args: {
    icon: EnvelopeOpenIcon,
    text: "Hello World",
  },
};
