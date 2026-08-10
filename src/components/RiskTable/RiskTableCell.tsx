import { cva } from "class-variance-authority";

type Props = {
  riskLevel: "E" | "M" | "S";
  gravity: 1 | 2 | 3 | 4;
  probability: 1 | 2 | 3 | 4;
  isLockedIn: boolean;
  disabled: boolean;
  onHover: (gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) => void;
  onLockIn: (gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) => void;
  onLeave: () => void;
};

export function RiskTableCell({
  riskLevel,
  gravity,
  probability,
  isLockedIn,
  disabled,
  onLockIn,
  onHover,
  onLeave,
}: Props) {
  if (disabled) {
    return (
      <td className="w-10 h-10 text-center align-middle bg-slate-400"></td>
    );
  }

  return (
    <td
      className={riskTableCellVariants({ riskLevel, isLockedIn })}
      onClick={() => onLockIn(gravity, probability)}
      onMouseEnter={() => onHover(gravity, probability)}
      onMouseLeave={onLeave}
    >
      {riskLevel}
    </td>
  );
}

const riskTableCellVariants = cva(
  ["w-10 h-10 text-center align-middle cursor-pointer"],
  {
    variants: {
      riskLevel: {
        E: ["bg-red-400 hover:bg-red-600"],
        M: ["bg-yellow-300 hover:bg-yellow-500"],
        S: ["bg-green-400 hover:bg-green-600"],
      },
      isLockedIn: {
        false: null,
        true: ["border-2", "border-white"],
      },
    },
    compoundVariants: [
      {
        riskLevel: "E",
        isLockedIn: true,
        className: ["bg-red-600"],
      },
      {
        riskLevel: "M",
        isLockedIn: true,
        className: ["bg-yellow-500"],
      },
      {
        riskLevel: "S",
        isLockedIn: true,
        className: ["bg-green-600"],
      },
    ],
  },
);
