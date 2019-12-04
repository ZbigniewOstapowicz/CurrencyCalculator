import React, { Component } from "react";
import Select from "./Select";
import Result from "./Result";
import "../style/App.css";
class App extends Component {
  state = {
    currency: "",
    bid:"",
    ask:"",
    date:"",
    InputValue:"",
    InputErr: true,
    value:""

  };
  handelInptChange=e=>{
    this.setState({
      InputValue:e.target.value
    })
  }

  handelClick=e=>{
    e.preventDefault();
    if(this.state.InputValue<1||!Number(this.state.InputValue)){
      this.setState({
        InputValue:"",
        InputErr: true
      })
      console.log('zła');  
    }else{
       this.setState({
        value: this.state.InputValue,
        InputValue:"",
        InputErr: false
      })
      console.log(this.state.value)
    }

  }
  handelSelect = e => {
    this.setState({
      currency: e.target.value
    });

      fetch(`https://api.nbp.pl/api/exchangerates/rates/c/${e.target.value}/?format=json`).then(r=>r.json()).then(data=>{
        this.setState({
          bid: data.rates[0].bid,
          ask: data.rates[0].ask,
          date: data.rates[0].effectiveDate
        })
      });
  };
  render() {
    return (
      <div className="App">
        <Select onChange={this.handelSelect} value={this.state.currency}></Select>
        <Result exchangeRate={this.state} InputChange={this.handelInptChange} BtnClick={this.handelClick}></Result>
      </div>
    );
  }
}

export default App;
