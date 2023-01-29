import "../styles/FormStyles.css";

function Form(props) {
  console.log(props);
  const { updateTotal, updateRate, updateYears, updateMonths, infoSubmit } =
    props;
  const { totalDebt, interestRate, years, months } = props.infoValues;

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
            onChange={updateTotal}
            value={totalDebt}
          />
        </div>

        <div className="Form-input-container">
          <p>Estimated Interest Rate</p>
          <input
            type="number"
            id="interestRate"
            name="interest-rate"
            onChange={updateRate}
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
              onChange={updateYears}
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
              onChange={updateMonths}
              value={months}
            />
            <label htmlFor="term-months" id="termMonthsLabel">
              Months
            </label>
          </div>
        </div>

        <button className="Submit-btn Info-form-btn" onClick={infoSubmit}>
          Calculate
        </button>
      </form>
    </div>
  );
}

export default Form;
