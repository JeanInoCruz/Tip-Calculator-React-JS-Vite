
export const BillInput = ({ bill, setBill }) => {
    return (
        <>

        <h1>Bill</h1>
        <label htmlFor="input-bill">
          <input
            className="input-bill"
            id="input-bill"
            type="number"
            placeholder="0"
            min="0"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </label>

      </>
    );
  }