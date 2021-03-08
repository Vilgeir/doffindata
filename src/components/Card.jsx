import React from 'react'

function Card() {
  return (
    <div className='card'>
      <h1>ANSK-0003-20 Rammeavtale Blomster</h1>
      <p>Publisert av: Noen</p>
      <div className='dates'>
        <div>
          <h3>Kunngjøringsdato</h3>
          <p>dato</p>
        </div>
        <div>
          <h3>Tilbudsfrist</h3>
          <p>2021-02-27</p>
        </div>
        <p>Fylke</p>
      </div>
    </div>
  )
}
export default Card
