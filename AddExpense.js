import React from 'react';

class Exp extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      newExpense: 0,
      expDesc: '',
      totExpense: 0,
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
    this.setState(
      {totExpense: this.state.totExpense + this.state.newExpense}
    );
    console.log(this.state.totExpense);
  }
  render() {
    return (
    <form>
    <h1>{this.state.newExpense}</h1>
     <input type="number" name="newExpense" placeholder="Add the Expense here" onChange={this.acceptExpense}></input>
     <input type="text" name="expDesc" placeholder="Add comment as needed" onChange={this.acceptExpense}></input>
     <input type="submit" name="submit" value="Submit"></input>
     <input type="reset" name="reset" value="Reset"></input>
    </form>
    );
  }
}

export default Exp;
