import type { QuestionData } from "../useQuestions";

export const LOTO_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Energie electrică",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de electrocutare?",
        safetyMeasure:
          "Aplicarea procedurii LOTO, izolarea completă a surselor de energie electrică, verificarea absenței tensiunii cu aparate omologate și utilizarea echipamentului individual de protecție dielectric înainte de începerea lucrărilor.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de arc electric?",
        safetyMeasure:
          "Utilizarea echipamentului individual de protecție pentru arc electric, menținerea distanței de siguranță și executarea lucrărilor doar de către personal autorizat și instruit.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de incendiu?",
        safetyMeasure:
          "Verificarea periodică a instalațiilor electrice, eliminarea suprasarcinilor, utilizarea echipamentelor conforme și menținerea materialelor inflamabile la distanță de sursele electrice.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de pornire accidentală?",
        safetyMeasure:
          "Blocarea și etichetarea tuturor surselor de energie conform procedurii LOTO și verificarea imposibilității pornirii echipamentului înainte de accesul în zona de lucru.",
      },
    ],
  },
  {
    categoryName: "Energie hidraulică",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de injectare de fluid sub piele?",
        safetyMeasure:
          "Depresurizarea completă a instalației hidraulice, verificarea eliminării presiunii reziduale și utilizarea echipamentului de protecție adecvat pentru evitarea contactului cu jeturile de fluid.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de explozie conducte?",
        safetyMeasure:
          "Inspectarea periodică a conductelor, furtunurilor și racordurilor, înlocuirea componentelor deteriorate și respectarea limitelor de presiune prevăzute de producător.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de mișcări necontrolate ale actuatoarelor?",
        safetyMeasure:
          "Blocarea mecanică a actuatoarelor, eliminarea energiei reziduale și verificarea stabilității echipamentului înainte de efectuarea intervențiilor.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de strivire, lovire?",
        safetyMeasure:
          "Menținerea distanței de siguranță față de elementele mobile, utilizarea dispozitivelor de blocare și interzicerea accesului în zonele periculoase pe durata lucrărilor.",
      },
    ],
  },
  {
    categoryName: "Energie pneumatică",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de ejecție de componente?",
        safetyMeasure:
          "Verificarea fixării corespunzătoare a componentelor, utilizarea dispozitivelor de protecție și depresurizarea instalației înainte de demontare.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de zgomot puternic?",
        safetyMeasure:
          "Purtarea echipamentului individual de protecție auditivă și limitarea expunerii personalului în zonele cu nivel ridicat de zgomot.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de mișcări bruște?",
        safetyMeasure:
          "Eliminarea presiunii reziduale din instalație, verificarea poziției sigure a actuatoarelor și efectuarea intervențiilor doar după oprirea completă a echipamentului.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de proiecție impurități?",
        safetyMeasure:
          "Utilizarea ochelarilor și vizierelor de protecție, precum și curățarea și purjarea instalațiilor înainte de intervenții.",
      },
    ],
  },
  {
    categoryName: "Energie mecanică",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de antrenare?",
        safetyMeasure:
          "Montarea și menținerea apărătorilor de protecție pe elementele în mișcare și interzicerea intervențiilor în timpul funcționării echipamentului.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de strivire?",
        safetyMeasure:
          "Blocarea și susținerea pieselor mobile înainte de accesul în zona de lucru și utilizarea dispozitivelor de siguranță pentru prevenirea mișcărilor accidentale.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de tăiere?",
        safetyMeasure:
          "Utilizarea mănușilor rezistente la tăiere, manipularea atentă a componentelor și folosirea uneltelor adecvate pentru fiecare operațiune.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de cădere componente?",
        safetyMeasure:
          "Asigurarea și fixarea componentelor suspendate, utilizarea mijloacelor de ridicare certificate și delimitarea zonei de lucru.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de inerție mecanică?",
        safetyMeasure:
          "Așteptarea opririi complete a tuturor elementelor în mișcare și verificarea eliminării energiei mecanice reziduale înainte de intervenție.",
      },
    ],
  },
  {
    categoryName: "Temperaturi ridicate - zone fierbinți",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de arsuri?",
        safetyMeasure:
          "Utilizarea mănușilor și îmbrăcămintei termoizolante, semnalizarea zonelor fierbinți și evitarea contactului direct cu suprafețele încălzite.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de incendiu?",
        safetyMeasure:
          "Îndepărtarea materialelor inflamabile din zona de lucru, monitorizarea temperaturii și asigurarea mijloacelor de stingere a incendiilor.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de explozie termică?",
        safetyMeasure:
          "Respectarea limitelor admise de temperatură și presiune, monitorizarea parametrilor tehnologici și efectuarea verificărilor periodice ale instalațiilor.",
      },
    ],
  },
  {
    categoryName: "Fluide sub presiune",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de rupere conducte?",
        safetyMeasure:
          "Verificarea periodică a conductelor și racordurilor, menținerea parametrilor de funcționare în limitele admise și înlocuirea componentelor defecte.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de jet de fluid sub presiune?",
        safetyMeasure:
          "Depresurizarea completă a instalației înainte de desfacerea racordurilor și utilizarea echipamentului individual de protecție adecvat.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de inundare?",
        safetyMeasure:
          "Închiderea și izolarea surselor de alimentare cu fluid, verificarea etanșeității și asigurarea sistemelor de drenaj.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de alunecare?",
        safetyMeasure:
          "Curățarea imediată a scurgerilor de fluide, semnalizarea zonelor periculoase și utilizarea încălțămintei antiderapante.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru prevenirea riscului de injectare de fluid?",
        safetyMeasure:
          "Verificarea eliminării presiunii reziduale, utilizarea echipamentului de protecție și interzicerea verificării scurgerilor cu mâna.",
      },
    ],
  },
  {
    categoryName: "Pre aplicare LOTO",
    questions: [
      {
        questionText: "Este efectuată planificarea lucrării?",
        safetyMeasure:
          "Identificarea tuturor surselor de energie, stabilirea etapelor de lucru, evaluarea riscurilor și desemnarea responsabililor pentru aplicarea procedurii LOTO.",
      },
      {
        questionText: "Este efectuată informarea personalului?",
        safetyMeasure:
          "Informarea clară a întregului personal afectat cu privire la oprirea echipamentului, aplicarea LOTO și restricțiile de acces în zona de lucru.",
      },
      {
        questionText: "Este efectuată oprirea controlată?",
        safetyMeasure:
          "Oprirea echipamentului conform instrucțiunilor de operare, pentru prevenirea deteriorărilor și eliminarea riscurilor pentru personal.",
      },
    ],
  },
  {
    categoryName: "Aplicare LOTO",
    questions: [
      {
        questionText: "Este efectuată izolarea tuturor surselor de energie?",
        safetyMeasure:
          "Izolarea fizică a tuturor surselor de energie electrică, mecanică, hidraulică, pneumatică sau termică înainte de începerea lucrărilor.",
      },
      {
        questionText: "Este efectuată blocarea fizică?",
        safetyMeasure:
          "Aplicarea dispozitivelor de blocare pe toate punctele de izolare pentru prevenirea alimentării accidentale a echipamentului.",
      },
      {
        questionText: "Este efectuată etichetarea?",
        safetyMeasure:
          "Montarea etichetelor de avertizare vizibile pe dispozitivele LOTO, cu identificarea persoanei responsabile și a perioadei de intervenție.",
      },
      {
        questionText: "Este efectuată eliminarea energiei reziduale?",
        safetyMeasure:
          "Eliminarea sau disiparea energiei reziduale prin depresurizare, descărcare electrică, blocare mecanică sau răcire controlată.",
      },
      {
        questionText: `Este efectuată verificarea "Zero Energie"?`,
        safetyMeasure:
          "Testarea echipamentului și verificarea absenței oricărei forme de energie înainte de autorizarea începerii lucrărilor.",
      },
    ],
  },
  {
    categoryName: "Post aplicare LOTO",
    questions: [
      {
        questionText: "Este efectuată verificarea finală?",
        safetyMeasure:
          "Inspectarea finală a zonei de lucru pentru confirmarea montării corecte a componentelor și eliminarea tuturor materialelor și uneltelor.",
      },
      {
        questionText: "Este efectuată îndepărtarea dispozitivelor LOTO?",
        safetyMeasure:
          "Îndepărtarea dispozitivelor LOTO doar de către persoana autorizată, după confirmarea finalizării lucrărilor și evacuarea personalului din zona de risc.",
      },
      {
        questionText: "Este efectuată repunerea sub energie?",
        safetyMeasure:
          "Reenergizarea controlată și graduală a echipamentului conform procedurilor aprobate și monitorizarea funcționării în condiții de siguranță.",
      },
      {
        questionText: "Este efectuată informarea personalului?",
        safetyMeasure:
          "Anunțarea întregului personal afectat înainte de repunerea în funcțiune a echipamentului și reluarea activităților normale.",
      },
    ],
  },
  {
    categoryName: "Procedură LOTO",
    questions: [
      {
        questionText: "Formularistica de înregistrare, arhivare",
        safetyMeasure:
          "Implementarea formularelor de comanda si activitate, constituirea registrului de evidenta si asigurarea arhivarii documentelor.",
      },
    ],
  },
];
