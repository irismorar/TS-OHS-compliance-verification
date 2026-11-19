import { cva } from "class-variance-authority";

type Props = {
  riskLevel: "C" | "M" | "S";
  severity: 1 | 2 | 3 | 4;
  probability: 1 | 2 | 3 | 4;
  isHighlighted: boolean;
  isLockedIn: boolean;
  disabled: boolean;
  onHover: (gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) => void;
  onLockIn: (gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) => void;
  onLeave: () => void;
};

const VERBOSE_RISK_LEVELS = {
  C: "critic",
  M: "mediu",
  S: "scăzut",
};

export function RiskTableCell({
  riskLevel,
  severity,
  probability,
  isHighlighted,
  isLockedIn,
  disabled,
  onLockIn,
  onHover,
  onLeave,
}: Props) {
  if (disabled) {
    return <td className="text-center align-middle bg-slate-400/30"></td>;
  }

  return (
    <td
      className={riskTableCellVariants({
        riskLevel,
        isLockedIn,
        isHighlighted,
      })}
      onClick={() => onLockIn(severity, probability)}
      onMouseEnter={() => onHover(severity, probability)}
      onMouseLeave={onLeave}
    >
      {VERBOSE_RISK_LEVELS[riskLevel]}
    </td>
  );
}

const riskTableCellVariants = cva(
  [
    "text-center text-sm font-semibold align-middle cursor-pointer border border-slate-100",
  ],
  {
    variants: {
      riskLevel: {
        C: null,
        M: null,
        S: null,
      },
      isLockedIn: {
        false: null,
        true: ["border-white"],
      },
      isHighlighted: {
        false: null,
      },
    },
    compoundVariants: [
      {
        riskLevel: "C",
        isHighlighted: false,
        isLockedIn: false,
        className: ["bg-red-400"],
      },
      {
        riskLevel: "C",
        isHighlighted: true,
        isLockedIn: false,
        className: ["bg-red-500"],
      },
      {
        riskLevel: "C",
        isLockedIn: true,
        className: ["bg-red-600"],
      },
      {
        riskLevel: "M",
        isHighlighted: false,
        isLockedIn: false,
        className: ["bg-yellow-300/60"],
      },
      {
        riskLevel: "M",
        isHighlighted: true,
        isLockedIn: false,
        className: ["bg-yellow-300"],
      },
      {
        riskLevel: "M",
        isLockedIn: true,
        className: ["bg-yellow-400"],
      },
      {
        riskLevel: "S",
        isHighlighted: false,
        isLockedIn: false,
        className: ["bg-green-400"],
      },
      {
        riskLevel: "S",
        isHighlighted: true,
        isLockedIn: false,
        className: ["bg-green-500"],
      },
      {
        riskLevel: "S",
        isLockedIn: true,
        className: ["bg-green-600"],
      },
    ],
  },
);
