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
        <h1 className="headline">{procurementData.tittel}</h1>
        <div className="info-card">
          <p>Kunngjøringsdato: {procurementData.kunngjoringsdato}</p>
          <p>
            Adresse: {procurementData.adresse}
            {", "} {procurementData.sted}
          </p>

          <p>Nettside: {procurementData.nettside}</p>
          <h3>Beskrivelse av anbud</h3>
          <p>{procurementData.beskrivelse}</p>
        </div>
        <div className="info-card">
          <h3>Dokumenter</h3>
          {procurementData.documents
            ? procurementData.documents.map((i, index) => (
                <a key={index} href={"https://www.mercell.com" + i.url}>
                  {i.name}
                </a>
              ))
            : procurementData.url_dokumentasjon}
        </div>
        <div className="info-card">
          <h3>Behov for sortiment</h3>
          <p>text</p>
        </div>
      </div>
      <div className="info-right-bar">
        <button className="button">Meld interesse</button>
        <div className="black-line" />
        <h3 className="headline">Kontakt</h3>
        <p>Kontaktperson:</p>
        <p>Telefon:</p>
        <p>E-post: {procurementData.epost}</p>
        <div className="black-line" />
        <h3 className="headline">Innkjøper</h3>
        <p>Oppdragsgiver: {procurementData.oppdragsgiver}</p>
        <div className="black-line" />
        <h3 className="headline">Nettsted</h3>
      </div>
    </div>
  )
}

export default DetailedInfo
