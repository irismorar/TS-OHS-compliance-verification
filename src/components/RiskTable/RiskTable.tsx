import { useState } from "react";
import { RiskTableCell } from "./RiskTableCell";
import { RiskTableDisplayHeading } from "./RiskTableDisplayHeading";

type Props = {
  onCommitRiskValues: (
    gravity: 1 | 2 | 3 | 4 | null,
    probability: 1 | 2 | 3 | 4 | null,
  ) => void;
  onClose: () => void;
  userAnswer: boolean | null;
};

export function RiskTable({ onCommitRiskValues, onClose, userAnswer }: Props) {
  const [hoveredGravity, setHoveredGravity] = useState<1 | 2 | 3 | 4 | null>(
    null,
  );
  const [hoveredProbability, setHoveredProbability] = useState<
    1 | 2 | 3 | 4 | null
  >(null);
  const [lockedGravity, setLockedGravity] = useState<1 | 2 | 3 | 4 | null>(
    null,
  );
  const [lockedProbability, setLockedProbability] = useState<
    1 | 2 | 3 | 4 | null
  >(null);

  const [isOpen, setIsOpen] = useState(true);

  function handleCellHover(gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) {
    setHoveredGravity(gravity);
    setHoveredProbability(probability);
  }

  function handleCellLeave() {
    setHoveredGravity(null);
    setHoveredProbability(null);
  }

  function handleCellClick(gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) {
    setLockedGravity(gravity);
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
              isHighlighted={hoveredGravity === 1}
              isLockedIn={lockedGravity === 1}
            >
              1
            </RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredGravity === 2}
              isLockedIn={lockedGravity === 2}
            >
              2
            </RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredGravity === 3}
              isLockedIn={lockedGravity === 3}
            >
              3
            </RiskTableDisplayHeading>
            <RiskTableDisplayHeading
              isHighlighted={hoveredGravity === 4}
              isLockedIn={lockedGravity === 4}
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
              gravity={1}
              probability={1}
              isLockedIn={lockedGravity === 1 && lockedProbability === 1}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="E"
              gravity={2}
              probability={1}
              isLockedIn={lockedGravity === 2 && lockedProbability === 1}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="E"
              gravity={3}
              probability={1}
              isLockedIn={lockedGravity === 3 && lockedProbability === 1}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              gravity={4}
              probability={1}
              isLockedIn={lockedGravity === 4 && lockedProbability === 1}
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
              gravity={1}
              probability={2}
              isLockedIn={lockedGravity === 1 && lockedProbability === 2}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="E"
              gravity={2}
              probability={2}
              isLockedIn={lockedGravity === 2 && lockedProbability === 2}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              gravity={3}
              probability={2}
              isLockedIn={lockedGravity === 3 && lockedProbability === 2}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              gravity={4}
              probability={2}
              isLockedIn={lockedGravity === 4 && lockedProbability === 2}
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
              gravity={1}
              probability={3}
              isLockedIn={lockedGravity === 1 && lockedProbability === 3}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              gravity={2}
              probability={3}
              isLockedIn={lockedGravity === 2 && lockedProbability === 3}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              gravity={3}
              probability={3}
              isLockedIn={lockedGravity === 3 && lockedProbability === 3}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="S"
              gravity={4}
              probability={3}
              isLockedIn={lockedGravity === 4 && lockedProbability === 3}
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
              gravity={1}
              probability={4}
              isLockedIn={lockedGravity === 1 && lockedProbability === 4}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="M"
              gravity={2}
              probability={4}
              isLockedIn={lockedGravity === 2 && lockedProbability === 4}
              disabled={userAnswer !== false}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="S"
              gravity={3}
              probability={4}
              isLockedIn={lockedGravity === 3 && lockedProbability === 4}
              disabled={userAnswer !== true}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onLockIn={handleCellClick}
            />
            <RiskTableCell
              riskLevel="S"
              gravity={4}
              probability={4}
              isLockedIn={lockedGravity === 4 && lockedProbability === 4}
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
            if (lockedGravity && lockedProbability) {
              onCommitRiskValues(lockedGravity, lockedProbability);
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
            setLockedGravity(null);
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
