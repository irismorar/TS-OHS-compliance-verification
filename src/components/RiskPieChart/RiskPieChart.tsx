import { PieChart } from "react-minimal-pie-chart";

type Props = {
  className?: string;
  lineWidth?: number;
  low: number;
  medium: number;
  critical: number;
};

export function RiskPieChart({
  className,
  lineWidth = 60,
  low,
  medium,
  critical,
}: Props) {
  return (
    <PieChart
      lineWidth={lineWidth}
      data={[
        { title: "Risc scăzut", value: low, color: "#16a34a" },
        { title: "Risc mediu", value: medium, color: "#f59e0b" },
        { title: "Risc critic", value: critical, color: "#dc2626" },
      ]}
      className={className}
    />
  );
}
