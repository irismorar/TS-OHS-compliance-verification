import { cva } from "class-variance-authority";

type Props = {
  riskLevel: "E" | "M" | "S";
  severity: 1 | 2 | 3 | 4;
  probability: 1 | 2 | 3 | 4;
  isLockedIn: boolean;
  disabled: boolean;
  onHover: (gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) => void;
  onLockIn: (gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) => void;
  onLeave: () => void;
};

export function RiskTableCell({
  riskLevel,
  severity,
  probability,
  isLockedIn,
  disabled,
  onLockIn,
  onHover,
  onLeave,
}: Props) {
  if (disabled) {
    return (
      <td className="w-10 h-10 text-center align-middle bg-slate-400/30"></td>
    );
  }

  return (
    <td
      className={riskTableCellVariants({ riskLevel, isLockedIn })}
      onClick={() => onLockIn(severity, probability)}
      onMouseEnter={() => onHover(severity, probability)}
      onMouseLeave={onLeave}
    >
      {riskLevel}
    </td>
  );
}

const riskTableCellVariants = cva(
  ["w-10 h-10 text-center align-middle cursor-pointer border border-slate-100"],
  {
    variants: {
      riskLevel: {
        E: ["bg-red-400 hover:bg-red-500"],
        M: ["bg-yellow-300/60 hover:bg-yellow-300"],
        S: ["bg-green-400 hover:bg-green-500"],
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
        className: ["bg-yellow-400"],
      },
      {
        riskLevel: "S",
        isLockedIn: true,
        className: ["bg-green-600"],
      },
    ],
  },
);
