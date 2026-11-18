import "./App.css";
import { StartAppPage } from "./components/pages/StartAppPage";
import { HomePage } from "./components/pages/HomePage";
import { VerificationChecklistsPage } from "./components/pages/VerificationChecklistsPage";
import { WorkplaceChecklistPage } from "./components/pages/WorkplaceChecklistPage";
import { WorkshopChecklistPage } from "./components/pages/WorkshopChecklistPage";
import { InternalAuditChecklistPage } from "./components/pages/InternalAuditChecklistPage";
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
import { OfficeChecklistPage } from "./components/pages/OfficeChecklistPage";
import { OfficeEquipmentChecklistPage } from "./components/pages/OfficeEquipmentChecklistPage";
import { HazardousAreasChecklistPage } from "./components/pages/HazardousAreasChecklistPage";
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
import { FormDocumentPage } from "./components/pages/FormDocumentPage";
import { Link, Route, Routes } from "react-router";
import { ChecklistPageLayout } from "./components/ChecklistPageLayout/ChecklistPageLayout";

export default function App() {
  return (
    <main className="min-h-dvh select-none bg-fixed bg-[linear-gradient(to_bottom,#c4d8f0_0%,#96b9e6_25%,#6798d8_50%,#386eb8_75%,#173f76_100%)]">
      <Routes>
        <Route index element={<StartAppPage />} />
        <Route path="informatii-unitate-verificata" element={<HomePage />} />
        <Route
          path="informatii-verificare-curenta"
          element={
            <section>
              <h1>Informații unitate verificată</h1>
              <p>
                Introduceți datele de identificare pentru a începe verificarea.
              </p>
              <em className="font-semibold">
                Toate câmpurile sunt obligatorii.
              </em>
              <Link to="/verificari">Către lista de verificări</Link>
            </section>
          }
        />
        <Route path="verificari">
          <Route index element={<VerificationChecklistsPage />} />
          <Route element={<ChecklistPageLayout />}>
            <Route path="atelier" element={<WorkshopChecklistPage />} />
            <Route
              path="audit-intern"
              element={<InternalAuditChecklistPage />}
            />
            <Route
              path="audit-manipulare-manuala-a-sarcinilor"
              element={<ManualHandlingOfLoadsAuditChecklistPage />}
            ></Route>
            <Route
              path="birotica"
              element={<OfficeEquipmentChecklistPage />}
            ></Route>
            <Route path="birouri" element={<OfficeChecklistPage />} />
            <Route path="electrice" element={<ElectricalChecklistPage />} />
            <Route
              path="echipament-individual-de-munca"
              element={<WorkEquipmentChecklistPage />}
            />
            <Route path="loto" element={<LotoChecklistPage />} />
            <Route path="loc-de-munca" element={<WorkplaceChecklistPage />} />
            <Route
              path="lucru-la-inaltime"
              element={<WorkAtHeightChecklistPage />}
            />
            <Route
              path="lucru-pe-scari"
              element={<WorkUsingLaddersChecklistPage />}
            />
            <Route
              path="manipulare-sarcini-folosind-transpaleta-cu-catarg"
              element={<LoadHandlingUsingStackerTruckChecklistPage />}
            />
            <Route
              path="manipulare-sarcini-folosind-transpaleta-mecanica"
              element={<LoadHandlingUsingManualPalletTruckChecklistPage />}
            />
            <Route path="mentenanta" element={<MaintenanceChecklistPage />} />
            <Route
              path="rafturi-metalice"
              element={<MetalRackingChecklistPage />}
            />
            <Route
              path="spatii-administrative"
              element={<AdministrativeAreasChecklistPage />}
            />
            <Route
              path="substante-chimice"
              element={<ChemicalSubstanceChecklistPage />}
            />
            <Route
              path="zone-periculoase"
              element={<HazardousAreasChecklistPage />}
            />
            <Route
              path="risc-specific-agenti-biologici"
              element={<BiologicalAgentsChecklistPage />}
            />
            <Route
              path="risc-specific-agenti-cancerigeni"
              element={<CancerousAgentsChecklistPage />}
            />
            <Route
              path="risc-specific-agenti-chimici"
              element={<ChemicalAgentsChecklistPage />}
            />
            <Route
              path="risc-specific-atmosfera-exploziva"
              element={<AtexChecklistPage />}
            />
            <Route
              path="risc-specific-azbest"
              element={<AsbestosChecklistPage />}
            />
            <Route
              path="risc-specific-campuri-electromagnetice"
              element={<ElectromagneticFieldsChecklistPage />}
            />
            <Route
              path="risc-specific-manipulare-manuala-a-maselor"
              element={<ManualHandlingChecklistPage />}
            />
            <Route
              path="risc-specific-obiecte-ascutite"
              element={<SharpToolsChecklistPage />}
            />
            <Route
              path="risc-specific-radiatii-optice-artificiale"
              element={<OpticalRadiationChecklistPage />}
            />
            <Route
              path="risc-specific-temperaturi-extreme"
              element={<ExtremeTemperaturesChecklistPage />}
            />
            <Route
              path="risc-specific-vibratii"
              element={<VibrationChecklistPage />}
            />
            <Route
              path="risc-specific-zgomot"
              element={<NoiseChecklistPage />}
            />
          </Route>
        </Route>
        <Route path="raport-verificare" element={<FormDocumentPage />} />
      </Routes>
    </main>
  );
}
