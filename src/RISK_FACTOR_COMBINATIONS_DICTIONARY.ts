import type { QuestionItem } from "./useComplianceVerificationState";

type RiskFactorItem = Pick<
  QuestionItem,
  "probability" | "severity" | "riskFactor"
>;

type RiskFactor = RiskFactorItem[];

export const RISK_FACTOR_COMBINATIONS: RiskFactor = [
  {
    probability: 1,
    severity: 1,
    riskFactor: "EXTREM",
  },
  {
    probability: 1,
    severity: 2,
    riskFactor: "EXTREM",
  },
  {
    probability: 1,
    severity: 3,
    riskFactor: "EXTREM",
  },
  {
    probability: 2,
    severity: 1,
    riskFactor: "EXTREM",
  },
  {
    probability: 2,
    severity: 2,
    riskFactor: "EXTREM",
  },
  {
    probability: 3,
    severity: 1,
    riskFactor: "EXTREM",
  },
  {
    probability: 1,
    severity: 4,
    riskFactor: "MEDIU",
  },
  {
    probability: 2,
    severity: 3,
    riskFactor: "MEDIU",
  },
  {
    probability: 2,
    severity: 4,
    riskFactor: "MEDIU",
  },
  {
    probability: 3,
    severity: 2,
    riskFactor: "MEDIU",
  },
  {
    probability: 3,
    severity: 3,
    riskFactor: "MEDIU",
  },
  {
    probability: 4,
    severity: 1,
    riskFactor: "MEDIU",
  },
  {
    probability: 4,
    severity: 2,
    riskFactor: "MEDIU",
  },
  {
    probability: 3,
    severity: 4,
    riskFactor: "SCĂZUT",
  },
  {
    probability: 4,
    severity: 3,
    riskFactor: "SCĂZUT",
  },
  {
    probability: 4,
    severity: 4,
    riskFactor: "SCĂZUT",
  },
];
