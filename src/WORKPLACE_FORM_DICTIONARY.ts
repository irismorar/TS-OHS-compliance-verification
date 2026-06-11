type WorkplaceForm = {
  question: string;
  safety_measure: string;
  generic_answer: string;
}[];

export const WORKPLACE_FORM_DICTIONARY: WorkplaceForm = [
  {
    question:
      "Există desemnat lucrător/serviciu intern/extern de prevenire și protecție?",
    safety_measure:
      "Se vor numi lucrătorii SSM și cei cu atribuții în domeniul SSM conform dispozițiilor legale, se va apela la servicii externe după caz.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Sunt afișate responsabilitățile SSM (lucrători, conducători loc de muncă)?",
    safety_measure:
      "Se vor aduce la cunostință lucrătorilor prin afișare sau încărcare în sistem informatic accesibil, sarcinile pe care le au aceștia.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Instruirea periodică este efectuată conform programului?",
    safety_measure:
      "Se va verifica periodicitatea efectuării instruirii. Se propune analiza calității instruirii, periodicitatea și timpul aferent acesteia.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Sunt comunicate procedurile și instrucțiunile proprii SSM?",
    safety_measure:
      "Procedurile și IPSSM se vor comunica lucrătorilor prin sistem de date încărcat în server cu acces din orice loc de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Există planul de prevenire și protecție actualizat?",
    safety_measure:
      "P.P.P. se va analiza periodic și, în funcție de modificarile structurale, în baza rezultatelor evaluării riscurilor se va adapta la noile cerințe.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Există planul de evacuare în situații de urgență și este afișat?",
    safety_measure:
      "Se va actualiza planul de evacuare și se va afișa la locurile de muncă din cadrul unității.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Există trusa medicală de prim ajutor, verificată și completă?",
    safety_measure:
      "Se vor verifica lunar trusele de prim ajutor, se vor completa cu necesarul medical.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Evaluarea riscurilor este realizată pentru toate locurile de muncă?",
    safety_measure:
      "Se propune reevaluarea riscurilor în SSM, ținându-se cont de sistemele de muncă existente, riscurile specifice și GSR.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Documentul de evaluare este actualizat (anual sau la schimbări)?",
    safety_measure:
      "Se propune reevaluarea riscurilor în SSM, ținându-se cont de sistemele de muncă existente, riscurile specifice și GSR.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Sunt identificate riscurile generale și specifice?",
    safety_measure:
      "În procedura de evaluare se vor identifica riscurile generale și cele specifice sistemelor de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Se cunosc măsurile de prevenire stabilite în evaluare?",
    safety_measure:
      "Măsurile din PPP se vor defalca pe categorii - lucrători și conducători ai locurilor de muncă, se vor informa lucrătorii despre acestea.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Măsurile sunt implementate și monitorizate?",
    safety_measure: "Se impune verificarea implementării măsurilor din PPP.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Există registre de accidente ușoare/incidente?",
    safety_measure:
      "Verificarea registrelor de evidență a evenimentelor, verificarea consemnării fiecărui eveniment în aceste registre.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Se efectuează analiza periodică a riscurilor reziduale?",
    safety_measure:
      "Efectuarea reevaluărilor riscurilor după implementarea programelor de prevenire din PPP.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Căile de acces sunt libere, marcate și în stare bună?",
    safety_measure:
      "Se vor marca și semnaliza căile de acces. Se interzice depozitatea de sarcini pe aceste căi de acces și se va verifica calitatea acestora.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Iluminatul este corespunzător, natural/artificial?",
    safety_measure:
      "Se va efectua cel puțin anual măsurarea fluxului luminos la locurile de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Ventilația/aerisirea este adecvată?",
    safety_measure:
      "Se va nominaliza lucrătorul responsabil cu sistemul de ventilație/climatizare pe categorii de locuri de muncă. Se raportează imediat și se remediază deficiențele.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Temperatura este corespunzătoare activității desfășurate?",
    safety_measure:
      "Se va verifica periodic temperatura mediului de muncă. Se vor aplica măsuri de protecție corespunzătoare.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Posturile de lucru sunt ergonomice (poziție corectă, mobilier adecvat)?",
    safety_measure:
      "Se propune efectuarea evaluării ergonomiei locurilor de muncă existente.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Starea generală de curățenie și ordine este satisfăcătoare?",
    safety_measure:
      "Se solicită verificarea săptămânală a locurilor de muncă. Conducătorul direct va verifica zilnic curățenia și ordinea la începutul și sfârșitul schimbului de lucru.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Zgomotul, vibrațiile, praful, substanțele chimice sunt menținute în limite?",
    safety_measure:
      "Pentru măsuri eficiente se vor realiza măsurători oficiale și se vor implementa măsurile specifice indicate.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Echipamentele tehnice sunt verificate și autorizate (ISCIR, dacă se aplică)?",
    safety_measure:
      "Se va verifica autorizarea și certificarea fiecărui echipament de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Instalațiile electrice sunt protejate, inscripționate și verificate periodic?",
    safety_measure:
      "Se vor efectua verificările periodice specifice acestor instalații.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Există protecții pentru părțile în mișcare ale utilajelor?",
    safety_measure:
      "Se vor verifica toate dispozitivele și sistemele de protecție, precum și mentenanța acestora.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Locurile periculoase sunt identificate și marcate corespunzător?",
    safety_measure:
      "Se va efectua expertiza de identificare a zonelor periculoase.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Zonele cu risc de cădere sunt protejate (balustrade, plase, platforme)?",
    safety_measure: "Se vor verifica mijloacele de protecție colectivă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Substanțele periculoase sunt depozitate conform fișelor de securitate (SDS)?",
    safety_measure:
      "Se va efectua verificarea specifică a folosirii și depozitării substanțelor chimice folosite.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Există fișele cu date de securitate (SDS) pentru agenți chimici?",
    safety_measure:
      "Se va verifica existența fișelor și expunerea acestora la locurile de muncă vizate.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Lucrările la înălțime sunt organizate cu măsuri specifice (ham, schele verificate)?",
    safety_measure:
      "Se va revizui procedeul de lucru la înălțime, dotarea și verificările obligatorii.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Locurile cu risc de incendiu sunt dotate cu extinctoare și semnalizate?",
    safety_measure:
      "Se va efectua verificarea specifică, dotarea cu stingătoare, semnalizarea și verificarea stingătoarelor.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Zonele cu risc de electrocutare sunt semnalizate?",
    safety_measure:
      "Se va reface semnalizarea de atenționare a pericolului de electrocutare.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Lucrările în spații închise au proceduri speciale?",
    safety_measure: "Se va revizui procedura de lucru în spații izolate.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "EIP este distribuit conform fișei de acordare?",
    safety_measure:
      "Periodic, LDSSM va verifica folosirea EIP de către lucrători, conducătorii direcți ai locurilor de muncă vor pune în practică procedura zilnică de verificare a purtării EIP.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "EIP este adecvat riscurilor (cască, ochelari, bocanci, veste, etc.)?",
    safety_measure:
      "Se va verifica modul de acordare și categoriile de echipament aprobat.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Lucrătorii poartă EIP în mod corect?",
    safety_measure:
      "Periodic, LDSSM va verifica folosirea EIP de către lucrători, conducătorii direcți ai locurilor de muncă vor pune în practică procedura zilnică de verificare a purtării EIP.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Stocul de EIP este suficient și monitorizat?",
    safety_measure: "Stocul de EIP se va verifica periodic de către LDSSM.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Există instrucțiunile de utilizare a EIP?",
    safety_measure:
      "Revizuirea tematicii de instruire și a referatului de informare asupra rolului EIP acordat.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Executantul este apt medical pentru activitatea desfășurată?",
    safety_measure: "Supravegherea efectuării vizitelor medicale periodice.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Executantul a primit instruire SSM completă și la zi?",
    safety_measure:
      "Verificarea modului de instruire și verificarea capacității și a cunoștințelor dobândite de lucrători prin interviu la locul de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Executantul are calificarea necesară pentru utilizarea echipamentelor?",
    safety_measure:
      "Efectuarea formării profesionale interne prin procedura proprie.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Executantul cunoaște instrucțiunile proprii și procedurile de lucru?",
    safety_measure:
      "Testarea cunoștințelor lucrătorilor prin intervievare directă la locul de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Executantul respectă regulile SSM și poartă EIP?",
    safety_measure: "Verificarea periodică a respectării regulilor SSM.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Sarcina este clar definită și comunicată lucrătorilor?",
    safety_measure: "Verificarea conținutului fișei de post.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Procedurile de lucru sunt afișate sau accesibile?",
    safety_measure:
      "Verificarea afițării procedurilor de lucru și a celor de ssm la locurile de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Există suprasolicitare fizică sau psihică?",
    safety_measure:
      "Efectuarea evaluărilor pentru mânuiri și a celei psihosociale specifice.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Volumul și ritmul de muncă sunt adecvate?",
    safety_measure:
      "Stabilirea de catre tehnolog a volumului de muncă în procesul tehnologic.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Sarcina implică doar operațiuni autorizate?",
    safety_measure:
      "Verificări a structurii sarcinilor de muncă coroborate cu procedurile de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Echipamentele de muncă sunt în stare bună de funcționare?",
    safety_measure:
      "Verificarea planului de mentenanță și a procedurii de solicitare reparații și verificări.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Echipamentele de muncă au verificări periodice la zi?",
    safety_measure:
      "Verificarea registrului de activitate de mentenanță pe echipament de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Echipamentele de muncă au manuale/instrucțiuni de utilizare disponibile?",
    safety_measure:
      "Verificarea existenței în arhiva tehnică a manualelor tehnice/echipemente.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Echipamentele de muncă au protecții funcționale și complete?",
    safety_measure:
      "Verificarea specifică a dispozitivelor și protecțiilor din dotarea echipamentului de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Echipamentele de muncă sunt utilizate doar de personal instruit?",
    safety_measure:
      "Verificarea aptitudinilor lucrătorilor cu reprezentanții RU.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Mediul are condiții corespunzătoare de temperatură, lumină, zgomot?",
    safety_measure:
      "Efectuarea măsurătorilor specifice periodic la cel puțin un an, sau ori de câte ori este nevoie.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "Mediul nu prezintă obstacole, pericole ascunse sau suprafețe alunecoase?",
    safety_measure:
      "Verificarea surselor de pericole potentiale in desfasurarea activitatii la locurile de muncă.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Mediul are sisteme de ventilație și evacuare adecvate?",
    safety_measure:
      "Numirea responsabilului cu aceste sisteme, verificarea zilnică a funcționării corecte a sistemelor.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question: "Mediul este semnalizat corespunzător?",
    safety_measure:
      "Verificarea semnalizării și aplicarea de semnalizări a mediilor de lucru potențial periculoase.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
  {
    question:
      "În acest mediu nu există expuneri la agenți periculoși peste limite?",
    safety_measure:
      "Efectuarea măsurătorilor specifice periodic la cel puțin un an, sau ori de câte ori este nevoie.",
    generic_answer:
      "Nu sunt necesare măsuri suplimentare, menținerea conformității și verificările lor periodice fiind propuse a se continua. Măsurile asigură condițiile minime de siguranță impuse, acestea putându-se îmbunătăți.",
  },
];
