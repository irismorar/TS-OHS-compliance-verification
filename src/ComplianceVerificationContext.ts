import { createContext } from "react";
import type { useComplianceVerificationState } from "./useComplianceVerificationState";

export type ComplianceVerificationContextValue = ReturnType<
  typeof useComplianceVerificationState
>;

export const ComplianceVerificationContext = createContext<
  ComplianceVerificationContextValue | undefined
>(undefined);
