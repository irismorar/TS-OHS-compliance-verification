import type { ReactNode } from "react";
import { ComplianceVerificationContext } from "./ComplianceVerificationContext";
import { useComplianceVerificationState } from "./useComplianceVerificationState";

type Props = {
  children: ReactNode;
};

export function ComplianceVerificationProvider({ children }: Props) {
  const complianceVerificationState = useComplianceVerificationState();

  return (
    <ComplianceVerificationContext.Provider value={complianceVerificationState}>
      {children}
    </ComplianceVerificationContext.Provider>
  );
}
