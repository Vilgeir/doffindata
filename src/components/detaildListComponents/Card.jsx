import React from 'react'
import { capitalize } from '../../helpers/functions'

function Card({ i }) {
  return (
    <div className='card'>
      <h5 className='publishedby'>{i.tittel}</h5>
      <h4>{capitalize(i.oppdragsgiver)}</h4>
      <p>{i.beskrivelse}</p>
      <div className='dates'>
        <div className='dates-1'>
          <div>
            <p>Søknadsfrist</p>
            <h4>{i.tilbudsfrist ? i.tilbudsfrist : 'Ikke annonsert'}</h4>
          </div>
          <div>
            <p>Tildelingskriterier</p>
            <h4>{i.tildelingskriterier}</h4>
          </div>
          {i.pris && (
            <div>
              <p>Pris</p>
              <h4>{i.pris}</h4>
            </div>
          )}
        </div>
        <div className='dates-2'>
          <h4>{capitalize(i.sted)}</h4>
        </div>
      </div>
    </div>
  )
}
export default Card
