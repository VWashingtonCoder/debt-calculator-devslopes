import { useState } from "react";
import InfoForm from "./components/InfoForm/InfoForm.jsx";
import Display from "./components/Display/Display";
import Table from "./components/Table/Table";
import { getMiniumPayment, getPaymentsLeft, getNewBalance } from "./components/helpers.js";


const DebtCalcApp = () => {
    const [estPayment, setEstPayment] = useState(0);
    const [paymentsLeft, setPaymentsLeft] = useState(0);
    const [originalDebt, setOriginalDebt] = useState(0);
    const [balance, setBalance] = useState(0);
    const [rate, setRate] = useState(0);
    const [payments, setPayments] = useState([]);
    const [disabled, setDisabled] = useState(true);


    const updateDisplay = (total, rate) => {
        const minPay = Number((getMiniumPayment(total, rate).toFixed(2)));
        const numOfPays = getPaymentsLeft(total, rate, minPay);
        setEstPayment(minPay);
        setPaymentsLeft(numOfPays);
        setOriginalDebt(total);
        setBalance(total);
        setRate(rate);
        setDisabled(!disabled);
    }

    const addToPayments = (payment) => {
      if(payment < estPayment){
        console.alert(`You must pay at least $${estPayment}`);
        return;
      }
      
      const payNum = payments.length + 1;
      const rowKey = `Row-${payNum}`
      const newBalance = Number((getNewBalance(payment, balance, rate)).toFixed(2));
      const payRecord = {
        rowKey: rowKey,
        payNo: payNum,
        amountPaid: payment,
        balance: newBalance
      }
      let newEst = 0;
      newBalance <= 100 
        ? newEst = newBalance + Number((newBalance * 0.01).toFixed(2))
        : newEst = Number((getMiniumPayment(newBalance, rate).toFixed(2)))

      setEstPayment(newEst);
      setBalance(newBalance);
      setPayments([...payments, payRecord]);
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
            disabled={disabled}
            addToPayments={addToPayments}
          />
        </div>
      );

}

export default DebtCalcApp;