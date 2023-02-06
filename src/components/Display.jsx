function Display(props) {
    const { estPayment, numLeft, original } = props;
    
    return (
        <div className="Display-container">
        <h2>Debt Payoff Plan</h2>
        <div className="text-container">
          <p className="display-title">Est. Monthly Payment</p>
          <p className="display-num">$ {estPayment}</p>
        </div>
        <div className="text-container">
          <p className="display-title">Number Of Payments</p>
          <p className="display-num">{numLeft}</p>
        </div>
        <div className="text-container">
          <p className="display-title">Original Debt Amount</p>
          <p className="display-num">$ {original}</p>
        </div>
      </div>
    );
}

export default Display;