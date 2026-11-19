import { useState } from "react";
import { RiskTableCell } from "./RiskTableCell";
import { RiskTableDisplayHeading } from "./RiskTableDisplayHeading";
import { PROBABILITY_LABELS, SEVERITY_LABELS } from "./RISK_TABLE_LABELS";

type Props = {
  onCommitRiskValues: (
    severity: 1 | 2 | 3 | 4 | null,
    probability: 1 | 2 | 3 | 4 | null,
  ) => void;
  onClose: () => void;
  userAnswer: boolean | null;
};

export function RiskTable({ onCommitRiskValues, onClose, userAnswer }: Props) {
  const [hoveredSeverity, setHoveredSeverity] = useState<1 | 2 | 3 | 4 | null>(
    null,
  );
  const [hoveredProbability, setHoveredProbability] = useState<
    1 | 2 | 3 | 4 | null
  >(null);
  const [lockedSeverity, setLockedSeverity] = useState<1 | 2 | 3 | 4 | null>(
    null,
  );
  const [lockedProbability, setLockedProbability] = useState<
    1 | 2 | 3 | 4 | null
  >(null);

  const [isOpen, setIsOpen] = useState(true);

  function handleCellHover(
    severity: 1 | 2 | 3 | 4,
    probability: 1 | 2 | 3 | 4,
  ) {
    setHoveredSeverity(severity);
    setHoveredProbability(probability);
  }

  function handleCellLeave() {
    setHoveredSeverity(null);
    setHoveredProbability(null);
  }

  function handleCellClick(
    severity: 1 | 2 | 3 | 4,
    probability: 1 | 2 | 3 | 4,
  ) {
    setLockedSeverity(severity);
    setLockedProbability(probability);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="relative grid grid-cols-[auto_1fr] w-fit scale-125 rounded-2xl border border-white/20 bg-linear-to-br from-slate-600 via-slate-600 to-slate-500 p-0 text-slate-100 shadow-2xl shadow-blue-950/30">
      <div className="col-span-2 flex">
        <span className="w-40"></span>
        <div className="w-80 h-10 flex items-center justify-center">
          Gravitate
        </div>
      </div>

      <div className="w-10 flex flex-col">
        <span className="h-20"></span>
        <div className="flex-1 flex items-center justify-center">
          <span className="-rotate-90 whitespace-nowrap">Probabilitate</span>
        </div>
      </div>

      <table className="border-0">
        <tbody>
          <tr>
            <RiskTableDisplayHeading></RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredSeverity === 1}
              isLockedIn={lockedSeverity === 1}
            >
              {SEVERITY_LABELS[1]}
            </RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredSeverity === 2}
              isLockedIn={lockedSeverity === 2}
            >
              {SEVERITY_LABELS[2]}
            </RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredSeverity === 3}
              isLockedIn={lockedSeverity === 3}
            >
              {SEVERITY_LABELS[3]}
            </RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredSeverity === 4}
              isLockedIn={lockedSeverity === 4}
            >
              {SEVERITY_LABELS[4]}
            </RiskTableDisplayHeading>
          </tr>
          <tr>
            <RiskTableDisplayHeading
              isHighlighted={hoveredProbability === 1}
              isLockedIn={lockedProbability === 1}
            >
              {PROBABILITY_LABELS[1]}
            </RiskTableDisplayHeading>
            <RiskTableCell
              riskLevel="C"
              severity={1}
              probability={1}
              isHighlighted={hoveredSeverity === 1 && hoveredProbability === 1}
              isLockedIn={lockedSeverity === 1 && lockedProbability === 1}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="C"
              severity={2}
              probability={1}
              isHighlighted={hoveredSeverity === 2 && hoveredProbability === 1}
              isLockedIn={lockedSeverity === 2 && lockedProbability === 1}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="C"
              severity={3}
              probability={1}
              isHighlighted={hoveredSeverity === 3 && hoveredProbability === 1}
              isLockedIn={lockedSeverity === 3 && lockedProbability === 1}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              severity={4}
              probability={1}
              isHighlighted={hoveredSeverity === 4 && hoveredProbability === 1}
              isLockedIn={lockedSeverity === 4 && lockedProbability === 1}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
          </tr>
          <tr>
            <RiskTableDisplayHeading
              isHighlighted={hoveredProbability === 2}
              isLockedIn={lockedProbability === 2}
            >
              {PROBABILITY_LABELS[2]}
            </RiskTableDisplayHeading>
            <RiskTableCell
              riskLevel="C"
              severity={1}
              probability={2}
              isHighlighted={hoveredSeverity === 1 && hoveredProbability === 2}
              isLockedIn={lockedSeverity === 1 && lockedProbability === 2}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="C"
              severity={2}
              probability={2}
              isHighlighted={hoveredSeverity === 2 && hoveredProbability === 2}
              isLockedIn={lockedSeverity === 2 && lockedProbability === 2}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              severity={3}
              probability={2}
              isHighlighted={hoveredSeverity === 3 && hoveredProbability === 2}
              isLockedIn={lockedSeverity === 3 && lockedProbability === 2}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              severity={4}
              probability={2}
              isHighlighted={hoveredSeverity === 4 && hoveredProbability === 2}
              isLockedIn={lockedSeverity === 4 && lockedProbability === 2}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
          </tr>
          <tr>
            <RiskTableDisplayHeading
              isHighlighted={hoveredProbability === 3}
              isLockedIn={lockedProbability === 3}
            >
              {PROBABILITY_LABELS[3]}
            </RiskTableDisplayHeading>
            <RiskTableCell
              riskLevel="C"
              severity={1}
              probability={3}
              isHighlighted={hoveredSeverity === 1 && hoveredProbability === 3}
              isLockedIn={lockedSeverity === 1 && lockedProbability === 3}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              severity={2}
              probability={3}
              isHighlighted={hoveredSeverity === 2 && hoveredProbability === 3}
              isLockedIn={lockedSeverity === 2 && lockedProbability === 3}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              severity={3}
              probability={3}
              isHighlighted={hoveredSeverity === 3 && hoveredProbability === 3}
              isLockedIn={lockedSeverity === 3 && lockedProbability === 3}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="S"
              severity={4}
              probability={3}
              isHighlighted={hoveredSeverity === 4 && hoveredProbability === 3}
              isLockedIn={lockedSeverity === 4 && lockedProbability === 3}
              disabled={userAnswer !== true}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
          </tr>
          <tr>
            <RiskTableDisplayHeading
              isHighlighted={hoveredProbability === 4}
              isLockedIn={lockedProbability === 4}
            >
              {PROBABILITY_LABELS[4]}
            </RiskTableDisplayHeading>
            <RiskTableCell
              riskLevel="M"
              severity={1}
              probability={4}
              isHighlighted={hoveredSeverity === 1 && hoveredProbability === 4}
              isLockedIn={lockedSeverity === 1 && lockedProbability === 4}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              severity={2}
              probability={4}
              isHighlighted={hoveredSeverity === 2 && hoveredProbability === 4}
              isLockedIn={lockedSeverity === 2 && lockedProbability === 4}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="S"
              severity={3}
              probability={4}
              isHighlighted={hoveredSeverity === 3 && hoveredProbability === 4}
              isLockedIn={lockedSeverity === 3 && lockedProbability === 4}
              disabled={userAnswer !== true}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="S"
              severity={4}
              probability={4}
              isHighlighted={hoveredSeverity === 4 && hoveredProbability === 4}
              isLockedIn={lockedSeverity === 4 && lockedProbability === 4}
              disabled={userAnswer !== true}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
          </tr>
        </tbody>
      </table>

      <div className="col-span-2 flex items-center justify-center gap-3 px-4 py-2">
        <button
          type="button"
          aria-label="salvează"
          disabled={!lockedSeverity || !lockedProbability}
          className="uppercase rounded-lg border border-blue-400/40 bg-blue-600 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-md shadow-blue-950/20 transition-all duration-200 enabled:hover:-translate-y-0.5 enabled:hover:bg-blue-500 enabled:hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-slate-400/30 disabled:text-slate-300 disabled:shadow-none"
          onClick={() => {
            if (lockedSeverity && lockedProbability) {
              onCommitRiskValues(lockedSeverity, lockedProbability);
              setIsOpen(false);
              onClose();
            }
          }}
        >
          salvează
        </button>
        <button
          type="button"
          aria-label="anulează"
          className="uppercase rounded-lg border border-red-400/60 bg-red-500/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-red-100 shadow-sm transition-all duration-200 enabled:hover:-translate-y-0.5 enabled:hover:border-red-300 enabled:hover:bg-red-600 enabled:hover:text-white enabled:hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5 disabled:text-slate-500 disabled:shadow-none"
          onClick={() => {
            setIsOpen(false);
            onClose();
          }}
        >
          anulează
        </button>
      </div>
    </div>
  );
}
