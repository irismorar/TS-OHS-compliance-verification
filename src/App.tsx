import "./App.css";
import { HomePage } from "./HomePage";
import { VerificationChecklistsPage } from "./VerificationChecklistsPage";
import { useComplianceVerificationState } from "./useComplianceVerificationState";

export default function App() {
  const complianceVerificationData = useComplianceVerificationState();

  return (
    <section className="max-h-dvh select-none">
      <HomePage {...complianceVerificationData} />
      <VerificationChecklistsPage {...complianceVerificationData} />
    </section>
  );
}
