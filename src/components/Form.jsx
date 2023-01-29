import Display from "./Display";
import Table from "./Table";
import "../styles/FormStyles.css";

function Form() {
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
          <input type="text" id="totalDebt" name="total-debt" required />
        </div>

        <div className="Form-input-container">
          <p>Estimated Interest Rate</p>
          <input type="text" id="interestRate" name="interest-rate" required />
          <label htmlFor="interest-rate" id="interestRateLabel">
            %
          </label>
        </div>

        <div className="Form-input-container">
          <p>Debt Payoff Term</p>
          <div>
            <input type="number" id="termYears" name="term-years" />
            <label htmlFor="term-years" id="termYearsLabel">Years</label>
          </div>
          <p id="termComparison">OR</p>
          <div>
            <input type="number" id="termMonths" name="term-months" />
            <label htmlFor="term-months" id="termMonthsLabel">Months</label>
          </div>
        </div>
        
        <button className="Submit-btn Info-form-btn">Calculate</button>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Display />
      <Table />
    </div>
  );
}

export default Form;
