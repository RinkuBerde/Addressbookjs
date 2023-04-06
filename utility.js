const prompt = require('prompt-sync')();

const NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
const ADDRESS_STATE_CITY_REGEX = RegExp("^[A-Za-z]{4,}$");
const ZIP_CODE_REGEX = RegExp("^[1-9]{1}[0-9]{5}$");
const PHONE_NUMBER_REGEX = RegExp("'^[0-9]{2}|\s|[0-9]{10}$");
const EMAIL_REGEX = RegExp("^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{2,})([.][a-z]{2}){0,1}$");


class utility {

    // checkValidation () {
        
    // }

    constructor(firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        // if (NAME_REGEX.test(firstName)) {
            this.firstName = firstName;
        
        
        // if (NAME_REGEX.test(lastName)) {
             this.lastName = lastName;
        // } else {
        //     throw "Invalid Last Name!!!"
        // }
        // if (ADDRESS_STATE_CITY_REGEX.test(address)) {
            this.address = address;
        // } else {
        //     throw "Invalid Address!!!"
        // }
        // if (ADDRESS_STATE_CITY_REGEX.test(city)) {
             this.city = city;
        // } else {
        //     throw "Invalid City Name!!!"
        // }
        // if (ADDRESS_STATE_CITY_REGEX.test(state)) {
            this.state = state;
        // } else {
        //     throw "Invalid City Name!!!"
        // }
        // if (ZIP_CODE_REGEX.test(zipCode)) {
            this.zipCode = zipCode;
        // } else {
        //     throw "Invalid Zip Code!!!"
        // }
        // if (PHONE_NUMBER_REGEX.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        // } else {
        //     throw "Invalid Phone Number!!!"
        // }
        // if (EMAIL_REGEX.test(email)) {
            this.email = email;
        // } else {
        //     throw "Invalid Email Address!!!"
        // }

    }
    toString() {
        return " First Name : " + this.firstName + " , Last Name " + this.lastName + " , Address : " + this.address + " , City : " + this.city +
            " , State : " + this.state + " , Zip Code : " + this.zipCode + " , Phone Number : " + this.phoneNumber + " , Email : " + this.email;
    }
}
let addressBookArray = new Array();
getContact = () => {
    let firstName = prompt("Enter First Name : ");
    let flag = true
    while(true){
        if (NAME_REGEX.test(firstName)) {
            flag = false
        } else {
           // throw "Invalid First Name!!!"
           console.log("Invalid")
           firstName = prompt("Enter First Name : ");
        }
    }
    
    

    let lastName = prompt("Enter Last Name :");
   // let address = prompt("Enter Address :");
    let city = prompt("Enter City :");
    let state = prompt("Enter State :");
    let zipCode = prompt("Enter Zip Code :");
    let phoneNumber = prompt("Enter Phone Number :");
    let email = prompt("Enter Email :");
    let contactInput = null;

    try {
        contactInput = new AddressBook(firstName, lastName, address, city, state, zipCode, phoneNumber, email);
    }
    catch (error) {
        console.error(error);
    }
    return contactInput;
};

addContact = (contact) => {
    let resultIndex = getIndexByName(contact.firstName, contact.lastName);
    if (resultIndex == -1) {
        addressBookArray.push(contact);
        console.log("Contact Added Successfully!!");
    } else {
        console.log("Could not add contact as Name already exists!!");
    }
}

viewContacts = () => {
    console.log("Select Search Parameter \n1. firstName: \n2. lastName : \n3. address:  \n4. city \n5. state \n6. zipCode \n7. phoneNumber \n8. email");
    let option = prompt("Enter your choice : ");
    switch (option) {
        case "1": addressBookArray.filter(contact => contact.firstName == contact.firstName).forEach(contact => console.log("firstName: " + contact.firstName))
            break;
        case "2":
            addressBookArray.filter(contact => contact.lastName == contact.lastName).forEach(contact => console.log("lastName: " + contact.lastName))
            break;
        case "3":
            addressBookArray.filter(contact => contact.address == contact.address).forEach(contact => console.log("address: " + contact.address))
            break;
        case "4":
            addressBookArray.filter(contact => contact.city == contact.city).forEach(contact => console.log("city: " + contact.city))
            break;
        case "5":
            addressBookArray.filter(contact => contact.state == contact.state).forEach(contact => console.log("state: " + contact.state))
            break;
        case "6":
            addressBookArray.filter(contact => contact.zipCode == contact.zipCode).forEach(contact => console.log("zipCode: " + contact.zipCode))
            break;
        case "7":
            addressBookArray.filter(contact => contact.phoneNumber == contact.phoneNumber).forEach(contact => console.log("phoneNumber: " + contact.phoneNumber))
            break;
        case "8":
            addressBookArray.filter(contact => contact.email == contact.email).forEach(contact => console.log("Email: " + contact.email))
            break;
        default: console.log("Invalid Choice!!!");
            break;
    }
}

editContact = () => {
    let firstName = prompt("Enter First Name : ");
    let lastName = prompt("Enter Last Name : ");
    let resultIndex = addressBookArray.findIndex(contact => contact.firstName == firstName && contact.lastName == lastName);
    if (resultIndex == -1) {
        console.log("Contact not Exists.")
    } else {
        addressBookArray[resultIndex] = getContact();
        console.log("Contact updated successfully!!")
    }
}

getIndexByName = (firstName, lastName) => {
    return addressBookArray.findIndex(contact => contact.firstName == firstName && contact.lastName == lastName);
}


deleteContact = () => {
    let firstName = prompt("Enter First Name which want to deleted  : ");
    let lastName = prompt("Enter Last Name which want to deleted: ");
    let index = getIndexByName(firstName, lastName);
    if (index == -1)
        console.log("Contact not Exists.")
    else {
        console.log("Contact deleted successfully!!");
        return addressBookArray.splice(index, 1);
    }
}



module.exports = new utility();