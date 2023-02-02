import { useState } from "react";
import "../styles/FormStyles.css";

function InfoForm(props) {
  const { update } = props
  const [infoForm, setInfoForm] = useState({
    totalDebt: '',
    interestRate: '',
    years: '',
    months: ''
  })
  const { totalDebt, interestRate, years, months } = infoForm;
  /* Handlers */
  function updateTotalDebt(evt) {
    const inputVal = evt.target.value;
    setInfoForm({ ...infoForm, totalDebt: inputVal });
  }
  function updateInterestRate(evt) {
    const inputVal = evt.target.value;
    setInfoForm({ ...infoForm, interestRate: inputVal });
  }
  function updateTermYears(evt) {
    const inputVal = evt.target.value;
    setInfoForm({ ...infoForm, years: inputVal });
  }
  function updateTermMonths(evt) {
    const inputVal = evt.target.value;
    setInfoForm({ ...infoForm, months: inputVal });
  }
  function validateForm() {
    let valid = true;
    
    if (!totalDebt) {
      alert("You are missing the total debt");
      valid = false;
    } else if (!interestRate) {
      alert("You are missing the interest rate");
      valid = false;
    } else if (!years && !months) {
      alert("Pick a term length");
      valid = false;
    } else if(years && months){
      alert("Pick only month(s) or year(s) term");
      valid = false;
    }
    return valid;
  }
  function handleInfoSubmit(evt) {
    evt.preventDefault();
    const valid = validateForm();
    
    if (valid) {
      const data = {...infoForm};
      update(data);
    }
  }

 
 
 
 
 
  return (
    <div className="Form-container">
      <form className="Info-form">
        <header className="Form-header">
          <p>
            Determine your estimated payments for different debt amounts,
            interest rates & terms.
            <br />
            <br />
            Start with your details.
          </p>
        </header>

        <div className="Form-input-container">
          <p>Total Debt Amount</p>
          <label htmlFor="total-debt" id="totalDebtLabel">
            $
          </label>
          <input
            type="number"
            id="totalDebt"
            name="total-debt"
            onChange={updateTotalDebt}
            value={totalDebt}
            placeholder="0"
          />
        </div>

        <div className="Form-input-container">
          <p>Estimated Interest Rate</p>
          <input
            type="number"
            id="interestRate"
            name="interest-rate"
            placeholder="0"
            onChange={updateInterestRate}
            value={interestRate}
          />
          <label htmlFor="interest-rate" id="interestRateLabel">
            %
          </label>
        </div>

        <div className="Form-input-container">
          <p>Debt Payoff Term</p>
          <div>
            <input
              type="number"
              id="termYears"
              name="term-years"
              placeholder="0"
              onChange={updateTermYears}
              value={years}
            />
            <label htmlFor="term-years" id="termYearsLabel">
              Years
            </label>
          </div>
          <p id="termComparison">OR</p>
          <div>
            <input
              type="number"
              id="termMonths"
              name="term-months"
              placeholder="0"
              onChange={updateTermMonths}
              value={months}
            />
            <label htmlFor="term-months" id="termMonthsLabel">
              Months
            </label>
          </div>
        </div>

        <button className="Submit-btn Info-form-btn" onClick={handleInfoSubmit}>
          Calculate
        </button>
      </form>
    </div>
  );
}

export default InfoForm;
