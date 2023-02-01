import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";

function App() {
  const [display, setDisplay] = useState({
    monthlyPayment: 0,
    paymentsLeft: 0,
    totalInterest: 0,
    totalPrincipal: 0,
    monthlyPrincipal: 0,
    monthlyInterest: 0,
    totalPayment: 0,
    originalDebt: 0,
  })
  const {
    monthlyPayment,
    paymentsLeft,
    totalInterest,
    totalPrincipal,
    monthlyPrincipal, 
    monthlyInterest, 
    totalPayment, 
    originalDebt 
  } = display;
  /* Handlers */
  function updateDisplay(data){
    const { totalDebt, interestRate, years, months } = data;
    
    console.log(totalDebt);

    setDisplay({...display, originalDebt: totalDebt})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Debt Payoff Calculator</h1>
      </header>
      
      <Form update = {updateDisplay} />
      
      <div className="Display-container">
        <h2>Display View</h2>
      
        <div className="main-display ">
          <div className="text-container">
            <p className="display-title">Est. Monthly Payment</p>
            <p className="display-num">$ 0</p>
          </div>
          <div className="text-container">
            <p className="display-title">Number Of Payments</p>
            <p className="display-num">0 Left</p>
          </div>
          <div className="text-container">
            <p className="display-title">Total Interest Paid</p>
            <p className="display-num">$ 0</p>
          </div>
          <div className="text-container">
            <p className="display-title">Total Principal Paid</p>
            <p className="display-num">$ 0</p>
          </div>
          <button>See Amortization Schedule</button>
        </div>
      
        <div className="hidden-display">
          <div className="text-container">
            <p className="display-title">Monthly Principal Payment</p>
            <p className="display-num">$ 0</p>
          </div>
          <div className="text-container">
            <p className="display-title">Monthly Interest Payment</p>
            <p className="display-num">$ 0</p>
          </div>
          <div className="text-container">
            <p className="display-title">Total Payment<br />(Principal + Interest)</p>
            <p className="display-num">$ 0</p>
          </div>
          <div className="text-container">
            <p className="display-title">Original Debt Amount</p>
            <p className="display-num">$ {originalDebt}</p>
          </div>
          <button>See Main Schedule</button>
        </div>
    </div>
    </div>
  );
}

export default App;
