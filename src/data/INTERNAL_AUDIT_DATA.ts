import type { QuestionData } from "../useQuestions";

export const INTERNAL_AUDIT_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Organizarea locului de muncă",
    questions: [
      {
        questionText:
          "Locul de muncă este curat și lipsit de deșeuri/materiale inutile?",
        safetyMeasure:
          "Evacuarea deșeurilor, curățenie imediată și stabilirea unui program de housekeeping.",
      },
      {
        questionText:
          "Căile de acces și circulație sunt libere și fără obstacole?",
        safetyMeasure:
          "Îndepărtarea obstacolelor și marcarea zonelor de depozitare.",
      },
      {
        questionText: "Căile de evacuare sunt accesibile și semnalizate?",
        safetyMeasure: "Deblocarea căilor și refacerea semnalizării.",
      },
      {
        questionText: "Materialele sunt depozitate stabil și organizat?",
        safetyMeasure:
          "Reorganizarea depozitării și utilizarea mijloacelor adecvate.",
      },
      {
        questionText:
          "Zonele de lucru sunt delimitate și marcate corespunzător?",
        safetyMeasure: "Refacerea marcajelor și delimitarea zonelor.",
      },
      {
        questionText:
          "Iluminatul este suficient pentru activitățile desfășurate?",
        safetyMeasure:
          "Înlocuirea corpurilor defecte sau suplimentarea iluminatului.",
      },
      {
        questionText: "Ventilația este corespunzătoare procesului de muncă?",
        safetyMeasure:
          "Repararea/îmbunătățirea ventilației și întreținerea instalațiilor.",
      },
      {
        questionText: "Există riscuri de alunecare, împiedicare sau cădere?",
        safetyMeasure:
          "Îndepărtarea cauzelor, repararea pardoselilor și semnalizarea temporară.",
      },
      {
        questionText:
          "Echipamentele și materialele sunt amplasate fără a crea riscuri?",
        safetyMeasure:
          "Reamplasarea echipamentelor/materialelor conform fluxului și spațiului.",
      },
      {
        questionText:
          "Sunt respectate regulile de ordine și disciplină la locul de muncă?",
        safetyMeasure:
          "Reinstruirea personalului și supravegherea aplicării regulilor.",
      },
    ],
  },
  {
    categoryName: "Circulații și căi de evacuare",
    questions: [
      {
        questionText: "Căile de circulație sunt libere de obstacole?",
        safetyMeasure:
          "Îndepărtarea imediată a obstacolelor și interzicerea depozitării pe căile de circulație.",
      },
      {
        questionText: "Căile de evacuare sunt permanent accesibile?",
        safetyMeasure:
          "Deblocarea imediată a căilor și monitorizarea permanentă a acestora.",
      },
      {
        questionText: "Căile de evacuare sunt marcate cu indicatoare conforme?",
        safetyMeasure:
          "Montarea sau înlocuirea indicatoarelor deteriorate/lipsă.",
      },
      {
        questionText:
          "Ușile de evacuare se deschid în sensul evacuării și funcționează corespunzător?",
        safetyMeasure:
          "Repararea sau înlocuirea sistemelor de închidere și eliminarea blocajelor.",
      },
      {
        questionText:
          "Iluminatul normal și de securitate pe căile de evacuare este funcțional?",
        safetyMeasure:
          "Înlocuirea corpurilor defecte și verificarea instalației de iluminat de securitate.",
      },
      {
        questionText:
          "Pardoselile căilor de circulație sunt în stare bună și fără pericole de alunecare?",
        safetyMeasure:
          "Repararea pardoselilor, curățarea acestora și aplicarea de suprafețe antiderapante.",
      },
      {
        questionText:
          "Marcajele pentru circulația pietonală și a utilajelor sunt vizibile?",
        safetyMeasure:
          "Refacerea marcajelor și delimitarea corespunzătoare a fluxurilor.",
      },
      {
        questionText:
          "Lățimea căilor de circulație și evacuare este suficientă pentru fluxul de persoane și echipamente?",
        safetyMeasure:
          "Eliminarea restricțiilor și reorganizarea spațiilor pentru asigurarea lățimii necesare.",
      },
      {
        questionText:
          "Ieșirile de urgență sunt identificate și accesibile din toate zonele de lucru?",
        safetyMeasure:
          "Montarea semnalizării suplimentare și eliminarea obstacolelor.",
      },
      {
        questionText:
          "Planurile de evacuare sunt afișate în locuri vizibile și actualizate?",
        safetyMeasure:
          "Actualizarea și afișarea planurilor de evacuare în toate zonele relevante.",
      },
    ],
  },
  {
    categoryName: "Utilaje și echipamente",
    questions: [
      {
        questionText:
          "Utilajele și echipamentele sunt în stare tehnică corespunzătoare, fără defecte vizibile?",
        safetyMeasure:
          "Oprirea utilizării, remedierea defecțiunilor și repunerea în funcțiune numai după verificare.",
      },
      {
        questionText:
          "Apărătorile și dispozitivele de protecție sunt montate și funcționale?",
        safetyMeasure:
          "Montarea sau înlocuirea protecțiilor și interzicerea utilizării până la remediere.",
      },
      {
        questionText:
          "Dispozitivele de oprire de urgență sunt accesibile și funcționează corespunzător?",
        safetyMeasure:
          "Testarea, repararea sau înlocuirea dispozitivelor defecte.",
      },
      {
        questionText:
          "Utilajele sunt utilizate numai de personal instruit și autorizat, după caz?",
        safetyMeasure:
          "Retragerea din exploatare până la instruirea/autorizarea personalului.",
      },
      {
        questionText:
          "Există instrucțiuni de utilizare disponibile la locul de muncă?",
        safetyMeasure:
          "Afișarea sau distribuirea instrucțiunilor specifice de lucru.",
      },
      {
        questionText:
          "Reviziile și mentenanța preventivă sunt efectuate conform planificării?",
        safetyMeasure:
          "Programarea și efectuarea reviziilor restante; actualizarea evidențelor.",
      },
      {
        questionText:
          "Nu există improvizații la utilaje, instalații sau sisteme de comandă?",
        safetyMeasure:
          "Eliminarea improvizațiilor și readucerea utilajului la configurația conformă.",
      },
      {
        questionText:
          "Cablurile, furtunurile și racordurile sunt în stare bună și protejate?",
        safetyMeasure:
          "Înlocuirea elementelor defecte și protejarea traseelor de alimentare.",
      },
      {
        questionText:
          "Zona din jurul utilajului permite exploatarea și intervenția în siguranță?",
        safetyMeasure:
          "Reorganizarea spațiului și eliminarea obstacolelor din zona de lucru.",
      },
      {
        questionText:
          "Sunt respectate instrucțiunile și regulile de exploatare în timpul utilizării utilajelor?",
        safetyMeasure:
          "Reinstruirea personalului și intensificarea supravegherii respectării procedurilor.",
      },
    ],
  },
  {
    categoryName: "Instalații electrice",
    questions: [
      {
        questionText:
          "Tablourile electrice sunt închise, încuiate și inscripționate corespunzător?",
        safetyMeasure:
          "Închiderea/încuierea tablourilor și aplicarea inscripționărilor corespunzătoare.",
      },
      {
        questionText:
          "Prizele, întrerupătoarele și cablurile electrice sunt în stare bună?",
        safetyMeasure:
          "Înlocuirea componentelor defecte și eliminarea improvizațiilor.",
      },
      {
        questionText:
          "Instalațiile electrice sunt utilizate fără prelungitoare improvizate sau suprasolicitate?",
        safetyMeasure:
          "Eliminarea prelungitoarelor neconforme și redistribuirea consumatorilor.",
      },
      {
        questionText:
          "Legarea la pământ și protecția împotriva electrocutării sunt asigurate?",
        safetyMeasure:
          "Verificarea instalației de împământare și remedierea deficiențelor constatate.",
      },
      {
        questionText:
          "Dispozitivele de protecție (siguranțe, întrerupătoare automate, diferențiale) sunt funcționale?",
        safetyMeasure:
          "Înlocuirea dispozitivelor defecte și verificarea funcționării acestora.",
      },
      {
        questionText:
          "Există conductoare neizolate sau conexiuni electrice improvizate?",
        safetyMeasure: "Refacerea instalației de către personal autorizat.",
      },
      {
        questionText:
          "Lucrările la instalațiile electrice sunt executate numai de personal autorizat?",
        safetyMeasure:
          "Interzicerea intervențiilor neautorizate și desemnarea personalului calificat.",
      },
      {
        questionText:
          "Echipamentele electrice sunt protejate împotriva umezelii și factorilor de mediu?",
        safetyMeasure:
          "Montarea protecțiilor corespunzătoare sau înlocuirea echipamentelor neadecvate.",
      },
      {
        questionText:
          "Verificările și măsurătorile periodice ale instalațiilor electrice sunt la zi?",
        safetyMeasure:
          "Programarea și efectuarea verificărilor, actualizarea evidențelor.",
      },
      {
        questionText:
          "Zona din jurul tablourilor electrice este liberă și accesibilă?",
        safetyMeasure:
          "Îndepărtarea materialelor depozitate și marcarea zonei de siguranță.",
      },
    ],
  },
  {
    categoryName: "Dispozitive de protecție",
    questions: [
      {
        questionText:
          "Dispozitivele de protecție ale utilajelor sunt montate și complete?",
        safetyMeasure:
          "Montarea sau înlocuirea dispozitivelor lipsă înainte de utilizarea utilajului.",
      },
      {
        questionText:
          "Dispozitivele de protecție sunt funcționale și nu sunt dezactivate?",
        safetyMeasure:
          "Repunerea în funcțiune, repararea și interzicerea exploatării până la remediere.",
      },
      {
        questionText: "Interblocările (interlock) funcționează corespunzător?",
        safetyMeasure:
          "Verificarea și repararea sistemelor de interblocare de către personal competent.",
      },
      {
        questionText:
          "Dispozitivele de oprire de urgență sunt accesibile și ușor de acționat?",
        safetyMeasure:
          "Eliminarea obstacolelor și repararea sau înlocuirea dispozitivelor defecte.",
      },
      {
        questionText:
          "Protecțiile împotriva contactului cu părțile în mișcare sunt eficiente?",
        safetyMeasure:
          "Montarea unor apărători conforme și reevaluarea riscului.",
      },
      {
        questionText:
          "Protecțiile sunt fixate corespunzător și nu prezintă deteriorări?",
        safetyMeasure: "Înlocuirea sau repararea protecțiilor deteriorate.",
      },
      {
        questionText:
          "Sunt interzise improvizațiile la dispozitivele de protecție?",
        safetyMeasure:
          "Eliminarea improvizațiilor și readucerea echipamentului la configurația originală.",
      },
      {
        questionText:
          "Dispozitivele de protecție sunt verificate periodic și există evidențe?",
        safetyMeasure:
          "Realizarea verificărilor restante și actualizarea evidențelor.",
      },
      {
        questionText:
          "Operatorii cunosc rolul și modul de utilizare al dispozitivelor de protecție?",
        safetyMeasure:
          "Reinstruirea personalului și verificarea însușirii cunoștințelor.",
      },
      {
        questionText:
          "După intervențiile de întreținere, dispozitivele de protecție sunt remontate înainte de repunerea în funcțiune?",
        safetyMeasure:
          "Introducerea unei verificări obligatorii înainte de repornirea echipamentului.",
      },
    ],
  },
  {
    categoryName: "Ergonomie",
    questions: [
      {
        questionText:
          "Postul de lucru este adaptat caracteristicilor activității și lucrătorului?",
        safetyMeasure:
          "Reconfigurarea postului de lucru și adaptarea mobilierului sau echipamentelor.",
      },
      {
        questionText:
          "Lucrătorii adoptă poziții de lucru naturale, fără solicitări excesive?",
        safetyMeasure:
          "Modificarea organizării activității și introducerea echipamentelor auxiliare.",
      },
      {
        questionText: "Manipularea manuală a maselor este redusă la minimum?",
        safetyMeasure:
          "Introducerea echipamentelor de ridicare și instruirea privind manipularea manuală.",
      },
      {
        questionText:
          "Greutatea și dimensiunile sarcinilor manipulate sunt adecvate capacității lucrătorilor?",
        safetyMeasure:
          "Reducerea greutății încărcăturilor sau manipularea în echipă ori mecanizată.",
      },
      {
        questionText:
          "Înălțimea suprafețelor de lucru este adecvată activității desfășurate?",
        safetyMeasure:
          "Reglarea sau înlocuirea meselor și bancurilor de lucru.",
      },
      {
        questionText:
          "Există suficient spațiu pentru mișcare și schimbarea poziției corpului?",
        safetyMeasure:
          "Reorganizarea amplasării echipamentelor și eliberarea spațiului de lucru.",
      },
      {
        questionText:
          "Activitățile repetitive sunt limitate prin rotația personalului sau pauze?",
        safetyMeasure:
          "Introducerea rotației posturilor și a pauzelor ergonomice.",
      },
      {
        questionText:
          "Scaunele și mobilierul de lucru sunt stabile și, unde este necesar, reglabile?",
        safetyMeasure:
          "Înlocuirea mobilierului necorespunzător cu echipamente ergonomice.",
      },
      {
        questionText:
          "Lucrătorii au fost instruiți privind principiile ergonomice și manipularea corectă a sarcinilor?",
        safetyMeasure:
          "Reinstruirea lucrătorilor și verificarea aplicării în practică.",
      },
      {
        questionText:
          "Au fost identificate și reduse riscurile de afecțiuni musculo-scheletice la locul de muncă?",
        safetyMeasure:
          "Actualizarea evaluării riscurilor și implementarea măsurilor tehnice și organizatorice.",
      },
    ],
  },
  {
    categoryName: "Echipament individual de protecție",
    questions: [
      {
        questionText:
          "Echipamentul individual de protecție este stabilit în funcție de riscurile identificate la locul de muncă?",
        safetyMeasure:
          "Revizuirea evaluării riscurilor și actualizarea necesarului de echipamente individuale de protecție.",
      },
      {
        questionText:
          "Lucrătorii au primit echipament individual de protecție pe bază de evidență?",
        safetyMeasure:
          "Acordarea echipamentului individual de protecție lipsă și actualizarea evidențelor de distribuire.",
      },
      {
        questionText:
          "Lucrătorii utilizează permanent echipamentul individual de protecție obligatoriu?",
        safetyMeasure:
          "Reinstruirea personalului și monitorizarea respectării obligației de utilizare.",
      },
      {
        questionText:
          "Echipamentul individual de protecție este în stare bună, fără deteriorări sau uzură excesivă?",
        safetyMeasure:
          "Înlocuirea imediată a echipamentului individual de protecție deteriorat sau uzat.",
      },
      {
        questionText:
          "Echipamentul individual de protecție este dimensionat și adaptat fiecărui lucrător?",
        safetyMeasure: "Înlocuirea cu echipamente de mărime și tip adecvate.",
      },
      {
        questionText:
          "Echipamentul individual de protecție este întreținut, curățat și depozitat corespunzător?",
        safetyMeasure:
          "Curățarea, întreținerea sau organizarea unui spațiu adecvat pentru depozitare.",
      },
      {
        questionText:
          "Echipamentul individual de protecție cu durată limitată de utilizare este în termenul de valabilitate?",
        safetyMeasure:
          "Înlocuirea echipamentului individual de protecție expirat și actualizarea evidenței termenelor de utilizare.",
      },
      {
        questionText:
          "Lucrătorii au fost instruiți privind utilizarea, întreținerea și limitele echipamentului individual de protecție?",
        safetyMeasure:
          "Reinstruirea lucrătorilor și verificarea însușirii cunoștințelor.",
      },
      {
        questionText:
          "Echipamentul individual de protecție este utilizat exclusiv pentru scopul pentru care a fost destinat?",
        safetyMeasure:
          "Interzicerea utilizării necorespunzătoare și înlocuirea echipamentului individual de protecție modificat.",
      },
      {
        questionText:
          "Există controale periodice privind utilizarea echipamentului individual de protecție la locurile de muncă?",
        safetyMeasure:
          "Introducerea verificărilor periodice și aplicarea măsurilor corective.",
      },
    ],
  },
  {
    categoryName: "Semnalizare",
    questions: [
      {
        questionText:
          "Indicatoarele de securitate sunt amplasate în toate zonele unde există riscuri?",
        safetyMeasure:
          "Montarea indicatoarelor lipsă conform evaluării riscurilor.",
      },
      {
        questionText: "Indicatoarele sunt vizibile, lizibile și nedeteriorate?",
        safetyMeasure:
          "Înlocuirea sau curățarea indicatoarelor deteriorate ori ilizibile.",
      },
      {
        questionText:
          "Sunt utilizate indicatoare conforme cu legislația și standardele aplicabile?",
        safetyMeasure:
          "Înlocuirea semnalizării neconforme cu indicatoare standardizate.",
      },
      {
        questionText:
          "Căile de evacuare și ieșirile de urgență sunt semnalizate corespunzător?",
        safetyMeasure:
          "Completarea sau refacerea semnalizării căilor de evacuare.",
      },
      {
        questionText:
          "Echipamentele de stingere a incendiilor și de prim ajutor sunt semnalizate?",
        safetyMeasure:
          "Montarea indicatoarelor specifice în locurile necesare.",
      },
      {
        questionText:
          "Zonele cu acces restricționat sau pericol sunt marcate corespunzător?",
        safetyMeasure:
          "Marcarea imediată a zonelor periculoase și restricționate.",
      },
      {
        questionText:
          "Marcajele de pe pardoseală pentru circulație și depozitare sunt vizibile?",
        safetyMeasure: "Refacerea marcajelor uzate sau șterse.",
      },
      {
        questionText:
          "Semnalizarea de obligativitate privind utilizarea echipamentului individual de protecție este afișată unde este necesar?",
        safetyMeasure:
          "Montarea indicatoarelor privind utilizarea echipamentului individual de protecție.",
      },
      {
        questionText:
          "Semnalizarea este menținută după modificări ale fluxului tehnologic sau ale spațiilor?",
        safetyMeasure:
          "Actualizarea planului de semnalizare și relocarea indicatoarelor.",
      },
      {
        questionText:
          "Lucrătorii cunosc semnificația indicatoarelor și respectă semnalizarea de securitate?",
        safetyMeasure:
          "Reinstruirea lucrătorilor și verificarea aplicării în practică.",
      },
    ],
  },
  {
    categoryName: "Prevenirea incendiilor",
    questions: [
      {
        questionText:
          "Stingătoarele sunt amplasate în locurile stabilite și sunt ușor accesibile?",
        safetyMeasure:
          "Reamplasarea stingătoarelor și eliminarea obstacolelor din zona acestora.",
      },
      {
        questionText:
          "Stingătoarele au verificările periodice efectuate și sunt în termen de valabilitate?",
        safetyMeasure:
          "Trimiterea stingătoarelor la verificare/încărcare și înlocuirea celor expirate.",
      },
      {
        questionText:
          "Hidranții interiori/exteriori sunt accesibili și funcționali, unde este cazul?",
        safetyMeasure:
          "Deblocarea accesului și remedierea defecțiunilor constatate.",
      },
      {
        questionText:
          "Căile și ieșirile de evacuare sunt menținute libere și fără materiale combustibile?",
        safetyMeasure:
          "Îndepărtarea imediată a materialelor și interzicerea depozitării pe căile de evacuare.",
      },
      {
        questionText:
          "Materialele inflamabile și combustibile sunt depozitate în condiții de siguranță?",
        safetyMeasure:
          "Reorganizarea spațiului de depozitare și respectarea instrucțiunilor PSI.",
      },
      {
        questionText:
          "Sursele potențiale de aprindere sunt controlate și eliminate, unde este posibil?",
        safetyMeasure:
          "Eliminarea surselor de aprindere și aplicarea măsurilor tehnice necesare.",
      },
      {
        questionText:
          "Planurile de evacuare și instrucțiunile PSI sunt afișate și actualizate?",
        safetyMeasure:
          "Actualizarea și afișarea planurilor și instrucțiunilor.",
      },
      {
        questionText:
          "Lucrătorii cunosc modul de utilizare a stingătoarelor și procedurile de evacuare?",
        safetyMeasure:
          "Reinstruirea personalului și organizarea exercițiilor practice.",
      },
      {
        questionText:
          "Lucrările cu foc deschis se execută numai pe baza permisului de lucru, unde este cazul?",
        safetyMeasure:
          "Suspendarea lucrărilor până la emiterea permisului și implementarea măsurilor PSI.",
      },
      {
        questionText:
          "Sunt efectuate controale periodice privind respectarea măsurilor de prevenire a incendiilor?",
        safetyMeasure:
          "Introducerea unui program periodic de controale și monitorizarea măsurilor corective.",
      },
    ],
  },
  {
    categoryName: "Substanțe chimice",
    questions: [
      {
        questionText:
          "Toate substanțele și amestecurile chimice sunt etichetate corespunzător?",
        safetyMeasure:
          "Etichetarea imediată a recipientelor și eliminarea recipientelor neidentificate.",
      },
      {
        questionText:
          "Fișele cu date de securitate (FDS/SDS) sunt disponibile și actualizate pentru toate substanțele utilizate?",
        safetyMeasure:
          "Solicitarea fișelor cu date de securitate de la furnizor și punerea lor la dispoziția personalului.",
      },
      {
        questionText:
          "Substanțele chimice sunt depozitate conform cerințelor de compatibilitate și securitate?",
        safetyMeasure:
          "Reorganizarea depozitării și separarea substanțelor incompatibile.",
      },
      {
        questionText:
          "Recipientele sunt în stare bună și nu prezintă scurgeri sau deteriorări?",
        safetyMeasure:
          "Înlocuirea recipientelor deteriorate și neutralizarea scurgerilor.",
      },
      {
        questionText:
          "Ventilația este adecvată în zonele unde se utilizează substanțe chimice periculoase?",
        safetyMeasure:
          "Repararea sau instalarea sistemelor de ventilație locală/generală.",
      },
      {
        questionText:
          "Lucrătorii utilizează echipament individual de protecție adecvat la manipularea substanțelor chimice?",
        safetyMeasure:
          "Asigurarea echipamentului individual de protecție adecvat și reinstruirea personalului privind utilizarea acestuia.",
      },
      {
        questionText:
          "Există materiale și proceduri pentru intervenția în cazul scurgerilor accidentale?",
        safetyMeasure:
          "Dotarea cu kituri pentru scurgeri și instruirea personalului.",
      },
      {
        questionText:
          "Deșeurile chimice sunt colectate și depozitate separat, în recipiente corespunzătoare?",
        safetyMeasure:
          "Organizarea colectării selective și etichetarea recipientelor pentru deșeuri.",
      },
      {
        questionText:
          "Lucrătorii sunt instruiți privind riscurile chimice și măsurile de prim ajutor?",
        safetyMeasure:
          "Reinstruirea lucrătorilor și actualizarea programelor de instruire.",
      },
      {
        questionText:
          "Evaluarea riscurilor include toate substanțele chimice utilizate și măsurile de control aferente?",
        safetyMeasure:
          "Actualizarea evaluării riscurilor și implementarea măsurilor suplimentare de control.",
      },
    ],
  },
  {
    categoryName: "Manipularea materialelor",
    questions: [
      {
        questionText:
          "Manipularea materialelor se realizează conform instrucțiunilor de lucru?",
        safetyMeasure:
          "Reinstruirea lucrătorilor și actualizarea instrucțiunilor de lucru.",
      },
      {
        questionText:
          "Sunt utilizate mijloace mecanizate pentru manipularea sarcinilor grele, unde este posibil?",
        safetyMeasure:
          "Asigurarea și utilizarea echipamentelor de ridicare și transport.",
      },
      {
        questionText:
          "Greutatea și dimensiunile materialelor permit manipularea în siguranță?",
        safetyMeasure:
          "Divizarea încărcăturilor sau manipularea în echipă/mecanizată.",
      },
      {
        questionText:
          "Materialele sunt manipulate fără risc de cădere, răsturnare sau alunecare?",
        safetyMeasure:
          "Asigurarea încărcăturilor și utilizarea accesoriilor adecvate.",
      },
      {
        questionText:
          "Căile de transport intern sunt libere și adecvate manipulării materialelor?",
        safetyMeasure:
          "Eliminarea obstacolelor și reorganizarea fluxului de transport.",
      },
      {
        questionText:
          "Echipamentele utilizate pentru manipularea materialelor sunt verificate și în stare bună?",
        safetyMeasure:
          "Repararea sau scoaterea din uz a echipamentelor defecte.",
      },
      {
        questionText:
          "Lucrătorii utilizează echipament individual de protecție adecvat în timpul manipulării materialelor?",
        safetyMeasure:
          "Asigurarea echipamentului individual de protecție necesar și monitorizarea utilizării acestuia.",
      },
      {
        questionText:
          "Materialele sunt depozitate temporar fără a bloca circulațiile sau căile de evacuare?",
        safetyMeasure:
          "Mutarea materialelor și delimitarea zonelor de depozitare.",
      },
      {
        questionText:
          "Lucrătorii au fost instruiți privind tehnicile corecte de manipulare manuală a maselor?",
        safetyMeasure: "Reinstruirea personalului și exerciții practice.",
      },
      {
        questionText:
          "Există măsuri pentru prevenirea accidentelor produse prin prindere, lovire sau strivire în timpul manipulării?",
        safetyMeasure:
          "Implementarea măsurilor de protecție și supravegherea activităților cu risc.",
      },
    ],
  },
  {
    categoryName: "Depozitare",
    questions: [
      {
        questionText:
          "Materialele și produsele sunt depozitate numai în spațiile destinate acestui scop?",
        safetyMeasure:
          "Mutarea materialelor în spațiile de depozitare stabilite și interzicerea depozitării în alte zone.",
      },
      {
        questionText:
          "Materialele sunt stivuite stabil, fără risc de răsturnare sau prăbușire?",
        safetyMeasure:
          "Refacerea stivelor și respectarea limitelor de înălțime și încărcare.",
      },
      {
        questionText:
          "Căile de acces și evacuare din zona de depozitare sunt libere?",
        safetyMeasure:
          "Eliberarea imediată a căilor de acces și marcarea zonelor de depozitare.",
      },
      {
        questionText: "Materialele incompatibile sunt depozitate separat?",
        safetyMeasure:
          "Reorganizarea depozitării și separarea materialelor incompatibile.",
      },
      {
        questionText:
          "Rafturile și sistemele de depozitare sunt în stare bună și fără deteriorări?",
        safetyMeasure:
          "Repararea sau înlocuirea rafturilor deteriorate și restricționarea utilizării până la remediere.",
      },
      {
        questionText:
          "Încărcarea rafturilor respectă capacitatea maximă admisă?",
        safetyMeasure:
          "Reducerea încărcării și afișarea capacității maxime admise.",
      },
      {
        questionText:
          "Materialele sunt identificate și etichetate corespunzător?",
        safetyMeasure:
          "Etichetarea materialelor și actualizarea sistemului de identificare.",
      },
      {
        questionText:
          "Depozitarea nu afectează funcționarea echipamentelor de stingere a incendiilor și a tablourilor electrice?",
        safetyMeasure:
          "Îndepărtarea materialelor și delimitarea zonelor de siguranță.",
      },
      {
        questionText: "Zona de depozitare este menținută curată și organizată?",
        safetyMeasure:
          "Evacuarea deșeurilor și implementarea unui program de housekeeping.",
      },
      {
        questionText:
          "Lucrătorii respectă regulile și instrucțiunile privind depozitarea materialelor?",
        safetyMeasure:
          "Reinstruirea personalului și intensificarea supravegherii respectării procedurilor.",
      },
    ],
  },
  {
    categoryName: "Microclimat",
    questions: [
      {
        questionText:
          "Temperatura din zona de lucru este adecvată activității desfășurate?",
        safetyMeasure:
          "Reglarea sistemelor de încălzire/răcire și adoptarea măsurilor organizatorice.",
      },
      {
        questionText:
          "Umiditatea aerului este corespunzătoare procesului de muncă?",
        safetyMeasure: "Reglarea instalațiilor de climatizare sau ventilație.",
      },
      {
        questionText: "Ventilația asigură un aport suficient de aer proaspăt?",
        safetyMeasure:
          "Curățarea, repararea sau modernizarea sistemului de ventilație.",
      },
      {
        questionText:
          "Există curenți de aer excesivi care afectează lucrătorii?",
        safetyMeasure:
          "Reglarea debitului de aer și repoziționarea posturilor de lucru.",
      },
      {
        questionText:
          "Nivelul de iluminare este adecvat activităților desfășurate?",
        safetyMeasure:
          "Înlocuirea corpurilor defecte și suplimentarea iluminatului.",
      },
      {
        questionText:
          "Praful, fumul, vaporii sau alte noxe sunt menținute sub control?",
        safetyMeasure:
          "Instalarea sau repararea sistemelor de exhaustare și ventilație locală.",
      },
      {
        questionText:
          "Zgomotul ambiental este controlat și nu afectează condițiile de muncă?",
        safetyMeasure:
          "Implementarea măsurilor de reducere a zgomotului și utilizarea EIP auditiv.",
      },
      {
        questionText:
          "Sunt efectuate măsurători periodice ale factorilor de microclimat, unde este cazul?",
        safetyMeasure:
          "Programarea măsurătorilor și implementarea măsurilor rezultate.",
      },
      {
        questionText:
          "Lucrătorii au la dispoziție apă potabilă și măsuri de protecție în condiții de temperaturi extreme?",
        safetyMeasure:
          "Asigurarea apei, pauzelor și adaptarea programului de lucru.",
      },
      {
        questionText:
          "Evaluarea riscurilor include factorii de microclimat și măsurile de control aferente?",
        safetyMeasure:
          "Actualizarea evaluării riscurilor și implementarea măsurilor necesare.",
      },
    ],
  },
  {
    categoryName: "Prim ajutor",
    questions: [
      {
        questionText:
          "Trusele de prim ajutor sunt disponibile în toate zonele stabilite?",
        safetyMeasure:
          "Dotarea zonelor fără trusă și amplasarea acesteia în locuri vizibile.",
      },
      {
        questionText:
          "Trusele de prim ajutor sunt complete și în termen de valabilitate?",
        safetyMeasure:
          "Completarea truselor și înlocuirea materialelor expirate.",
      },
      {
        questionText:
          "Locația truselor de prim ajutor este semnalizată corespunzător?",
        safetyMeasure: "Montarea sau înlocuirea indicatoarelor de prim ajutor.",
      },
      {
        questionText:
          "Există lucrători desemnați și instruiți pentru acordarea primului ajutor?",
        safetyMeasure:
          "Desemnarea și instruirea personalului pentru acordarea primului ajutor.",
      },
      {
        questionText:
          "Lucrătorii cunosc modul de alertare și procedura de acordare a primului ajutor?",
        safetyMeasure:
          "Reinstruirea personalului și organizarea de exerciții practice.",
      },
      {
        questionText:
          "Numerele de urgență și procedurile de intervenție sunt afișate în locuri vizibile?",
        safetyMeasure:
          "Afișarea sau actualizarea instrucțiunilor și numerelor de urgență.",
      },
      {
        questionText: "Accesul la trusele de prim ajutor este permanent liber?",
        safetyMeasure: "Eliminarea obstacolelor și marcarea zonei de acces.",
      },
      {
        questionText:
          "Există evidențe privind verificarea periodică a truselor de prim ajutor?",
        safetyMeasure:
          "Introducerea unui program de verificare și completarea evidențelor.",
      },
      {
        questionText:
          "Mijloacele pentru apelarea serviciilor de urgență sunt funcționale?",
        safetyMeasure:
          "Asigurarea mijloacelor de comunicare și verificarea funcționării acestora.",
      },
      {
        questionText:
          "Exercițiile privind acordarea primului ajutor sunt organizate periodic?",
        safetyMeasure:
          "Planificarea și desfășurarea periodică a exercițiilor de prim ajutor.",
      },
    ],
  },
  {
    categoryName: "Documentație SSM",
    questions: [
      {
        questionText:
          "Evaluarea riscurilor este disponibilă, actualizată și aplicabilă locului de muncă?",
        safetyMeasure:
          "Actualizarea evaluării riscurilor și implementarea măsurilor rezultate.",
      },
      {
        questionText:
          "Instrucțiunile proprii SSM sunt elaborate și disponibile pentru activitățile desfășurate?",
        safetyMeasure:
          "Elaborarea, revizuirea și difuzarea instrucțiunilor proprii.",
      },
      {
        questionText:
          "Fișele de instruire individuală sunt completate și semnate corespunzător?",
        safetyMeasure:
          "Completarea documentelor lipsă și efectuarea instruirilor restante.",
      },
      {
        questionText:
          "Tematicile și programele de instruire SSM sunt actualizate?",
        safetyMeasure:
          "Revizuirea tematicilor și aprobarea noilor programe de instruire.",
      },
      {
        questionText:
          "Există evidențe privind verificările și controalele interne SSM?",
        safetyMeasure:
          "Instituirea unui program de controale și completarea registrelor de evidență.",
      },
      {
        questionText:
          "Planul de prevenire și protecție este actualizat și implementat?",
        safetyMeasure:
          "Actualizarea planului și urmărirea realizării măsurilor stabilite.",
      },
      {
        questionText:
          "Autorizațiile, verificările și documentele tehnice ale echipamentelor sunt disponibile?",
        safetyMeasure:
          "Obținerea documentelor lipsă și actualizarea evidențelor tehnice.",
      },
      {
        questionText:
          "Documentele privind acordarea echipamentelor individuale de protecție și verificările medicale sunt complete?",
        safetyMeasure:
          "Completarea evidențelor și actualizarea documentelor lipsă.",
      },
      {
        questionText:
          "Documentația SSM este păstrată organizat și poate fi prezentată la control?",
        safetyMeasure:
          "Reorganizarea arhivei și stabilirea responsabilităților privind gestionarea documentelor.",
      },
      {
        questionText:
          "Documentația SSM este revizuită după modificări organizatorice, tehnologice sau legislative?",
        safetyMeasure:
          "Revizuirea documentației și comunicarea modificărilor către personal.",
      },
    ],
  },
  {
    categoryName: "Instruirea lucrătorilor",
    questions: [
      {
        questionText:
          "Toți lucrătorii au efectuat instruirea introductiv-generală înainte de începerea activității?",
        safetyMeasure:
          "Efectuarea instruirii restante înainte de începerea activității.",
      },
      {
        questionText:
          "Instruirea la locul de muncă a fost efectuată și documentată corespunzător?",
        safetyMeasure:
          "Refacerea instruirii și completarea fișelor individuale de instruire.",
      },
      {
        questionText:
          "Instruirea periodică este efectuată la termenele stabilite?",
        safetyMeasure:
          "Planificarea și efectuarea imediată a instruirilor restante.",
      },
      {
        questionText:
          "Tematica instruirii este adaptată riscurilor și activităților desfășurate?",
        safetyMeasure: "Actualizarea tematicii și reinstruirea personalului.",
      },
      {
        questionText:
          "Lucrătorii cunosc riscurile specifice și măsurile de prevenire aplicabile?",
        safetyMeasure:
          "Reinstruirea lucrătorilor și verificarea însușirii cunoștințelor.",
      },
      {
        questionText:
          "Lucrătorii cunosc modul de utilizare a echipamentelor de muncă și a echipamentelor individuale de protecție?",
        safetyMeasure: "Organizarea unei instruiri practice suplimentare.",
      },
      {
        questionText:
          "Instruirea suplimentară este efectuată după modificări tehnologice, accidente sau schimbarea locului de muncă?",
        safetyMeasure:
          "Efectuarea instruirilor suplimentare și actualizarea evidențelor.",
      },
      {
        questionText:
          "Fișele individuale de instruire sunt completate, semnate și păstrate corespunzător?",
        safetyMeasure:
          "Completarea documentelor lipsă și verificarea evidențelor.",
      },
      {
        questionText:
          "Eficiența instruirii este verificată prin testare sau observații la locul de muncă?",
        safetyMeasure: "Organizarea testărilor și a verificărilor practice.",
      },
      {
        questionText:
          "Conducătorii locurilor de muncă monitorizează aplicarea cunoștințelor dobândite la instruire?",
        safetyMeasure:
          "Intensificarea supravegherii și efectuarea reinstruirilor atunci când sunt identificate abateri.",
      },
    ],
  },
  {
    categoryName: "Respectarea instrucțiunilor",
    questions: [
      {
        questionText:
          "Lucrătorii respectă instrucțiunile proprii SSM aplicabile postului?",
        safetyMeasure:
          "Reinstruirea lucrătorilor și supravegherea respectării instrucțiunilor.",
      },
      {
        questionText:
          "Procedurile de lucru sunt aplicate integral în timpul desfășurării activității?",
        safetyMeasure:
          "Corectarea imediată a abaterilor și actualizarea procedurilor, dacă este necesar.",
      },
      {
        questionText:
          "Lucrătorii utilizează echipamentele de muncă conform instrucțiunilor producătorului?",
        safetyMeasure:
          "Reinstruirea operatorilor și interzicerea practicilor neconforme.",
      },
      {
        questionText:
          "Echipamentul individual de protecție este purtat și utilizat conform instrucțiunilor de utilizare?",
        safetyMeasure:
          "Asigurarea utilizării echipamentului individual de protecție și aplicarea măsurilor disciplinare, după caz.",
      },
      {
        questionText:
          "Sunt respectate semnalizarea de securitate și restricțiile de acces?",
        safetyMeasure:
          "Reinstruirea personalului și monitorizarea respectării semnalizării.",
      },
      {
        questionText:
          "Lucrătorii respectă regulile privind blocarea și izolarea surselor de energie (LOTO), unde este cazul?",
        safetyMeasure:
          "Instruirea personalului și implementarea strictă a procedurilor LOTO.",
      },
      {
        questionText:
          "Sunt respectate instrucțiunile privind manipularea materialelor și substanțelor periculoase?",
        safetyMeasure:
          "Reinstruirea personalului și revizuirea modului de lucru.",
      },
      {
        questionText:
          "Lucrătorii raportează imediat situațiile periculoase și incidentele?",
        safetyMeasure:
          "Reinstruirea privind obligația de raportare și implementarea unui sistem de urmărire.",
      },
      {
        questionText:
          "Conducătorii locurilor de muncă verifică respectarea instrucțiunilor SSM?",
        safetyMeasure:
          "Creșterea frecvenței controalelor și consemnarea rezultatelor.",
      },
      {
        questionText:
          "Abaterile constatate sunt analizate și sunt aplicate măsuri corective?",
        safetyMeasure:
          "Stabilirea responsabililor, termenelor și verificarea eficacității măsurilor.",
      },
    ],
  },
  {
    categoryName: "Măsuri din evaluarea riscurilor",
    questions: [
      {
        questionText:
          "Măsurile prevăzute în evaluarea riscurilor au fost implementate?",
        safetyMeasure:
          "Implementarea măsurilor restante și actualizarea planului de acțiune.",
      },
      {
        questionText:
          "Termenele stabilite pentru implementarea măsurilor sunt respectate?",
        safetyMeasure:
          "Stabilirea unor termene noi și alocarea responsabilităților pentru finalizare.",
      },
      {
        questionText:
          "Responsabilii desemnați pentru implementarea măsurilor și-au îndeplinit obligațiile?",
        safetyMeasure:
          "Reanalizarea responsabilităților și monitorizarea implementării.",
      },
      {
        questionText:
          "Măsurile tehnice implementate reduc efectiv nivelul de risc?",
        safetyMeasure:
          "Revizuirea soluțiilor tehnice și implementarea unor măsuri suplimentare.",
      },
      {
        questionText:
          "Măsurile organizatorice prevăzute sunt aplicate în activitatea curentă?",
        safetyMeasure:
          "Reinstruirea personalului și monitorizarea aplicării măsurilor.",
      },
      {
        questionText:
          "Evaluarea riscurilor a fost actualizată după modificări tehnologice, organizatorice sau accidente?",
        safetyMeasure:
          "Actualizarea evaluării riscurilor și a planului de prevenire și protecție.",
      },
      {
        questionText:
          "Au fost identificate riscuri noi care nu sunt incluse în evaluarea actuală?",
        safetyMeasure:
          "Completarea evaluării riscurilor cu noile pericole identificate.",
      },
      {
        questionText:
          "Eficacitatea măsurilor implementate este verificată periodic?",
        safetyMeasure:
          "Introducerea unui program periodic de verificare a eficacității măsurilor.",
      },
      {
        questionText:
          "Lucrătorii cunosc și aplică măsurile de prevenire rezultate din evaluarea riscurilor?",
        safetyMeasure:
          "Reinstruirea lucrătorilor și verificarea aplicării la locul de muncă.",
      },
      {
        questionText:
          "Există evidențe privind urmărirea și închiderea măsurilor din evaluarea riscurilor?",
        safetyMeasure:
          "Actualizarea registrului de măsuri și verificarea finalizării acestora.",
      },
    ],
  },
  {
    categoryName: "Neconformități identificate",
    questions: [
      {
        questionText:
          "Neconformitățile identificate sunt consemnate în mod clar și complet?",
        safetyMeasure:
          "Completarea fișelor de constatare și documentarea corespunzătoare.",
      },
      {
        questionText:
          "Neconformitățile sunt clasificate în funcție de gravitate și nivelul de risc?",
        safetyMeasure:
          "Încadrarea neconformităților pe niveluri de risc și gravitate.",
      },
      {
        questionText:
          "Au fost stabilite măsuri corective pentru fiecare neconformitate?",
        safetyMeasure:
          "Definirea măsurilor corective pentru toate neconformitățile identificate.",
      },
      {
        questionText:
          "Au fost desemnați responsabili pentru implementarea măsurilor corective?",
        safetyMeasure:
          "Nominalizarea responsabililor și comunicarea obligațiilor acestora.",
      },
      {
        questionText:
          "Au fost stabilite termene de remediere pentru toate neconformitățile?",
        safetyMeasure:
          "Stabilirea termenelor și monitorizarea respectării acestora.",
      },
      {
        questionText:
          "Neconformitățile cu risc ridicat au fost remediate cu prioritate?",
        safetyMeasure:
          "Suspendarea activității, dacă este necesar, și implementarea urgentă a măsurilor.",
      },
      {
        questionText:
          "Implementarea măsurilor corective este urmărită și documentată?",
        safetyMeasure: "Actualizarea registrului de urmărire a măsurilor.",
      },
      {
        questionText:
          "Eficacitatea măsurilor implementate este verificată după remediere?",
        safetyMeasure:
          "Verificarea în teren și validarea eficacității măsurilor.",
      },
      {
        questionText:
          "Neconformitățile repetate sunt analizate pentru identificarea cauzelor?",
        safetyMeasure:
          "Analiza cauzelor de bază și implementarea măsurilor preventive.",
      },
      {
        questionText:
          "Registrul neconformităților este actualizat și disponibil pentru verificare?",
        safetyMeasure:
          "Actualizarea registrului și verificarea periodică a acestuia.",
      },
    ],
  },
  {
    categoryName: "Măsuri corective și termene",
    questions: [
      {
        questionText:
          "Pentru fiecare neconformitate a fost stabilită o măsură corectivă concretă?",
        safetyMeasure:
          "Stabilirea măsurilor corective pentru toate neconformitățile identificate.",
      },
      {
        questionText: "Măsurile corective au un responsabil desemnat?",
        safetyMeasure:
          "Nominalizarea responsabililor și comunicarea obligațiilor acestora.",
      },
      {
        questionText: "Au fost stabilite termene realiste de implementare?",
        safetyMeasure: "Stabilirea sau revizuirea termenelor de implementare.",
      },
      {
        questionText: "Măsurile cu risc ridicat au termene prioritare?",
        safetyMeasure:
          "Urgentarea implementării măsurilor pentru riscurile critice.",
      },
      {
        questionText:
          "Stadiul implementării măsurilor este monitorizat periodic?",
        safetyMeasure:
          "Instituirea unui sistem de monitorizare și raportare periodică.",
      },
      {
        questionText: "Termenele de implementare sunt respectate?",
        safetyMeasure:
          "Analizarea întârzierilor și stabilirea unor acțiuni pentru recuperarea acestora.",
      },
      {
        questionText: "Implementarea măsurilor este verificată în teren?",
        safetyMeasure:
          "Efectuarea verificărilor la locul de muncă și documentarea rezultatelor.",
      },
      {
        questionText:
          "Eficacitatea măsurilor corective este evaluată după implementare?",
        safetyMeasure:
          "Reevaluarea riscului și adoptarea unor măsuri suplimentare dacă este necesar.",
      },
      {
        questionText:
          "Măsurile finalizate sunt închise numai după verificarea eficacității?",
        safetyMeasure:
          "Verificarea finală și documentarea închiderii măsurilor.",
      },
      {
        questionText:
          "Există un registru actualizat al măsurilor corective și al termenelor de realizare?",
        safetyMeasure:
          "Actualizarea permanentă a registrului și urmărirea termenelor scadente.",
      },
    ],
  },
];
