import type { QuestionData } from "../useQuestions";

export const OFFICE_EQUIPMENT_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Calculatoare",
    questions: [
      {
        questionText:
          "Unitatea PC este amplasată stabil, fără risc de răsturnare?",
        safetyMeasure:
          "Reamplasați echipamentul pe o suprafață stabilă și asigurați fixarea corespunzătoare.",
      },
      {
        questionText:
          "Carcasa calculatorului este intactă și fără elemente desprinse?",
        safetyMeasure:
          "Scoateți din exploatare echipamentul și remediați defectele mecanice.",
      },
      {
        questionText:
          "Cablurile de alimentare sunt intacte și fără improvizații?",
        safetyMeasure:
          "Înlocuiți cablurile deteriorate și eliminați improvizațiile.",
      },
      {
        questionText:
          "Priza utilizată este cu contact de protecție (împământare)?",
        safetyMeasure: "Conectați echipamentul la o priză conformă.",
      },
      {
        questionText: "Prelungitoarele nu sunt suprasolicitate?",
        safetyMeasure:
          "Redistribuiți consumatorii și utilizați circuite adecvate.",
      },
      {
        questionText: "Orificiile de ventilație sunt curate și neobturate?",
        safetyMeasure: "Curățați echipamentul și asigurați circulația aerului.",
      },
      {
        questionText: "Nu există urme de supraîncălzire sau miros de ars?",
        safetyMeasure:
          "Opriți imediat utilizarea și solicitați verificare tehnică.",
      },
      {
        questionText: "Echipamentul este inclus în programul de mentenanță?",
        safetyMeasure:
          "Actualizați planul de mentenanță și efectuați verificările restante.",
      },
    ],
  },
  {
    categoryName: "Monitoare",
    questions: [
      {
        questionText: "Monitorul este poziționat ergonomic?",
        safetyMeasure: "Reglați înălțimea, distanța și unghiul monitorului.",
      },
      {
        questionText: "Imaginea este stabilă și fără defecte?",
        safetyMeasure: "Înlocuiți sau reparați monitorul.",
      },
      {
        questionText: "Suportul monitorului este stabil?",
        safetyMeasure: "Înlocuiți suportul sau fixați corespunzător.",
      },
      {
        questionText: "Cablurile video și alimentarea sunt protejate?",
        safetyMeasure: "Organizați și fixați cablurile.",
      },
    ],
  },
  {
    categoryName: "Copiatoare/Imprimante",
    questions: [
      {
        questionText: "Echipamentul este amplasat într-o zonă bine ventilată?",
        safetyMeasure: "Relocați echipamentul pentru ventilație adecvată.",
      },
      {
        questionText: "Capacele și protecțiile sunt funcționale?",
        safetyMeasure: "Remediați sau înlocuiți protecțiile.",
      },
      {
        questionText: "Consumabilele sunt manipulate conform instrucțiunilor?",
        safetyMeasure: "Instruiți personalul și respectați fișele tehnice.",
      },
      {
        questionText: "Există scurgeri de toner sau deteriorări?",
        safetyMeasure: "Curățați zona și înlocuiți componentele defecte.",
      },
      {
        questionText:
          "Intervențiile se efectuează numai cu alimentarea întreruptă?",
        safetyMeasure:
          "Reinstruiți personalul și aplicați procedura de lucru sigur.",
      },
    ],
  },
  {
    categoryName: "Tocătoare hârtie",
    questions: [
      {
        questionText: "Senzorii de siguranță funcționează?",
        safetyMeasure: "Scoateți din uz până la remediere.",
      },
      {
        questionText: "Fanta de alimentare este prevăzută cu protecție?",
        safetyMeasure: "Înlocuiți echipamentul sau protecția.",
      },
      {
        questionText: "Nu se introduc obiecte nepermise?",
        safetyMeasure: "Instruiți utilizatorii.",
      },
      {
        questionText: "Echipamentul este deconectat înainte de curățare?",
        safetyMeasure: "Implementați procedura de deconectare.",
      },
    ],
  },
  {
    categoryName: "Dispozitive IT",
    questions: [
      {
        questionText: "Laptopurile sunt utilizate cu alimentatoare originale?",
        safetyMeasure: "Înlocuiți alimentatoarele neconforme.",
      },
      {
        questionText: "Stațiile de andocare sunt stabile?",
        safetyMeasure: "Fixați sau înlocuiți suporturile.",
      },
      {
        questionText: "Bateriile nu prezintă deformări?",
        safetyMeasure:
          "Scoateți bateria din uz și eliminați conform procedurilor.",
      },
      {
        questionText:
          "Echipamentele mobile sunt protejate împotriva lichidelor?",
        safetyMeasure: "Relocați și protejați echipamentele.",
      },
    ],
  },
  {
    categoryName: "Ustensile birou",
    questions: [
      {
        questionText: "Foarfecile și cutterele sunt în stare bună?",
        safetyMeasure: "Înlocuiți ustensilele deteriorate.",
      },
      {
        questionText: "Lamele cutterelor sunt retrase după utilizare?",
        safetyMeasure:
          "Instruiți utilizatorii și înlocuiți cutterele neconforme.",
      },
      {
        questionText: "Capsatoarele funcționează corect?",
        safetyMeasure: "Reparați sau înlocuiți dispozitivele.",
      },
      {
        questionText: "Obiectele ascuțite sunt depozitate în siguranță?",
        safetyMeasure: "Asigurați suporturi dedicate.",
      },
    ],
  },
  {
    categoryName: "General",
    questions: [
      {
        questionText: "Spațiul de lucru este curat și ordonat?",
        safetyMeasure: "Eliminați obstacolele și organizați zona.",
      },
      {
        questionText: "Nu există cabluri care creează risc de împiedicare?",
        safetyMeasure: "Protejați și fixați cablurile.",
      },
      {
        questionText: "Accesul la tabloul electric și prize este liber?",
        safetyMeasure: "Eliberați zona de acces.",
      },
      {
        questionText: "Există stingător accesibil în apropiere?",
        safetyMeasure: "Amplasați stingător conform cerințelor.",
      },
      {
        questionText: "Instrucțiunile SSM sunt disponibile?",
        safetyMeasure: "Afișați și comunicați instrucțiunile.",
      },
      {
        questionText: "Personalul este instruit SSM?",
        safetyMeasure: "Programați și documentați instruirea.",
      },
      {
        questionText: "Reviziile periodice sunt efectuate?",
        safetyMeasure: "Planificați și realizați verificările.",
      },
      {
        questionText: "Defecțiunile sunt raportate și înregistrate?",
        safetyMeasure: "Implementați registrul de defecțiuni.",
      },
      {
        questionText: "Iluminatul este adecvat activității?",
        safetyMeasure: "Remediați instalația sau suplimentați iluminatul.",
      },
      {
        questionText: "Temperatura și ventilația sunt corespunzătoare?",
        safetyMeasure: "Reglați sistemul HVAC.",
      },
      {
        questionText: "Mobilierul este stabil și ergonomic?",
        safetyMeasure: "Înlocuiți mobilierul neconform.",
      },
      {
        questionText: "Scaunele sunt reglabile și funcționale?",
        safetyMeasure: "Reparați sau înlocuiți scaunele.",
      },
      {
        questionText:
          "Nu există lichide în apropierea echipamentelor electrice?",
        safetyMeasure: "Relocați recipientele și instruiți personalul.",
      },
      {
        questionText: "Prizele și întrerupătoarele sunt intacte?",
        safetyMeasure: "Înlocuiți componentele deteriorate.",
      },
      {
        questionText: "Nu există adaptoare improvizate?",
        safetyMeasure: "Utilizați echipamente certificate.",
      },
      {
        questionText: "Echipamentele sunt etichetate și identificabile?",
        safetyMeasure: "Aplicați etichete de inventar.",
      },
      {
        questionText: "Există acces la trusa de prim ajutor?",
        safetyMeasure: "Amplasați și verificați trusa.",
      },
      {
        questionText: "Căile de evacuare sunt libere?",
        safetyMeasure: "Eliminați orice obstacol.",
      },
      {
        questionText: "Semnalizarea de securitate este vizibilă?",
        safetyMeasure: "Completați și înlocuiți indicatoarele.",
      },
      {
        questionText: "Verificările SSM sunt consemnate?",
        safetyMeasure: "Actualizați fișele și registrele.",
      },
      {
        questionText:
          "Verificarea suplimentară SSM  este efectuată conform procedurilor interne?",
        safetyMeasure:
          "Efectuați verificarea, documentați rezultatul și implementați măsurile corective necesare.",
      },
    ],
  },
];
