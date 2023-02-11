import { useState } from "react";

const Table = (props) => {
  const { minium, records, disabled, addToPayments } = props;
  const buttonsGroup = [
    { key: 1, text: "Enter Payment", val: "pay" },
    { key: 2, text: "Use Minium Payment", val: "min" },
  ];
  const [payment, setPayment] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    let paid = 0;
    e.target.value === "min" 
      ? paid = minium
      : paid = payment;
    addToPayments(paid);
    setPayment(0);
  };

  return (
    <div className="Table-container">
      <div className="table-header">
        <h2>Make Payments</h2>
        <p className="minium-text">Minium Required: ${minium}</p>
      </div>

      <form className="pay-form">
        <label htmlFor="payInput" id="payLabel">
          $
        </label>
        <input
          name="pay-amount"
          type="number"
          id="payInput"
          placeholder="0"
          value={payment === 0 ? "" : payment}
          min={minium}
          onChange={(e) => setPayment(Number(e.target.value))}
        />

        <div className="btn-group">
          {buttonsGroup.map((btn) => {
            const { key, text, val } = btn;
            return (
              <button
                key={key}
                className="Submit-btn"
                value={val}
                onClick={submit}
                disabled={disabled}
              >
                {text}
              </button>
            );
          })}
        </div>
      </form>

      <table className="payment-history">
          <thead>
            <tr>
              {["No", "Amount", "Balance"].map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => {
              const { rowKey, payNo, amountPaid, balance } = record;
              return (
                <tr key={rowKey}>
                  <td key={payNo}>{payNo}</td>
                  <td key={`${rowKey}-amount`}>$ {amountPaid}</td>
                  <td key={`${rowKey}-balance`}>$ {balance}</td>
                </tr>
              )
            })}
          </tbody>
        
        
      </table>
    </div>
  );
};

export default Table;
