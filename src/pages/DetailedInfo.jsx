import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProcurement } from '../helpers/handleData'
import { Breadcrums } from '../components/Breadcrums'
import { fixedPrice } from '../helpers/functions'

function DetailedInfo({ i }) {
  const [procurementData, setProcurement] = useState([])
  const { category, details, procurement } = useParams()

  useEffect(() => {
    getProcurement('tendre', procurement, setProcurement)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let newdetails = details.split('+')
  let categorycpv = newdetails[0]

  return (
    <>
      <Breadcrums
        category={category}
        categorycpv={categorycpv}
        procurement={procurement}
      />

      <div className='info-container'>
        <div className='info-left-bar'>
          <h1>{procurementData.tittel}</h1>
          <h3>{procurementData.oppdragsgiver}</h3>

          <div className='info-card'>
            {procurementData.kunngjoringsdato && (
              <p>
                <b>Publiseringsdato: </b> {procurementData.kunngjoringsdato}
              </p>
            )}
            {procurementData.tilbudsfrist && (
              <p>
                <b>Tilbudsfrist: </b> {procurementData.tilbudsfrist}
              </p>
            )}
            <p>
              <b>Tildelingskriterie: </b> {procurementData.tildelingskriterier}
            </p>
            {procurementData.pris && (
              <p>
                <b>Pris: </b> {fixedPrice(procurementData.pris)}
              </p>
            )}
            <p>
              <b>CPV-kode: </b> {procurementData.cpvnumber}
            </p>

            <p>{procurementData.beskrivelse}</p>
          </div>
          <div className='info-card'>
            <h6>Dokumenter</h6>

            {procurementData.documents ? (
              procurementData.documents.map((i, index) => (
                <a key={index} href={'https://www.mercell.com' + i.url}>
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
          <div className='info-card'>
            <h6>Ytelsestype</h6>
            {procurementData.tilleggsCPV &&
              procurementData.tilleggsCPV.map(
                (i, index) =>
                  i !== null && (
                    <div className='ytelsestyper' key={index}>
                      <p className='cpv'>{Object.keys(i)}</p>
                      <p>{Object.values(i)}</p>
                    </div>
                  )
              )}
          </div>
        </div>
        <div className='info-right-bar'>
          <button className='button'>Meld interesse</button>
          <div className='info-right-bar-article'>
            <div className='headline-div'>
              <h4 className='headline border'>Kontakt</h4>
            </div>
            {procurementData.sporsmalsfrist && (
              <p>
                <b>Spørsmålsfrist: </b>
                {procurementData.sporsmalsfrist}
              </p>
            )}

            {procurementData.kontaktperson && (
              <p>
                <b>Kontaktperson: </b>
                {procurementData.kontaktperson}
              </p>
            )}

            {procurementData.telefon && (
              <p>
                <b>Telefon: </b>
                {procurementData.telefon}
              </p>
            )}
            {procurementData.epost && (
              <p className='email'>
                <b>E-post: </b> {procurementData.epost}
              </p>
            )}
          </div>
          <div className='info-right-bar-article'>
            <div className='headline-div'>
              <h4 className='headline border'>Innkjøper</h4>
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
              {', '} {procurementData.sted}
              <br></br> {procurementData.land}
            </p>
          </div>
          <div className='info-right-bar-article'>
            <div className='headline-div'>
              <h4 className='headline border'>Nettsted</h4>
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
  )
}

export default DetailedInfo
