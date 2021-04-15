import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProcurement } from '../helpers/handleData'

function DetailedInfo() {
  const [procurementData, setProcurement] = useState([])
  const { procurement } = useParams()

  useEffect(() => {
    getProcurement('F02_2014', procurement, setProcurement)
    // setProcurement(data.filter((i) => i.tittel === procurement))
  }, [])

  console.log(procurementData)
  return (
    <div>
      <h1>{procurementData.tittel}</h1>
      <button>Meld interesse</button>
      <div>
        <h3>Kunngjøringsdetaljer</h3>
        <p>kunngjøringsboks</p>
      </div>
      <div>
        <h3>Beskrivelse av anbud</h3>
        <p>{procurementData.beskrivelse}</p>
      </div>
      <div>
        <h3>Dokumenter</h3>
        {procurementData.documents
          ? procurementData.documents.map((i, index) => (
              <a key={index} href={'https://www.mercell.com' + i.url}>
                {i.name}
              </a>
            ))
          : procurementData.url_dokumentasjon}
      </div>
      <div>
        <h3>Behov for sortiment</h3>
        <p>text</p>
      </div>
      <button>Meld interesse</button>
    </div>
  )
}

export default DetailedInfo
