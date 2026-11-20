import { QUESTION_DEFAULT_ANSWER } from "../../data/QUESTION_DEFAULT_ANSWER";
import { RiskPieChart } from "../RiskPieChart/RiskPieChart";
import { useComplianceVerificationContext } from "../../ComplianceVerificationContext";
import { RotateCcw } from "lucide-react";
import { useNavigate } from "react-router";

export function FormDocumentPage() {
  const complianceVerificationContext = useComplianceVerificationContext();
  const navigate = useNavigate();

  const {
    unitName,
    unitIdentificationNumber,
    unitRegisteredOfficeAddress,
    questionCategories,
    ssmWorkersNames,
    preparedBy,
    computeQuestionRiskFactor,
    computeRiskTotals,
  } = complianceVerificationContext;

  const reportCurrentDate = new Intl.DateTimeFormat("ro-RO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const { totalLowRisks, totalMediumRisks, totalCriticalRisks } =
    computeRiskTotals();

  return (
    <main className="min-h-screen bg-slate-200 px-6 py-10 text-slate-950 print:p-0">
      <section className="mx-auto max-w-275 bg-white p-10 shadow-2xl print:max-w-none print:p-0 print:shadow-none">
        {/* Header */}
        <header className="mb-10 border-b-4 border-slate-900 pb-6 print:mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Raport SSM
          </p>

          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-slate-900 print:text-2xl">
            Raport de verificare sub aspect SSM
          </h1>

          <p className="mt-3 text-sm text-slate-600">
            Document generat în urma verificării conformității, evaluării
            riscurilor și stabilirii măsurilor corective.
          </p>
        </header>

        {/* Unit details */}
        <section className="mb-10 rounded-2xl border border-slate-300 bg-slate-50 p-6 print:break-inside-avoid print:rounded-none print:border-slate-400 print:p-4">
          <h2 className="mb-4 text-xl font-bold uppercase text-slate-900 print:text-base">
            Date identificare
          </h2>

          <dl className="grid grid-cols-2 gap-x-1 gap-y-3 text-sm print:text-xs">
            <div>
              <dt className="font-bold text-slate-500">Nume unitate</dt>
              <dd>{unitName}</dd>
            </div>

            <div>
              <dt className="font-bold text-slate-500">Data</dt>
              <dd>{reportCurrentDate}</dd>
            </div>

            <div>
              <dt className="font-bold text-slate-500">Adresă sediu</dt>
              <dd>{unitRegisteredOfficeAddress}</dd>
            </div>

            <div>
              <dt className="font-bold text-slate-500">J/Ro</dt>
              <dd>{unitIdentificationNumber}</dd>
            </div>
          </dl>
        </section>

        <section className="mb-10 text-md font-bold text-slate-800 text-justify print:text-md print:text-base">
          <p className="mb-3 border-b border-slate-400 pb-2 text-xl font-black uppercase text-slate-900 print:text-base">
            Atenție!
          </p>
          <p>
            În cazul unui pericol iminent de producere a unui eveniment,
            procedura de siguranță indicată este următoarea:
          </p>
          <ol className="list-decimal px-4 print:px-4">
            <li>Oprește imediat echipamentul sau acțiunea</li>
            <li>
              Atenționează de îndată lucrătorii din apropiere și anunță
              conducătorul direct al locului de muncă
            </li>
            <li>
              Efectuează retragerea într-o zonă sigură până la diminuarea
              pericolului existent
            </li>
          </ol>
        </section>

        {/* Questions grouped by category */}
        <section className="space-y-8">
          {questionCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="print:break-inside-avoid">
              <h2 className="mb-3 border-b border-slate-400 pb-2 text-xl font-black uppercase text-slate-900 print:text-base">
                {category.categoryName}
              </h2>

              <table className="w-full border-collapse text-sm print:text-[10px]">
                <thead>
                  <tr className="bg-slate-900 text-left text-white print:bg-slate-200 print:text-black">
                    <th className="w-[38%] border border-slate-400 p-3">
                      Întrebare
                    </th>
                    <th className="w-[8%] border border-slate-400 p-3 text-center">
                      Răspuns
                    </th>
                    <th className="w-[8%] border border-slate-400 p-3 text-center">
                      G
                    </th>
                    <th className="w-[8%] border border-slate-400 p-3 text-center">
                      P
                    </th>
                    <th className="w-[10%] border border-slate-400 p-3 text-center">
                      Risc
                    </th>
                    <th className="w-[28%] border border-slate-400 p-3">
                      Măsură / Observații
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {category.questions.map((question, questionIndex) => {
                    const riskFactor = computeQuestionRiskFactor(
                      categoryIndex,
                      questionIndex,
                    );

                    const riskClass =
                      riskFactor === "CRITIC"
                        ? "text-red-700"
                        : riskFactor === "MEDIU"
                          ? "text-orange-400"
                          : riskFactor === "SCĂZUT"
                            ? "text-green-600"
                            : "text-slate-500";

                    const priority =
                      riskFactor === "CRITIC"
                        ? "Măsură imediată"
                        : riskFactor === "MEDIU"
                          ? "Măsură prioritară"
                          : riskFactor === "SCĂZUT"
                            ? "Menținerea măsurii"
                            : "Măsură";

                    return (
                      <tr
                        key={`${categoryIndex}-${questionIndex}`}
                        className="align-top print:break-inside-avoid"
                      >
                        <td className="border border-slate-400 p-3">
                          {question.questionText}
                        </td>

                        <td className="border border-slate-400 p-3 text-center font-bold">
                          {question.questionAnswer ? "DA" : "NU"}
                        </td>

                        <td className="border border-slate-400 p-3 text-center">
                          {question.severity ?? "-"}
                        </td>

                        <td className="border border-slate-400 p-3 text-center">
                          {question.probability ?? "-"}
                        </td>

                        <td
                          className={`border border-slate-400 p-3 text-center font-black ${riskClass}`}
                        >
                          {riskFactor ?? "-"}
                        </td>

                        <td className="border border-slate-400 p-3">
                          <p>
                            <strong>{priority}:</strong>{" "}
                            {question.questionAnswer
                              ? QUESTION_DEFAULT_ANSWER
                              : question.safetyMeasure}
                          </p>

                          {question.additionalNotes && (
                            <p className="mt-2">
                              <strong>Observații:</strong>{" "}
                              {question.additionalNotes}
                            </p>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          ))}
        </section>

        {/* Piechart area */}
        <section className="mt-20 mb-20 print:my-6 print:break-inside-avoid">
          <section className="grid grid-cols-[3fr_1fr] items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-lg print:grid-cols-[2fr_1fr] print:gap-6 print:p-5 print:shadow-none">
            <section>
              <h3 className="mb-6 text-center text-2xl font-bold text-slate-800 print:mb-4 print:text-lg">
                Distribuția factorilor de risc
              </h3>

              <RiskPieChart
                className="mx-auto h-80 w-80 print:h-52 print:w-52"
                low={totalLowRisks}
                medium={totalMediumRisks}
                critical={totalCriticalRisks}
              />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg print:p-5 print:shadow-none">
              <h4 className="mb-6 text-xl font-semibold text-slate-700 print:mb-4 print:text-base">
                Legendă
              </h4>

              <div className="space-y-5 print:space-y-3 print:text-sm">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 rounded-full bg-red-600 print:h-4 print:w-4"></span>
                    <span>Risc critic</span>
                  </div>

                  <span className="font-bold text-red-700">
                    {totalCriticalRisks}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 rounded-full bg-amber-500 print:h-4 print:w-4"></span>
                    <span>Risc mediu</span>
                  </div>

                  <span className="font-bold text-amber-600">
                    {totalMediumRisks}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <span className="h-5 w-5 rounded-full bg-green-600 print:h-4 print:w-4"></span>
                    <span>Risc scăzut</span>
                  </div>

                  <span className="font-bold text-green-700">
                    {totalLowRisks}
                  </span>
                </div>
              </div>
            </section>
          </section>
        </section>

        <section>
          <p className="mb-3 border-b border-slate-400 pb-2 text-xl font-black uppercase text-slate-900 print:text-base">
            Atenție!
          </p>
          <p className="mb-20 text-md font-bold text-slate-800 text-justify print:text-md">
            Realizarea măsurilor de redresare a neconformităților stabilite în
            prezentul raport de verificare, cad în sarcina reprezentantului
            angajatorului și a conducătorului direct al locului de muncă. Aceste
            măsuri vor fi obiectul unui plan de acțiuni analizat periodic de
            conducerea unității și verificat de lucrătorul desemnat SSM, până la
            realizarea măsurilor.
          </p>
        </section>

        {/* Signature area */}
        <footer className="mt-12 mb-12 grid grid-cols-2 gap-50 text-sm print:mt-10 print:text-xs">
          <div>
            <p className="pt-2 font-bold">Reprezentanți SSM unitate</p>
            <p>{ssmWorkersNames || "Nume și semnătură"}</p>
          </div>
          <div>
            <p className="pt-2 font-bold text-right">Întocmit</p>
            <p className="text-right">{preparedBy || "Nume și semnătură"}</p>
          </div>
        </footer>

        <button
          onClick={() => navigate("/informatii-verificare-curenta")}
          className="ml-auto mt-6 flex items-center gap-1 rounded-xl border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-700 hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 print:hidden"
        >
          <span className="uppercase">Începe o nouă verificare</span>
          <RotateCcw />
        </button>
      </section>
    </main>
  );
}
