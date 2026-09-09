import type { QuestionData } from "../useQuestions";

export const WORK_EQUIPMENT_QUESTION_DATA: QuestionData = [
  {
    categoryName: "Echipament de muncă",
    questions: [
      {
        questionText:
          "Echipamentul este adecvat activității pentru care este utilizat?",
        safetyMeasure:
          "Se retrage din exploatare echipamentul neadecvat și se înlocuiește cu un echipament compatibil cu procesul tehnologic, conform documentației tehnice și evaluării riscurilor.",
      },
      {
        questionText: "Apărătorile fixe sunt complete și fixate sigur?",
        safetyMeasure:
          "Se montează apărătorile lipsă, se înlocuiesc elementele deformate sau corodate, se refac sistemele originale de prindere și se verifică imposibilitatea accesului la organele periculoase.",
      },
      {
        questionText:
          "Apărătorile mobile cu interblocare opresc mișcările periculoase?",
        safetyMeasure:
          "Se înlocuiește dispozitivul de interblocare defect, se reglează poziția senzorilor și se validează oprirea completă a mișcărilor periculoase la deschiderea apărătorii.",
      },
      {
        questionText: "Organele de comandă sunt marcate clar?",
        safetyMeasure:
          "Se refac inscripționările utilizând marcaje permanente și se înlocuiesc butoanele deteriorate pentru identificarea fără echivoc a fiecărei comenzi.",
      },
      {
        questionText: "Butonul STOP de urgență funcționează?",
        safetyMeasure:
          "Se înlocuiește ansamblul de oprire de urgență defect, se verifică timpul de oprire și se confirmă funcționarea pe întreaga zonă protejată.",
      },
      {
        questionText: "Pornirea accidentală este prevenită?",
        safetyMeasure:
          "Se remediază circuitul de comandă prin eliminarea comenzilor parazite și se montează dispozitive care împiedică pornirea involuntară.",
      },
      {
        questionText:
          "Repornirea automată după revenirea tensiunii este împiedicată?",
        safetyMeasure:
          "Se montează protecție la lipsă de tensiune sau modul anti-restart și se testează imposibilitatea repornirii automate.",
      },
      {
        questionText: "Accesul la organele în mișcare este împiedicat?",
        safetyMeasure:
          "Se montează garduri, carcase sau bariere fixe conform distanțelor de securitate și se elimină toate punctele de acces necontrolat.",
      },
      {
        questionText: "Există risc de proiectare a pieselor?",
        safetyMeasure:
          "Se montează ecrane de protecție rezistente la impact și se înlocuiesc dispozitivele de prindere care nu asigură retenția piesei.",
      },
      {
        questionText: "Dispozitivele de fixare a pieselor sunt sigure?",
        safetyMeasure:
          "Se înlocuiesc bacurile, menghinele sau sistemele de prindere uzate și se verifică forța de strângere înainte de exploatare.",
      },
      {
        questionText: "Există iluminat suficient în zona de lucru?",
        safetyMeasure:
          "Se completează instalația de iluminat până la nivelul necesar operației și se elimină zonele cu umbre care afectează vizibilitatea.",
      },
      {
        questionText: "Suprafețele fierbinți sunt protejate?",
        safetyMeasure:
          "Se montează ecrane termoizolante și protecții mecanice pe suprafețele cu temperaturi periculoase și se refac marcajele de avertizare.",
      },
      {
        questionText: "Protecția împotriva electrocutării este asigurată?",
        safetyMeasure:
          "Se remediază continuitatea conductorului de protecție, se înlocuiesc componentele electrice defecte și se confirmă conformitatea prin verificări electrice.",
      },
      {
        questionText: "Instalațiile hidraulice sunt etanșe?",
        safetyMeasure:
          "Se înlocuiesc furtunurile, racordurile și garniturile cu pierderi și se verifică funcționarea la presiunea nominală.",
      },
      {
        questionText: "Instalațiile pneumatice sunt etanșe?",
        safetyMeasure:
          "Se elimină pierderile de aer prin schimbarea racordurilor și conductelor defecte și se verifică stabilitatea presiunii de lucru.",
      },
      {
        questionText: "Instrucțiunile de utilizare sunt disponibile?",
        safetyMeasure:
          "Se amplasează instrucțiunea specifică la postul de lucru și se actualizează conform ultimei configurații tehnice a echipamentului.",
      },
      {
        questionText: "Operatorii sunt instruiți pentru echipament?",
        safetyMeasure:
          "Se suspendă utilizarea echipamentului de către personalul neinstruit și se efectuează instruirea specifică înainte de reluarea activității.",
      },
      {
        questionText: "Mentenanța preventivă este executată?",
        safetyMeasure:
          "Se execută integral lucrările de mentenanță restante și se înlocuiesc componentele care au depășit durata de funcționare admisă.",
      },
      {
        questionText: "Există evidența verificărilor tehnice?",
        safetyMeasure:
          "Se completează registrele de verificare cu rezultatele controalelor efectuate și se reface trasabilitatea intervențiilor tehnice.",
      },
      {
        questionText: "Semnalizarea de securitate este completă?",
        safetyMeasure:
          "Se montează toate indicatoarele lipsă și se înlocuiesc cele deteriorate astfel încât avertizările să fie vizibile din zona de acces.",
      },
      {
        questionText: "Nivelul de zgomot este controlat?",
        safetyMeasure:
          "Se elimină sursa tehnică a zgomotului prin reglaj, echilibrare sau înlocuirea componentelor și se montează protecții fonoabsorbante unde este necesar.",
      },
      {
        questionText: "Ventilația locală funcționează?",
        safetyMeasure:
          "Se repară instalația de captare, se înlocuiesc filtrele colmatate și se verifică debitul de exhaustare conform parametrilor proiectați.",
      },
      {
        questionText: "Reglajele se pot face fără acces în zona periculoasă?",
        safetyMeasure:
          "Se modifică sistemul de reglaj prin montarea comenzilor externe sau a dispozitivelor care permit reglajul fără expunerea operatorului.",
      },
      {
        questionText: "Procedura LOTO este aplicată la intervenții?",
        safetyMeasure:
          "Se blochează toate sursele de energie, se aplică lacătele și etichetele de securitate și se verifică energia reziduală înaintea intervenției.",
      },
      {
        questionText: "Zona din jurul echipamentului este curată?",
        safetyMeasure:
          "Se îndepărtează imediat scurgerile, deșeurile și obstacolele și se readuce suprafața de circulație la o stare sigură.",
      },
      {
        questionText: "Cablurile sunt protejate mecanic?",
        safetyMeasure:
          "Se înlocuiesc cablurile deteriorate și se montează în canale, tuburi sau protecții mecanice corespunzătoare.",
      },
      {
        questionText: "Dispozitivele de avertizare sunt funcționale?",
        safetyMeasure:
          "Se repară sau se înlocuiesc avertizoarele optice și acustice și se confirmă funcționarea lor înainte de punerea în exploatare.",
      },
      {
        questionText: "Modificările tehnice sunt autorizate?",
        safetyMeasure:
          "Se elimină modificările executate fără aprobare, se readuce echipamentul la configurația validată și se actualizează documentația tehnică.",
      },
      {
        questionText: "Există spațiu suficient pentru exploatare și evacuare?",
        safetyMeasure:
          "Se reconfigurează amplasarea echipamentelor și se eliberează culoarele pentru respectarea gabaritelor minime de securitate.",
      },
      {
        questionText: "Starea tehnică generală este corespunzătoare?",
        safetyMeasure:
          "Se remediază toate defecțiunile constatate, se execută probe funcționale complete și se aprobă repunerea în exploatare numai după confirmarea conformității.",
      },
    ],
  },
];
