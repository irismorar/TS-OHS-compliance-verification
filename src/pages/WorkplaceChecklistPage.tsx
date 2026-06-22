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
    <>
      <div className="mt-10 mb-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Workplace Compliance Checklist
        </h1>

        <p className="mt-2 text-slate-600">
          Evaluate compliance, assess risks and define corrective actions
        </p>
      </div>
      <main className="min-h-screen flex items-center justify-center bg-slate-150">
        <section className="mx-auto w-full max-w-6xl rounded-3xl bg-slate-200 p-10 shadow-xl">
          {questionCategories.map((category, categoryIndex) => {
            const { categoryName, questions } = category;

            return (
              <section key={categoryIndex} className="mt-10">
                <h2 className="mb-6 pb-3 text-2xl font-bold text-slate-800">
                  {categoryName}
                </h2>
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

                  const getRiskFactorBadgeClass = (
                    risk: "EXTREM" | "MEDIU" | "SCĂZUT" | null,
                  ): string => {
                    switch (risk) {
                      case "SCĂZUT":
                        return "bg-green-100 text-green-700";
                      case "MEDIU":
                        return "bg-orange-100 text-orange-500";
                      case "EXTREM":
                        return "bg-red-100 text-red-700";
                      default:
                        return "";
                    }
                  };

                  const riskFactorBadgeClass =
                    getRiskFactorBadgeClass(riskFactor);

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
                      className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:translate-x-1 hover:scale-103"
                    >
                      {/* QUESTION TEXT AND YES/NO BUTTONS */}
                      <div className="flex items-center gap-4">
                        <p className="flex-1 text-lg font-medium leading-relaxed text-slate-900">
                          {questionText}
                        </p>
                        <div className="w-32 flex gap-1">
                          <button
                            className={`flex-1 rounded-xl py-2.5 font-bold text-white uppercase transition-all duration-200 ${questionAnswer === true ? "bg-green-500 shadow-lg" : "bg-gray-300 hover:text-blue-600"}`}
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
                            className={`flex-1 rounded-xl py-2.5 font-bold text-white uppercase transition-all duration-200 ${questionAnswer === false ? "bg-red-500 shadow-lg" : "bg-gray-300 hover:text-blue-600"}`}
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
                          <div className="flex items-center gap-4 mt-3 p-4">
                            <div className="w-48">
                              <label
                                htmlFor={`severity-${categoryIndex}-${questionIndex}`}
                                className="mr-2"
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
                                      ? (Number(e.target.value) as
                                          | 1
                                          | 2
                                          | 3
                                          | 4)
                                      : null,
                                  )
                                }
                                className="w-fit rounded-lg border border-slate-300 bg-white px-2 py-1 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
                                className="mr-2"
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
                                      ? (Number(e.target.value) as
                                          | 1
                                          | 2
                                          | 3
                                          | 4)
                                      : null,
                                  )
                                }
                                className="w-fit rounded-lg border border-slate-300 bg-white px-2 py-1 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
                                  <span
                                    className={`rounded-lg px-3 py-1 text-sm font-bold shadow-md ${riskFactorBadgeClass}`}
                                  >
                                    {riskFactor}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          {measuresPriorityLevel !== null && (
                            <>
                              {/* QUESTION MEASURES AND ADDITIONAL NOTES */}
                              <div
                                className={`mt-4 rounded-xl bg-blue-50 p-4 text-sm font-bold shadow-lg ${riskFactorBadgeClass}`}
                              >
                                <p>
                                  <span className="uppercase">
                                    {measuresPriorityLevel}:
                                  </span>
                                  <p className="mt-3 font-medium">
                                    {questionAnswer
                                      ? QUESTION_DEFAULT_ANSWER
                                      : safetyMeasure}
                                  </p>
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
    </>
  );
}
