import type { Preview } from "@storybook/react";
import React from "react";
import "../app/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="min-h-screen bg-[var(--bg-primary)] p-10 text-[var(--foreground)]">
          <Story />
        </div>
      </ThemeProvider>
    )
  ]
};

export default preview;
