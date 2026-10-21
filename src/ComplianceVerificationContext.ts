import { createContext, useContext } from "react";
import type { useComplianceVerificationState } from "./useComplianceVerificationState";

export type ComplianceVerificationContextValue = ReturnType<
  typeof useComplianceVerificationState
>;

export const ComplianceVerificationContext = createContext<
  ComplianceVerificationContextValue | undefined
>(undefined);

export function useComplianceVerificationContext() {
  const context = useContext(ComplianceVerificationContext);
  if (!context) {
    throw new Error(
      "useComplianceVerificationContext must be used within a ComplianceVerificationProvider"
    );
  }
  return context;
}
