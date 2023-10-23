// primitive types https://github.com/LinkedInLearning/typescript-EssT-2428199/
let age : number = 18;
type birthDateType = string | Date | number // type is used to create custom alias

// Interface - used to create custom types
interface Contact extends Address {
  id: number,
  name: string,
  birthDate?: birthDateType  // use ? to make the field optional
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

const getNextItems = <T extends {id: number}>(items: T[]) => {          
  return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

//Enum 

interface Todo {
    id: number
    title: string
    status: TodoStatus
    completedOn?: Date
}

enum TodoStatus {
    Todo = "todo",
    InProgress = "in-progress",
    Done = "done"
}

const todoItems: Todo[] = [
    { id: 1, title: "Learn HTML", status: TodoStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: TodoStatus.Todo }
  ]







