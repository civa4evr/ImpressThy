import React, { Component } from 'react';
import Add from './AddIncome';
import Exp from './AddExpense';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state={
      dispAddInc: false,
      dispAddExp: false,
      renderArrayValue: (localStorage.getItem('valueStore')) ? [...JSON.parse(localStorage.getItem('valueStore'))] : [Number],
      renderArrayDesc: (localStorage.getItem('descStore')) ? [...JSON.parse(localStorage.getItem('descStore'))] : [String]
    }    
    this.showSelected = this.showSelected.bind(this);
  }

  componentDidMount() {
    const storeGetValue = JSON.parse(localStorage.getItem('valueStore'));

 //     alert('mounted' + storeGetValue.map(data=>data));
      alert ("Total Entries: " + ((storeGetValue !== null) ? (storeGetValue.length) : 0) ); 
     
  }

showSelected(opt) {
  switch(opt) {
    case "dispAddInc":
      this.setState({dispAddInc: !this.state.dispAddInc, dispAddExp: false});
      break;
    case "dispAddExp":
      this.setState({dispAddExp: !this.state.dispAddExp,dispAddInc: false});
      break;
    default:
      alert ('gotcha');
      break;
  }
}

render() {
  const {dispAddInc,dispAddExp} = this.state;
  var totInc = (this.state.renderArrayValue.filter(data => +(data > 0))).reduce(((a,c)=>{return a + c}),0);
  var totExp = (this.state.renderArrayValue.filter(data => data < 0)).reduce(((a,c)=>{return a + c}),0);

  return (
    <div className="Home">
      {dispAddInc && <Add />}
      {dispAddExp && <Exp />}

    <div className="Summary">
      <header className="App-head">
        <h3>Balance</h3>
        <h1>Rs. {totInc + totExp}</h1>
        <h4> <span style={{color:"green"}}>Income : Rs.   {totInc}</span> &nbsp;&nbsp;
             <span style={{color:"red"}}>  Expense :Rs.  {totExp}</span> </h4>
      </header>
    </div>

    <hr/>

    <h1 id="data">

  {this.state.renderArrayValue.map((data,index) => <div> {data}  {this.state.renderArrayDesc[index]} </div>)}

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
