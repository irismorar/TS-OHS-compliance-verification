import { useState } from "react";

export function useCurrentRoute() {
  const [currentRoute, setCurrentRoute] = useState<
    | "home"
    | "verificationChecklists"
    | "workshopChecklist"
    | "workplaceChecklist"
    | "biologicalAgentsChecklist"
    | "cancerousAgentsChecklist"
    | "chemicalAgentsChecklist"
    | "atexChecklist"
    | "asbestosChecklist"
    | "finalDocument"
  >("home");

  const setVerificationChecklistsPage = () => {
    setCurrentRoute("verificationChecklists");
  };

  const setWorkshopChecklistPage = () => {
    setCurrentRoute("workshopChecklist");
  };

  const setWorkplaceChecklistPage = () => {
    setCurrentRoute("workplaceChecklist");
  };

  const setBiologicalAgentsChecklistPage = () => {
    setCurrentRoute("biologicalAgentsChecklist");
  };

  const setCancerousAgentsChecklistPage = () => {
    setCurrentRoute("cancerousAgentsChecklist");
  };

  const setChemicalAgentsChecklistPage = () => {
    setCurrentRoute("chemicalAgentsChecklist");
  };

  const setAtexChecklistPage = () => {
    setCurrentRoute("atexChecklist");
  };

  const setAsbestosCkecklistPage = () => {
    setCurrentRoute("asbestosChecklist");
  };

  const setDocumentPage = () => {
    setCurrentRoute("finalDocument");
  };

  return {
    currentRoute,
    setVerificationChecklistsPage,
    setWorkshopChecklistPage,
    setWorkplaceChecklistPage,
    setBiologicalAgentsChecklistPage,
    setCancerousAgentsChecklistPage,
    setChemicalAgentsChecklistPage,
    setAtexChecklistPage,
    setAsbestosCkecklistPage,
    setDocumentPage,
  };
}
