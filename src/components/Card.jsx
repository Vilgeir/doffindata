import React from 'react'

function Card({ i }) {
  const capitalize = (str) => {
    let lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
  }

  const reverse = (date) => {
    return date.split('-').reverse().join('.')
  }

  return (
    <div className="card">
      <h3 className="publishedby">{capitalize(i.oppdragsgiver)}</h3>
      <h5>{i.tittel}</h5>
      <div className="dates">

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
