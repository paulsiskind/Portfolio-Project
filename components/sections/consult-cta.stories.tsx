import type { Meta, StoryObj } from "@storybook/react";
import { ConsultationCTA } from "./consult-cta";

const meta: Meta<typeof ConsultationCTA> = {
  title: "Sections/ConsultationCTA",
  component: ConsultationCTA,
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

type Story = StoryObj<typeof ConsultationCTA>;

export const Default: Story = {};
