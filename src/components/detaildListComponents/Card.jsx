import React from 'react'
import { capitalize, capitalizeAll, fixedPrice } from '../../helpers/functions'

function Card({ i }) {
  return (
    <div className='card'>
      <h5 className='publishedby'>{i.tittel}</h5>
      <h4>{capitalizeAll(i.oppdragsgiver)}</h4>
      <p>{i.beskrivelse}</p>
      <div className='dates-1'>
        <div>
          <p>Søknadsfrist</p>
          <h4>{i.tilbudsfrist ? i.tilbudsfrist : 'N/A'}</h4>
        </div>
        <div>
          <p>Tildelingskriterier</p>
          <h4>{i.tildelingskriterier}</h4>
        </div>

        <div>
          <p>Ramme</p>
          <h4>{i.pris ? fixedPrice(i.pris) : 'N/A'}</h4>
        </div>
        <div className='dates-2'>
          <p>Sted</p>
          <h4>{capitalize(i.sted)}</h4>
        </div>
      </div>
    </div>
  )
}
export default Card
