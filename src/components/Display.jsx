function Display(props) {
  const {
    originalDebt,
    monthlyPayment,
    numOfPayments,
    totalInterest,
    totalPrincipal,
    monthlyPrincipal,
    monthlyInterest,
    totalPayment,
  } = props.displayVals;

  return (
    <div className="Display-container">
      <h2>Display View</h2>
      <div className="main-display">
        <div className="text-container">
          <p className="display-title">Est. Monthly Payment</p>
          <p className="display-num">
            {!monthlyPayment ? "0" : monthlyPayment}
          </p>
        </div>
        <div className="text-container">
          <p className="display-title">Number Of Payments</p>
          <p className="display-num">{!numOfPayments ? "0" : numOfPayments}</p>
        </div>
        <div className="text-container">
          <p className="display-title">Total Interest Paid</p>
          <p className="display-num">{!totalInterest ? "0" : totalInterest}</p>
        </div>
        <div className="text-container">
          <p className="display-title">Total Principal Paid</p>
          <p className="display-num">
            {!totalPrincipal ? "0" : totalPrincipal}
          </p>
        </div>
        <button>See Amortization Schedule</button>
      </div>
      <div className="hidden-display">
        <div className="text-container">
          <p className="display-title">Monthly Principal Payment</p>
          <p className="display-num">
            {!monthlyPrincipal ? "0" : monthlyPrincipal}
          </p>
        </div>
        <div className="text-container">
          <p className="display-title">Monthly Interest Payment</p>
          <p className="display-num">
            {!monthlyInterest ? "0" : monthlyInterest}
          </p>
        </div>
        <div className="text-container">
          <p className="display-title">Total Payment (Principal + Interest)</p>
          <p className="display-num">
            {!totalPayment ? "0" : totalPayment}
          </p>
        </div>
        <div className="text-container">
          <p className="display-title">Original Debt Amount</p>
          <p className="display-num">
            {!originalDebt ? "0" : originalDebt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Display;
