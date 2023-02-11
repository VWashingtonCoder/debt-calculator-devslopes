

function Display(props) {
    const { estPayment, numLeft, original } = props;
    
    const textContainers = [
      {key: 1, title: "Est. Monthly Payment", num: `$ ${estPayment}`},
      {key: 2, title: "Number Of Payments", num: numLeft},
      {key: 3, title: "Original Debt Amount", num: `$ ${original}`}
    ]

    return (
        <div className="Display-container">
          <h2>Debt Payoff Plan</h2>

          {textContainers.map((text) => {
            const { key, title, num } = text;

            return(
              <div className="text-container" key={key}>
                <p className="display-title">{title}</p>
                <p className="display-num">{num}</p>
              </div>      
            )
          })}
      </div>
    );
}

export default Display;