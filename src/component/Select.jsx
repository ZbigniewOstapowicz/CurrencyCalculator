import React from "react";
import "../style/Select.css";
const Select = props => {
  return (
    <div className="Select">
      <h1 className="Select__text">Wybierz walute:</h1>
      <select className="Select__select" value={props.value} onChange={props.onChange}>
        <option value="" disabled>Wybierz walutę</option>
        <option value="USD">Dolar amreykański(USD)</option>
        <option value="CAD">Dolar kanadyjski(CAD)</option>
        <option value="EUR">Euro(EUR)</option>
        <option value="CHF">Frank szwajcarski(CHF)</option>
        <option value="GBP">Funt szterling(GBP)</option>
        <option value="CZK">Korona czeska(CZK)</option>
        <option value="AUD">Dolar australiski(AUD)</option>
        <option value="HUF">Forint (Węgry)(HUF)</option>
        <option value="JPY">Jen (Japonia)(JPY)</option>
        <option value="DKK">Korona duńska(DKK)</option>
        <option value="NOK">Korona norweska(NOK)</option>
        <option value="SEK">Korona szwedzka(SEK)</option>
      </select>
    </div>
  );
};

export default Select;
