import { UserInputItem } from "./UserInputItem";
import backgroundImage from "./assets/OHS-backgroundImage.png";

type Props = {
  page: string;
  userInputForUnitName: string;
  changeUserInputForUnitName: (argument: string) => void;
  userInputForJName: string;
  changeUserInputForJName: (argument: string) => void;
  userInputForRegisteredOfficeAdress: string;
  changeUserInputForRegisteredOfficeAdress: (argument: string) => void;
  getListsPage: () => void;
  createUnitName: (argument: string) => void;
  createJName: (argument: string) => void;
  createRegisteredOfficeAdress: (argument: string) => void;
};

export function HomePage({
  page,
  userInputForUnitName,
  changeUserInputForUnitName,
  userInputForJName,
  changeUserInputForJName,
  userInputForRegisteredOfficeAdress,
  changeUserInputForRegisteredOfficeAdress,
  getListsPage,
  createUnitName,
  createJName,
  createRegisteredOfficeAdress,
}: Props) {
  return (
    <>
      {page === "homePage" && (
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
              <UserInputItem
                domainName="Nume unitate"
                inputText={userInputForUnitName}
                minLengthText={4}
                maxLengthText={37}
                handleChange={changeUserInputForUnitName}
                handleCreateDomainValue={() =>
                  createUnitName(userInputForUnitName)
                }
              />
              <UserInputItem
                domainName="J/Ro"
                inputText={userInputForJName}
                minLengthText={4}
                maxLengthText={13}
                handleChange={changeUserInputForJName}
                handleCreateDomainValue={() => createJName(userInputForJName)}
              />
              <UserInputItem
                domainName="Adresă sediu"
                inputText={userInputForRegisteredOfficeAdress}
                minLengthText={4}
                maxLengthText={40}
                handleChange={changeUserInputForRegisteredOfficeAdress}
                handleCreateDomainValue={() =>
                  createRegisteredOfficeAdress(
                    userInputForRegisteredOfficeAdress,
                  )
                }
              />
              <button
                onClick={getListsPage}
                className="text-md mt-5 text-slate-400 transform-all duration-200 hover:underline hover:text-blue-500"
              >
                Continuă
              </button>
            </section>
            <section className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-xs">
              <p>Creat de MMS CONSULTING SRL</p>
              <p>Marcă înregistrată OSIM nr.</p>
            </section>
          </section>
        </main>
      )}
    </>
  );
}
