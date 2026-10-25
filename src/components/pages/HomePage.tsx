import { useComplianceVerificationContext } from "../../ComplianceVerificationContext";

export function HomePage() {
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
  } = useComplianceVerificationContext();

  const fields = [
    {
      id: "unit-name",
      label: "Denumire unitate",
      value: unitName,
      onChange: setUnitName,
      minLength: 6,
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
      minLength: 8,
      maxLength: 70,
      placeholder: "Ex.: str. ___ nr. ___ loc. ___ jud. ___",
    },
  ];

  if (currentRoute !== "home") {
    return null;
  }

  return (
    <main className="flex min-h-dvh w-full flex-col">
      <section className="flex flex-1 items-center justify-center px-5 py-8 sm:px-8">
        <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-linear-to-br from-slate-950/60 via-slate-900/40 to-blue-950/50 px-6 py-8 shadow-2xl shadow-blue-950/20 backdrop-blur-md sm:px-12 sm:py-10">
          {/* Header */}
          <header className="mb-8 text-center">
            <span className="inline-flex rounded-full border border-blue-300/50 bg-blue-400/20 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-blue-200">
              MMS PRO
            </span>

            <h1 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Informații unitate verificată
            </h1>

            <p className="mt-3 text-sm text-slate-200 sm:text-base">
              Introduceți datele de identificare pentru a începe verificarea.
            </p>
          </header>

          {/* Form */}
          <form
            onSubmit={(event) => {
              event.preventDefault();

              if (areUnitDetailsFilled) {
                setVerificationChecklistsPage();
              }
            }}
            className="space-y-5"
          >
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
                <div
                  key={id}
                  className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6"
                >
                  <label
                    htmlFor={id}
                    className="text-sm font-semibold text-slate-100 sm:text-base"
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
                    onChange={(event) => onChange(event.target.value)}
                    placeholder={placeholder}
                    className="w-full min-w-0 rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-500 transition-all duration-200 hover:bg-white focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                  />
                </div>
              ),
            )}

            <div className="flex flex-col items-center pt-5">
              <button
                type="submit"
                disabled={!areUnitDetailsFilled}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-blue-400/40 bg-blue-600 px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-950/30 transition-all duration-300 enabled:hover:-translate-y-1 enabled:hover:bg-blue-500 enabled:hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-slate-400/30 disabled:text-slate-300 disabled:shadow-none"
              >
                CĂTRE LISTA DE VERIFICĂRI
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform duration-300 group-enabled:group-hover:translate-x-1"
                >
                  →
                </span>
              </button>

              <p className="mt-3 text-xs text-slate-300">
                Toate câmpurile sunt obligatorii.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/15 px-6 py-5 text-center backdrop-blur-sm">
        <p className="text-sm font-medium tracking-wide text-white/90">
          Creat de MMS CONSULTING SRL
        </p>

        <p className="mt-1 text-xs text-white/70">
          Marcă înregistrată nr. 105743 OSIM
        </p>
      </footer>
    </main>
  );
}
