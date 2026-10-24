import { Fragment } from "react";
import backgroundImage from "../../assets/OHS-backgroundImage.png";
import { useComplianceVerificationContext } from "../../ComplianceVerificationContext";

export function HomePage() {
  const complianceVerificationContext = useComplianceVerificationContext();

  const {
    currentRoute,
    unitName,
    setUnitName,
    unitIdentificationNumber,
    setUnitIdentificationNumber,
    unitRegisteredOfficeAddress,
    setUnitRegisteredOfficeAddress,
    areUnitDetailsFilled,
    setVerificationChecklistsPage,
  } = complianceVerificationContext;

  const fields = [
    {
      id: "unit-name",
      label: "Denumire unitate",
      value: unitName,
      onChange: setUnitName,
      minLength: 4,
      maxLength: 37,
      placeholder: "Ex.: SC ___ SRL",
    },
    {
      id: "unit-identification-number",
      label: "J / CUI",
      value: unitIdentificationNumber,
      onChange: setUnitIdentificationNumber,
      minLength: 4,
      maxLength: 13,
      placeholder: "Ex.: J___/___/___",
    },
    {
      id: "unit-registered-office-address",
      label: "Adresă sediu",
      value: unitRegisteredOfficeAddress,
      onChange: setUnitRegisteredOfficeAddress,
      minLength: 4,
      maxLength: 70,
      placeholder: "Ex.: str. ___  nr. ___  loc. ___  jud. ___",
    },
  ];

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
            textShadow: ".05em .05em 0 rgba(0,0,0,0.3)",
          }}
        >
          MMS PRO
        </h1>
        <h3
          className="mt-2 text-2xl font-semibold text-white/90 tracking-wider"
          style={{
            textShadow: "0 2px 3px rgba(0,0,0,0.30)",
          }}
        >
          Prevenire. Reglementare. Optimizare.
        </h3>
      </section>

      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-[12rem_25rem] items-center gap-x-0 gap-y-4">
        <span className="col-span-2 text-center text-xl font-semibold my-4 text-slate-400">
          Informații unitate verificată:
        </span>

        {fields.map(
          ({
            id,
            label,
            value,
            onChange,
            minLength,
            maxLength,
            placeholder,
          }) => (
            <Fragment key={id}>
              <label
                htmlFor={id}
                className="text-left text-lg font-semibold text-slate-800 select-none"
              >
                {label}
              </label>
              <input
                type="text"
                id={id}
                required
                minLength={minLength}
                maxLength={maxLength}
                value={value}
                onChange={(event) => {
                  onChange(event.target.value);
                }}
                placeholder={placeholder}
                className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-lg shadow-sm placeholder-slate-300 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
            </Fragment>
          ),
        )}
        <button
          onClick={() => {
            if (areUnitDetailsFilled) {
              setVerificationChecklistsPage();
            }
          }}
          disabled={!areUnitDetailsFilled}
          className={`col-span-2 justify-self-center text-lg font-semibold mt-5 rounded-xl border border-slate-300 bg-slate-100/80 px-3 py-2 shadow-sm ${
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
    </main>
  );
}
