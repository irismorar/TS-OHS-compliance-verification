import { cva } from "class-variance-authority";
import type React from "react";

type Props = {
  children?: React.ReactNode;
  isHighlighted?: boolean;
  isLockedIn?: boolean;
};

export function RiskTableDisplayHeading({
  children,
  isHighlighted,
  isLockedIn,
}: Props) {
  return (
    <td
      className={riskTableDisplayHeadingVariants({
        isHighlighted,
        isLockedIn,
      })}
    >
      {children}
    </td>
  );
}

const riskTableDisplayHeadingVariants = cva(
  ["w-20 h-20 text-center align-middle font-semibold text-xs italic"],
  {
    variants: {
      isHighlighted: {
        false: null,
      },
      isLockedIn: {
        false: null,
        true: ["bg-slate-700 text-white"],
      },
    },
    compoundVariants: [
      {
        isHighlighted: false,
        isLockedIn: false,
        className: ["bg-slate-400 text-slate-300 border border-slate-200"],
      },
      {
        isHighlighted: true,
        isLockedIn: true,
        className: ["bg-slate-700 text-slate-300 border border-slate-200"],
      },
      {
        isHighlighted: true,
        isLockedIn: false,
        className: ["bg-slate-400/70 text-slate-700 border border-slate-200"],
      },
    ],
  },
);
