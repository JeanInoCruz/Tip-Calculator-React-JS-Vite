import { useState } from "react";

import { BillInput } from "./components/Billinput/BillInput";
import { Header } from "./components/Header/Header";
import { PeopleInput } from "./components/PeopleInput/PeopleInput";
import { ResetButton } from "./components/ResetButton/ResetButton";
import { Result } from "./components/Result/Result";
import { TipPercentageButtons } from "./components/TipPercentageButtons/TipPercentageButtons";
import "./App.css";

function App() {

  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(1);
  const handleTipSelect = (percentage) => {
    setTipPercentage(parseInt(percentage));
  };

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
            activeButton={tipPercentage}
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
