export const capitalize = (str) => {
  let lower = str.toLowerCase()
  return str.charAt(0).toUpperCase() + lower.slice(1)
}
