import { useState } from "react";
import InfoForm from "./components/InfoForm/InfoForm.jsx";
import Display from "./components/Display/Display";
import Table from "./components/Table/Table";

const initialStates = {
  infoForm: {
    totalDebt: 0,
    interestRate: 0,
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

const Calculator = () => {
  /* State */
  const [disabled, setDisabled] = useState(true);
  const [infoForm, setInfoForm] = useState(initialStates.infoForm);
  /* State Destructuring */
  const { totalDebt, interestRate } = infoForm;


  return(
    <div id="CalculatorApp">
        <InfoForm
          total={totalDebt}
          rate={interestRate}
        //   updateForm={updateInfoForm}
        //   updateDisplay={updateDisplay}
        />

    </div>
  )
}

export default Calculator;