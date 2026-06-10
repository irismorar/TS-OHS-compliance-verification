import { UserInputItem } from "./UserInputItem";

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
        <main>
          <section>
            <h1>MMS PRO</h1>
            <h3>Prevenire. Reglementare. Optimizare</h3>
          </section>
          <section>
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
              domainName="Registered Office Adress"
              inputText={userInputForRegisteredOfficeAdress}
              minLengthText={4}
              maxLengthText={40}
              handleChange={changeUserInputForRegisteredOfficeAdress}
              handleCreateDomainValue={() =>
                createRegisteredOfficeAdress(userInputForRegisteredOfficeAdress)
              }
            />
          </section>
          <button onClick={getListsPage}>Next</button>;
          <section>
            <p>Creat de MMS CONSULTING SRL</p>
            <p>Marcă înregistrată OSIM nr.</p>
          </section>
        </main>
      )}
    </>
  );
}
