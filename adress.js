
// var readlineSync = require('readline-sync');
const prompt = require('prompt-sync')();
const  AddressBook = require('./utility.js')

    console.log(" Welcome to Address Book Application.")
    while (true) {
        console.log("Menu\n1. Add Contact\n2. Display Contacts\n3. Edit Contact\n4. Delete Contact\n5. View Contacts\n6. Get Total Contact Count");
        let choice = prompt("Enter your choice : ");
        switch (choice) {
            case "1": AddressBook.addContact(getContact());
                break;
            case "2":
                console.log(addressBookArray);

                break;
            case "3": AddressBook.editContact();
                break;
            case "4": AddressBook.deleteContact();
                break;
            case "5":
                AddressBook.viewContacts();
                break;
            case "6": console.log(" Total Contacts Present In Array is : " + AddressBook.getTotalContactCount());
                break;

            default: console.log("Invalid Choice!!!");
                break;
        }

    }

//addressBookOp()





