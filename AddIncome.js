import React from 'react';

class Add extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      newIncome: 0,
      incDesc: 'x',
      incArray: [...JSON.parse(localStorage.getItem('incStore'))],
      incArray2: [...JSON.parse(localStorage.getItem('inc2Store'))]
    };
  }
  acceptIncome = (event) => {
    let varType = event.target.name;
    let varValue = event.target.value;
    this.setState(
      {[varType]:varValue}
    );
  }

  submitIncome = (event) => {
    event.preventDefault();
    let localArray = [...this.state.incArray];
    localArray.push(this.state.newIncome);

    let localArray2 = [...this.state.incArray2];
    localArray2.push(this.state.incDesc);

    this.setState({
      incArray: localArray,
      incArray2: localArray2
     });
  }


  componentDidUpdate(preProp,preState) {
    if ((preState.incArray.length !== this.state.incArray.length)||
        (preState.incArray2.length !== this.state.incArray2.length)) {

      const storePut = JSON.stringify(this.state.incArray);
      localStorage.setItem('incStore',storePut);

      const storePut2 = JSON.stringify(this.state.incArray2);
      localStorage.setItem('inc2Store',storePut2);

      const check = localStorage.getItem('inc2Store');
      alert ('New Income Added' + check);
    }
  }


  render() {
    return (
    <form>
    <h1>{this.state.newIncome}</h1>
    <h1>{this.state.incDesc}</h1>
    {this.state.incArray.map((note, index) => <div key={index}>{note}</div>)}
     <input type="number" name="newIncome" placeholder="Add the Income here" onChange={this.acceptIncome}></input>
     <input type="text" name="incDesc" placeholder="Add comment if needed" onChange={this.acceptIncome}></input>
     <button name="submit" onClick={this.submitIncome}>Submit</button>
     <input type="reset" name="reset" value="Reset"></input>
    </form>
    );
  }
}

export default Add;
