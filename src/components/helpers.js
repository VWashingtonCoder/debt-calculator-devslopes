function getInterestAmount(total, rate) {
    const interestDecimal = rate * 0.01;
    const interestAmount = Number(((interestDecimal / 12) * total).toFixed(2));
    return interestAmount;
}

export function getMiniumPayment(balance, rate) {
    let minPay = 0;
    const interest = getInterestAmount(balance, rate);
    const principal = balance * 0.01
    balance <= 100
      ? minPay = balance + principal
      : minPay = interest + principal;
    return minPay;
}

export function getPaymentsLeft(principal, rate, minPay) {
    const interestTotal = getInterestAmount(principal, rate);
    const totalDebt = Number((principal + interestTotal).toFixed(2));
    const paymentNum = Math.ceil(totalDebt / minPay);
    return paymentNum;
}


//   function updateBalance(paid) {
//     const interestAmount = getInterestAmount(rate, balance);
//     const principalPayment = paid - interestAmount;
//     const newBalance = (balance - principalPayment).toFixed(2);
//     return newBalance;
//   }