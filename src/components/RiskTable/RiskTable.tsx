import { useState } from "react";
import { RiskTableCell } from "./RiskTableCell";
import { RiskTableDisplayHeading } from "./RiskTableDisplayHeading";

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
    <div className="relative grid grid-cols-[auto_1fr] w-fit scale-125 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xl">
      <button
        type="button"
        aria-label="Închide"
        onClick={() => {
          setIsOpen(false);
          onClose();
        }}
        className="absolute -top-7 -right-7 flex items-center justify-center text-white text-3xl bg-transparent border-0 font-bold transition hover:scale-120 hover:text-red-700"
      >
        ×
      </button>
      <div className="col-span-2 flex border-t border-l border-r">
        <span className="w-20"></span>
        <div className="w-40 h-10 flex items-center justify-center">
          Gravitate
        </div>
      </div>

      <div className="w-10 flex flex-col border-l">
        <span className="h-10"></span>
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
              1
            </RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredSeverity === 2}
              isLockedIn={lockedSeverity === 2}
            >
              2
            </RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredSeverity === 3}
              isLockedIn={lockedSeverity === 3}
            >
              3
            </RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredSeverity === 4}
              isLockedIn={lockedSeverity === 4}
            >
              4
            </RiskTableDisplayHeading>
          </tr>
          <tr>
            <RiskTableDisplayHeading
              isHighlighted={hoveredProbability === 1}
              isLockedIn={lockedProbability === 1}
            >
              1
            </RiskTableDisplayHeading>
            <RiskTableCell
              riskLevel="E"
              severity={1}
              probability={1}
              isLockedIn={lockedSeverity === 1 && lockedProbability === 1}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="E"
              severity={2}
              probability={1}
              isLockedIn={lockedSeverity === 2 && lockedProbability === 1}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="E"
              severity={3}
              probability={1}
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
              2
            </RiskTableDisplayHeading>
            <RiskTableCell
              riskLevel="E"
              severity={1}
              probability={2}
              isLockedIn={lockedSeverity === 1 && lockedProbability === 2}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="E"
              severity={2}
              probability={2}
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
              3
            </RiskTableDisplayHeading>
            <RiskTableCell
              riskLevel="E"
              severity={1}
              probability={3}
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
              4
            </RiskTableDisplayHeading>
            <RiskTableCell
              riskLevel="M"
              severity={1}
              probability={4}
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
              isLockedIn={lockedSeverity === 4 && lockedProbability === 4}
              disabled={userAnswer !== true}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
          </tr>
        </tbody>
      </table>

      <div className="col-span-2 flex items-center justify-center gap-4 border">
        <button
          aria-label="salvează"
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
          aria-label="anulează"
          onClick={() => {
            onCommitRiskValues(null, null);
            setLockedSeverity(null);
            setLockedProbability(null);
            setIsOpen(true);
          }}
        >
          anulează
        </button>
      </div>
    </div>
  );
}
