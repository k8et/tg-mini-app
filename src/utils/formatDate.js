export function formatDate(inputDate) {
  const months = [
    "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
  ];

  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(months[date.getMonth()]);
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
