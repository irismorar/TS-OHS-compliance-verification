import "./App.css";
import { FormDocumentPage } from "./components/pages/FormDocumentPage";
import { HomePage } from "./components/pages/HomePage";
import { VerificationChecklistsPage } from "./components/pages/VerificationChecklistsPage";
import { WorkplaceChecklistPage } from "./components/pages/WorkplaceChecklistPage";
import { WorkshopChecklistPage } from "./components/pages/WorkshopChecklistPage";
import { useComplianceVerificationState } from "./useComplianceVerificationState";

export default function App() {
  const complianceVerificationData = useComplianceVerificationState();

  return (
    <main className="max-h-dvh select-none bg-linear-to-b from-slate-400 via-slate-400 to-slate-500 bg-fixed">
      <HomePage {...complianceVerificationData} />
      <VerificationChecklistsPage {...complianceVerificationData} />
      <WorkplaceChecklistPage {...complianceVerificationData} />
      <WorkshopChecklistPage {...complianceVerificationData} />
      <FormDocumentPage {...complianceVerificationData} />
    </main>
  );
}
