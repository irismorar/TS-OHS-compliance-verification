import type { QuestionData } from "../useQuestions";

export const WORK_AT_HEIGHT_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Documentație",
    questions: [
      {
        questionText: "Există evaluare de risc specifică lucrării?",
        safetyMeasure:
          "Este obligatorie evaluarea riscurilor profesionale în SSM. Evaluarea de risc se va actualiza în situațiile impuse de lege sau de câte ori sunt modificări ale condițiilor de lucru, aprobată și comunicată.",
      },
      {
        questionText: "Este emis permis de lucru la înălțime?",
        safetyMeasure:
          "Angajatorul trebuie să dețină o procedură prin care activitatea de lucru la înălțime să fie considerată zonă periculoasă, procedură de emitere a unui permis de lucru pentru condițiile specifice, permis completat, semnat și valabil pentru schimbul de lucru.",
      },
      {
        questionText: "Există instrucțiuni/proceduri SSM?",
        safetyMeasure:
          "Angajatorul este obligat să elaboreze instrucțiuni proprii SSM și instrucțiuni de lucru. Acestea trebuie să fie disponibile lucrătorilor și respectate de către aceștia.",
      },
      {
        questionText: "Lucrătorii au instruire SSM la zi?",
        safetyMeasure:
          "Instruirea lucrătorilor se va efectua în toate formele, se impun și instruiri specifice lucrărilor executate. Instruirile se consemnează în fișele individuale de instruire SSM.",
      },
      {
        questionText: "Este desemnat un responsabil?",
        safetyMeasure:
          "Pentru lucrările la înălțime, angajatorul desemnează un responsabil de lucrare, competent și informat cu instrucțiunile SSM și procedurile de lucru aprobate.",
      },
    ],
  },
  {
    categoryName: "Personal",
    questions: [
      {
        questionText: "Lucrătorii sunt apți medical?",
        safetyMeasure:
          "Activitatea la înălțime poate fi desfășurată numai de către lucrători apți pentru lucru la înălțime. Aceștia trebuie să dețină fișa de aptitudine medicală valabilă.",
      },
      {
        questionText: "Au calificare pentru echipamente?",
        safetyMeasure:
          "Lucrătorii care desfășoară lucrări la înălțime obligatoriu trebuie să fie formați pentru această activitate, prin cursuri de scurtă durată specifice și să dețină astfel de competențe.",
      },
      {
        questionText: "Cunosc procedurile de salvare?",
        safetyMeasure:
          "În cadrul formării profesionale, lucrătorii vor efectua și instruire practică privind procedurile de salvare în caz de pericol.",
      },
      {
        questionText: "Lucrătorii sunt în stare corespunzătoare?",
        safetyMeasure:
          "Angajatorul va elabora o procedură de verificare a lucrătorilor în ce privește starea de oboseală, consum de alcool sau droguri, precum și a stării de sănătate generală.",
      },
    ],
  },
  {
    categoryName: "Echipamente",
    questions: [
      {
        questionText: "Schelele sunt montate corect?",
        safetyMeasure:
          "Angajatorul va numi un responsabil pentru verificarea schelelor. Verificarea se va efectua periodic și se va consemna în registrul de activitate.",
      },
      {
        questionText: "Scările sunt stabile și sigure?",
        safetyMeasure:
          "Scările vor fi verificate înaintea folosirii. Nu sunt admise scările defecte sau fără dispozitive de fixare funcționale.",
      },
      {
        questionText: "Platformele sunt complete și sigure?",
        safetyMeasure:
          "Se va efectua verificarea platformelor înaintea începerii lucrului. Nu sunt admise goluri neprotejate, iar suprafața acestora trebuie să fie antiderapantă.",
      },
      {
        questionText: "Există balustrade și protecții laterale?",
        safetyMeasure:
          "Verificarea schelelor se va face de responsabilul desemnat. Nu se admit montări incomplete și montaje fără dispozitivele și/sau balustradele de siguranță.",
      },
      {
        questionText: "Nacelele sunt verificate tehnic?",
        safetyMeasure:
          "Exploatarea nacelelor se va face conform dispozițiilor PTISCIR. Verificările ISCIR/tehnice sunt obligatorii.",
      },
    ],
  },
  {
    categoryName: "Echipament individual de protecție (EIP)",
    questions: [
      {
        questionText: "Se folosește casca cu prindere?",
        safetyMeasure:
          "Pentru activitate la înălțime, căștile de protecție acordate ca EIP vor fi de tip cu bentiță de susținere. Obligatorii pentru tot personalul.",
      },
      {
        questionText: "Se utilizează ham anticădere?",
        safetyMeasure:
          "Lucrătorii vor fi dotați cu ham certificat și corect purtat.",
      },
      {
        questionText: "Există lonjă cu absorber de energie?",
        safetyMeasure:
          "Lonja cu absorbție de energie este obligatorie acolo unde nu se poate asigura o metodă de protecție colectivă.",
      },
      {
        questionText: "Punctele de ancorare sunt conforme?",
        safetyMeasure:
          "Înainte de începerea lucrărilor, responsabilul de lucrare verifică punctele de ancorare și aprobă efectuarea activităților.",
      },
      {
        questionText: "Se folosește încălțăminte adecvată?",
        safetyMeasure:
          "Angajatorul va acorda EIP corespunzător, încălțămintea de protecție obligatoriu trebuind să fie antiderapantă, cu bombeu metalic, antiumezeală, cu protejarea întregii labe a piciorului.",
      },
    ],
  },
  {
    categoryName: "Protecție",
    questions: [
      {
        questionText: "Sunt identificate zonele cu risc?",
        safetyMeasure:
          "Verificarea zonelor cu risc se va face zilnic de către responsabilul de lucrare. Zonele se vor marca obligatoriu cu semnalizarea riscurilor și se vor comunica lucrătorilor.",
      },
      {
        questionText: "Există sisteme colective de protecție?",
        safetyMeasure:
          "Se vor monta obligatoriu balustrade/plase de protecție ca mijloace de protecție colectivă.",
      },
      {
        questionText: "Se folosesc sisteme individuale unde e cazul?",
        safetyMeasure:
          "Se admit numai lucrările la care lucrătorii sunt dotați și folosesc ham și ancorare obligatorie. Se interzice activitatea fără aceste echipamente de protecție individuală.",
      },
      {
        questionText: "Ancorarea este corectă și sigură?",
        safetyMeasure:
          "Responsabilul cu verificarea eșafodajului sau a schelelor verifică periodic rezistența schelei și consemnează verificarea în registru conform procedurii aprobate.",
      },
    ],
  },
  {
    categoryName: "Zona de lucru",
    questions: [
      {
        questionText: "Zona este delimitată și semnalizată?",
        safetyMeasure:
          "Zona se delimitează și se semnalizează cu mijloace de avertizare, benzi și grilaje. Zona se consideră restrictivă, accesul fiind permis numai lucrătorilor nominalizați.",
      },
      {
        questionText: "Există protecție împotriva căderii obiectelor?",
        safetyMeasure:
          "Zonele de schele vor fi prevăzute cu copertine și plase de protecție montate pentru protejarea zonelor de acces a lucrătorilor.",
      },
      {
        questionText: "Accesul este restricționat?",
        safetyMeasure: "Control acces persoane.",
      },
      {
        questionText: "Iluminatul este suficient?",
        safetyMeasure: "Iluminare adecvată.",
      },
    ],
  },
  {
    categoryName: "Mediu",
    questions: [
      {
        questionText: "Condițiile meteo sunt favorabile?",
        safetyMeasure:
          "Este interzisă activitatea la înălțime în condiții meteorologice precare cu vânt puternic/ploaie/polei.",
      },
      {
        questionText: "Suprafețele sunt sigure?",
        safetyMeasure:
          "Este interzisă activitatea pe schele sau pe suprafețe la înălțime care prezintă suprafețe cu gheață, umede sau alunecoase.",
      },
    ],
  },
  {
    categoryName: "Scule",
    questions: [
      {
        questionText: "Sculele sunt verificate și sigure?",
        safetyMeasure:
          "Întreținerea și verificarea periodică sunt obligatorii. Sculele uzate sau defecte vor fi înlocuite.",
      },
      {
        questionText: "Sculele sunt asigurate împotriva căderii?",
        safetyMeasure:
          "Se vor folosi sisteme de prindere a sculelor, cabluri, teci care să asigure reținerea sculelor în caz de prindere defectuoasă, alunecare sau cădere.",
      },
    ],
  },
  {
    categoryName: "Urgențe",
    questions: [
      {
        questionText: "Există plan de salvare?",
        safetyMeasure:
          "Planul de salvare este parte componentă a Planului de securitate SSM pentru execuția șantierului. Procedura trebuie să fie clară și cunoscută.",
      },
      {
        questionText: "Există trusă de prim ajutor?",
        safetyMeasure:
          "Trusa de prim ajutor medical este obligatorie. Aceasta trebuie să fie completă și accesibilă în caz de nevoie.",
      },
      {
        questionText: "Există mijloace de comunicare?",
        safetyMeasure:
          "La nivelul șantierului sau al zonei de intervenție, se va asigura mijloc de comunicare, telefon funcțional.",
      },
    ],
  },
  {
    categoryName: "Control",
    questions: [
      {
        questionText: "Se face supraveghere continuă?",
        safetyMeasure: "Angajatorul numește responsabilul de lucrare.",
      },
      {
        questionText: "Se respectă procedurile pe durata lucrării?",
        safetyMeasure:
          "Monitorizarea constantă se va efectua de către lucrătorii desemnați conform procedurilor de lucru și SSM aprobate de angajator.",
      },
      {
        questionText: "Lucrul se oprește în condiții periculoase?",
        safetyMeasure:
          "În condiții periculoase sau în cazul evenimentelor se va aplica procedura OPREȘTE-ANUNȚĂ-AȘTEAPTĂ, aprobată de angajator și asumată de toți lucrătorii. Regula se aplică fără excepții.",
      },
    ],
  },
];
