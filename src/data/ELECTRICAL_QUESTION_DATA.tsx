import type { QuestionData } from "../useQuestions";

export const ELECTRICAL_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Autorizare",
    questions: [
      {
        questionText:
          "Lucrătorii dețin autorizație ANRE valabilă corespunzătoare nivelului de tensiune?",
        safetyMeasure:
          "Suspendarea activității până la obținerea/autorizarea ANRE corespunzătoare.",
      },
      {
        questionText:
          "Autorizațiile sunt actualizate și disponibile pentru verificare?",
        safetyMeasure:
          "Actualizarea autorizațiilor și arhivarea copiilor la dosarul personal.",
      },
      {
        questionText:
          "Există decizii interne de numire pentru lucrări la instalații electrice?",
        safetyMeasure:
          "Emiterea deciziilor interne și desemnarea oficială a personalului autorizat.",
      },
    ],
  },
  {
    categoryName: "Instruire",
    questions: [
      {
        questionText: "Lucrătorii au efectuat instructajul SSM periodic?",
        safetyMeasure:
          "Refacerea imediată a instructajului SSM și consemnarea în fișele individuale.",
      },
      {
        questionText:
          "Lucrătorii au fost instruiți specific pentru echipamentele deservite?",
        safetyMeasure:
          "Organizarea instruirii specifice pentru echipamentele deservite.",
      },
      {
        questionText:
          "Există dovada instruirii privind lucrul la înălțime (dacă este cazul)?",
        safetyMeasure:
          "Efectuarea cursului de lucru la înălțime și autorizarea personalului.",
      },
    ],
  },
  {
    categoryName: "Proceduri de lucru",
    questions: [
      {
        questionText:
          "Există proceduri scrise pentru intervenții la tablouri electrice generale?",
        safetyMeasure:
          "Elaborarea și implementarea procedurii scrise pentru intervenții.",
      },
      {
        questionText:
          "Există proceduri pentru scoaterea de sub tensiune și verificarea lipsei tensiunii?",
        safetyMeasure:
          "Instruirea personalului privind procedura de scoatere de sub tensiune și verificare.",
      },
      {
        questionText: "Se utilizează permis de lucru pentru intervenții?",
        safetyMeasure:
          "Implementarea sistemului de permis de lucru și controlul aplicării acestuia.",
      },
      {
        questionText: "Se respectă măsurile de blocare și etichetare (LOTO)?",
        safetyMeasure:
          "Aplicarea procedurii LOTO și dotarea cu lacăte și etichete standardizate.",
      },
    ],
  },
  {
    categoryName: "Echipament individual de protecție (EIP)",
    questions: [
      {
        questionText:
          "Lucrătorii utilizează mănuși electroizolante verificate periodic?",
        safetyMeasure:
          "Înlocuirea mănușilor și efectuarea verificărilor periodice conform normelor.",
      },
      {
        questionText: "Se utilizează încălțăminte electroizolantă adecvată?",
        safetyMeasure: "Asigurarea încălțămintei electroizolante certificate.",
      },
      {
        questionText:
          "Se utilizează cască de protecție și vizieră unde este necesar?",
        safetyMeasure:
          "Dotarea personalului cu cască și vizieră adecvată riscurilor identificate.",
      },
      {
        questionText:
          "Există covoare electroizolante în fața tablourilor electrice?",
        safetyMeasure:
          "Montarea covoarelor electroizolante certificate în fața tablourilor.",
      },
    ],
  },
  {
    categoryName: "Dispozitive protecție",
    questions: [
      {
        questionText:
          "Tablourile electrice sunt prevăzute cu întreruptoare automate funcționale?",
        safetyMeasure: "Verificarea și înlocuirea întreruptoarelor defecte.",
      },
      {
        questionText: "Există protecții diferențiale unde este necesar?",
        safetyMeasure: "Montarea protecțiilor diferențiale unde lipsesc.",
      },
      {
        questionText:
          "Sunt montate dispozitive de protecție la suprasarcină și scurtcircuit?",
        safetyMeasure:
          "Instalarea dispozitivelor de protecție la suprasarcină/scurtcircuit.",
      },
      {
        questionText: "Sistemele de împământare sunt verificate periodic?",
        safetyMeasure:
          "Măsurarea prizei de pământ și remedierea rezistenței necorespunzătoare.",
      },
    ],
  },
  {
    categoryName: "Linii de cabluri",
    questions: [
      {
        questionText:
          "Cablurile sunt pozate corespunzător și protejate mecanic?",
        safetyMeasure:
          "Repoziționarea și protejarea mecanică a cablurilor deteriorate.",
      },
      {
        questionText: "Există etichetare clară a circuitelor?",
        safetyMeasure: "Etichetarea corespunzătoare a tuturor circuitelor.",
      },
      {
        questionText: "Nu există conductoare deteriorate sau improvizații?",
        safetyMeasure:
          "Înlocuirea conductoarelor deteriorate și eliminarea improvizațiilor.",
      },
    ],
  },
  {
    categoryName: "Scule",
    questions: [
      {
        questionText: "Sculele utilizate sunt izolate și în stare bună?",
        safetyMeasure:
          "Înlocuirea sculelor neconforme cu scule izolate certificate.",
      },
      {
        questionText:
          "Există verificări periodice pentru scule și aparate de măsură?",
        safetyMeasure:
          "Stabilirea unui program de verificare periodică a sculelor și echipamentelor.",
      },
      {
        questionText:
          "Aparatele de măsură sunt calibrate și verificate metrologic?",
        safetyMeasure:
          "Trimiterea aparatelor la verificare metrologică autorizată.",
      },
    ],
  },
  {
    categoryName: "Lucru la înălțime",
    questions: [
      {
        questionText: "Scările utilizate sunt conforme și în stare bună?",
        safetyMeasure:
          "Înlocuirea scărilor neconforme și verificare periodică documentată.",
      },
      {
        questionText: "Platformele de lucru sunt stabile și securizate?",
        safetyMeasure:
          "Asigurarea stabilității și certificării platformelor de lucru.",
      },
      {
        questionText:
          "Se utilizează echipament anticădere (centură, ham) unde este necesar?",
        safetyMeasure:
          "Dotarea cu echipament anticădere și instruirea utilizatorilor.",
      },
    ],
  },
  {
    categoryName: "Măsuri de protecție",
    questions: [
      {
        questionText:
          "Zona de lucru este delimitată și semnalizată corespunzător?",
        safetyMeasure:
          "Delimitarea și semnalizarea corespunzătoare a zonei de lucru.",
      },
      {
        questionText:
          "Se verifică lipsa tensiunii înainte de începerea lucrării?",
        safetyMeasure:
          "Oprirea lucrării până la verificarea lipsei tensiunii cu aparat omologat.",
      },
      {
        questionText:
          "Se realizează legarea la pământ și în scurtcircuit unde este cazul?",
        safetyMeasure:
          "Realizarea legării la pământ și în scurtcircuit conform procedurii.",
      },
      {
        questionText:
          "Există stingătoare adecvate în apropierea tablourilor electrice?",
        safetyMeasure:
          "Dotarea cu stingătoare adecvate și verificarea valabilității acestora.",
      },
    ],
  },
];
