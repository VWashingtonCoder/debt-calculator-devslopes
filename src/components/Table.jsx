import "../styles/TableStyles.css";

function Table(props) {
  const { 
    payment,
    records, 
    minium, 
    updatePayment, 
    addToPayments 
  } = props;

  return (
    <div className="Table-container">
      <div className="table-header">
        <h2>Make Payments</h2>
        <p>Minium Payment Required:</p>
        <p>$ {minium}</p>
      </div>

      <form className="pay-form">
        <label htmlFor="pay-amount" id="payLabel">
          $
        </label>
        <input
          name="pay-amount"
          type="number"
          id="payInput"
          placeholder="0"
          min={minium}
          onChange={updatePayment}
          value={payment}
        />

        <div className="btn-group">
          <button className="Submit-btn pay" onClick={addToPayments}>
            Enter Payment
          </button>
          <button className="Submit-btn min" onClick={addToPayments}>
            Use Minium Payment
          </button>
        </div>
      </form>

      <table className="payment-history">
        <tr>
          <th>Pay No</th>
          <th>Payment Amount</th>
          <th>Debt Balance</th>
        </tr>
        {records.map((record) => (
          <tr key={record.rowKey}>
            <td key={record.payNo}>
                {record.payNo}
            </td>
            <td key={record.amountPaid}>
                $ {record.amountPaid}
            </td>
            <td key={record.balance}>
                $ {record.balance}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
