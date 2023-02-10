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
