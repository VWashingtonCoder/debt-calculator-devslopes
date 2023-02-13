import "./App.css";
import "./styles/CompStyles.css";
import "./styles/ResponsiveStyles.css"
import DebtCalcApp from "./DebtCalcApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Debt Payoff Calculator</h1>
      </header>
      <DebtCalcApp />
    </div>
  );
}

export default App;
