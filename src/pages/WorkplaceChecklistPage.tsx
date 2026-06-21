import { QUESTION_DEFAULT_ANSWER } from "../data/QUESTION_DEFAULT_ANSWER";
import type { useComplianceVerificationState } from "../useComplianceVerificationState";

type Props = ReturnType<typeof useComplianceVerificationState>;

export function WorkplaceChecklistPage({
  currentRoute,
  questionCategories,
  setQuestionAnswer,
  setQuestionSeverity,
  setQuestionProbability,
  setQuestionAdditionalNotes,
  computeQuestionRiskFactor,
}: Props) {
  if (currentRoute !== "workplaceChecklist") {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-150">
      <section className="w-full max-w-4xl rounded-3xl bg-slate-200 p-10 shadow-xl select-none">
        {questionCategories.map((category, categoryIndex) => {
          const { categoryName, questions } = category;

          return (
            <section key={categoryIndex} className="mt-10">
              <h2 className="text-xl font-bold">{categoryName}</h2>
              {questions.map((question, questionIndex) => {
                const {
                  questionText,
                  questionAnswer,
                  safetyMeasure,
                  severity,
                  probability,
                  additionalNotes,
                } = question;

                const riskFactor = computeQuestionRiskFactor(
                  categoryIndex,
                  questionIndex,
                );

                const getRiskFactorColorClass = (
                  risk: "EXTREM" | "MEDIU" | "SCĂZUT" | null,
                ): string => {
                  switch (risk) {
                    case "SCĂZUT":
                      return "text-green-500";
                    case "MEDIU":
                      return "text-yellow-500";
                    case "EXTREM":
                      return "text-red-500";
                    default:
                      return "";
                  }
                };

                const riskFactorColorClass =
                  getRiskFactorColorClass(riskFactor);

                const getMeasuresPriorityLevel = (
                  risk: "EXTREM" | "MEDIU" | "SCĂZUT" | null,
                ): string | null => {
                  switch (risk) {
                    case "SCĂZUT":
                      return "Menținerea măsurilor";
                    case "MEDIU":
                      return "Măsuri prioritare";
                    case "EXTREM":
                      return "Măsuri imediate";
                    default:
                      return null;
                  }
                };

                const measuresPriorityLevel =
                  getMeasuresPriorityLevel(riskFactor);

                return (
                  <div
                    key={questionIndex}
                    className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                  >
                    {/* QUESTION TEXT AND YES/NO BUTTONS */}
                    <div className="flex items-center gap-4">
                      <p className="flex-1 text-lg font-semibold text-slate-900">
                        {questionText}
                      </p>
                      <div className="w-32 flex gap-1">
                        <button
                          className={`flex-1 uppercase font-semibold text-white rounded-lg py-2 ${questionAnswer === true ? "bg-green-500" : "bg-gray-300"}`}
                          onClick={() =>
                            setQuestionAnswer(
                              categoryIndex,
                              questionIndex,
                              true,
                            )
                          }
                        >
                          da
                        </button>
                        <button
                          className={`flex-1 uppercase font-semibold text-white rounded-lg py-2 ${questionAnswer === false ? "bg-red-500" : "bg-gray-300"}`}
                          onClick={() =>
                            setQuestionAnswer(
                              categoryIndex,
                              questionIndex,
                              false,
                            )
                          }
                        >
                          nu
                        </button>
                      </div>
                    </div>

                    {questionAnswer !== null && (
                      <>
                        {/* QUESTION RISK ASSESSMENT */}
                        <div className="mt-4 flex items-center gap-4">
                          <div className="w-48">
                            <label
                              htmlFor={`severity-${categoryIndex}-${questionIndex}`}
                            >
                              Gravitate:
                            </label>
                            <select
                              id={`severity-${categoryIndex}-${questionIndex}`}
                              value={severity ?? ""}
                              onChange={(e) =>
                                setQuestionSeverity(
                                  categoryIndex,
                                  questionIndex,
                                  e.target.value
                                    ? (Number(e.target.value) as 1 | 2 | 3 | 4)
                                    : null,
                                )
                              }
                            >
                              <option value=""></option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                          <div className="w-48">
                            <label
                              htmlFor={`probability-${categoryIndex}-${questionIndex}`}
                            >
                              Probabilitate:
                            </label>
                            <select
                              id={`probability-${categoryIndex}-${questionIndex}`}
                              value={probability ?? ""}
                              onChange={(e) =>
                                setQuestionProbability(
                                  categoryIndex,
                                  questionIndex,
                                  e.target.value
                                    ? (Number(e.target.value) as 1 | 2 | 3 | 4)
                                    : null,
                                )
                              }
                            >
                              <option value=""></option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                          <div className="flex-1">
                            {riskFactor !== null && (
                              <>
                                Risc:{" "}
                                <strong className={riskFactorColorClass}>
                                  {computeQuestionRiskFactor(
                                    categoryIndex,
                                    questionIndex,
                                  )}
                                </strong>
                              </>
                            )}
                          </div>
                        </div>

                        {measuresPriorityLevel !== null && (
                          <>
                            {/* QUESTION MEASURES AND ADDITIONAL NOTES */}
                            <div className="mt-4">
                              <p>
                                <strong>{measuresPriorityLevel}:</strong>{" "}
                                {questionAnswer
                                  ? QUESTION_DEFAULT_ANSWER
                                  : safetyMeasure}
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </section>
          );
        })}
      </section>
    </main>
  );
}
