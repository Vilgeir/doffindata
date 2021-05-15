import { useState } from 'react'

export const useToggle = (initialValue = true) => {
  const [value, setValue] = useState(initialValue)

  return [value, { set: setValue, toggle: () => setValue((prev) => !prev) }]
}
