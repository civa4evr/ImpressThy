import React from 'react';

class Add extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      newIncome: 0,
      incDesc: '',
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
     <input type="number" name="newIncome" placeholder="Add the Income here"></input>
     <input type="text" name="incDesc" placeholder="Add comment if needed"></input>
     <input type="submit" name="submit" value="Submit"></input>
     <input type="reset" name="reset" value="Reset"></input>
    </form>
    );
  }
}

export default Add;
