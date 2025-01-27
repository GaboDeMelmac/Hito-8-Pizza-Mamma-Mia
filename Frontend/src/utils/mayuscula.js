export function capitalizarPrimeraLetra(str) {
  if (!str) return str; // Verifica si la cadena está vacía o no
  return str.charAt(0).toUpperCase() + str.slice(1);
}
