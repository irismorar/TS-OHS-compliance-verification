import { UserInputUnitDetails } from "../ui/UserInputUnitDetails";
import backgroundImage from "../../assets/OHS-backgroundImage.png";
import type { useComplianceVerificationState } from "../../useComplianceVerificationState";

type Props = ReturnType<typeof useComplianceVerificationState>;

export function HomePage({
  currentRoute,
  setVerificationChecklistsPage,
  unitName,
  setUnitName,
  unitIdentificationNumber,
  setUnitIdentificationNumber,
  unitRegisteredOfficeAddress,
  setUnitRegisteredOfficeAddress,
  areUnitDetailsFilled,
}: Props) {
  if (currentRoute !== "home") {
    return null;
  }

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <section className="absolute top-30 left-1/2 -translate-x-1/2 text-center">
        <h1
          className="text-6xl font-extrabold tracking-wider text-white"
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.4)",
          }}
        >
          MMS PRO
        </h1>
        <h3
          className="mt-2 text-2xl font-semibold text-white/90 tracking-wider"
          style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.25)",
          }}
        >
          Prevenire. Reglementare. Optimizare.
        </h3>
      </section>
      <section>
        <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center space-y-4">
          <UserInputUnitDetails
            domainName="Nume unitate"
            inputText={unitName}
            minLengthText={4}
            maxLengthText={37}
            handleChange={setUnitName}
            placeholderText="Ex.: SC ___ SRL"
          />
          <UserInputUnitDetails
            domainName="J / CUI"
            inputText={unitIdentificationNumber}
            minLengthText={4}
            maxLengthText={13}
            handleChange={setUnitIdentificationNumber}
            placeholderText="Ex.: J___/___/___"
          />
          <UserInputUnitDetails
            domainName="Adresă sediu"
            inputText={unitRegisteredOfficeAddress}
            minLengthText={4}
            maxLengthText={70}
            handleChange={setUnitRegisteredOfficeAddress}
            placeholderText="Ex.: str. ___  nr. ___  loc. ___  jud. ___"
          />
          <button
            onClick={() => {
              if (areUnitDetailsFilled) {
                setVerificationChecklistsPage();
              }
            }}
            disabled={!areUnitDetailsFilled}
            className={`text-sm mt-5 rounded-xl border border-slate-300 bg-slate-100/80 px-3 py-2 shadow-sm ${
              areUnitDetailsFilled
                ? "text-slate-400 transition-all duration-100 hover:text-blue-600 hover:scale-105 hover:font-medium hover:bg-slate-50"
                : "text-slate-400 cursor-not-allowed"
            }`}
          >
            Continuă
          </button>
        </section>
        <section
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-xs text-white/90 tracking-wider"
          style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.25)",
          }}
        >
          <p>Creat de MMS CONSULTING SRL</p>
          <p>Marcă înregistrată nr. 105743 OSIM</p>
        </section>
      </section>
    </main>
  );
}
