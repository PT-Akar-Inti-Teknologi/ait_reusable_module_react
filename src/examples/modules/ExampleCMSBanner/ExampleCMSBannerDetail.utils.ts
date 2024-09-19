
export function formatDate(isoString: string): string {
  const date = new Date(isoString);

  const year = date.getFullYear();
  // getMonth() returns 0-11; adding 1 to match the human-readable format and padStart to add leading zero if needed
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  // Example format: "2024-06-11"
  return `${year}/${month}/${day}  ${hour}:${minute}`;
}
