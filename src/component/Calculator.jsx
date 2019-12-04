import React from "react";
import "../style/Calculator.css";
const Calculator = props => {
  let content = "";
  if (!props.InputErr && props.value) {
    content = (
      <div className="Calculator__result">
        <table className="Calculator__tabel">
          <tbody>
            <tr>
              <th colSpan="2">
                {props.value} {props.currency}
              </th>
            </tr>
            <tr>
              <td>sprzedaż za : {(props.bid * props.value).toFixed(2)} zł</td>
            </tr>
            <tr>
              <td>kupisz za : {(props.ask * props.value).toFixed(2)} zł</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else if (props.value) {
    content = <h5>wprowadz wartość liczbową wieksza od 0</h5>;
  }
  return (
    <div className="Calculator">
      <form onSubmit={props.BtnClick}>
        <input
          className="Calculator__input"
          onChange={props.InputChange}
          value={props.InputValue}
          placeholder={`Wpisz wartość w ${props.currency}`}
        />
        <button className="Calculator__btn">Przelicz</button>
      </form>
      {content}
    </div>
  );
};

export default Calculator;
