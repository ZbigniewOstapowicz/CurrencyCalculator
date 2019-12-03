import React from "react";
const Select = props => {
  return (
    <>
      <h1 className="App__text">Wybierz walute:</h1>
      <select value={props.value} onChange={props.onChange}>
        <option value="USD">Dolar amreykański(USD)</option>
        <option value="CAD">Dolar kanadyjski(CAD)</option>
        <option value="EUR">Euro(EUR)</option>
        <option value="CHF">Frank szwajcarski(CHF)</option>
        <option value="GBP">Funt szterling(GBP)</option>
        <option value="CZK">Korona czeska(CZK)</option>
      </select>
    </>
  );
};

export default Select;
