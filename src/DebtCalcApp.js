import { useState } from "react";
import InfoForm from "./components/InfoForm/InfoForm.jsx";
import Display from "./components/Display/Display";
import Table from "./components/Table/Table";
import { getMiniumPayment, getPaymentsLeft } from "./components/helpers.js";


const DebtCalcApp = () => {
    const [estPayment, setEstPayment] = useState(0);
    const [paymentsLeft, setPaymentsLeft] = useState(0);
    const [originalDebt, setOriginalDebt] = useState(0);
    const [rate, setRate] = useState(0);
    const [balance, setBalance] = useState(0);
    const [payments, setPayments] = useState([]);


    const updateDisplay = (total, rate) => {
        const minPay = getMiniumPayment(total, rate);
        const numOfPays = getPaymentsLeft(total, rate, minPay);
        setEstPayment(minPay);
        setPaymentsLeft(numOfPays);
        setOriginalDebt(total);
    }

    const addToPayments = (payment) => {
        console.log(payment)
    }

    return (
        <div className="Debt-Calc-App">
    
          <div className="info-view">
            <InfoForm updateDisplay={updateDisplay} />
             
            <Display
              estPayment={estPayment}
              numLeft={paymentsLeft}
              original={originalDebt}
            />
          </div>
          <Table
            minium={estPayment}
            records={payments}
            
            // updatePayment={updatePayment}
            addToPayments={addToPayments}
          />
        </div>
      );

}

export default DebtCalcApp;