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
import { ExtremeTemperaturesChecklistPage } from "./components/pages/ExtremeTemperaturesChecklistPage";
import { VibrationChecklistPage } from "./components/pages/VibrationChecklistPage";
import { NoiseChecklistPage } from "./components/pages/NoiseChecklistPage";
import { InternalAuditChecklistPage } from "./components/pages/InternalAuditChecklistPage";

import { FormDocumentPage } from "./components/pages/FormDocumentPage";
import { HomePage } from "./components/pages/HomePage";
import { VerificationChecklistsPage } from "./components/pages/VerificationChecklistsPage";
import { WorkplaceChecklistPage } from "./components/pages/WorkplaceChecklistPage";
import { WorkshopChecklistPage } from "./components/pages/WorkshopChecklistPage";
import { useComplianceVerificationState } from "./useComplianceVerificationState";
import { MaintenanceChecklistPage } from "./components/pages/MaintenanceChecklistPage";
import { ManualHandlingOfLoadsAuditChecklistPage } from "./components/pages/ManualHandlingOfLoadsAudit";
import { WorkEquipmentChecklistPage } from "./components/pages/WorkEquipmentChecklistPage";
import { LoadHandlingUsingStackerTruckChecklistPage } from "./components/pages/LoadHandlingUsingStackerTruckChecklistPage";
import { LotoChecklistPage } from "./components/pages/LotoChecklistPage";
import { LoadHandlingUsingManualPalletTruckChecklistPage } from "./components/pages/LoadHandlingUsingManualPalletTruckChecklistPage";
import { ElectricalChecklistPage } from "./components/pages/ElectricalChecklistPage";
import { WorkAtHeightChecklistPage } from "./components/pages/WorkAtHeightChecklistPage";
import { WorkUsingLaddersChecklistPage } from "./components/pages/WorkUsingLaddersChecklistPage";
import { MetalRackingChecklistPage } from "./components/pages/MetalRackingChecklistPage";
import { ChemicalSubstanceChecklistPage } from "./components/pages/ChemicalSubstanceChecklistPage";
import { AdministrativeAreasChecklistPage } from "./components/pages/AdministrativeAreasChecklistPage";

export default function App() {
  const complianceVerificationData = useComplianceVerificationState();

  return (
    <main className="max-h-dvh select-none">
      <HomePage {...complianceVerificationData} />
      <VerificationChecklistsPage {...complianceVerificationData} />
      <WorkplaceChecklistPage {...complianceVerificationData} />
      <WorkshopChecklistPage {...complianceVerificationData} />
      <InternalAuditChecklistPage {...complianceVerificationData} />
      <MaintenanceChecklistPage {...complianceVerificationData} />
      <ManualHandlingOfLoadsAuditChecklistPage
        {...complianceVerificationData}
      />
      <WorkEquipmentChecklistPage {...complianceVerificationData} />
      <LoadHandlingUsingStackerTruckChecklistPage
        {...complianceVerificationData}
      />
      <LotoChecklistPage {...complianceVerificationData} />
      <LoadHandlingUsingManualPalletTruckChecklistPage
        {...complianceVerificationData}
      />
      <ElectricalChecklistPage {...complianceVerificationData} />
      <WorkAtHeightChecklistPage {...complianceVerificationData} />
      <WorkUsingLaddersChecklistPage {...complianceVerificationData} />
      <MetalRackingChecklistPage {...complianceVerificationData} />
      <ChemicalSubstanceChecklistPage {...complianceVerificationData} />
      <AdministrativeAreasChecklistPage {...complianceVerificationData} />

      <BiologicalAgentsChecklistPage {...complianceVerificationData} />
      <CancerousAgentsChecklistPage {...complianceVerificationData} />
      <ChemicalAgentsChecklistPage {...complianceVerificationData} />
      <AtexChecklistPage {...complianceVerificationData} />
      <AsbestosChecklistPage {...complianceVerificationData} />
      <ElectromagneticFieldsChecklistPage {...complianceVerificationData} />
      <ManualHandlingChecklistPage {...complianceVerificationData} />
      <SharpToolsChecklistPage {...complianceVerificationData} />
      <OpticalRadiationChecklistPage {...complianceVerificationData} />
      <ExtremeTemperaturesChecklistPage {...complianceVerificationData} />
      <VibrationChecklistPage {...complianceVerificationData} />
      <NoiseChecklistPage {...complianceVerificationData} />
      <FormDocumentPage {...complianceVerificationData} />
    </main>
  );
}
