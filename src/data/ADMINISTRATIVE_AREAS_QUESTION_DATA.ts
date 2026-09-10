import type { QuestionData } from "../useQuestions";

export const ADMINISTRATIVE_AREAS_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Acces",
    questions: [
      {
        questionText:
          "Accesul în clădire este liber și fără riscuri de alunecare?",
        safetyMeasure:
          "Curățați imediat zona de acces, aplicați materiale antiderapante și remediați denivelările identificate.",
      },
      {
        questionText:
          "Treptele sunt prevăzute cu bandă antiderapantă unde este necesar?",
        safetyMeasure:
          "Montați benzi antiderapante pe treptele uzate și înlocuiți elementele desprinse.",
      },
      {
        questionText: "Balustradele scărilor sunt fixe și continue?",
        safetyMeasure:
          "Reparați sau înlocuiți segmentele instabile înainte de utilizarea scării.",
      },
    ],
  },
  {
    categoryName: "Circulații",
    questions: [
      {
        questionText:
          "Holurile sunt libere de mobilier și materiale depozitate?",
        safetyMeasure:
          "Relocați mobilierul și delimitați spațiile permise pentru depozitare.",
      },
      {
        questionText: "Ușile de circulație se deschid complet fără obstacole?",
        safetyMeasure:
          "Îndepărtați obiectele care limitează deschiderea și reglați sistemul de închidere.",
      },
    ],
  },
  {
    categoryName: "Pardoseli",
    questions: [
      {
        questionText:
          "Pardoselile sunt fără fisuri sau denivelări periculoase?",
        safetyMeasure:
          "Marcați zona, reparați finisajul și restricționați accesul până la remediere.",
      },
      {
        questionText: "Covoarele sunt fixate și nu prezintă margini ridicate?",
        safetyMeasure:
          "Fixați covorul cu sisteme dedicate sau înlocuiți-l dacă este deteriorat.",
      },
    ],
  },
  {
    categoryName: "Iluminat",
    questions: [
      {
        questionText: "Iluminatul pe holuri este funcțional?",
        safetyMeasure:
          "Înlocuiți corpurile defecte și verificați funcționarea circuitului.",
      },
      {
        questionText:
          "Iluminatul de siguranță funcționează la întreruperea alimentării?",
        safetyMeasure:
          "Testați instalația și înlocuiți acumulatorii sau corpurile defecte.",
      },
    ],
  },
  {
    categoryName: "Ventilație",
    questions: [
      {
        questionText: "Spațiile administrative sunt ventilate corespunzător?",
        safetyMeasure:
          "Curățați filtrele, reglați debitul de aer și remediați defecțiunile instalației.",
      },
    ],
  },
  {
    categoryName: "Microclimat",
    questions: [
      {
        questionText: "Temperatura este adecvată sezonului?",
        safetyMeasure:
          "Reglați instalația HVAC și verificați distribuția uniformă a temperaturii.",
      },
    ],
  },
  {
    categoryName: "Electric",
    questions: [
      {
        questionText: "Prizele din spațiile comune sunt intacte?",
        safetyMeasure:
          "Înlocuiți prizele fisurate și scoateți circuitul din exploatare până la remediere.",
      },
      {
        questionText: "Panourile electrice sunt încuiate și marcate?",
        safetyMeasure:
          "Asigurați închiderea panoului și aplicați marcajele de avertizare lipsă.",
      },
      {
        questionText: "Nu există improvizații electrice?",
        safetyMeasure:
          "Eliminați improvizațiile și realizați conexiunile prin personal autorizat.",
      },
    ],
  },
  {
    categoryName: "PSI",
    questions: [
      {
        questionText: "Stingătoarele sunt amplasate conform planului?",
        safetyMeasure:
          "Repoziționați stingătorul conform planului de intervenție și actualizați marcajul.",
      },
      {
        questionText: "Hidranții interiori sunt accesibili?",
        safetyMeasure:
          "Eliberați imediat zona și interziceți depozitarea în fața hidrantului.",
      },
      {
        questionText: "Planurile de evacuare sunt afișate pe fiecare nivel?",
        safetyMeasure:
          "Afișați planurile lipsă în zonele de acces și verificați lizibilitatea.",
      },
    ],
  },
  {
    categoryName: "Evacuare",
    questions: [
      {
        questionText: "Ușile de evacuare nu sunt blocate?",
        safetyMeasure:
          "Eliminați sistemele de blocare și verificați deschiderea din interior.",
      },
      {
        questionText: "Traseele de evacuare sunt marcate continuu?",
        safetyMeasure:
          "Completați marcajele lipsă și înlocuiți indicatoarele deteriorate.",
      },
    ],
  },
  {
    categoryName: "Sanitar",
    questions: [
      {
        questionText: "Grupurile sanitare sunt curate și funcționale?",
        safetyMeasure:
          "Remediați instalațiile defecte și intensificați programul de igienizare.",
      },
      {
        questionText: "Există apă caldă și rece?",
        safetyMeasure:
          "Remediați instalația și verificați funcționarea sursei de apă caldă.",
      },
      {
        questionText: "Săpunul și materialele de igienă sunt disponibile?",
        safetyMeasure:
          "Reaprovizionați imediat dozatoarele și introduceți verificări zilnice.",
      },
    ],
  },
  {
    categoryName: "Mobilier",
    questions: [
      {
        questionText: "Dulapurile înalte sunt ancorate?",
        safetyMeasure:
          "Ancorați mobilierul de perete pentru eliminarea riscului de răsturnare.",
      },
      {
        questionText:
          "Sertarele dulapurilor funcționează fără risc de desprindere?",
        safetyMeasure:
          "Reparați glisierele și scoateți din uz mobilierul deteriorat.",
      },
    ],
  },
  {
    categoryName: "Depozitare",
    questions: [
      {
        questionText: "Materialele de arhivă sunt depozitate ordonat?",
        safetyMeasure: "Reorganizați arhiva și eliminați stivele instabile.",
      },
      {
        questionText: "Obiectele grele sunt amplasate pe rafturile inferioare?",
        safetyMeasure:
          "Relocați obiectele grele pe polițele de jos pentru reducerea riscului de accidentare.",
      },
    ],
  },
  {
    categoryName: "Curățenie",
    questions: [
      {
        questionText:
          "Produsele de curățenie sunt depozitate separat și etichetate?",
        safetyMeasure:
          "Depozitați substanțele într-un dulap dedicat și etichetați recipientele.",
      },
      {
        questionText: "Există program documentat de curățenie?",
        safetyMeasure:
          "Introduceți un grafic de curățenie și verificați semnarea acestuia.",
      },
    ],
  },
  {
    categoryName: "Deșeuri",
    questions: [
      {
        questionText: "Deșeurile sunt colectate selectiv?",
        safetyMeasure:
          "Amplasați recipiente dedicate și informați personalul asupra colectării.",
      },
      {
        questionText: "Recipientele nu sunt supraîncărcate?",
        safetyMeasure: "Goliți recipientele și ajustați frecvența colectării.",
      },
    ],
  },
  {
    categoryName: "Prim ajutor",
    questions: [
      {
        questionText: "Trusa este semnalizată vizibil?",
        safetyMeasure:
          "Aplicați indicatorul standardizat și eliminați obstacolele din jur.",
      },
      {
        questionText: "Conținutul trusei este complet?",
        safetyMeasure:
          "Completați exact materialele lipsă conform inventarului obligatoriu.",
      },
    ],
  },
  {
    categoryName: "Securitate",
    questions: [
      {
        questionText: "Accesul în zonele tehnice este restricționat?",
        safetyMeasure:
          "Montați sisteme de închidere și indicatoare de interzicere.",
      },
    ],
  },
  {
    categoryName: "Documente",
    questions: [
      {
        questionText:
          "Verificările periodice ale instalațiilor sunt documentate?",
        safetyMeasure:
          "Programați verificarea restantă și arhivați procesul-verbal rezultat.",
      },
      {
        questionText: "Există evidența exercițiilor de evacuare?",
        safetyMeasure:
          "Organizați exercițiul și completați raportul de desfășurare.",
      },
    ],
  },
  {
    categoryName: "Vizitatori",
    questions: [
      {
        questionText: "Vizitatorii sunt însoțiți în zonele restricționate?",
        safetyMeasure:
          "Introduceți procedura de însoțire și instruiți personalul de recepție.",
      },
    ],
  },
  {
    categoryName: "Recepție",
    questions: [
      {
        questionText: "Zona recepției permite evacuarea rapidă?",
        safetyMeasure:
          "Repoziționați mobilierul pentru a nu restrânge fluxul de evacuare.",
      },
    ],
  },
  {
    categoryName: "Ascensoare",
    questions: [
      {
        questionText: "Instrucțiunile de utilizare sunt afișate?",
        safetyMeasure:
          "Afișați instrucțiunile și numărul pentru intervenții în caz de blocare.",
      },
      {
        questionText: "Reviziile ascensorului sunt la zi?",
        safetyMeasure:
          "Programați imediat revizia și suspendați utilizarea dacă termenul este depășit.",
      },
    ],
  },
  {
    categoryName: "Spații tehnice",
    questions: [
      {
        questionText: "Accesul în camera serverelor este controlat?",
        safetyMeasure:
          "Implementați controlul accesului și evidența persoanelor autorizate.",
      },
      {
        questionText: "Materialele combustibile lipsesc din camerele tehnice?",
        safetyMeasure:
          "Evacuați imediat materialele combustibile și verificați periodic zona.",
      },
    ],
  },
  {
    categoryName: "Exterior",
    questions: [
      {
        questionText: "Aleile pietonale sunt întreținute?",
        safetyMeasure:
          "Reparați denivelările și îndepărtați vegetația care reduce vizibilitatea.",
      },
      {
        questionText: "Rigolele și scurgerile sunt curate?",
        safetyMeasure: "Curățați scurgerile pentru prevenirea acumulării apei.",
      },
    ],
  },
  {
    categoryName: "General",
    questions: [
      {
        questionText: "Neconformitățile din auditul precedent au fost închise?",
        safetyMeasure:
          "Verificați fiecare măsură restantă, desemnați responsabil și urmăriți implementarea până la închidere.",
      },
      {
        questionText:
          "Există riscuri noi generate de modificări ale spațiului?",
        safetyMeasure:
          "Actualizați evaluarea riscurilor și implementați măsuri dedicate modificărilor identificate.",
      },
    ],
  },
];
