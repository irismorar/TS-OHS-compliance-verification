import { useCallback, useRef, useState } from "react";
import { RISK_FACTOR_COMBINATIONS } from "./data/RISK_FACTOR_COMBINATIONS";
import { WORKPLACE_QUESTION_DATA } from "./data/WORKPLACE_QUESTION_DATA";
import { WORKSHOP_QUESTION_DATA } from "./data/WORKSHOP_QUESTION_DATA";
import { BIOLOGICAL_AGENTS_QUESTION_DATA } from "./data/BIOLOGICAL_AGENTS_QUESTION_DATA";
import { CANCEROUS_AGENTS_QUESTION_DATA } from "./data/CANCEROUS_AGENTS_QUESTION_DATA";
import { CHEMICAL_AGENTS_QUESTION_DATA } from "./data/CHEMICAL_AGENTS_QUESTION_DATA";
import { ATEX_QUESTION_DATA } from "./data/ATEX_QUESTION_DATA";
import { ASBESTOS_QUESTION_DATA } from "./data/ASBESTOS_QUESTION_DATA";
import { ELECTROMAGNETIC_FIELDS_QUESTION_DATA } from "./data/ELECTROMAGNETIC_FIELDS_QUESTION_DATA";
import { MANUAL_HANDLING_QUESTION_DATA } from "./data/MANUAL_HANDLING_QUESTION_DATA";
import { SHARP_TOOLS_QUESTION_DATA } from "./data/SHARP_TOOLS_QUESTION_DATA";
import { OPTICAL_RADIATION_QUESTION_DATA } from "./data/OPTICAL_RADIATION_QUESTION_DATA";
import { EXTREME_TEMPERATURES_QUESTION_DATA } from "./data/EXTREME_TEMPERATURES_QUESTION_DATA";
import { VIBRATION_QUESTION_DATA } from "./data/VIBRATION_QUESTION_DATA";
import { NOISE_QUESTION_DATA } from "./data/NOISE_QUESTION_DATA";
import { INTERNAL_AUDIT_QUESTION_DATA } from "./data/INTERNAL_AUDIT_DATA";
import { MAINTENANCE_QUESTION_DATA } from "./data/MAINTENANCE_QUESTION_DATA";
import { MANUAL_HANDLING_OF_LOADS_AUDIT_QUESTION_DATA } from "./data/MANUAL_HANDLING_OF_LOADS_AUDIT_QUESTION_DATA";
import { WORK_EQUIPMENT_QUESTION_DATA } from "./data/WORK_EQUIPMENT_QUESTION_DATA";
import { LOAD_HANDLING_USING_STACKER_TRUCK_QUESTION_DATA } from "./data/LOAD_HANDLING_USING_STACKER_TRUCK_QUESTION_DATA";
import { LOTO_QUESTION_DATA } from "./data/LOTO_QUESTION_DATA";
import { LOAD_HANDLING_USING_MANUAL_PALLET_TRUCK_QUESTION_DATA } from "./data/LOAD_HANDLING_USSING_MANUAL_PALLET_TRUCK_QUESTION_DATA";
import { ELECTRICAL_QUESTION_DATA } from "./data/ELECTRICAL_QUESTION_DATA";
import { WORK_AT_HEIGHT_QUESTION_DATA } from "./data/WORK_AT_HIGHT_QUESTION_DATA";
import { WORK_USING_LADDERS_QUESTION_DATA } from "./data/WORK_USING_LADDERS";
import { METAL_RACKING_QUESTION_DATA } from "./data/METAL_RACKING_QUESTION_DATA";
import { CHEMICAL_SUBSTANCE_QUESTION_DATA } from "./data/CHEMICAL_SUBSTANCE_QUESTION_DATA";
import { ADMINISTRATIVE_AREAS_QUESTION_DATA } from "./data/ADMINISTRATIVE_AREAS_QUESTION_DATA";
import { OFFICE_QUESTION_DATA } from "./data/OFFICE_QUESTION_DATA";
import { OFFICE_EQUIPMENT_QUESTION_DATA } from "./data/OFFICE_EQUIPMENT_QUESTION_DATA";
import { HAZARDOUS_AREAS_QUESTION_DATA } from "./data/HAZARDOUS_AREAS_QUESTION_DATA";

