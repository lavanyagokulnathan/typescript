# primitive types
let age : number = 18;

# Interface - used to create custom types
interface Contact extends Address {
  id: number,
  name: string,
  birthDate?: Date  // use ? to make the field optional
}

interface Address {
  line1: string,
  line2: string,
  province: string,
  postalCode: string
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
    line1: "house number",
    line2: "street name",
    postalCode: 'postalcode',
    province: 'province'
}
