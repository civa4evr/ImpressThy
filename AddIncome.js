import React from 'react';

class Add extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      newIncome: Number,
      incDesc: String,
      incArray: (localStorage.getItem('valueStore')) ? [...JSON.parse(localStorage.getItem('valueStore'))] : [Number],
      incArray2: (localStorage.getItem('descStore')) ? [...JSON.parse(localStorage.getItem('descStore'))] : [String]
    };
  }


  aweSome () {
    //    alert('bye');
          alert ('bye');
    //    this.props.aweSome("dispAddExp");
    //    this.props.aweSome("dispAddInc");
    
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
    localArray.push(+this.state.newIncome);

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
      localStorage.setItem('valueStore',storePut);

      const storePut2 = JSON.stringify(this.state.incArray2);
      localStorage.setItem('descStore',storePut2);

      alert ('working : ' + storePut)
      alert ('New Income Added - ' + this.state.incDesc + ' : ' + this.state.newIncome);
    }
  }


  render() {
    return (
    <form id="popForm" style={{float:"right"}}>
      
     <label>Income: </label>
     <input type="number" name="newIncome" placeholder="Add the Income here" onChange={this.acceptIncome}></input>
     <label>Description: </label>
     <input type="text" name="incDesc" placeholder="Add comment if needed" onChange={this.acceptIncome}></input> <br/><br/>
     <button name="submit" onClick={this.submitIncome}>Submit</button>
     <input type="reset" name="reset" value="Reset"></input>
     <button name="close" onClick={this.aweSome}>Close</button>

    </form>
    );
  }
}

export default Add;
