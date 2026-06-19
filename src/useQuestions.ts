import { useCallback, useState } from "react";

type Question = {
  questionText: string;
  questionAnswer: boolean | null;
  safetyMeasure: string;
  severity: 1 | 2 | 3 | 4 | null;
  probability: 1 | 2 | 3 | 4 | null;
  additionalNotes: string;
};

type QuestionCategory = {
  categoryName: string;
  questions: Question[];
};

export function useQuestions() {
  const [questionCategories, setQuestionCategories] = useState<
    QuestionCategory[]
  >([]);

  function initChecklistQuestions(checklistName: "workshop" | "workplace") {
    switch (checklistName) {
      case "workshop": {
        setQuestionCategories([]);
        break;
      }
      case "workplace": {
        setQuestionCategories([]);
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
          }
        }
        return updatedCategories;
      });
    },
    [],
  );

  const setQuestionSeverity = useCallback(
    (categoryIndex: number, questionIndex: number, severity: 1 | 2 | 3 | 4) => {
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
      probability: 1 | 2 | 3 | 4,
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

  return {
    questionCategories,

    initChecklistQuestions,

    setQuestionAnswer,
    setQuestionSeverity,
    setQuestionProbability,
    computeQuestionRiskFactor,
  };
}

const RISK_FACTOR_COMBINATIONS = [
  {
    probability: 1,
    severity: 1,
    riskFactor: "EXTREM",
  },
  {
    probability: 1,
    severity: 2,
    riskFactor: "EXTREM",
  },
  {
    probability: 1,
    severity: 3,
    riskFactor: "EXTREM",
  },
  {
    probability: 2,
    severity: 1,
    riskFactor: "EXTREM",
  },
  {
    probability: 2,
    severity: 2,
    riskFactor: "EXTREM",
  },
  {
    probability: 3,
    severity: 1,
    riskFactor: "EXTREM",
  },
  {
    probability: 1,
    severity: 4,
    riskFactor: "MEDIU",
  },
  {
    probability: 2,
    severity: 3,
    riskFactor: "MEDIU",
  },
  {
    probability: 2,
    severity: 4,
    riskFactor: "MEDIU",
  },
  {
    probability: 3,
    severity: 2,
    riskFactor: "MEDIU",
  },
  {
    probability: 3,
    severity: 3,
    riskFactor: "MEDIU",
  },
  {
    probability: 4,
    severity: 1,
    riskFactor: "MEDIU",
  },
  {
    probability: 4,
    severity: 2,
    riskFactor: "MEDIU",
  },
  {
    probability: 3,
    severity: 4,
    riskFactor: "SCĂZUT",
  },
  {
    probability: 4,
    severity: 3,
    riskFactor: "SCĂZUT",
  },
  {
    probability: 4,
    severity: 4,
    riskFactor: "SCĂZUT",
  },
] as const;
