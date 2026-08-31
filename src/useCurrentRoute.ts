import { useState } from "react";

export function useCurrentRoute() {
  const [currentRoute, setCurrentRoute] = useState<
    | "home"
    | "verificationChecklists"
    | "workshopChecklist"
    | "workplaceChecklist"
    | "biologicalAgentsChecklist"
    | "cancerousAgentsChecklist"
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
    setDocumentPage,
  };
}
