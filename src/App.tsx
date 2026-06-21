import "./App.css";
import { HomePage } from "./pages/HomePage";
import { VerificationChecklistsPage } from "./pages/VerificationChecklistsPage";
import { WorkplaceChecklistPage } from "./pages/WorkplaceChecklistPage";
import { useComplianceVerificationState } from "./useComplianceVerificationState";

export default function App() {
  const complianceVerificationData = useComplianceVerificationState();

  return (
    <section className="max-h-dvh select-none">
      <HomePage {...complianceVerificationData} />
      <VerificationChecklistsPage {...complianceVerificationData} />
      <WorkplaceChecklistPage {...complianceVerificationData} />
    </section>
  );
}
