import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProcurement } from '../helpers/handleData'

function DetailedInfo({ i }) {
  const [procurementData, setProcurement] = useState([])
  const { procurement } = useParams()

  useEffect(() => {
    getProcurement('F02_2014', procurement, setProcurement)
    // setProcurement(data.filter((i) => i.tittel === procurement))
  }, [])

  return (
    <div className="info-container">
      <div className="info-left-bar">
        <p>{procurementData.oppdragsgiver}</p>
        <h1>{procurementData.tittel}</h1>
        <div className="info-card">
          <p><b>Publiseringsdato:</b> {procurementData.kunngjoringsdato}</p>
          <p><b>Tilbudsfrist:</b></p>
          <p><b>Tildelingskriterie:</b></p>

          <p>{procurementData.beskrivelse}</p>
        </div>
        <div className="info-card">
          <h5>Dokumenter</h5>
          {procurementData.documents
            ? procurementData.documents.map((i, index) => (
                <a key={index} href={"https://www.mercell.com" + i.url}>
                  {i.name}
                </a>
              ))
            : procurementData.url_dokumentasjon}
        </div>
        <div className="info-card">
          <h5>Behov for sortiment</h5>
          <p>text</p>
        </div>
      </div>
      <div className="info-right-bar">
        <button className="button">Meld interesse</button>
        <div className="headline-div">
          <h4 className="headline">Kontakt</h4>
          </div>
        <p><b>Spørsmålsfrist:</b></p>
        <p><b>Kontaktperson:</b></p>
        <p><b>Telefon:</b></p>
        <p><b>E-post:</b> {procurementData.epost}</p>
        <div className="headline-div">
          <h4 className="headline">Innkjøper</h4>
          </div>
        <p><b>Oppdragsgiver:</b> {procurementData.oppdragsgiver}</p>
        <p><b>Org nr.:</b></p>
        <p>
            <b>Adresse:</b> {procurementData.adresse}
            {", "} {procurementData.sted}
          </p>
        <div className="headline-div">
          <h4 className="headline">Nettsted</h4>
        </div>
        <p>{procurementData.nettside}</p>
      </div>
    </div>
  )
}

export default DetailedInfo
