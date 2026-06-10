import { useCallback, useState } from "react";

export function useComplianceVerificationState() {
  const [page, setPage] = useState<
    | "homePage"
    | "listsPage"
    | "workplaceFormPage"
    | "workshopFormPage"
    | "generalQuestionsPage"
  >("homePage");
  const [unitName, setUnitName] = useState("");
  const [jName, setJName] = useState("");
  const [registeredOfficeAdress, setRegisteredOfficeAdress] = useState("");
  const [userInputForUnitName, setUserInputForUnitName] = useState("");
  const [userInputForJName, setUserInputForJName] = useState("");
  const [
    userInputForRegisteredOfficeAdress,
    setUserInputForRegisteredOfficeAdress,
  ] = useState("");

  const changeUserInputForUnitName = useCallback((newText: string) => {
    setUserInputForUnitName(newText);
  }, []);

  const createUnitName = useCallback((newText: string) => {
    setUnitName(newText.trim());
  }, []);

  const changeUserInputForJName = useCallback((newText: string) => {
    setUserInputForJName(newText.trim());
  }, []);

  const createJName = useCallback((newText: string) => {
    setJName(newText.trim());
  }, []);

  const changeUserInputForRegisteredOfficeAdress = useCallback(
    (newText: string) => {
      setUserInputForRegisteredOfficeAdress(newText);
    },
    [],
  );

  const createRegisteredOfficeAdress = useCallback((newText: string) => {
    setRegisteredOfficeAdress(newText);
  }, []);

  const getListsPage = () => {
    setPage("listsPage");
  };

  const getWorkplaceFormPage = () => {
    setPage("workplaceFormPage");
  };

  const getWorkshopFormPage = () => {
    setPage("workshopFormPage");
  };

  const getGeneralQuestionsPage = () => {
    setPage("generalQuestionsPage");
  };

  console.log(unitName);
  console.log(jName);
  console.log(registeredOfficeAdress);

  return {
    changeUserInputForUnitName,
    changeUserInputForJName,
    changeUserInputForRegisteredOfficeAdress,
    createUnitName,
    createJName,
    createRegisteredOfficeAdress,
    getListsPage,
    getWorkplaceFormPage,
    getWorkshopFormPage,
    getGeneralQuestionsPage,
    page,
    userInputForUnitName,
    userInputForJName,
    userInputForRegisteredOfficeAdress,
  };
}
