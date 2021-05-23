/**
 * This is the app Model it is decoupled from
 * the Entities used for the databse
 */
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}
