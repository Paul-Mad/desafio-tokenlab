export const calcDaysPassed = (initialDate: number, finalDate: number) =>
  Math.round(Math.abs(finalDate - initialDate) / (1000 * 60 * 60 * 24));
