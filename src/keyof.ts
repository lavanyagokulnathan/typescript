interface DepositLimit {
  min: number,
  max: number
}

interface Contact {
  name: string,
  phoneNumber: number
}

// keyof refers to instance of
// keyof DepositLimit - a variable of this type may only contain values matching the names of the properties on the DepositLimit, min and max.

const getValue = (sourceObj: DepositLimit, propertyName : keyof DepositLimit) => sourceObj[propertyName]
const limit = {min: 10, max: 1000}
const value = getValue(limit, 'min')

// Convert above getValue method as generic

const getValueGeneric = <T>(sourceObj : T, propertyName : keyof T) => sourceObj[propertyName]
const contact1 = {name: 'test', phoneNumber: 12345}
const contactName = getValueGeneric(contact1, 'name')
console.log(contactName)
