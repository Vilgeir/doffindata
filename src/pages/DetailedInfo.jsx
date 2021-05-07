import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProcurement } from "../helpers/handleData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function DetailedInfo({ i }) {
  const [procurementData, setProcurement] = useState([]);
  const { category, details, procurement } = useParams();

  const getData = () => {
    getProcurement("tendre", procurement, setProcurement);
  };
  useEffect(() => {
    getData();
  }, []);
  let newdetails = details.split("+");
  let categorycpv = newdetails[0];

  return (
    <>
      <div className="breadcrums">
        <Link to={"/"}>Hjem</Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to={"/" + category}>Kategori</Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to={"/" + category + "/" + categorycpv}>Resultat</Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to={"/" + category + "/" + categorycpv + "/" + procurement}>
          Anbud
        </Link>
      </div>
      <div className="info-container">
        <div className="info-left-bar">
          <p>{procurementData.oppdragsgiver}</p>
          <h1>{procurementData.tittel}</h1>
          <div className="info-card">
            <p>
              <b>Publiseringsdato: </b> {procurementData.kunngjoringsdato}
            </p>
            <p>
              <b>Tilbudsfrist: </b> {procurementData.tilbudsfrist}
            </p>
            <p>
              <b>Tildelingskriterie: </b> {procurementData.tildelingskriterier}
            </p>

            <p>{procurementData.beskrivelse}</p>
          </div>
          <div className="info-card">
            <h6>Dokumenter</h6>

            {procurementData.documents ? (
              procurementData.documents.map((i, index) => (
                <a key={index} href={"https://www.mercell.com" + i.url}>
                  {i.name}
                </a>
              ))
            ) : (
              <>
                <p>Last ned dokumentene her:</p>
                <a href={procurementData.url_dokumentasjon}>
                  {procurementData.url_dokumentasjon}
                </a>
              </>
            )}
          </div>
          <div className="info-card">
            <h6>Ytelsestype</h6>
            {procurementData.tilleggsCPV &&
              procurementData.tilleggsCPV.map(
                (i, index) =>
                  i !== null && (
                    <p key={index}>
                      {Object.keys(i)} {Object.values(i)}{" "}
                    </p>
                  )
              )}
          </div>
        </div>
        <div className="info-right-bar">
          <button className="button">Meld interesse</button>
          <div className="info-right-bar-article">
            <div className="headline-div">
              <h4 className="headline border">Kontakt</h4>
            </div>
            <p>
              <b>Spørsmålsfrist: </b>
              {procurementData.sporsmalsfrist}
            </p>
            <p>
              <b>Kontaktperson: </b>
              {procurementData.kontaktperson}
            </p>
            <p>
              <b>Telefon: </b>
              {procurementData.telefon}
            </p>
            <p>
              <b>E-post: </b> {procurementData.epost}
            </p>
          </div>
          <div className="info-right-bar-article">
            <div className="headline-div">
              <h4 className="headline border">Innkjøper</h4>
            </div>
            <p>
              <b>Oppdragsgiver: </b> {procurementData.oppdragsgiver}
            </p>
            <p>
              <b>Org nr.: </b>
              {procurementData.orgnr}
            </p>
            <p>
              <b>Adresse: </b> {procurementData.adresse} <br></br>
              {procurementData.postkode}
              {", "} {procurementData.sted}
              <br></br> {procurementData.land}
            </p>
          </div>
          <div className="info-right-bar-article">
            <div className="headline-div">
              <h4 className="headline border">Nettsted</h4>
            </div>
            <p>
              <a href={procurementData.url_oppdragsgiver}>Oppdragsgiver</a>
            </p>
            <p>
              <a href={procurementData.url_kjoperprofil}>Kjøperprofil</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedInfo;
