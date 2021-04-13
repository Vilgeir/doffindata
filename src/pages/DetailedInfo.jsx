import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import data from '../data/doffin-form2.json'

function DetailedInfo({ i }) {
  const [procurementData, setProcurement] = useState()
  const { procurement } = useParams()

  useEffect(() => {
    setProcurement(data.filter((i) => i.tittel === procurement))
  }, [])

  // console.log(procurementData[0].beskrivelse)
  return (
    <div>
      <h1>{procurementData && procurementData[0].tittel}</h1>
      <button>Meld interesse</button>
      <div>
        <h3>Kunngjøringsdetaljer</h3>
        <p>kunngjøringsboks</p>
      </div>
      <div>
        <h3>Beskrivelse av anbud</h3>
        <p>{procurementData && procurementData[0].beskrivelse}</p>
      </div>
      <div>
        <h3>Dokumenter</h3>
        <p>text</p>
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