type Question = {
  questionText: string;
  questionAnswer: boolean | null;
  safetyMeasure: string;
  severity: 1 | 2 | 3 | 4 | null;
  probability: 1 | 2 | 3 | 4 | null;
  additionalNotes: string;
};

export type QuestionCategory = {
  categoryName: string;
  questions: Question[];
};

export type QuestionData = {
  categoryName: string;
  questions: {
    questionText: string;
    safetyMeasure: string;
  }[];
}[];

export function useQuestions() {
  const [questionCategories, setQuestionCategories] = useState<
    QuestionCategory[]
  >([]);

  const firstUnansweredQuestionRef = useRef<HTMLDivElement | null>(null);

  const firstUnansweredQuestionCategoryIndex = questionCategories.findIndex(
    (category) => {
      return category.questions.some((question) => {
        return (
          question.questionAnswer === null ||
          question.severity === null ||
          question.probability === null
        );
      });
    },
  );

  const firstUnansweredQuestionIndex =
    firstUnansweredQuestionCategoryIndex !== -1
      ? questionCategories[
          firstUnansweredQuestionCategoryIndex
        ].questions.findIndex((question) => {
          return (
            question.questionAnswer === null ||
            question.severity === null ||
            question.probability === null
          );
        })
      : -1;

  const areAllQuestionsAnswered = firstUnansweredQuestionCategoryIndex === -1;

  function initChecklistQuestions(
    checklistName:
      | "workshop"
      | "workplace"
      | "biologicalAgents"
      | "cancerousAgents"
      | "chemicalAgents"
      | "atex"
      | "electromagneticFields"
      | "asbestos"
      | "manualHandling"
      | "sharpTools"
      | "opticalRadiation"
      | "extremeTemperatures"
      | "vibration"
      | "noise"
      | "internalAudit"
      | "maintenance"
      | "manualHandlingOfLoadsAudit"
      | "workEquipment"
      | "loadHandlingUsingStackerTruck"
      | "loto"
      | "loadHandlingUsingManualPalletTruck"
      | "electrical"
      | "workAtHeight"
      | "workUsingLadders"
      | "metalRacking"
      | "chemicalSubstance"
      | "administrativeAreas"
      | "office"
      | "officeEquipment"
      | "hazardousAreas",
  ) {
    switch (checklistName) {
      case "workshop": {
        setQuestionCategories(stateifyQuestionData(WORKSHOP_QUESTION_DATA));
        break;
      }
      case "workplace": {
        setQuestionCategories(stateifyQuestionData(WORKPLACE_QUESTION_DATA));
        break;
      }
      case "biologicalAgents": {
        setQuestionCategories(
          stateifyQuestionData(BIOLOGICAL_AGENTS_QUESTION_DATA),
        );
        break;
      }
      case "cancerousAgents": {
        setQuestionCategories(
          stateifyQuestionData(CANCEROUS_AGENTS_QUESTION_DATA),
        );
        break;
      }
      case "chemicalAgents": {
        setQuestionCategories(
          stateifyQuestionData(CHEMICAL_AGENTS_QUESTION_DATA),
        );
        break;
      }
      case "atex": {
        setQuestionCategories(stateifyQuestionData(ATEX_QUESTION_DATA));
        break;
      }
      case "asbestos": {
        setQuestionCategories(stateifyQuestionData(ASBESTOS_QUESTION_DATA));
        break;
      }
      case "electromagneticFields": {
        setQuestionCategories(
          stateifyQuestionData(ELECTROMAGNETIC_FIELDS_QUESTION_DATA),
        );
        break;
      }
      case "manualHandling": {
        setQuestionCategories(
          stateifyQuestionData(MANUAL_HANDLING_QUESTION_DATA),
        );
        break;
      }
      case "sharpTools": {
        setQuestionCategories(stateifyQuestionData(SHARP_TOOLS_QUESTION_DATA));
        break;
      }
      case "opticalRadiation": {
        setQuestionCategories(
          stateifyQuestionData(OPTICAL_RADIATION_QUESTION_DATA),
        );
        break;
      }
      case "extremeTemperatures": {
        setQuestionCategories(
          stateifyQuestionData(EXTREME_TEMPERATURES_QUESTION_DATA),
        );
        break;
      }
      case "vibration": {
        setQuestionCategories(stateifyQuestionData(VIBRATION_QUESTION_DATA));
        break;
      }
      case "noise": {
        setQuestionCategories(stateifyQuestionData(NOISE_QUESTION_DATA));
        break;
      }
      case "internalAudit": {
        setQuestionCategories(
          stateifyQuestionData(INTERNAL_AUDIT_QUESTION_DATA),
        );
        break;
      }
      case "maintenance": {
        setQuestionCategories(stateifyQuestionData(MAINTENANCE_QUESTION_DATA));
        break;
      }
      case "manualHandlingOfLoadsAudit": {
        setQuestionCategories(
          stateifyQuestionData(MANUAL_HANDLING_OF_LOADS_AUDIT_QUESTION_DATA),
        );
        break;
      }
      case "workEquipment": {
        setQuestionCategories(
          stateifyQuestionData(WORK_EQUIPMENT_QUESTION_DATA),
        );
        break;
      }
      case "loadHandlingUsingStackerTruck": {
        setQuestionCategories(
          stateifyQuestionData(LOAD_HANDLING_USING_STACKER_TRUCK_QUESTION_DATA),
        );
        break;
      }
      case "loto": {
        setQuestionCategories(stateifyQuestionData(LOTO_QUESTION_DATA));
        break;
      }
      case "loadHandlingUsingManualPalletTruck": {
        setQuestionCategories(
          stateifyQuestionData(
            LOAD_HANDLING_USING_MANUAL_PALLET_TRUCK_QUESTION_DATA,
          ),
        );
        break;
      }
      case "electrical": {
        setQuestionCategories(stateifyQuestionData(ELECTRICAL_QUESTION_DATA));
        break;
      }
      case "workAtHeight": {
        setQuestionCategories(
          stateifyQuestionData(WORK_AT_HEIGHT_QUESTION_DATA),
        );
        break;
      }
      case "workUsingLadders": {
        setQuestionCategories(
          stateifyQuestionData(WORK_USING_LADDERS_QUESTION_DATA),
        );
        break;
      }
      case "metalRacking": {
        setQuestionCategories(
          stateifyQuestionData(METAL_RACKING_QUESTION_DATA),
        );
        break;
      }
      case "chemicalSubstance": {
        setQuestionCategories(
          stateifyQuestionData(CHEMICAL_SUBSTANCE_QUESTION_DATA),
        );
        break;
      }
      case "administrativeAreas": {
        setQuestionCategories(
          stateifyQuestionData(ADMINISTRATIVE_AREAS_QUESTION_DATA),
        );
        break;
      }
      case "office": {
        setQuestionCategories(stateifyQuestionData(OFFICE_QUESTION_DATA));
        break;
      }
      case "officeEquipment": {
        setQuestionCategories(
          stateifyQuestionData(OFFICE_EQUIPMENT_QUESTION_DATA),
        );
        break;
      }
      case "hazardousAreas": {
        setQuestionCategories(
          stateifyQuestionData(HAZARDOUS_AREAS_QUESTION_DATA),
        );
        break;
      }
    }
  }

  const setQuestionAnswer = useCallback(
    (categoryIndex: number, questionIndex: number, answer: boolean) => {
      setQuestionCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        const category = updatedCategories[categoryIndex];
        if (category) {
          const question = category.questions[questionIndex];
          if (question) {
            question.questionAnswer = answer;
            question.severity = null;
            question.probability = null;
            question.additionalNotes = "";
          }
        }
        return updatedCategories;
      });
    },
    [],
  );

  const setQuestionSeverity = useCallback(
    (
      categoryIndex: number,
      questionIndex: number,
      severity: 1 | 2 | 3 | 4 | null,
    ) => {
      setQuestionCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        const category = updatedCategories[categoryIndex];
        if (category) {
          const question = category.questions[questionIndex];
          if (question) {
            question.severity = severity;
          }
        }
        return updatedCategories;
      });
    },
    [],
  );

  const setQuestionProbability = useCallback(
    (
      categoryIndex: number,
      questionIndex: number,
      probability: 1 | 2 | 3 | 4 | null,
    ) => {
      setQuestionCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        const category = updatedCategories[categoryIndex];
        if (category) {
          const question = category.questions[questionIndex];
          if (question) {
            question.probability = probability;
          }
        }
        return updatedCategories;
      });
    },
    [],
  );

  const setQuestionAdditionalNotes = useCallback(
    (categoryIndex: number, questionIndex: number, additionalNotes: string) => {
      setQuestionCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        const category = updatedCategories[categoryIndex];
        if (category) {
          const question = category.questions[questionIndex];
          if (question) {
            question.additionalNotes = additionalNotes;
          }
        }
        return updatedCategories;
      });
    },
    [],
  );

  const computeQuestionRiskFactor = useCallback(
    (categoryIndex: number, questionIndex: number) => {
      const category = questionCategories[categoryIndex];
      if (category) {
        const question = category.questions[questionIndex];
        if (
          question &&
          question.severity !== null &&
          question.probability !== null
        ) {
          const combination = RISK_FACTOR_COMBINATIONS.find(
            (item) =>
              item.severity === question.severity &&
              item.probability === question.probability,
          );
          return combination ? combination.riskFactor : null;
        }
      }
      return null;
    },
    [questionCategories],
  );

  const computeRiskTotals = useCallback(() => {
    let totalCriticalRisks = 0;
    let totalMediumRisks = 0;
    let totalLowRisks = 0;

    questionCategories.forEach((category) => {
      category.questions.forEach((question) => {
        if (question.severity === null || question.probability === null) {
          return;
        }
        const combination = RISK_FACTOR_COMBINATIONS.find(
          (item) =>
            item.severity === question.severity &&
            item.probability === question.probability,
        );
        if (combination?.riskFactor === "CRITIC") {
          totalCriticalRisks++;
        } else if (combination?.riskFactor === "MEDIU") {
          totalMediumRisks++;
        } else if (combination?.riskFactor === "SCĂZUT") {
          totalLowRisks++;
        }
      });
    });

    return { totalCriticalRisks, totalMediumRisks, totalLowRisks };
  }, [questionCategories]);

  return {
    questionCategories,
    firstUnansweredQuestionCategoryIndex,
    firstUnansweredQuestionIndex,
    areAllQuestionsAnswered,
    firstUnansweredQuestionRef,

    initChecklistQuestions,

    setQuestionAnswer,
    setQuestionSeverity,
    setQuestionProbability,
    setQuestionAdditionalNotes,
    computeQuestionRiskFactor,
    computeRiskTotals,
  };
}

function stateifyQuestionData(questionData: QuestionData) {
  return questionData.map((category) => ({
    categoryName: category.categoryName,
    questions: category.questions.map((question) => ({
      questionText: question.questionText,
      questionAnswer: null,
      safetyMeasure: question.safetyMeasure,
      severity: null,
      probability: null,
      additionalNotes: "",
    })),
  }));
}
