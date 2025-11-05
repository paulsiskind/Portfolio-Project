import type { Meta, StoryObj } from "@storybook/react";
import { ServiceMasonry } from "./services-grid";

const meta: Meta<typeof ServiceMasonry> = {
  title: "Sections/Services",
  component: ServiceMasonry,
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

type Story = StoryObj<typeof ServiceMasonry>;

export const Default: Story = {};
