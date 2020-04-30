import React from 'react';

class Exp extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      newExpense: 0,
      expDesc: 'x',
      expArray: [...JSON.parse(localStorage.getItem('expStore'))],
      expArray2: [...JSON.parse(localStorage.getItem('exp2Store'))]
    };
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
    localArray1.push(this.state.newExpense);

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
    localStorage.setItem('expStore',storePut);

    const storePut2 = JSON.stringify(this.state.expArray2);
    localStorage.setItem('exp2Store',storePut2);

    alert ('New Expense Added');
  } 
}


  render() {
    return (
    <form>
    <h1>{this.state.newExpense}</h1>
    <h1>{this.state.expDesc}</h1>
    {this.state.expArray.map((note, index) => <div key={index}>{note}</div>)}
     <input type="number" name="newExpense" placeholder="Add the Expense here" onChange={this.acceptExpense}></input>
     <input type="text" name="expDesc" placeholder="Add comment as needed" onChange={this.acceptExpense}></input>
     <button name="submit" onClick={this.submitExpense}>Submit</button>
     <input type="reset" name="reset" value="Reset"></input>

    </form>
    );
  }
}

export default Exp;
