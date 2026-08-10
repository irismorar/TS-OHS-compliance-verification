import type { Meta, StoryObj } from "@storybook/react-vite";

import { RiskTableCell } from "./RiskTableCell";

const meta = {
  title: "Components/RiskTableCell",
  component: RiskTableCell,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RiskTableCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    riskLevel: "E",
    isLockedIn: false,
    disabled: false,
    gravity: 1,
    probability: 1,
    onLockIn: () => {},
    onHover: () => {},
    onLeave: () => {},
  },
};
