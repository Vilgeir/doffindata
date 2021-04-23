import React from "react";

function Card({ i }) {
  const capitalize = (str) => {
    let lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  const reverse = (date) => {
    return date.split("-").reverse().join(".");
  };

  return (
    <div className="card">
      <div className="black-line" />
      <h2>{i.tittel}</h2>
      <h3 className="publishedby">{capitalize(i.oppdragsgiver)}</h3>
      <div className="dates">

        {/*
        <div>
          <h4>Kunngjøringsdato:</h4>
          <p>{reverse(i.kunngjoringsdato)}</p>
        </div>
        */}

        <div>
          <h4>Søknadsfrist</h4>
          <p>{i.tilbudsfrist ? reverse(i.tilbudsfrist) : "Ikke annonsert"}</p>
        </div>

        <div>
          <h4>Tildelingskriterier</h4>
          <p></p>
        </div>

        <div className="town">
          <p>{capitalize(i.sted)}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
