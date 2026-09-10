import type { QuestionData } from "../useQuestions";

export const HAZARDOUS_AREAS_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Riscuri mecanice",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru echipamente cu piese în mișcare (axe, curele, roți dințate, lanțuri)?",
        safetyMeasure:
          "Implementarea protecțiilor tehnice conforme SR EN ISO 14120, instalarea sistemelor de blocare (LOTO) și revizuirea evaluării de risc.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru zone cu risc de prindere, strivire, tăiere sau agățare?",
        safetyMeasure:
          "Delimitarea zonelor periculoase, montarea protecțiilor fixe/mobile interblocate și instruirea specifică a personalului.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru unelte electrice sau mecanice portabile?",
        safetyMeasure:
          "Verificare PRAM periodică, utilizare doar de personal instruit și implementarea registrului de evidență a verificărilor.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru suprafețe alunecoase sau obstacole pe căile de circulație?",
        safetyMeasure:
          "Aplicarea tratamentelor antiderapante, implementarea procedurii 5S și inspecții zilnice documentate.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de cădere a obiectelor de la înălțime?",
        safetyMeasure:
          "Montarea plintelor de protecție, plase anti-cădere și stabilirea zonelor de excludere.",
      },
      {
        questionText: "Zona este marcată vizibil?",
        safetyMeasure: "Semnalizare conform HG 971/2006 și standard ISO 7010.",
      },
      {
        questionText:
          "Se utilizează protecții fizice (carcase, apărători, balustrade)?",
        safetyMeasure:
          "Instalarea apărătorilor conforme și verificarea integrității acestora prin audit tehnic.",
      },
      {
        questionText:
          "Accesul este restricționat pentru persoanele neautorizate?",
        safetyMeasure:
          "Control acces prin sisteme fizice/electronice și procedură de autorizare.",
      },
      {
        questionText: "Protecțiile sunt montate corect și funcționale?",
        safetyMeasure:
          "Inspecții tehnice periodice și interzicerea utilizării echipamentelor neconforme.",
      },
      {
        questionText: "Se respectă distanțele de siguranță?",
        safetyMeasure:
          "Reconfigurarea layout-ului conform normelor tehnice aplicabile.",
      },
      {
        questionText:
          "Se utilizează echipament individual de protecție (EIP) adecvat (mănuși, cască, încălțăminte protecție)?",
        safetyMeasure:
          "Reevaluarea riscurilor și actualizarea matricei de acordare EIP.",
      },
    ],
  },
  {
    categoryName: "Riscuri chimice",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru cazul în care se utilizează substanțe toxice, corozive sau inflamabile?",
        safetyMeasure:
          "Implementarea procedurii de management al substanțelor chimice și evaluare COSHH/CLP.",
      },
      {
        questionText: "Există fișe cu date de securitate disponibile?",
        safetyMeasure:
          "Actualizarea bazei de date SDS și acces electronic pentru angajați.",
      },
      {
        questionText: "Recipientele sunt etichetate corespunzător?",
        safetyMeasure:
          "Etichetare conform Regulamentului CLP și audit intern lunar.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru cazul în care se produce inhalare/contact/ingestie?",
        safetyMeasure:
          "Implementarea controalelor tehnice (ventilație locală) și EIP adecvat.",
      },
      {
        questionText: "Spațiul este ventilat corespunzător?",
        safetyMeasure:
          "Instalarea ventilației mecanice și monitorizarea parametrilor de aer.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de reacții chimice periculoase?",
        safetyMeasure: "Separarea substanțelor incompatibile și analiză HAZOP.",
      },
      {
        questionText:
          "Se utilizează echipament individual de protecție (EIP) adecvat (măști, mănuși, combinezoane)?",
        safetyMeasure:
          "Dotarea cu echipamente certificate EN (măști, combinezoane) și instruire practică.",
      },
      {
        questionText: "Există truse pentru intervenție la scurgeri?",
        safetyMeasure:
          "Dotarea cu kit-uri absorbante și instruirea echipei de intervenție.",
      },
      {
        questionText: "Există dușuri de urgență/spălătoare oculare?",
        safetyMeasure:
          "Instalare conform EN 15154 și verificare lunară documentată.",
      },
    ],
  },
  {
    categoryName: "Riscuri fizice",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru cazul în care nivelul de zgomot depășește limitele admise?",
        safetyMeasure:
          "Măsurători fonice autorizate și implementare program de conservare a auzului.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de vibrații excesive?",
        safetyMeasure:
          "Evaluare conform Directivei 2002/44/CE și limitarea expunerii.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de radiații (ionizante/neionizante)?",
        safetyMeasure:
          "Monitorizare dozimetrică și delimitarea zonelor controlate.",
      },
      {
        questionText: "Iluminatul este adecvat?",
        safetyMeasure:
          "Măsurători luxmetrice și ajustare conform SR EN 12464-1.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de temperatură extremă (căldură/frig)?",
        safetyMeasure:
          "Implementare măsuri tehnice (HVAC) și pauze reglementate.",
      },
      {
        questionText: "Se utilizează protecție auditivă/termică?",
        safetyMeasure: "Distribuire EIP certificat și control utilizare.",
      },
    ],
  },
  {
    categoryName: "Riscuri de incendiu",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de materiale inflamabile în zonă?",
        safetyMeasure:
          "Depozitare în dulapuri antifoc și limitarea cantităților.",
      },
      {
        questionText: "Sursele de aprindere sunt controlate?",
        safetyMeasure: "Implementare procedură Hot Work Permit.",
      },
      {
        questionText: "Instalația electrică este verificată periodic?",
        safetyMeasure: "Verificări PRAM și mentenanță preventivă documentată.",
      },
      {
        questionText: "Stingătoarele sunt disponibile și verificate?",
        safetyMeasure: "Revizie anuală autorizată și marcaj vizibil.",
      },
      {
        questionText: "Căile de evacuare sunt marcate și libere?",
        safetyMeasure: "Semnalizare iluminată și exerciții periodice.",
      },
      {
        questionText: "Personalul este instruit pentru situații de urgență?",
        safetyMeasure: "Training anual și simulări documentate.",
      },
    ],
  },
  {
    categoryName: "Riscuri de explozie",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de atmosfere potențial explozive (gaze, vapori, pulberi)?",
        safetyMeasure: "Evaluare ATEX și document DEX elaborat.",
      },
      {
        questionText:
          "Zona este clasificată corespunzător (ATEX, dacă este cazul)?",
        safetyMeasure: "Clasificare zonă conform Directivei 1999/92/CE.",
      },
      {
        questionText: "Echipamentele sunt certificate pentru medii explozive?",
        safetyMeasure:
          "Utilizare echipamente certificate ATEX corespunzătoare zonei.",
      },
      {
        questionText: "Există sistem de ventilare adecvat?",
        safetyMeasure: "Ventilație antiex conform cerințelor tehnice.",
      },
      {
        questionText:
          "Sunt eliminate sursele de scântei/descărcări electrostatice?",
        safetyMeasure: "Legare la pământ și utilizare echipamente antistatice.",
      },
    ],
  },
  {
    categoryName: "Riscuri la înălțime",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de lucru la peste 2m?",
        safetyMeasure:
          "Implementare sistem protecție colectivă și individuală conform HG 300/2006.",
      },
      {
        questionText: "Schelele/scările sunt conforme și verificate?",
        safetyMeasure: "Verificare ISCIR și inspecții zilnice documentate.",
      },
      {
        questionText: "Există balustrade și plase de protecție?",
        safetyMeasure: "Montare protecții colective certificate.",
      },
      {
        questionText: "Se utilizează centuri și sisteme de ancorare?",
        safetyMeasure: "Instalare puncte ancorare certificate EN 795.",
      },
      {
        questionText: "Există plan de salvare în caz de cădere?",
        safetyMeasure:
          "Elaborare plan de salvare și instruire echipă intervenție.",
      },
    ],
  },
  {
    categoryName: "Riscuri naturale",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de expunere a zonei la inundații, cutremure, alunecări de teren?",
        safetyMeasure: "Evaluare risc și plan de continuitate operațională.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de furtuni/descărcări electrice atmosferice?",
        safetyMeasure:
          "Instalare paratrăsnet și procedură întrerupere activitate.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de temperaturi extreme?",
        safetyMeasure:
          "Plan de măsuri pentru caniculă/ger conform legislației.",
      },
      {
        questionText: "Există proceduri pentru situații meteo severe?",
        safetyMeasure: "Implementare plan de urgență meteo.",
      },
    ],
  },
  {
    categoryName: "Riscuri biologice",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de contact cu agenți biologici (bacterii, virusuri, fungi)?",
        safetyMeasure: "Evaluare risc biologic conform HG 1092/2006.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de manipulare a deșeurilor biologice?",
        safetyMeasure:
          "Procedură gestionare deșeuri conform normelor sanitare.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de înțepături/mușcături?",
        safetyMeasure: "Dotare cu EIP adecvat și protocol post-expunere.",
      },
      {
        questionText: "Se aplică proceduri de dezinfectare?",
        safetyMeasure: "Implementare plan curățenie și dezinfecție validat.",
      },
      {
        questionText: "Există vaccinări/controale medicale specifice?",
        safetyMeasure: "Program vaccinare și supraveghere medicală periodică.",
      },
    ],
  },
  {
    categoryName: "Medii speciale",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de spațiu închis (rezervor, puț, canalizare)?",
        safetyMeasure: "Aplicare procedură Confined Space Entry Permit.",
      },
      {
        questionText: "S-a efectuat măsurarea atmosferei (O₂, gaze toxice)?",
        safetyMeasure: "Monitorizare continuă O2/gaze cu detector certificat.",
      },
      {
        questionText: "Există autorizație de lucru?",
        safetyMeasure: "Implementare sistem Permit to Work.",
      },
      {
        questionText: "Există supraveghere permanentă la exterior?",
        safetyMeasure: "Desemnare supraveghetor permanent la exterior.",
      },
      {
        questionText: "Există echipament de salvare pregătit?",
        safetyMeasure:
          "Dotare cu troliu, trepied și echipament de respirație autonom.",
      },
    ],
  },
  {
    categoryName: "Riscuri psihice",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de suprasolicitare fizică sau mentală?",
        safetyMeasure: "Evaluare psihosocială și redistribuire sarcini.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru lucrul în ture inclusiv de noapte?",
        safetyMeasure:
          "Evaluare risc specific și controale medicale suplimentare.",
      },
      {
        questionText:
          "Sunt implementate măsuri împotriva presiunii excesive pentru respectarea termenelor?",
        safetyMeasure:
          "Revizuire planificare și management realist al termenelor.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru conflictele de la locul de muncă?",
        safetyMeasure:
          "Implementare procedură mediere și politici anti-hărțuire.",
      },
      {
        questionText: "Există programe de suport psihologic?",
        safetyMeasure:
          "Implementare program Employee Assistance Program (EAP).",
      },
    ],
  },
  {
    categoryName: "Riscuri electrice",
    questions: [
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de a se afla părți active sub tensiune care pot fi atinse accidental?",
        safetyMeasure:
          "Protejarea prin carcase, ecrane sau bariere de protecție.",
      },
      {
        questionText:
          "Accesul la instalația electrică este restricționat persoanelor neautorizate?",
        safetyMeasure:
          "Montarea ușilor încuiate și implementarea controlului accesului.",
      },
      {
        questionText:
          "Sunt montate indicatoare de avertizare «Pericol de electrocutare»?",
        safetyMeasure: "Instalarea semnalizării conforme.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul creării de arc electric la manevrarea echipamentelor?",
        safetyMeasure:
          "Aplicarea procedurilor de lucru și utilizarea EIP adecvat.",
      },
      {
        questionText:
          "Sunt tablourile electrice prevăzute cu protecții împotriva atingerii directe?",
        safetyMeasure:
          "Remedierea sau înlocuirea protecțiilor lipsă ori deteriorate.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de a exista conductoare neizolate sau cu izolația deteriorată?",
        safetyMeasure: "Înlocuirea imediată a conductoarelor defecte.",
      },
      {
        questionText:
          "Sunt respectate distanțele de securitate față de instalațiile aflate sub tensiune?",
        safetyMeasure: "Delimitarea și marcarea zonelor de protecție.",
      },
      {
        questionText:
          "Sunt implementate măsuri pentru riscul de a exista umiditate, apă sau atmosferă conductivă care poate crește riscul de electrocutare?",
        safetyMeasure:
          "Eliminarea cauzelor și utilizarea echipamentelor cu grad de protecție corespunzător.",
      },
      {
        questionText:
          "Instalația este protejată prin legare la pământ și dispozitive diferențiale funcționale?",
        safetyMeasure:
          "Refacerea protecțiilor și verificarea funcționării acestora.",
      },
      {
        questionText:
          "Sunt efectuate la termen verificările PRAM și măsurătorile instalației electrice?",
        safetyMeasure:
          "Programarea verificărilor și remedierea neconformităților identificate.",
      },
      {
        questionText:
          "Sunt căile de acces la tablourile electrice libere și neobstrucționate?",
        safetyMeasure:
          "Se va asigura zona degrevată de sarcini libere și neobstructionate.",
      },
      {
        questionText:
          "Deservirea și mentenanța se efectuează de lucrători autorizați profesional?",
        safetyMeasure:
          "Se va asigura deservirea de către lucrători autorizați profesional.",
      },
    ],
  },
];
