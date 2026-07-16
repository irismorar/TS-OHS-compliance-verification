import { useState } from "react";

type Props = {
  onCommitRiskValues: (
    gravity: 1 | 2 | 3 | 4,
    probability: 1 | 2 | 3 | 4,
  ) => void;
};

export function RiskTable({ onCommitRiskValues }: Props) {
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

  return (
    <div className="grid grid-cols-[auto_1fr] w-fit border">
      <div className="col-span-2 flex border">
        <span className="w-20 border"></span>
        <div className="w-40 h-10 border flex items-center justify-center">
          Gravitate
        </div>
      </div>

      <div className="w-10 flex flex-col border">
        <span className="h-10 border"></span>
        <div className="flex-1 flex items-center justify-center">
          <span className="-rotate-90 whitespace-nowrap">Probabilitate</span>
        </div>
      </div>

      <table className="border">
        <tbody>
          <tr>
            <VTD></VTD>
            <VTD
              isHighlighted={hoveredGravity === 1}
              isLockedIn={lockedGravity === 1}
            >
              1
            </VTD>
            <VTD
              isHighlighted={hoveredGravity === 2}
              isLockedIn={lockedGravity === 2}
            >
              2
            </VTD>
            <VTD
              isHighlighted={hoveredGravity === 3}
              isLockedIn={lockedGravity === 3}
            >
              3
            </VTD>
            <VTD
              isHighlighted={hoveredGravity === 4}
              isLockedIn={lockedGravity === 4}
            >
              4
            </VTD>
          </tr>
          <tr>
            <VTD
              isHighlighted={hoveredProbability === 1}
              isLockedIn={lockedProbability === 1}
            >
              1
            </VTD>
            <ITD
              riskLevel="extreme"
              gravity={1}
              probability={1}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="extreme"
              gravity={2}
              probability={1}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="extreme"
              gravity={3}
              probability={1}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="medium"
              gravity={4}
              probability={1}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
          </tr>
          <tr>
            <VTD
              isHighlighted={hoveredProbability === 2}
              isLockedIn={lockedProbability === 2}
            >
              2
            </VTD>
            <ITD
              riskLevel="extreme"
              gravity={1}
              probability={2}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="extreme"
              gravity={2}
              probability={2}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="medium"
              gravity={3}
              probability={2}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="medium"
              gravity={4}
              probability={2}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
          </tr>
          <tr>
            <VTD
              isHighlighted={hoveredProbability === 3}
              isLockedIn={lockedProbability === 3}
            >
              3
            </VTD>
            <ITD
              riskLevel="extreme"
              gravity={1}
              probability={3}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="medium"
              gravity={2}
              probability={3}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="medium"
              gravity={3}
              probability={3}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="low"
              gravity={4}
              probability={3}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
          </tr>
          <tr>
            <VTD
              isHighlighted={hoveredProbability === 4}
              isLockedIn={lockedProbability === 4}
            >
              4
            </VTD>
            <ITD
              riskLevel="medium"
              gravity={1}
              probability={4}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="medium"
              gravity={2}
              probability={4}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="low"
              gravity={3}
              probability={4}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
            />
            <ITD
              riskLevel="low"
              gravity={4}
              probability={4}
              onHover={handleCellHover}
              onLeave={handleCellLeave}
              onClick={handleCellClick}
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
            }
          }}
        >
          salvează
        </button>
        <button aria-label="anulează">anulează</button>
      </div>
    </div>
  );
}

function VTD({
  children,
  isHighlighted,
  isLockedIn,
}: {
  children?: React.ReactNode;
  isHighlighted?: boolean;
  isLockedIn?: boolean;
}) {
  return (
    <td
      className={`w-10 h-10 text-center align-middle font-semibold ${
        isLockedIn
          ? "bg-white text-blue-600"
          : isHighlighted
            ? "bg-blue-400 text-white"
            : "bg-blue-600 text-white"
      }`}
    >
      {children}
    </td>
  );
}

const RISK_LEVEL_LETTER = {
  low: "S",
  medium: "M",
  extreme: "E",
} as const;

function ITD({
  riskLevel,
  gravity,
  probability,
  onHover,
  onLeave,
  onClick,
}: {
  riskLevel: "low" | "medium" | "extreme";
  gravity: 1 | 2 | 3 | 4;
  probability: 1 | 2 | 3 | 4;
  onHover: (gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) => void;
  onLeave: () => void;
  onClick: (gravity: 1 | 2 | 3 | 4, probability: 1 | 2 | 3 | 4) => void;
}) {
  return (
    <td
      className="w-10 h-10 text-center align-middle border cursor-pointer"
      onMouseEnter={() => onHover(gravity, probability)}
      onMouseLeave={onLeave}
      onClick={() => onClick(gravity, probability)}
    >
      {RISK_LEVEL_LETTER[riskLevel]}
    </td>
  );
}
