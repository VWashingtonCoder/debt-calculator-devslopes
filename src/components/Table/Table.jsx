import { useState } from "react";

const Table = (props) => {
  const { minium, records, addToPayments } = props;
  const buttonsGroup = [
    { key: 1, text: "Enter Payment", val: "pay" },
    { key: 2, text: "Use Minium Payment", val: "min" },
  ];
  const [payment, setPayment] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    addToPayments(payment);
    setPayment(0);
  };

  return (
    <div className="Table-container">
      <div className="table-header">
        <h2>Make Payments</h2>
        <p className="minium-text">Minium Payment Required: ${minium}</p>
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
              >
                {text}
              </button>
            );
          })}
        </div>
      </form>

      <table className="payment-history">
        <tr>
          {["No", "Amount", "Balance"].map((header) => (
            <th>{header}</th>
          ))}
        </tr>
        {records.map((record) => (
          <tr key={record.rowKey}>
            <td key={record.payNo}>{record.payNo}</td>
            <td key={record.amountPaid}>$ {record.amountPaid}</td>
            <td key={record.balance}>$ {record.balance}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
