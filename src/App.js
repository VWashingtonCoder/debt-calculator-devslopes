import { useState } from "react";
import "./App.css";
import InfoForm from "./components/InfoForm.jsx";
import Display from "./components/Display";
import Table from "./components/Table";

const initialStates = {
  infoForm: {
    totalDebt: "",
    interestRate: "",
  },
  display: {
    monthlyPayment: 0,
    paymentsLeft: 0,
    originalDebt: 0,
  },
  table: {
    balance: 0,
    rate: 0,
    miniumPayment: 0,
    payment: 0,
    payments: []
  }
};

function App() {
  /* State */
  const [infoForm, setInfoForm] = useState(initialStates.infoForm);
  const [display, setDisplay] = useState(initialStates.display);
  const [table, setTable] = useState(initialStates.table);
  /* State Destructuring */
  const { totalDebt, interestRate } = infoForm;
  const { monthlyPayment, paymentsLeft, originalDebt } = display;
  const { balance, rate, miniumPayment, payment, payments } = table
  /* Helpers */
  function getInterestAmount(rate, total){
    const totalNum = Number(total);
    const interestDecimal = rate * 0.01;
    const interestAmount = ((interestDecimal / 12) * totalNum).toFixed(2);
    return interestAmount;
  }
  function getMonthlyPayment() {
    const interestAmount = getInterestAmount(interestRate, totalDebt);
    const principalAmount = (totalDebt * 0.01).toFixed(2);
    const estMonthly = (
      Number(interestAmount) + Number(principalAmount)
    ).toFixed(2);

    return estMonthly;
  }
  function getPaymentsLeft() {
    const estPayment = Number(getMonthlyPayment());
    const numPayments = Math.round(Number(totalDebt) / estPayment)
    return numPayments;
  }
  function updateBalance(paid){
    const interestAmount = getInterestAmount(rate, balance);
    const principalPayment = paid - interestAmount;
    const newBalance = balance - principalPayment;
    return newBalance;
  }
  /* Handlers */
  function updateInfoForm(e) {
    const value = e.target.value;
    const inputName = e.target.name;
    inputName === "total-debt"
      ? setInfoForm({ ...infoForm, totalDebt: value })
      : setInfoForm({ ...infoForm, interestRate: value });
  }
  function updateDisplay(e) {
    e.preventDefault();
    setDisplay({
      ...display,
      monthlyPayment: getMonthlyPayment(),
      paymentsLeft: getPaymentsLeft(),
      originalDebt: totalDebt,
    });
    setTable({
      ...table,
      balance: totalDebt,
      rate: interestRate,
      miniumPayment: getMonthlyPayment()
    })
    setInfoForm(initialStates.infoForm);
  }
  /* Table */
  function updatePayment(e) {
    setTable({
      ...table,
      payment: e.target.value
    });
  }
  function addToPayments(e) {
    e.preventDefault();
    const btnClass = e.target.className;
    const paymentNo = payments.length + 1;
    let paymentMethod = 0;

    if(!btnClass.includes('min') && payment < miniumPayment){
      alert(`Minium Payment is ${miniumPayment}`)
      return;
    } 

    btnClass.includes('min') 
      ? paymentMethod = miniumPayment
      : paymentMethod = payment

    setTable({
      ...table,
      balance: updateBalance(paymentMethod),
      payment: 0,
      payments: [
        ...payments, 
        {
          rowKey: `row-${paymentNo}`,
          payNo: paymentNo,
          amountPaid: paymentMethod,
          balance: updateBalance(paymentMethod),
        }
      ]
    })
  }
  function payMinium() {


    updateBalance(miniumPayment)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Debt Payoff Calculator</h1>
      </header>

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
      <Table
        payment={payment}
        records={payments}
        minium={miniumPayment}
        updatePayment={updatePayment}
        addToPayments={addToPayments}
      />
    </div>
  );
}

export default App;
