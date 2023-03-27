import { IconJarLogoIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./Toggle";

export default {
  title: "Base/Toggle",
  component: Toggle,
  tags: ["autodocs"],
} as Meta<typeof Toggle>;

export const Default: StoryObj<typeof Toggle> = {
  args: {
    icon: IconJarLogoIcon,
    value: "Test",
  },
};
