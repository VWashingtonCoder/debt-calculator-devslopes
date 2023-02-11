import { useState } from "react";
import InfoForm from "./components/InfoForm/InfoForm.jsx";
import Display from "./components/Display/Display";
import Table from "./components/Table";
import { getMiniumPayment, getPaymentsLeft } from "./components/helpers.js";


const DebtCalcApp = () => {
    const [estPayment, setEstPayment] = useState(0);
    const [paymentsLeft, setPaymentsLeft] = useState(0);
    const [originalDebt, setOriginalDebt] = useState(0);

    const updateDisplay = (total, rate) => {
        const minPay = getMiniumPayment(total, rate);
        const numOfPays = getPaymentsLeft(total, rate, minPay);
        setEstPayment(minPay);
        setPaymentsLeft(numOfPays);
        setOriginalDebt(total);
    }

    return (
        <div className="Debt-Calc-App">
    
          <div className="info-view">
            <InfoForm updateDisplay={updateDisplay} />
             
            <Display
              estPayment={estPayment}
              numLeft={paymentsLeft}
              original={originalDebt}
            />*
          </div>
          {/* 
          <Table
            // payment={payment}
            // records={payments}
            // minium={miniumPayment}
            // updatePayment={updatePayment}
            // addToPayments={addToPayments}
          />
          */}
        </div>
      );

}

export default DebtCalcApp;