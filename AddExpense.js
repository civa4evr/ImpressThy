import React from 'react';

class Exp  extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      newExpense: Number,
      expDesc: String,
      expArray: (localStorage.getItem('valueStore')) ? [...JSON.parse(localStorage.getItem('valueStore'))] : [Number],
      expArray2: (localStorage.getItem('descStore')) ? [...JSON.parse(localStorage.getItem('descStore'))] : [String]
    };
  }
  aweSome () {
      alert ('bye');
  }

  acceptExpense = (event) => {
    let varType = event.target.name;
    let varValue = event.target.value;
    this.setState(
      {[varType]:varValue}
    );
    }

  submitExpense = (event) => {
    event.preventDefault();
    let localArray1 = [...this.state.expArray];
    localArray1.push(-this.state.newExpense);

    let localArray2 = [...this.state.expArray2];
    localArray2.push(this.state.expDesc);

    this.setState({
      expArray: localArray1,
      expArray2: localArray2
     });
  }


componentDidUpdate(preProp,preState) {
  if ((preState.expArray.length !== this.state.expArray.length) ||
      (preState.expArray2.length !== this.state.expArray2.length)) {
    const storePut = JSON.stringify(this.state.expArray);
    localStorage.setItem('valueStore',storePut);

    const storePut2 = JSON.stringify(this.state.expArray2);
    localStorage.setItem('descStore',storePut2);
    
    alert ('New Expense Added - ' + this.state.expDesc + ' : ' + this.state.newExpense);
  } 
}


  render() {
    return (
    <form id="popForm" style={{float:"right"}}>
    
     <label>Expense:</label>
     <input type="number" name="newExpense" placeholder="Add the Expense here" onChange={this.acceptExpense}></input>
     <label>Description:</label> 
     <input type="text" name="expDesc" placeholder="Add comment as needed" onChange={this.acceptExpense}></input> <br/>
     <button name="submit" onClick={this.submitExpense}>Submit</button>
     <input type="reset" name="reset" value="Reset"></input>
     <button name="close" onClick={this.aweSome}>Close</button>


    </form>
    );
  }
}

export default Exp;
