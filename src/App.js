import { useState } from "react";
import "./App.css";
import InfoForm from "./components/InfoForm.jsx";
import Table from "./components/Table";

const initialStates = {
  infoForm: {
    totalDebt: '',
    interestRate: '',
  }
}


function App() {
  /* State */
  // InfoForm
  const [infoForm, setInfoForm] = useState(initialStates.infoForm)
  // Display
  const [display, setDisplay] = useState({
    monthlyPayment: 0,
    paymentsLeft: 0,
    monthlyPrincipal: 0,
    monthlyInterest: 0,
    originalDebt: 0,
  });
  // Table
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

  /* Handlers */
  // InfoForm
  function updateInfoForm(e) {
    const value = e.target.value;
    const inputName = e.target.name;
    inputName === 'total-debt'
      ? setInfoForm({ ...infoForm, totalDebt: value })
      : setInfoForm({ ...infoForm, interestRate: value });
  }
  function resetInfoForm() {
    setInfoForm(initialStates.infoForm);
  }
  /* Display */
  function updateDisplay(e) {
    e.preventDefault();
    console.log("success")
  }
  /* Table */
  function updatePayment(e) {
    setPayment(e.target.value);
  }
  function addToPayments(e) {
    e.preventDefault();
    const paymentNo = payments.length + 1;
    // if(payments >= miniumPrincipal)
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

      <InfoForm
        updateForm={updateInfoForm}
        updateDisplay={updateDisplay} 
      />

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
