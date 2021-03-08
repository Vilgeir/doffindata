import React from 'react'

function Card({ i }) {
  return (
    <div className='card'>
      <h2>{i.tittel}</h2>
      <p>Publisert av: {i.bedrift}</p>
      <div className='dates'>
        <div>
          <h3>Kunngjøringsdato</h3>
          <p>{i.dato}</p>
        </div>
        <div>
          <h3>Tilbudsfrist</h3>
          <p>2021-02-27</p>
        </div>
        <div>
          <h3>{i.bedrift}</h3>
        </div>
      </div>
    </div>
  )
}
export default Card
