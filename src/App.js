import "./App.css";
import "./styles/CompStyles.css";
import "./styles/ResponsiveStyles.css"
import DebtCalcApp from "./DebtCalcApp";

const initialStates = {
  table: {
    balance: 0,
    rate: 0,
    miniumPayment: 0,
    payment: 0,
    payments: [],
  },
};

function App() {
  /*
  const [table, setTable] = useState(initialStates.table);

  const { balance, rate, miniumPayment, payment, payments } = table;
  */
  // function updateDisplay(total, rate) {
    
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
  // }
  
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
   
      <DebtCalcApp />
    </div>
  );
}

export default App;
