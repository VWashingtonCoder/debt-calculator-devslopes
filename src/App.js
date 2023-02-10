import { useState } from "react";
import "./App.css";
import "./styles/CompStyles.css";
import "./styles/ResponsiveStyles.css"
import Calculator from "./Calculator";



function App() {
  /*
  const [infoForm, setInfoForm] = useState(initialStates.infoForm);
  const [display, setDisplay] = useState(initialStates.display);
  const [table, setTable] = useState(initialStates.table);
  
  const { totalDebt, interestRate } = infoForm;
  const { monthlyPayment, paymentsLeft, originalDebt } = display;
  const { balance, rate, miniumPayment, payment, payments } = table;
  
  function updateInfoForm(e) {
    const value = e.target.value;
    const inputName = e.target.name;
    inputName === "total-debt"
      ? setInfoForm({ ...infoForm, totalDebt: value })
      : setInfoForm({ ...infoForm, interestRate: value });
  }
  function updateDisplay(e) {
    e.preventDefault();
    const miniumMonthly = getMiniumPayment(totalDebt, interestRate);

    setDisplay({
      ...display,
      monthlyPayment: miniumMonthly.toFixed(2),
      paymentsLeft: getPaymentsLeft(totalDebt),
      originalDebt: totalDebt,
    });
    setTable({
      ...table,
      balance: totalDebt,
      rate: interestRate,
      miniumPayment: miniumMonthly.toFixed(2),
    });
    setInfoForm(initialStates.infoForm);
  }
  
  function updatePayment(e) {
    setTable({
      ...table,
      payment: e.target.value,
    });
  }
  function addToPayments(e) {
    e.preventDefault();
    const btnClass = e.target.className;
    const paymentNo = payments.length + 1;
    let paymentMethod = 0;

    if (!btnClass.includes("min") && payment < miniumPayment) {
      alert(`Minium Payment is ${miniumPayment}`);
      return;
    }

    btnClass.includes("min")
      ? (paymentMethod = miniumPayment)
      : (paymentMethod = payment);

    const newBalance = Number(updateBalance(paymentMethod)).toFixed(2);

    setTable({
      ...table,
      balance: Number(newBalance).toFixed(2),
      miniumPayment:
        newBalance <= 0 ? 0 : getMiniumPayment(newBalance, rate).toFixed(2),
      payment: "",
      payments: [
        ...payments,
        {
          rowKey: `row-${paymentNo}`,
          payNo: paymentNo,
          amountPaid: paymentMethod,
          balance: newBalance <= 0 ? 0 : newBalance,
        },
      ],
    });
  }

  */
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Debt Payoff Calculator</h1>
      </header>
      
      <Calculator />
      
      {/* 
      <div className="info-view">
        <InfoForm
          total={totalDebt}
          rate={interestRate}
          updateForm={updateInfoForm}
          updateDisplay={updateDisplay}
        />
        <Display
          estPayment={monthlyPayment}
          numLeft={paymentsLeft}
          original={originalDebt}
        />
      </div>
      
      <Table
        payment={payment}
        records={payments}
        minium={miniumPayment}
        updatePayment={updatePayment}
        addToPayments={addToPayments}
      />
      */}
    </div>
  );
}

export default App;
