import type { Meta, StoryObj } from "@storybook/react-vite";

import { RiskPieChart } from "./RiskPieChart";

const meta = {
  title: "Components/RiskPieChart",
  component: RiskPieChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RiskPieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant1: Story = {
  name: "Normal line width",
  args: {
    low: 10,
    medium: 20,
    extreme: 30,
  },
};

export const Variant2: Story = {
  name: "Big line width",
  args: {
    lineWidth: 80,
    low: 5,
    medium: 15,
    extreme: 25,
  },
};
