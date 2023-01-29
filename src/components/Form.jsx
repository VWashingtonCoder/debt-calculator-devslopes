import Display from "./Display";
import Table from "./Table";

function Form() {
    return (
        <div className="Form-container">
            <header className="Form-header">
                <p>
                    Determine your estimated payments for different debt amounts, interest rates & terms. 
                    <br /><br />
                    Start with your details.  
                </p>
            </header>
            <form className="Info-form">
                <div>
                    <p>Total Debt Amount</p>
                    <label htmlFor="total-debt">$</label>
                    <input type="text" id="totalDebt" name="total-debt" required/>
                </div>
                <div>
                    <p>Estimated Interest Rate</p>
                    <input type="text" id="interestRate" name="interest-rate" />
                    <label htmlFor="interest-rate" required>%</label>
                </div>
                <div>
                    <p>Debt Payoff Term</p>
                    <div>
                        <input type="number" id="termYears" name="term-years" />
                        <label htmlFor="term-years">Years</label>
                    </div>
                    <p>OR</p>
                    <div>
                        <input type="number" id="termMonths" name="term-months" />
                        <label htmlFor="term-months">Months</label>
                    </div>
                </div>
                <button className="Info-submit-btn">Calculate</button>
            </form>
            <Display />
            <Table />
        </div>
    )
}

export default Form;