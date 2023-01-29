import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import Display from "./components/Display";

const infoFormData = {
  totalDebt: "",
  interestRate: "",
  years: "",
  months: "",
};

function App() {
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

    if (!totalDebt) {
      alert("You are missing the total debt");
      valid = false;
    } else if (!interestRate) {
      alert("You are missing the interest rate");
      valid = false;
    } else if (!years && !months) {
      alert("Pick a term length");
      valid = false;
    }

    return valid;
  }

  function handleInfoSubmit(evt) {
    evt.preventDefault();
    const valid = validateForm();
    if (valid) {
      console.log("success!");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Debt Payoff Calculator</h1>
      </header>
      <Form 
        infoValues={infoFormValues}
        updateTotal={updateTotalDebt}
        updateRate={updateInterestRate}
        updateYears={updateTermYears}
        updateMonths={updateTermMonths}
        infoSubmit={handleInfoSubmit}
      />
      <Display />
    </div>
  );
}

export default App;
