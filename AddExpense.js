import React from 'react';

class Exp extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      newExpense: 0,
      expDesc: '',
    };
  }
  acceptIncome = (event) => {
    this.setstate(
      {[event.target.name]:event.target.value}
    );
  }
  render() {
    return (
    <form>
     <input type="number" name="newExpense" placeholder="Add the Expense here"></input>
     <input type="text" name="expDesc" placeholder="Add comment as needed"></input>
     <input type="submit" name="submit" value="Submit"></input>
     <input type="reset" name="reset" value="Reset"></input>
    </form>
    );
  }
}

export default Exp;
