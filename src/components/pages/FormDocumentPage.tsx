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
}: Props) {
  if (currentRoute !== "finalDocument") {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-100 p-10 text-black">
      <section className="mx-auto max-w-7xl rounded-3xl bg-white p-8">
        <h1 className="mb-8 text-3xl font-bold">Raport final verificare SSM</h1>
        <section className="mb-10 rounded-2xl bg-slate-100 p-6 ">
          <h2 className="mb-4 text-2xl font-semibold">Date unitate</h2>

          <p>
            <strong>Nume unitate:</strong> {unitName}
          </p>
          <p>
            <strong>J/Ro:</strong> {unitIdentificationNumber}
          </p>
          <p>
            <strong>Adresă sediu:</strong> {unitRegisteredOfficeAddress}
          </p>
          <p>
            <strong>Nume reprezentanți SSM / unitate:</strong>
          </p>
          <p>
            <strong>Întocmit:</strong>
          </p>
          <p>
            <strong>Data: </strong>
            {`${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}`}
          </p>
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

                  return (
                    <tr key={`${categoryIndex}-${questionIndex}`}>
                      <td className="border border-slate-400 p-4">
                        <section>
                          <p>
                            <strong>Categorie:</strong> {category.categoryName}
                          </p>

                          <p>
                            <strong>Întrebare:</strong> {question.questionText}
                          </p>

                          <p>
                            <strong>Răspuns:</strong>{" "}
                            {question.questionAnswer ? "DA" : "NU"}
                          </p>

                          <p>
                            <strong>Gravitate:</strong>{" "}
                            {question.severity ?? "Necompletat"}
                          </p>

                          <p>
                            <strong>Probabilitate:</strong>{" "}
                            {question.probability ?? "Necompletat"}
                          </p>

                          <p>
                            <strong>Factor risc:</strong>{" "}
                            {riskFactor === "SCĂZUT" ? (
                              <strong>{riskFactor}</strong>
                            ) : (
                              <span>{riskFactor}</span>
                            )}
                          </p>

                          <p>
                            <strong>Măsură SSM:</strong>{" "}
                            {question.questionAnswer
                              ? QUESTION_DEFAULT_ANSWER
                              : question.safetyMeasure}
                          </p>

                          <p>
                            <strong>Observații: </strong>
                            {question.additionalNotes}
                          </p>
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
