let createContact = require("./contact");
let getContacts = require("./contactCollection");

//1. get contacts sfrom ls
//2. iterate over them
//3. render them to the DOM
function listContacts(){
getContacts().forEach (contact =>{
    let contactComponent = createContact(contact.name,contact.phone, contact.address);
function writetotheDOM(contactComponent)
});
}

{
 document.querySelector("#list").innerHTML += contact;
};
module.exports = listContacts;