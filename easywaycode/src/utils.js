export function cutString(str) {
  return str.length > 20 ? str.substr(0, 17) + '...' : str
}
