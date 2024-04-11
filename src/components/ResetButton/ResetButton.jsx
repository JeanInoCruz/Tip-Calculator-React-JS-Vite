
export const ResetButton = ({ handleReset }) => {
    return (
        <>
      <button type="button" id="reset-button" className="reset-button" onClick={handleReset}>
        RESET
      </button>
      </>
    );
  }