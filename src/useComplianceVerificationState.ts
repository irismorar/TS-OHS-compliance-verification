import { useCallback, useState } from "react";
import { RISK_FACTOR_COMBINATIONS } from "./RISK_FACTOR_COMBINATIONS_DICTIONARY";

export type QuestionItem = {
  isAnswerTrue: boolean;
  severity: 1 | 2 | 3 | 4;
  probability: 1 | 2 | 3 | 4;
  riskFactor: "EXTREM" | "MEDIU" | "SCĂZUT";
  priority: "MĂSURI IMEDIATE" | "MĂSURI PRIORITARE" | "MENȚINEREA MĂSURILOR";
};

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
  const [severity, setSeverity] = useState<QuestionItem["severity"] | 0>(0);
  const [probability, setProbability] = useState<
    QuestionItem["probability"] | 0
  >(0);
  // const [isAnswerTrue, setIsAnswerTrue] = useState(false);

  // const [questionItems, setQuestionItems] = useState<QuestionItem[]>([]);

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

  const getSeverity = useCallback((severityValue: QuestionItem["severity"]) => {
    setSeverity(severityValue);
  }, []);

  const getProbability = useCallback(
    (probabilityValue: QuestionItem["probability"]) => {
      setProbability(probabilityValue);
    },
    [],
  );

  const getRiskFactor = useCallback(
    (
      probabilityValue: QuestionItem["probability"],
      severityValue: QuestionItem["severity"],
    ) => {
      const match = RISK_FACTOR_COMBINATIONS.find((item) => {
        return (
          item.probability === probabilityValue &&
          item.severity === severityValue
        );
      });
      if (!match) {
        return;
      }
      return match.riskFactor;
    },
    [],
  );

  const getPriority = useCallback((riskFactor: QuestionItem["riskFactor"]) => {
    if (riskFactor === "SCĂZUT") {
      return "MENȚINEREA MĂSURILOR";
    }
    if (riskFactor === "MEDIU") {
      return "MĂSURI PRIORITARE";
    }
    if (riskFactor === "EXTREM") {
      return "MĂSURI IMEDIATE";
    }
  }, []);

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
    getSeverity,
    getProbability,
    getRiskFactor,
    getPriority,
    page,
    unitName,
    jName,
    registeredOfficeAdress,
    userInputForUnitName,
    userInputForJName,
    userInputForRegisteredOfficeAdress,
    severity,
    probability,
  };
}
