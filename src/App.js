import { useState } from "react";
import "./App.css";
import "./styles/CompStyles.css";
import "./styles/ResponsiveStyles.css"
import InfoForm from "./components/InfoForm/InfoForm.jsx";
import Display from "./components/Display";
import Table from "./components/Table";

const initialStates = {
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
  const [estPayment, setEstPayment] = useState(0);

  const [display, setDisplay] = useState(initialStates.display);
  const [table, setTable] = useState(initialStates.table);
  /* State Destructuring */
  const { monthlyPayment, paymentsLeft, originalDebt } = display;
  const { balance, rate, miniumPayment, payment, payments } = table;
  /* Handlers */
  function updateDisplay(total, rate) {
    console.log(`total: ${total}, type: ${typeof total}`);
    console.log(`rate: ${rate}, type: ${typeof rate}`);
    /*
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
    */
  }
  
  /* 
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
      <div className="info-view">
        <InfoForm updateDisplay={updateDisplay} />
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
        // updatePayment={updatePayment}
        // addToPayments={addToPayments}
      />
    </div>
  );
}

export default App;
