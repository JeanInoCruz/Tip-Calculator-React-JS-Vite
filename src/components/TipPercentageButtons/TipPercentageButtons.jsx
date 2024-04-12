import { useState } from "react";

export const TipPercentageButtons = ({ percentages, handleTipSelect, activeButton }) => {
    const [customPercentage, setCustomPercentage] = useState("");
  
    const handleCustomTip = () => {
      handleTipSelect(customPercentage);
      document.querySelectorAll(".percentage-button").forEach((button) => {
        button.classList.remove("active");
      });
    };
  
    const handleChange = (e) => {
      setCustomPercentage(e.target.value);
    };
  
    const handleButtonClick = (percentage) => {
      handleTipSelect(percentage);
      setCustomPercentage("");
    };
  
    return (
      <>
        <h2>Select Tip %</h2>
        <ul>
          {percentages.map((percentage, index) => (
            <li key={index} id={`percentage-${percentage}`}>
              <button
                type="button"
                className={`percentage-button ${activeButton === percentage ? "active" : ""}`}
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
              onClick={(e) => e.stopPropagation()}
              onBlur={handleCustomTip}
            />
          </li>
        </ul>
      </>
    );
  };