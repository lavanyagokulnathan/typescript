type ContactName = string;

type ContactBirthDate = Date | number | string

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

//Create a contact with address all the time
interface Contact1 extends Address {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: string;
}

// What if we want to have two different types of contacts: one with address properties and one without?

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: string;
}
type AddressableContact = Contact & Address

