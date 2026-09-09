import type { QuestionData } from "../useQuestions";

export const MAINTENANCE_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Pregătirea lucrării",
    questions: [
      {
        questionText: "Există ordin de lucru aprobat?",
        safetyMeasure:
          "Se obține aprobarea formală a ordinului de lucru înainte de începerea activității.",
      },
      {
        questionText: "Există procedură tehnică actualizată?",
        safetyMeasure:
          "Se revizuiește și distribuie ultima versiune a procedurii tehnice.",
      },
      {
        questionText: "Există instrucțiune SSM pentru activitate?",
        safetyMeasure:
          "Se elaborează sau actualizează instrucțiunea SSM și se comunică personalului.",
      },
      {
        questionText: "A fost efectuată analiza de risc?",
        safetyMeasure:
          "Se realizează și aprobă analiza de risc înainte de începerea lucrării.",
      },
      {
        questionText: "Există permis de lucru valabil?",
        safetyMeasure: "Se emite sau reînnoiește permisul de lucru.",
      },
      {
        questionText: "Lucrătorii sunt instruiți SSM?",
        safetyMeasure:
          "Se efectuează instruirea SSM și se consemnează în fișele de instruire.",
      },
      {
        questionText:
          "Lucrătorii sunt autorizați pentru activitatea executată?",
        safetyMeasure: "Se verifică și obțin autorizările necesare.",
      },
      {
        questionText: "Există coordonator al lucrării?",
        safetyMeasure: "Se desemnează responsabil un coordonator de lucrare.",
      },
      {
        questionText: "Au fost identificate toate sursele de energie?",
        safetyMeasure: "Se identifică și marchează toate sursele de energie.",
      },
      {
        questionText: "A fost realizat instructajul operativ?",
        safetyMeasure: "Se efectuează instructajul operativ înaintea lucrării.",
      },
    ],
  },
  {
    categoryName: "LOTO și securizare",
    questions: [
      {
        questionText: "Echipamentul este oprit complet?",
        safetyMeasure: "Se oprește și izolează complet echipamentul.",
      },
      {
        questionText: "Procedura LOTO este aplicată?",
        safetyMeasure: "Se aplică integral procedura Lockout/Tagout.",
      },
      {
        questionText: "Lacătul aparține executantului?",
        safetyMeasure: "Se montează lacăt individual al executantului.",
      },
      {
        questionText: "Etichetele LOTO sunt completate?",
        safetyMeasure: "Se completează integral etichetele de identificare.",
      },
      {
        questionText: "A fost verificată lipsa tensiunii?",
        safetyMeasure:
          "Se măsoară și confirmă lipsa tensiunii cu aparat verificat.",
      },
      {
        questionText: "A fost eliminată presiunea?",
        safetyMeasure: "Se depresurizează instalația în siguranță.",
      },
      {
        questionText: "A fost eliminată energia pneumatică?",
        safetyMeasure: "Se golește și izolează circuitul pneumatic.",
      },
      {
        questionText: "A fost eliminată energia hidraulică?",
        safetyMeasure: "Se descarcă și izolează sistemul hidraulic.",
      },
      {
        questionText: "A fost eliminată energia mecanică acumulată?",
        safetyMeasure:
          "Se descarcă arcurile, contragreutățile sau alte energii stocate.",
      },
      {
        questionText: "Au fost blocate părțile mobile?",
        safetyMeasure: "Se montează dispozitive de blocare mecanică.",
      },
      {
        questionText: "Temperatura permite intervenția?",
        safetyMeasure: "Se răcește echipamentul până la temperatura sigură.",
      },
      {
        questionText: "Conductele au fost golite?",
        safetyMeasure: "Se drenează complet conductele.",
      },
      {
        questionText: "Recipientele au fost golite și ventilate?",
        safetyMeasure: "Se golesc, spală și ventilează recipientele.",
      },
      {
        questionText: "Atmosfera este sigură?",
        safetyMeasure: "Se verifică atmosfera înainte de acces.",
      },
      {
        questionText: "Există măsurători de gaz efectuate?",
        safetyMeasure: "Se efectuează măsurători cu detector calibrat.",
      },
    ],
  },
  {
    categoryName: "Organizarea șantierului",
    questions: [
      {
        questionText: "Zona este delimitată?",
        safetyMeasure: "Se montează bariere și delimitări fizice.",
      },
      {
        questionText: "Zona este semnalizată?",
        safetyMeasure: "Se amplasează indicatoare și avertizări vizibile.",
      },
      {
        questionText: "Există iluminat suficient?",
        safetyMeasure: "Se asigură iluminat suplimentar adecvat.",
      },
      {
        questionText: "Căile de acces sunt libere?",
        safetyMeasure: "Se elimină obstacolele de pe trasee.",
      },
      {
        questionText: "Căile de evacuare sunt libere?",
        safetyMeasure: "Se degajează căile de evacuare.",
      },
      {
        questionText: "Există ordine și curățenie?",
        safetyMeasure: "Se efectuează curățenia zonei de lucru.",
      },
      {
        questionText: "Cablurile sunt protejate?",
        safetyMeasure:
          "Se protejează cablurile împotriva deteriorării mecanice.",
      },
      {
        questionText: "Materialele sunt depozitate stabil?",
        safetyMeasure:
          "Se reorganizează depozitarea și se stabilizează stivele.",
      },
      {
        questionText: "Există risc de împiedicare?",
        safetyMeasure: "Se elimină obstacolele și cablurile expuse.",
      },
      {
        questionText: "Echipamentele PSI sunt accesibile?",
        safetyMeasure: "Se eliberează accesul la stingătoare și hidranți.",
      },
    ],
  },
  {
    categoryName: "Demontare/Montare",
    questions: [
      {
        questionText: "Există plan de demontare?",
        safetyMeasure: "Se întocmește și aprobă planul de demontare.",
      },
      {
        questionText: "Există plan de montare?",
        safetyMeasure: "Se întocmește și aprobă planul de montare.",
      },
      {
        questionText: "Greutatea subansamblului este cunoscută?",
        safetyMeasure: "Se determină și marchează greutatea reală.",
      },
      {
        questionText: "Punctele de ridicare sunt identificate?",
        safetyMeasure: "Se identifică și marchează punctele aprobate.",
      },
      {
        questionText: "Subansamblul este asigurat împotriva căderii?",
        safetyMeasure: "Se utilizează sisteme de susținere și asigurare.",
      },
      {
        questionText: "Există dispozitive de susținere?",
        safetyMeasure: "Se montează capre, popi sau suporturi adecvate.",
      },
      {
        questionText: "Ordinea de demontare este respectată?",
        safetyMeasure: "Se respectă secvența prevăzută în plan.",
      },
      {
        questionText: "Elementele demontate sunt marcate?",
        safetyMeasure: "Se etichetează și identifică fiecare element.",
      },
      {
        questionText: "Există risc de strivire controlat?",
        safetyMeasure: "Se introduc măsuri de protecție și zone interzise.",
      },
      {
        questionText: "Există spațiu suficient de lucru?",
        safetyMeasure: "Se reorganizează zona pentru acces și manevrare.",
      },
    ],
  },
  {
    categoryName: "Operații mecanice și lăcătușerie",
    questions: [
      {
        questionText: "Piesa este fixată înainte de găurire?",
        safetyMeasure: "Se fixează piesa în dispozitiv de prindere.",
      },
      {
        questionText: "Piesa este fixată înainte de tăiere?",
        safetyMeasure: "Se fixează ferm piesa înainte de operație.",
      },
      {
        questionText: "Protecțiile mașinii sunt montate?",
        safetyMeasure: "Se remontează toate protecțiile lipsă.",
      },
      {
        questionText: "Sculele sunt în stare bună?",
        safetyMeasure: "Se înlocuiesc sau repară sculele defecte.",
      },
      {
        questionText: "Discurile abrazive sunt conforme?",
        safetyMeasure: "Se folosesc doar discuri certificate și fără defecte.",
      },
      {
        questionText: "Turația discului este compatibilă?",
        safetyMeasure: "Se verifică compatibilitatea dintre disc și utilaj.",
      },
      {
        questionText: "Se folosesc ochelari de protecție?",
        safetyMeasure: "Se asigură și impune purtarea ochelarilor.",
      },
      {
        questionText: "Se folosește vizieră?",
        safetyMeasure: "Se utilizează vizieră adecvată operației.",
      },
      {
        questionText: "Există protecție la particule proiectate?",
        safetyMeasure: "Se montează ecrane sau apărători suplimentare.",
      },
      {
        questionText: "Instrumentele de măsurare sunt calibrate?",
        safetyMeasure: "Se verifică valabilitatea calibrării.",
      },
      {
        questionText: "Există risc de agățare a îmbrăcămintei?",
        safetyMeasure: "Se elimină hainele largi și accesoriile.",
      },
      {
        questionText: "Apărătorile sunt funcționale?",
        safetyMeasure: "Se repară sau înlocuiesc apărătorile defecte.",
      },
    ],
  },
  {
    categoryName: "Sudură MIG/MAG/TIG",
    questions: [
      {
        questionText: "Sudorul este autorizat?",
        safetyMeasure: "Se utilizează doar sudori autorizați.",
      },
      {
        questionText: "Există permis de lucru cu foc?",
        safetyMeasure: "Se emite permisul pentru lucru cu foc.",
      },
      {
        questionText: "Buteliile sunt fixate?",
        safetyMeasure: "Se fixează buteliile în poziție verticală.",
      },
      {
        questionText: "Furtunurile sunt în stare bună?",
        safetyMeasure: "Se înlocuiesc furtunurile deteriorate.",
      },
      {
        questionText: "Există stingătoare în apropiere?",
        safetyMeasure: "Se amplasează stingătoare adecvate în zonă.",
      },
      {
        questionText: "Materialele combustibile au fost îndepărtate?",
        safetyMeasure: "Se evacuează materialele combustibile din zonă.",
      },
      {
        questionText: "Există ventilație adecvată?",
        safetyMeasure: "Se asigură ventilație naturală sau mecanică.",
      },
      {
        questionText: "Ecranul de protecție este montat?",
        safetyMeasure: "Se montează ecranul de protecție pentru sudură.",
      },
      {
        questionText: "Masa de sudură este conectată corect?",
        safetyMeasure: "Se verifică și corectează conexiunile electrice.",
      },
      {
        questionText: "Există supraveghere post-lucrare cu foc?",
        safetyMeasure:
          "Se desemnează persoană pentru supraveghere după lucrare.",
      },
    ],
  },
  {
    categoryName: "Manipulare și ridicare sarcini",
    questions: [
      {
        questionText: "Accesoriile de ridicare sunt verificate?",
        safetyMeasure: "Se inspectează și retrag cele neconforme.",
      },
      {
        questionText: "Au marcaj de capacitate?",
        safetyMeasure: "Se utilizează doar accesorii cu marcaje vizibile.",
      },
      {
        questionText: "Sarcina este în limita capacității?",
        safetyMeasure: "Se recalculează și adaptează mijlocul de ridicare.",
      },
      {
        questionText: "Există plan de ridicare?",
        safetyMeasure: "Se elaborează planul de ridicare.",
      },
      {
        questionText: "Zona de ridicare este delimitată?",
        safetyMeasure: "Se delimitează perimetrul de lucru.",
      },
      {
        questionText: "Sarcina este echilibrată?",
        safetyMeasure: "Se repoziționează punctele de prindere.",
      },
      {
        questionText: "Nu există persoane sub sarcină?",
        safetyMeasure: "Se evacuează personalul din zona de risc.",
      },
      {
        questionText: "Operatorul este autorizat?",
        safetyMeasure: "Se utilizează operator autorizat.",
      },
      {
        questionText: "Punctele de prindere sunt corespunzătoare?",
        safetyMeasure: "Se folosesc punctele proiectate pentru ridicare.",
      },
      {
        questionText: "Există comunicare între participanți?",
        safetyMeasure: "Se stabilesc semnale și responsabilități clare.",
      },
    ],
  },
  {
    categoryName: "Lucru la înălțime",
    questions: [
      {
        questionText: "Există permis de lucru la înălțime?",
        safetyMeasure: "Se emite permisul de lucru la înălțime.",
      },
      {
        questionText: "Echipamentul anticădere este verificat?",
        safetyMeasure: "Se inspectează și înlocuiește dacă este necesar.",
      },
      {
        questionText: "Există punct de ancorare certificat?",
        safetyMeasure: "Se utilizează doar puncte certificate.",
      },
      {
        questionText: "Punctul de ancorare este utilizat?",
        safetyMeasure: "Se conectează echipamentul la ancoră.",
      },
      {
        questionText: "Scara este conformă?",
        safetyMeasure: "Se înlocuiește scara neconformă.",
      },
      {
        questionText: "Schela este verificată?",
        safetyMeasure: "Se efectuează verificarea și etichetarea schelei.",
      },
      {
        questionText: "Platforma de lucru este stabilă?",
        safetyMeasure: "Se stabilizează și securizează platforma.",
      },
      {
        questionText: "Există plan de salvare?",
        safetyMeasure:
          "Se întocmește plan de salvare pentru situații de urgență.",
      },
      {
        questionText: "Zona de sub lucru este delimitată?",
        safetyMeasure: "Se delimitează și semnalizează zona inferioară.",
      },
      {
        questionText: "Uneltele sunt asigurate împotriva căderii?",
        safetyMeasure: "Se folosesc sisteme de retenție pentru unelte.",
      },
    ],
  },
];
