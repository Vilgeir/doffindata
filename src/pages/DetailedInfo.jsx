import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import data from "../data/doffin-form2.json";

function DetailedInfo({ i }) {
  const [procurementData, setProcurement] = useState();
  const { procurement } = useParams();

  useEffect(() => {
    setProcurement(data.filter((i) => i.tittel === procurement));
  }, []);

  // console.log(procurementData[0].beskrivelse);
  return (
    <div className="info-container">
      <h1>{procurementData && procurementData[0].tittel}</h1>
      <button className="button">Meld interesse</button>
      <div className="info-card">
        <h3>Kunngjøringsdetaljer</h3>
        <p>
          Kunngjøringsdato:{" "}
          {procurementData && procurementData[0].kunngjoringsdato}
        </p>
        <p>
          Adresse: {procurementData && procurementData[0].adresse}
          {", "} {procurementData && procurementData[0].sted}
        </p>
        <p>E-post: {procurementData && procurementData[0].epost}</p>
        <p>Nettside: {procurementData && procurementData[0].nettside}</p>
      </div>
      <div className="info-card">
        <h3>Beskrivelse av anbud</h3>
        <p>{procurementData && procurementData[0].beskrivelse}</p>
      </div>
      <div className="info-card">
        <h3>Dokumenter</h3>
        <p>text</p>
      </div>
      <div className="info-card">
        <h3>Behov for sortiment</h3>
        <p>text</p>
      </div>
      <button className="button">Meld interesse</button>
    </div>
  );
}

export default DetailedInfo;
