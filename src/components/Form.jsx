import Display from "./Display";
import Table from "./Table";
import "../styles/FormStyles.css";
import { useState } from "react";

const infoFormData = {
    totalDebt: '',
    interestRate: '',
    years: '',
    months: ''
}

function Form() {
    const [infoFormValues, setInfoFormValues] = useState(infoFormData);

    function updateTotalDebt(evt) {
        const inputVal = evt.target.value;
        setInfoFormValues({ ...infoFormValues, totalDebt: inputVal });
    } 

    function updateInterestRate(evt) {
        const inputVal = evt.target.value;
        setInfoFormValues({ ...infoFormValues, interestRate: inputVal });
    } 

    function updateTermYears(evt) {
        const inputVal = evt.target.value;
        setInfoFormValues({ ...infoFormValues, years: inputVal });
    } 

    function updateTermMonths(evt) {
        const inputVal = evt.target.value;
        console.log(inputVal);
        setInfoFormValues({ ...infoFormValues, months: inputVal });
    }

    function validateForm() {
        const { totalDebt, interestRate, years, months } = infoFormValues;
        let valid = true;

        if (!totalDebt){
            alert('You are missing the total debt');
            valid = false;
        } else if (!interestRate) {
            alert('You are missing the interest rate');
            valid = false;
        } else if(!years && !months) {
            alert('Pick a term length');
            valid = false;
        }

        return valid;
    }

    function handleInfoSubmit(evt) {
        evt.preventDefault();
        const valid = validateForm();
        if (valid) {
            console.log('success!')
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
          <label htmlFor="total-debt" id="totalDebtLabel">$</label>
          <input 
            type="number" 
            id="totalDebt" 
            name="total-debt" 
            onChange={updateTotalDebt}
            value={infoFormValues.totalDebt} 
         />
        </div>

        <div className="Form-input-container">
          <p>Estimated Interest Rate</p>
          <input 
            type="number" 
            id="interestRate" 
            name="interest-rate" 
            onChange={updateInterestRate} 
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
                onChange={updateTermYears} 
            />
            <label htmlFor="term-years" id="termYearsLabel">Years</label>
          </div>
          <p id="termComparison">OR</p>
          <div>
            <input 
                type="number" 
                id="termMonths" 
                name="term-months"
                onChange={updateTermMonths} 
            />
            <label htmlFor="term-months" id="termMonthsLabel">Months</label>
          </div>
        </div>
        
        <button className="Submit-btn Info-form-btn" onClick={handleInfoSubmit}>Calculate</button>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Display />
      <Table />
    </div>
  );
}

export default Form;
