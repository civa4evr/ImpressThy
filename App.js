import React, { Component } from 'react';
import Add from './AddIncome';
import Exp from './AddExpense';


class App extends Component {
  constructor() {
    super();
    this.state={
      dispAddInc: false,
      dispAddExp: false
    };
    this.showSelected = this.showSelected.bind(this);

  }
showSelected(opt) {
  switch(opt) {
    case "dispAddInc":
      this.setState({dispAddInc: !this.state.dispAddInc});
      break;
    case "dispAddExp":
      this.setState({dispAddExp: !this.state.dispAddExp});
      break;
    default:
      this.setState({dispAddExp: this.state.dispAddExp});
  }
}
render() {
  const {dispAddInc,dispAddExp} = this.state;
  return (
    <div className="Home">
      {dispAddInc && <Add />}
      <hr />
      {dispAddExp && <Exp />}
      <hr />

    <div className="Summary">
      <header className="App-header">
        <h1>Balance</h1>
        <h3>Amount Here</h3>
        <p>Income</p> <p>$ Income here</p> <p>Expense</p> <p>$ Expense Here</p>        
      </header>
    </div>

    <hr></hr>

    <p id="data">entries here</p>

    <hr></hr>

    <div className="Action">
      <button id="AddInc" onClick={() => this.showSelected("dispAddInc")}>Add Income</button>
      <button id="AddExp" onClick={() => this.showSelected("dispAddExp")}>Add Spending</button>
    </div>

    </div>  
  );
  }
}

export default App;
