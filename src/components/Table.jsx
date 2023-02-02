function Table(props) {
    console.log(props);
    const { miniumPayment } = props;
    return (
        <div className="Table">
            <h2>Table View</h2>

            <form className="pay-form">
                <p>Enter Your Payment Amount</p>
                <div>
                    <label  
                        htmlFor="pay-amount"
                        id="payLabel"
                    ></label>
                    <input 
                        name="pay-amount" type="number" id="payInput"
                        min={miniumPayment}
                    />
                </div>
                <p>Minium Payment Required: $ {miniumPayment}</p>
                <button className="Submit-btn pay">Enter Payment</button>
            </form>

            <table className="payment-history">
                <tr>
                    <th>No.</th>
                    <th>Payment Amount</th>
                    <th>Interest/ Principal Paid</th>
                    <th>Debt Balance</th>
                </tr>
            </table>
        </div>
    )
}

export default Table;
