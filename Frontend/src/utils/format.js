export function formatearNumeroConMiles(numero) {
  const formatter = new Intl.NumberFormat("de-DE"); // 'es-ES' para formato en español de España
  return formatter.format(numero);
}
