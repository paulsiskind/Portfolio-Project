import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./hero";

const meta: Meta<typeof HeroSection> = {
  title: "Sections/Hero",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
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

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
