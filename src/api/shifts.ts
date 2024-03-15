import { Shift } from "../types/Shifts";



export const fetchShifts = async ():Promise<Shift[]> => {
  const response = await fetch('https://run.mocky.io/v3/91a019a1-318a-45a9-a251-d1df1712a647');
  return response.json();
}