import React from "react";
import Calculator from "./Calculator";
import "../style/Result.css";
import Svg from "../img/loading.svg"


const Result = props => {
  const { currency, bid, ask, date, InputValue, InputErr, value, isLoading,err} = props.exchangeRate;

  let content = "";
  if (date&&!isLoading) {
    content = (
      <div className="Result">
        <table className="Result__table">
          <thead>
            <tr>
              <th colSpan="3"> Kurs walut z dnia: {date}</th>
            </tr>
          </thead>
          <tbody className="Result__tbody">
            <tr>
              <th>Waluta</th>
              <th>Skup</th>
              <th>Sprzedaż</th>
            </tr>
            <tr>
              <td>{currency}</td>
              <td>{bid}</td>
              <td>{ask}</td>
            </tr>
          </tbody>
        </table>
        <Calculator currency={currency} bid={bid} ask={ask} InputChange={props.InputChange} BtnClick={props.BtnClick} InputValue={InputValue} InputErr={InputErr} value={value}></Calculator>
      </div>
    )
  }else if(isLoading){
    content=(
      <img src={Svg} alt="loading"/>
    )
  } else if(err){
    content=(
      <p>Błąd połączenia</p>
    )
  }
  return content
};

export default Result;
