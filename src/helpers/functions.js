import {
  faPlug,
  faTools,
  faUserMd,
  faLaptopCode,
  faBriefcase,
  faCity,
  faAtom,
  faClipboardList,
  faShippingFast,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

export const capitalize = (str) => {
  let lower = str.toLowerCase()
  return str.charAt(0).toUpperCase() + lower.slice(1)
}

export const homeIcons = (icon) => {
  switch (icon) {
    case 'IT':
      return {
        icon: faLaptopCode,
        style: { backgroundColor: '#36498a', color: '#81b3ee' },
      }
    case 'Bygg og anlegg':
      return {
        icon: faTools,
        style: { backgroundColor: '#d1bcff', color: '#4b00eb' },
      }
    case 'Helse':
      return {
        icon: faUserMd,
        style: { backgroundColor: '#c8ffdb', color: '#00840d' },
      }
    case 'Varer og utstyr':
      return {
        icon: faShoppingCart,
        style: { backgroundColor: '#fff59c', color: '#efbe0e' },
      }
    case 'Tjenester':
      return {
        icon: faBriefcase,
        style: { backgroundColor: '#ffe6cf', color: '#ff8a00' },
      }
    case 'Elektronisk utstyr':
      return {
        icon: faPlug,
        style: { backgroundColor: '#c8d4ff', color: '#004393' },
      }
    case 'Transport':
      return {
        icon: faShippingFast,
        style: { backgroundColor: '#ffcdca', color: '#e20e00' },
      }
    case 'Kontor':
      return {
        icon: faClipboardList,
        style: { backgroundColor: '#c0eee6', color: '#007965' },
      }
    case 'Olje og kjemikalier':
      return {
        icon: faAtom,
        style: { backgroundColor: '#f2ceff', color: '#9a00cc' },
      }
    case 'Offentlige ytelser':
      return {
        icon: faCity,
        style: { backgroundColor: '#ffd3f8', color: '#d8009b' },
      }
    default:
      return {
        icon: faAtom,
        style: { backgroundColor: '#f2ceff', color: '#9a00cc' },
      }
  }
}
