import { useState } from "react";

import { BillInput } from "./components/Billinput/BillInput";
import { Header } from "./components/Header/Header";
import { PeopleInput } from "./components/PeopleInput/PeopleInput";
import { ResetButton } from "./components/ResetButton/ResetButton";
import { Result } from "./components/Result/Result";
import { TipPercentageButtons } from "./components/TipPercentageButtons/TipPercentageButtons";
import "./App.css";

function App() {
  // Estado para guardar el monto de la cuenta (bill)
  const [bill, setBill] = useState(0);

  // Estado para guardar el porcentaje de propina seleccionado
  const [tipPercentage, setTipPercentage] = useState(0);

  // Estado para guardar el número de personas
  const [people, setPeople] = useState(1);

  // Función para manejar la selección de porcentaje de propina
  const handleTipSelect = (percentage) => {
    setTipPercentage(parseFloat(percentage));
  };

  // Función para resetear los valores de los inputs
  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setPeople(1);
  };

  // Calcular el monto de propina por persona
  const tipAmount = (bill * (tipPercentage / 100)) / people;

  // Calcular el total a pagar por persona incluyendo la propina
  const total = (bill * (1 + tipPercentage / 100)) / people;

  return (
    <>
      <Header />
      <div className="general-wrapper">
        <div className="data-wrapper">
          <BillInput bill={bill} setBill={setBill} />
          <TipPercentageButtons
            percentages={[5, 10, 15, 25, 50]}
            handleTipSelect={handleTipSelect}
          />
          <PeopleInput people={people} setPeople={setPeople} />
        </div>
        <div className="result-wrapper">
          <Result tipAmount={tipAmount} total={total} />
          <ResetButton handleReset={handleReset} />
        </div>
      </div>
    </>
  );
}

export default App;
