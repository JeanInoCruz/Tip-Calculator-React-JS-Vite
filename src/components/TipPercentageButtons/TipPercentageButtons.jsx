import { useState } from "react";

export const TipPercentageButtons = ({
  percentages,
  handleTipSelect,
  activeButton,
}) => {
  const [customPercentage, setCustomPercentage] = useState("");

  const handleCustomTip = () => {
    handleTipSelect(customPercentage);
  };

  const handleChange = (e) => {
    setCustomPercentage(e.target.value);
  };

  const handleButtonClick = (percentage) => {
    // Desactivar la clase active de los otros botones
    handleTipSelect(percentage);
    setCustomPercentage(""); // Limpiar el valor del input personalizado
  };

  return (
    <>
      <h2>Select Tip %</h2>
      <ul>
        {percentages.map((percentage, index) => (
          <li key={index} id={`percentage-${percentage}`}>
            <button
              type="button"
              className={`percentage-button ${
                activeButton === percentage ? "active" : ""
              }`}
              onClick={() => handleButtonClick(percentage)}
            >
              {percentage}%
            </button>
          </li>
        ))}
        <li id="percentage-custom">
          <input
            type="number"
            placeholder="Custom"
            id="custom-percentage-button"
            className="percentage-button"
            value={customPercentage}
            onChange={handleChange}
            onClick={() => handleButtonClick("custom")}
          />
        </li>
      </ul>
    </>
  );
};
