import React from "react";
import Calculator from "./Calculator";
import "../style/Result.css";

const Result = props => {
  const { currency, bid, ask, date, InputValue, InputErr, value} = props.exchangeRate;

  let content = "";
  if (date) {
    return (content = (
      <div className="Result">
        <table className="Result__table">
          <thead>
            <tr>
              <th colSpan="3"> Kurs walut z dnia:{date}</th>
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
    ));
  }
  return content ? "" : content;
};

export default Result;
