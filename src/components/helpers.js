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

//   function getPaymentsLeft(balance) {
//     const principalAmount = balance * 0.01;
//     const numPayments =
//       balance <= 100 ? 1 : Math.round(balance / principalAmount);
//     return numPayments;
//   }
//   function updateBalance(paid) {
//     const interestAmount = getInterestAmount(rate, balance);
//     const principalPayment = paid - interestAmount;
//     const newBalance = (balance - principalPayment).toFixed(2);
//     return newBalance;
//   }