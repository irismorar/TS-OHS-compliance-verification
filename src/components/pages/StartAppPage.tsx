import { Link } from "react-router";
import backgroundImage from "../../assets/OHS-backgroundImage.png";

export function StartAppPage() {
  return (
    <main
      className="relative flex min-h-screen flex-col bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/80 via-slate-900/65 to-blue-950/70" />

      {/* Main content */}
      <section className="z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        {/* Application badge */}
        <div className="mb-8 rounded-full border border-blue-300/30 bg-blue-400/10 px-5 py-2 text-sm font-medium tracking-widest text-blue-200 backdrop-blur-md">
          MANAGEMENTUL SECURITĂȚII ȘI SĂNĂTĂȚII ÎN MUNCĂ
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          MMS <span className="text-blue-400">PRO</span>
        </h1>

        {/* Decorative line */}
        <div className="my-8 h-1 w-24 rounded-full bg-linear-to-r from-blue-400 to-cyan-300" />

        <h2 className="max-w-3xl text-xl font-light tracking-wide text-slate-200 sm:text-2xl md:text-3xl">
          Prevenire. Reglementare. Optimizare.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Soluția digitală pentru evaluarea riscurilor și verificarea
          conformității în domeniul securității și sănătății în muncă.
        </p>

        <Link to="/informatii-unitate-verificata">
          <button
            type="button"
            className="group mt-12 flex items-center justify-center gap-3 rounded-xl border border-blue-400/40 bg-blue-600 px-9 py-4 text-base font-semibold tracking-wide text-white shadow-lg shadow-blue-950/40 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70 active:translate-y-0"
          >
            START APLICAȚIE
            <span
              aria-hidden="true"
              className="text-xl transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="z-10 border-t border-white/10 bg-slate-950/20 px-6 py-6 text-center backdrop-blur-sm">
        <p className="text-sm font-medium tracking-wide text-slate-300">
          Creat de MMS CONSULTING SRL
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Marcă înregistrată nr. 105743 OSIM
        </p>
      </footer>
    </main>
  );
}
