import { Person } from "../types/People";

export const fetchPeople = async ():Promise<Person[]> => {
    const response = await fetch('https://run.mocky.io/v3/0c0c684d-f6cb-4832-b5f4-16c6796f950f');
    return response.json();
}
