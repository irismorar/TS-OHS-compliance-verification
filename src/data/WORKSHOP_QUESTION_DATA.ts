import type { QuestionData } from "../useQuestions";

export const WORKSHOP_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Organizare SSM",
    questions: [
      {
        questionText: "Există persoană desemnată SSM sau serviciu extern?",
        safetyMeasure:
          "Se vor numi lucrătorii SSM și cei cu atribuții în domeniul SSM conform dispozițiilor legale, se va apela la servicii externe după caz.",
      },
      {
        questionText:
          "Planul de prevenire și protecție este actualizat periodic sau la schimbări structurale?",
        safetyMeasure:
          "Planul de prevenire și protecție se va analiza periodic și funcție de modificările structurale, în baza rezultatelor evaluării riscurilor se va adapta la noile cerințe.",
      },
      {
        questionText:
          "Evaluarea riscurilor acoperă toate posturile de muncă? Sunt necesare evaluari suplimentare?",
        safetyMeasure:
          "Se propune reevaluarea riscurilor în SSM, ținându-se cont de sistemele de muncă existente, riscurile specifice și grupurile sensibile la muncă.",
      },
      {
        questionText:
          "Există instrucțiuni proprii SSM pentru toate activitățile?",
        safetyMeasure:
          "Este necesară completarea și revizuirea instrucțiunii proprii SSM, elaborarea lor pe activități desfășurate și expunerea instrucțiunii proprii SSM pentru exploatare/desfășurare de activități pe locuri de muncă.",
      },
      {
        questionText:
          "Comitetul SSM (unde este obligatoriu) funcționează conform legii?",
        safetyMeasure:
          "Analizarea activității comitetului SSM cu propunerea de măsuri de optimizare a activității și cu o mai bună informare și pregătire a membrilor comitetului SSM.",
      },
      {
        questionText: "Există raport anual privind activitatea SSM?",
        safetyMeasure:
          "Analiza rapoartelor anuale asupra activității SSM și o cuantificare amănunțită a tuturor activităților desfășurate la nivel de unitate/societate.",
      },
      {
        questionText:
          "Există evidență actualizată a accidentelor și incidentelor?",
        safetyMeasure:
          "Verificarea registrelor de evidență a evenimentelor, verificarea consemnării fiecărui eveniment în aceste registre.",
      },
      {
        questionText: "Se realizează inspecții interne periodice?",
        safetyMeasure:
          "Planificarea și aprobarea verificărilor interne în SSM a tuturor locurilor de muncă din unitate / abordarea tematică a controalelor interne.",
      },
    ],
  },
  {
    categoryName: "Obligații ale angajatorului",
    questions: [
      {
        questionText:
          "Au fost asigurate instruirile SSM obligatorii tuturor lucrătorilor?",
        safetyMeasure:
          "Revizuirea planului și a tematicii de instruire, a periodicității instruirii, verificarea consemnării instruirii în fișele individuale de instruire.",
      },
      {
        questionText: "Există dovezi semnate pentru instruirea SSM?",
        safetyMeasure:
          "Se va verifica modul de consemnare a efectuării instruirii, se vor verifica și consemna corect temele de instruire și se va verifica semnarea instruirii.",
      },
      {
        questionText:
          "Sunt puse la dispoziție echipamente individuale de protecție adecvate fiecărui post?",
        safetyMeasure:
          "Se impune reevaluarea acordării echipamentelor individuale de protecție, analiza calității echipamentelor individuale de protecție acordate și îmbunătățirea modului de acordare a echipamentelor individuale de protecție.",
      },
      {
        questionText:
          "Se verifică periodic starea echipamentului individual de protecție?",
        safetyMeasure:
          "Se va planifica și aproba verificarea lunară a stării echipamentului individual de protecție, verificarea uzurii acestuia de către lucratorul desemnat SSM și evidența verificărilor speciale ale echipamentului individual de protecție.",
      },
      {
        questionText:
          "Se asigură medicina muncii (fișe aptitudini, controale periodice)?",
        safetyMeasure:
          "Vizitele medicale periodice se vor programa anual cu cel puțin 30 de zile înaintea termenului de valabilitate pentru toți lucrătorii.",
      },
      {
        questionText:
          "Există plan de protecție colectivă (balustrade, garduri, ventilație etc.)?",
        safetyMeasure:
          "Verificarea periodică a protecțiilor colective cu consemnarea în proces verbal de verificare sau notă de verificare de către o comisie tehnica la nivel de unitate.",
      },
      {
        questionText:
          "Se raportează autorităților accidentele de muncă conform prevederilor legale?",
        safetyMeasure:
          "Se va ține evidența clară a formularelor de anunțare a evenimentelor, a dosarelor evenimentelor care au fost cercetate.",
      },
      {
        questionText:
          "Se pune la dispoziție apă potabilă și condiții de igienă adecvate?",
        safetyMeasure:
          "Se va pune în practică un plan de verificare a condițiilor de igienă la nivel de societate, se vor raporta și se vor remedia deficiențele constatate.",
      },
    ],
  },
  {
    categoryName: "Obligații ale lucrătorului",
    questions: [
      {
        questionText:
          "Lucrătorii folosesc corect echipamentul individual de protecție atribuit?",
        safetyMeasure:
          "Periodic, lucrătorul desemnat SSM va verifica folosirea echipamentului individual de protecție de către lucrători, conducătorii direcți ai locurilor de muncă vor pune în practică procedura zilnică de verificare a purtării echipamentului individual de protecție.",
      },
      {
        questionText: "Lucrătorii respectă procedurile de lucru?",
        safetyMeasure:
          "Se impune verificarea zilnică de catre conducătorii direcți ai locurilor de muncă a respectării acestor proceduri iar lucrătorul desemnat SSM va verifica periodic respectarea procedurilor.",
      },
      {
        questionText: "Lucrătorii raportează imediat pericolele?",
        safetyMeasure:
          "Se va expune la fiecare loc de muncă instrucțiunea/procedura OPREȘTE-ANUNȚĂ-AȘTEAPTĂ.",
      },
      {
        questionText:
          "Lucrătorii participă la instruiri și controale medicale?",
        safetyMeasure:
          "La fiecare instruire, conducătorul locului de muncă va întocmi un proces verbal de prezență semnat de participanții la instruire.",
      },
    ],
  },
  {
    categoryName: "Instruire SSM",
    questions: [
      {
        questionText:
          "Instruirea introductiv-generală este efectuată și testată?",
        safetyMeasure:
          "Instruirea introductiv-generală se va planifica de către departamentul Resurse Umane înainte cu minim 24 de ore la lucrătorul desemnat SSM. Testele în urma instruirii introductiv-generale se vor păstra la lucrătorul desemnat SSM și/sau serviciu intern de prevenire și protecție.",
      },
      {
        questionText: "Instruirea la locul de muncă este adecvată riscurilor?",
        safetyMeasure:
          "Se va revizui tematica instruirii la locul de muncă și se vor prezenta măsurile planului de prevenire și protecție pentru riscurile evaluate la locul de muncă vizat.",
      },
      {
        questionText:
          "Instruirea periodică se efectuează la intervalele stabilite?",
        safetyMeasure:
          "Se va verifica periodicitatea efectuării instruirii. Se propune analiza calității instruirii, periodicitatea și timpul aferent acesteia.",
      },
      {
        questionText:
          "Există instruire suplimentară după modificări tehnologice sau procedurale?",
        safetyMeasure:
          "Tematica instruirii suplimentare va conține obligatoriu instrucțiuni proprii SSM pentru activitate și măsurile de prevenire a efectului riscurilor periculoase existente în sistemul de muncă vizat.",
      },
      {
        questionText:
          "Instruirea conducătorilor locurilor de muncă este actualizată?",
        safetyMeasure:
          "Se va analiza gradul de cunoaștere și informare a conducătorilor locurilor de muncă. Se propune îmbunătățirea calității și conținutului temelor de instruire.",
      },
    ],
  },
  {
    categoryName: "Locul de muncă",
    questions: [
      {
        questionText: "Spațiul de lucru este ordonat și curat?",
        safetyMeasure:
          "Se solicita verificarea săptămânală a locurilor de muncă. Conducătorul direct va verifica zilnic curățenia și ordinea la începutul și sfârșitul schimbului de lucru.",
      },
      {
        questionText: "Iluminatul este adecvat conform activităților?",
        safetyMeasure:
          "Se va efectua cel puțin anual măsurarea fluxului luminos la locurile de muncă.",
      },
      {
        questionText: "Ventilația sau climatizarea sunt corespunzătoare?",
        safetyMeasure:
          "Se va nominaliza lucrătorul responsabil cu sistemul de ventilație/climatizare pe categorii de locuri de muncă. Se raporteaza imediat și se remediază deficiențele.",
      },
      {
        questionText: "Zgomotul este monitorizat și controlat (unde e cazul)?",
        safetyMeasure:
          "Se va efectua cel putin anual măsurarea nivelului de zgomot iar la depasirea a 80db/medie se aplică procedura de informare și acordare a echipamentului individual de protecție corespunzător.",
      },
      {
        questionText:
          "Există protecții funcționale pentru utilaje și echipamente?",
        safetyMeasure:
          "Verificarea protecțiilor pe echipamentul de muncă se va face zilnic de către conducătorul direct al locului de muncă. Serviciul de mentenanță va realiza verificările tehnice și remedierile.",
      },
      {
        questionText: "Instalațiile electrice sunt verificate periodic?",
        safetyMeasure:
          "Se vor verifica conform IT I7 și a standardelor de electrosecuritate. Verificarea și întreținerea uzuală se va face în mod continuu de electricieni autorizați.",
      },
      {
        questionText:
          "Substanțele periculoase sunt etichetate și depozitate corect?",
        safetyMeasure:
          "Substanțele periculoase se păstrează în ambalaje originale etichetate corespunzător. Verificarea depozitării se va realiza de lucratorul desemnat SSM periodic.",
      },
      {
        questionText:
          "Există fișe cu date de securitate pentru substanțele periculoase?",
        safetyMeasure:
          "Se vor expune la locul de muncă fișele cu date de securitate a produselor chimice folosite și instruțiuni proprii SSM pentru activitatea cu aceste substanțe.",
      },
      {
        questionText:
          "Se asigură ergonomia locului de muncă (scaune, înălțimea mesei, posturi corecte)?",
        safetyMeasure:
          "Se va efectua evaluarea ergonomică a locurilor de muncă existente.",
      },
    ],
  },
  {
    categoryName: "Căi de acces",
    questions: [
      {
        questionText: "Căile de acces sunt libere, marcate și în stare bună?",
        safetyMeasure:
          "Se vor marca și semnaliza căile de acces. Se interzice depozitatea de sarcini pe aceste căi de acces și se va verifica calitatea acestora.",
      },
      {
        questionText:
          "Căile de evacuare sunt semnalizate iluminat și neobstrucționate?",
        safetyMeasure:
          "Se va reface semnalizarea și se va organiza degrevarea de sarcini depozitate incorect pe aceste suprafețe.",
      },
      {
        questionText: "Ieșirile de urgență sunt funcționale și accesibile?",
        safetyMeasure:
          "Verificarea eficacității acestor ieșiri se va face săptămânal.",
      },
      {
        questionText:
          "Pardoselile sunt în stare bună, fără riscuri de alunecare?",
        safetyMeasure:
          "Se va verifica periodic calitatea suprafețelor de lucru și acces, de catre lucrătorul desemnat SSM.",
      },
    ],
  },
  {
    categoryName: "Situații de urgență",
    questions: [
      {
        questionText: "Există truse de prim ajutor complet echipate?",
        safetyMeasure:
          "Se vor verifica lunar trusele de prim ajutor, se vor completa cu necesarul medical.",
      },
      {
        questionText: "Există stingătoare verificate și accesibile?",
        safetyMeasure:
          "Stingătoarele de incendiu se vor expune în locuri predestinate, cu semnalizare corespunzătoare și verificare anuală în termen.",
      },
      {
        questionText: "Planul de evacuare este afișat și cunoscut de angajați?",
        safetyMeasure:
          "Se va verifica corespondența planului cu situația reală.",
      },
      {
        questionText: "Există personal instruit pentru prim ajutor?",
        safetyMeasure:
          "Se vor forma grupe de lucrători pentru acordare de prim ajutor și se vor instrui corespunzător.",
      },
      {
        questionText: "Exerciții de evacuare se efectuează anual?",
        safetyMeasure:
          "Se planifică exercițiile de evacuare (minim două/an) și se efectuează cu întreg personalul.",
      },
    ],
  },
  {
    categoryName: "Sistemul de muncă",
    questions: [
      {
        questionText:
          "Sarcinile sunt adaptate capacității fizice și psihice a lucrătorilor?",
        safetyMeasure:
          "Se impune verificarea împreună cu medicul de medicina muncii.",
      },
      {
        questionText: "Se evită suprasolicitarea sau ritmul excesiv de lucru?",
        safetyMeasure:
          "Se va realiza o evaluare a mânuirii sarcinilor la fiecare loc de muncă cu astfel de activitate curentă.",
      },
      {
        questionText: "Există semnalizare de securitate corespunzătoare?",
        safetyMeasure:
          "Verificarea semnalizarii și completarea acesteia se va efectua periodic de către lucrătorul desemnat SSM.",
      },
      {
        questionText:
          "Angajații sunt consultați privind îmbunătățirea condițiilor de muncă?",
        safetyMeasure:
          "Se propune un program de consultare activ la nivel de unitate.",
      },
    ],
  },
];
