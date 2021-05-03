import React from 'react'
import { capitalize } from '../helpers/functions'

function Card({ i }) {
  const reverse = (date) => {
    return date.split('-').reverse().join('.')
  }

  return (
    <div className='card'>
      <h5 className='publishedby'>{i.tittel}</h5>
      <h4>{capitalize(i.oppdragsgiver)}</h4>
      <p>{i.beskrivelse}</p>
      <div className='dates'>
        {/*
        <div>
          <h4>Kunngjøringsdato:</h4>
          <p>{reverse(i.kunngjoringsdato)}</p>
        </div>
        */}

        <div>
          <h4>Søknadsfrist</h4>
          <p>{i.tilbudsfrist ? i.tilbudsfrist : 'Ikke annonsert'}</p>
        </div>

        <div>
          <h4>Tildelingskriterier</h4>
          <p>{i.tildelingskriterier}</p>
        </div>

        <div className='town'>
          <p>{capitalize(i.sted)}</p>
        </div>
      </div>
    </div>
  )
}
export default Card
