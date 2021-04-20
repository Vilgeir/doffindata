import React from 'react'

const Checkboxes = ({
  type = 'checkbox',
  value,
  id,
  key,
  checked,
  onChange,
  className,
  handleCheck,
}) => (
  <input
    key={key}
    className={className}
    type={type}
    value={value}
    checked={checked}
    onClick={onChange}
    // onClick={handleCheck}
  />
)

export default Checkboxes
// console.log(checked.map((i) => Object.values(i)[0].check))

// {
//   checked.map((elem) => (
//     // Object.keys(elem)[0] == it.code
//     //   ? console.log(Object.values(elem)[0].check)
//     //   : console.log('hello')
//     <Checkboxes
//       key={index}
//       value={it.code}
//       onChange={handleClick}
//       className={'checkbox'}
//       id={it.code}
//       checked={Object.keys(elem)[0] == it.code && Object.values(elem)[0].check}
//       handleCheck={handleCheck}
//     />
//   ))
// }
