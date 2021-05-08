import React from 'react'

const Checkboxes = ({
  type = 'checkbox',
  value,
  checked,
  onChange,
  className = 'checkbox',
  data,
}) => (
  <>
    <input
      className={className}
      type={type}
      value={data.navn ? data.navn : data.code}
      checked={checked}
      onChange={onChange}
    />
    <label className='check-label'>
      {data.navn ? data.navn : data.name + ' (' + data.countWithChildren + ')'}
    </label>
  </>
)

export default Checkboxes
