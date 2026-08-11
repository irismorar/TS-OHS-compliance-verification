import type { Meta, StoryObj } from "@storybook/react-vite";

import { RiskTableDisplayHeading } from "./RiskTableDisplayHeading";

const meta = {
  title: "Components/RiskTableDisplayHeading",
  component: RiskTableDisplayHeading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RiskTableDisplayHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 1,
    isHighlighted: true,
    isLockedIn: false,
  },
};
