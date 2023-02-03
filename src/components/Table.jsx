import "../styles/TableStyles.css";

function Table(props) {
  const { records, miniumPayment, updatePayment, addToPayments } = props;

  return (
    <div className="Table-container">
      <div className="table-header">
        <h2>Make Payments</h2>
        <p>Minium Payment Required:</p>
        <p>$ {miniumPayment}</p>
      </div>

      <form className="pay-form">
        <label htmlFor="pay-amount" id="payLabel">
          Amount
        </label>
        <input
          name="pay-amount"
          type="number"
          id="payInput"
          min={miniumPayment}
          onChange={updatePayment}
        />

        <button className="Submit-btn pay" onClick={addToPayments}>
          Enter Payment
        </button>
      </form>

      <table className="payment-history">
        <tr>
          <th>Pay No</th>
          <th>Payment Amount</th>
          <th>Debt Balance</th>
          <th>Principal Paid</th>
          <th>Interest Paid</th>
        </tr>
        {records.map((record) => (
          <tr key={record.rowKey}>
            <td key={record.payNo}>
                {record.payNo}
            </td>
            <td key={record.amountPaid}>
                {record.amountPaid}
            </td>
            <td key={record.balance}>
                {record.balance}
            </td>
            <td key={record.principalPaid}>
                {record.principalPaid}
            </td>
            <td key={record.interestPaid}>
                {record.interestPaid}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
