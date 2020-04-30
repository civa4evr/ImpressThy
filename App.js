import React, { Component } from 'react';
import Add from './AddIncome';
import Exp from './AddExpense';


class App extends Component {
  constructor() {
    super();
    this.state={
      dispAddInc: false,
      dispAddExp: false,
      renderArrayExp: [...JSON.parse(localStorage.getItem('expStore'))],
      renderArrayExp2: [...JSON.parse(localStorage.getItem('exp2Store'))],
      renderArrayInc: [...JSON.parse(localStorage.getItem('incStore'))],
    }
    this.showSelected = this.showSelected.bind(this);

  }
  componentDidMount() {
    const storeGetExp = localStorage.getItem('expStore');
//  const storeGetExp2 = localStorage.getItem('exp2Store');

    const storeGetInc = localStorage.getItem('incStore');

    const resultParsedExp = JSON.parse(storeGetExp);
    const resultParsedInc = JSON.parse(storeGetInc);

    if (resultParsedExp) {
      alert('mounted');
      alert ("Expenses: " + resultParsedExp.map((note,index)=>note));
      alert ("Incomes: " + resultParsedInc.map((note,index)=>note));

    }    
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
      break;
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

    <h1 id="data">

  {this.state.renderArrayExp.map((data,index) => <div> {data}  {this.state.renderArrayExp2[index]} </div>)}
      
 




    
    </h1>

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
