import { useState } from "react";

const inputs = [
  { id: 1, title: "Total Debt Amount" }
]

const InfoForm = (props) => {
  const { total, rate } = props;
  
  return (
    <div className="Form-container">
      <form className="Info-form">
        <header className="Form-header">
          <p>
            Determine your estimated payments for different debt amounts,
            interest rates & terms.
            <br /><br />
            Start with your details.
          </p>
        </header>

        <div className="Form-body">
          { inputs.map((item) => {
            const { id, title } = item;

            return(
              <div className="Form-input-container" key={id}>
                <p>{title}</p>

              </div>
            )


          }) }
        
          <div >
            
            <label 
              htmlFor="totalDebt" 
              className="label totalDebt"            >
              $
            </label>
            <input
              type="number"
              id="totalDebt"
              name="total-debt"
              placeholder="0"
              // onChange={updateForm}
              value={total}
            />
          </div>

          <div className="Form-input-container">
            <p>Estimated Interest Rate</p>
            <input
              type="number"
              id="interestRate"
              name="interest-rate"
              placeholder="0"
              // onChange={updateForm}
              value={rate}
            />
            <label htmlFor="interest-rate" id="interestRateLabel">
              %
            </label>
          </div>
        </div>
        
        
        <button 
          className="Submit-btn Info-form-btn" 
          // onClick={updateDisplay}
        >
          Calculate
        </button>
      </form>
    </div>
  );
}

export default InfoForm;
