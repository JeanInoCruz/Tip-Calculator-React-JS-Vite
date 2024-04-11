export const TipPercentageButtons = ({ percentages, handleTipSelect }) => {
  return (
    <>
      <h2>Select Tip %</h2>
      <ul>
        {percentages.map((percentage, index) => (
          <li key={index} id={`percentage-${percentage}`}>
            <button
              type="button"
              className="percentage-button"
              value={percentage}
              onClick={() => handleTipSelect(percentage)}
            >
              {percentage}%
            </button>
          </li>
        ))}

        <li htmlFor="custom-percentage-button">
          <input
            type="number"
            placeholder="Custom"
            id="custom-percentage-button"
            className="percentage-button"
          />
        </li>
      </ul>
    </>
  );
};
