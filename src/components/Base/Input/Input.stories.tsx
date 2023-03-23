import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Base/Input",
  component: Input,
  tags: ["autodocs"],
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  args: {
    placeholder: "Search",
  },
};
