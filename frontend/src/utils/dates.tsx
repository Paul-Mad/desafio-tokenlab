export const calcDaysPassed = (initialDate: number, finalDate: number) =>
  Math.round(Math.abs(finalDate - initialDate) / (1000 * 60 * 60 * 24));

export const inputDateString = (inputDate: number) => {
  const day = new Date(inputDate).getUTCDate();
  let month = new Date(inputDate).getUTCMonth();
  month = month + 1;
  const year = new Date(inputDate).getUTCFullYear();

  const newDate = `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;

  return newDate;
***REMOVED***
