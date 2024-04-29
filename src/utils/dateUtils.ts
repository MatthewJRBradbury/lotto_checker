export function formatSimpleDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based in JavaScript
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
