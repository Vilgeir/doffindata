import React from 'react'

const Checkboxes = ({
  type = 'checkbox',
  value,
  checked,
  onChange,
  className,
}) => (
  <input
    className={className}
    type={type}
    value={value}
    checked={checked}
    onChange={onChange}
  />
)

export default Checkboxes
