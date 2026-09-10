import type { QuestionData } from "../useQuestions";

export const OFFICE_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Organizare",
    questions: [
      {
        questionText:
          "Evaluarea riscurilor este disponibilă și actualizată pentru activitatea de birou?",
        safetyMeasure:
          "Actualizați evaluarea pentru modificările apărute (posturi, echipamente, spații) și comunicați noile riscuri personalului.",
      },
      {
        questionText:
          "Instrucțiunile proprii SSM sunt disponibile la locul de muncă?",
        safetyMeasure:
          "Elaborați sau revizuiți instrucțiunile lipsă și puneți-le la dispoziția tuturor lucrătorilor.",
      },
      {
        questionText:
          "Instruirea introductiv-generală și periodică este efectuată la termen?",
        safetyMeasure:
          "Programați imediat instruirea restantă și suspendați activitățile nepermise până la instruire.",
      },
      {
        questionText:
          "Lucrătorii cunosc procedura de raportare a incidentelor?",
        safetyMeasure:
          "Reinstruiți personalul asupra fluxului de raportare și afișați procedura într-o zonă vizibilă.",
      },
    ],
  },
  {
    categoryName: "Ergonomie",
    questions: [
      {
        questionText: "Scaunul este reglabil și stabil?",
        safetyMeasure:
          "Înlocuiți scaunul defect sau reglați înălțimea, spătarul și suportul lombar pentru utilizator.",
      },
      {
        questionText:
          "Monitorul este amplasat la aproximativ lungimea unui braț și cu marginea superioară la nivelul ochilor?",
        safetyMeasure:
          "Repoziționați monitorul sau utilizați un suport dedicat pentru obținerea înălțimii corecte.",
      },
      {
        questionText:
          "Tastatura și mouse-ul permit poziția neutră a încheieturilor?",
        safetyMeasure:
          "Repoziționați perifericele și utilizați suport pentru încheieturi dacă este necesar.",
      },
      {
        questionText:
          "Există suficient spațiu pentru membrele inferioare sub birou?",
        safetyMeasure:
          "Îndepărtați obiectele depozitate sub birou și reorganizați cablurile sau unitatea PC.",
      },
      {
        questionText: "Reflexiile pe monitor sunt reduse?",
        safetyMeasure:
          "Reorientați monitorul față de ferestre sau instalați sisteme de umbrire.",
      },
      {
        questionText: "Lucrătorii fac pauze regulate la lucrul cu monitorul?",
        safetyMeasure:
          "Introduceți pauze programate și informați personalul privind alternarea activităților.",
      },
    ],
  },
  {
    categoryName: "Electric",
    questions: [
      {
        questionText: "Prizele sunt fixe și fără urme de supraîncălzire?",
        safetyMeasure:
          "Scoateți priza din exploatare și înlocuiți-o prin personal autorizat.",
      },
      {
        questionText: "Prelungitoarele nu sunt suprasolicitate?",
        safetyMeasure:
          "Redistribuiți consumatorii pe circuite diferite și eliminați conectările în cascadă.",
      },
      {
        questionText: "Cablurile deteriorate au fost înlocuite?",
        safetyMeasure:
          "Înlocuiți imediat cablul deteriorat; este interzisă repararea prin bandă izolatoare.",
      },
      {
        questionText: "Tablourile electrice sunt accesibile?",
        safetyMeasure:
          "Eliberați zona de minimum 1 m din fața tabloului și interziceți depozitarea.",
      },
      {
        questionText: "Echipamentele defecte sunt scoase din uz?",
        safetyMeasure:
          "Etichetați echipamentul 'Nu utilizați' și transmiteți-l la reparații.",
      },
    ],
  },
  {
    categoryName: "Incendiu",
    questions: [
      {
        questionText: "Stingătoarele sunt în termen și sigilate?",
        safetyMeasure:
          "Trimiteți stingătorul la verificare sau înlocuire și înlocuiți temporar cu unul conform.",
      },
      {
        questionText: "Accesul la stingătoare este liber?",
        safetyMeasure:
          "Îndepărtați mobilierul sau materialele care împiedică accesul.",
      },
      {
        questionText:
          "Materialele combustibile sunt depozitate departe de surse de căldură?",
        safetyMeasure:
          "Relocați arhiva și consumabilele la distanță sigură față de radiatoare și aparate.",
      },
    ],
  },
  {
    categoryName: "Evacuare",
    questions: [
      {
        questionText: "Căile de evacuare sunt complet libere?",
        safetyMeasure:
          "Îndepărtați imediat obstacolele și interziceți depozitarea pe traseu.",
      },
      {
        questionText: "Indicatoarele de evacuare sunt vizibile?",
        safetyMeasure:
          "Înlocuiți indicatoarele lipsă sau mascate și verificați iluminarea acestora.",
      },
      {
        questionText: "Ușile de evacuare se deschid fără cheie din interior?",
        safetyMeasure:
          "Remediați sistemul de închidere și eliminați blocarea cu lacăte sau mobilier.",
      },
    ],
  },
  {
    categoryName: "Prim ajutor",
    questions: [
      {
        questionText: "Trusa de prim ajutor este completă?",
        safetyMeasure:
          "Completați fiecare material lipsă conform conținutului obligatoriu.",
      },
      {
        questionText: "Materialele din trusă sunt în termen de valabilitate?",
        safetyMeasure:
          "Înlocuiți exclusiv produsele expirate și actualizați registrul verificărilor.",
      },
      {
        questionText: "Persoanele desemnate cunosc amplasarea trusei?",
        safetyMeasure:
          "Reinstruiți personalul desemnat și marcați suplimentar amplasarea.",
      },
    ],
  },
  {
    categoryName: "Microclimat",
    questions: [
      {
        questionText: "Temperatura este adecvată activității sedentare?",
        safetyMeasure:
          "Reglați instalația HVAC sau utilizați măsuri temporare până la remedierea defecțiunii.",
      },
      {
        questionText: "Ventilația asigură aer proaspăt?",
        safetyMeasure:
          "Curățați filtrele instalației și stabiliți un program de aerisire.",
      },
    ],
  },
  {
    categoryName: "Iluminat",
    questions: [
      {
        questionText: "Corpurile de iluminat defecte sunt înlocuite?",
        safetyMeasure:
          "Înlocuiți sursele de lumină defecte și verificați uniformitatea iluminării.",
      },
      {
        questionText:
          "Nivelul de iluminare permite citirea documentelor fără efort?",
        safetyMeasure: "Suplimentați iluminatul local pe biroul afectat.",
      },
    ],
  },
  {
    categoryName: "Ordine",
    questions: [
      {
        questionText: "Dulapurile sunt închise și stabile?",
        safetyMeasure:
          "Ancorați mobilierul instabil și reparați sistemele de închidere.",
      },
      {
        questionText: "Rafturile nu sunt supraîncărcate?",
        safetyMeasure:
          "Redistribuiți documentele și mutați obiectele grele pe polițele inferioare.",
      },
      {
        questionText: "Podelele sunt curate și uscate?",
        safetyMeasure:
          "Curățați imediat lichidele vărsate și semnalizați zona până la uscare.",
      },
    ],
  },
  {
    categoryName: "Echipamente",
    questions: [
      {
        questionText:
          "Imprimantele sunt amplasate astfel încât să nu blocheze circulația?",
        safetyMeasure:
          "Repoziționați imprimanta într-o zonă dedicată accesibilă.",
      },
      {
        questionText:
          "Distrugătorul de documente este utilizat conform instrucțiunilor?",
        safetyMeasure:
          "Îndepărtați materialele nepotrivite și reinstruiți utilizatorii.",
      },
    ],
  },
  {
    categoryName: "Depozitare",
    questions: [
      {
        questionText: "Cutiile arhivei sunt stivuite stabil?",
        safetyMeasure:
          "Reduceți înălțimea stivei și utilizați rafturi adecvate.",
      },
      {
        questionText: "Greutățile sunt manipulate fără răsucirea trunchiului?",
        safetyMeasure:
          "Reorganizați depozitarea pentru ridicare frontală și utilizați cărucioare.",
      },
    ],
  },
  {
    categoryName: "Psihosocial",
    questions: [
      {
        questionText: "Volumul de muncă permite efectuarea pauzelor?",
        safetyMeasure:
          "Reechilibrați sarcinile și planificați pauze obligatorii.",
      },
      {
        questionText: "Există procedură pentru raportarea hărțuirii?",
        safetyMeasure: "Comunicați procedura și desemnați persoana de contact.",
      },
    ],
  },
  {
    categoryName: "Igienă",
    questions: [
      {
        questionText: "Grupurile sanitare sunt aprovizionate?",
        safetyMeasure:
          "Completați consumabilele lipsă și introduceți verificări zilnice.",
      },
      {
        questionText:
          "Zona de servire a mesei este separată de posturile de lucru?",
        safetyMeasure:
          "Interziceți servirea mesei la birourile cu echipamente și amenajați spațiu dedicat.",
      },
    ],
  },
  {
    categoryName: "Documente",
    questions: [
      {
        questionText: "Fișele de instruire sunt completate și semnate?",
        safetyMeasure:
          "Completați documentele lipsă și refaceți instruirea dacă nu poate fi demonstrată.",
      },
      {
        questionText: "Controalele interne SSM sunt documentate?",
        safetyMeasure:
          "Înregistrați verificarea și urmăriți închiderea măsurilor dispuse.",
      },
    ],
  },
  {
    categoryName: "Urgențe",
    questions: [
      {
        questionText: "Lista numerelor de urgență este afișată?",
        safetyMeasure: "Afișați lista actualizată lângă telefoanele utilizate.",
      },
      {
        questionText: "Personalul cunoaște punctul de adunare?",
        safetyMeasure:
          "Organizați exercițiu practic și actualizați planul afișat.",
      },
    ],
  },
  {
    categoryName: "IT",
    questions: [
      {
        questionText:
          "Laptopurile utilizate frecvent sunt conectate la monitor extern când activitatea este îndelungată?",
        safetyMeasure:
          "Asigurați stație de andocare și monitor extern pentru utilizatorii permanenți.",
      },
      {
        questionText:
          "Acumulatorii umflați sau deteriorați sunt retrași din utilizare?",
        safetyMeasure:
          "Izolați echipamentul și trimiteți-l pentru înlocuirea bateriei.",
      },
    ],
  },
  {
    categoryName: "Curățenie",
    questions: [
      {
        questionText: "Coșurile de deșeuri sunt golite periodic?",
        safetyMeasure:
          "Stabiliți frecvență de colectare și eliminați deșeurile acumulate.",
      },
    ],
  },
  {
    categoryName: "Vizitatori",
    questions: [
      {
        questionText:
          "Vizitatorii sunt informați privind regulile de evacuare?",
        safetyMeasure: "Introduceți informarea la recepție înainte de acces.",
      },
    ],
  },
  {
    categoryName: "Contractori",
    questions: [
      {
        questionText:
          "Lucrările executate de firme externe sunt coordonate SSM?",
        safetyMeasure:
          "Instruiți contractorul și emiteți permisul de lucru unde este necesar.",
      },
    ],
  },
  {
    categoryName: "General",
    questions: [
      {
        questionText:
          "Neconformitățile identificate anterior au fost remediate la termen?",
        safetyMeasure:
          "Verificați fiecare măsură restantă, desemnați responsabil și stabiliți un nou termen justificat.",
      },
      {
        questionText:
          "Există obiecte depozitate pe dulapuri înalte cu risc de cădere?",
        safetyMeasure:
          "Îndepărtați obiectele de pe partea superioară a dulapurilor și depozitați-le în spații dedicate.",
      },
    ],
  },
];
