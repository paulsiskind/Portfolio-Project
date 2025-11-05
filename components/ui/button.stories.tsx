import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Schedule consultation"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0b141a" },
        { name: "light", value: "#f3f1ec" }
      ]
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline"
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost"
  }
};
