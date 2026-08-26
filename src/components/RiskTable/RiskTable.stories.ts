import type { Meta, StoryObj } from "@storybook/react-vite";

import { RiskTable } from "./RiskTable";

const meta = {
  title: "Components/RiskTable",
  component: RiskTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RiskTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onCommitRiskValues: (severity, probability) => {
      console.log("Committed risk values:", probability, severity);
    },
    onClose: () => {},
    userAnswer: false,
  },
};
