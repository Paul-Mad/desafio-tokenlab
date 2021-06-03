export const calcDaysPassed = (initialDate: number, finalDate: number) =>
  Math.round(Math.abs(finalDate - initialDate) / (1000 * 60 * 60 * 24));

export const inputDateString = (inputDate: number) => {
  const date = new Date(inputDate);

  return [date.getFullYear(), date.getUTCMonth() + 1, date.getUTCDate()]
    .map((d) => (d < 10 ? "0" + d : d))
    .join("-");
***REMOVED***
