import "./App.css";
import { BiologicalAgentsChecklistPage } from "./components/pages/BiologicalAgentsChecklistPage";
import { CancerousAgentsChecklistPage } from "./components/pages/CancerousAgentsChecklistPage";
import { ChemicalAgentsChecklistPage } from "./components/pages/ChemicalAgentsChecklistPage";
import { AtexChecklistPage } from "./components/pages/AtexChecklistPage";
import { AsbestosChecklistPage } from "./components/pages/AsbestosChecklistPage";
import { ElectromagneticFieldsChecklistPage } from "./components/pages/ElectromagneticFieldsCkecklistPage";
import { ManualHandlingChecklistPage } from "./components/pages/ManualHandlingChecklistPage";
import { SharpToolsChecklistPage } from "./components/pages/SharpToolsChecklistPage";
import { OpticalRadiationChecklistPage } from "./components/pages/OpticalRadiationChecklistPage";

import { FormDocumentPage } from "./components/pages/FormDocumentPage";
import { HomePage } from "./components/pages/HomePage";
import { VerificationChecklistsPage } from "./components/pages/VerificationChecklistsPage";
import { WorkplaceChecklistPage } from "./components/pages/WorkplaceChecklistPage";
import { WorkshopChecklistPage } from "./components/pages/WorkshopChecklistPage";
import { useComplianceVerificationState } from "./useComplianceVerificationState";

export default function App() {
  const complianceVerificationData = useComplianceVerificationState();

  return (
    <main className="max-h-dvh select-none">
      <HomePage {...complianceVerificationData} />
      <VerificationChecklistsPage {...complianceVerificationData} />
      <WorkplaceChecklistPage {...complianceVerificationData} />
      <WorkshopChecklistPage {...complianceVerificationData} />
      <BiologicalAgentsChecklistPage {...complianceVerificationData} />
      <CancerousAgentsChecklistPage {...complianceVerificationData} />
      <ChemicalAgentsChecklistPage {...complianceVerificationData} />
      <AtexChecklistPage {...complianceVerificationData} />
      <AsbestosChecklistPage {...complianceVerificationData} />
      <ElectromagneticFieldsChecklistPage {...complianceVerificationData} />
      <ManualHandlingChecklistPage {...complianceVerificationData} />
      <SharpToolsChecklistPage {...complianceVerificationData} />
      <OpticalRadiationChecklistPage {...complianceVerificationData} />

      <FormDocumentPage {...complianceVerificationData} />
    </main>
  );
}
