import { useState } from "react";



const InfoForm = (props) => {
  const { updateDisplay } = props;
  const [totalDebt, setTotalDebt] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const inputContainers = [
    { key: 1, label: "Total Debt Amount", id: "totalDebt", name: "total-debt", val: totalDebt },
    {
      key: 2,
      label: "Estimated Interest Rate",
      id: "interestRate",
      name: "interest-rate",
      val: interestRate
    },
  ];
  
  const updateForm = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    inputName === "total-debt" 
      ? setTotalDebt(Number(value)) 
      : setInterestRate(Number(value));
  } 
  
  const submit = (e) => {
    e.preventDefault();
    updateDisplay(totalDebt, interestRate);
    setTotalDebt(0);
    setInterestRate(0);
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
        <div className="Form-body">
          {inputContainers.map((input) => {
            const { key, label, id, name, val } = input;

            return (
              <div className="Form-input-container" key={key}>
                <p>{label}</p>
                {key === 1 && (
                  <label htmlFor={id} id="tdLabel">
                    $
                  </label>
                )}
                <input
                  type="number"
                  id={id}
                  name={name}
                  placeholder="0"
                  value={val === 0 ? "" : val}
                  onChange={updateForm}
                />
                {key === 2 && (
                  <label htmlFor={id} id="irLabel">
                    $
                  </label>
                )}
              </div>
            );
          })}
          <button className="Submit-btn Info-form-btn" onClick={submit}>
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
}

export default InfoForm;
