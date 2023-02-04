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
    payments: [],
  },
};

function App() {
  /* State */
  const [infoForm, setInfoForm] = useState(initialStates.infoForm);
  const [display, setDisplay] = useState(initialStates.display);
  const [table, setTable] = useState(initialStates.table);
  /* State Destructuring */
  const { totalDebt, interestRate } = infoForm;
  const { monthlyPayment, paymentsLeft, originalDebt } = display;
  const { balance, rate, miniumPayment, payment, payments } = table;
  /* Helpers */
  function getInterestAmount(rate, total) {
    const totalNum = Number(total);
    const interestDecimal = rate * 0.01;
    const interestAmount = ((interestDecimal / 12) * totalNum).toFixed(2);
    return interestAmount;
  }
  function getMiniumPayment(balance, rate) {
    let minPay = 0;
    const interest = Number(getInterestAmount(rate, balance));
    const principal = balance * 0.01;

    balance <= 100
      ? (minPay = Number(balance) + principal)
      : (minPay = interest + principal);

    console.log(minPay);
    return minPay;
  }
  function getPaymentsLeft(balance) {
    const principalAmount = balance * 0.01;
    console.log(balance);
    console.log(principalAmount);
    const numPayments =
      balance <= 100 ? 1 : Math.round(balance / principalAmount);

    console.log(numPayments);
    return numPayments;
  }
  function updateBalance(paid) {
    const interestAmount = getInterestAmount(rate, balance);
    const principalPayment = paid - interestAmount;
    const newBalance = (balance - principalPayment).toFixed(2);
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
  /* Table */
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
