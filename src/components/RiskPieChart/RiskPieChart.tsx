import { PieChart } from "react-minimal-pie-chart";

type Props = {
  className?: string;
  lineWidth?: number;
  low: number;
  medium: number;
  extreme: number;
};

export function RiskPieChart({
  className,
  lineWidth = 60,
  low,
  medium,
  extreme,
}: Props) {
  return (
    <PieChart
      lineWidth={lineWidth}
      data={[
        { title: "Risc scăzut", value: low, color: "#16a34a" },
        { title: "Risc mediu", value: medium, color: "#f59e0b" },
        { title: "Risc extrem", value: extreme, color: "#dc2626" },
      ]}
      className={className}
    />
  );
}
