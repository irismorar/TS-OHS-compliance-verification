import { QUESTION_DEFAULT_ANSWER } from "../../data/QUESTION_DEFAULT_ANSWER";
import type { useComplianceVerificationState } from "../../useComplianceVerificationState";

type Props = ReturnType<typeof useComplianceVerificationState>;

export function FormDocumentPage({
  currentRoute,

  unitName,
  unitIdentificationNumber,
  unitRegisteredOfficeAddress,

  questionCategories,
  computeQuestionRiskFactor,
  verifiedAreaName,
  setVerifiedAreaName,
  isEditingVerifiedArea,
  setIsEditingVerifiedArea,
  ssmWorkersNames,
  setSsmWorkersName,
  isEditingSsmWorkers,
  setIsEditingSsmWorkers,
  preparedBy,
  setPreparedBy,
  isEditingPreparedBy,
  setIsEditingPreparedBy,
}: Props) {
  if (currentRoute !== "finalDocument") {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-100 p-10 text-black">
      <section className="mx-auto max-w-7xl rounded-3xl bg-white p-8">
        <h1 className="mb-8 text-3xl font-bold">
          Raport de verificare sub aspect SSM
        </h1>
        <section className="mb-10 rounded-2xl bg-slate-100 p-6 ">
          <h2 className="mb-4 text-2xl font-semibold">Date unitate</h2>

          <p>
            <strong>Data: </strong>
            {`${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}`}
          </p>
          <p>
            <strong>Nume unitate:</strong> {unitName}
          </p>
          <p>
            <strong>J/Ro:</strong> {unitIdentificationNumber}
          </p>
          <p>
            <strong>Adresă sediu:</strong> {unitRegisteredOfficeAddress}
          </p>

          <div>
            <label
              htmlFor="ssmWorkersNames"
              className="font-bold w-48 text-left select-none"
            >
              Sistem verificat:
            </label>
            {isEditingVerifiedArea ? (
              <input
                id="ssmWorkersNames"
                className="ml-2 mb-2 w-70 rounded-lg border border-slate-300 bg-white/80 px-2 py-1 shadow-sm placeholder-slate-300 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
                value={verifiedAreaName}
                onChange={(event) => {
                  setVerifiedAreaName(event.target.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    if (verifiedAreaName.trim()) {
                      setIsEditingVerifiedArea(false);
                    }
                  }
                }}
              ></input>
            ) : (
              <span
                className="ml-2"
                onDoubleClick={() => setIsEditingVerifiedArea(true)}
              >
                {verifiedAreaName}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="ssmWorkersNames"
              className="font-bold w-48 text-left select-none"
            >
              Nume reprezentanți SSM/unitate:
            </label>
            {isEditingSsmWorkers ? (
              <input
                id="ssmWorkersNames"
                className="ml-2 mb-2 w-70 rounded-lg border border-slate-300 bg-white/80 px-2 py-1 shadow-sm placeholder-slate-300 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
                value={ssmWorkersNames}
                onChange={(event) => {
                  setSsmWorkersName(event.target.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    if (ssmWorkersNames.trim()) {
                      setIsEditingSsmWorkers(false);
                    }
                  }
                }}
              ></input>
            ) : (
              <span
                className="ml-2"
                onDoubleClick={() => setIsEditingSsmWorkers(true)}
              >
                {ssmWorkersNames}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="preparedBy"
              className="font-bold w-48 text-left select-none"
            >
              Întocmit:
            </label>
            {isEditingPreparedBy ? (
              <input
                id="preparedBy"
                className="w-70 rounded-lg ml-2 mb-2 border border-slate-300 bg-white/80 px-2 py-1 shadow-sm placeholder-slate-300 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
                value={preparedBy}
                onChange={(event) => {
                  setPreparedBy(event.target.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    if (preparedBy.trim()) {
                      setIsEditingPreparedBy(false);
                    }
                  }
                }}
              ></input>
            ) : (
              <span
                className="ml-2"
                onDoubleClick={() => setIsEditingPreparedBy(true)}
              >
                {preparedBy}
              </span>
            )}
          </div>
        </section>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm print:text-xs">
            <tbody>
              {questionCategories.map((category, categoryIndex) => {
                return category.questions.map((question, questionIndex) => {
                  const riskFactor = computeQuestionRiskFactor(
                    categoryIndex,
                    questionIndex,
                  );

                  const getRiskFactorBadgeClass = (
                    risk: "EXTREM" | "MEDIU" | "SCĂZUT" | null,
                  ): string => {
                    switch (risk) {
                      case "SCĂZUT":
                        return "text-green-700";
                      case "MEDIU":
                        return "text-orange-500";
                      case "EXTREM":
                        return "text-red-700";
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
                        return "Menținerea măsurii";
                      case "MEDIU":
                        return "Măsură prioritară";
                      case "EXTREM":
                        return "Măsură imediată";
                      default:
                        return null;
                    }
                  };

                  const measuresPriorityLevel =
                    getMeasuresPriorityLevel(riskFactor);

                  return (
                    <tr key={`${categoryIndex}-${questionIndex}`}>
                      <td className="border border-slate-400 p-4">
                        <section>
                          <div>
                            <strong>Categorie:</strong> {category.categoryName}
                          </div>

                          <div className="flex gap-10">
                            <span>
                              <span className="font-bold">Întrebare:</span>{" "}
                              {question.questionText}
                            </span>
                            <span>
                              <span className="font-bold">Răspuns:</span>{" "}
                              {question.questionAnswer ? "DA" : "NU"}
                            </span>
                          </div>

                          <div className="flex gap-10">
                            <span>
                              <span className="font-bold">Gravitate:</span>{" "}
                              {question.severity ?? "Necompletat"}
                            </span>
                            <span>
                              {" "}
                              <span className="font-bold">
                                Probabilitate:
                              </span>{" "}
                              {question.probability ?? "Necompletat"}
                            </span>
                            <span>
                              {" "}
                              <span className="font-bold">
                                Nivel risc:
                              </span>{" "}
                              {riskFactor === "SCĂZUT" ? (
                                <span
                                  className={`font-bold ${riskFactorBadgeClass}`}
                                >
                                  {riskFactor}
                                </span>
                              ) : (
                                <span
                                  className={`font-bold ${riskFactorBadgeClass}`}
                                >
                                  {riskFactor}
                                </span>
                              )}
                            </span>
                          </div>

                          <div>
                            <span className="font-bold">
                              {measuresPriorityLevel}:
                            </span>{" "}
                            {question.questionAnswer
                              ? QUESTION_DEFAULT_ANSWER
                              : question.safetyMeasure}
                          </div>

                          {question.additionalNotes ? (
                            <div>
                              <span className="font-bold">Observații:</span>{" "}
                              {question.additionalNotes}
                            </div>
                          ) : (
                            ""
                          )}
                        </section>
                      </td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
