import { useState } from "react";
import "./App.css";
import InfoForm from "./components/InfoForm.jsx";
import Table from "./components/Table";

function App() {
  /* State */
  const [display, setDisplay] = useState({
    monthlyPayment: 0,
    paymentsLeft: 0,
    monthlyPrincipal: 0,
    monthlyInterest: 0,
    originalDebt: 0,
  });
  const [payment, setPayment] = useState(0);
  const [payments, setPayments] = useState([]);
  /* State Destructuring */
 const {
    monthlyPayment,
    paymentsLeft,
    monthlyPrincipal,
    monthlyInterest,
    originalDebt,
  } = display;
 /* Helpers */
  /* Table */
  function getBalance(payment) {

  }


  /* Handlers */
  /* Display */
  function updateDisplay(data) {
    const { totalDebt, interestRate, years, months } = data;
    const term = years ? years * 12 : months;
    const interestDecimal = interestRate * 0.01;
    const monthlyInterest = ((interestDecimal / term) * totalDebt).toFixed(2);
    const miniumPrincipal = (totalDebt * 0.01).toFixed(2);
    const estMonthlyPayment = (
      Number(miniumPrincipal) + Number(monthlyInterest)
    ).toFixed(2);

    setDisplay({
      ...display,
      monthlyPayment: estMonthlyPayment,
      paymentsLeft: term,
      monthlyPrincipal: miniumPrincipal,
      monthlyInterest: monthlyInterest,
      originalDebt: totalDebt,
    });
  }
  /* Table */
  function updatePayment(e) {
    setPayment(e.target.value);
  }
  function addToPayments(e) {
    e.preventDefault();
    const paymentNo = payments.length + 1;
    if(payments >= miniumPrincipal)
    setPayments([
      ...payments,
      {
        rowKey: `row-${paymentNo}`,
        payNo: paymentNo,
        amountPaid: payment,
        balance: "Function Needed",
        principalPaid: "Function Needed",
        interestPaid: "Function Needed",
      },
    ]);

    console.log(payments);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Debt Payoff Calculator</h1>
      </header>

      <InfoForm update={updateDisplay} />

      <div className="Display-container">
        <h2>Debt Payoff Plan</h2>
        <div className="text-container">
          <p className="display-title">Est. Monthly Payment</p>
          <p className="display-num">$ {monthlyPayment}</p>
        </div>
        <div className="text-container">
          <p className="display-title">Original Debt Amount</p>
          <p className="display-num">$ {originalDebt}</p>
        </div>
        <div className="text-container">
          <p className="display-title">Number Of Payments</p>
          <p className="display-num">{paymentsLeft}</p>
        </div>
        <div className="text-container">
          <p className="display-title">Minium Principal Payment</p>
          <p className="display-num">$ {monthlyPrincipal}</p>
        </div>
        <div className="text-container">
          <p className="display-title">Monthly Interest Payment</p>
          <p className="display-num">$ {monthlyInterest}</p>
        </div>
      </div>

      <Table 
        records={payments}
        miniumPayment={monthlyPrincipal}
        updatePayment={updatePayment}
        addToPayments={addToPayments}
      />
    </div>
  );
}

export default App;
